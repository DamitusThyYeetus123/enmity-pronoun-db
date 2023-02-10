import { StyleSheet, Constants, React, Storage, Toasts } from "enmity/metro/common";
import { FormRow, View, Text, ScrollView, FormDivider, FormSwitch, Image } from "enmity/components";
import { get, getBoolean, set } from "enmity/api/settings";
import Credits from "../Dependent/Credits";
import SectionWrapper from "../Dependent/SectionWrapper";
import { Icons, Miscellaneous, ArrayImplementations as ArrayOps, Updater } from "../../common";
import { renderActionSheet } from "../Modals/DebugInfoActionSheet";
import { bulk, filters } from "enmity/metro";

/** 
 * Main modules being fetched by the plugin to open links externally and copy text to clipboard
 * @param Router: This is used to open a url externally with @arg Router.openURL ~
 * @param Clipboard: This is used to copy any string to clipboard with @arg Clipboard.setString ~
 */
const [
   Router,
   Clipboard,
   LazyActionSheet
] = bulk(
   filters.byProps('transitionToGuild'),
   filters.byProps('setString'),
   filters.byProps("openLazy", "hideActionSheet")
);


export default ({ manifest }) => {
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
          width: '90%',
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
      image: {
         width: "100%",
         height: 60,
         borderRadius: 10
      }
   });
   
   const [timestampPreview, setTimestampPreview] = React.useState(getBoolean(manifest.name, "isTimestamp", false))

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
         <SectionWrapper label='Timestamps' component={<>
            {/**
               * The main section of available options to be selected by the User.
               */}
            <View style={styles.container}>
                  {/**
                   * The main update button. This would allow the user to search the github for the latest release and check if it is the current release installed, and prompts the user to update if it isnt.
                   * @uses @param {number} Icons.Settings.Update: The main @arg update icon.
                   */}
                  <FormRow
                     label="Timestamps"
                     subLabel="Use Timestamps instead of OP/Bot Tag for the pronoun in the chat area."
                     onLongPress={() => Miscellaneous.displayToast(`By default, ${manifest.name} will use the OP tag, and the Bot tag when this is unavailable. By toggling this option, ${manifest.name} will always use Timestamps instead of OP/Bot tag for the pronouns.`, 'tooltip')}
                     leading={<FormRow.Icon style={styles.icon} source={Icons.Settings.Locale} />}
                     trailing={<FormSwitch
                        value={getBoolean(manifest.name, "isTimestamp", false)}
                        onValueChange={() => {
                           set(manifest.name, "isTimestamp", !getBoolean(manifest.name, "isTimestamp", false))
                           setTimestampPreview(getBoolean(manifest.name, "isTimestamp", false))
                        }}
                     />}
                  />
            </View>
         </>} />
         <SectionWrapper label='Preview' component={<>
            {/**
               * The main section of available options to be selected by the User.
               */}
            <View style={styles.container}>
                  <Image
                     style={styles.image}
                     source={{
                           /**
                            * The image used for the @arg Image.
                            * @param uri: Can be either an @arg URI, which is what is provided, or it can be an @arg require.
                            */
                           uri: `https://cdn.discordapp.com/attachments/${timestampPreview
                              ? "1011346757214543875/1073350999445614694/timestamp-pronoun.png"
                              : "1011346757214543875/1073351873530183690/tag-pronoun.png"
                           }`
                     }}
                     resizeMode={"contain"}
                  />
            </View>
         </>} />
         {/**
          * The main "utility section" of the settings panel. This section is where the user can:
                  * @arg {copy full debug log to clipboard}
                  * @arg {clear any stores of data that might have been saved throughout plugin lifetime} 
            * This is wrapped in an @arg SectionWrapper which works similar to an @arg FormSection but allows you to render any styling.
         */}
         <SectionWrapper label='Utility' component={<>
            {/**
               * The main section of available options to be selected by the User.
               */}
            <View style={styles.container}>
                  {/**
                   * The main debug info log. This would allow the user to copy a part or the entire log to clipboard.
                   * @uses @param {number} Icons.Copy: The @arg toast initialisation icon.
                   * @uses @param {number} Icons.Settings.Toasts.Settings: The @arg tick icon.
                   */}
                  <FormRow
                     label='Open Debug Info'
                     subLabel={`Open useful page to copy debug information like version and build of ${manifest.name} to clipboard.`}
                     onLongPress={() => Miscellaneous.displayToast(`Copy the full debug log to clipboard including ${manifest.name}'s Version, Build, and Release, Enmity's Version and Build, etc.`, 'tooltip')}
                     leading={<FormRow.Icon style={styles.icon} source={Icons.Copy} />}
                     trailing={() => <FormRow.Arrow />}
                     onPress={() => {
                        /**
                           * Opens an @arg ActionSheet to the user and passes an onConfirm and type of @arg Copy because this is inside Settings, not the Command.
                           */
                        renderActionSheet((debugLog: string, type: string) => {
                              /**
                               * This closes the current ActionSheet.
                               * @param LazyActionSheet.hideActionSheet: Removes the top level action sheet.
                               */
                              LazyActionSheet.hideActionSheet()
            
                              /**
                               * Set the full list of arguments wrapped in an @arg {debug} info function to format the message in a way that you can paste into Discord.
                               */
                              Clipboard.setString(debugLog);

                              /**
                               * Finally, show an @arg Toast informing the user that the debug information text has been copied to clipboard.
                               */
                              Miscellaneous.displayToast(`${type}`, 'clipboard')
                        }, "copy" /* The type being "copy" means that it'll display Copy for all the parts such as Copy Message etc. */)
                     }}
                  />
                  <FormDivider />
                  {/**
                   * The main clear state store button. This would allow the user to clear any state from the custom dialog implementations, clear their device list, and clear their agreement to the incompatible device notice.
                   * @uses @param {number} Icons.Delete: The main @arg delete icon.
                   * @uses @param {number} Icons.Settings.Toasts.Settings: The @arg tick icon.
                   */}
                  <FormRow
                     label='Clear Stores'
                     subLabel={`Void most of the settings and stores used throughout ${manifest.name} to store data locally.`}
                     onLongPress={() => Miscellaneous.displayToast(`Clear stores and settings throughout ${manifest.name} including the settings to hide popups forever and the list of device codes.`, 'tooltip')}
                     leading={<FormRow.Icon style={styles.icon} source={Icons.Delete} />}
                     trailing={() => <FormRow.Arrow />}
                     onPress={async function() {
                        /**
                           * Fetch any existing stored state inside of the @arg PronounDBStoreState array.
                           * @param {object} storeItems: List of existing items in array form containing objects with name and type.
                           */
                        const storeItems: any = JSON.parse(get(manifest.name, "state_store", null) as string) ?? []

                        /**
                           * Loop through the stored items with a custom implementation of a forEach to allow for labels.
                           * @uses @param {object} storeItems: List of items to clear the store of, which were explicitly set with the @arg store_item.ts file.
                           */
                        await ArrayOps.forItemAsync(storeItems, async function(item: any) {
                              /**
                               * Either removes the item or sets it to false depending on whether the item type is storage or not
                               * @if {(@arg item.type) is equal to @arg {string} storage} -> Remove the item's name from storage.
                               * @else {()} -> Set the item name to @arg {override} value or @arg false as a setting.
                               */
                              item.type==='storage'
                                 ? await Storage.removeItem(item.name)
                                 : set(manifest.name, item.name, item.override ?? false)
                        }, 'clearing state store')

                        /**
                           * Remove the store to ensure it doesnt get cleared twice.
                           */
                        set(manifest.name, "state_store", null);

                        /**
                           * Finally, open an @arg Toast to notify the user that all of the stores have been cleared.
                           */
                        Toasts.open({ 
                              content: `Cleared all ${manifest.name} stores.`, 
                              source: Icons.Settings.Toasts.Settings 
                        });
                     }}
                  />
            </View>
         </>} />
         {/**
          * The main "source section" of the settings panel. This section is where the user can:
                  * @arg {check for updates}
                  * @arg {open the repo of the plugin}
            * This is wrapped in an @arg SectionWrapper which works similar to an @arg FormSection but allows you to render any styling.
         */}
         <SectionWrapper label='Source' component={<>
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
                           * Simply calls the @func Updater.checkForUpdates function asynchronously. This is a whole seperate documented script located at src/commmon/update.ts 
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
            </View>
         </>} />
      </View>
      {/**
       * Renders a simple FormRow with a version and build to display to the user. This is unnecessary as there as multiple ways to view this but it adds slightly more polish to the Settings Panel.
       */}
      <Text style={styles.subheaderText}>
         {`Build: (${(manifest.plugin.build).split('-')[1]}) Release: (${manifest.release})`}
      </Text>
   </ScrollView>
}