"use strict";(self.webpackChunkreact_digitalbrann_no=self.webpackChunkreact_digitalbrann_no||[]).push([[676],{6034:(e,n,r)=>{r.d(n,{Z:()=>a});r(2791);var t=r(184);const a=e=>{let{children:n,width:r=350,marginTop:a=16,marginBottom:i=10,textAlign:l="center"}=e;return(0,t.jsx)("div",{style:{width:r,marginTop:a,textAlign:l,marginBottom:i},children:n})}},8100:(e,n,r)=>{r.d(n,{Z:()=>a});r(2791);var t=r(184);const a=e=>{let{children:n}=e;return(0,t.jsx)("div",{className:"brann-centered-container",children:n})}},6414:(e,n,r)=>{r.d(n,{Z:()=>a});r(2791);var t=r(184);function a(e){let{width:n,children:r,marginTop:a=0}=e;return(0,t.jsx)("div",{style:{marginTop:a,width:n},className:"brann-paper",children:r})}},9265:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(2641),a=(r(2791),r(184));function i(e){let{label:n,fullWidth:r=null,...i}=e;return(0,a.jsx)(t.ZP,{size:"large",type:"primary",htmlType:"submit",style:r&&{width:"100%"},...i,children:n})}},6926:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(9389),a=(r(2791),r(184));function i(e){let{placeholder:n,...r}=e;return(0,a.jsx)(t.Z,{placeholder:n,size:"large",...r})}},4048:(e,n,r)=>{r.d(n,{Z:()=>i});var t=r(9389),a=(r(2791),r(184));function i(e){let{placeholder:n,...r}=e;return(0,a.jsx)(t.Z.Password,{placeholder:n,size:"large",...r})}},1882:(e,n,r)=>{r.d(n,{Z:()=>i});r(2791);var t=r(3655),a=r(184);function i(e){let{href:n,children:r,underline:i=!1}=e;return(0,a.jsx)(t.default.Link,{href:n,className:"brann-link",underline:i,children:r})}},2082:(e,n,r)=>{r.d(n,{Z:()=>l});r(2791);var t=r(3655),a=r(184);const{Title:i}=t.default;function l(e){let{text:n,align:r,color:t,level:l=2}=e;return(0,a.jsx)(i,{level:l,style:{marginTop:0,textAlign:r,color:t},children:n})}},3457:(e,n,r)=>{r.d(n,{C1:()=>t,EQ:()=>i,FP:()=>a});const t={required:!0,message:"El campo es obligatorio"},a={pattern:"^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$",message:"La contrase\xf1a debe contener una letra may\xfascula, un n\xfamero y una letra especial."},i=e=>{let{getFieldValue:n}=e;return{validator:(e,r)=>r&&n("password")!==r?Promise.reject("Las contrase\xf1as no coinciden"):Promise.resolve()}}},3354:(e,n,r)=>{r.d(n,{Z:()=>u});var t=r(2791),a=r(9434),i=r(7689),l=r(3990),s=r(6106),c=r(914),d=r(1927),o=r(184);function u(e){let{children:n}=e;const{isAuthenticated:r,user:u}=(0,a.v9)((e=>e.auth)),h=(0,i.s0)(),m=(0,d.C)();return(0,t.useEffect)((()=>{r&&(u.isAdmin?h("/administraci\xf3n"):h("/"))}),[r,u,h]),(0,o.jsx)(l.default,{className:"auth-layout",children:(0,o.jsx)(l.default.Content,{children:(0,o.jsxs)(s.Z,{className:"container",children:[!m&&(0,o.jsx)(c.Z,{span:12,className:"banner"}),(0,o.jsx)(c.Z,{sm:24,xs:24,md:12,className:"content",children:n})]})})})}},2676:(e,n,r)=>{r.r(n),r.d(n,{default:()=>f});r(2791);var t=r(3354),a=r(9434),i=r(5140),l=r(3457),s=r(1882),c=r(9265),d=r(6034),o=r(6926),u=r(4048),h=r(5961),m=r(184);function x(){const e=(0,a.I0)(),{isAuthenticating:n}=(0,a.v9)((e=>e.auth));return(0,m.jsxs)(i.Z,{className:"auth-form",name:"login-form",onFinish:n=>{e({type:h.Z.LOGIN,payload:n})},children:[(0,m.jsx)(i.Z.Item,{name:"dni",rules:[l.C1],children:(0,m.jsx)(o.Z,{placeholder:"DNI *"})}),(0,m.jsx)(i.Z.Item,{name:"password",rules:[l.C1],children:(0,m.jsx)(u.Z,{placeholder:"Contrase\xf1a *"})}),(0,m.jsxs)(i.Z.Item,{children:[(0,m.jsx)(d.Z,{textAlign:"left",marginTop:1,marginBottom:10,children:(0,m.jsx)(s.Z,{href:"/autenticaci\xf3n/glemt-passord",underline:!0,children:"Olvidaste tu contrase\xf1a?"})}),(0,m.jsx)(c.Z,{loading:n,fullWidth:!0,label:"Acceso"})]})]})}var Z=r(2082),g=r(6414),j=r(8100);function f(){return(0,m.jsx)(t.Z,{children:(0,m.jsx)(j.Z,{children:(0,m.jsxs)(d.Z,{width:350,children:[(0,m.jsx)(Z.Z,{text:"Acceso",align:"center"}),(0,m.jsx)(g.Z,{children:(0,m.jsx)(x,{})}),(0,m.jsxs)(d.Z,{marginTop:16,children:["No tienes una cuenta?"," ",(0,m.jsx)(s.Z,{href:"/autenticaci\xf3n/registro",children:"Crea una cuenta aqu\xed"})]})]})})})}},1927:(e,n,r)=>{r.d(n,{C:()=>a});var t=r(2791);const a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:768;const[n,r]=(0,t.useState)(window.innerWidth<=e);return(0,t.useEffect)((()=>{const n=()=>{r(window.innerWidth<=e)};return window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}),[e]),n}}}]);
//# sourceMappingURL=676.feec9090.chunk.js.map