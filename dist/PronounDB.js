function b(...e){return window.enmity.modules.getByProps(...e)}function re(...e){return window.enmity.modules.getByTypeName(...e)}function se(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function le(e){window.enmity.plugins.registerPlugin(e)}function me(e){return window.enmity.patcher.create(e)}const m=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const z=window.enmity.modules.common.Toasts,_=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const O=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const ce=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function K(e,n,o){window.enmity.settings.set(e,n,o)}function f(e,n,o){return window.enmity.settings.getBoolean(e,n,o)}function d(e){return window.enmity.assets.getIDByName(e)}var x={Failed:d("Small"),Delete:d("ic_message_delete"),Copy:d("toast_copy_link"),Open:d("ic_leave_stage"),Clipboard:d("pending-alert"),Clock:d("clock"),Pronoun:d("ic_accessibility_24px"),Settings:{Toasts:{Settings:d("ic_selection_checked_24px"),Failed:d("ic_close_circle_24px")},Initial:d("coffee"),Update:d("discover"),Locale:d("ic_locale_24px"),External:d("ic_raised_hand_list"),Edit:d("ic_edit_24px")}};const de=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),ue=(e,n)=>{z.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?x.Clipboard:x.Settings.Initial})};var C={shadow:de,displayToast:ue},v="PronounDB",A="1.2.3",pe="stable",he="Displays a Pronoun from PronounDB next to your name in the chat :3",ge=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],D={download:"https://raw.githubusercontent.com/DamitusThyYeetus123/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/DamitusThyYeetus123/enmity-pronoun-db",pronoundb:"https://pronoundb.org/",build:"patch-1.4.56",hash:"4c9efbe0"},ye="#ff91ff",L={name:v,version:A,release:pe,description:he,authors:ge,plugin:D,color:ye},k=(e,n,o,r,a)=>{try{return e(...n)}catch(l){console.warn(`[${o}] The following error happened when trying to ${r} ${a!=null?a:"unspecificied label"}: ${l}`);return}};const Q=(e,n,o,r)=>k(()=>{if(e){e.length++,o++;for(let a=e.length-1;a>=o;a--)e[a]=e[a-1];return e[o-1]=n,e.length}},[e,n,o],v,"insert an item at",r),we=(e,n,o)=>k(()=>{let r=[];for(let a=0;a<e.length;a++)Q(r,n(e[a],a,e),r.length);return r},[e,n],v,"map an array at",o);var X={mapItem:we,insertItem:Q};const{native:I}=window.enmity;function fe(){I.reload()}const Te=I.version;I.build,I.device,I.version;async function be(){await k(async function(){const e=`${D.download}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),r=n.match(/hash:"(.*?)"/);if(!o&&!r)return Ee(v,[A,D.build]);const a=o&&o[0],l=r&&r[1];return a&&a!=A?J(e,a,"version"):l&&l!=D.hash?J(e,l,"build"):ve(v,[A,D.hash])},[D],v,"checking if latest version at","the async check for updates callback")}const J=(e,n,o)=>{_.show({title:"Update found",body:`A newer ${o} is available for ${v}. ${o=="build"?`
The version will remain at ${A}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Se(e,n,o)})},ve=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),_.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},Ee=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),_.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function Se(e,n,o){await k(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?_.show({title:`Updated ${v}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>fe()}):console.log(`[${v}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],v,"installing plugin at","new version available")}var xe={checkForUpdates:be},u={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid pronouns, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),n=a=>this.queue.length<=0?a:this.map[a]?n(this.queue.shift()):a;for(const a of e)this.map[a]&&(e[a]=n(a));this.fetching=!0;const o=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),r=Object.fromEntries(Object.entries(o).filter(([a,l])=>!isNaN(+a)));Object.assign(this.map,r),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const V=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Ce=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const S=i.Text;i.TextInput,i.TouchableHighlight;const B=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const g=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const H=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const p=i.FormRow;i.FormSection,i.FormSelect,i.FormSubLabel;const Z=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;var ee,te;const $e=(te=(ee=b("View","Text"))==null?void 0:ee.Dimensions)==null?void 0:te.get("window").width;var ne=({style:e,source:n})=>{const[o,r]=t.useState({width:0,height:0}),[a,l]=t.useState(0),w=()=>{const s=$=>typeof $=="string"?parseInt($.replace("%",""))*$e/100:$,c=s(e.width);if(!e.maxWidth)return c;const E=s(e.maxWidth);return c>E?E:c};return t.useEffect(()=>{V.getSize(n,(s,c)=>{r({width:s,height:c})},s=>{console.error(`[${L.name}] ${s} when fetching ${n}`)}),l(w())},[]),t.createElement(V,{style:[...Array.isArray(e)?e:[e],{height:a*(o.height/o.width)}],source:{uri:n},resizeMode:"stretch"})};const{Animated:M}=window.enmity.modules.common.Components.General,oe=b("transitionToGuild"),Y=b("getUser","getCurrentUser"),h=O.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...C.shadow()},image:{width:75,height:75,borderRadius:10,...C.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:m.ThemeColorMap.HEADER_PRIMARY,fontFamily:m.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:m.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var Pe=({name:e,version:n,plugin:o,authors:r})=>{var a,l;const w=t.useRef(new M.Value(1)).current,s=()=>M.spring(w,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),c=()=>M.spring(w,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>ce.showUserProfile({userId:Y.getCurrentUser().id}),$={transform:[{scale:w}]};return t.createElement(t.Fragment,null,t.createElement(g,{style:h.container},t.createElement(B,{onPress:E,onPressIn:s,onPressOut:c},t.createElement(M.View,{style:$},t.createElement(V,{style:[h.image],source:{uri:(l=(a=Y==null?void 0:Y.getCurrentUser())==null?void 0:a.getAvatarURL())==null?void 0:l.replace("webp","png")}}))),t.createElement(g,{style:h.textContainer},t.createElement(B,{onPress:()=>oe.openURL(o.repo)},t.createElement(S,{style:[h.mainText,h.header]},e)),t.createElement(g,{style:{flexDirection:"row"}},t.createElement(S,{style:[h.mainText,h.subHeader]},"A project by"),X.mapItem(r,(T,P,R)=>t.createElement(B,{onPress:()=>oe.openURL(T.profile)},t.createElement(S,{style:[h.mainText,h.subHeader,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},T.name,P<R.length-1?",":null)))),t.createElement(g,null,t.createElement(B,{style:{flexDirection:"row"}},t.createElement(S,{style:[h.mainText,h.subHeader]},"Version:"),t.createElement(S,{style:[h.mainText,h.subHeader,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD}]},n))))))};const ie=O.createThemedStyleSheet({text:{color:m.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:m.Fonts.PRIMARY_BOLD,fontSize:12}});var q=({label:e,children:n,style:o})=>t.createElement(g,{style:[o,{marginTop:10}]},t.createElement(S,{style:[ie.text,ie.optionText]},e.toUpperCase()),n);const ae=b("transitionToGuild","openURL"),N=parseInt(Te.split(".")[0])>163?15:0,y=O.createThemedStyleSheet({icon:{color:m.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:m.ThemeColorMap.TEXT_MUTED,fontFamily:m.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...C.shadow()},subheaderText:{color:m.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:m.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var Re=({manifest:e})=>{const[n,o]=t.useState(f(e.name,"isTimestamp",!1)),[r,a]=t.useState(f(e.name,"isRole",!0));return t.createElement(Ce,null,t.createElement(Pe,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(g,{style:{marginTop:20}},t.createElement(q,{label:"Preferences"},t.createElement(g,{style:[y.container]},t.createElement(p,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>C.displayToast(`By default, ${e.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:x.Settings.Locale}),trailing:t.createElement(Z,{value:f(e.name,"isTimestamp",!1),style:{marginLeft:-N},onValueChange:()=>{K(e.name,"isTimestamp",!f(e.name,"isTimestamp",!1)),o(f(e.name,"isTimestamp",!1))}})}),t.createElement(H,null),t.createElement(p,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>C.displayToast(`With this option enabled, ${e.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:x.Settings.Edit}),trailing:t.createElement(Z,{value:f(e.name,"isRole",!0),style:{marginLeft:-N},onValueChange:()=>{K(e.name,"isRole",!f(e.name,"isRole",!0)),a(f(e.name,"isRole",!0))}})}))),t.createElement(q,{label:"Previews"},t.createElement(g,{style:{...y.container,maxWidth:350}},t.createElement(ne,{style:y.image,source:`https://cdn.discordapp.com/attachments/${n?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),t.createElement(g,{style:{...y.container,marginTop:10,maxWidth:350}},t.createElement(ne,{style:y.image,source:`https://cdn.discordapp.com/attachments/${r?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),t.createElement(q,{label:"Source"},t.createElement(g,{style:y.container},t.createElement(p,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>C.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:x.Settings.Update}),trailing:()=>t.createElement(p.Arrow,{style:{marginLeft:-N}}),onPress:async function(){await xe.checkForUpdates()}}),t.createElement(H,null),t.createElement(p,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>C.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:x.Open}),trailing:()=>t.createElement(p.Arrow,null),onPress:()=>{ae.openURL(e.plugin.repo)}}),t.createElement(H,null),t.createElement(p,{label:"PronounDB",subLabel:`Open the ${e.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>C.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:x.Settings.External}),trailing:()=>t.createElement(p.Arrow,{style:{marginLeft:-N}}),onPress:()=>{ae.openURL(e.plugin.pronoundb)}})))),t.createElement(S,{style:y.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};function De(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}const{useThemeContext:Le}=b("useThemeContext"),{meta:{resolveSemanticColor:Fe}}=b("colors","meta"),Ae=se("UserProfileSection"),{UserProfileGradientCard:Ie}=b("UserProfileGradientCard"),{triggerHaptic:Be}=b("triggerHaptic"),F=O.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:m.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:m.Fonts.DISPLAY_NORMAL}});var _e=({pronoun:e})=>{const n=Le(),o=Fe(n.theme,m.ThemeColorMap.TEXT_NORMAL);return t.createElement(Ae,{title:"Pronouns"},t.createElement(B,{onPress:()=>{z.open({content:e,source:x.Pronoun}),Be()},style:f(L.name,"isRole",!0)?{justifyContent:"center",alignItems:"center"}:{}},f(L.name,"isRole",!0)?t.createElement(Ie,{style:F.container,fallbackBackground:F.fallback.color},t.createElement(g,{style:F.innerContainer},t.createElement(g,{style:[F.circle,{backgroundColor:o}]}),t.createElement(S,{style:[F.text,{color:o}]},e))):t.createElement(S,{style:[F.text,{fontSize:16,color:o}]},e)))};const U=me("pronoun-db"),Oe=re("UserProfile"),ke=b("getUser"),j=b("View"),{DCDChatManager:Me}=j.NativeModules,Ne={...L,onStart(){U.before(ke,"getUser",(e,n,o)=>{const r=n[0];u.map[r]||X.insertItem(u.queue,r,u.queue.length,"user id pronoun queue"),u.updateQueuedPronouns()}),U.after(Oe,"type",(e,n,o)=>{var r,a,l,w,s;const c=(a=(r=De(o,T=>{var P,R;return((P=T==null?void 0:T.type)==null?void 0:P.displayName)==="View"&&((R=T==null?void 0:T.props)==null?void 0:R.children.findIndex(G=>{var W;return((W=G==null?void 0:G.type)==null?void 0:W.name)==="UserProfileBio"}))!==-1}))==null?void 0:r.props)==null?void 0:a.children;if(!c)return o;const{userId:E}=(s=(w=(l=c==null?void 0:c.find(T=>{var P,R;return typeof((R=(P=T==null?void 0:T.props)==null?void 0:P.displayProfile)==null?void 0:R.userId)=="string"}))==null?void 0:l.props)==null?void 0:w.displayProfile)!=null?s:{};if(!E||!u.map[E]||u.referenceMap[u.map[E]]==="unspecified")return o;const $=u.referenceMap[u.map[E]];c.unshift(t.createElement(_e,{pronoun:$}))}),U.before(Me,"updateRows",(e,n,o)=>{var r,a,l;const w=JSON.parse(n[1]);for(const s of w){if(s.type!==1||!((r=s==null?void 0:s.message)!=null&&r.authorId)||!u.map[(a=s==null?void 0:s.message)==null?void 0:a.authorId]||u.referenceMap[u.map[(l=s==null?void 0:s.message)==null?void 0:l.authorId]]==="unspecified")continue;const c=u.referenceMap[u.map[s.message.authorId]];if(f(L.name,"isTimestamp",!1)&&s.message.timestamp){s.message.timestamp+=" \u2022 "+c;continue}s.message.opTagText&&(s.message.tagText=s.message.tagText?s.message.tagText+" \u2022 ":""+s.message.opTagText),s.message.opTagText=c,s.message.opTagTextColor=j.processColor(styles.opTagTextColor.color),s.message.opTagBackgroundColor=j.processColor(styles.opTagBackgroundColor.color)}n[1]=JSON.stringify(w)})},onStop(){U.unpatchAll()},getSettingsPanel(){return t.createElement(Re,{manifest:L})}};le(Ne);
