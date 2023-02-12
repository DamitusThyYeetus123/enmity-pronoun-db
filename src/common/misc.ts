/** 
 * Imports 
 * @param {string} name: The name from manifest.json.
 * @param tryCallback: Function to wrap another function in a try-catch
 * @param {function} Toasts: The function to open a toast on the screen
 * @param {object} Icons: The icons exported in ./Icons
 */
import { name } from '../../manifest.json';
import tryCallback from "./try_callback";
import { Toasts } from "enmity/metro/common";
import Icons from "./icons";
import { getByProps } from 'enmity/metro';

/**
 * @param shadow: Native shadow implementation that is used throughout the entire plugin.
 * This is a function which can take in a number for the opacity, but this @param is optional.
 */
type DefaultObject = { [key: string]: string | number | DefaultObject }
const shadow = (opacity: number = 0.10): DefaultObject => ({
    shadowColor: "#000",
    shadowOffset: {
        width: 1,
        height: 4,
    },
    shadowOpacity: opacity,
    shadowRadius: 4.65,
    elevation: 8
});

/** 
 * Open a toast with the text provided saying it has been copied to clipboard or as a tooltip
 * @param {string} source: The text provided to send inside of the toast
 * @param {'clipboard | 'tooltip'} type: The type of toast to show.
 *
 * @uses @param {number} Icons.Clipboard
 * @uses @param {number} Icons.Settings.Initial
 * @returns {void}
 */
const displayToast = (source: string, type: 'clipboard' | 'tooltip'): void => {
    Toasts.open({ 
        content: type=='clipboard' ? `Copied ${source} to clipboard.` : source, 
        source: type=='clipboard' ? Icons.Clipboard : Icons.Settings.Initial 
    });
};

/**
 * @param UserStore: Variable to allow getting the current user
 */
const UserStore = getByProps("getCurrentUser")

/**
 * @param localizedImage: Uses either the current user's profile picture if UserStore.getCurrentUser is defined or my profile picture if it isn't.
 */
const localizedImage = UserStore.getCurrentUser()
    ? UserStore.getCurrentUser().getAvatarURL().replace("webp", "png")
    : "https://cdn.discordapp.com/avatars/581573474296791211/4429e2dbe2bfcfbd34fb1778c802144d.png?size=1280"

export default 
{
    shadow,
    displayToast,
    localizedImage
};