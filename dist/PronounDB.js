function b(...e){return window.enmity.modules.getByProps(...e)}function se(...e){return window.enmity.modules.getByTypeName(...e)}function le(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;function me(e){window.enmity.plugins.registerPlugin(e)}function ce(e){return window.enmity.patcher.create(e)}const l=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const z=window.enmity.modules.common.Toasts,O=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale;const de=window.enmity.modules.common.Profiles;window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function K(e,n,o){window.enmity.settings.set(e,n,o)}function f(e,n,o){return window.enmity.settings.getBoolean(e,n,o)}function d(e){return window.enmity.assets.getIDByName(e)}var C={Failed:d("Small"),Delete:d("ic_message_delete"),Copy:d("toast_copy_link"),Open:d("ic_leave_stage"),Clipboard:d("pending-alert"),Clock:d("clock"),Pronoun:d("ic_accessibility_24px"),Settings:{Toasts:{Settings:d("ic_selection_checked_24px"),Failed:d("ic_close_circle_24px")},Initial:d("coffee"),Update:d("discover"),Locale:d("ic_locale_24px"),External:d("ic_raised_hand_list"),Edit:d("ic_edit_24px")}};const ue=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),pe=(e,n)=>{z.open({content:n=="clipboard"?`Copied ${e} to clipboard.`:e,source:n=="clipboard"?C.Clipboard:C.Settings.Initial})};var x={shadow:ue,displayToast:pe},v="PronounDB",F="1.2.3",he="stable",ge="Displays a Pronoun from PronounDB next to your name in the chat :3",ye=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],D={download:"https://raw.githubusercontent.com/DamitusThyYeetus123/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/DamitusThyYeetus123/enmity-pronoun-db",pronoundb:"https://pronoundb.org/",build:"patch-1.4.56",hash:"a501723e"},we="#ff91ff",L={name:v,version:F,release:he,description:ge,authors:ye,plugin:D,color:we},M=(e,n,o,r,a)=>{try{return e(...n)}catch(m){console.warn(`[${o}] The following error happened when trying to ${r} ${a!=null?a:"unspecificied label"}: ${m}`);return}};const Q=(e,n,o,r)=>M(()=>{if(e){e.length++,o++;for(let a=e.length-1;a>=o;a--)e[a]=e[a-1];return e[o-1]=n,e.length}},[e,n,o],v,"insert an item at",r),fe=(e,n,o)=>M(()=>{let r=[];for(let a=0;a<e.length;a++)Q(r,n(e[a],a,e),r.length);return r},[e,n],v,"map an array at",o);var X={mapItem:fe,insertItem:Q};const{native:_}=window.enmity;function Te(){_.reload()}const be=_.version;_.build,_.device,_.version;async function ve(){await M(async function(){const e=`${D.download}?${Math.floor(Math.random()*1001)}.js`,n=await(await fetch(e)).text(),o=n.match(/\d+\.\d+\.\d+/g),r=n.match(/hash:"(.*?)"/);if(!o&&!r)return Se(v,[F,D.build]);const a=o&&o[0],m=r&&r[1];return a&&a!=F?J(e,a,"version"):m&&m!=D.hash?J(e,m,"build"):Ee(v,[F,D.hash])},[D],v,"checking if latest version at","the async check for updates callback")}const J=(e,n,o)=>{O.show({title:"Update found",body:`A newer ${o} is available for ${v}. ${o=="build"?`
The version will remain at ${F}, but the build will update to ${n}.`:""}
Would you like to install ${o} \`${n}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>Ce(e,n,o)})},Ee=(e,[n,o])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${n} and build ${o}`),O.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})},Se=(e,[n,o])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${n} and ${o}`),O.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${n}\`
Build: \`${o}\``,confirmText:"Okay"})};async function Ce(e,n,o){await M(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?O.show({title:`Updated ${v}`,body:`Successfully updated to ${o} \`${n}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>Te()}):console.log(`[${v}] Plugin failed to update to ${o} ${n}.`)})},[e,n,o],v,"installing plugin at","new version available")}var xe={checkForUpdates:ve},u={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid pronouns, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),n=a=>this.queue.length<=0?a:this.map[a]?n(this.queue.shift()):a;for(const a of e)this.map[a]&&(e[a]=n(a));this.fetching=!0;const o=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),r=Object.fromEntries(Object.entries(o).filter(([a,m])=>!isNaN(+a)));Object.assign(this.map,r),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:i}=window.enmity;i.Alert,i.Button,i.FlatList;const V=i.Image;i.ImageBackground,i.KeyboardAvoidingView,i.Modal,i.Pressable,i.RefreshControl;const Re=i.ScrollView;i.SectionList,i.StatusBar,i.StyleSheet,i.Switch;const S=i.Text;i.TextInput,i.TouchableHighlight;const B=i.TouchableOpacity;i.TouchableWithoutFeedback,i.Touchable;const g=i.View;i.VirtualizedList,i.Form,i.FormArrow,i.FormCTA,i.FormCTAButton,i.FormCardSection,i.FormCheckbox;const H=i.FormDivider;i.FormHint,i.FormIcon,i.FormInput,i.FormLabel,i.FormRadio;const p=i.FormRow;i.FormSection,i.FormSelect,i.FormSubLabel;const Z=i.FormSwitch;i.FormTernaryCheckBox,i.FormText,i.FormTextColors,i.FormTextSizes;var ee,te;const $e=(te=(ee=b("View","Text"))==null?void 0:ee.Dimensions)==null?void 0:te.get("window").width;var ne=({style:e,source:n})=>{const[o,r]=t.useState({width:0,height:0}),[a,m]=t.useState(0),w=()=>{const s=R=>typeof R=="string"?parseInt(R.replace("%",""))*$e/100:R,c=s(e.width);if(!e.maxWidth)return c;const E=s(e.maxWidth);return c>E?E:c};return t.useEffect(()=>{V.getSize(n,(s,c)=>{r({width:s,height:c})},s=>{console.error(`[${L.name}] ${s} when fetching ${n}`)}),m(w())},[]),t.createElement(V,{style:[...Array.isArray(e)?e:[e],{height:a*(o.height/o.width)}],source:{uri:n},resizeMode:"stretch"})};const{Animated:k}=window.enmity.modules.common.Components.General,oe=b("transitionToGuild"),Y=b("getUser","getCurrentUser"),h=I.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...x.shadow()},image:{width:75,height:75,borderRadius:10,...x.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:l.ThemeColorMap.HEADER_PRIMARY,fontFamily:l.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:l.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var Pe=({name:e,version:n,plugin:o,authors:r})=>{var a,m;const w=t.useRef(new k.Value(1)).current,s=()=>k.spring(w,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),c=()=>k.spring(w,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>de.showUserProfile({userId:Y.getCurrentUser().id}),R={transform:[{scale:w}]};return t.createElement(t.Fragment,null,t.createElement(g,{style:h.container},t.createElement(B,{onPress:E,onPressIn:s,onPressOut:c},t.createElement(k.View,{style:R},t.createElement(V,{style:[h.image],source:{uri:(m=(a=Y==null?void 0:Y.getCurrentUser())==null?void 0:a.getAvatarURL())==null?void 0:m.replace("webp","png")}}))),t.createElement(g,{style:h.textContainer},t.createElement(B,{onPress:()=>oe.openURL(o.repo)},t.createElement(S,{style:[h.mainText,h.header]},e)),t.createElement(g,{style:{flexDirection:"row"}},t.createElement(S,{style:[h.mainText,h.subHeader]},"A project by"),X.mapItem(r,(T,$,P)=>t.createElement(B,{onPress:()=>oe.openURL(T.profile)},t.createElement(S,{style:[h.mainText,h.subHeader,{paddingLeft:4,fontFamily:l.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},T.name,$<P.length-1?",":null)))),t.createElement(g,null,t.createElement(B,{style:{flexDirection:"row"}},t.createElement(S,{style:[h.mainText,h.subHeader]},"Version:"),t.createElement(S,{style:[h.mainText,h.subHeader,{paddingLeft:4,fontFamily:l.Fonts.DISPLAY_BOLD}]},n))))))};const ie=I.createThemedStyleSheet({text:{color:l.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:l.Fonts.PRIMARY_BOLD,fontSize:12}});var G=({label:e,children:n,style:o})=>t.createElement(g,{style:[o,{marginTop:10}]},t.createElement(S,{style:[ie.text,ie.optionText]},e.toUpperCase()),n);const ae=b("transitionToGuild","openURL"),N=parseInt(be.split(".")[0])>163?15:0,y=I.createThemedStyleSheet({icon:{color:l.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:l.ThemeColorMap.TEXT_MUTED,fontFamily:l.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:l.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...x.shadow()},subheaderText:{color:l.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:l.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",maxWidth:350,borderRadius:10}});var De=({manifest:e})=>{const[n,o]=t.useState(f(e.name,"isTimestamp",!1)),[r,a]=t.useState(f(e.name,"isRole",!0));return t.createElement(Re,null,t.createElement(Pe,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(g,{style:{marginTop:20}},t.createElement(G,{label:"Preferences"},t.createElement(g,{style:[y.container]},t.createElement(p,{label:"Timestamps",subLabel:"Use Timestamps instead of OP Tag for the pronoun in the chat area.",onLongPress:()=>x.displayToast(`By default, ${e.name} will use the OP tag to display pronouns. Toggling this option will always use Timestamps instead of OP tag for pronouns.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:C.Settings.Locale}),trailing:t.createElement(Z,{value:f(e.name,"isTimestamp",!1),style:{marginLeft:-N},onValueChange:()=>{K(e.name,"isTimestamp",!f(e.name,"isTimestamp",!1)),o(f(e.name,"isTimestamp",!1))}})}),t.createElement(H,null),t.createElement(p,{label:"Roles",subLabel:"Show the pronoun styled as a role instead of plain text inside of profiles.",onLongPress:()=>x.displayToast(`With this option enabled, ${e.name} will style pronouns as roles in profiles. Otherwise, it will style them as plain text.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:C.Settings.Edit}),trailing:t.createElement(Z,{value:f(e.name,"isRole",!0),style:{marginLeft:-N},onValueChange:()=>{K(e.name,"isRole",!f(e.name,"isRole",!0)),a(f(e.name,"isRole",!0))}})}))),t.createElement(G,{label:"Previews"},t.createElement(g,{style:{...y.container,maxWidth:350}},t.createElement(ne,{style:y.image,source:`https://cdn.discordapp.com/attachments/${n?"1011346757214543875/1075007230337896448/pronoun-timestamp.png":"1011346757214543875/1075007230107193374/pronoun-tag.png"}`})),t.createElement(g,{style:{...y.container,marginTop:10,maxWidth:350}},t.createElement(ne,{style:y.image,source:`https://cdn.discordapp.com/attachments/${r?"1011346757214543875/1075007778399199282/profile-role.png":"1011346757214543875/1075007778067841044/profile-plain.png"}`}))),t.createElement(G,{label:"Source"},t.createElement(g,{style:y.container},t.createElement(p,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>x.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:C.Settings.Update}),trailing:()=>t.createElement(p.Arrow,{style:{marginLeft:-N}}),onPress:async function(){await xe.checkForUpdates()}}),t.createElement(H,null),t.createElement(p,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>x.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:C.Open}),trailing:()=>t.createElement(p.Arrow,null),onPress:()=>{ae.openURL(e.plugin.repo)}}),t.createElement(H,null),t.createElement(p,{label:"PronounDB",subLabel:`Open the ${e.name} website externally at \`https://pronoundb.org\`.`,onLongPress:()=>x.displayToast("Opens the PronounDB website in an external page which allows you to link your Discord account to PronounDB.","tooltip"),leading:t.createElement(p.Icon,{style:y.icon,source:C.Settings.External}),trailing:()=>t.createElement(p.Arrow,{style:{marginLeft:-N}}),onPress:()=>{ae.openURL(e.plugin.pronoundb)}})))),t.createElement(S,{style:y.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};function Le(e,n,o){return window.enmity.utilities.findInReactTree(e,n,o)}const{useThemeContext:Ae}=b("useThemeContext"),{meta:{resolveSemanticColor:Ie}}=b("colors","meta"),Fe=le("UserProfileSection"),{UserProfileGradientCard:_e}=b("UserProfileGradientCard"),{triggerHaptic:Be}=b("triggerHaptic"),A=I.createThemedStyleSheet({container:{alignSelf:"flex-start",padding:1,borderRadius:9,width:"100%",marginTop:-4,marginRight:-12},innerContainer:{paddingHorizontal:6,paddingVertical:8,overflow:"hidden",flexDirection:"row",justifyContent:"center",alignItems:"center"},circle:{width:10,height:10,borderRadius:10/2,marginRight:6},fallback:{color:l.ThemeColorMap.BACKGROUND_SECONDARY_ALT},text:{fontFamily:l.Fonts.DISPLAY_NORMAL}});var Oe=({pronoun:e})=>{const n=Ae(),o=Ie(n.theme,l.ThemeColorMap.TEXT_NORMAL);return t.createElement(Fe,{title:"Pronouns"},t.createElement(B,{onPress:()=>{z.open({content:e,source:C.Pronoun}),Be()},style:f(L.name,"isRole",!0)?{justifyContent:"center",alignItems:"center"}:{}},f(L.name,"isRole",!0)?t.createElement(_e,{style:A.container,fallbackBackground:A.fallback.color},t.createElement(g,{style:A.innerContainer},t.createElement(g,{style:[A.circle,{backgroundColor:o}]}),t.createElement(S,{style:[A.text,{color:o}]},e))):t.createElement(S,{style:[A.text,{fontSize:16,color:o}]},e)))};const U=ce("pronoun-db"),Me=se("UserProfile"),ke=b("getUser"),q=b("View"),{DCDChatManager:Ne}=q.NativeModules,re=I.createThemedStyleSheet({opTagBackgroundColor:{color:l.ThemeColorMap.HEADER_PRIMARY},opTagTextColor:{color:l.ThemeColorMap.BACKGROUND_PRIMARY},mention:{color:l.ThemeColorMap.BACKGROUND_MENTIONED_HOVER}}),Ue={...L,onStart(){U.before(ke,"getUser",(e,n,o)=>{const r=n[0];u.map[r]||X.insertItem(u.queue,r,u.queue.length,"user id pronoun queue"),u.updateQueuedPronouns()}),U.after(Me,"type",(e,n,o)=>{var r,a,m,w,s;const c=(a=(r=Le(o,T=>{var $,P;return(($=T==null?void 0:T.type)==null?void 0:$.displayName)==="View"&&((P=T==null?void 0:T.props)==null?void 0:P.children.findIndex(j=>{var W;return((W=j==null?void 0:j.type)==null?void 0:W.name)==="UserProfileBio"}))!==-1}))==null?void 0:r.props)==null?void 0:a.children;if(!c)return o;const{userId:E}=(s=(w=(m=c==null?void 0:c.find(T=>{var $,P;return typeof((P=($=T==null?void 0:T.props)==null?void 0:$.displayProfile)==null?void 0:P.userId)=="string"}))==null?void 0:m.props)==null?void 0:w.displayProfile)!=null?s:{};if(!E||!u.map[E]||u.referenceMap[u.map[E]]==="unspecified")return o;const R=u.referenceMap[u.map[E]];c.unshift(t.createElement(Oe,{pronoun:R}))}),U.before(Ne,"updateRows",(e,n,o)=>{var r,a,m;const w=JSON.parse(n[1]);for(const s of w){if(s.type!==1||!((r=s==null?void 0:s.message)!=null&&r.authorId)||!u.map[(a=s==null?void 0:s.message)==null?void 0:a.authorId]||u.referenceMap[u.map[(m=s==null?void 0:s.message)==null?void 0:m.authorId]]==="unspecified")continue;const c=u.referenceMap[u.map[s.message.authorId]];if(f(L.name,"isTimestamp",!1)&&s.message.timestamp){s.message.timestamp+=" \u2022 "+c;continue}s.message.opTagText&&(s.message.tagText=s.message.tagText?s.message.tagText+" \u2022 ":""+s.message.opTagText),s.message.opTagText=c,s.message.opTagTextColor=q.processColor(re.opTagTextColor.color),s.message.opTagBackgroundColor=q.processColor(re.opTagBackgroundColor.color)}n[1]=JSON.stringify(w)})},onStop(){U.unpatchAll()},getSettingsPanel(){return t.createElement(De,{manifest:L})}};me(Ue);
