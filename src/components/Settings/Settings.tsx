import { StyleSheet, Constants, React } from "enmity/metro/common";
import { FormRow, View, Text, ScrollView, FormDivider, FormSwitch } from "enmity/components";
import { getBoolean, set } from "enmity/api/settings";
import IntelligentImage from "../Dependent/IntelligentImage";
import Credits from "../Dependent/Credits";
import SectionWrapper from "../Dependent/SectionWrapper";
import { Icons, Miscellaneous, Updater } from "../../common";
import { getByProps } from "enmity/metro";
import { version } from "enmity/api/native";

const Router = getByProps('transitionToGuild', "openURL")
const optionalMargin = parseInt(version.split(".")[0]) > 163 ? 15 : 0;

const styles = StyleSheet.createThemedStyleSheet({
   icon: {
      color: Constants.ThemeColorMap.INTERACTIVE_NORMAL
   },
   item: {
      color: Constants.ThemeColorMap.TEXT_MUTED,
      fontFamily: Constants.Fonts.PRIMARY_MEDIUM
   },
   container: {
      width: "90%",
      marginLeft: '5%',
      borderRadius: 10,
      backgroundColor: Constants.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,
      ...Miscellaneous.shadow() /** @param shadow: Main shadow implementation */
   },
   subheaderText: {
      color: Constants.ThemeColorMap.HEADER_SECONDARY,
      textAlign: 'center',
      margin: 10,
      marginBottom: 50,
      letterSpacing: 0.25,
      fontFamily: Constants.Fonts.PRIMARY_BOLD,
      fontSize: 14
   },
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
export default ({ manifest }: { manifest: typeof import("../../../manifest.json") }) => {
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
         <SectionWrapper label='Preferences'>
            <View style={[styles.container]}>
               <FormRow
                  label="Timestamps"
                  subLabel="Use Timestamps instead of OP Tag for the pronoun in the chat area."
                  onLongPress={() => Miscellaneous.displayToast(`By default, ${manifest.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Locale} />}
                  trailing={<FormSwitch
                     value={getBoolean(manifest.name, "isTimestamp", false)}
                     style={{ marginLeft: -optionalMargin }}
                     onValueChange={() => {
                        set(manifest.name, "isTimestamp", !getBoolean(manifest.name, "isTimestamp", false))
                        setTimestampPreview(getBoolean(manifest.name, "isTimestamp", false))
                     }}
                  />}
               />
               <FormDivider />
               <FormRow
                  label="Roles"
                  subLabel="Show the pronoun styled as a role instead of plain text inside of profiles."
                  onLongPress={() => Miscellaneous.displayToast(`With this option enabled, ${manifest.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Edit} />}
                  trailing={<FormSwitch
                     value={getBoolean(manifest.name, "isRole", true)}
                     style={{ marginLeft: -optionalMargin }}
                     onValueChange={() => {
                        set(manifest.name, "isRole", !getBoolean(manifest.name, "isRole", true))
                        setRolePreview(getBoolean(manifest.name, "isRole", true))
                     }}
                  />}
               />
            </View>
         </SectionWrapper>
         <SectionWrapper label='Previews'>
            <View style={{
               ...styles.container,
               maxWidth: 350
            }}>
               <IntelligentImage 
                  style={styles.image}
                  source={`https://cdn.discordapp.com/attachments/${timestampPreview
                     ? "1011346757214543875/1075007230337896448/pronoun-timestamp.png"
                     : "1011346757214543875/1075007230107193374/pronoun-tag.png"
                  }`}
               />
            </View>
            <View style={{
               ...styles.container, 
               marginTop: 10,
               maxWidth: 350
            }}>
               <IntelligentImage
                  style={styles.image}
                  source={`https://cdn.discordapp.com/attachments/${rolePreview
                     ? "1011346757214543875/1075007778399199282/profile-role.png"
                     : "1011346757214543875/1075007778067841044/profile-plain.png"
                  }`}
               />
            </View>
         </SectionWrapper>
         <SectionWrapper label='Source'>
            <View style={styles.container}>
               <FormRow
                  label="Check for Updates"
                  subLabel={`Search for any ${manifest.name} updates and notify you if an update is available.`}
                  onLongPress={() => Miscellaneous.displayToast(`Search GitHub for any new version or build of ${manifest.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Update} />}
                  trailing={() => <FormRow.Arrow style={{ marginLeft: -optionalMargin }} />}
                  onPress={ async function() {
                     await Updater.checkForUpdates();
                  }}
               />
               <FormDivider />
               <FormRow
                  label="Source"
                  subLabel={`Open the repository of ${manifest.name} externally.`}
                  onLongPress={() => Miscellaneous.displayToast(`Opens the repository of ${manifest.name} on GitHub in an external page to view any source code of the plugin.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Open} />}
                  trailing={() => <FormRow.Arrow />}
                  onPress={() => {
                     Router.openURL(manifest.plugin.repo)
                  }}
               />
               <FormDivider />
               <FormRow
                  label="PronounDB"
                  subLabel={`Open the ${manifest.name} website externally at \`https://pronoundb.org\`.`}
                  onLongPress={() => Miscellaneous.displayToast(`Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.`, 'tooltip')}
                  leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.External} />}
                  trailing={() => <FormRow.Arrow style={{ marginLeft: -optionalMargin }} />}
                  onPress={() => {
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