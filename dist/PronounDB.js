function A(...e){return window.enmity.modules.getByProps(...e)}function me(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function ce(e){window.enmity.plugins.registerPlugin(e)}function de(e){return window.enmity.patcher.create(e)}const s=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const X=window.enmity.modules.common.Toasts,B=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ue=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Q(e,o,n){window.enmity.settings.set(e,o,n)}function T(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}function u(e){return window.enmity.assets.getIDByName(e)}var S={Failed:u("Small"),Delete:u("ic_message_delete"),Copy:u("toast_copy_link"),Open:u("ic_leave_stage"),Clipboard:u("pending-alert"),Clock:u("clock"),Pronoun:u("ic_profile_badge_guild_booster_lvl9"),Settings:{Toasts:{Settings:u("ic_selection_checked_24px"),Failed:u("ic_close_circle_24px")},Initial:u("coffee"),Update:u("discover"),Locale:u("ic_locale_24px"),External:u("ic_raised_hand_list"),Edit:u("ic_edit_24px")}};const pe=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),he=(e,o)=>{X.open({content:o=="clipboard"?`Copied ${e} to clipboard.`:e,source:o=="clipboard"?S.Clipboard:S.Settings.Initial})};var R={shadow:pe,displayToast:he},b="PronounDB",_="1.2.1",ge="stable",ye="Displays a Pronoun from PronounDB next to your name in the chat :3",we=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],$={download:"https://raw.githubusercontent.com/acquitelol/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/acquitelol/enmity-pronoun-db",pronoundb:"https://pronoundb.org/",build:"patch-1.4.56",hash:"93d1c94e"},fe="#ff91ff",L={name:b,version:_,release:ge,description:ye,authors:we,plugin:$,color:fe},N=(e,o,n,r,a)=>{try{return e(...o)}catch(m){console.warn(`[${n}] The following error happened when trying to ${r} ${a!=null?a:"unspecificied label"}: ${m}`);return}};const J=(e,o,n,r)=>N(()=>{if(e){e.length++,n++;for(let a=e.length-1;a>=n;a--)e[a]=e[a-1];return e[n-1]=o,e.length}},[e,o,n],b,"insert an item at",r),Te=(e,o,n)=>N(()=>{let r=[];for(let a=0;a<e.length;a++)J(r,o(e[a],a,e),r.length);return r},[e,o],b,"map an array at",n);var Z={mapItem:Te,insertItem:J};const{native:F}=window.enmity;function be(){F.reload()}const ve=F.version;F.build,F.device,F.version;async function Ee(){await N(async function(){const e=`${$.download}?${Math.floor(Math.random()*1001)}.js`,o=await(await fetch(e)).text(),n=o.match(/\d+\.\d+\.\d+/g),r=o.match(/hash:"(.*?)"/);if(!n&&!r)return Re(b,[_,$.build]);const a=n&&n[0],m=r&&r[1];return a&&a!=_?ee(e,a,"version"):m&&m!=$.hash?ee(e,m,"build"):Se(b,[_,$.hash])},[$],b,"checking if latest version at","the async check for updates callback")}const ee=(e,o,n)=>{B.show({title:"Update found",body:`A newer ${n} is available for ${b}. ${n=="build"?`
The version will remain at ${_}, but the build will update to ${o}.`:""}
Would you like to install ${n} \`${o}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Ce(e,o,n)})},Se=(e,[o,n])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${o} and build ${n}`),B.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})},Re=(e,[o,n])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${o} and ${n}`),B.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})};async function Ce(e,o,n){await N(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?B.show({title:`Updated ${b}`,body:`Successfully updated to ${n} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>be()}):console.log(`[${b}] Plugin failed to update to ${n} ${o}.`)})},[e,o,n],b,"installing plugin at","new version available")}var xe={checkForUpdates:Ee},p={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid pronouns, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),o=a=>this.queue.length<=0?a:this.map[a]?o(this.queue.shift()):a;for(const a of e)this.map[a]&&(e[a]=o(a));this.fetching=!0;const n=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),r=Object.fromEntries(Object.entries(n).filter(([a,m])=>!isNaN(+a)));Object.assign(this.map,r),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const Y=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Pe=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const v=i.Text;i.TextInput,i.TouchableHighlight;const M=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const h=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const H=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const g=i.FormRow;i.FormSection,i.FormSelect,i.FormSubLabel;const te=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;var oe,ne;const Ae=(ne=(oe=A("View","Text"))==null?void 0:oe.Dimensions)==null?void 0:ne.get("window").width;var ie=({style:e,source:o})=>{const[n,r]=t.useState({width:0,height:0}),[a,m]=t.useState(0),f=()=>{const l=C=>typeof C=="string"?parseInt(C.replace("%",""))*Ae/100:C,c=l(e.width);if(!e.maxWidth)return c;const E=l(e.maxWidth);return c>E?E:c};return t.useEffect(()=>{Y.getSize(o,(l,c)=>{r({width:l,height:c})},l=>{console.error(`[${L.name}] ${l} when fetching ${o}`)}),m(f())},[]),t.createElement(Y,{style:[...Array.isArray(e)?e:[e],{height:a*(n.height/n.width)}],source:{uri:o},resizeMode:"stretch"})};const{Animated:k}=window.enmity.modules.common.Components.General,ae=A("transitionToGuild"),G=A("getUser","getCurrentUser"),y=I.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...R.shadow()},image:{width:75,height:75,borderRadius:10,...R.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:s.ThemeColorMap.HEADER_PRIMARY,fontFamily:s.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:s.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var De=({name:e,version:o,plugin:n,authors:r})=>{var a,m;const f=t.useRef(new k.Value(1)).current,l=()=>k.spring(f,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),c=()=>k.spring(f,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>ue.showUserProfile({userId:G.getCurrentUser().id}),C={transform:[{scale:f}]};return t.createElement(t.Fragment,null,t.createElement(h,{style:y.container},t.createElement(M,{onPress:E,onPressIn:l,onPressOut:c},t.createElement(k.View,{style:C},t.createElement(Y,{style:[y.image],source:{uri:(m=(a=G==null?void 0:G.getCurrentUser())==null?void 0:a.getAvatarURL())==null?void 0:m.replace("webp","png")}}))),t.createElement(h,{style:y.textContainer},t.createElement(M,{onPress:()=>ae.openURL(n.repo)},t.createElement(v,{style:[y.mainText,y.header]},e)),t.createElement(h,{style:{flexDirection:"row"}},t.createElement(v,{style:[y.mainText,y.subHeader]},"A project by"),Z.mapItem(r,(d,x,P)=>t.createElement(M,{onPress:()=>ae.openURL(d.profile)},t.createElement(v,{style:[y.mainText,y.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},d.name,x<P.length-1?",":null)))),t.createElement(h,null,t.createElement(M,{style:{flexDirection:"row"}},t.createElement(v,{style:[y.mainText,y.subHeader]},"Version:"),t.createElement(v,{style:[y.mainText,y.subHeader,{paddingLeft:4,fontFamily:s.Fonts.DISPLAY_BOLD}]},o))))))};const re=I.createThemedStyleSheet({text:{color:s.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:12}});var q=({label:e,children:o,style:n})=>t.createElement(h,{style:[n,{marginTop:10}]},t.createElement(v,{style:[re.text,re.optionText]},e.toUpperCase()),o);const le=A("transitionToGuild","openURL"),U=parseInt(ve.split(".")[0])>163?15:0,w=I.createThemedStyleSheet({icon:{color:s.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:s.ThemeColorMap.TEXT_MUTED,fontFamily:s.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...R.shadow()},subheaderText:{color:s.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:s.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var $e=({manifest:e})=>{const[o,n]=t.useState(T(e.name,"isTimestamp",!1)),[r,a]=t.useState(T(e.name,"isRole",!0));return t.createElement(Pe,null,t.createElement(De,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(h,{style:{marginTop:20}},t.createElement(q,{label:"Preferences"},t.createElement(h,{style:[w.container]},t.createElement(g,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>R.displayToast(`By default, ${e.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:t.createElement(g.Icon,{style:w.icon,source:S.Settings.Locale}),trailing:t.createElement(te,{value:T(e.name,"isTimestamp",!1),style:{marginLeft:-U},onValueChange:()=>{Q(e.name,"isTimestamp",!T(e.name,"isTimestamp",!1)),n(T(e.name,"isTimestamp",!1))}})}),t.createElement(H,null),t.createElement(g,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>R.displayToast(`With this option enabled, ${e.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:t.createElement(g.Icon,{style:w.icon,source:S.Settings.Edit}),trailing:t.createElement(te,{value:T(e.name,"isRole",!0),style:{marginLeft:-U},onValueChange:()=>{Q(e.name,"isRole",!T(e.name,"isRole",!0)),a(T(e.name,"isRole",!0))}})}))),t.createElement(q,{label:"Previews"},t.createElement(h,{style:{...w.container,maxWidth:350}},t.createElement(ie,{style:w.image,source:`https://cdn.discordapp.com/attachments/${o?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),t.createElement(h,{style:{...w.container,marginTop:10,maxWidth:350}},t.createElement(ie,{style:w.image,source:`https://cdn.discordapp.com/attachments/${r?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),t.createElement(q,{label:"Source"},t.createElement(h,{style:w.container},t.createElement(g,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>R.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(g.Icon,{style:w.icon,source:S.Settings.Update}),trailing:()=>t.createElement(g.Arrow,{style:{marginLeft:-U}}),onPress:async function(){await xe.checkForUpdates()}}),t.createElement(H,null),t.createElement(g,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>R.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(g.Icon,{style:w.icon,source:S.Open}),trailing:()=>t.createElement(g.Arrow,null),onPress:()=>{le.openURL(e.plugin.repo)}}),t.createElement(H,null),t.createElement(g,{label:"PronounDB",subLabel:`Open the ${e.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>R.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:t.createElement(g.Icon,{style:w.icon,source:S.Settings.External}),trailing:()=>t.createElement(g.Arrow,{style:{marginLeft:-U}}),onPress:()=>{le.openURL(e.plugin.pronoundb)}})))),t.createElement(v,{style:w.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};function Ie(e,o,n){return window.enmity.utilities.findInReactTree(e,o,n)}const D=I.createThemedStyleSheet({container:{marginTop:12,marginLeft:12,alignSelf:"flex-start"},eyebrow:{textTransform:"uppercase",fontSize:12,lineHeight:16,fontFamily:s.Fonts.PRIMARY_BOLD,color:s.ThemeColorMap.TEXT_NORMAL,marginBottom:10},innerContainer:{backgroundColor:s.ThemeColorMap.BACKGROUND_MOBILE_PRIMARY,borderRadius:8,borderWidth:1,borderColor:s.ThemeColorMap.HEADER_PRIMARY,overflow:"hidden",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},circle:{width:12,height:12,borderRadius:12/2,backgroundColor:s.ThemeColorMap.HEADER_PRIMARY,marginLeft:8,marginRight:6},content:{fontSize:14,paddingRight:8,paddingTop:8,paddingBottom:8},text:{fontFamily:s.Fonts.DISPLAY_NORMAL,color:s.ThemeColorMap.TEXT_NORMAL}});var _e=({pronoun:e})=>t.createElement(h,{style:D.container},t.createElement(v,{style:D.eyebrow},"Pronouns"),t.createElement(M,{onPress:()=>X.open({content:e,source:S.Pronoun})},T(L.name,"isRole",!0)?t.createElement(h,{style:D.innerContainer},t.createElement(h,{style:D.circle}),t.createElement(v,{style:[D.text,D.content]},e)):t.createElement(v,{style:[D.text,{fontSize:16}]},e)));const V=de("pronoun-db"),Le=A("PRIMARY_INFO_TOP_OFFSET","SECONDARY_INFO_TOP_MARGIN","SIDE_PADDING"),Fe=A("getUser"),W=A("View"),{DCDChatManager:Me}=W.NativeModules,se=I.createThemedStyleSheet({opTagBackgroundColor:{color:s.ThemeColorMap.HEADER_PRIMARY},opTagTextColor:{color:s.ThemeColorMap.BACKGROUND_PRIMARY},mention:{color:s.ThemeColorMap.BACKGROUND_MENTIONED_HOVER}}),Oe={...L,onStart(){V.before(Fe,"getUser",(e,o,n)=>{const r=o[0];p.map[r]||Z.insertItem(p.queue,r,p.queue.length,"user id pronoun queue"),p.updateQueuedPronouns()}),V.after(Le.default,"type",(e,o,n)=>{var r,a,m,f,l;const c=(a=(r=Ie(n,d=>{var x,P,z;return((x=d==null?void 0:d.props)==null?void 0:x.children.find(O=>{var j,K;return typeof((K=(j=O==null?void 0:O.props)==null?void 0:j.displayProfile)==null?void 0:K.userId)=="string"}))&&!(d!=null&&d.props.children.find(O=>O.type===me("UserProfileName")))&&((P=d==null?void 0:d.type)==null?void 0:P.displayName)==="View"&&Array.isArray((z=d==null?void 0:d.props)==null?void 0:z.style)}))==null?void 0:r.props)==null?void 0:a.children;if(!c)return n;const{userId:E}=(l=(f=(m=c==null?void 0:c.find(d=>{var x,P;return typeof((P=(x=d==null?void 0:d.props)==null?void 0:x.displayProfile)==null?void 0:P.userId)=="string"}))==null?void 0:m.props)==null?void 0:f.displayProfile)!=null?l:{};if(!E||!p.map[E]||p.referenceMap[p.map[E]]==="unspecified")return n;const C=p.referenceMap[p.map[E]];c.unshift(t.createElement(_e,{pronoun:C}))}),V.before(Me,"updateRows",(e,o,n)=>{var r,a,m;const f=JSON.parse(o[1]);for(const l of f){if(l.type!==1||!((r=l==null?void 0:l.message)!=null&&r.authorId)||!p.map[(a=l==null?void 0:l.message)==null?void 0:a.authorId]||p.referenceMap[p.map[(m=l==null?void 0:l.message)==null?void 0:m.authorId]]==="unspecified")continue;const c=p.referenceMap[p.map[l.message.authorId]];if(T(L.name,"isTimestamp",!1)&&l.message.timestamp){l.message.timestamp+=" \u2022 "+c;continue}l.message.opTagText&&(l.message.tagText=l.message.tagText?l.message.tagText+" \u2022 ":""+l.message.opTagText),l.message.opTagText=c,l.message.opTagTextColor=W.processColor(se.opTagTextColor.color),l.message.opTagBackgroundColor=W.processColor(se.opTagBackgroundColor.color)}o[1]=JSON.stringify(f)})},onStop(){V.unpatchAll()},getSettingsPanel(){return t.createElement($e,{manifest:L})}};ce(Oe);
