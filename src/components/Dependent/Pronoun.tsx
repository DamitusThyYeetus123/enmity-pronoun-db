import { getBoolean } from "enmity/api/settings";
import { View, Text, TouchableOpacity } from "enmity/components";
import { Constants, React, StyleSheet, Toasts } from "enmity/metro/common";
import { Icons } from "../../common";
import manifest from "../../../manifest.json"

const styles = StyleSheet.createThemedStyleSheet({
    container: {
        marginTop: 12,
        marginLeft: 12,
        alignSelf: 'flex-start'
    },
    eyebrow: {
        textTransform: 'uppercase',
        fontSize: 12,
        lineHeight: 16,
        fontFamily: Constants.Fonts.PRIMARY_BOLD,
        color: Constants.ThemeColorMap.TEXT_NORMAL,

        marginBottom: 10
    },
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
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        backgroundColor: Constants.ThemeColorMap.HEADER_PRIMARY,

        marginLeft: 8,
        marginRight: 6
    },
    content: {
        fontSize: 14,
        
        paddingRight: 8,
        paddingTop: 8,
        paddingBottom: 8,
    },
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
export default ({ pronoun }: { pronoun: string }) => {
    return <View style={styles.container}>
        <Text style={styles.eyebrow}>
            Pronouns
        </Text>
        <TouchableOpacity onPress={() => Toasts.open({
            content: pronoun,
            source: Icons.Pronoun
        })}>
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