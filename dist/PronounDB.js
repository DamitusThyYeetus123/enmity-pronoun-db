function S(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;function W(e){window.enmity.plugins.registerPlugin(e)}function Q(e){return window.enmity.patcher.create(e)}const m=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const t=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const J=window.enmity.modules.common.Toasts,P=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const I=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function K(e,o,n){window.enmity.settings.set(e,o,n)}function C(e,o,n){return window.enmity.settings.getBoolean(e,o,n)}var d="PronounDB",$="1.1.0",X="stable",Z="Displays a Pronoun from PronounDB next to your name in the chat :3",ee=[{name:"Acquite<3",id:"581573474296791211",profile:"https://github.com/acquitelol"}],v={download:"https://raw.githubusercontent.com/acquitelol/enmity-pronoun-db/main/dist/PronounDB.js",repo:"https://github.com/acquitelol/enmity-pronoun-db",build:"patch-1.4.56",hash:"dc5ab0d0"},te="#ff91ff",k={name:d,version:$,release:X,description:Z,authors:ee,plugin:v,color:te},F=(e,o,n,r,i)=>{try{return e(...o)}catch(l){console.warn(`[${n}] The following error happened when trying to ${r} ${i!=null?i:"unspecificied label"}: ${l}`);return}};function u(e){return window.enmity.assets.getIDByName(e)}var x={Failed:u("Small"),Delete:u("ic_message_delete"),Copy:u("toast_copy_link"),Open:u("ic_leave_stage"),Clipboard:u("pending-alert"),Clock:u("clock"),Settings:{Toasts:{Settings:u("ic_selection_checked_24px"),Failed:u("ic_close_circle_24px")},Initial:u("coffee"),Update:u("discover"),Locale:u("ic_locale_24px")}};const oe=(e=.1)=>({shadowColor:"#000",shadowOffset:{width:1,height:4},shadowOpacity:e,shadowRadius:4.65,elevation:8}),ne=(e,o)=>{J.open({content:o=="clipboard"?`Copied ${e} to clipboard.`:e,source:o=="clipboard"?x.Clipboard:x.Settings.Initial})},ae=(e,o,n,r=186,i)=>F(()=>{let l=e.replace("#","");const w=(L,R,G)=>parseInt(L.substring(R[0],R[1]),G),E=w(l,[0,2],16),s=w(l,[2,4],16),p=w(l,[4,6],16);return(E+s+p)/(255*3)>r?n:o},[e,o,n,r],d,"checking if color should be light or dark at",i),N=S("getCurrentUser"),ie=N.getCurrentUser()?N.getCurrentUser().getAvatarURL().replace("webp","png"):"https://cdn.discordapp.com/avatars/581573474296791211/4429e2dbe2bfcfbd34fb1778c802144d.png?size=1280";var y={shadow:oe,displayToast:ne,filterColor:ae,localizedImage:ie};const V=(e,o,n,r)=>F(()=>{if(e){e.length++,n++;for(let i=e.length-1;i>=n;i--)e[i]=e[i-1];return e[n-1]=o,e.length}},[e,o,n],d,"insert an item at",r),re=(e,o,n)=>F(()=>{let r=[];for(let i=0;i<e.length;i++)V(r,o(e[i],i,e),r.length);return r},[e,o],d,"map an array at",n);var H={mapItem:re,insertItem:V};const{native:D}=window.enmity;function se(){D.reload()}D.version,D.build,D.device,D.version;async function le(){await F(async function(){const e=`${v.download}?${Math.floor(Math.random()*1001)}.js`,o=await(await fetch(e)).text(),n=o.match(/\d+\.\d+\.\d+/g),r=o.match(/hash:".*"/g);if(!n&&!r)return ce(d,[$,v.build]);const i=n&&n[0],l=r&&r[0].replace('hash:"',"").replace('"',"");return i&&i!=$?q(e,i,"version"):l&&l!=v.hash?q(e,l,"build"):me(d,[$,v.hash])},[v],d,"checking if latest version at","the async check for updates callback")}const q=(e,o,n)=>{P.show({title:"Update found",body:`A newer ${n} is available for ${d}. ${n=="build"?`
The version will remain at ${$}, but the build will update to ${o}.`:""}
Would you like to install ${n} \`${o}\` now?`,confirmText:"Update",cancelText:"Not now",onConfirm:()=>de(e,o,n)})},me=(e,[o,n])=>{console.log(`[${e}] Plugin is on the latest update, which is version ${o} and build ${n}`),P.show({title:"Already on latest",body:`${e} is already updated to the latest version.
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})},ce=(e,[o,n])=>{console.log(`[${e}] Plugin failed to update to the latest version and build, remaining at ${o} and ${n}`),P.show({title:"Failed",body:`${e} to find a new version or build.
The current versions will remain as follows:
Version: \`${o}\`
Build: \`${n}\``,confirmText:"Okay"})};async function de(e,o,n){await F(async function(){window.enmity.plugins.installPlugin(e,({data:r})=>{r=="installed_plugin"||r=="overridden_plugin"?P.show({title:`Updated ${d}`,body:`Successfully updated to ${n} \`${o}\`. 
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Not now",onConfirm:()=>se()}):console.log(`[${d}] Plugin failed to update to ${n} ${o}.`)})},[e,o,n],d,"installing plugin at","new version available")}var ue={checkForUpdates:le},h={map:{},queue:[],fetching:!1,referenceMap:{hh:"he/him",hi:"he/it",hs:"he/she",ht:"he/they",ih:"it/him",ii:"it/its",is:"it/she",it:"it/they",shh:"she/he",sh:"she/her",si:"she/it",st:"she/they",th:"they/he",ti:"they/it",ts:"they/she",tt:"they/them",any:"any",other:"other",ask:"ask",avoid:"avoid, use name",unspecified:"unspecified"},async updateQueuedPronouns(){if(this.queue.length<=0||this.fetching)return;const e=this.queue.splice(0,49),o=i=>this.queue.length<=0?i:this.map[i]?o(this.queue.shift()):i;for(const i of e)this.map[i]&&(e[i]=o(i));this.fetching=!0;const n=await(await fetch(`https://pronoundb.org/api/v1/lookup-bulk?platform=discord&ids=${e.join(",")}`,{method:"GET",headers:{Accept:"application/json","X-PronounDB-Source":"Enmity"}})).json(),r=Object.fromEntries(Object.entries(n).filter(([i,l])=>!isNaN(+i)));Object.assign(this.map,r),this.fetching=!1,this.queue.length>0&&this.updateQueuedPronouns()}};const{components:a}=window.enmity;a.Alert,a.Button,a.FlatList;const Y=a.Image;a.ImageBackground,a.KeyboardAvoidingView,a.Modal,a.Pressable,a.RefreshControl;const pe=a.ScrollView;a.SectionList,a.StatusBar,a.StyleSheet,a.Switch;const T=a.Text;a.TextInput,a.TouchableHighlight;const A=a.TouchableOpacity;a.TouchableWithoutFeedback,a.Touchable;const g=a.View;a.VirtualizedList,a.Form,a.FormArrow,a.FormCTA,a.FormCTAButton,a.FormCardSection,a.FormCheckbox;const he=a.FormDivider;a.FormHint,a.FormIcon,a.FormInput,a.FormLabel,a.FormRadio;const f=a.FormRow;a.FormSection,a.FormSelect,a.FormSubLabel;const ge=a.FormSwitch;a.FormTernaryCheckBox,a.FormText,a.FormTextColors,a.FormTextSizes;const B=window.enmity.modules.common.Components.General.Animated,O=S("transitionToGuild"),c=I.createThemedStyleSheet({container:{marginTop:25,marginLeft:"5%",marginBottom:-15,flexDirection:"row"},textContainer:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap",...y.shadow()},image:{width:75,height:75,borderRadius:10,...y.shadow()},mainText:{opacity:.975,letterSpacing:.25},header:{color:m.ThemeColorMap.HEADER_PRIMARY,fontFamily:m.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},subHeader:{color:m.ThemeColorMap.HEADER_SECONDARY,fontSize:12.75}});var we=({name:e,version:o,plugin:n,authors:r})=>{const i=t.useRef(new B.Value(1)).current,l=()=>B.spring(i,{toValue:1.1,duration:10,useNativeDriver:!0}).start(),w=()=>B.spring(i,{toValue:1,duration:250,useNativeDriver:!0}).start(),E=()=>O.openURL(n.repo),s={transform:[{scale:i}]};return t.createElement(t.Fragment,null,t.createElement(g,{style:c.container},t.createElement(A,{onPress:E,onPressIn:l,onPressOut:w},t.createElement(B.View,{style:s},t.createElement(Y,{style:[c.image],source:{uri:y.localizedImage}}))),t.createElement(g,{style:c.textContainer},t.createElement(A,{onPress:()=>O.openURL(n.repo)},t.createElement(T,{style:[c.mainText,c.header]},e)),t.createElement(g,{style:{flexDirection:"row"}},t.createElement(T,{style:[c.mainText,c.subHeader]},"A project by"),H.mapItem(r,(p,L,R)=>t.createElement(A,{onPress:()=>O.openURL(p.profile)},t.createElement(T,{style:[c.mainText,c.subHeader,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD,flexDirection:"row"}]},p.name,L<R.length-1?",":null)))),t.createElement(g,null,t.createElement(A,{style:{flexDirection:"row"}},t.createElement(T,{style:[c.mainText,c.subHeader]},"Version:"),t.createElement(T,{style:[c.mainText,c.subHeader,{paddingLeft:4,fontFamily:m.Fonts.DISPLAY_BOLD}]},o))))))};const z=I.createThemedStyleSheet({text:{color:m.ThemeColorMap.HEADER_SECONDARY,paddingLeft:"5.5%",paddingRight:10,marginBottom:10,letterSpacing:.25,fontFamily:m.Fonts.PRIMARY_BOLD,fontSize:12}});var _=({label:e,component:o})=>t.createElement(g,{style:{marginTop:10}},t.createElement(T,{style:[z.text,z.optionText]},e.toUpperCase()),o);const ye=S("transitionToGuild"),b=I.createThemedStyleSheet({icon:{color:m.ThemeColorMap.INTERACTIVE_NORMAL},item:{color:m.ThemeColorMap.TEXT_MUTED,fontFamily:m.Fonts.PRIMARY_MEDIUM},container:{width:"90%",marginLeft:"5%",borderRadius:10,backgroundColor:m.ThemeColorMap.BACKGROUND_MOBILE_SECONDARY,...y.shadow()},subheaderText:{color:m.ThemeColorMap.HEADER_SECONDARY,textAlign:"center",margin:10,marginBottom:50,letterSpacing:.25,fontFamily:m.Fonts.PRIMARY_BOLD,fontSize:14},image:{width:"100%",height:60,borderRadius:10}});var fe=({manifest:e})=>{const[o,n]=t.useState(C(e.name,"isTimestamp",!1));return t.createElement(pe,null,t.createElement(we,{name:e.name,version:e.version,plugin:e.plugin,authors:e.authors}),t.createElement(g,{style:{marginTop:20}},t.createElement(_,{label:"Timestamps",component:t.createElement(t.Fragment,null,t.createElement(g,{style:b.container},t.createElement(f,{label:"Timestamps",subLabel:"Use Timestamps instead of OP/Bot Tag for the pronoun in the chat area.",onLongPress:()=>y.displayToast(`By default, ${e.name} will use the OP tag, and the Bot tag when this is unavailable. By toggling this option, ${e.name} will always use Timestamps instead of OP/Bot tag for the pronouns.`,"tooltip"),leading:t.createElement(f.Icon,{style:b.icon,source:x.Settings.Locale}),trailing:t.createElement(ge,{value:C(e.name,"isTimestamp",!1),onValueChange:()=>{K(e.name,"isTimestamp",!C(e.name,"isTimestamp",!1)),n(C(e.name,"isTimestamp",!1))}})})))}),t.createElement(_,{label:"Preview",component:t.createElement(t.Fragment,null,t.createElement(g,{style:b.container},t.createElement(Y,{style:b.image,source:{uri:`https://cdn.discordapp.com/attachments/${o?"1011346757214543875/1073350999445614694/timestamp-pronoun.png":"1011346757214543875/1073351873530183690/tag-pronoun.png"}`},resizeMode:"contain"})))}),t.createElement(_,{label:"Source",component:t.createElement(t.Fragment,null,t.createElement(g,{style:b.container},t.createElement(f,{label:"Check for Updates",subLabel:`Search for any ${e.name} updates and notify you if an update is available.`,onLongPress:()=>y.displayToast(`Search GitHub for any new version or build of ${e.name} and prompts you to update, and then prompts you to restart Enmity afterwards.`,"tooltip"),leading:t.createElement(f.Icon,{style:b.icon,source:x.Settings.Update}),trailing:()=>t.createElement(f.Arrow,null),onPress:async function(){await ue.checkForUpdates()}}),t.createElement(he,null),t.createElement(f,{label:"Source",subLabel:`Open the repository of ${e.name} externally.`,onLongPress:()=>y.displayToast(`Opens the repository of ${e.name} on GitHub in an external page to view any source code of the plugin.`,"tooltip"),leading:t.createElement(f.Icon,{style:b.icon,source:x.Open}),trailing:()=>t.createElement(f.Arrow,null),onPress:()=>{ye.openURL(e.plugin.repo)}})))})),t.createElement(T,{style:b.subheaderText},`Build: (${e.plugin.hash}) Release: (${e.release})`))};const M=Q("pronoun-db"),be=S("getUser"),U=S("View"),{DCDChatManager:Te}=U.NativeModules,j=I.createThemedStyleSheet({opTagBackgroundColor:{color:m.ThemeColorMap.HEADER_PRIMARY}}),ve={...k,onStart(){M.before(be,"getUser",(e,o,n)=>{const r=o[0];h.map[r]||H.insertItem(h.queue,r,h.queue.length,"user id pronoun queue"),h.updateQueuedPronouns()}),M.before(Te,"updateRows",(e,o,n)=>{var r,i,l;const w=JSON.parse(o[1]),E=(...s)=>s.some(p=>p);for(const s of w){if(E(s.type!==1,!((r=s==null?void 0:s.message)!=null&&r.authorId),!h.map[(i=s==null?void 0:s.message)==null?void 0:i.authorId],h.referenceMap[h.map[(l=s==null?void 0:s.message)==null?void 0:l.authorId]]==="unspecified"))continue;const p=h.referenceMap[h.map[s.message.authorId]];if(C(k.name,"isTimestamp",!1)&&s.message.timestamp){s.message.timestamp+=" \u2022 "+p;continue}s.message.opTagText?s.message.tagText||(s.message.tagText=p):(s.message.opTagText=p,s.message.opTagTextColor=U.processColor(y.filterColor(j.opTagBackgroundColor.color,"#212121","#121212")),s.message.opTagBackgroundColor=U.processColor(j.opTagBackgroundColor.color))}o[1]=JSON.stringify(w)})},onStop(){M.unpatchAll()},getSettingsPanel(){return t.createElement(fe,{manifest:k})}};W(ve);
