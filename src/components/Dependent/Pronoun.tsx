import { getBoolean } from "enmity/api/settings";
import { View, Text, TouchableOpacity } from "enmity/components";
import { Constants, React, StyleSheet, Toasts } from "enmity/metro/common";
import { getByName, getByProps } from "enmity/metro";
import { Icons } from "../../common";
import manifest from "../../../manifest.json"

const { useThemeContext } = getByProps("useThemeContext");
const { meta: { resolveSemanticColor } } = getByProps("colors", "meta");
const UserProfileSection = getByName("UserProfileSection");
const { ProfileGradientCard } = getByProps("ProfileGradientCard");

const styles = StyleSheet.createThemedStyleSheet({
    container: {
        alignSelf: 'flex-start',
        padding: 1,
        borderRadius: 9,
        marginTop: -4,
    },
    innerContainer: {
        paddingHorizontal: 6,
        paddingVertical: 8,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 10,
        height: 10,
        borderRadius: 10/2,
        marginRight: 6
    },
    fallback: {
        color: Constants.ThemeColorMap.BACKGROUND_SECONDARY_ALT
    },
    text: {
        fontFamily: Constants.Fonts.DISPLAY_NORMAL,
    }
})

/**
 * Main @Pronoun component implementation.
 * @param pronoun: The pronoun of the user, passed as a string
 * @returns TSX Component
 */
export default ({ pronoun }: { pronoun: string }) => {
    const themeContext = useThemeContext();
    const textColor = resolveSemanticColor(themeContext.theme, Constants.ThemeColorMap.TEXT_NORMAL);

    return <UserProfileSection title="Pronouns">
        <TouchableOpacity onPress={() => Toasts.open({
            content: pronoun,
            source: Icons.Pronoun
        })}>
            {getBoolean(manifest.name, "isRole", true) 
                ? <ProfileGradientCard style={styles.container} fallbackBackground={styles.fallback.color}>
                    <View style={styles.innerContainer}>
                        <View style={[styles.circle, { backgroundColor: textColor }]} />
                        <Text style={[styles.text, { color: textColor }]}>
                            {pronoun}
                        </Text>
                    </View>
                </ProfileGradientCard> 
                : <Text style={[styles.text, { fontSize: 16, color: textColor }]}>
                    {pronoun}
                </Text>}
        </TouchableOpacity>
    </UserProfileSection>
}