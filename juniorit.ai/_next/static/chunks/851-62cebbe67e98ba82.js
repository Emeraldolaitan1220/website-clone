"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[851],{65250:function(e,s,t){var l=t(85893),i=t(51857),a=t.n(i),n=t(67294);let r=e=>{let{title:s,children:t,width:i,height:r,isOpen:d,toolbar:c,showCancel:m,isModal:o,onClose:h,onConfirm:x}=e,[u,f]=(0,n.useState)(d),j=(0,n.useRef)(null),p=()=>{f(!1),h&&h()},g=()=>{f(!1),x&&x(),h&&h()},y=e=>{j.current&&!j.current.contains(e.target)&&!(null==o||o)&&(f(!1),h&&h())};return(0,n.useEffect)(()=>(u?document.addEventListener("mousedown",y):document.removeEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}),[u]),(0,n.useEffect)(()=>{f(d)},[d]),(0,l.jsxs)("div",{style:{display:u?"flex":"none",justifyContent:"center",alignItems:"center",position:"fixed",zIndex:1e5,top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(0,0,0,0.5)"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:[(0,l.jsxs)("div",{ref:j,style:{backgroundColor:"white",borderRadius:"10px",padding:"0 20px 20px 20px",height:null!=r?r:"auto",display:"flex",flexDirection:"column",justifyContent:"space-between"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]])+" modal-dialog",children:[(0,l.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1px solid lightgray",paddingBottom:"0px",marginBottom:"10px"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:[(0,l.jsx)("h2",{style:{margin:0},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:(0,l.jsx)("b",{className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:s})}),(0,l.jsx)("button",{onClick:p,style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:(0,l.jsx)("span",{style:{fontSize:"36px",color:"black"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:"\xd7"})})]}),(0,l.jsx)("div",{className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:t}),(void 0===c||c)&&(0,l.jsxs)("div",{style:{borderTop:"0px solid lightgray",paddingTop:"10px",marginTop:"10px",display:"flex",justifyContent:"flex-end"},className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]]),children:[m?(0,l.jsx)("button",{onClick:p,className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]])+" w-28 rounded h-10 bg-white border border-gray-300 text-gray-900 font-medium ml-6",children:"Cancel"}):null,(0,l.jsx)("button",{onClick:g,className:a().dynamic([["79ed4a3523a41e38",[null!=i?i:"890"]]])+" w-28 rounded h-10 border-primary-blue text-white font-medium bg-primary-blue ml-6",children:"OK"})]})]}),(0,l.jsx)(a(),{id:"79ed4a3523a41e38",dynamic:[null!=i?i:"890"],children:".modal-dialog.__jsx-style-dynamic-selector{width:90vw}@media only screen and (min-width:600px){.modal-dialog.__jsx-style-dynamic-selector{max-width:".concat(null!=i?i:"890","px}}")})]})};s.Z=r},40640:function(e,s,t){var l=t(85893),i=t(41664),a=t.n(i),n=t(30702);let r=()=>{let{t:e}=(0,n.$G)("common");return(0,l.jsx)("div",{className:"bg-white mt-20 py-11",children:(0,l.jsxs)("div",{className:"flex flex-col md:flex-row justify-between items-start md:items-center mx-auto max-w-screen-jit-xl px-4",children:[(0,l.jsxs)("div",{className:"flex-shrink w-72",children:[(0,l.jsx)("h2",{className:"text-xl md:text-2xl font-black",children:"JuniorIT.AI"}),(0,l.jsxs)("p",{className:"mt-4",children:[" ",e("footer-menu-description")]})]}),(0,l.jsxs)("div",{className:"mt-8 md:mt-0",children:[(0,l.jsx)(a(),{href:"/about-us",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("why-junior-it")})}),(0,l.jsx)(a(),{href:"/resource/blog",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("Blogs")})}),(0,l.jsx)(a(),{href:"/pricing",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("pricing")})})]}),(0,l.jsxs)("div",{className:"mt-8 md:mt-0",children:[(0,l.jsx)(a(),{href:"https://haicam.tech/",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("about-haicam")})}),(0,l.jsx)(a(),{href:"/contact",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("contact-us")})})]}),(0,l.jsxs)("div",{className:"mt-8 md:mt-0",children:[(0,l.jsx)(a(),{href:"/privacy",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("privacy-policy")})}),(0,l.jsx)(a(),{href:"/terms",className:"mt-4",children:(0,l.jsx)("div",{className:"font-medium",children:e("term-and-condition")})})]})]})})};s.Z=r},78073:function(e,s,t){var l=t(85893),i=t(67294),a=t(41664),n=t.n(a),r=t(65250),d=t(96442);let c=()=>{let[e,s]=(0,i.useState)(!1),t=e=>{e.preventDefault(),s(!0)};return(0,l.jsxs)("div",{className:"mx-auto max-w-screen-jit-xl px-4 flex flex-col md:flex-row justify-between items-center py-10",children:[(0,l.jsxs)("div",{className:"flex-col",children:[(0,l.jsx)("div",{className:"text-sm font-medium",children:"Haicam Technologies \xa9 2023"}),(0,l.jsx)("div",{className:"text-xs mt-1",children:"Powered by OpenAI & Stable Diffusion"})]}),(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mt-4 md:mt-0",children:[(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://www.facebook.com/juniorit.ai.page"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://www.linkedin.com/company/juniorit-ai"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://github.com/juniorit-ai"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://twitter.com/JuniorIT_AI"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://www.tiktok.com/@juniorit.ai"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://www.youtube.com/@junior-it-ai"}),(0,l.jsx)(d.QZ,{style:{width:30,height:30,margin:10},url:"https://discord.com/invite/fzhZzcfRd6"})]}),(0,l.jsxs)("div",{className:"flex flex-row justify-between items-center mt-4 md:mt-0",children:[(0,l.jsxs)(n(),{href:"#",onClick:t,className:"w-40 md:w-44 h-12 bg-blue-dark rounded-lg flex flex-row items-center pl-4 md:pl-6",children:[(0,l.jsx)("img",{src:"/icon/apple_store.png"}),(0,l.jsxs)("div",{className:"flex flex-col justify-center ml-2",children:[(0,l.jsx)("div",{className:"text-xxs font-normal text-white",children:"Download on the"}),(0,l.jsx)("div",{className:"font-bold text-white",children:"App Store"})]})]}),(0,l.jsxs)(n(),{href:"#",onClick:t,className:"w-40 md:w-44 h-12 bg-blue-dark rounded-lg flex flex-row items-center pl-4 md:pl-6 ml-3",children:[(0,l.jsx)("img",{src:"/icon/google_play.png"}),(0,l.jsxs)("div",{className:"flex flex-col justify-center ml-2",children:[(0,l.jsx)("div",{className:"text-xxs font-normal text-white",children:"Download on the"}),(0,l.jsx)("div",{className:"font-bold text-white",children:"Play Store"})]})]})]}),(0,l.jsx)(r.Z,{title:"Mobile Apps",width:400,isOpen:e,onClose:()=>s(!1),children:"The JuniorIT.AI's iOS and Android mobile app will be available soon! You will get an email if you have pre-registered the membership when it is ready to install."})]})};s.Z=c},70077:function(e,s,t){var l=t(85893),i=t(41664),a=t.n(i),n=t(11163),r=t(67294),d=t(33299),c=t(30702);let m=e=>{let[s,t]=(0,r.useState)(!1),i=(0,d.useSession)(),m=(0,n.useRouter)(),{t:o}=(0,c.$G)("common"),h={paddingBottom:5,borderBottom:"3px #21a851 solid"};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("header",{className:"top-0 left-0 right-0 w-full h-20 bg-white shadow",children:[(0,l.jsxs)("div",{className:"mx-auto max-w-screen-jit-xl h-full flex flex-row items-center justify-between px-4",children:[(0,l.jsx)("button",{className:"lg:hidden",onClick:()=>{t(!0)},children:(0,l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"w-6 h-6",children:(0,l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"})})}),(0,l.jsx)(a(),{href:"/",children:(0,l.jsx)("img",{className:"h-12",src:"/logos/Junior-it-web-logo-white.png"})}),(0,l.jsxs)("div",{className:"hidden lg:block",children:[(0,l.jsx)(a(),{href:"/",className:"font-medium",style:"/"==m.asPath||m.asPath.startsWith("/?")?h:{},children:o("home")}),(0,l.jsx)(a(),{href:"/courses",className:"font-medium ml-6",style:m.asPath.startsWith("/courses")?h:{},children:o("courses")}),(0,l.jsx)(a(),{href:"/pricing",className:"font-medium ml-6",style:m.asPath.startsWith("/pricing")?h:{},children:o("pricing")}),(0,l.jsx)(a(),{href:"/playground",className:"font-medium ml-6",style:m.asPath.startsWith("/playground")?h:{},children:o("playground")}),(0,l.jsx)(a(),{href:"/virtual-office",className:"font-medium ml-6",style:m.asPath.startsWith("/virtual")?h:{},children:"Virtual Office"}),(0,l.jsx)(a(),{href:"/resource",className:"font-medium ml-6",style:m.asPath.startsWith("/resource")?h:{},children:o("resources")})]}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"hidden lg:block",children:"authenticated"===i.status?(0,l.jsx)("button",{className:"w-24 border-2 rounded-lg h-10 border-primary-blue text-primary-blue hover:opacity-80 font-medium",onClick:()=>{(0,d.signOut)()},children:o("sign-out")}):(0,l.jsx)(l.Fragment,{children:!m.asPath.startsWith("/live-class")&&(0,l.jsx)(a(),{href:"/live-class",children:(0,l.jsx)("button",{className:"w-28 rounded h-10 border-primary-blue text-white hover:opacity-80 font-medium bg-primary-blue ml-6",children:o("pre-register")})})})})})]}),s?(0,l.jsxs)("div",{className:"fixed w-screen h-screen bg-gray-700 bg-opacity-20 flex z-50",children:[(0,l.jsxs)("div",{className:"w-56 h-full bg-white shadow-2xl",children:[(0,l.jsxs)("div",{className:"flex flex-col items-end pb-4 pr-14",children:[(0,l.jsx)(a(),{href:"/",className:"font-medium mt-6",style:"/"==m.asPath||m.asPath.startsWith("/?")?h:{},children:o("home")}),(0,l.jsx)(a(),{href:"/courses",className:"font-medium mt-6",style:m.asPath.startsWith("/courses")?h:{},children:o("courses")}),(0,l.jsx)(a(),{href:"/pricing",className:"font-medium mt-6",style:m.asPath.startsWith("/pricing")?h:{},children:o("pricing")}),(0,l.jsx)(a(),{href:"/playground",className:"font-medium mt-6",style:m.asPath.startsWith("/playground")?h:{},children:o("playground")}),(0,l.jsx)(a(),{href:"/virtual-office",className:"font-medium mt-6",style:m.asPath.startsWith("/virtual")?h:{},children:"Virtual Office"}),(0,l.jsx)(a(),{href:"/resource",className:"font-medium mt-6",style:m.asPath.startsWith("/resource")?h:{},children:o("resources")})]}),(0,l.jsx)("hr",{}),"authenticated"===i.status?(0,l.jsx)("div",{className:"flex flex-col items-end pr-14",children:(0,l.jsx)("button",{className:"font-medium mt-6 text-blue-dark",onClick:()=>{(0,d.signOut)()},children:o("sign-out")})}):(0,l.jsx)("div",{className:"flex flex-col items-end pr-14",children:!1})]}),(0,l.jsx)("div",{className:"flex-1",onClick:()=>{t(!1)}})]}):null]})})};s.Z=m}}]);