import { getByProps } from 'enmity/metro';
import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { create } from 'enmity/patcher';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { getBoolean } from 'enmity/api/settings';
import { Miscellaneous, ProunounMap } from './common';
import Debug from './components/Commands/Debug';
import manifest from "../manifest.json"
import Settings from './components/Settings/Settings';

const Patcher = create("pronoun-db")

const UserStore = getByProps("getUser");
const ReactNative = getByProps("View");
const { DCDChatManager } = ReactNative.NativeModules;

let map = {};
let queue: any[] = [];
let fetching: boolean = false;

async function getPronoun(id: string) {
    if (ProunounMap[id]) return;

    id && queue.push(id);

    if (fetching) return;

    fetching = true;
    const data = await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${queue.splice(0, 15).join(",")}`, {
        method: "GET",
        headers: { "Accept": "application/json", "X-PronounDB-Source": "Vendetta" }
    }).then(res => res.json());

    Object.entries(data).forEach(([id, pronoun]) => {
        if (isNaN(+id)) return;
        map[id] = pronoun;
    })

    fetching = false;
    if (queue.length > 0) getPronoun(undefined!);
}

const PronounDB: Plugin = {
    ...manifest,
 
    onStart() {
        this.commands = [Debug]

        const styles = StyleSheet.createThemedStyleSheet({
            opTagBackgroundColor: {
                color: Constants.ThemeColorMap.HEADER_PRIMARY
            }
        })

        Patcher.before(UserStore, "getUser", (_, args, __) => {
            // args[0] is the id of the user
            getPronoun(args[0]);
        });

        Patcher.before(DCDChatManager, "updateRows", (_, args, __) => {
            const rows = JSON.parse(args[1]);
            for ( const row of rows ) {
                // not a message
                if (row.type !== 1) continue;
    
                // no author id
                if (!row.message.authorId) continue;
    
                // author id exists but isnt in the map
                if (!map[row.message.authorId]) continue;
    
                // author id exists and is in the map but the pronoun is "unspecified"
                if (ProunounMap[map[row.message.authorId]] === "unspecified") continue;
    
                // if the option to set timestamp is set to true and there is a valid timestamp then do that and skip the rest
                if (getBoolean(manifest.name, "isTimestamp", false) && row.message.timestamp) {
                    row.message.timestamp += (" • " + ProunounMap[map[row.message.authorId]]);
                    continue;
                }
    
                // otherwise if theres no op tag text then use that otherwise use the bot tag text
                if (!row.message.opTagText) {
                    row.message.opTagText = ProunounMap[map[row.message.authorId]];
                    row.message.opTagTextColor = ReactNative.processColor(Miscellaneous.filterColor(styles.opTagBackgroundColor.color, "#212121", "#121212"));
                    row.message.opTagBackgroundColor = ReactNative.processColor(styles.opTagBackgroundColor.color);
                } else if (!row.message.tagText) {
                    row.message.tagText = ProunounMap[map[row.message.authorId]];
                }
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