/**
 * Imports
 * @param { getBoolean }: Allows for getting booleans for a settings store.
 * @param {* from enmity/components}: Basic ReactNative components used inside of the component
 * @param Constants: Used to get Colors or Fonts etc from Discord's Constants
 * @param React: The main React implementation to do functions such as @arg React.useState or @arg React.useEffect
 * @param StyleSheet: Used to create style sheets for React components
 * @param Icons: Main icons used throughout @PronounDB
 * @param manifest: The main object containing important information about the plugin such as name, version, etc
 */
import { getBoolean } from "enmity/api/settings";
import { View, Text, TouchableOpacity } from "enmity/components";
import { Constants, React, StyleSheet, Toasts } from "enmity/metro/common";
import { Icons } from "../../common";
import manifest from "../../../manifest.json"

/**
 * @param styles: The main stylesheet for this component
 */
const styles = StyleSheet.createThemedStyleSheet({
    /**
     * @param {object} container: The main container for the pronoun, which displaces everything inside from the top and left
     */
    container: {
        marginTop: 12,
        marginLeft: 12,
        alignSelf: 'flex-start'
    },
    /**
     * @param {object} eyebrow: The main style for the @Pronouns text. This is what will be displayed above the @pronoun
     */
    eyebrow: {
        textTransform: 'uppercase',
        fontSize: 12,
        lineHeight: 16,
        fontFamily: Constants.Fonts.PRIMARY_BOLD,
        color: Constants.ThemeColorMap.TEXT_NORMAL,

        marginBottom: 10
    },
    /**
     * @param {object} innerContainer: The main style for the @role implementation ( which is omitted if you choose plain-text from @settings )
     */
    innerContainer: {
        backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: Constants.ThemeColorMap.HEADER_PRIMARY,

        overflow: 'hidden',
        
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    /**
     * @param {object} circle: Creates a basic circle, when applied on a view. Any children will also be enclosed in the circle.
     */
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        backgroundColor: Constants.ThemeColorMap.HEADER_PRIMARY,

        marginLeft: 8,
        marginRight: 6
    },
    /**
     * @param {object} content: Main styles for the actual @pronoun inside of the @role
     */
    content: {
        fontSize: 14,
        
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },
    /**
     * @param {object} text: Generic styling for the text, applying a @fontFamily and @color
     */
    text: {
        fontFamily: Constants.Fonts.DISPLAY_NORMAL,
        color: Constants.ThemeColorMap.TEXT_NORMAL
    }
})

/**
 * Main @Pronoun component implementation.
 * @param pronoun: The pronoun of the user, passed as a string
 * @returns TSX Component
 */
export default ({ pronoun }) => {
    return <View style={styles.container}>
        <Text style={styles.eyebrow}>
            Pronouns
        </Text>
        <TouchableOpacity onPress={() => Toasts.open({
            /**
             * @param content: The @pronoun in this case, a string
             */
            content: pronoun,
            /**
             * @param source: @uses Icons.Pronoun: Main icon for the pronoun (secretly a nitro boost badge)
             */
            source: Icons.Pronoun
        })}>
            {/**
             * If the user has toggled on the @isRole option in settings, then display the @pronounn as a @role
             * Otherwise, display it as @plainText
             */}
            {getBoolean(manifest.name, "isRole", true) 
                ? <View style={styles.innerContainer}>
                    <View style={styles.circle} />
                    <Text style={[styles.text, styles.content]}>
                        {pronoun}
                    </Text>
                </View> 
                : <Text style={[styles.text, { fontSize: 16 }]}>
                    {pronoun}
                </Text>}
        </TouchableOpacity>
    </View>
}