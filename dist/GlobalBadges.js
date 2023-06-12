const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList;const I=o.Image;o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const O=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const u=o.Text;o.TextInput,o.TouchableHighlight;const j=o.TouchableOpacity;o.TouchableWithoutFeedback,o.Touchable;const p=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const h=o.FormRow,F=o.FormSection;o.FormSelect,o.FormSubLabel;const $=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function Y(e){window.enmity.plugins.registerPlugin(e)}function z(...e){return window.enmity.modules.getByProps(...e)}function G(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const W=window.enmity.modules.common.Toasts,C=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const K=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const X=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function J(e){return window.enmity.patcher.create(e)}function U(e,t,a){window.enmity.settings.set(e,t,a)}function f(e,t,a){return window.enmity.settings.get(e,t,a)}var T="GlobalBadges",D="1.2.5",q="Adds global badges from other client mods",A=[{name:"HypedDomi",id:"354191516979429376"}],Q="#E54B4B",Z="https://raw.githubusercontent.com/HypedDomi/Enmity-Stuff/main/dist/GlobalBadges.js",V="https://github.com/HypedDomi/Enmity-Stuff/tree/main/GlobalBadges",k=["Improved Updater","Fixed Replugged Bug Hunter Badge"],R="8633d0cf0eddae7a6a64708f9285e13839dd0ab3",v={name:T,version:D,description:q,authors:A,color:Q,rawUrl:Z,sourceUrl:V,changelog:k,hash:R};const{native:b}=window.enmity;function ee(){b.reload()}b.version,b.build,b.device,b.version;const _={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:e,version:t,rawUrl:a,changelog:i,hash:r}){if(!e||!t||!a||!i||!r)return console.error(`[${e||__filename}] Missing parameters in constructor`);this.name=e,this.version=t,this.rawUrl=a,this.changelog=i,this.hash=r,f(e,"_didUpdate",!1)||(f(e,"_changelog",t)!==t&&this.showChangelog(),f(e,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),U(e,"_didUpdate",!1)},showChangelog(){!this.changelog||C.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>U(this.name,"_changelog",this.version)})},async checkForUpdates(e=!1){var t,a,i,r,d,l;const m=await(await fetch(`${this.rawUrl}?${Math.random()}`)).text(),c=(t=m.match(/hash:(\w+)/))==null?void 0:t[1],s=(a=m.match(new RegExp(`${c}="([^,"]+)"`)))==null?void 0:a[1];s?this.remoteHash=s!=null?s:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const E=(i=m.match(/version:(\w+)/))==null?void 0:i[1],S=(r=m.match(new RegExp(`${E}="([^,"]+)"`)))==null?void 0:r[1];S?this.remoteVersion=S:console.warn(`[${this.name}] Failed to fetch remote version`);const y=(d=m.match(/changelog:(\w+)/))==null?void 0:d[1],L=(l=m.match(new RegExp(`${y}=\\[(.*?)\\]`)))==null?void 0:l[0];if(L?this.remoteChangelog=JSON.parse(L.replace(`${y}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const x=this.version.split(".").map(Number),P=this.remoteVersion.split(".").map(Number);for(let w=0;w<x.length;w++){if(P[w]>x[w])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(P[w]<x[w])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!e||C.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:e,hash:t,changelog:a}){if(!e&&!t)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let i="";e?i=`New Version for ${this.name} is available!`:i=`New Build for ${this.name} is available!`,i+=`
Would you like to update now?`,a&&(i+=`

Changelog:
- ${a.join(`
- `)}`),C.show({title:"Plugin Updater",body:i,confirmText:"Update",cancelText:"No",onConfirm:()=>{U(this.name,"_didUpdate",!0),this.installPlugin(!!t)}})},installPlugin(e=!1){var t;const a=e?"updated Build":"updated Version",i=e?`\`${(t=this.remoteHash)==null?void 0:t.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:r})=>{r==="installed_plugin"||r==="overridden_plugin"?C.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${a} to **${i}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:ee}):console.error(`[${this.name}] Failed to install v${i}`)})}},H=z("transitionToGuild","openURL");_.create(v);var te=({settings:e})=>{const t=X.createThemedStyleSheet({item:{color:g.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:g.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[a,i]=n.useState(),[r,d]=n.useState();return n.createElement(n.Fragment,null,n.createElement(O,{onTouchStart:l=>{i(l.nativeEvent.pageX),d(l.nativeEvent.pageY)},onTouchEnd:l=>{a-l.nativeEvent.pageX<-100&&r-l.nativeEvent.pageY<40&&r-l.nativeEvent.pageY>-40&&K.pop()}},n.createElement(p,null,n.createElement(p,{style:t.text_container},n.createElement(u,{style:[t.main_text,t.header]},T),n.createElement(p,{style:{flexDirection:"row"}},n.createElement(u,{style:[t.main_text,t.sub_header]},"Author:"),n.createElement(u,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${A.map(l=>l.name).join(", ")}`)),n.createElement(p,{style:{flexDirection:"row"}},n.createElement(u,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(u,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${D}`)),n.createElement(p,{style:{flexDirection:"row"}},n.createElement(u,{style:[t.main_text,t.sub_header]},"Hash:"),n.createElement(u,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${R.slice(0,7)}`)))),n.createElement(F,{title:"Badges"},n.createElement(h,{label:"Prefix",subLabel:"Shows the Mod as Prefix",trailing:n.createElement($,{value:e.getBoolean("showPrefix",!0),onValueChange:()=>e.toggle("showPrefix",!0)})}),n.createElement(h,{label:"Custom Badges",subLabel:"Show Custom Badges",trailing:n.createElement($,{value:e.getBoolean("showCustom",!0),onValueChange:()=>e.toggle("showCustom",!0)})})),n.createElement(F,{title:"Updates"},n.createElement(h,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:n.createElement($,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),n.createElement(h,{label:"Check for Updates",trailing:h.Arrow,onPress:()=>_.checkForUpdates(!0)}),n.createElement(h,{label:"Show Changelog",subLabel:`Shows the changelog for v${D}`,trailing:h.Arrow,onPress:()=>_.showChangelog(),disabled:!k.length})),n.createElement(F,{title:"Source"},n.createElement(h,{label:"Source",subLabel:`See the Source Code for ${T}`,trailing:h.Arrow,onPress:()=>H==null?void 0:H.openURL(V)}))))};const M="https://clientmodbadges-api.herokuapp.com/",B=new Map,oe=1e3*60*15,ne=e=>{const t=B.get(e);if(!B.has(e)||t&&t.expires<Date.now())fetch(`${M}users/${e}`).then(a=>a.json()).then(a=>(B.set(e,{badges:a,expires:Date.now()+oe}),a));else if(t)return t.badges},ae=({name:e,img:t})=>{const a={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return n.createElement(p,{style:a.wrapper},n.createElement(j,{onPress:()=>W.open({content:e,source:{uri:t}})},n.createElement(I,{style:a.image,source:{uri:t}})))},N=J(v.name),ie={...v,onStart(){const e=G("ProfileBadges",{all:!0,default:!1});for(const t of e)N.after(t,"default",(a,[{user:{id:i}}],r)=>{const[d,l]=n.useState({});if(n.useEffect(()=>{var c;return l((c=ne(i))!=null?c:{})},[]),!d)return null;const m=[];if(!d||(Object.keys(d).forEach(c=>{c.toLowerCase()!=="enmity"&&d[c].forEach(s=>{if(typeof s=="string"){const y={hunter:"Bug Hunter",early:"Early User"};s={name:y[s]?y[s]:s,badge:`${M}badges/${c}/${s.replace(c,"").trim().split(" ")[0]}`}}else typeof s=="object"&&(s.custom=!0);if(!f(v.name,"showCustom",!0)&&s.custom)return;const E=s.name.replace(c,"").trim(),S=f(v.name,"showPrefix",!0)?c:"";s.custom||(s.name=`${S} ${E.charAt(0).toUpperCase()+E.slice(1)}`),m.push(n.createElement(ae,{name:s.name,img:s.badge}))})}),!m.length))return r;r.props.badges?r.props.badges.push(...m):r.props.children.push(...m)})},onStop(){N.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(te,{settings:e})}};Y(ie);
