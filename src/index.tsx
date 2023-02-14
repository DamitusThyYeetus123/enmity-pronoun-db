/**
 * Imports
 * @param getByProps: Allows to get a module by its properties
 * @param { Plugin, registerPlugin }: The main object type for a Plugin and a function to register the plugin.
 * @param create: Allows to create a patcher instance
 * @param Constants: Used to get Colors or Fonts etc from Discord's Constants
 * @param React: The main React implementation to do functions such as @arg React.useState or @arg React.useEffect
 * @param StyleSheet: Used to create style sheets for React components
 * @param getBoolean: Allows to get a boolean value from a plugin settings store
 * @param Miscellaneous: Random methods and constants that may be useful
 * @param PronounManager: The main object containing all of the items required for PronounDB to function
 * @param ArrayImplementations: Main Custom Array Manipulation Implementations class which contains a bunch of static methods
 * @param manifest: The main object containing important information about the plugin such as name, version, etc
 * @param Settings: The main Settings page component
 * @param {* from enmity/components}: Basic exported react native components that can be used
 * @param findInReactTree: Allows to traverse a react tree and find a given object or value
 */
import { getByProps } from 'enmity/metro';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { getBoolean } from 'enmity/api/settings';
import { PronounManager as PM, ArrayImplementations as ArrayOps, Bulk } from './common';
import manifest from "../manifest.json"
import Settings from './components/Settings/Settings';
import { findInReactTree } from "enmity/utilities"
import Pronoun from './components/Dependent/Pronoun';

/**
 * @param Patcher: The main plugin's patcher to allow patching modules
 */
const Patcher = create("pronoun-db")

/**
 * @param UserProfile: Top-level @component to patch for pronouns in the @profile :3
 * @param UserStore: Allows for getting a user, patched later
 * @param ReactNative: Main ReactNative implementation
 * @param DCDChatManager: Allows to patch @arg updateRows which lets me modify the stringified json of a message in the chat area.
 */
const UserProfile = getByProps("PRIMARY_INFO_TOP_OFFSET")
const UserStore = getByProps("getUser");
const ReactNative = getByProps("View") as typeof import("react-native");
const { DCDChatManager } = ReactNative.NativeModules;

/**
 * @param styles: Main themed styleSheet for the OP tag background color
 */
const styles = StyleSheet.createThemedStyleSheet({
    /**
     * @param {object} opTagBackgroundColor: The main color of the background of the OP-tag.
     */
    opTagBackgroundColor: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY
    },
    /**
     * @param {object} opTagTextColor: The main color of the background of the OP-tag.
     */
    opTagTextColor: {
        color: Constants.ThemeColorMap.BACKGROUND_PRIMARY
    }
})

