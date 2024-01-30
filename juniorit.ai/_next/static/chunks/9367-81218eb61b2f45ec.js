"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9367],{9367:function(t,e,s){s.d(e,{io:function(){return tk}});var i,r,n={};s.r(n),s.d(n,{Decoder:function(){return tu},Encoder:function(){return tl},PacketType:function(){return r},protocol:function(){return tc}});let o=Object.create(null);o.open="0",o.close="1",o.ping="2",o.pong="3",o.message="4",o.upgrade="5",o.noop="6";let h=Object.create(null);Object.keys(o).forEach(t=>{h[o[t]]=t});let a={type:"error",data:"parser error"},c="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===Object.prototype.toString.call(Blob),l="function"==typeof ArrayBuffer,p=t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer instanceof ArrayBuffer,u=({type:t,data:e},s,i)=>c&&e instanceof Blob?s?i(e):d(e,i):l&&(e instanceof ArrayBuffer||p(e))?s?i(e):d(new Blob([e]),i):i(o[t]+(e||"")),d=(t,e)=>{let s=new FileReader;return s.onload=function(){let t=s.result.split(",")[1];e("b"+(t||""))},s.readAsDataURL(t)},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",y="undefined"==typeof Uint8Array?[]:new Uint8Array(256);for(let g=0;g<f.length;g++)y[f.charCodeAt(g)]=g;let m=t=>{let e=.75*t.length,s=t.length,i,r=0,n,o,h,a;"="===t[t.length-1]&&(e--,"="===t[t.length-2]&&e--);let c=new ArrayBuffer(e),l=new Uint8Array(c);for(i=0;i<s;i+=4)n=y[t.charCodeAt(i)],o=y[t.charCodeAt(i+1)],h=y[t.charCodeAt(i+2)],a=y[t.charCodeAt(i+3)],l[r++]=n<<2|o>>4,l[r++]=(15&o)<<4|h>>2,l[r++]=(3&h)<<6|63&a;return c},b="function"==typeof ArrayBuffer,v=(t,e)=>{if("string"!=typeof t)return{type:"message",data:_(t,e)};let s=t.charAt(0);if("b"===s)return{type:"message",data:k(t.substring(1),e)};let i=h[s];return i?t.length>1?{type:h[s],data:t.substring(1)}:{type:h[s]}:a},k=(t,e)=>{if(!b)return{base64:!0,data:t};{let s=m(t);return _(s,e)}},_=(t,e)=>"blob"===e&&t instanceof ArrayBuffer?new Blob([t]):t,w=(t,e)=>{let s=t.length,i=Array(s),r=0;t.forEach((t,n)=>{u(t,!1,t=>{i[n]=t,++r===s&&e(i.join("\x1e"))})})},E=(t,e)=>{let s=t.split("\x1e"),i=[];for(let r=0;r<s.length;r++){let n=v(s[r],e);if(i.push(n),"error"===n.type)break}return i};function A(t){if(t)return function(t){for(var e in A.prototype)t[e]=A.prototype[e];return t}(t)}A.prototype.on=A.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},A.prototype.once=function(t,e){function s(){this.off(t,s),e.apply(this,arguments)}return s.fn=e,this.on(t,s),this},A.prototype.off=A.prototype.removeListener=A.prototype.removeAllListeners=A.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var s,i=this._callbacks["$"+t];if(!i)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var r=0;r<i.length;r++)if((s=i[r])===e||s.fn===e){i.splice(r,1);break}return 0===i.length&&delete this._callbacks["$"+t],this},A.prototype.emit=function(t){this._callbacks=this._callbacks||{};for(var e=Array(arguments.length-1),s=this._callbacks["$"+t],i=1;i<arguments.length;i++)e[i-1]=arguments[i];if(s){s=s.slice(0);for(var i=0,r=s.length;i<r;++i)s[i].apply(this,e)}return this},A.prototype.emitReserved=A.prototype.emit,A.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},A.prototype.hasListeners=function(t){return!!this.listeners(t).length};let O="undefined"!=typeof self?self:"undefined"!=typeof window?window:Function("return this")();function R(t,...e){return e.reduce((e,s)=>(t.hasOwnProperty(s)&&(e[s]=t[s]),e),{})}let C=O.setTimeout,T=O.clearTimeout;function B(t,e){e.useNativeTimers?(t.setTimeoutFn=C.bind(O),t.clearTimeoutFn=T.bind(O)):(t.setTimeoutFn=O.setTimeout.bind(O),t.clearTimeoutFn=O.clearTimeout.bind(O))}class N extends Error{constructor(t,e,s){super(t),this.description=e,this.context=s,this.type="TransportError"}}class x extends A{constructor(t){super(),this.writable=!1,B(this,t),this.opts=t,this.query=t.query,this.socket=t.socket}onError(t,e,s){return super.emitReserved("error",new N(t,e,s)),this}open(){return this.readyState="opening",this.doOpen(),this}close(){return("opening"===this.readyState||"open"===this.readyState)&&(this.doClose(),this.onClose()),this}send(t){"open"===this.readyState&&this.write(t)}onOpen(){this.readyState="open",this.writable=!0,super.emitReserved("open")}onData(t){let e=v(t,this.socket.binaryType);this.onPacket(e)}onPacket(t){super.emitReserved("packet",t)}onClose(t){this.readyState="closed",super.emitReserved("close",t)}pause(t){}}let L="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),S={},q=0,P=0,j;function I(t){let e="";do e=L[t%64]+e,t=Math.floor(t/64);while(t>0);return e}function D(){let t=I(+new Date);return t!==j?(q=0,j=t):t+"."+I(q++)}for(;P<64;P++)S[L[P]]=P;function F(t){let e="";for(let s in t)t.hasOwnProperty(s)&&(e.length&&(e+="&"),e+=encodeURIComponent(s)+"="+encodeURIComponent(t[s]));return e}let M=!1;try{M="undefined"!=typeof XMLHttpRequest&&"withCredentials"in new XMLHttpRequest}catch(V){}let U=M;function H(t){let e=t.xdomain;try{if("undefined"!=typeof XMLHttpRequest&&(!e||U))return new XMLHttpRequest}catch(s){}if(!e)try{return new O[["Active"].concat("Object").join("X")]("Microsoft.XMLHTTP")}catch(i){}}function K(){}let Y=function(){let t=new H({xdomain:!1});return null!=t.responseType}();class z extends A{constructor(t,e){super(),B(this,e),this.opts=e,this.method=e.method||"GET",this.uri=t,this.async=!1!==e.async,this.data=void 0!==e.data?e.data:null,this.create()}create(){let t=R(this.opts,"agent","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","autoUnref");t.xdomain=!!this.opts.xd,t.xscheme=!!this.opts.xs;let e=this.xhr=new H(t);try{e.open(this.method,this.uri,this.async);try{if(this.opts.extraHeaders)for(let s in e.setDisableHeaderCheck&&e.setDisableHeaderCheck(!0),this.opts.extraHeaders)this.opts.extraHeaders.hasOwnProperty(s)&&e.setRequestHeader(s,this.opts.extraHeaders[s])}catch(i){}if("POST"===this.method)try{e.setRequestHeader("Content-type","text/plain;charset=UTF-8")}catch(r){}try{e.setRequestHeader("Accept","*/*")}catch(n){}"withCredentials"in e&&(e.withCredentials=this.opts.withCredentials),this.opts.requestTimeout&&(e.timeout=this.opts.requestTimeout),e.onreadystatechange=()=>{4===e.readyState&&(200===e.status||1223===e.status?this.onLoad():this.setTimeoutFn(()=>{this.onError("number"==typeof e.status?e.status:0)},0))},e.send(this.data)}catch(o){this.setTimeoutFn(()=>{this.onError(o)},0);return}"undefined"!=typeof document&&(this.index=z.requestsCount++,z.requests[this.index]=this)}onError(t){this.emitReserved("error",t,this.xhr),this.cleanup(!0)}cleanup(t){if(void 0!==this.xhr&&null!==this.xhr){if(this.xhr.onreadystatechange=K,t)try{this.xhr.abort()}catch(e){}"undefined"!=typeof document&&delete z.requests[this.index],this.xhr=null}}onLoad(){let t=this.xhr.responseText;null!==t&&(this.emitReserved("data",t),this.emitReserved("success"),this.cleanup())}abort(){this.cleanup()}}function W(){for(let t in z.requests)z.requests.hasOwnProperty(t)&&z.requests[t].abort()}z.requestsCount=0,z.requests={},"undefined"!=typeof document&&("function"==typeof attachEvent?attachEvent("onunload",W):"function"==typeof addEventListener&&addEventListener("onpagehide"in O?"pagehide":"unload",W,!1));let $=(()=>{let t="function"==typeof Promise&&"function"==typeof Promise.resolve;return t?t=>Promise.resolve().then(t):(t,e)=>e(t,0)})(),J=O.WebSocket||O.MozWebSocket;s(48764).Buffer;let Q="undefined"!=typeof navigator&&"string"==typeof navigator.product&&"reactnative"===navigator.product.toLowerCase(),X={websocket:class extends x{constructor(t){super(t),this.supportsBinary=!t.forceBase64}get name(){return"websocket"}doOpen(){if(!this.check())return;let t=this.uri(),e=this.opts.protocols,s=Q?{}:R(this.opts,"agent","perMessageDeflate","pfx","key","passphrase","cert","ca","ciphers","rejectUnauthorized","localAddress","protocolVersion","origin","maxPayload","family","checkServerIdentity");this.opts.extraHeaders&&(s.headers=this.opts.extraHeaders);try{this.ws=Q?new J(t,e,s):e?new J(t,e):new J(t)}catch(i){return this.emitReserved("error",i)}this.ws.binaryType=this.socket.binaryType||"arraybuffer",this.addEventListeners()}addEventListeners(){this.ws.onopen=()=>{this.opts.autoUnref&&this.ws._socket.unref(),this.onOpen()},this.ws.onclose=t=>this.onClose({description:"websocket connection closed",context:t}),this.ws.onmessage=t=>this.onData(t.data),this.ws.onerror=t=>this.onError("websocket error",t)}write(t){this.writable=!1;for(let e=0;e<t.length;e++){let s=t[e],i=e===t.length-1;u(s,this.supportsBinary,t=>{try{this.ws.send(t)}catch(e){}i&&$(()=>{this.writable=!0,this.emitReserved("drain")},this.setTimeoutFn)})}}doClose(){void 0!==this.ws&&(this.ws.close(),this.ws=null)}uri(){let t=this.query||{},e=this.opts.secure?"wss":"ws",s="";this.opts.port&&("wss"===e&&443!==Number(this.opts.port)||"ws"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port),this.opts.timestampRequests&&(t[this.opts.timestampParam]=D()),this.supportsBinary||(t.b64=1);let i=F(t),r=-1!==this.opts.hostname.indexOf(":");return e+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}check(){return!!J}},polling:class extends x{constructor(t){if(super(t),this.polling=!1,"undefined"!=typeof location){let e="https:"===location.protocol,s=location.port;s||(s=e?"443":"80"),this.xd="undefined"!=typeof location&&t.hostname!==location.hostname||s!==t.port,this.xs=t.secure!==e}let i=t&&t.forceBase64;this.supportsBinary=Y&&!i}get name(){return"polling"}doOpen(){this.poll()}pause(t){this.readyState="pausing";let e=()=>{this.readyState="paused",t()};if(this.polling||!this.writable){let s=0;this.polling&&(s++,this.once("pollComplete",function(){--s||e()})),this.writable||(s++,this.once("drain",function(){--s||e()}))}else e()}poll(){this.polling=!0,this.doPoll(),this.emitReserved("poll")}onData(t){let e=t=>{if("opening"===this.readyState&&"open"===t.type&&this.onOpen(),"close"===t.type)return this.onClose({description:"transport closed by the server"}),!1;this.onPacket(t)};E(t,this.socket.binaryType).forEach(e),"closed"!==this.readyState&&(this.polling=!1,this.emitReserved("pollComplete"),"open"===this.readyState&&this.poll())}doClose(){let t=()=>{this.write([{type:"close"}])};"open"===this.readyState?t():this.once("open",t)}write(t){this.writable=!1,w(t,t=>{this.doWrite(t,()=>{this.writable=!0,this.emitReserved("drain")})})}uri(){let t=this.query||{},e=this.opts.secure?"https":"http",s="";!1!==this.opts.timestampRequests&&(t[this.opts.timestampParam]=D()),this.supportsBinary||t.sid||(t.b64=1),this.opts.port&&("https"===e&&443!==Number(this.opts.port)||"http"===e&&80!==Number(this.opts.port))&&(s=":"+this.opts.port);let i=F(t),r=-1!==this.opts.hostname.indexOf(":");return e+"://"+(r?"["+this.opts.hostname+"]":this.opts.hostname)+s+this.opts.path+(i.length?"?"+i:"")}request(t={}){return Object.assign(t,{xd:this.xd,xs:this.xs},this.opts),new z(this.uri(),t)}doWrite(t,e){let s=this.request({method:"POST",data:t});s.on("success",e),s.on("error",(t,e)=>{this.onError("xhr post error",t,e)})}doPoll(){let t=this.request();t.on("data",this.onData.bind(this)),t.on("error",(t,e)=>{this.onError("xhr poll error",t,e)}),this.pollXhr=t}}},G=/^(?:(?![^:@\/?#]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@\/?#]*)(?::([^:@\/?#]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,Z=["source","protocol","authority","userInfo","user","password","host","port","relative","path","directory","file","query","anchor"];function tt(t){let e=t,s=t.indexOf("["),i=t.indexOf("]");-1!=s&&-1!=i&&(t=t.substring(0,s)+t.substring(s,i).replace(/:/g,";")+t.substring(i,t.length));let r=G.exec(t||""),n={},o=14;for(;o--;)n[Z[o]]=r[o]||"";return -1!=s&&-1!=i&&(n.source=e,n.host=n.host.substring(1,n.host.length-1).replace(/;/g,":"),n.authority=n.authority.replace("[","").replace("]","").replace(/;/g,":"),n.ipv6uri=!0),n.pathNames=function(t,e){let s=e.replace(/\/{2,9}/g,"/").split("/");return("/"==e.slice(0,1)||0===e.length)&&s.splice(0,1),"/"==e.slice(-1)&&s.splice(s.length-1,1),s}(0,n.path),n.queryKey=function(t,e){let s={};return e.replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(t,e,i){e&&(s[e]=i)}),s}(0,n.query),n}class te extends A{constructor(t,e={}){super(),this.writeBuffer=[],t&&"object"==typeof t&&(e=t,t=null),t?(t=tt(t),e.hostname=t.host,e.secure="https"===t.protocol||"wss"===t.protocol,e.port=t.port,t.query&&(e.query=t.query)):e.host&&(e.hostname=tt(e.host).host),B(this,e),this.secure=null!=e.secure?e.secure:"undefined"!=typeof location&&"https:"===location.protocol,e.hostname&&!e.port&&(e.port=this.secure?"443":"80"),this.hostname=e.hostname||("undefined"!=typeof location?location.hostname:"localhost"),this.port=e.port||("undefined"!=typeof location&&location.port?location.port:this.secure?"443":"80"),this.transports=e.transports||["polling","websocket"],this.writeBuffer=[],this.prevBufferLen=0,this.opts=Object.assign({path:"/engine.io",agent:!1,withCredentials:!1,upgrade:!0,timestampParam:"t",rememberUpgrade:!1,addTrailingSlash:!0,rejectUnauthorized:!0,perMessageDeflate:{threshold:1024},transportOptions:{},closeOnBeforeunload:!0},e),this.opts.path=this.opts.path.replace(/\/$/,"")+(this.opts.addTrailingSlash?"/":""),"string"==typeof this.opts.query&&(this.opts.query=function(t){let e={},s=t.split("&");for(let i=0,r=s.length;i<r;i++){let n=s[i].split("=");e[decodeURIComponent(n[0])]=decodeURIComponent(n[1])}return e}(this.opts.query)),this.id=null,this.upgrades=null,this.pingInterval=null,this.pingTimeout=null,this.pingTimeoutTimer=null,"function"==typeof addEventListener&&(this.opts.closeOnBeforeunload&&(this.beforeunloadEventListener=()=>{this.transport&&(this.transport.removeAllListeners(),this.transport.close())},addEventListener("beforeunload",this.beforeunloadEventListener,!1)),"localhost"!==this.hostname&&(this.offlineEventListener=()=>{this.onClose("transport close",{description:"network connection lost"})},addEventListener("offline",this.offlineEventListener,!1))),this.open()}createTransport(t){let e=Object.assign({},this.opts.query);e.EIO=4,e.transport=t,this.id&&(e.sid=this.id);let s=Object.assign({},this.opts.transportOptions[t],this.opts,{query:e,socket:this,hostname:this.hostname,secure:this.secure,port:this.port});return new X[t](s)}open(){let t;if(this.opts.rememberUpgrade&&te.priorWebsocketSuccess&&-1!==this.transports.indexOf("websocket"))t="websocket";else if(0===this.transports.length){this.setTimeoutFn(()=>{this.emitReserved("error","No transports available")},0);return}else t=this.transports[0];this.readyState="opening";try{t=this.createTransport(t)}catch(e){this.transports.shift(),this.open();return}t.open(),this.setTransport(t)}setTransport(t){this.transport&&this.transport.removeAllListeners(),this.transport=t,t.on("drain",this.onDrain.bind(this)).on("packet",this.onPacket.bind(this)).on("error",this.onError.bind(this)).on("close",t=>this.onClose("transport close",t))}probe(t){let e=this.createTransport(t),s=!1;te.priorWebsocketSuccess=!1;let i=()=>{s||(e.send([{type:"ping",data:"probe"}]),e.once("packet",t=>{if(!s){if("pong"===t.type&&"probe"===t.data)this.upgrading=!0,this.emitReserved("upgrading",e),e&&(te.priorWebsocketSuccess="websocket"===e.name,this.transport.pause(()=>{s||"closed"===this.readyState||(c(),this.setTransport(e),e.send([{type:"upgrade"}]),this.emitReserved("upgrade",e),e=null,this.upgrading=!1,this.flush())}));else{let i=Error("probe error");i.transport=e.name,this.emitReserved("upgradeError",i)}}}))};function r(){s||(s=!0,c(),e.close(),e=null)}let n=t=>{let s=Error("probe error: "+t);s.transport=e.name,r(),this.emitReserved("upgradeError",s)};function o(){n("transport closed")}function h(){n("socket closed")}function a(t){e&&t.name!==e.name&&r()}let c=()=>{e.removeListener("open",i),e.removeListener("error",n),e.removeListener("close",o),this.off("close",h),this.off("upgrading",a)};e.once("open",i),e.once("error",n),e.once("close",o),this.once("close",h),this.once("upgrading",a),e.open()}onOpen(){if(this.readyState="open",te.priorWebsocketSuccess="websocket"===this.transport.name,this.emitReserved("open"),this.flush(),"open"===this.readyState&&this.opts.upgrade){let t=0,e=this.upgrades.length;for(;t<e;t++)this.probe(this.upgrades[t])}}onPacket(t){if("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)switch(this.emitReserved("packet",t),this.emitReserved("heartbeat"),t.type){case"open":this.onHandshake(JSON.parse(t.data));break;case"ping":this.resetPingTimeout(),this.sendPacket("pong"),this.emitReserved("ping"),this.emitReserved("pong");break;case"error":let e=Error("server error");e.code=t.data,this.onError(e);break;case"message":this.emitReserved("data",t.data),this.emitReserved("message",t.data)}}onHandshake(t){this.emitReserved("handshake",t),this.id=t.sid,this.transport.query.sid=t.sid,this.upgrades=this.filterUpgrades(t.upgrades),this.pingInterval=t.pingInterval,this.pingTimeout=t.pingTimeout,this.maxPayload=t.maxPayload,this.onOpen(),"closed"!==this.readyState&&this.resetPingTimeout()}resetPingTimeout(){this.clearTimeoutFn(this.pingTimeoutTimer),this.pingTimeoutTimer=this.setTimeoutFn(()=>{this.onClose("ping timeout")},this.pingInterval+this.pingTimeout),this.opts.autoUnref&&this.pingTimeoutTimer.unref()}onDrain(){this.writeBuffer.splice(0,this.prevBufferLen),this.prevBufferLen=0,0===this.writeBuffer.length?this.emitReserved("drain"):this.flush()}flush(){if("closed"!==this.readyState&&this.transport.writable&&!this.upgrading&&this.writeBuffer.length){let t=this.getWritablePackets();this.transport.send(t),this.prevBufferLen=t.length,this.emitReserved("flush")}}getWritablePackets(){let t=this.maxPayload&&"polling"===this.transport.name&&this.writeBuffer.length>1;if(!t)return this.writeBuffer;let e=1;for(let s=0;s<this.writeBuffer.length;s++){let i=this.writeBuffer[s].data;if(i&&(e+="string"==typeof i?function(t){let e=0,s=0;for(let i=0,r=t.length;i<r;i++)(e=t.charCodeAt(i))<128?s+=1:e<2048?s+=2:e<55296||e>=57344?s+=3:(i++,s+=4);return s}(i):Math.ceil(1.33*(i.byteLength||i.size))),s>0&&e>this.maxPayload)return this.writeBuffer.slice(0,s);e+=2}return this.writeBuffer}write(t,e,s){return this.sendPacket("message",t,e,s),this}send(t,e,s){return this.sendPacket("message",t,e,s),this}sendPacket(t,e,s,i){if("function"==typeof e&&(i=e,e=void 0),"function"==typeof s&&(i=s,s=null),"closing"===this.readyState||"closed"===this.readyState)return;(s=s||{}).compress=!1!==s.compress;let r={type:t,data:e,options:s};this.emitReserved("packetCreate",r),this.writeBuffer.push(r),i&&this.once("flush",i),this.flush()}close(){let t=()=>{this.onClose("forced close"),this.transport.close()},e=()=>{this.off("upgrade",e),this.off("upgradeError",e),t()},s=()=>{this.once("upgrade",e),this.once("upgradeError",e)};return("opening"===this.readyState||"open"===this.readyState)&&(this.readyState="closing",this.writeBuffer.length?this.once("drain",()=>{this.upgrading?s():t()}):this.upgrading?s():t()),this}onError(t){te.priorWebsocketSuccess=!1,this.emitReserved("error",t),this.onClose("transport error",t)}onClose(t,e){("opening"===this.readyState||"open"===this.readyState||"closing"===this.readyState)&&(this.clearTimeoutFn(this.pingTimeoutTimer),this.transport.removeAllListeners("close"),this.transport.close(),this.transport.removeAllListeners(),"function"==typeof removeEventListener&&(removeEventListener("beforeunload",this.beforeunloadEventListener,!1),removeEventListener("offline",this.offlineEventListener,!1)),this.readyState="closed",this.id=null,this.emitReserved("close",t,e),this.writeBuffer=[],this.prevBufferLen=0)}filterUpgrades(t){let e=[],s=0,i=t.length;for(;s<i;s++)~this.transports.indexOf(t[s])&&e.push(t[s]);return e}}te.protocol=4,te.protocol;let ts="function"==typeof ArrayBuffer,ti=t=>"function"==typeof ArrayBuffer.isView?ArrayBuffer.isView(t):t.buffer instanceof ArrayBuffer,tr=Object.prototype.toString,tn="function"==typeof Blob||"undefined"!=typeof Blob&&"[object BlobConstructor]"===tr.call(Blob),to="function"==typeof File||"undefined"!=typeof File&&"[object FileConstructor]"===tr.call(File);function th(t){return ts&&(t instanceof ArrayBuffer||ti(t))||tn&&t instanceof Blob||to&&t instanceof File}let ta=["connect","connect_error","disconnect","disconnecting","newListener","removeListener"],tc=5;(i=r||(r={}))[i.CONNECT=0]="CONNECT",i[i.DISCONNECT=1]="DISCONNECT",i[i.EVENT=2]="EVENT",i[i.ACK=3]="ACK",i[i.CONNECT_ERROR=4]="CONNECT_ERROR",i[i.BINARY_EVENT=5]="BINARY_EVENT",i[i.BINARY_ACK=6]="BINARY_ACK";class tl{constructor(t){this.replacer=t}encode(t){return(t.type===r.EVENT||t.type===r.ACK)&&function t(e,s){if(!e||"object"!=typeof e)return!1;if(Array.isArray(e)){for(let i=0,r=e.length;i<r;i++)if(t(e[i]))return!0;return!1}if(th(e))return!0;if(e.toJSON&&"function"==typeof e.toJSON&&1==arguments.length)return t(e.toJSON(),!0);for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n)&&t(e[n]))return!0;return!1}(t)?this.encodeAsBinary({type:t.type===r.EVENT?r.BINARY_EVENT:r.BINARY_ACK,nsp:t.nsp,data:t.data,id:t.id}):[this.encodeAsString(t)]}encodeAsString(t){let e=""+t.type;return(t.type===r.BINARY_EVENT||t.type===r.BINARY_ACK)&&(e+=t.attachments+"-"),t.nsp&&"/"!==t.nsp&&(e+=t.nsp+","),null!=t.id&&(e+=t.id),null!=t.data&&(e+=JSON.stringify(t.data,this.replacer)),e}encodeAsBinary(t){let e=function(t){let e=[],s=t.data,i=t;return i.data=function t(e,s){if(!e)return e;if(th(e)){let i={_placeholder:!0,num:s.length};return s.push(e),i}if(Array.isArray(e)){let r=Array(e.length);for(let n=0;n<e.length;n++)r[n]=t(e[n],s);return r}if("object"==typeof e&&!(e instanceof Date)){let o={};for(let h in e)Object.prototype.hasOwnProperty.call(e,h)&&(o[h]=t(e[h],s));return o}return e}(s,e),i.attachments=e.length,{packet:i,buffers:e}}(t),s=this.encodeAsString(e.packet),i=e.buffers;return i.unshift(s),i}}function tp(t){return"[object Object]"===Object.prototype.toString.call(t)}class tu extends A{constructor(t){super(),this.reviver=t}add(t){let e;if("string"==typeof t){if(this.reconstructor)throw Error("got plaintext data when reconstructing a packet");e=this.decodeString(t);let s=e.type===r.BINARY_EVENT;s||e.type===r.BINARY_ACK?(e.type=s?r.EVENT:r.ACK,this.reconstructor=new td(e),0===e.attachments&&super.emitReserved("decoded",e)):super.emitReserved("decoded",e)}else if(th(t)||t.base64){if(this.reconstructor)(e=this.reconstructor.takeBinaryData(t))&&(this.reconstructor=null,super.emitReserved("decoded",e));else throw Error("got binary data when not reconstructing a packet")}else throw Error("Unknown type: "+t)}decodeString(t){let e=0,s={type:Number(t.charAt(0))};if(void 0===r[s.type])throw Error("unknown packet type "+s.type);if(s.type===r.BINARY_EVENT||s.type===r.BINARY_ACK){let i=e+1;for(;"-"!==t.charAt(++e)&&e!=t.length;);let n=t.substring(i,e);if(n!=Number(n)||"-"!==t.charAt(e))throw Error("Illegal attachments");s.attachments=Number(n)}if("/"===t.charAt(e+1)){let o=e+1;for(;++e;){let h=t.charAt(e);if(","===h||e===t.length)break}s.nsp=t.substring(o,e)}else s.nsp="/";let a=t.charAt(e+1);if(""!==a&&Number(a)==a){let c=e+1;for(;++e;){let l=t.charAt(e);if(null==l||Number(l)!=l){--e;break}if(e===t.length)break}s.id=Number(t.substring(c,e+1))}if(t.charAt(++e)){let p=this.tryParse(t.substr(e));if(tu.isPayloadValid(s.type,p))s.data=p;else throw Error("invalid payload")}return s}tryParse(t){try{return JSON.parse(t,this.reviver)}catch(e){return!1}}static isPayloadValid(t,e){switch(t){case r.CONNECT:return tp(e);case r.DISCONNECT:return void 0===e;case r.CONNECT_ERROR:return"string"==typeof e||tp(e);case r.EVENT:case r.BINARY_EVENT:return Array.isArray(e)&&("number"==typeof e[0]||"string"==typeof e[0]&&-1===ta.indexOf(e[0]));case r.ACK:case r.BINARY_ACK:return Array.isArray(e)}}destroy(){this.reconstructor&&(this.reconstructor.finishedReconstruction(),this.reconstructor=null)}}class td{constructor(t){this.packet=t,this.buffers=[],this.reconPack=t}takeBinaryData(t){if(this.buffers.push(t),this.buffers.length===this.reconPack.attachments){var e,s;let i=(e=this.reconPack,s=this.buffers,e.data=function t(e,s){if(!e)return e;if(e&&!0===e._placeholder){let i="number"==typeof e.num&&e.num>=0&&e.num<s.length;if(i)return s[e.num];throw Error("illegal attachments")}if(Array.isArray(e))for(let r=0;r<e.length;r++)e[r]=t(e[r],s);else if("object"==typeof e)for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&(e[n]=t(e[n],s));return e}(e.data,s),delete e.attachments,e);return this.finishedReconstruction(),i}return null}finishedReconstruction(){this.reconPack=null,this.buffers=[]}}function tf(t,e,s){return t.on(e,s),function(){t.off(e,s)}}let ty=Object.freeze({connect:1,connect_error:1,disconnect:1,disconnecting:1,newListener:1,removeListener:1});class tg extends A{constructor(t,e,s){super(),this.connected=!1,this.recovered=!1,this.receiveBuffer=[],this.sendBuffer=[],this._queue=[],this._queueSeq=0,this.ids=0,this.acks={},this.flags={},this.io=t,this.nsp=e,s&&s.auth&&(this.auth=s.auth),this._opts=Object.assign({},s),this.io._autoConnect&&this.open()}get disconnected(){return!this.connected}subEvents(){if(this.subs)return;let t=this.io;this.subs=[tf(t,"open",this.onopen.bind(this)),tf(t,"packet",this.onpacket.bind(this)),tf(t,"error",this.onerror.bind(this)),tf(t,"close",this.onclose.bind(this))]}get active(){return!!this.subs}connect(){return this.connected||(this.subEvents(),this.io._reconnecting||this.io.open(),"open"===this.io._readyState&&this.onopen()),this}open(){return this.connect()}send(...t){return t.unshift("message"),this.emit.apply(this,t),this}emit(t,...e){if(ty.hasOwnProperty(t))throw Error('"'+t.toString()+'" is a reserved event name');if(e.unshift(t),this._opts.retries&&!this.flags.fromQueue&&!this.flags.volatile)return this._addToQueue(e),this;let s={type:r.EVENT,data:e};if(s.options={},s.options.compress=!1!==this.flags.compress,"function"==typeof e[e.length-1]){let i=this.ids++,n=e.pop();this._registerAckCallback(i,n),s.id=i}let o=this.io.engine&&this.io.engine.transport&&this.io.engine.transport.writable,h=this.flags.volatile&&(!o||!this.connected);return h||(this.connected?(this.notifyOutgoingListeners(s),this.packet(s)):this.sendBuffer.push(s)),this.flags={},this}_registerAckCallback(t,e){var s;let i=null!==(s=this.flags.timeout)&&void 0!==s?s:this._opts.ackTimeout;if(void 0===i){this.acks[t]=e;return}let r=this.io.setTimeoutFn(()=>{delete this.acks[t];for(let s=0;s<this.sendBuffer.length;s++)this.sendBuffer[s].id===t&&this.sendBuffer.splice(s,1);e.call(this,Error("operation has timed out"))},i);this.acks[t]=(...t)=>{this.io.clearTimeoutFn(r),e.apply(this,[null,...t])}}emitWithAck(t,...e){let s=void 0!==this.flags.timeout||void 0!==this._opts.ackTimeout;return new Promise((i,r)=>{e.push((t,e)=>s?t?r(t):i(e):i(t)),this.emit(t,...e)})}_addToQueue(t){let e;"function"==typeof t[t.length-1]&&(e=t.pop());let s={id:this._queueSeq++,tryCount:0,pending:!1,args:t,flags:Object.assign({fromQueue:!0},this.flags)};t.push((t,...i)=>{if(s===this._queue[0])return null!==t?s.tryCount>this._opts.retries&&(this._queue.shift(),e&&e(t)):(this._queue.shift(),e&&e(null,...i)),s.pending=!1,this._drainQueue()}),this._queue.push(s),this._drainQueue()}_drainQueue(t=!1){if(!this.connected||0===this._queue.length)return;let e=this._queue[0];(!e.pending||t)&&(e.pending=!0,e.tryCount++,this.flags=e.flags,this.emit.apply(this,e.args))}packet(t){t.nsp=this.nsp,this.io._packet(t)}onopen(){"function"==typeof this.auth?this.auth(t=>{this._sendConnectPacket(t)}):this._sendConnectPacket(this.auth)}_sendConnectPacket(t){this.packet({type:r.CONNECT,data:this._pid?Object.assign({pid:this._pid,offset:this._lastOffset},t):t})}onerror(t){this.connected||this.emitReserved("connect_error",t)}onclose(t,e){this.connected=!1,delete this.id,this.emitReserved("disconnect",t,e)}onpacket(t){let e=t.nsp===this.nsp;if(e)switch(t.type){case r.CONNECT:t.data&&t.data.sid?this.onconnect(t.data.sid,t.data.pid):this.emitReserved("connect_error",Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)"));break;case r.EVENT:case r.BINARY_EVENT:this.onevent(t);break;case r.ACK:case r.BINARY_ACK:this.onack(t);break;case r.DISCONNECT:this.ondisconnect();break;case r.CONNECT_ERROR:this.destroy();let s=Error(t.data.message);s.data=t.data.data,this.emitReserved("connect_error",s)}}onevent(t){let e=t.data||[];null!=t.id&&e.push(this.ack(t.id)),this.connected?this.emitEvent(e):this.receiveBuffer.push(Object.freeze(e))}emitEvent(t){if(this._anyListeners&&this._anyListeners.length){let e=this._anyListeners.slice();for(let s of e)s.apply(this,t)}super.emit.apply(this,t),this._pid&&t.length&&"string"==typeof t[t.length-1]&&(this._lastOffset=t[t.length-1])}ack(t){let e=this,s=!1;return function(...i){s||(s=!0,e.packet({type:r.ACK,id:t,data:i}))}}onack(t){let e=this.acks[t.id];"function"==typeof e&&(e.apply(this,t.data),delete this.acks[t.id])}onconnect(t,e){this.id=t,this.recovered=e&&this._pid===e,this._pid=e,this.connected=!0,this.emitBuffered(),this.emitReserved("connect"),this._drainQueue(!0)}emitBuffered(){this.receiveBuffer.forEach(t=>this.emitEvent(t)),this.receiveBuffer=[],this.sendBuffer.forEach(t=>{this.notifyOutgoingListeners(t),this.packet(t)}),this.sendBuffer=[]}ondisconnect(){this.destroy(),this.onclose("io server disconnect")}destroy(){this.subs&&(this.subs.forEach(t=>t()),this.subs=void 0),this.io._destroy(this)}disconnect(){return this.connected&&this.packet({type:r.DISCONNECT}),this.destroy(),this.connected&&this.onclose("io client disconnect"),this}close(){return this.disconnect()}compress(t){return this.flags.compress=t,this}get volatile(){return this.flags.volatile=!0,this}timeout(t){return this.flags.timeout=t,this}onAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.push(t),this}prependAny(t){return this._anyListeners=this._anyListeners||[],this._anyListeners.unshift(t),this}offAny(t){if(!this._anyListeners)return this;if(t){let e=this._anyListeners;for(let s=0;s<e.length;s++)if(t===e[s]){e.splice(s,1);break}}else this._anyListeners=[];return this}listenersAny(){return this._anyListeners||[]}onAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.push(t),this}prependAnyOutgoing(t){return this._anyOutgoingListeners=this._anyOutgoingListeners||[],this._anyOutgoingListeners.unshift(t),this}offAnyOutgoing(t){if(!this._anyOutgoingListeners)return this;if(t){let e=this._anyOutgoingListeners;for(let s=0;s<e.length;s++)if(t===e[s]){e.splice(s,1);break}}else this._anyOutgoingListeners=[];return this}listenersAnyOutgoing(){return this._anyOutgoingListeners||[]}notifyOutgoingListeners(t){if(this._anyOutgoingListeners&&this._anyOutgoingListeners.length){let e=this._anyOutgoingListeners.slice();for(let s of e)s.apply(this,t.data)}}}function tm(t){t=t||{},this.ms=t.min||100,this.max=t.max||1e4,this.factor=t.factor||2,this.jitter=t.jitter>0&&t.jitter<=1?t.jitter:0,this.attempts=0}tm.prototype.duration=function(){var t=this.ms*Math.pow(this.factor,this.attempts++);if(this.jitter){var e=Math.random(),s=Math.floor(e*this.jitter*t);t=(1&Math.floor(10*e))==0?t-s:t+s}return 0|Math.min(t,this.max)},tm.prototype.reset=function(){this.attempts=0},tm.prototype.setMin=function(t){this.ms=t},tm.prototype.setMax=function(t){this.max=t},tm.prototype.setJitter=function(t){this.jitter=t};class tb extends A{constructor(t,e){var s;super(),this.nsps={},this.subs=[],t&&"object"==typeof t&&(e=t,t=void 0),(e=e||{}).path=e.path||"/socket.io",this.opts=e,B(this,e),this.reconnection(!1!==e.reconnection),this.reconnectionAttempts(e.reconnectionAttempts||1/0),this.reconnectionDelay(e.reconnectionDelay||1e3),this.reconnectionDelayMax(e.reconnectionDelayMax||5e3),this.randomizationFactor(null!==(s=e.randomizationFactor)&&void 0!==s?s:.5),this.backoff=new tm({min:this.reconnectionDelay(),max:this.reconnectionDelayMax(),jitter:this.randomizationFactor()}),this.timeout(null==e.timeout?2e4:e.timeout),this._readyState="closed",this.uri=t;let i=e.parser||n;this.encoder=new i.Encoder,this.decoder=new i.Decoder,this._autoConnect=!1!==e.autoConnect,this._autoConnect&&this.open()}reconnection(t){return arguments.length?(this._reconnection=!!t,this):this._reconnection}reconnectionAttempts(t){return void 0===t?this._reconnectionAttempts:(this._reconnectionAttempts=t,this)}reconnectionDelay(t){var e;return void 0===t?this._reconnectionDelay:(this._reconnectionDelay=t,null===(e=this.backoff)||void 0===e||e.setMin(t),this)}randomizationFactor(t){var e;return void 0===t?this._randomizationFactor:(this._randomizationFactor=t,null===(e=this.backoff)||void 0===e||e.setJitter(t),this)}reconnectionDelayMax(t){var e;return void 0===t?this._reconnectionDelayMax:(this._reconnectionDelayMax=t,null===(e=this.backoff)||void 0===e||e.setMax(t),this)}timeout(t){return arguments.length?(this._timeout=t,this):this._timeout}maybeReconnectOnOpen(){!this._reconnecting&&this._reconnection&&0===this.backoff.attempts&&this.reconnect()}open(t){if(~this._readyState.indexOf("open"))return this;this.engine=new te(this.uri,this.opts);let e=this.engine,s=this;this._readyState="opening",this.skipReconnect=!1;let i=tf(e,"open",function(){s.onopen(),t&&t()}),r=tf(e,"error",e=>{s.cleanup(),s._readyState="closed",this.emitReserved("error",e),t?t(e):s.maybeReconnectOnOpen()});if(!1!==this._timeout){let n=this._timeout;0===n&&i();let o=this.setTimeoutFn(()=>{i(),e.close(),e.emit("error",Error("timeout"))},n);this.opts.autoUnref&&o.unref(),this.subs.push(function(){clearTimeout(o)})}return this.subs.push(i),this.subs.push(r),this}connect(t){return this.open(t)}onopen(){this.cleanup(),this._readyState="open",this.emitReserved("open");let t=this.engine;this.subs.push(tf(t,"ping",this.onping.bind(this)),tf(t,"data",this.ondata.bind(this)),tf(t,"error",this.onerror.bind(this)),tf(t,"close",this.onclose.bind(this)),tf(this.decoder,"decoded",this.ondecoded.bind(this)))}onping(){this.emitReserved("ping")}ondata(t){try{this.decoder.add(t)}catch(e){this.onclose("parse error",e)}}ondecoded(t){$(()=>{this.emitReserved("packet",t)},this.setTimeoutFn)}onerror(t){this.emitReserved("error",t)}socket(t,e){let s=this.nsps[t];return s?this._autoConnect&&!s.active&&s.connect():(s=new tg(this,t,e),this.nsps[t]=s),s}_destroy(t){let e=Object.keys(this.nsps);for(let s of e){let i=this.nsps[s];if(i.active)return}this._close()}_packet(t){let e=this.encoder.encode(t);for(let s=0;s<e.length;s++)this.engine.write(e[s],t.options)}cleanup(){this.subs.forEach(t=>t()),this.subs.length=0,this.decoder.destroy()}_close(){this.skipReconnect=!0,this._reconnecting=!1,this.onclose("forced close"),this.engine&&this.engine.close()}disconnect(){return this._close()}onclose(t,e){this.cleanup(),this.backoff.reset(),this._readyState="closed",this.emitReserved("close",t,e),this._reconnection&&!this.skipReconnect&&this.reconnect()}reconnect(){if(this._reconnecting||this.skipReconnect)return this;let t=this;if(this.backoff.attempts>=this._reconnectionAttempts)this.backoff.reset(),this.emitReserved("reconnect_failed"),this._reconnecting=!1;else{let e=this.backoff.duration();this._reconnecting=!0;let s=this.setTimeoutFn(()=>{!t.skipReconnect&&(this.emitReserved("reconnect_attempt",t.backoff.attempts),t.skipReconnect||t.open(e=>{e?(t._reconnecting=!1,t.reconnect(),this.emitReserved("reconnect_error",e)):t.onreconnect()}))},e);this.opts.autoUnref&&s.unref(),this.subs.push(function(){clearTimeout(s)})}}onreconnect(){let t=this.backoff.attempts;this._reconnecting=!1,this.backoff.reset(),this.emitReserved("reconnect",t)}}let tv={};function tk(t,e){let s;"object"==typeof t&&(e=t,t=void 0),e=e||{};let i=function(t,e="",s){let i=t;s=s||"undefined"!=typeof location&&location,null==t&&(t=s.protocol+"//"+s.host),"string"==typeof t&&("/"===t.charAt(0)&&(t="/"===t.charAt(1)?s.protocol+t:s.host+t),/^(https?|wss?):\/\//.test(t)||(t=void 0!==s?s.protocol+"//"+t:"https://"+t),i=tt(t)),!i.port&&(/^(http|ws)$/.test(i.protocol)?i.port="80":/^(http|ws)s$/.test(i.protocol)&&(i.port="443")),i.path=i.path||"/";let r=-1!==i.host.indexOf(":"),n=r?"["+i.host+"]":i.host;return i.id=i.protocol+"://"+n+":"+i.port+e,i.href=i.protocol+"://"+n+(s&&s.port===i.port?"":":"+i.port),i}(t,e.path||"/socket.io"),r=i.source,n=i.id,o=i.path,h=tv[n]&&o in tv[n].nsps,a=e.forceNew||e["force new connection"]||!1===e.multiplex||h;return a?s=new tb(r,e):(tv[n]||(tv[n]=new tb(r,e)),s=tv[n]),i.query&&!e.query&&(e.query=i.queryKey),s.socket(i.path,e)}Object.assign(tk,{Manager:tb,Socket:tg,io:tk,connect:tk})}}]);