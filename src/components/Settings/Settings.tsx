/**
 * Imports
 * @param Constants: Used to get Colors or Fonts etc from Discord's Constants
 * @param React: The main React implementation to do functions such as @arg React.useState or @arg React.useEffect
 * @param StyleSheet: Used to create style sheets for React components
 * @param {* from enmity/components}: ReactNative components used inside of the settings panel
 * @param { getBoolean, set }: Allows for getting and setting booleans for a settings store.
 * @param Credits: The main Credits component
 * @param SectionWrapper: An implementation similar to FormSection but anything is renderable.
 * @param Icons: Icons used throughout the component
 * @param Miscellaneous: Random methods and constants that may be useful
 * @param Updater: Allows to search for updates for @arg PronounDB.
 * @param getByProps: Allows to get a module by its properties
 */
import { StyleSheet, Constants, React } from "enmity/metro/common";
import { FormRow, View, Text, ScrollView, FormDivider, FormSwitch } from "enmity/components";
import { getBoolean, set } from "enmity/api/settings";
import IntelligentImage from "../Dependent/IntelligentImage";
import Credits from "../Dependent/Credits";
import SectionWrapper from "../Dependent/SectionWrapper";
import { Icons, Miscellaneous, Updater } from "../../common";
import { getByProps } from "enmity/metro";

/** 
 * Main modules being fetched by the plugin to open links externally and copy text to clipboard
 * @param Router: This is used to open a url externally with @arg Router.openURL ~
 */
const Router = getByProps('transitionToGuild')

/**
 * @param {StyleSheet} styles: The main stylesheet for the items in the UI.
 */
const styles = StyleSheet.createThemedStyleSheet({
   /**
    * @param {object} icon: Global style for icons to give them a neutral color scheme and ensure they fit together well.
    */
   icon: {
       color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
   },
   /**
    * @param {object} item: Style for trailing text to give it the Muted color, and contrast the normal colour of the text.
    */
   item: {
       color: Constants.ThemeColorMap.TEXT_MUTED,
       fontFamily: Constants.Fonts.PRIMARY_MEDIUM
   },
   /**
    * @param {object} container: Main style for a rounded container for creating custom FormSection implementations.
    */
   container: {
      width: "90%",
      marginLeft: '5%',
      borderRadius: 10,
      backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
      ...Miscellaneous.shadow() /** @param shadow: Main shadow implementation */
   },
   /**
    * @param {object} subheaderText: Main styling for the text right at the bottom of the settings page, showing build and release channel.
    */
   subheaderText: {
       color: Constants.ThemeColorMap.HEADER_SECONDARY,
       textAlign: 'center',
       margin: 10,
       marginBottom: 50,
       letterSpacing: 0.25,
       fontFamily: Constants.Fonts.PRIMARY_BOLD,
       fontSize: 14
   },
   /**
    * @param {object} image: The main generic styles for an image component defining a @width and @maxWidth
    */
   image: {
      width: "100%",
      maxWidth: 350,
      borderRadius: 10
   }
});

/**
 * Main @arg Settings page implementation
 * @param manifest: The main plugin manifest passed donw as a prop.
 */
