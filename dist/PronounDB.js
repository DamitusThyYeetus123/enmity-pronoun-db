const D={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function Ie(e,t){return window.enmity.modules.getModule(e,t)}function G(...e){return window.enmity.modules.bulk(...e)}function P(...e){return window.enmity.modules.getByProps(...e)}function Ce(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function De(e){window.enmity.plugins.registerPlugin(e)}function Te(e){return window.enmity.patcher.create(e)}const u=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars;const T=window.enmity.modules.common.Native,o=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher;const N=window.enmity.modules.common.Storage,R=window.enmity.modules.common.Toasts,Y=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const B=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function x(e,t,n){window.enmity.settings.set(e,t,n)}function E(e,t,n){return window.enmity.settings.get(e,t,n)}function A(e,t,n){return window.enmity.settings.getBoolean(e,t,n)}var c="PronounDB",L="1.0.0",le="stable",Re="Displays a Pronoun from PronounDB next to your name in the chat :3",Be=[{name:"Acquite<3",id:"581573474296791211"}],I={download:"https://raw.githubusercontent.com/acquitelol/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/acquitelol/enmity-pronoun-db",build:"patch-1.0.0"},xe="#ff91ff",J={name:c,version:L,release:le,description:Re,authors:Be,plugin:I,color:xe},b=(e,t,n,a,r)=>{try{return e(...t)}catch(i){console.warn(`[${n}] The following error happened when trying to ${a} ${r!=null?r:"unspecificied label"}: ${i}`);return}};const Me=(e,t,n)=>b(()=>{if(e){for(let a=0;a<e.length;a++)if(t(e[a],a,e))return e[a]}},[e,t],c,"find an item at",n),W=(e,t,n,a)=>b(()=>{if(e){e.length++,n++;for(let r=e.length-1;r>=n;r--)e[r]=e[r-1];return e[n-1]=t,e.length}},[e,t,n],c,"insert an item at",a),Pe=(e,t,n)=>b(()=>{let a=[];for(let r=0;r<e.length;r++)t(e[r],r,e)&&W(a,e[r],a.length,"filtering an array");return a},[e,t],c,"filtering an array at",n),Le=(e,t,n)=>{b(()=>{for(let a=0;a<e.length;a++)t(e[a],a,e)},[e,t],c,"loop through an array at",n)};async function Fe(e,t,n){await b(async function(){for(let a=0;a<e.length;a++)await t(e[a],a,e)},[e,t],c,"loop through an array at",n)}const _e=(e,t,n)=>b(()=>{let a=[];for(let r=0;r<e.length;r++)W(a,t(e[r],r,e),a.length);return a},[e,t],c,"map an array at",n);var g={filterItem:Pe,findItem:Me,forItem:Le,forItemAsync:Fe,mapItem:_e,insertItem:W};const Ne=(e,t)=>g.mapItem(e.split(t?/(?=[A-Z])/:"_"),n=>n[0].toUpperCase()+n.slice(1)).join(" "),Ae=(e,t)=>b(()=>{let n=g.mapItem(e.split(`
`),(a,r)=>{if(a!="")return`"${a.replaceAll(":",'":"').replace(" ","")}"${r==e.split(`
`).length-1?"":","}`},"formatting object");return n[0]=`{${n[0]}`,n[n.length-1]=`${n[n.length-1]}}`,n.join("")},[e],c,"formatting object at",t);var F={string:Ne,object:Ae};async function ke(e,t){await b(async function(){var n;e.type==="storage"?await N.setItem(e.name,JSON.stringify(e.content)):x(c,e.name,e.content);const a=JSON.parse((n=E(c,"state_store",null))!=null?n:"[]");g.findItem(a,r=>r.name===e.name,"finding existing label in store state")||a.push(e),x(c,"state_store",JSON.stringify(a))},[e],c,"storing an item in plugin file or storage at",t)}var k={item:ke};async function Oe(e){return await b(async function(){const t=await N.getItem("device_list");if(t)return JSON.parse(t);const n=await(await fetch("https://gist.githubusercontent.com/adamawolf/3048717/raw/1ee7e1a93dff9416f6ff34dd36b0ffbad9b956e9/Apple_mobile_device_types.txt")).text(),a=F.object(n,"fetching device list");return await k.item({name:"device_list",content:a,type:"storage"},"storing device list in storage"),JSON.parse(await N.getItem("device_list"))},[],c,"get the device list",e)}var Ue={getDeviceList:Oe};async function ce(){var e,t,n;const a=await Ue.getDeviceList(),r=window.HermesInternal.getRuntimeProperties(),i=(m=>Object.values(window.modules).find(d=>{var y;return(y=d.publicModule.exports)==null?void 0:y[m]}).publicModule.exports)("View").Platform.constants,l=i.reactNativeVersion;return{Plugin:{Version:L,Build:I.build.split("-")[1],Channel:le},Client:{Version:T.InfoDictionaryManager.Version,Build:T.InfoDictionaryManager.Build,Release:T.InfoDictionaryManager.ReleaseChannel,Bundle:T.InfoDictionaryManager.Identifier.split(".")[2]},React:{Version:o.version,Bytecode:r["Bytecode Version"],Hermes:r["OSS Release Version"],Native:`${(e=l.major)!=null?e:0}.${(t=l.minor)!=null?t:0}.${(n=l.patch)!=null?n:0}`},Native:{Version:T.DCDDeviceManager.systemVersion,Device:a[T.DCDDeviceManager.device],Manufacturer:T.DCDDeviceManager.deviceManufacturer,Idiom:i.interfaceIdiom}}}async function Ve(e,t){return await b(async function(){let n=[`**[${c}] Debug Information**
`];const a=await ce();return g.forItem(Object.keys(e),r=>{Object.values(e[r]).some(i=>i)&&g.insertItem(n,`[**${r}**]`,n.length,"pushing to debug argument array"),g.forItem(Object.keys(e[r]),i=>{e[r][i]&&a[r][i]&&g.insertItem(n,`> **${i}**: ${a[r][i]}`,n.length,"pushing to debug argument array")})},"looping through debug options"),n.join(`
`)},[e],c,"creating debug info at",t)}var M={fetchDebugArguments:ce,debugInfo:Ve};function S(e){return window.enmity.assets.getIDByName(e)}var p={Failed:S("Small"),Delete:S("ic_message_delete"),Copy:S("toast_copy_link"),Open:S("ic_leave_stage"),Clipboard:S("pending-alert"),Clock:S("clock"),Settings:{Toasts:{Settings:S("ic_selection_checked_24px"),Failed:S("ic_close_circle_24px")},Initial:S("coffee"),Update:S("discover"),Locale:S("ic_locale_24px")}};const je=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),Ye=(e,t)=>{R.open({content:t=="clipboard"?`Copied ${e} to clipboard.`:e,source:t=="clipboard"?p.Clipboard:p.Settings.Initial})},He=(e,t,n,a=186,r)=>b(()=>{let i=e.replace("#","");const l=($,j,z)=>parseInt($.substring(j[0],j[1]),z),m=l(i,[0,2],16),d=l(i,[2,4],16),y=l(i,[4,6],16);return(m+d+y)/(255*3)>a?n:t},[e,t,n,a],c,"checking if color should be light or dark at",r),me=P("getCurrentUser"),ze=me.getCurrentUser()?me.getCurrentUser().getAvatarURL().replace("webp","png"):"https://cdn.discordapp.com/avatars/581573474296791211/4429e2dbe2bfcfbd34fb1778c802144d.png?size=1280";var h={shadow:je,displayToast:Ye,filterColor:He,localizedImage:ze};const{native:O}=window.enmity;function Ge(){O.reload()}O.version,O.build,O.device,O.version;async function Je(){await b(async function(){const e=`${I.download}?${Math.floor(Math.random()*1001)}.js`,t=await(await fetch(e)).text(),n=t.match(/\d\.\d\.\d+/g)[0],a=t.match(/patch-\d\.\d\.\d+/g)[0];return!n||!a?q(c,[L,I.build]):n!=L?K(e,n,"version"):a!=I.build?K(e,a.split("-")[1],"build"):q(c,[L,I.build])},[I],c,"checking if latest version at","the async check for updates callback")}const K=(e,t,n)=>{Y.show({title:"Update found",body:`A newer ${n} is available for ${c}. ${n=="build"?`
The version will remain at ${L}, but the build will update to ${t}.`:""}
Would you like to install ${n} \`${t}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>ue(e,t,n)})},q=(e,[t,n])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${t} and build ${n}`),Y.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${t}\`
Build: \`${n.split("-")[1]}\``,confirmText:"Okay"})};async function ue(e,t,n){await b(async function(){window.enmity.plugins.installPlugin(e,({data:a})=>{a=="installed_plugin"||a=="overridden_plugin"?Y.show({title:`Updated ${c}`,body:`Successfully updated to ${n} \`${t}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Ge()}):console.log(`[PronounDB] Plugin failed to update to ${n} ${t}.`)})},[e,t,n],c,"installing plugin at","new version available")}var We={checkForUpdates:Je,showUpdateDialog:K,noUpdates:q,installPlugin:ue};const U={hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid, use name",unspecified:"unspecified"};var de;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.Guild=1]="Guild",e[e.DM=2]="DM"})(de||(de={}));var X;(function(e){e[e.Chat=1]="Chat",e[e.User=2]="User",e[e.Message=3]="Message"})(X||(X={}));var Z;(function(e){e[e.BuiltIn=0]="BuiltIn",e[e.BuiltInText=1]="BuiltInText",e[e.BuiltInIntegration=2]="BuiltInIntegration",e[e.Bot=3]="Bot",e[e.Placeholder=4]="Placeholder"})(Z||(Z={}));var ge;(function(e){e[e.Role=1]="Role",e[e.User=2]="User"})(ge||(ge={}));var Q;(function(e){e[e.SubCommand=1]="SubCommand",e[e.SubCommandGroup=2]="SubCommandGroup",e[e.String=3]="String",e[e.Integer=4]="Integer",e[e.Boolean=5]="Boolean",e[e.User=6]="User",e[e.Channel=7]="Channel",e[e.Role=8]="Role",e[e.Mentionnable=9]="Mentionnable",e[e.Number=10]="Number",e[e.Attachment=11]="Attachment"})(Q||(Q={}));var he;(function(e){e[e.ApplicationCommand=2]="ApplicationCommand",e[e.MessageComponent=3]="MessageComponent"})(he||(he={}));const{components:s}=window.enmity;s.Alert,s.Button,s.FlatList;const ee=s.Image;s.ImageBackground,s.KeyboardAvoidingView,s.Modal,s.Pressable,s.RefreshControl;const fe=s.ScrollView;s.SectionList,s.StatusBar,s.StyleSheet,s.Switch;const v=s.Text;s.TextInput,s.TouchableHighlight;const C=s.TouchableOpacity;s.TouchableWithoutFeedback,s.Touchable;const w=s.View;s.VirtualizedList,s.Form,s.FormArrow,s.FormCTA,s.FormCTAButton,s.FormCardSection,s.FormCheckbox;const te=s.FormDivider;s.FormHint,s.FormIcon,s.FormInput,s.FormLabel,s.FormRadio;const f=s.FormRow;s.FormSection,s.FormSelect,s.FormSubLabel;const Ke=s.FormSwitch;s.FormTernaryCheckBox,s.FormText,s.FormTextColors,s.FormTextSizes;var qe=({option:e,parent:t,debugOptions:n,onConfirm:a})=>{const[r,i]=o.useState(E(c,t,{})[e]);o.useEffect(()=>{const m=E(c,t,{});m[e]||k.item({name:t,content:{...m,[e]:!1},type:"setting",override:{}})},[]);const l=B.createThemedStyleSheet({icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},itemDisabled:{color:u.ThemeColorMap.TEXT_MUTED},itemEnabled:{color:u.ThemeColorMap.INTERACTIVE_NORMAL}});return o.createElement(f,{key:e,label:e,onPress:()=>{const m=E(c,t,{});k.item({name:t,content:{...m,[e]:!m[e]},type:"setting",override:{}}),i(E(c,t,{})[e])},onLongPress:async function(){await a(await M.debugInfo({[t]:{[e]:!0}}),`${t} \u279D ${e}`)},leading:o.createElement(f.Icon,{style:l.icon,source:r?p.Settings.Toasts.Settings:p.Settings.Toasts.Failed}),trailing:()=>o.createElement(v,{style:[{paddingTop:5,paddingBottom:5,paddingRight:10},r?l.itemEnabled:l.itemDisabled]},n[t][e])})};const ne=window.enmity.modules.common.Components.General.Animated,Xe=window.enmity.modules.common.Components.General.Easing;var Ze=({label:e,content:t,type:n})=>{var a;const r=B.createThemedStyleSheet({button:{width:"90%",borderRadius:10,marginLeft:"5%",marginRight:"5%",...h.shadow()},text:{color:"#f2f2f2",textAlign:"left",letterSpacing:.25,padding:10},textHeader:{fontSize:20,fontFamily:u.Fonts.PRIMARY_BOLD},textContent:{fontSize:16,fontFamily:u.Fonts.PRIMARY_NORMAL},image:{width:25,height:25,borderRadius:4,position:"absolute",right:0,margin:10}}),i=o.useRef(new ne.Value(1)).current;async function l(){const y=()=>ne.timing(i,{toValue:0,duration:250,useNativeDriver:!0,easing:Xe.sin}).start();Y.show({title:"Close Tip?",body:"You can either hide this information box forever, or just hide it until you open this page again.",confirmText:"Don't Show Again",cancelText:"Cancel",onConfirm:async function(){await k.item({name:e,content:!0,type:"setting",override:!1},`storing dialog at ${e} in Dialog component`),y()}})}const m={standard:{backgroundColor:"rgba(0, 0, 0, 0.5)",marginTop:20},floating:{position:"absolute",bottom:0,marginBottom:30,backgroundColor:"rgba(0, 0, 0, 0.8)"}},d={transform:[{scale:i}]};return E(c,e,!1)?o.createElement(o.Fragment,null):o.createElement(o.Fragment,null,o.createElement(ne.View,{style:d},o.createElement(C,{style:[r.button,(a=m[n])!=null?a:m.standard],onPress:async function(){await l()}},o.createElement(w,{style:{width:"100%",flexDirection:"row"}},o.createElement(ee,{style:r.image,source:{uri:h.localizedImage}})),o.createElement(v,{style:[r.text,r.textHeader]},e),o.createElement(v,{style:[r.text,r.textContent]},t))))},V=({label:e,component:t})=>{const n=B.createThemedStyleSheet({text:{color:u.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:u.Fonts.PRIMARY_BOLD,fontSize:12}});return o.createElement(w,{style:{marginTop:10}},o.createElement(v,{style:[n.text,n.optionText]},e.toUpperCase()),t)};const Qe=Ce("StaticSearchBarContainer"),et=P("openLazy","hideActionSheet");var tt=({onConfirm:e,type:t})=>{const[n,a]=o.useState([]),[r,i]=o.useState("");o.useEffect(async function(){a(await M.fetchDebugArguments())},[]);const l=B.createThemedStyleSheet({button:{width:"42.5%",height:50,justifyContent:"center",alignItems:"center",backgroundColor:u.ThemeColorMap.HEADER_PRIMARY,borderRadius:10,marginLeft:"5%",marginTop:20,marginBottom:5},buttonContainer:{flexDirection:"row"},text:{color:h.filterColor(u.ThemeColorMap.HEADER_PRIMARY[0],"#f2f2f2","#121212",.8,"buttons in debug info menu"),textAlign:"center",paddingLeft:10,paddingRight:10,letterSpacing:.25,fontFamily:u.Fonts.PRIMARY_BOLD},buttonText:{fontSize:16},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...h.shadow()},pageContainer:{paddingTop:200,top:-200,paddingBottom:300,marginBottom:-450,backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY},searchWrapper:{flexDirection:"row"},searchContainer:{borderRadius:11,width:"65%",overflow:"hidden",marginTop:15,marginLeft:"5%",marginRight:"5%"},search:{margin:0,padding:0,borderBottomWidth:0,background:"none",backgroundColor:"none"},title:{color:u.ThemeColorMap.HEADER_SECONDARY,fontFamily:u.Fonts.DISPLAY_BOLD,letterSpacing:.25,textAlign:"center"},titleContainer:{width:"20%",marginTop:15,backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,borderRadius:10,justifyContent:"center",alignItems:"center"}});return o.createElement(fe,{style:l.pageContainer},o.createElement(w,{style:[l.searchWrapper,{...h.shadow(.05)}]},o.createElement(w,{style:l.searchContainer},o.createElement(Qe,{placeholder:"Search...",style:l.search,inputStyle:l.search,onChangeText:m=>i(m),collapsable:!0,value:r})),o.createElement(C,{style:l.titleContainer,onPress:()=>{g.forItem(Object.keys(n),m=>{g.forItem(Object.keys(n[m]),d=>{k.item({name:m,content:{...E(c,m),[d]:!1},type:"setting",override:{}})},`list of debug information options in ${m}`)}),et.hideActionSheet(),R.open({content:"Successfully cleared all debug options.",source:p.Delete})}},o.createElement(v,{style:l.title},"Clear All"))),o.createElement(w,{style:l.buttonContainer},o.createElement(C,{style:l.button,onPress:async function(){await e(await M.debugInfo(await M.fetchDebugArguments()),"full debug log")}},o.createElement(v,{style:[l.text,l.buttonText]},F.string(t!=null?t:"send")," All")),o.createElement(C,{style:l.button,onPress:async function(){const m=g.mapItem(Object.keys(n),d=>{var y;return{[d]:(y=E(c,d,{}))!=null?y:{}}}).reduce((d,y)=>({...d,...y}),{});await e(await M.debugInfo(m),"partial debug log")}},o.createElement(v,{style:[l.text,l.buttonText]},F.string(t!=null?t:"send")," Message"))),g.mapItem(Object.keys(n),m=>o.createElement(V,{label:m,component:o.createElement(o.Fragment,null,o.createElement(w,{style:l.container},g.mapItem(g.filterItem(Object.keys(n[m]),d=>r?d.toLowerCase().includes(r):d),(d,y,$)=>o.createElement(o.Fragment,null,o.createElement(qe,{option:d,parent:m,debugOptions:n,onConfirm:e}),y!==$.length-1?o.createElement(te,null):null),`list of debug information options in ${m}`)))})),o.createElement(Ze,{label:"Information",content:`You can either tap on each item to toggle it and press "${F.string(t!=null?t:"send")} Message", or you can long-press on an item to only send that item.

To close this dialog, press on it.`,type:"standard"}))},ye;const pe=((ye=Ie(e=>{var t,n;return((n=(t=e.default)==null?void 0:t.render)==null?void 0:n.name)=="ActionSheet"}))!=null?ye:{default:{render:!1}}).default.render,nt=P("BottomSheetScrollView").BottomSheetScrollView,ot=P("openLazy","hideActionSheet");function we(e,t){pe?ot.openLazy(new Promise(n=>n({default:at})),"DebugInfoActionSheet",{onConfirm:e,type:t}):R.open({content:"You cannot open ActionSheets on this version! Upgrade to 163+",source:p.Failed})}function at({onConfirm:e,type:t}){return o.createElement(pe,{scrollable:!0},o.createElement(nt,{contentContainerStyle:{marginBottom:50}},o.createElement(tt,{onConfirm:e,type:t})))}var be,ve,Se;const[rt,it]=G(D.byProps("setString"),D.byProps("openLazy","hideActionSheet")),Ee=e=>({debug:async function(){return await new Promise(t=>{we((n,a)=>{it.hideActionSheet(),R.open({content:`Sent ${a} in #${e}`,source:p.Settings.Toasts.Settings}),t({content:n})},"send")})},clearStores:async function(){var t;const n=(t=JSON.parse(E("PronounDB","state_store",null)))!=null?t:[];await g.forItemAsync(n,async function(a){var r;a.type==="storage"?await N.removeItem(a.name):x(c,a.name,(r=a.override)!=null?r:!1)},"clearing state store"),x("PronounDB","state_store",null),R.open({content:`Cleared all ${c} stores.`,source:p.Settings.Toasts.Settings})},download:async function(){return await new Promise(t=>{rt.setString(`${I.download}?${Math.floor(Math.random()*1001)}.js`),h.displayToast("download link","clipboard"),t({})})}}),st=g.mapItem(Object.keys(Ee("placeholder")),e=>({name:F.string(e,!0),displayName:F.string(e,!0),value:e}),"debug options formatted as a command format");var lt={id:`${(be=c)==null?void 0:be.toLowerCase()}`,name:`${(ve=c)==null?void 0:ve.toLowerCase()}`,displayName:`${(Se=c)==null?void 0:Se.toLowerCase()}`,description:`Choose from a list of options for debugging in ${c}.`,displayDescription:`Choose from a list of options for debugging in ${c}.`,type:X.Chat,inputType:Z.BuiltInText,options:[{name:"type",displayName:"type",description:"The type of command to execute.",displayDescription:"The type of command to execute.",type:Q.String,choices:[...st],required:!0}],execute:async function(e,t){var n;const a=g.findItem(e,l=>l.name=="type").value,r=Ee(t.channel.name),i=()=>{R.open({content:"Invalid command argument.",source:p.Clock})};return await((n=r[a])!=null?n:i)()}};const H=window.enmity.modules.common.Components.General.Animated,[oe,ct]=G(D.byProps("transitionToGuild"),D.byProps("setString"));var mt=({name:e,version:t,plugin:n,authors:a})=>{const r=B.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...h.shadow()},image:{width:75,height:75,borderRadius:10,...h.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:u.ThemeColorMap.HEADER_PRIMARY,fontFamily:u.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:u.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}}),i=o.useRef(new H.Value(1)).current,l=()=>H.spring(i,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),m=()=>H.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start(),d=()=>oe.openURL(n.repo),y={transform:[{scale:i}]};return o.createElement(o.Fragment,null,o.createElement(w,{style:r.container},o.createElement(C,{onPress:d,onPressIn:l,onPressOut:m},o.createElement(H.View,{style:y},o.createElement(ee,{style:[r.image],source:{uri:h.localizedImage}}))),o.createElement(w,{style:r.textContainer},o.createElement(C,{onPress:()=>oe.openURL(n.repo)},o.createElement(v,{style:[r.mainText,r.header]},e)),o.createElement(w,{style:{flexDirection:"row"}},o.createElement(v,{style:[r.mainText,r.subHeader]},"A project by"),g.mapItem(a,($,j,z)=>o.createElement(C,{onPress:()=>oe.openURL($.profile)},o.createElement(v,{style:[r.mainText,r.subHeader,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},$.name,j<z.length-1?",":null)))),o.createElement(w,null,o.createElement(C,{style:{flexDirection:"row"},onPress:async function(){const $=await M.fetchDebugArguments();ct.setString(await M.debugInfo($)),h.displayToast("debug information","clipboard")}},o.createElement(v,{style:[r.mainText,r.subHeader]},"Version:"),o.createElement(v,{style:[r.mainText,r.subHeader,{paddingLeft:4,fontFamily:u.Fonts.DISPLAY_BOLD}]},t))))))};const[ut,dt,gt]=G(D.byProps("transitionToGuild"),D.byProps("setString"),D.byProps("openLazy","hideActionSheet"));var ht=({manifest:e})=>{const t=B.createThemedStyleSheet({icon:{color:u.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:u.ThemeColorMap.TEXT_MUTED,fontFamily:u.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:u.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...h.shadow()},subheaderText:{color:u.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:u.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",height:60,borderRadius:10}}),[n,a]=o.useState(A(e.name,"isTimestamp",!1));return o.createElement(fe,null,o.createElement(mt,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),o.createElement(w,{style:{marginTop:20}},o.createElement(V,{label:"Timestamps",component:o.createElement(o.Fragment,null,o.createElement(w,{style:t.container},o.createElement(f,{label:"Timestamps",subLabel:"Use Timestamps instead of OP/Bot Tag for the pronoun in the chat area.",onLongPress:()=>h.displayToast(`By default, ${e.name} will use the OP tag, and the Bot tag when this is unavailable. By toggling this option, ${e.name} will always use Timestamps instead of OP/Bot tag for the pronouns.`,"tooltip"),leading:o.createElement(f.Icon,{style:t.icon,source:p.Settings.Locale}),trailing:o.createElement(Ke,{value:A(e.name,"isTimestamp",!1),onValueChange:()=>{x(e.name,"isTimestamp",!A(e.name,"isTimestamp",!1)),a(A(e.name,"isTimestamp",!1))}})})))}),o.createElement(V,{label:"Preview",component:o.createElement(o.Fragment,null,o.createElement(w,{style:t.container},o.createElement(ee,{style:t.image,source:{uri:`https://cdn.discordapp.com/attachments/${n?"1011346757214543875/1073350999445614694/timestamp-pronoun.png":"1011346757214543875/1073351873530183690/tag-pronoun.png"}`},resizeMode:"contain"})))}),o.createElement(V,{label:"Utility",component:o.createElement(o.Fragment,null,o.createElement(w,{style:t.container},o.createElement(f,{label:"Open Debug Info",subLabel:`Open useful page to copy debug information like version and build of ${e.name} to clipboard.`,onLongPress:()=>h.displayToast(`Copy the full debug log to clipboard including ${e.name}'s Version, Build, and Release, Enmity's Version and Build, etc.`,"tooltip"),leading:o.createElement(f.Icon,{style:t.icon,source:p.Copy}),trailing:()=>o.createElement(f.Arrow,null),onPress:()=>{we((r,i)=>{gt.hideActionSheet(),dt.setString(r),h.displayToast(`${i}`,"clipboard")},"copy")}}),o.createElement(te,null),o.createElement(f,{label:"Clear Stores",subLabel:`Void most of the settings and stores used throughout ${e.name} to store data locally.`,onLongPress:()=>h.displayToast(`Clear stores and settings throughout ${e.name} including the settings to hide popups forever and the list of device codes.`,"tooltip"),leading:o.createElement(f.Icon,{style:t.icon,source:p.Delete}),trailing:()=>o.createElement(f.Arrow,null),onPress:async function(){var r;const i=(r=JSON.parse(E(e.name,"state_store",null)))!=null?r:[];await g.forItemAsync(i,async function(l){var m;l.type==="storage"?await N.removeItem(l.name):x(e.name,l.name,(m=l.override)!=null?m:!1)},"clearing state store"),x(e.name,"state_store",null),R.open({content:`Cleared all ${e.name} stores.`,source:p.Settings.Toasts.Settings})}})))}),o.createElement(V,{label:"Source",component:o.createElement(o.Fragment,null,o.createElement(w,{style:t.container},o.createElement(f,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>h.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:o.createElement(f.Icon,{style:t.icon,source:p.Settings.Update}),trailing:()=>o.createElement(f.Arrow,null),onPress:async function(){await We.checkForUpdates()}}),o.createElement(te,null),o.createElement(f,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>h.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:o.createElement(f.Icon,{style:t.icon,source:p.Open}),trailing:()=>o.createElement(f.Arrow,null),onPress:()=>{ut.openURL(e.plugin.repo)}})))})),o.createElement(v,{style:t.subheaderText},`Build: (${e.plugin.build.split("-")[1]}) Release: (${e.release})`))};const ae=Te("pronoun-db"),ft=P("getUser"),re=P("View"),{DCDChatManager:yt}=re.NativeModules;let _={},ie=[],se=!1;async function $e(e){if(U[e]||(e&&ie.push(e),se))return;se=!0;const t=await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${ie.splice(0,15).join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Vendetta"}}).then(n=>n.json());Object.entries(t).forEach(([n,a])=>{isNaN(+n)||(_[n]=a)}),se=!1,ie.length>0&&$e(void 0)}const pt={...J,onStart(){this.commands=[lt];const e=B.createThemedStyleSheet({opTagBackgroundColor:{color:u.ThemeColorMap.HEADER_PRIMARY}});ae.before(ft,"getUser",(t,n,a)=>{$e(n[0])}),ae.before(yt,"updateRows",(t,n,a)=>{const r=JSON.parse(n[1]);for(const i of r)if(i.type===1&&!!i.message.authorId&&!!_[i.message.authorId]&&U[_[i.message.authorId]]!=="unspecified"){if(A(J.name,"isTimestamp",!1)&&i.message.timestamp){i.message.timestamp+=" \u2022 "+U[_[i.message.authorId]];continue}i.message.opTagText?i.message.tagText||(i.message.tagText=U[_[i.message.authorId]]):(i.message.opTagText=U[_[i.message.authorId]],i.message.opTagTextColor=re.processColor(h.filterColor(e.opTagBackgroundColor.color,"#212121","#121212")),i.message.opTagBackgroundColor=re.processColor(e.opTagBackgroundColor.color))}n[1]=JSON.stringify(r)})},onStop(){ae.unpatchAll()},getSettingsPanel(){return o.createElement(ht,{manifest:J})}};De(pt);
