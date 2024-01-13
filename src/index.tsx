import { getModule, getByName, getByProps } from 'enmity/metro';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { React, StyleSheet } from 'enmity/metro/common';
import { getBoolean } from 'enmity/api/settings';
import { PronounManager as PM, ArrayImplementations as ArrayOps } from './common';
import manifest from "../manifest.json"
import Settings from './components/Settings/Settings';
import { findInReactTree } from "enmity/utilities"
import Pronoun from './components/Dependent/Pronoun';

const Patcher = create("pronoun-db")

const UserProfile = getModule(x => x?.type?.name == "UserProfile")
const UserStore = getByProps("getUser");
const ReactNative = getByProps("View") as typeof import("react-native");
const { DCDChatManager } = ReactNative.NativeModules;

const styles = StyleSheet.createThemedStyleSheet({
    opTagBackgroundColor: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY
    },
    opTagTextColor: {
        color: Constants.ThemeColorMap.BACKGROUND_PRIMARY
    },
    mention: {
        color: Constants.ThemeColorMap.BACKGROUND_MENTIONED_HOVER
    }
})

const PronounDB: Plugin = {
    ...manifest,
 
    onStart() {
        Patcher.before(UserStore, "getUser", (_, args, __) => {
            /**
             * @param {string} id: The main ID of the user
             */
            const id: string = args[0];

            /**
             * Inserts the id to the queue at the end of the queue if the id was not found in the PronounManager's Map.
             * This is esentially a push to the queue array but as a custom implementation
             */
            if (!PM.map[id]) ArrayOps.insertItem(PM.queue, id, PM.queue.length, "user id pronoun queue")
            PM.updateQueuedPronouns();
        });

        Patcher.after(UserProfile, "type", (_, __, res) => {
            const profileCardSection = findInReactTree(res, r => 
                r?.type?.displayName === "View" &&
                r?.props?.children.findIndex(i => i?.type?.name === "UserProfileBio") !== -1
            )?.props?.children

            if (!profileCardSection) return res;

            const { userId } = profileCardSection?.find((r: any) => typeof r?.props?.displayProfile?.userId === "string")?.props?.displayProfile ?? {};

            if (/**
                 * If this is true, @arg userId was not found.
                 */
                !userId
                /**
                 * If this is true, @arg userId was found but it is not in the @PronounManager map.
                 */
                || !PM.map[userId]
                /**
                 * If this is true, @arg userId was found and is in the @PronounManager map but the @pronoun is @unspecified
                 */
                || PM.referenceMap[PM.map[userId]] === "unspecified"
            ) return res

            /**
             * @param {string} pronoun: The main pronoun in @plainText ~ This *should not be undefined*
             */
            const pronoun: string = PM.referenceMap[PM.map[userId]]

            profileCardSection.unshift(<Pronoun pronoun={pronoun} />)
        })
        
        Patcher.before(DCDChatManager, "updateRows", (_, args, __) => {
            const rows = JSON.parse(args[1]);

            for ( const row of rows ) {
                if (/**
                     * If this is true, the @arg row is not a @arg message (different types)
                     */
                    row.type !== 1
                    /** 
                     * If this is true, the @arg row does not have a valid @arg {Author ID}. 
                     */
                    || !row?.message?.authorId
                    /**
                     * If this is true, the @arg row has a valid @arg {Author ID}, but it is not in the map which means it hasn't been fetched yet.
                     */
                    || !PM.map[row?.message?.authorId]
                    /**
                     * If this is true, this means @arg row has a valid @arg {Author ID}, and it is in the map, but the pronoun is @arg unspecified.
                     */
                    || PM.referenceMap[PM.map[row?.message?.authorId]] === "unspecified"
                ) continue;

                /**
                 * @param {string} pronoun: The main pronoun in @plainText ~ This *should not be undefined*
                 */
                const pronoun: string = PM.referenceMap[PM.map[row.message.authorId]];

                if (getBoolean(manifest.name, "isTimestamp", false) && row.message.timestamp) {
                    row.message.timestamp += (" • " + pronoun);
                    continue;
                }

                if (row.message.opTagText) {
                    row.message.tagText = (
                        row.message.tagText 
                            ? row.message.tagText + " • " 
                            : ""
                        + row.message.opTagText)
                }

                row.message.opTagText = pronoun;
                row.message.opTagTextColor = ReactNative.processColor(styles.opTagTextColor.color);
                row.message.opTagBackgroundColor = ReactNative.processColor(styles.opTagBackgroundColor.color);
            }

            args[1] = JSON.stringify(rows);
        });
    },
 
    onStop() {
        Patcher.unpatchAll();
    },
 
    getSettingsPanel() {
        return <Settings manifest={manifest} />;
    }
};
 
registerPlugin(PronounDB);
