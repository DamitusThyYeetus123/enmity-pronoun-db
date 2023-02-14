import { React, Constants, StyleSheet, Profiles } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { TouchableOpacity, View, Image, Text } from 'enmity/components';
import { ArrayImplementations as ArrayOps, Miscellaneous } from '../../common';

// @ts-ignore
const { Animated } = window.enmity.modules.common.Components.General

const Router = getByProps('transitionToGuild')
const UserStore = getByProps("getUser", "getCurrentUser")

const styles = StyleSheet.createThemedStyleSheet({
    container: {
        marginTop: 25,
        marginLeft: '5%',
        marginBottom: -15,
        flexDirection: "row"
    },
    textContainer: {
        paddingLeft: 15,
        paddingTop: 5,
        flexDirection: 'column',
        flexWrap: 'wrap',
        ...Miscellaneous.shadow()
    },
    image: {
        width: 75,
        height: 75,
        borderRadius: 10,
        ...Miscellaneous.shadow()
    },
    mainText: {
        opacity: 0.975,
        letterSpacing: 0.25
    },
    header: {
        color: Constants.ThemeColorMap.HEADER_PRIMARY,
        fontFamily: Constants.Fonts.DISPLAY_BOLD,
        fontSize: 25,
        letterSpacing: 0.25
    },
    subHeader: {
        color: Constants.ThemeColorMap.HEADER_SECONDARY,
        fontSize: 12.75,
    }
});

type ManifestType = typeof import("../../../manifest.json")
interface CreditsProps {
    name: ManifestType["name"],
    version: ManifestType["version"],
    plugin: ManifestType["plugin"],
    authors: ManifestType["authors"]
}

/**
 * 
 */
export default ({ name, version, plugin, authors }: CreditsProps) => {
    const animatedButtonScale = React.useRef(new Animated.Value(1)).current;

    const onPressIn = (): void => Animated.spring(animatedButtonScale, {
        toValue: 1.1,
        duration: 10,
        useNativeDriver: true,
    }).start();

    const onPressOut = (): void => Animated.spring(animatedButtonScale, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
    }).start();

    const onPress = (): void => Profiles.showUserProfile({ userId: UserStore.getCurrentUser().id });

    const animatedScaleStyle = {
        transform: [
            {
                scale: animatedButtonScale
            }
        ]
    };
    
    return <>
        <View style={styles.container}>
            <TouchableOpacity 
                onPress={onPress}
                onPressIn={onPressIn}
                onPressOut={onPressOut}
            >
                <Animated.View style={animatedScaleStyle}>
                    <Image
                        style={[styles.image]}
                        source={{
                            uri: UserStore?.getCurrentUser()?.getAvatarURL()?.replace("webp", "png"), 
                        }}
                    />
                </Animated.View>
            </TouchableOpacity>
            <View style={styles.textContainer}>
                <TouchableOpacity onPress={(): void => Router.openURL(plugin.repo)}>
                    <Text style={[styles.mainText, styles.header]}>
                        {name}
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection: 'row'}}>
                    <Text style={[styles.mainText, styles.subHeader]}>
                        A project by 
                    </Text>
                    {ArrayOps.mapItem(authors, (author, index: number, authorsArray: any[]) => { 
                        return <TouchableOpacity onPress={(): void => Router.openURL(author.profile)}> 
                            <Text 
                                style={[styles.mainText, styles.subHeader, {
                                    paddingLeft: 4,
                                    fontFamily: Constants.Fonts.DISPLAY_BOLD,
                                    flexDirection: 'row'
                            }]}>
                                    {author.name}{index < (authorsArray.length - 1) ? "," : null}
                            </Text>
                        </TouchableOpacity>
                    })}
                </View>
                <View>
                    <TouchableOpacity style={{flexDirection: 'row'}}>
                        <Text style={[styles.mainText, styles.subHeader]}>
                            Version: 
                        </Text>

                        <Text style={[styles.mainText, styles.subHeader, {
                            paddingLeft: 4,
                            fontFamily: Constants.Fonts.DISPLAY_BOLD
                        }]}>
                            {version}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </>
}