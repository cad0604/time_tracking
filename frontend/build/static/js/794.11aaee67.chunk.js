(self.webpackChunkreact_digitalbrann_no=self.webpackChunkreact_digitalbrann_no||[]).push([[794],{8504:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});n(2791);var r=n(1773),i=n(6800);const s=n.p+"static/media/LogoGMR.d5171a7665c86de1000a.png";var a=n(184);function o(e){let{size:t=46,justify:n="center"}=e;const o={align:"center",block:"true",style:{justifyContent:n,width:"100%",padding:"0 24px"}},c={height:t,alt:"Digitalbrann",preview:!1};return(0,a.jsx)(r.Z,{...o,children:(0,a.jsx)(i.Z,{src:s,...c})})}},8100:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(2791);var r=n(184);const i=e=>{let{children:t}=e;return(0,r.jsx)("div",{className:"brann-centered-container",children:t})}},6414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(2791);var r=n(184);function i(e){let{width:t,children:n,marginTop:i=0}=e;return(0,r.jsx)("div",{style:{marginTop:i,width:t},className:"brann-paper",children:n})}},5644:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});n(2791);var r=n(184);const i=e=>{let{children:t,...n}=e;return(0,r.jsx)("div",{...n,children:t})}},4054:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(2641),i=(n(2791),n(184));function s(e){let{label:t,size:n="large",...s}=e;return(0,i.jsx)(r.ZP,{className:"brann-secondary-button",size:n,type:"default",...s,children:t})}},5704:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(9806),i=(n(2791),n(184));function s(e){let{icon:t,size:n=20,...s}=e;return(0,i.jsx)(r.G,{icon:t,style:{fontSize:n},...s})}},4212:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(2791);var r=n(3655),i=n(184);const{Text:s}=r.default;function a(e){let{text:t,align:n,color:r,fontSize:a=16,marginTop:o=0,...c}=e;return(0,i.jsx)(s,{ellipsis:!0,...c,style:{marginTop:o,textAlign:n,color:r,fontSize:a},children:t})}},2082:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});n(2791);var r=n(3655),i=n(184);const{Title:s}=r.default;function a(e){let{text:t,align:n,color:r,level:a=2}=e;return(0,i.jsx)(s,{level:a,style:{marginTop:0,textAlign:n,color:r},children:t})}},4685:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>z});var r=n(2791),i=n(6106),s=n(914),a=n(9434),o=n(3990),c=n(5644),l=n(7689),u=n(8504),d=n(2641),f=n(184);function h(e){let{label:t,size:n="large",...r}=e;return(0,f.jsx)(d.ZP,{className:"brann-active-button",size:n,type:"primary",...r,children:t})}const{Header:p,Content:m}=o.default,g=e=>{let{children:t}=e;const n=(0,a.I0)(),r=(0,l.s0)();return(0,f.jsx)(o.default,{className:"app-layout",children:(0,f.jsxs)(o.default,{children:[(0,f.jsxs)(p,{style:{background:"linear-gradient(to right, white 15%, green)"},children:[(0,f.jsx)(c.Z,{className:"nav_left",children:(0,f.jsx)(u.Z,{})}),(0,f.jsx)(c.Z,{className:"nav",children:(0,f.jsx)(h,{label:"Finalizar la sesi\xf3n",onClick:()=>{var e;"/loggut"===(e="/loggut")?n({type:"LOGOUT"}):r(e)}})})]}),(0,f.jsx)(m,{children:t})]})})};var v=n(2082),y=n(1632),x=n(1773),$=n(3069),b=n(5704),w=n(4212);const j=e=>String("0"+e).slice(-2),S=(e,t)=>{"string"!==typeof e&&"number"!==typeof e||(e=new Date(e)),"string"!==typeof t&&"number"!==typeof t||(t=new Date(t));const n=Math.round((t-e)/1e3);let r=n%60,i=0,s=0;n>r&&(i=(n-r)/60,s=i%60);let a=0,o=0;return i>s&&(a=(i-s)/60,o=a%60),j(o)+":"+j(s)+":"+j(r)};var T=n(2140),Z=n(6965),D=n(3283),C=n(7892),O=n.n(C),M=n(986);var E=n(8100),_=n(6414);function k(e){let{label:t,size:n="large",...r}=e;return(0,f.jsx)(d.ZP,{className:"brann-primary-button",size:n,type:"primary",...r,children:t})}var P=n(4054);let I=null;const N=()=>{const e=(0,a.I0)(),{timeStart:t}=(0,a.v9)((e=>e.workflowTimeStart)),[n,o]=(0,r.useState)(!1),[c,l]=(0,r.useState)("00:00:00"),[u,d]=(0,r.useState)(null),[h,p]=(0,r.useState)(null),[m,g]=(0,r.useState)(null),[j,C]=(0,r.useState)(null),N=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;const[t,n]=(0,r.useState)(window.innerWidth<=e);return(0,r.useEffect)((()=>{const t=()=>{n(window.innerWidth<=e)};return window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[e]),t}();(0,r.useEffect)((()=>{var e,t;null!==j&&(e="Error",t="".concat(j),M.Z.warning({duration:5,message:e,description:t}),C(null))}),[j]),(0,r.useEffect)((()=>{e({type:T.Z.FETCH_TIME_START})}),[e]),(0,r.useEffect)((()=>{if(!(0,D.Z)(t)){I=O()(t.startTime);const e=()=>{const e=new Date;l(S(I,e))};e();let n=setInterval((()=>{e()}),1e3);d(n),o(!0),t.latitude&&p(t.latitude),t.longitude&&g(t.longitude)}}),[t]);const z=()=>{const e=new Date;l(S(I,e))};return(0,f.jsx)(E.Z,{children:(0,f.jsxs)(i.Z,{justify:"center",align:"middle",gutter:[0,32],children:[(0,f.jsx)(s.Z,{span:24,children:(0,f.jsx)(v.Z,{text:"Quieres empezar a trabajar ahora?",level:N?3:2})}),(0,f.jsx)(s.Z,{span:24,children:(0,f.jsx)(E.Z,{children:(0,f.jsx)(_.Z,{width:N?400:600,children:(0,f.jsx)(w.Z,{text:c,fontSize:N?60:100})})})}),(0,f.jsx)(s.Z,{span:24,children:(0,f.jsxs)(x.Z,{children:[(0,f.jsx)(k,{icon:(0,f.jsx)(b.Z,{icon:y.zc,color:"green"}),label:"Play",disabled:n,onClick:()=>{const t=new Date;I=t,z();let n=setInterval((()=>{z()}),1e3);d(n),(()=>{if("geolocation"in navigator){const t=navigator.geolocation.watchPosition((t=>{p(t.coords.latitude),g(t.coords.longitude),C(null),e({type:T.Z.ADD_TIME_START,payload:{startTime:I,latitude:t.coords.latitude,longitude:t.coords.longitude}})}),(t=>{C(t.message),e({type:T.Z.ADD_TIME_START,payload:{startTime:I}})}),{enableHighAccuracy:!0,timeout:3e3,maximumAge:0});setTimeout((()=>{navigator.geolocation.clearWatch(t)}),3300)}else C("Geolocalizaci\xf3n no soportada por este navegador."),e({type:T.Z.ADD_TIME_START,payload:{startTime:I}})})(),o((e=>!e))}}),(0,f.jsx)($.Z,{title:"Detener el seguimiento del tiempo",description:"Est\xe1s segura de detener el seguimiento del tiempo?",onConfirm:()=>{clearInterval(u),d(null),(()=>{if("geolocation"in navigator){const t=navigator.geolocation.watchPosition((t=>{C(null);const n=new Date;e({type:Z.Z.ADD_TIME_TRACKING,payload:{startTime:I,endTime:n,startLatitude:h||0,startLongitude:m||0,endLatitude:t.coords.latitude,endLongitude:t.coords.longitude}})}),(t=>{C(t.message);const n=new Date;e({type:Z.Z.ADD_TIME_TRACKING,payload:{startTime:I,endTime:n,startLatitude:h||0,startLongitude:m||0}})}),{enableHighAccuracy:!0,timeout:3e3,maximumAge:0});setTimeout((()=>{navigator.geolocation.clearWatch(t)}),3300)}else{C("Geolocalizaci\xf3n no soportada por este navegador.");const t=new Date;e({type:Z.Z.ADD_TIME_TRACKING,payload:{startTime:I,endTime:t,startLatitude:h||0,startLongitude:m||0}})}})(),o((e=>!e))},children:(0,f.jsx)(P.Z,{icon:(0,f.jsx)(b.Z,{icon:y.pL1,color:"red"}),label:"Stop",disabled:!n})})]})})]})})};function z(){return(0,f.jsx)(g,{children:(0,f.jsxs)(i.Z,{gutter:[0,32],children:[(0,f.jsx)(s.Z,{span:24,children:(0,f.jsx)(i.Z,{justify:"space-between",align:"bottom",children:(0,f.jsx)(s.Z,{children:(0,f.jsx)(v.Z,{text:"Hola!"})})})}),(0,f.jsx)(s.Z,{span:24,style:{textAlign:"center"},children:(0,f.jsx)(N,{})})]})})}},3283:(e,t,n)=>{"use strict";function r(e){if(null==e)return!0;if("object"!==typeof e)return!0;for(var t in e)if(hasOwnProperty.call(e,t))return!1;return!0}n.d(t,{Z:()=>r})},3069:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var r=n(2791),i=n(187),s=n(1418),a=n.n(s),o=n(5179),c=n(1354),l=n(1818),u=n(1113),d=n(1929),f=n(9228),h=n(8368),p=n(2641),m=n(5428);function g(e){return!(!e||!e.then)}const v=e=>{const{type:t,children:n,prefixCls:i,buttonProps:s,close:a,autoFocus:o,emitEvent:c,isSilent:l,quitOnNullishReturnValue:u,actionFn:d}=e,f=r.useRef(!1),v=r.useRef(null),[y,x]=(0,h.Z)(!1),$=function(){null===a||void 0===a||a.apply(void 0,arguments)};r.useEffect((()=>{let e=null;return o&&(e=setTimeout((()=>{var e;null===(e=v.current)||void 0===e||e.focus()}))),()=>{e&&clearTimeout(e)}}),[]);return r.createElement(p.ZP,Object.assign({},(0,m.nx)(t),{onClick:e=>{if(f.current)return;if(f.current=!0,!d)return void $();let t;if(c){if(t=d(e),u&&!g(t))return f.current=!1,void $(e)}else if(d.length)t=d(a),f.current=!1;else if(t=d(),!t)return void $();(e=>{g(e)&&(x(!0),e.then((function(){x(!1,!0),$.apply(void 0,arguments),f.current=!1}),(e=>{if(x(!1,!0),f.current=!1,!(null===l||void 0===l?void 0:l()))return Promise.reject(e)})))})(t)},loading:y,prefixCls:i},s,{ref:v}),n)};var y=n(7924),x=n(4e3),$=n(1489),b=n(9152),w=n(6562);const j=(0,w.I$)("Popconfirm",(e=>(e=>{const{componentCls:t,iconCls:n,antCls:r,zIndexPopup:i,colorText:s,colorWarning:a,marginXXS:o,marginXS:c,fontSize:l,fontWeightStrong:u,colorTextHeading:d}=e;return{[t]:{zIndex:i,["&".concat(r,"-popover")]:{fontSize:l},["".concat(t,"-message")]:{marginBottom:c,display:"flex",flexWrap:"nowrap",alignItems:"start",["> ".concat(t,"-message-icon ").concat(n)]:{color:a,fontSize:l,lineHeight:1,marginInlineEnd:c},["".concat(t,"-title")]:{fontWeight:u,color:d,"&:only-child":{fontWeight:"normal"}},["".concat(t,"-description")]:{marginTop:o,color:s}},["".concat(t,"-buttons")]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:c}}}}})(e)),(e=>{const{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}}),{resetStyle:!1});var S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const T=e=>{const{prefixCls:t,okButtonProps:n,cancelButtonProps:s,title:o,description:c,cancelText:l,okText:u,okType:f="primary",icon:h=r.createElement(i.Z,null),showCancel:g=!0,close:b,onConfirm:w,onCancel:j,onPopupClick:S}=e,{getPrefixCls:T}=r.useContext(d.E_),[Z]=(0,x.Z)("Popconfirm",$.Z.Popconfirm),D=(0,y.Z)(o),C=(0,y.Z)(c);return r.createElement("div",{className:"".concat(t,"-inner-content"),onClick:S},r.createElement("div",{className:"".concat(t,"-message")},h&&r.createElement("span",{className:"".concat(t,"-message-icon")},h),r.createElement("div",{className:"".concat(t,"-message-text")},D&&r.createElement("div",{className:a()("".concat(t,"-title"))},D),C&&r.createElement("div",{className:"".concat(t,"-description")},C))),r.createElement("div",{className:"".concat(t,"-buttons")},g&&r.createElement(p.ZP,Object.assign({onClick:j,size:"small"},s),l||(null===Z||void 0===Z?void 0:Z.cancelText)),r.createElement(v,{buttonProps:Object.assign(Object.assign({size:"small"},(0,m.nx)(f)),n),actionFn:w,close:b,prefixCls:T("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},u||(null===Z||void 0===Z?void 0:Z.okText))))},Z=e=>{const{prefixCls:t,placement:n,className:i,style:s}=e,o=S(e,["prefixCls","placement","className","style"]),{getPrefixCls:c}=r.useContext(d.E_),l=c("popconfirm",t),[u]=j(l);return u(r.createElement(b.ZP,{placement:n,className:a()(l,i),style:s,content:r.createElement(T,Object.assign({prefixCls:l},o))}))};var D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n};const C=r.forwardRef(((e,t)=>{var n,s;const{prefixCls:h,placement:p="top",trigger:m="click",okType:g="primary",icon:v=r.createElement(i.Z,null),children:y,overlayClassName:x,onOpenChange:$,onVisibleChange:b}=e,w=D(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:S}=r.useContext(d.E_),[Z,C]=(0,o.Z)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(s=e.defaultOpen)&&void 0!==s?s:e.defaultVisible}),O=(e,t)=>{C(e,!0),null===b||void 0===b||b(e),null===$||void 0===$||$(e,t)},M=S("popconfirm",h),E=a()(M,x),[_]=j(M);return _(r.createElement(f.Z,Object.assign({},(0,l.Z)(w,["title"]),{trigger:m,placement:p,onOpenChange:t=>{const{disabled:n=!1}=e;n||O(t)},open:Z,ref:t,overlayClassName:E,content:r.createElement(T,Object.assign({okType:g,icon:v},e,{prefixCls:M,close:e=>{O(!1,e)},onConfirm:t=>{var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(void 0,t)},onCancel:t=>{var n;O(!1,t),null===(n=e.onCancel)||void 0===n||n.call(void 0,t)}})),"data-popover-inject":!0}),(0,u.Tm)(y,{onKeyDown:e=>{var t,n;r.isValidElement(y)&&(null===(n=null===y||void 0===y?void 0:(t=y.props).onKeyDown)||void 0===n||n.call(t,e)),(e=>{e.keyCode===c.Z.ESC&&Z&&O(!1,e)})(e)}})))}));C._InternalPanelDoNotUseOrYouWillBeFired=Z;const O=C},7892:function(e){e.exports=function(){"use strict";var e=1e3,t=6e4,n=36e5,r="millisecond",i="second",s="minute",a="hour",o="day",c="week",l="month",u="quarter",d="year",f="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,g={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},v=function(e,t,n){var r=String(e);return!r||r.length>=t?e:""+Array(t+1-r.length).join(n)+e},y={s:v,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),r=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var r=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(r,l),s=n-i<0,a=t.clone().add(r+(s?-1:1),l);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:l,y:d,w:c,d:o,D:f,h:a,m:s,s:i,ms:r,Q:u}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},x="en",$={};$[x]=g;var b="$isDayjsObject",w=function(e){return e instanceof Z||!(!e||!e[b])},j=function e(t,n,r){var i;if(!t)return x;if("string"==typeof t){var s=t.toLowerCase();$[s]&&(i=s),n&&($[s]=n,i=s);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var o=t.name;$[o]=t,i=o}return!r&&i&&(x=i),i||!r&&x},S=function(e,t){if(w(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new Z(n)},T=y;T.l=j,T.i=w,T.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var Z=function(){function g(e){this.$L=j(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var v=g.prototype;return v.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(T.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(e),this.init()},v.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},v.$utils=function(){return T},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},v.isAfter=function(e,t){return S(e)<this.startOf(t)},v.isBefore=function(e,t){return this.endOf(t)<S(e)},v.$g=function(e,t,n){return T.u(e)?this[t]:this.set(n,e)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(e,t){var n=this,r=!!T.u(t)||t,u=T.p(e),h=function(e,t){var i=T.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return r?i:i.endOf(o)},p=function(e,t){return T.w(n.toDate()[e].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},m=this.$W,g=this.$M,v=this.$D,y="set"+(this.$u?"UTC":"");switch(u){case d:return r?h(1,0):h(31,11);case l:return r?h(1,g):h(0,g+1);case c:var x=this.$locale().weekStart||0,$=(m<x?m+7:m)-x;return h(r?v-$:v+(6-$),g);case o:case f:return p(y+"Hours",0);case a:return p(y+"Minutes",1);case s:return p(y+"Seconds",2);case i:return p(y+"Milliseconds",3);default:return this.clone()}},v.endOf=function(e){return this.startOf(e,!1)},v.$set=function(e,t){var n,c=T.p(e),u="set"+(this.$u?"UTC":""),h=(n={},n[o]=u+"Date",n[f]=u+"Date",n[l]=u+"Month",n[d]=u+"FullYear",n[a]=u+"Hours",n[s]=u+"Minutes",n[i]=u+"Seconds",n[r]=u+"Milliseconds",n)[c],p=c===o?this.$D+(t-this.$W):t;if(c===l||c===d){var m=this.clone().set(f,1);m.$d[h](p),m.init(),this.$d=m.set(f,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(e,t){return this.clone().$set(e,t)},v.get=function(e){return this[T.p(e)]()},v.add=function(r,u){var f,h=this;r=Number(r);var p=T.p(u),m=function(e){var t=S(h);return T.w(t.date(t.date()+Math.round(e*r)),h)};if(p===l)return this.set(l,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===o)return m(1);if(p===c)return m(7);var g=(f={},f[s]=t,f[a]=n,f[i]=e,f)[p]||1,v=this.$d.getTime()+r*g;return T.w(v,this)},v.subtract=function(e,t){return this.add(-1*e,t)},v.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var r=e||"YYYY-MM-DDTHH:mm:ssZ",i=T.z(this),s=this.$H,a=this.$m,o=this.$M,c=n.weekdays,l=n.months,u=n.meridiem,d=function(e,n,i,s){return e&&(e[n]||e(t,r))||i[n].slice(0,s)},f=function(e){return T.s(s%12||12,e,"0")},p=u||function(e,t,n){var r=e<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(m,(function(e,r){return r||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return T.s(t.$y,4,"0");case"M":return o+1;case"MM":return T.s(o+1,2,"0");case"MMM":return d(n.monthsShort,o,l,3);case"MMMM":return d(l,o);case"D":return t.$D;case"DD":return T.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,c,2);case"ddd":return d(n.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return T.s(s,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return T.s(a,2,"0");case"s":return String(t.$s);case"ss":return T.s(t.$s,2,"0");case"SSS":return T.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,f,h){var p,m=this,g=T.p(f),v=S(r),y=(v.utcOffset()-this.utcOffset())*t,x=this-v,$=function(){return T.m(m,v)};switch(g){case d:p=$()/12;break;case l:p=$();break;case u:p=$()/3;break;case c:p=(x-y)/6048e5;break;case o:p=(x-y)/864e5;break;case a:p=x/n;break;case s:p=x/t;break;case i:p=x/e;break;default:p=x}return h?p:T.a(p)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return $[this.$L]},v.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),r=j(e,t,!0);return r&&(n.$L=r),n},v.clone=function(){return T.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},g}(),D=Z.prototype;return S.prototype=D,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",o],["$M",l],["$y",d],["$D",f]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,Z,S),e.$i=!0),S},S.locale=j,S.isDayjs=w,S.unix=function(e){return S(1e3*e)},S.en=$[x],S.Ls=$,S.p={},S}()}}]);
//# sourceMappingURL=794.11aaee67.chunk.js.map