(self.webpackChunkjugpadova_gatsby_site=self.webpackChunkjugpadova_gatsby_site||[]).push([[630],{8802:function(t,n,e){var r;e(5743),t.exports=(r=r||function(t,n){var r;if("undefined"!=typeof window&&window.crypto&&(r=window.crypto),"undefined"!=typeof self&&self.crypto&&(r=self.crypto),"undefined"!=typeof globalThis&&globalThis.crypto&&(r=globalThis.crypto),!r&&"undefined"!=typeof window&&window.msCrypto&&(r=window.msCrypto),!r&&void 0!==e.g&&e.g.crypto&&(r=e.g.crypto),!r)try{r=e(2480)}catch(y){}var o=function(){if(r){if("function"==typeof r.getRandomValues)try{return r.getRandomValues(new Uint32Array(1))[0]}catch(y){}if("function"==typeof r.randomBytes)try{return r.randomBytes(4).readInt32LE()}catch(y){}}throw new Error("Native crypto module could not be used to get secure random number.")},i=Object.create||function(){function t(){}return function(n){var e;return t.prototype=n,e=new t,t.prototype=null,e}}(),a={},u=a.lib={},c=u.Base={extend:function(t){var n=i(this);return t&&n.mixIn(t),n.hasOwnProperty("init")&&this.init!==n.init||(n.init=function(){n.$super.init.apply(this,arguments)}),n.init.prototype=n,n.$super=this,n},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){for(var n in t)t.hasOwnProperty(n)&&(this[n]=t[n]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}},s=u.WordArray=c.extend({init:function(t,e){t=this.words=t||[],this.sigBytes=e!=n?e:4*t.length},toString:function(t){return(t||l).stringify(this)},concat:function(t){var n=this.words,e=t.words,r=this.sigBytes,o=t.sigBytes;if(this.clamp(),r%4)for(var i=0;i<o;i++){var a=e[i>>>2]>>>24-i%4*8&255;n[r+i>>>2]|=a<<24-(r+i)%4*8}else for(var u=0;u<o;u+=4)n[r+u>>>2]=e[u>>>2];return this.sigBytes+=o,this},clamp:function(){var n=this.words,e=this.sigBytes;n[e>>>2]&=4294967295<<32-e%4*8,n.length=t.ceil(e/4)},clone:function(){var t=c.clone.call(this);return t.words=this.words.slice(0),t},random:function(t){for(var n=[],e=0;e<t;e+=4)n.push(o());return new s.init(n,t)}}),f=a.enc={},l=f.Hex={stringify:function(t){for(var n=t.words,e=t.sigBytes,r=[],o=0;o<e;o++){var i=n[o>>>2]>>>24-o%4*8&255;r.push((i>>>4).toString(16)),r.push((15&i).toString(16))}return r.join("")},parse:function(t){for(var n=t.length,e=[],r=0;r<n;r+=2)e[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new s.init(e,n/2)}},p=f.Latin1={stringify:function(t){for(var n=t.words,e=t.sigBytes,r=[],o=0;o<e;o++){var i=n[o>>>2]>>>24-o%4*8&255;r.push(String.fromCharCode(i))}return r.join("")},parse:function(t){for(var n=t.length,e=[],r=0;r<n;r++)e[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new s.init(e,n)}},v=f.Utf8={stringify:function(t){try{return decodeURIComponent(escape(p.stringify(t)))}catch(n){throw new Error("Malformed UTF-8 data")}},parse:function(t){return p.parse(unescape(encodeURIComponent(t)))}},h=u.BufferedBlockAlgorithm=c.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=v.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(n){var e,r=this._data,o=r.words,i=r.sigBytes,a=this.blockSize,u=i/(4*a),c=(u=n?t.ceil(u):t.max((0|u)-this._minBufferSize,0))*a,f=t.min(4*c,i);if(c){for(var l=0;l<c;l+=a)this._doProcessBlock(o,l);e=o.splice(0,c),r.sigBytes-=f}return new s.init(e,f)},clone:function(){var t=c.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),g=(u.Hasher=h.extend({cfg:c.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){h.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(n,e){return new t.init(e).finalize(n)}},_createHmacHelper:function(t){return function(n,e){return new g.HMAC.init(t,e).finalize(n)}}}),a.algo={});return a}(Math),r)},7684:function(t,n,e){var r;t.exports=(r=e(8802),function(t){var n=r,e=n.lib,o=e.WordArray,i=e.Hasher,a=n.algo,u=[];!function(){for(var n=0;n<64;n++)u[n]=4294967296*t.abs(t.sin(n+1))|0}();var c=a.MD5=i.extend({_doReset:function(){this._hash=new o.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,n){for(var e=0;e<16;e++){var r=n+e,o=t[r];t[r]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8)}var i=this._hash.words,a=t[n+0],c=t[n+1],v=t[n+2],h=t[n+3],g=t[n+4],y=t[n+5],m=t[n+6],d=t[n+7],b=t[n+8],w=t[n+9],x=t[n+10],_=t[n+11],S=t[n+12],O=t[n+13],E=t[n+14],j=t[n+15],P=i[0],B=i[1],C=i[2],k=i[3];P=s(P,B,C,k,a,7,u[0]),k=s(k,P,B,C,c,12,u[1]),C=s(C,k,P,B,v,17,u[2]),B=s(B,C,k,P,h,22,u[3]),P=s(P,B,C,k,g,7,u[4]),k=s(k,P,B,C,y,12,u[5]),C=s(C,k,P,B,m,17,u[6]),B=s(B,C,k,P,d,22,u[7]),P=s(P,B,C,k,b,7,u[8]),k=s(k,P,B,C,w,12,u[9]),C=s(C,k,P,B,x,17,u[10]),B=s(B,C,k,P,_,22,u[11]),P=s(P,B,C,k,S,7,u[12]),k=s(k,P,B,C,O,12,u[13]),C=s(C,k,P,B,E,17,u[14]),P=f(P,B=s(B,C,k,P,j,22,u[15]),C,k,c,5,u[16]),k=f(k,P,B,C,m,9,u[17]),C=f(C,k,P,B,_,14,u[18]),B=f(B,C,k,P,a,20,u[19]),P=f(P,B,C,k,y,5,u[20]),k=f(k,P,B,C,x,9,u[21]),C=f(C,k,P,B,j,14,u[22]),B=f(B,C,k,P,g,20,u[23]),P=f(P,B,C,k,w,5,u[24]),k=f(k,P,B,C,E,9,u[25]),C=f(C,k,P,B,h,14,u[26]),B=f(B,C,k,P,b,20,u[27]),P=f(P,B,C,k,O,5,u[28]),k=f(k,P,B,C,v,9,u[29]),C=f(C,k,P,B,d,14,u[30]),P=l(P,B=f(B,C,k,P,S,20,u[31]),C,k,y,4,u[32]),k=l(k,P,B,C,b,11,u[33]),C=l(C,k,P,B,_,16,u[34]),B=l(B,C,k,P,E,23,u[35]),P=l(P,B,C,k,c,4,u[36]),k=l(k,P,B,C,g,11,u[37]),C=l(C,k,P,B,d,16,u[38]),B=l(B,C,k,P,x,23,u[39]),P=l(P,B,C,k,O,4,u[40]),k=l(k,P,B,C,a,11,u[41]),C=l(C,k,P,B,h,16,u[42]),B=l(B,C,k,P,m,23,u[43]),P=l(P,B,C,k,w,4,u[44]),k=l(k,P,B,C,S,11,u[45]),C=l(C,k,P,B,j,16,u[46]),P=p(P,B=l(B,C,k,P,v,23,u[47]),C,k,a,6,u[48]),k=p(k,P,B,C,d,10,u[49]),C=p(C,k,P,B,E,15,u[50]),B=p(B,C,k,P,y,21,u[51]),P=p(P,B,C,k,S,6,u[52]),k=p(k,P,B,C,h,10,u[53]),C=p(C,k,P,B,x,15,u[54]),B=p(B,C,k,P,c,21,u[55]),P=p(P,B,C,k,b,6,u[56]),k=p(k,P,B,C,j,10,u[57]),C=p(C,k,P,B,m,15,u[58]),B=p(B,C,k,P,O,21,u[59]),P=p(P,B,C,k,g,6,u[60]),k=p(k,P,B,C,_,10,u[61]),C=p(C,k,P,B,v,15,u[62]),B=p(B,C,k,P,w,21,u[63]),i[0]=i[0]+P|0,i[1]=i[1]+B|0,i[2]=i[2]+C|0,i[3]=i[3]+k|0},_doFinalize:function(){var n=this._data,e=n.words,r=8*this._nDataBytes,o=8*n.sigBytes;e[o>>>5]|=128<<24-o%32;var i=t.floor(r/4294967296),a=r;e[15+(o+64>>>9<<4)]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),e[14+(o+64>>>9<<4)]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8),n.sigBytes=4*(e.length+1),this._process();for(var u=this._hash,c=u.words,s=0;s<4;s++){var f=c[s];c[s]=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8)}return u},clone:function(){var t=i.clone.call(this);return t._hash=this._hash.clone(),t}});function s(t,n,e,r,o,i,a){var u=t+(n&e|~n&r)+o+a;return(u<<i|u>>>32-i)+n}function f(t,n,e,r,o,i,a){var u=t+(n&r|e&~r)+o+a;return(u<<i|u>>>32-i)+n}function l(t,n,e,r,o,i,a){var u=t+(n^e^r)+o+a;return(u<<i|u>>>32-i)+n}function p(t,n,e,r,o,i,a){var u=t+(e^(n|~r))+o+a;return(u<<i|u>>>32-i)+n}n.MD5=i._createHelper(c),n.HmacMD5=i._createHmacHelper(c)}(Math),r.MD5)},9662:function(t,n,e){var r=e(7854),o=e(614),i=e(6330),a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9670:function(t,n,e){var r=e(7854),o=e(111),i=r.String,a=r.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},1318:function(t,n,e){var r=e(5656),o=e(1400),i=e(6244),a=function(t){return function(n,e,a){var u,c=r(n),s=i(c),f=o(a,s);if(t&&e!=e){for(;s>f;)if((u=c[f++])!=u)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},4326:function(t,n,e){var r=e(1702),o=r({}.toString),i=r("".slice);t.exports=function(t){return i(o(t),8,-1)}},9920:function(t,n,e){var r=e(2597),o=e(3887),i=e(1236),a=e(3070);t.exports=function(t,n,e){for(var u=o(n),c=a.f,s=i.f,f=0;f<u.length;f++){var l=u[f];r(t,l)||e&&r(e,l)||c(t,l,s(n,l))}}},8880:function(t,n,e){var r=e(9781),o=e(3070),i=e(9114);t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},9114:function(t){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},9781:function(t,n,e){var r=e(7293);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:function(t,n,e){var r=e(7854),o=e(111),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8113:function(t,n,e){var r=e(5005);t.exports=r("navigator","userAgent")||""},7392:function(t,n,e){var r,o,i=e(7854),a=e(8113),u=i.process,c=i.Deno,s=u&&u.versions||c&&c.version,f=s&&s.v8;f&&(o=(r=f.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),t.exports=o},748:function(t){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(t,n,e){var r=e(7854),o=e(1236).f,i=e(8880),a=e(1320),u=e(3505),c=e(9920),s=e(4705);t.exports=function(t,n){var e,f,l,p,v,h=t.target,g=t.global,y=t.stat;if(e=g?r:y?r[h]||u(h,{}):(r[h]||{}).prototype)for(f in n){if(p=n[f],l=t.noTargetGet?(v=o(e,f))&&v.value:e[f],!s(g?f:h+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;c(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(e,f,p,t)}}},7293:function(t){t.exports=function(t){try{return!!t()}catch(n){return!0}}},4374:function(t,n,e){var r=e(7293);t.exports=!r((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},6916:function(t,n,e){var r=e(4374),o=Function.prototype.call;t.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},6530:function(t,n,e){var r=e(9781),o=e(2597),i=Function.prototype,a=r&&Object.getOwnPropertyDescriptor,u=o(i,"name"),c=u&&"something"===function(){}.name,s=u&&(!r||r&&a(i,"name").configurable);t.exports={EXISTS:u,PROPER:c,CONFIGURABLE:s}},1702:function(t,n,e){var r=e(4374),o=Function.prototype,i=o.bind,a=o.call,u=r&&i.bind(a,a);t.exports=r?function(t){return t&&u(t)}:function(t){return t&&function(){return a.apply(t,arguments)}}},5005:function(t,n,e){var r=e(7854),o=e(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t]):r[t]&&r[t][n]}},8173:function(t,n,e){var r=e(9662);t.exports=function(t,n){var e=t[n];return null==e?void 0:r(e)}},7854:function(t,n,e){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof e.g&&e.g)||function(){return this}()||Function("return this")()},2597:function(t,n,e){var r=e(1702),o=e(7908),i=r({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,n){return i(o(t),n)}},3501:function(t){t.exports={}},4664:function(t,n,e){var r=e(9781),o=e(7293),i=e(317);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:function(t,n,e){var r=e(7854),o=e(1702),i=e(7293),a=e(4326),u=r.Object,c=o("".split);t.exports=i((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?c(t,""):u(t)}:u},2788:function(t,n,e){var r=e(1702),o=e(614),i=e(5465),a=r(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:function(t,n,e){var r,o,i,a=e(8536),u=e(7854),c=e(1702),s=e(111),f=e(8880),l=e(2597),p=e(5465),v=e(6200),h=e(3501),g="Object already initialized",y=u.TypeError,m=u.WeakMap;if(a||p.state){var d=p.state||(p.state=new m),b=c(d.get),w=c(d.has),x=c(d.set);r=function(t,n){if(w(d,t))throw new y(g);return n.facade=t,x(d,t,n),n},o=function(t){return b(d,t)||{}},i=function(t){return w(d,t)}}else{var _=v("state");h[_]=!0,r=function(t,n){if(l(t,_))throw new y(g);return n.facade=t,f(t,_,n),n},o=function(t){return l(t,_)?t[_]:{}},i=function(t){return l(t,_)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!s(n)||(e=o(n)).type!==t)throw y("Incompatible receiver, "+t+" required");return e}}}},614:function(t){t.exports=function(t){return"function"==typeof t}},4705:function(t,n,e){var r=e(7293),o=e(614),i=/#|\.prototype\./,a=function(t,n){var e=c[u(t)];return e==f||e!=s&&(o(n)?r(n):!!n)},u=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},c=a.data={},s=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:function(t,n,e){var r=e(614);t.exports=function(t){return"object"==typeof t?null!==t:r(t)}},1913:function(t){t.exports=!1},2190:function(t,n,e){var r=e(7854),o=e(5005),i=e(614),a=e(7976),u=e(3307),c=r.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var n=o("Symbol");return i(n)&&a(n.prototype,c(t))}},6244:function(t,n,e){var r=e(7466);t.exports=function(t){return r(t.length)}},133:function(t,n,e){var r=e(7392),o=e(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},8536:function(t,n,e){var r=e(7854),o=e(614),i=e(2788),a=r.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:function(t,n,e){var r=e(7854),o=e(9781),i=e(4664),a=e(3353),u=e(9670),c=e(4948),s=r.TypeError,f=Object.defineProperty,l=Object.getOwnPropertyDescriptor,p="enumerable",v="configurable",h="writable";n.f=o?a?function(t,n,e){if(u(t),n=c(n),u(e),"function"==typeof t&&"prototype"===n&&"value"in e&&h in e&&!e.writable){var r=l(t,n);r&&r.writable&&(t[n]=e.value,e={configurable:v in e?e.configurable:r.configurable,enumerable:p in e?e.enumerable:r.enumerable,writable:!1})}return f(t,n,e)}:f:function(t,n,e){if(u(t),n=c(n),u(e),i)try{return f(t,n,e)}catch(r){}if("get"in e||"set"in e)throw s("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},1236:function(t,n,e){var r=e(9781),o=e(6916),i=e(5296),a=e(9114),u=e(5656),c=e(4948),s=e(2597),f=e(4664),l=Object.getOwnPropertyDescriptor;n.f=r?l:function(t,n){if(t=u(t),n=c(n),f)try{return l(t,n)}catch(e){}if(s(t,n))return a(!o(i.f,t,n),t[n])}},8006:function(t,n,e){var r=e(6324),o=e(748).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},5181:function(t,n){n.f=Object.getOwnPropertySymbols},7976:function(t,n,e){var r=e(1702);t.exports=r({}.isPrototypeOf)},6324:function(t,n,e){var r=e(1702),o=e(2597),i=e(5656),a=e(1318).indexOf,u=e(3501),c=r([].push);t.exports=function(t,n){var e,r=i(t),s=0,f=[];for(e in r)!o(u,e)&&o(r,e)&&c(f,e);for(;n.length>s;)o(r,e=n[s++])&&(~a(f,e)||c(f,e));return f}},5296:function(t,n){"use strict";var e={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,o=r&&!e.call({1:2},1);n.f=o?function(t){var n=r(this,t);return!!n&&n.enumerable}:e},2140:function(t,n,e){var r=e(7854),o=e(6916),i=e(614),a=e(111),u=r.TypeError;t.exports=function(t,n){var e,r;if("string"===n&&i(e=t.toString)&&!a(r=o(e,t)))return r;if(i(e=t.valueOf)&&!a(r=o(e,t)))return r;if("string"!==n&&i(e=t.toString)&&!a(r=o(e,t)))return r;throw u("Can't convert object to primitive value")}},3887:function(t,n,e){var r=e(5005),o=e(1702),i=e(8006),a=e(5181),u=e(9670),c=o([].concat);t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(u(t)),e=a.f;return e?c(n,e(t)):n}},1320:function(t,n,e){var r=e(7854),o=e(614),i=e(2597),a=e(8880),u=e(3505),c=e(2788),s=e(9909),f=e(6530).CONFIGURABLE,l=s.get,p=s.enforce,v=String(String).split("String");(t.exports=function(t,n,e,c){var s,l=!!c&&!!c.unsafe,h=!!c&&!!c.enumerable,g=!!c&&!!c.noTargetGet,y=c&&void 0!==c.name?c.name:n;o(e)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(e,"name")||f&&e.name!==y)&&a(e,"name",y),(s=p(e)).source||(s.source=v.join("string"==typeof y?y:""))),t!==r?(l?!g&&t[n]&&(h=!0):delete t[n],h?t[n]=e:a(t,n,e)):h?t[n]=e:u(n,e)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||c(this)}))},4488:function(t,n,e){var r=e(7854).TypeError;t.exports=function(t){if(null==t)throw r("Can't call method on "+t);return t}},3505:function(t,n,e){var r=e(7854),o=Object.defineProperty;t.exports=function(t,n){try{o(r,t,{value:n,configurable:!0,writable:!0})}catch(e){r[t]=n}return n}},6200:function(t,n,e){var r=e(2309),o=e(9711),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:function(t,n,e){var r=e(7854),o=e(3505),i="__core-js_shared__",a=r[i]||o(i,{});t.exports=a},2309:function(t,n,e){var r=e(1913),o=e(5465);(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.22.2",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.22.2/LICENSE",source:"https://github.com/zloirock/core-js"})},1400:function(t,n,e){var r=e(9303),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},5656:function(t,n,e){var r=e(8361),o=e(4488);t.exports=function(t){return r(o(t))}},9303:function(t){var n=Math.ceil,e=Math.floor;t.exports=function(t){var r=+t;return r!=r||0===r?0:(r>0?e:n)(r)}},7466:function(t,n,e){var r=e(9303),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},7908:function(t,n,e){var r=e(7854),o=e(4488),i=r.Object;t.exports=function(t){return i(o(t))}},7593:function(t,n,e){var r=e(7854),o=e(6916),i=e(111),a=e(2190),u=e(8173),c=e(2140),s=e(5112),f=r.TypeError,l=s("toPrimitive");t.exports=function(t,n){if(!i(t)||a(t))return t;var e,r=u(t,l);if(r){if(void 0===n&&(n="default"),e=o(r,t,n),!i(e)||a(e))return e;throw f("Can't convert object to primitive value")}return void 0===n&&(n="number"),c(t,n)}},4948:function(t,n,e){var r=e(7593),o=e(2190);t.exports=function(t){var n=r(t,"string");return o(n)?n:n+""}},6330:function(t,n,e){var r=e(7854).String;t.exports=function(t){try{return r(t)}catch(n){return"Object"}}},9711:function(t,n,e){var r=e(1702),o=0,i=Math.random(),a=r(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:function(t,n,e){var r=e(133);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(t,n,e){var r=e(9781),o=e(7293);t.exports=r&&o((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},5112:function(t,n,e){var r=e(7854),o=e(2309),i=e(2597),a=e(9711),u=e(133),c=e(3307),s=o("wks"),f=r.Symbol,l=f&&f.for,p=c?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(s,t)||!u&&"string"!=typeof s[t]){var n="Symbol."+t;u&&i(f,t)?s[t]=f[t]:s[t]=c&&l?l(n):p(n)}return s[t]}},5837:function(t,n,e){e(2109)({global:!0},{globalThis:e(7854)})},5743:function(t,n,e){e(5837)},788:function(t,n,e){"use strict";var r=e(7294),o=e(1074),i=e(1597),a=o.default.div.withConfig({displayName:"category-list__Wrapper",componentId:"sc-1daogdq-0"})(["display:flex;align-items:flex-start;font-size:0.8em;& > .label{margin-right:0.5em;}"]),u=o.default.ul.withConfig({displayName:"category-list__ListWrapper",componentId:"sc-1daogdq-1"})(["list-style-type:none;margin:0px;& > li{display:inline-block;margin-bottom:0px;}"]);n.Z=function(t){var n=t.categories,e=void 0===n?[]:n;return r.createElement(a,null,e&&0!==e.length?r.createElement(r.Fragment,null,r.createElement("div",{className:"label"},"Categorie:"),r.createElement(u,null,e.map((function(t,n){return r.createElement("li",{key:t.permalink},n>0?r.createElement(r.Fragment,null,", "):null,r.createElement(i.Link,{to:"/articles/category/"+t.permalink},t.name))})))):r.createElement("span",null,"Nessuna categoria"))}},4116:function(t,n,e){"use strict";var r=e(7294),o=e(7684),i=e.n(o),a=e(1074),u=a.default.span.withConfig({displayName:"gravatar__GravatarWrapper",componentId:"sc-h5rpnc-0"})(["display:flex;align-items:center;"]),c=a.default.img.withConfig({displayName:"gravatar__GravatarImg",componentId:"sc-h5rpnc-1"})(["border-radius:0.5em;margin-right:0.5em;"]);n.Z=function(t){var n=t.fullname,e=t.email,o=void 0===e?"john.doe@example.com":e,a="https://secure.gravatar.com/avatar/"+i()(o.trim().toLowerCase())+"?s=40&d=retro";return r.createElement(u,null,r.createElement(c,{src:a,alt:n}),r.createElement("span",null,n))}},9707:function(t,n,e){"use strict";var r=e(7294),o=e(1074),i=e(1597),a=o.default.div.withConfig({displayName:"tag-list__Wrapper",componentId:"sc-6lfw6z-0"})(["display:flex;align-items:flex-start;font-size:0.8em;& > .label{margin-right:0.5em;}"]),u=o.default.ul.withConfig({displayName:"tag-list__ListWrapper",componentId:"sc-6lfw6z-1"})(["list-style-type:none;margin:0px;& > li{display:inline-block;margin-bottom:0px;}"]);n.Z=function(t){var n=t.tags,e=void 0===n?[]:n;return r.createElement(a,null,e&&0!==e.length?r.createElement(r.Fragment,null,r.createElement("div",{className:"label"},"Tag:"),r.createElement(u,null,e.map((function(t,n){return r.createElement("li",{key:t.name},n>0?r.createElement(r.Fragment,null,", "):null,r.createElement(i.Link,{to:"/articles/tag/"+t.name},t.display))})))):r.createElement("span",null,"Nessun tag"))}},2480:function(){}}]);
//# sourceMappingURL=8fa27b9437c6be97e26ae05e25da1c0ea8f9b569-9a656a892814247d7216.js.map