"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2367],{54195:function(e,t,n){var r=n(85893),a=n(67294),i=n(50610),s=n(85583),o=n(9689),l=n.n(o),c=n(90629),d=n(63069);let u=e=>{let[t,n]=(0,a.useState)(""),o=(0,a.useRef)(!1),u=(0,a.useRef)(null),f={};try{f=l().parse(e.meta)}catch(m){c.Z.error(m.message)}return(0,a.useEffect)(()=>{let t=async()=>{if("typing"==e.effect){u.current.style.opacity="1",u.current.style.transition="";for(let t=0;t<e.content.length;t++)n(e.content.substring(0,t)),await (0,s.Z)(15)}else n(e.content),await (0,s.Z)(1),u.current.style.opacity="1",f.during&&await (0,s.Z)(f.during);if(e.callback){if(o.current)return;o.current=!0,e.callback(e.index,1)}};t()},[]),(0,r.jsx)("div",{ref:u,style:{opacity:0,transition:"opacity 1s ease-in-out"},children:"code"==f.type?(0,r.jsx)(i.D,{children:"```\n".concat(t,"\n```")}):(0,r.jsx)(d.Z,{linkTarget:"_blank",markdown:t})})};t.Z=(0,a.memo)(u)},96668:function(e,t,n){var r=n(85893),a=n(51857),i=n.n(a),s=n(67294);let o=e=>{let[t,n]=(0,s.useState)(!1),[a,o]=(0,s.useState)(!1),[l,c]=(0,s.useState)(!1),d=(0,s.useRef)(null),u=(0,s.useRef)(null),[f,m]=(0,s.useState)(""),p=(0,s.useRef)(!1);return((0,s.useEffect)(()=>{e.lastStep&&e.index&&e.lastStep>e.index&&(o(!0),c(!0)),d.current.style.opacity="1","nestEnd"!=e.action||p.current||(p.current=!0,e.callback(e.index,1))},[]),t)?null:(0,r.jsxs)("div",{ref:d,style:{opacity:0,transition:"opacity 1s ease-in-out"},className:"jsx-17ad1d963c47db9b",children:[0===s.Children.count(e.children)?(0,r.jsx)("div",{className:"jsx-17ad1d963c47db9b",children:"Press the button below to continue."}):e.children,"continue"==e.action&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"jsx-17ad1d963c47db9b flex gap-5 items-end",children:[(0,r.jsxs)("button",{disabled:a,onClick:async t=>{var n,r;if(t.preventDefault(),t.currentTarget,a||u.current&&!u.current.classList.contains("hidden"))return;null===(n=u.current)||void 0===n||n.classList.remove("hidden"),m("");let i=await e.sendCommand();null===(r=u.current)||void 0===r||r.classList.add("hidden"),(!0===i||(m(i),e.warning))&&(o(!0),p.current||(p.current=!0,e.callback(e.index,1)))},className:"jsx-17ad1d963c47db9b "+"w-auto rounded h-10 border-primary-blue text-white font-medium bg-primary-blue hover:opacity-80 flex flex-row items-center gap-2 px-4 ".concat(a&&"disabled:opacity-25"),children:[(0,r.jsx)("span",{className:"jsx-17ad1d963c47db9b",children:"Continue"}),(0,r.jsx)("div",{ref:u,className:"jsx-17ad1d963c47db9b loader hidden w-5 h-5"})]})," ",!a&&e.timeLeft&&"About ".concat(e.timeLeft," minutes left for the rest.")]}),f&&(0,r.jsx)("div",{style:{color:"red",margin:10},className:"jsx-17ad1d963c47db9b",children:f}),(f||l)&&e.refInfo&&(e.refInfo.startsWith("http")?(0,r.jsxs)("div",{className:"jsx-17ad1d963c47db9b",children:["If you need help for this topic, please check this ",e.refInfo.includes("youtube")?"video":"url",": ",(0,r.jsx)("a",{href:e.refInfo,target:"_blank",className:"jsx-17ad1d963c47db9b",children:"props.refInfo"})]}):"ai"==e.refInfo?"If you need help for this topic, please use the AI prompts section above.":e.refInfo)]}),(0,r.jsx)(i(),{id:"17ad1d963c47db9b",children:".loader.jsx-17ad1d963c47db9b{border:3px solid#f3f3f3;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border-top:3px solid#3498db;width:20px;height:20px;-webkit-animation:spin 2s linear infinite;-moz-animation:spin 2s linear infinite;-o-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}}\n            "})]})};t.Z=(0,s.memo)(o)},82367:function(e,t,n){n.d(t,{Z:function(){return J}});var r=n(85893),a=n(67294),i=n(91505),s=n(74730),o=n(96668),l=n(79857),c=n(35574),d=n(85583),u=n(69380),f=n(10338),m=n(9689),p=n.n(m),x=n(1272),h=n(63069),g=n(90629),y=n(18198),b=n(58358),k=n(77497);let v=e=>{let[t,n]=(0,a.useState)(""),i=(0,a.useRef)(!1),s=(0,a.useRef)(null),o=(0,a.useRef)(""),l={};try{l=p().parse(e.meta)}catch(c){g.Z.error(c.message)}return(0,a.useEffect)(()=>{let t=async()=>{if(n(e.content),await (0,d.Z)(1),s.current.style.opacity="1",l.during&&await (0,d.Z)(l.during),e.callback&&!i.current&&(i.current=!0,e.callback(e.index,1),l.vscode&&e.sendCommand)){let t={type:"right_panel",body:{shell:e.content,html:l.html},clear:l.clear};e.sendCommand(t)}};t()},[]),(0,r.jsx)("div",{ref:s,style:{opacity:0,transition:"opacity 1s ease-in-out"},children:t.split("\n").map((t,n)=>{if(0==t.indexOf("#")&&(o.current&&(o.current+="\n"),o.current+=t,t=""),!t)return null;let a=o.current;return o.current="",(0,r.jsx)("div",{className:"flex flex-row items-end",children:(0,r.jsxs)("div",{style:{flex:1,color:"var(--tw-prose-pre-code)",backgroundColor:"var(--tw-prose-pre-bg)",borderRadius:"0.375rem",margin:"5px 0",padding:"5px 10px"},children:[a&&a.split("\n").map((e,t)=>(0,r.jsxs)("div",{children:[e,"\xa0"]},t)),(0,r.jsxs)("div",{className:"flex flex-row",children:[(0,r.jsx)("div",{style:{flex:1,marginTop:5},children:t}),(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{className:"w-6 h-6 hover:opacity-60 opacity-80 cursor-pointer inline select-none mx-1",title:"Copy to terminal",onClick:()=>{e.sendText&&e.sendText(t,!1)}}),(0,r.jsx)(b.Z,{className:"w-6 h-6 hover:opacity-60 opacity-80 cursor-pointer inline select-none mx-1",title:"Execute in terminal",onClick:()=>{e.sendText&&e.sendText(t,!0)}}),(0,r.jsx)(k.Z,{className:"w-6 h-6 hover:opacity-60 opacity-80 cursor-pointer inline select-none mx-1",title:"Copy to clipboard",onClick:()=>{navigator.clipboard.writeText(t).then(function(){}).catch(function(e){console.error("Error in copying text: ",e)})}})]})]})]})},n)})})};var w=(0,a.memo)(v),j=n(64727),_=n(50610),Z=n(97762);let C=e=>"string"==typeof e?e:0===a.Children.count(e)?"":a.Children.map(e,e=>a.isValidElement(e)?C(e.props.children):e).join(""),S=e=>{let[t,n]=(0,a.useState)(""),i=(0,a.useRef)(!1),s=(0,a.useRef)(null),o={};try{o=p().parse(e.meta)}catch(l){g.Z.error(l.message)}let c=t=>{let n=C(t.children);n||(n="1:0-1:0");let a=n.split("-")[0],i=n.split("-")[1],s=a.split(":")[0],o=a.split(":")[1],l=i.split(":")[0],c=i.split(":")[1];return(0,r.jsx)("a",{href:"#",onClick:n=>{n.preventDefault();let r={};r=0==t.href.indexOf("#")?"#close"==t.href?{type:"terminal_close_all"}:"#new"==t.href?{type:"terminal_new"}:"#focus"==t.href?{type:"terminal_focus"}:{type:"terminal_new",directory:t.href.substring(1)}:{type:"open_file",file:t.href,fromLine:s,startChar:o,toLine:l,endChar:c},e.sendCommand&&e.sendCommand(r)},children:(0,r.jsx)(j.Z,{className:"w-6 h-6 inline mx-2 text-primary-blue opacity-80"})})},u=e=>{let t=C(e.children);t||(t="1:0-1:0");let n=t.split("-")[0],a=t.split("-")[1],i=n.split(":")[0],s=n.split(":")[1],o=a.split(":")[0],l=a.split(":")[1],c={};return c=0==e.href.indexOf("#")?"#close"==e.href?{type:"terminal_close_all"}:"#new"==e.href?{type:"terminal_new"}:"#focus"==e.href?{type:"terminal_focus"}:{type:"terminal_new",directory:e.href.substring(1)}:{type:"open_file",file:e.href,fromLine:i,startChar:s,toLine:o,endChar:l},(0,r.jsx)("a",{href:"#".concat(JSON.stringify(c)),children:"__BoltIcon__"})};return(0,a.useEffect)(()=>{let t=async()=>{if(n(e.content),await (0,d.Z)(1),s.current.style.opacity="1",o.during&&await (0,d.Z)(o.during),e.callback&&!i.current&&(i.current=!0,e.callback(e.index,1),o.vscode&&e.sendCommand)){let t=Z.renderToStaticMarkup((0,r.jsx)(_.D,{components:{a:u},children:e.content}));console.log(t);let a={type:"right_panel",body:{html:t,shell:o.shell},clear:o.clear};e.sendCommand(a)}};t()},[]),(0,r.jsx)("div",{ref:s,style:{opacity:0,transition:"opacity 1s ease-in-out"},children:(0,r.jsx)(_.D,{components:{a:c},children:t})})};var N=(0,a.memo)(S),R=n(51857),I=n.n(R);let E=e=>{let[t,n]=(0,a.useState)(!1),[i,s]=(0,a.useState)("Please click the button below to start your JuniorIT.AI cloud development container."),[o,l]=(0,a.useState)("Start"),c=(0,a.useRef)(null),d=(0,a.useRef)(null),u=(0,a.useRef)(null),f=(0,a.useRef)(100),m=(0,a.useRef)({}),[p,x]=(0,a.useState)(""),h=(0,a.useRef)(!1);return(0,a.useEffect)(()=>()=>{u.current&&(clearInterval(u.current),u.current=null)},[]),(0,r.jsxs)("div",{ref:c,className:"jsx-17ad1d963c47db9b",children:[(0,r.jsx)("div",{className:"jsx-17ad1d963c47db9b my-5",children:i}),(0,r.jsx)("div",{className:"jsx-17ad1d963c47db9b flex gap-5 items-end",children:(0,r.jsxs)("button",{disabled:t,onClick:async r=>{if(r.preventDefault(),!t){if("Start"==o){var a;if(null===(a=d.current)||void 0===a||a.classList.remove("hidden"),l("Ready in 100 seconds"),s("Please wait, we are currently provisioning a cloud development container for you."),e.createContainer(),u.current)return;f.current=100,u.current=setInterval(()=>{if(l("Ready in ".concat(f.current,"s")),f.current--,f.current%5!=0)return;let t=e.createContainer();if(t&&(console.log(t.info),m.current=JSON.parse(t.info),t.status&&["created","online"].includes(t.status)&&m.current.url)){var r;s("JuniorIT.AI cloud development container is ready for you, please click the button below to lanuch it."),l("Launch"),clearInterval(u.current),u.current=null,n(!1),null===(r=d.current)||void 0===r||r.classList.add("hidden")}},1e3),n(!0);return}"Launch"==o&&(window.open(m.current.url),h.current||(h.current=!0,e.callback(e.index,1)))}},className:"jsx-17ad1d963c47db9b "+"w-auto rounded whitespace-nowrap h-10 border-primary-blue text-white font-medium bg-primary-blue hover:opacity-80 flex flex-row items-center gap-2 px-4 ".concat(t&&"disabled:opacity-25"),children:[(0,r.jsx)("span",{className:"jsx-17ad1d963c47db9b",children:o}),(0,r.jsx)("div",{ref:d,className:"jsx-17ad1d963c47db9b loader hidden w-5 h-5"})]})}),p&&(0,r.jsx)("div",{style:{color:"red",margin:10},className:"jsx-17ad1d963c47db9b",children:p}),(0,r.jsx)(I(),{id:"17ad1d963c47db9b",children:".loader.jsx-17ad1d963c47db9b{border:3px solid#f3f3f3;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;border-top:3px solid#3498db;width:20px;height:20px;-webkit-animation:spin 2s linear infinite;-moz-animation:spin 2s linear infinite;-o-animation:spin 2s linear infinite;animation:spin 2s linear infinite}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg)}}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-moz-keyframes spin{0%{-moz-transform:rotate(0deg);transform:rotate(0deg)}100%{-moz-transform:rotate(360deg);transform:rotate(360deg)}}@-o-keyframes spin{0%{-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-o-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg)}}}\n            "})]})};var T=(0,a.memo)(E),z=n(54195),L=n(4469),O=n(9367),D=n(6154);let A=e=>{let t=(0,u.l)().use(f.Z).parse(e.courseData);e.fromIndex&&t.children.splice(1,e.fromIndex);let n=t.children[0];x.ZP.load(n.value);let[m,g]=(0,a.useState)([]),[y,b]=(0,a.useState)(e.lastStep||1),k=(0,a.useRef)(!1),v=(0,a.useRef)(null),j=(0,a.useRef)({}),_=(0,a.useRef)(""),Z=(0,a.useRef)(null),C=e=>{let t,n;let r=/origin\s+git@github\.com:(\S+)\/(\S+)(\.git)?/.exec(e);if(r)t=r[1],n=r[2];else{if(!(r=/origin\s+https:\/\/github\.com\/(\S+)\/(\S+)(\.git)?/.exec(e)))return!1;t=r[1],n=r[2]}return"https://".concat(t,".github.io/").concat(n)},S=async n=>{let a=t.children[n];if(!a){console.error("getNode out of the range!");return}if("code"!=a.type)return null;{var u,f,m,x,g,S,R,I;let E={};try{a.meta&&(E=p().parse(a.meta))}catch(O){console.log(a.meta),console.error(O.message)}if(E.index||(E.index=n),"markdown"!=a.lang&&a.lang){if("yaml"==a.lang)return"form"==E.type?(0,r.jsx)(s.Z,{token:e.token,lastStep:e.lastStep,row:E.row,order:E.order,refInfo:E.ref,video:E.video,yml:a.value,index:E.index,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index):"list"==E.type?(0,r.jsx)(c.Z,{meta:null!==(g=a.meta)&&void 0!==g?g:"{}",yml:a.value,index:E.index,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index):null;if("tabs"==a.lang)return(0,r.jsx)(L.Z,{content:a.value,meta:null!==(S=a.meta)&&void 0!==S?S:"{}",index:E.index,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index);if("code"==E.type)return(0,r.jsx)(l.Z,{token:e.token,codes:a.value,lang:null!==(R=a.lang)&&void 0!==R?R:"any",meta:null!==(I=a.meta)&&void 0!==I?I:"{}",index:E.index,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index)}else{if("chat"==E.type)return(0,r.jsx)(i.Z,{codes:a.value,lang:"markdown",meta:null!==(u=a.meta)&&void 0!==u?u:"",index:E.index,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index);if("container"==E.type)return(0,r.jsx)(T,{token:e.token,lastStep:e.lastStep,timeLeft:E.timeLeft,warning:E.warning,refInfo:E.ref,index:E.index,meta:a.meta,createContainer:()=>null!=v.current&&(v.current.volatile.emit("assignment_event",{type:"get-container",assignment_token:e.token}),Z.current),callback:(t,n)=>{1==n&&y==t&&(e.token&&(0,D.Z)({method:"post",url:"https://www.juniorit.ai/rest/assignment-last-step",headers:{"Content-Type":"application/json"},data:{assignment_token:e.token,last_step:t+1}}).catch(e=>console.log(e)),b(()=>t+1))}},E.index);if("control"==E.type)return(0,r.jsx)(o.Z,{token:e.token,lastStep:e.lastStep,timeLeft:E.timeLeft,warning:E.warning,refInfo:E.ref,index:E.index,action:E.action,sendCommand:async()=>{if(null==v.current)return!0;if(E.history){let t=!1;for(let n=0;n<10;n++){await (0,d.Z)(500);let r=_.current;if(r){let a;if(0==E.history.indexOf("/")){let i=E.history;a=RegExp(i.slice(1,i.lastIndexOf("/")),i.slice(i.lastIndexOf("/")+1))}else a=RegExp(E.history);if(!a.test(r))return E.error;if(t=!0,!E.cmd)return!0}}if(!t)return E.error||"Your dev container is offline or system error, please try again later or contact support."}if(!E.cmd)return!0;E.dir||(E.dir="/tmp"),j.current["shell:".concat(E.cmd,":").concat(E.dir,":").concat(E.regx)]=null,v.current.emit("assignment_event",{type:"shell",cmd:E.cmd,dir:E.dir,regx:E.regx,error:E.error});for(let s=0;s<30;s++){await (0,d.Z)(500);let o=j.current["shell:".concat(E.cmd,":").concat(E.dir,":").concat(E.regx)];if(null!=o){let l;if(E.cmd.includes("git remote")){let c=C(o.response);if(!c)return"Your containner has a git repository setup issue!";return e.token&&(0,D.Z)({method:"post",url:"https://www.juniorit.ai/rest/assignment-web-url",headers:{"Content-Type":"application/json"},data:{assignment_token:e.token,web_url:c}}).catch(e=>console.log(e)),!0}if(0==E.regx.indexOf("/")){let u=E.regx;l=RegExp(u.slice(1,u.lastIndexOf("/")),u.slice(u.lastIndexOf("/")+1))}else l=RegExp(E.regx);if(l.test(o.response))return!0;return o.error}}return E.error||"Your dev container is offline or system error, please try again later or contact support."},meta:a.meta,callback:(t,n)=>{if(1==n){if("nestEnd"==E.action&&e.callback&&void 0!=e.index){if(k.current)return;k.current=!0,e.callback(e.index,1);return}y==t&&(e.token&&(0,D.Z)({method:"post",url:"https://www.juniorit.ai/rest/assignment-last-step",headers:{"Content-Type":"application/json"},data:{assignment_token:e.token,last_step:t+1}}).catch(e=>console.log(e)),b(()=>t+1))}},children:(0,r.jsx)(h.Z,{linkTarget:"_blank",markdown:a.value.replaceAll("\\`\\`\\`","```")},E.index)},E.index);if("bash"==E.type)return(0,r.jsx)(w,{index:E.index,meta:null!==(f=a.meta)&&void 0!==f?f:null,content:a.value,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)},sendText:(e,t)=>{v.current&&v.current.emit("assignment_event",{type:"terminal_sent_text",text:e,addNewLine:t,dst:"vscode"})},sendCommand:e=>{e.dst="vscode",v.current&&v.current.emit("assignment_event",e)}},E.index);else if("vscode"==E.type)return(0,r.jsx)(N,{index:E.index,meta:null!==(m=a.meta)&&void 0!==m?m:null,content:a.value,callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)},sendCommand:e=>{e.dst="vscode",v.current&&v.current.emit("assignment_event",e)}},E.index);else return(0,r.jsx)(z.Z,{index:E.index,meta:null!==(x=a.meta)&&void 0!==x?x:null,content:a.value.replaceAll("\\`\\`\\`","```"),callback:(e,t)=>{1==t&&y==e&&b(()=>e+1)}},E.index)}}};return(0,a.useEffect)(()=>{if(!e.token||null!=v.current)return;v.current=(0,O.io)("https://www.juniorit.ai",{reconnection:!0,reconnectionDelay:1e3,reconnectionDelayMax:15e3});let t=v.current;t.on("connect",()=>{t.sendBuffer=[],t.emit("assignment_event",{type:"sign-in",token:e.token})}),t.on("connected",e=>{}),t.on("server_event",n=>{"sign-in-request"==n.type?t.emit("assignment_event",{type:"sign-in",token:e.token}):"sign-in-response"==n.type||("server-response"==n.type?n.payload.error&&n.payload.error:"get-container"==n.type||"container-status"==n.type&&(Z.current=n))}),t.on("container_event",e=>{"shell"==e.type?j.current["".concat(e.type,":").concat(e.cmd,":").concat(e.dir,":").concat(e.regx)]=e:"history"==e.type&&(_.current=_.current+"\n"+e.content)}),t.on("disconnect",()=>{console.log(t.id)})},[e.token]),(0,a.useEffect)(()=>{(async function(){if(m.length<y-1){let e=[];for(let t=1;t<y;t++)e.push(await S(t));g([...e,await S(y)])}else g([...m,await S(y)])})()},[y]),(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"prose max-w-none",children:m})})};var J=A}}]);