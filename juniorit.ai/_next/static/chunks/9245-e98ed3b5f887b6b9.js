(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9245],{93975:function(e,s,l){"use strict";var t=l(67294);let a=()=>{let[e,s]=(0,t.useState)(!1),[l,a]=(0,t.useState)(!1);return null};s.Z=a},71910:function(e,s,l){"use strict";l.d(s,{ZP:function(){return g},mf:function(){return y}});var t=l(85893),a=l(88198),r=l(17010),n=l(67294),i=l(87536),c=l(48966),o=l.n(c),d=l(15177),m=l(25963),h=l(36833),u=l(7406);l(80129);var x=l(6154),p=l(11163),f=l(42474);let j=function(e){var s="Mi32cHarPazzw0rdPndIBitLectorZtr",l=s.substr(0,16),t=f.createCipheriv("AES-256-CBC",s,l);return t.update(e,"utf8","base64")+t.final("base64")},N=e=>(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,t.jsx)("div",{className:" bg-secondary-green bg-opacity-10 w-24 h-24 rounded-full flex justify-center items-center mb-4",children:(0,t.jsx)(a.Z,{className:" w-14 h-14 text-secondary-green"})}),(0,t.jsx)("h2",{className:" text-secondary-green font-light text-xl",children:"Thank you for enrolling in our free classes!"}),(0,t.jsx)("p",{className:" font-normal text-base text-gray-600 text-left my-5",children:null!=e?e:"Let's discover the ai class now."}),(0,t.jsx)("p",{children:(0,t.jsx)("a",{href:"https://juniorit.ai/discord",children:"https://juniorit.ai/discord"})}),(0,t.jsx)(h.Z,{label:"Join Now",callback:()=>{m.qk.closeAll(),location.href="https://juniorit.ai/discord"}})]}),y=e=>(0,t.jsxs)("div",{className:"flex flex-col justify-center items-center",children:[(0,t.jsx)("div",{className:" bg-red bg-opacity-5 w-24 h-24 rounded-full flex justify-center items-center mb-4",children:(0,t.jsx)(r.Z,{className:" w-14 h-14 text-red"})}),(0,t.jsx)("h2",{className:" text-red font-light text-xl",children:"Error"}),(0,t.jsx)("p",{className:" font-normal text-sm text-gray-600 text-center",children:e}),(0,t.jsx)(h.Z,{label:"ok",callback:()=>m.qk.closeAll()})]});function g(){let{register:e,setValue:s,reset:l,handleSubmit:a,control:r,formState:{errors:c,isValid:h}}=(0,i.cI)({defaultValues:{classSlotID:"",firstName:"",lastName:"",email:"",phoneNumber:"",code:"",refCode:""}}),[f,g]=(0,n.useState)(!1),[b,v]=(0,n.useState)(""),[w,k]=(0,n.useState)(0);(0,n.useRef)(0);let A=e=>{let s=e.replaceAll(" ","").replaceAll("-","").trim();return null!=s.match(/^\+[0-9]{9,}/)&&!(s.startsWith("+1")&&12!=s.length||s.startsWith("+61")&&12!=s.length||s.startsWith("+64")&&12!=s.length||s.startsWith("+91")&&13!=s.length||s.startsWith("+44")&&13!=s.length||s.startsWith("+27")&&12!=s.length)},S=async e=>{g(!0);try{var s;let t;let a=(0,u.x0)(16),r=(0,u.x0)(16);t=await fetch("".concat("https://www.juniorit.ai/cms","/api/auth/local/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:a,class_slot_id:e.classSlotID,firstname:e.firstName,lastname:e.lastName,email:e.email,password:r,mobile_phone:e.phoneNumber,reference:e.refCode})});let n=await t.json(),i=null==n?void 0:n.error,c=null==i?void 0:null===(s=i.details)||void 0===s?void 0:s.errors,o=null==i?void 0:i.message;if(c){let d="";c.forEach(e=>d+="".concat(e.message,".")),m.qk.open({centered:!0,children:y("Enroll Failed: ".concat(d.replace("or Username are","is")))});return}if(o){o.includes("already taken")?m.qk.open({centered:!0,children:N("You have already signed up with JuniorIT.AI. Please join our student Discord channel to receive support from our friendly teachers and get the latest updates.")}):m.qk.open({centered:!0,children:y("Enroll failed: ".concat(o))});return}l(),fbq("track","CompleteRegistration",{content_name:"Live Class",content_category:"course",value:10,currency:"AUD"});try{let h=new FormData;h.append("email",j(e.email)),h.append("first_name",j(e.firstName)),h.append("class_slot_id",j(e.classSlotID)),h.append("mobile_phone",j(e.phoneNumber)),h.append("reference",j(e.refCode)),h.append("key","ADA2XW#13$GG##DF!GD!!");let p=await x.Z.post("https://service.haicam.tech/payment/juniorit_class_email.php",h);"OK"!=p.data.ret&&console.log(p.data)}catch(f){console.log("error:",f)}gtag("event","conversion",{send_to:"AW-1048034936/oSj_CJ6208oYEPj83vMD",event_callback:()=>{m.qk.open({centered:!0,children:N("One confirmation email has been sent to your email address. In the meantime, please join our student Discord channel to receive support from our friendly teachers and get the latest updates.")})}})}catch(b){console.log("error:",b),m.qk.open({centered:!0,children:y("An error occurred:"+b)})}finally{g(!1)}},C=(0,p.useRouter)();return(0,n.useEffect)(()=>{let{ref:e}=C.query;e&&(s("refCode",e),v(e))},[C.query]),(0,t.jsxs)("div",{id:"enroll",className:" bg-gray-100 rounded-md flex flex-col items-center py-10 px-3 mx-3 md:max-lg:mx-3 xl:max-3xl:mx-auto max-w-screen-jit-xl my-10 md:max-3xl:my-20",children:[(0,t.jsx)("h2",{className:"lg:max-3xl:w-3/4 text-2xl font-semibold",children:"Enroll in These Free Classes"}),(0,t.jsxs)("div",{className:"lg:max-3xl:w-3/4",children:[(0,t.jsxs)("div",{className:"mt-5 flex justify-start",children:[(0,t.jsxs)("div",{className:"flex justify-start w-48",children:[(0,t.jsx)("span",{children:"7PM"}),(0,t.jsx)("span",{className:"pl-10",children:"Wednesday"})]}),(0,t.jsx)("span",{className:"pl-3",children:"Weekly"})]}),(0,t.jsxs)("div",{className:"flex justify-start",children:[(0,t.jsxs)("div",{className:"flex justify-start w-48",children:[(0,t.jsx)("span",{children:"7PM"}),(0,t.jsx)("span",{className:"pl-10",children:"Thursday"})]}),(0,t.jsx)("span",{className:"pl-3",children:"Weekly"})]}),(0,t.jsxs)("div",{className:"flex justify-start",children:[(0,t.jsxs)("div",{className:"flex justify-start w-48",children:[(0,t.jsx)("span",{children:"4PM"}),(0,t.jsx)("span",{className:"pl-10",children:"Saturday"})]}),(0,t.jsx)("span",{className:"pl-3",children:"Weekly"})]}),(0,t.jsx)("div",{className:"mt-5 mb-0 text-sm",children:"Book your first class time slot then the same day, every week."})]}),(0,t.jsxs)("form",{className:"pt-10 grid grid-cols-2 gap-4 lg:max-3xl:w-3/4",onSubmit:a(S),children:[(0,t.jsxs)("div",{className:"col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"startTime",className:"font-bold mb-2",children:["Class Time Slot",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2",children:"*"})]}),(0,t.jsxs)("select",{className:"w-full h-12 border-solid border-1 border-gray-300 rounded-lg p-2",...e("classSlotID",{required:!0,validate:e=>""!=e}),children:[(0,t.jsx)("option",{value:"",children:"Choose a class, then same day, every week"}),(0,t.jsx)("option",{value:"AEST20230802WED1900",children:"Your class: 7PM Wednesday Weekly"}),(0,t.jsx)("option",{value:"AEST20230803THU1900",children:"Your class: 7PM Thursday Weekly"}),(0,t.jsx)("option",{value:"AEST20230805SAT1600",children:"Your class: 4PM Saturday Weekly"})]}),c.email&&(0,t.jsx)("span",{className:"text-red font-light",children:"Please select your class time"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{htmlFor:"firstName",className:"font-bold mb-2",children:["First name",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2",children:"*"})]}),(0,t.jsx)("input",{type:"text",...e("firstName",{required:!0,maxLength:20}),className:"w-full h-12 border-solid border-1 border-gray-300 rounded-lg p-2"}),c.firstName&&(0,t.jsx)("span",{className:"text-red font-light",children:"First name is required"})]}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("label",{htmlFor:"lastName",className:"font-bold mb-2",children:["Last name",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2",children:"*"})]}),(0,t.jsx)("input",{type:"text",...e("lastName",{required:!0,pattern:/^[A-Za-z]+$/i}),className:"w-full h-12 border-solid border-1 border-gray-300 rounded-lg p-2"}),c.lastName&&(0,t.jsx)("span",{className:"text-red font-light",children:"Last name is required"})]}),(0,t.jsxs)("div",{className:"col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"email",className:"font-bold mb-2",children:["Email",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2",children:"*"})]}),(0,t.jsx)("input",{type:"text",className:"w-full h-12 border-solid border-1 border-gray-300 rounded-lg p-2",...e("email",{required:!0,validate:e=>o().isEmail(e)})}),c.email&&(0,t.jsx)("span",{className:"text-red font-light",children:"Email is invalid"})]}),(0,t.jsxs)("div",{className:"col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"phoneNumber",className:"font-bold mb-2",children:["Mobile Phone",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2",children:"*"})]}),(0,t.jsx)("input",{type:"text",id:"phoneNumber",placeholder:"+country code plus numbers",...e("phoneNumber",{required:!0,setValueAs:e=>e.replaceAll(" ","").replaceAll("-","").trim(),validate:e=>A(e)}),className:"w-full h-12 border-solid border-1 border-gray-300 rounded-lg p-2"}),c.phoneNumber&&(0,t.jsx)("span",{className:"text-red font-light",children:"Please check the format of your mobile number and make sure you have the country code prefix."})]}),(0,t.jsxs)("div",{className:"col-span-2",children:[(0,t.jsxs)("label",{htmlFor:"refCode",className:"font-bold mb-2",children:[b&&b.includes("@")?"Reference":"Coupon",(0,t.jsx)("span",{className:"text-red font-light text-lg pl-2"})]}),(0,t.jsx)("div",{className:"flex items-center",children:(0,t.jsx)("input",{type:"text",id:"refCode",className:"w-full mr-4 h-12 border-solid border-1 border-gray-300 rounded-lg p-2",...e("refCode",{required:!1,validate:async e=>{if(!e)return!0;if(["UT23A75IN","FH23A75IN","NA23A75IN","HG23A75IN","KR23A75IN","SA23A75IN","SK23A75IN","KJ23A75IN"].includes(e)){let s=document.getElementById("phoneNumber").value;if(s.startsWith("+91"))return!0}if(0==e.indexOf("CAMUSER"))try{let l=e.slice(7,-1),t=parseInt(l,16);return e.slice(-1)===(t%10).toString()}catch(a){return!1}if(b&&b.includes("@")){if(!o().isEmail(e))return"Reference email format is incorrect!";try{let r=await x.Z.post("/api/auth/check-user",{email:e});if("OK"==r.data.status)return"Reference email does not exist!";if("NO"==r.data.status)return!0;return"Something wrong, please try later"}catch(n){return"Something wrong, please try later!"}}return!1}})})}),c.refCode&&(0,t.jsx)("span",{className:"text-red font-light",children:c.refCode.message||"Coupon code is invalid"})]}),(0,t.jsx)("button",{className:"w-full bg-secondary-green py-4 rounded-md text-white col-span-2 mt-5 ",children:"Enroll Now"}),(0,t.jsxs)("div",{className:"w-full px-4 col-span-2 ",children:["* No credit card or payment methods are required, and the courses are completely free. ",(0,t.jsx)("br",{}),"* You are agree with our"," ",(0,t.jsx)("a",{href:"/terms",children:(0,t.jsx)("u",{children:"Term Condition"})})," ","&"," ",(0,t.jsx)("a",{href:"/privacy",children:(0,t.jsx)("u",{children:"Privacy Policy"})})," ","when you enroll in our classes"]}),f?(0,t.jsx)(d.Z,{}):null]})]})}},15177:function(e,s,l){"use strict";var t=l(85893);l(67294);let a=()=>(0,t.jsx)("div",{className:"fixed top-0 left-0 bottom-0 right-0 flex items-center justify-center bg-gray-500 bg-opacity-20",children:(0,t.jsx)("div",{className:"w-40 h-40 rounded-3xl shadow-2xl flex items-center justify-center bg-white",children:(0,t.jsx)("img",{src:"/icon/loading.png",className:"h-12 w-12 rotate",alt:"Loading icon"})})});s.Z=a},36833:function(e,s,l){"use strict";l.d(s,{Z:function(){return a}});var t=l(85893);function a(e){var s;return(0,t.jsxs)("button",{disabled:e.disabled,onClick:s=>{var l;(null===(l=e.preventDefault)||void 0===l||l)&&s.preventDefault(),e.callback&&e.callback()},className:"w-28 rounded h-10 border-primary-blue text-white font-medium bg-primary-blue my-4 ".concat(null===(s=e.additionalClass)||void 0===s?void 0:s.join(" ")),children:[e.label,e.icon&&(0,t.jsx)("span",{className:"inline-block align-middle ml-2",children:e.icon})]})}l(67294)},24654:function(){}}]);