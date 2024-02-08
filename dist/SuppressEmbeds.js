var _="SuppressEmbeds",T="1.1.0",Y="Allows you to Suppress/Unsuppress Embeds",N=[{name:"HypedDomi",id:"354191516979429376"}],z="#E54B4B",j="https://raw.githubusercontent.com/domi-btnr/Enmity-Stuff/main/dist/SuppressEmbeds.js",R="https://github.com/domi-btnr/Enmity-Stuff/tree/main/SuppressEmbeds",k=["Fixed Button not showing up in the Message Action Sheet (Big thanks to [@aeong.one](https://github.com/aeongdesu/) )"],V="6dc9793db836e8fefae70367639642067f1e0406",C={name:_,version:T,description:Y,authors:N,color:z,rawUrl:j,sourceUrl:R,changelog:k,hash:V};function I(e){return window.enmity.assets.getIDByName(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const G=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const w=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const v=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const m=o.FormRow,M=o.FormSection;o.FormSelect,o.FormSubLabel;const K=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function W(e){window.enmity.plugins.registerPlugin(e)}const U={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function X(...e){return window.enmity.modules.bulk(...e)}function J(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const c=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const F=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const q=window.enmity.modules.common.REST;window.enmity.modules.common.Settings;const Q=window.enmity.modules.common.Users,Z=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const ee=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components;const te=window.enmity.modules.common.Locale;window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function oe(e){return window.enmity.patcher.create(e)}function ne(e,t,s){return window.enmity.utilities.findInReactTree(e,t,s)}const{native:b}=window.enmity;function ie(){b.reload()}b.version,b.build,b.device,b.version;function x(e,t,s){window.enmity.settings.set(e,t,s)}function $(e,t,s){return window.enmity.settings.get(e,t,s)}const D={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:e,version:t,rawUrl:s,changelog:a,hash:i}){if(!e||!t||!s||!a||!i)return console.error(`[${e||__filename}] Missing parameters in constructor`);this.name=e,this.version=t,this.rawUrl=s,this.changelog=a,this.hash=i,$(e,"_didUpdate",!1)||($(e,"_changelog",t)!==t&&this.showChangelog(),$(e,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),x(e,"_didUpdate",!1)},showChangelog(){!this.changelog||F.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>x(this.name,"_changelog",this.version)})},async checkForUpdates(e=!1){var t,s,a,i,g,r;const d=await(await fetch(`${this.rawUrl}?${Math.random()}`)).text(),A=(t=d.match(/hash:(\w+)/))==null?void 0:t[1],p=(s=d.match(new RegExp(`${A}="([^,"]+)"`)))==null?void 0:s[1];p?this.remoteHash=p!=null?p:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const y=(a=d.match(/version:(\w+)/))==null?void 0:a[1],S=(i=d.match(new RegExp(`${y}="([^,"]+)"`)))==null?void 0:i[1];S?this.remoteVersion=S:console.warn(`[${this.name}] Failed to fetch remote version`);const h=(g=d.match(/changelog:(\w+)/))==null?void 0:g[1],E=(r=d.match(new RegExp(`${h}=\\[(.*?)\\]`)))==null?void 0:r[0];if(E?this.remoteChangelog=JSON.parse(E.replace(`${h}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const f=this.version.split(".").map(Number),u=this.remoteVersion.split(".").map(Number);for(let l=0;l<f.length;l++){if(u[l]>f[l])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(u[l]<f[l])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!e||F.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:e,hash:t,changelog:s}){if(!e&&!t)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let a="";e?a=`New Version for ${this.name} is available!`:a=`New Build for ${this.name} is available!`,a+=`
Would you like to update now?`,s&&(a+=`

Changelog:
- ${s.join(`
- `)}`),F.show({title:"Plugin Updater",body:a,confirmText:"Update",cancelText:"No",onConfirm:()=>{x(this.name,"_didUpdate",!0),this.installPlugin(!!t)}})},installPlugin(e=!1){var t;const s=e?"updated Build":"updated Version",a=e?`\`${(t=this.remoteHash)==null?void 0:t.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:i})=>{i==="installed_plugin"||i==="overridden_plugin"?F.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${s} to **${a}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:ie}):console.error(`[${this.name}] Failed to install v${a}`)})}},H=J("transitionToGuild","openURL");D.create(C);var se=({settings:e})=>{const t=ee.createThemedStyleSheet({item:{color:c.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:c.ThemeColorMap.HEADER_PRIMARY,fontFamily:c.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:c.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[s,a]=n.useState(),[i,g]=n.useState();return n.createElement(n.Fragment,null,n.createElement(G,{onTouchStart:r=>{a(r.nativeEvent.pageX),g(r.nativeEvent.pageY)},onTouchEnd:r=>{s-r.nativeEvent.pageX<-100&&i-r.nativeEvent.pageY<40&&i-r.nativeEvent.pageY>-40&&Z.pop()}},n.createElement(v,null,n.createElement(v,{style:t.text_container},n.createElement(w,{style:[t.main_text,t.header]},_),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Author:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},` ${N.map(r=>r.name).join(", ")}`)),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},` ${T}`)),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Hash:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:c.Fonts.DISPLAY_BOLD}]},` ${V.slice(0,7)}`)))),n.createElement(M,{title:"Updates"},n.createElement(m,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:n.createElement(K,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),n.createElement(m,{label:"Check for Updates",trailing:m.Arrow,onPress:()=>D.checkForUpdates(!0)}),n.createElement(m,{label:"Show Changelog",subLabel:`Shows the changelog for v${T}`,trailing:m.Arrow,onPress:()=>D.showChangelog(),disabled:!k.length})),n.createElement(M,{title:"Source"},n.createElement(m,{label:"Source",subLabel:`See the Source Code for ${_}`,trailing:m.Arrow,onPress:()=>H==null?void 0:H.openURL(R)}))))};const L=1<<2,[ae,O,re]=X(U.byProps("getChannel"),U.byProps("openLazy","hideActionSheet"),U.byProps("getChannelPermissions")),P=oe(C.name),le={...C,onStart(){P.before(O,"openLazy",(e,[t,s,a])=>{const i=a==null?void 0:a.message;s!=="MessageLongPressActionSheet"||!i||t.then(g=>{const r=P.after(g,"default",(d,A,p)=>{n.useEffect(()=>()=>{r()},[]);const y=ne(p,u=>{var l,B;return((B=(l=u==null?void 0:u[0])==null?void 0:l.type)==null?void 0:B.name)==="ButtonRow"});if(!y)return p;const S=ae.getChannel(i.channel_id),h=!!(i.flags&L),E=!!(re.getChannelPermissions({id:i.channel_id})&c.Permissions.EMBED_LINKS);if(!h&&!i.embeds.length||i.author.id===Q.getCurrentUser().id&&!E)return;const f=y==null?void 0:y.findIndex(u=>{var l;return((l=u.props)==null?void 0:l.message)===te.Messages.DELETE_MESSAGE});f!==-1&&y.splice(f,0,n.createElement(m,{key:C.name,label:h?"Unsuppress Embeds":"Suppress Embeds",leading:n.createElement(m.Icon,{source:I(h?"ic_message_retry":"ic_close_16px")}),onPress:()=>{q.patch({url:`/channels/${S.id}/messages/${i.id}`,body:{flags:h?i.flags&~L:i.flags|L}}),O.hideActionSheet()}}))})})})},onStop(){P.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(se,{settings:e})}};W(le);