const PronounDB: Plugin = {
    ...manifest,
 
    onStart() {
        Patcher.before(UserStore, "getUser", (_, args, __) => {
            /**
             * @param {string} id: The main ID of the user
             */
            const id = args[0];

            /**
             * Inserts the id to the queue at the end of the queue if the id was not found in the PronounManager's Map.
             * This is esentially a push to the queue array but as a custom implementation
             */
            if (!PM.map[id]) ArrayOps.insertItem(PM.queue, id, PM.queue.length, "user id pronoun queue")

            /**
             * Finally, call the function to update the pronouns map.
             */
            PM.updateQueuedPronouns();
        });

        Patcher.after(UserProfile.default, "type", (_, __, res) => {
            /**
             * Get the full object of items from the @user profile based on parameters that the object contains
             * This would return an @array of @objects which include the @aboutMe and @note etc.
             * The @filter itself searches for an object where:
                * @arg one of its @props.children contains a userId which is a string,
                * @arg the @type.displayName is identical to "View"
                * @arg props.style is an @array ( it is an @array of @objects )
             */
            const profileCardSection = findInReactTree(res, r => Bulk.allIfStatement(
                r?.props?.children.find((res: any) => typeof res?.props?.displayProfile?.userId === "string"),
                r?.type?.displayName === "View",
                Array.isArray(r?.props?.style)
            ))?.props?.children

            /**
             * @returns early if it cannot find a valid @object which fits all of the defined @conditions in the @func Bulk.allIfStatement.
             */
            if (!profileCardSection) return res;

            /**
             * @param {string} userId: Attempts to get the @userId from the @aboutMe section's @displayProfile
             * This is all filled with @implementation {Optional Chaining} as a crash is unwanted.
             */
            const userId = profileCardSection[0]?.props?.displayProfile?.userId

            /**
             * Also @returns early if @any of the following return true
             */
            if (Bulk.anyIfStatement(
                /**
                 * If this is true, @arg userId was not found.
                 */
                !userId,
                /**
                 * If this is true, @arg userId was found but it is not in the @PronounManager map.
                 */
                !PM.map[userId],
                /**
                 * If this is true, @arg userId was found and is in the @PronounManager map but the @pronoun is @unspecified
                 */
                PM.referenceMap[PM.map[userId]] === "unspecified"
            )) return res

            /**
             * @param {string} pronoun: The main pronoun in @plainText ~ This *should not be undefined*
             */
            const pronoun = PM.referenceMap[PM.map[userId]]

            /**
             * Otherwise ( thereof @finally ), insert the @Pronoun component at the top of the list.
             */
            profileCardSection.unshift(<Pronoun pronoun={pronoun} />)
        })

        Patcher.before(DCDChatManager, "updateRows", (_, args, __) => {
            /**
             * @param rows: The main JSON object of the message
             */
            const rows = JSON.parse(args[1]);

            /**
             * Loops through every row and modifies either @arg Timestamp or @arg {OP Tag}
             */
            for ( const row of rows ) {
                if (Bulk.anyIfStatement(
                    /**
                     * If this is true, the @arg row is not a @arg message (different types)
                     */
                    row.type !== 1, 
                    /** 
                     * If this is true, the @arg row does not have a valid @arg {Author ID}. 
                     */
                    !row?.message?.authorId, 
                    /**
                     * If this is true, the @arg row has a valid @arg {Author ID}, but it is not in the map which means it hasn't been fetched yet.
                     */
                    !PM.map[row?.message?.authorId],
                    /**
                     * If this is true, this means @arg row has a valid @arg {Author ID}, and it is in the map, but the pronoun is @arg unspecified.
                     */
                    PM.referenceMap[PM.map[row?.message?.authorId]] === "unspecified"
                )) continue;

                /**
                 * @param pronoun: The pronoun that will be displayed to the user. This should not be invalid.
                 */
                const pronoun = PM.referenceMap[PM.map[row.message.authorId]];

                /**
                 * Checks if the user has enabled the @arg isTimestamp option in settings & if there is a valid timestamp on the message
                 * If this is true, then modify the @arg timestamp only and continue to the next row, without executing the rest of the loop.
                 */
                if (getBoolean(manifest.name, "isTimestamp", false) && row.message.timestamp) {
                    row.message.timestamp += (" • " + pronoun);
                    continue;
                }

                /**
                 * Checks if there is existing @arg opTagText
                 * If there is, then it sets the tagText to either just the @arg opTagText or the existing @arg tagText with the @arg opTagText concatenated.
                 * This uses the @implementation {Nullish coalescing assignment (??=)} to do this
                 */
                if (row.message.opTagText) {
                    row.message.tagText = (row.message.tagText ? row.message.tagText + " • " : "") + row.message.opTagText
                }

                /**
                 * Sets the @arg opTagText to the @var pronoun defined above, which should now be reassignable with no worries as whatever was there was moved to the bot tag.
                 */
                row.message.opTagText = pronoun;

                /** 
                 * Afterwards set the @arg text and @arg background color to a @arg {processed and themed} color
                 * using the @arg background color to determine a @arg text color with a custom implementation.
                 */
                row.message.opTagTextColor = ReactNative.processColor(styles.opTagTextColor.color);
                row.message.opTagBackgroundColor = ReactNative.processColor(styles.opTagBackgroundColor.color);
            }
    
            /**
             * Finally, re-stringify the row.
             */
            args[1] = JSON.stringify(rows);
        });
    },
 
    onStop() {
        /**
         * Unpatches all of the patches defined earlier.
         */
        Patcher.unpatchAll();
    },
 
    getSettingsPanel() {
        /**
         * Opens the main plugin settings panel
         * @abstract Settings
         */
        return <Settings manifest={manifest} />;
    }
};
 
registerPlugin(PronounDB);