export default ({ manifest }) => {
   /**
    * @param {Getter, Setter}: Whether the preview image should show the timestamp or the op tag mode.
    */
   const [timestampPreview, setTimestampPreview] = React.useState(getBoolean(manifest.name, "isTimestamp", false))
   const [rolePreview, setRolePreview] = React.useState(getBoolean(manifest.name, "isRole", true))

   return <ScrollView>
      {/**
       * The main credits component, to render information about the project in a form factor which is pleasing to the eyes.
       * @param Credits: The main credits component.
       * 
       * @uses @param name
       * @uses @param version
       * @uses @param plugin 
       * @uses @param authors
       */}
      <Credits 
         name={manifest.name}
         version={manifest.version}
         plugin={manifest.plugin}
         authors={manifest.authors}
      /> 
      <View style={{marginTop: 20}}>
         {/**
          * The main "timestamp section" of the settings panel. This section is where the user can:
                  * @arg {enable/disable timestamps}
            * This is wrapped in an @arg SectionWrapper which works similar to an @arg FormSection but allows you to render any styling.
         */}
         <SectionWrapper label='Preferences'>
            {/**
               * The main section of available options to be selected by the User.
               */}
            <View style={[styles.container]}>
               {/**
                * The main timestamp button. This would allow the user to toggle between showing the pronoun in a OP tag and inside the timestamp instead
                * @uses @param {number} Icons.Settings.Update: The main @arg update icon.
                */}
               <FormRow
                  label="Timestamps"
                  subLabel="Use Timestamps instead of OP Tag for the pronoun in the chat area."
                  onLongPress={() => Miscellaneous.displayToast(`By default, ${manifest.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Locale} />}
                  trailing={<FormSwitch
                     value={getBoolean(manifest.name, "isTimestamp", false)}
                     onValueChange={() => {
                        set(manifest.name, "isTimestamp", !getBoolean(manifest.name, "isTimestamp", false))
                        setTimestampPreview(getBoolean(manifest.name, "isTimestamp", false))
                     }}
                  />}
               />
               <FormDivider />
               {/**
                * The main update button. This would allow the user to search the github for the latest release and check if it is the current release installed, and prompts the user to update if it isnt.
                * @uses @param {number} Icons.Settings.Update: The main @arg update icon.
                */}
               <FormRow
                  label="Roles"
                  subLabel="Show the pronoun styled as a role instead of plain text inside of profiles."
                  onLongPress={() => Miscellaneous.displayToast(`With this option enabled, ${manifest.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Edit} />}
                  trailing={<FormSwitch
                     value={getBoolean(manifest.name, "isRole", true)}
                     onValueChange={() => {
                        set(manifest.name, "isRole", !getBoolean(manifest.name, "isRole", true))
                        setRolePreview(getBoolean(manifest.name, "isRole", true))
                     }}
                  />}
               />
            </View>
         </SectionWrapper>
         {/**
          * The main "preview section" of the settings panel. This section is where the user can:
          *       * @arg {view a preview of the pronoun in both the chat area and profile}
              * This is wrapped in an @arg SectionWrapper which works similar to an @arg FormSection but allows you to render any styling.
          */}
         <SectionWrapper label='Previews'>
            {/**
               * The main timestamp image preview, which is either a timestamp or tag pronoun preview.
               */}
            <View style={{
               ...styles.container,
               maxWidth: 350
            }}>
               {/**
                * This custom "intelligent" image implementation allows for setting a @dynamic height based on a calculated @aspectRatio and a @width
                * A @maxWidth is also @optional and is taken into account when ran. A @width must be set in the @style property for the image to apply correctly.
                */}
               <IntelligentImage 
                  style={styles.image}
                  source={`https://cdn.discordapp.com/attachments/${timestampPreview
                     ? "1011346757214543875/1075007230337896448/pronoun-timestamp.png"
                     : "1011346757214543875/1075007230107193374/pronoun-tag.png"
                  }`}
               />
            </View>
            {/**
               * The main profile image preview, which is either a role or plaintext.
               */}
            <View style={{
               ...styles.container, 
               marginTop: 10,
               maxWidth: 350
            }}>
               {/**
                * This custom "intelligent" image implementation allows for setting a @dynamic height based on a calculated @aspectRatio and a @width
                * A @maxWidth is also @optional and is taken into account when ran. A @width must be set in the @style property for the image to apply correctly.
                */}
               <IntelligentImage
                  style={styles.image}
                  source={`https://cdn.discordapp.com/attachments/${rolePreview
                     ? "1011346757214543875/1075007778399199282/profile-role.png"
                     : "1011346757214543875/1075007778067841044/profile-plain.png"
                  }`}
               />
            </View>
         </SectionWrapper>
         {/**
          * The main "source section" of the settings panel. This section is where the user can:
                  * @arg {check for updates}
                  * @arg {open the repo of the plugin}
            * This is wrapped in an @arg SectionWrapper which works similar to an @arg FormSection but allows you to render any styling.
          */}
         <SectionWrapper label='Source'>
            {/**
               * The main section of available options to be selected by the User.
               */}
            <View style={styles.container}>
               {/**
                * The main update button. This would allow the user to search the github for the latest release and check if it is the current release installed, and prompts the user to update if it isnt.
                * @uses @param {number} Icons.Settings.Update: The main @arg update icon.
                */}
               <FormRow
                  label="Check for Updates"
                  subLabel={`Search for any ${manifest.name} updates and notify you if an update is available.`}
                  onLongPress={() => Miscellaneous.displayToast(`Search GitHub for any new version or build of ${manifest.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Update} />}
                  trailing={() => <FormRow.Arrow />}
                  onPress={ async function() {
                     /**
                      * Simply calls the @func Updater.checkForUpdates function asynchronously. This is a whole seperate documented file located at src/commmon/update.ts 
                      * This would check for any updates to the version or build and prompt the user to update if any are found.
                      */
                     await Updater.checkForUpdates();
                  }}
               />
               <FormDivider />
               {/**
               * The main repository. This would allow the user to open an external window inside of Discord using Router and display the current PronounDB repo, on GitHub.
               * @uses @param {number} Icons.Open: The main @arg {external} open icon.
               */}
               <FormRow
                  label="Source"
                  subLabel={`Open the repository of ${manifest.name} externally.`}
                  onLongPress={() => Miscellaneous.displayToast(`Opens the repository of ${manifest.name} on GitHub in an external page to view any source code of the plugin.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Open} />}
                  trailing={() => <FormRow.Arrow />}
                  onPress={() => {
                     /**
                      * Simply opens the plugin repository externally to the user using the Router.
                      * @uses @param {string} plugin.repo: The blob link of the plugin.
                      */
                     Router.openURL(manifest.plugin.repo)
                  }}
               />
               <FormDivider />
               {/**
               * The main PronounDB website. This would allow the user to open an external window inside of Discord using Router and display the current PronounDB website, and link their account etc.
               * @uses @param {number} Icons.Settings.External: The main @arg {external} open icon.
               */}
               <FormRow
                  label="PronounDB"
                  subLabel={`Open the ${manifest.name} website externally at \`https://pronoundb.org\`.`}
                  onLongPress={() => Miscellaneous.displayToast(`Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.External} />}
                  trailing={() => <FormRow.Arrow />}
                  onPress={() => {
                     /**
                      * Simply opens the PronounDB website externally to the user using the Router.
                      * @uses @param {string} plugin.pronoundb: The PronounDB website.
                      */
                     Router.openURL(manifest.plugin.pronoundb)
                  }}
               />
            </View>
         </SectionWrapper>
      </View>
      {/**
       * Renders a simple FormRow with a version and build to display to the user. This is unnecessary as there as multiple ways to view this but it adds slightly more polish to the Settings Panel.
       */}
      <Text style={styles.subheaderText}>
         {`Build: (${manifest.plugin.hash}) Release: (${manifest.release})`}
      </Text>
   </ScrollView>
}