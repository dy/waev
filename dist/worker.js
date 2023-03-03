import{a as W,b as z,c as G,d as _,e as H,f as J}from"./chunk-7INKNU2T.js";import"./chunk-ON5OQYWL.js";var te=function(){function e(){}return e.prototype.then=function(t,n){let r=new e,o=this.s;if(o){let i=1&o?t:n;if(i){try{d(r,1,i(this.v))}catch(a){d(r,2,a)}return r}return this}return this.o=function(i){try{let a=i.v;1&i.s?d(r,1,t?t(a):a):n?d(r,1,n(a)):d(r,2,a)}catch(a){d(r,2,a)}},r},e}();function d(e,t,n){if(!e.s){if(n instanceof te){if(!n.s)return void(n.o=d.bind(null,e,t));1&t&&(t=n.s),n=n.v}if(n&&n.then)return void n.then(d.bind(null,e,t),d.bind(null,e,2));e.s=t,e.v=n;let r=e.o;r&&r(e)}}var fe=0,S=typeof WeakMap=="function"?WeakMap:function(){var e=typeof Symbol=="function"?Symbol(0):"__weak$"+ ++fe;this.set=function(t,n){t[e]=n},this.get=function(t){return t[e]}};function Y(e,t){return new Promise(function(n,r){e.onsuccess=function(){var o=e.result;t&&(o=t(o)),n(o)},e.onerror=function(){r(e.error)}})}function ne(e,t){return Y(e.openCursor(t),function(n){return n?[n.key,n.value]:[]})}function Q(e){return new Promise(function(t,n){e.oncomplete=function(){t()},e.onabort=function(){n(e.error)},e.onerror=function(){n(e.error)}})}function K(e){if(!function(t){return!!(typeof t=="number"||typeof t=="string"||typeof t=="object"&&t&&(Array.isArray(t)||"setUTCFullYear"in t||typeof ArrayBuffer=="function"&&ArrayBuffer.isView(t)||"byteLength"in t&&"length"in t))}(e))throw Error("kv-storage: The given value is not allowed as a key")}var re={};function X(e,t){return ne(e,oe(t))}function oe(e){return e===re?IDBKeyRange.lowerBound(-1/0):IDBKeyRange.lowerBound(e,!0)}var ie=new S,T=new S,x=new S,ue=new S,E=function(){};function ee(e,t){return t(function(n,r){try{let v=function(){return T.set(e,i),x.set(e,void 0),{value:c,done:i===void 0}};var o=T.get(e);if(o===void 0)return Promise.resolve({value:void 0,done:!0});var i,a,c,h=function(f,u){var p,l=-1;e:{for(var y=0;y<u.length;y++){var g=u[y][0];if(g){var I=g();if(I&&I.then)break e;if(I===f){l=y;break}}else l=y}if(l!==-1){do{for(var L=u[l][1];!L;)L=u[++l][1];var O=L();if(O&&O.then){p=!0;break e}var $=u[l][2];l++}while($&&!$());return O}}let D=new te,R=d.bind(null,D,2);return(p?O.then(N):I.then(function P(w){for(;;){if(w===f){l=y;break}if(++y===u.length){if(l!==-1)break;return void d(D,1,C)}if(g=u[y][0]){if((w=g())&&w.then)return void w.then(P).then(void 0,R)}else l=y}do{for(var B=u[l][1];!B;)B=u[++l][1];var C=B();if(C&&C.then)return void C.then(N).then(void 0,R);var q=u[l][2];l++}while(q&&!q());d(D,1,C)})).then(void 0,R),D;function N(P){for(;;){var w=u[l][2];if(!w||w())break;for(var B=u[++l][1];!B;)B=u[++l][1];if((P=B())&&P.then)return void P.then(N).then(void 0,R)}d(D,1,P)}}(ue.get(e),[[function(){return"keys"},function(){return Promise.resolve(function(f,u){return ne(f,oe(u)).then(function(p){return p[0]})}(r,o)).then(function(f){c=i=f})}],[function(){return"values"},function(){return Promise.resolve(X(r,o)).then(function(f){var u;i=(u=f)[0],c=a=u[1]})}],[function(){return"entries"},function(){return Promise.resolve(X(r,o)).then(function(f){var u;a=(u=f)[1],c=(i=u[0])===void 0?void 0:[i,a]})}]]);return Promise.resolve(h&&h.then?h.then(v):v())}catch(v){return Promise.reject(v)}})}function M(e,t){var n=new E;return ue.set(n,e),ie.set(n,t),T.set(n,re),x.set(n,void 0),n}E.prototype.return=function(){T.set(this,void 0)},E.prototype.next=function(){var e=this,t=ie.get(this);if(!t)return Promise.reject(new TypeError("Invalid this value"));var n,r=x.get(this);return n=r!==void 0?r.then(function(){return ee(e,t)}):ee(this,t),x.set(this,n),n},typeof Symbol=="function"&&Symbol.asyncIterator&&(E.prototype[Symbol.asyncIterator]=function(){return this});var A=function(e,t,n){try{return b.get(e)===null&&function(r){var o=F.get(r);b.set(r,new Promise(function(i,a){var c=self.indexedDB.open(o,1);c.onsuccess=function(){var h=c.result;(function(v,f,u){if(v.objectStoreNames.length!==1||v.objectStoreNames[0]!==k)return u(U(f)),!1;var p=v.transaction(k,"readonly").objectStore(k);return!(p.autoIncrement||p.keyPath||p.indexNames.length)||(u(U(f)),!1)})(h,o,a)&&(h.onclose=function(){b.set(r,null)},h.onversionchange=function(){h.close(),b.set(r,null)},i(h))},c.onerror=function(){return a(c.error)},c.onupgradeneeded=function(){try{c.result.createObjectStore(k)}catch(h){a(h)}}}))}(e),Promise.resolve(b.get(e)).then(function(r){var o=r.transaction(k,t),i=o.objectStore(k);return n(o,i)})}catch(r){return Promise.reject(r)}},F=new S,b=new S,k="store",m=function(e){var t="kv-storage:"+e;b.set(this,null),F.set(this,t),this.backingStore={database:t,store:k,version:1}};function U(e){return new Error('kv-storage: database "'+e+'" corrupted')}m.prototype.set=function(e,t){try{return K(e),A(this,"readwrite",function(n,r){return t===void 0?r.delete(e):r.put(t,e),Q(n)})}catch(n){return Promise.reject(n)}},m.prototype.get=function(e){try{return K(e),A(this,"readonly",function(t,n){return Y(n.get(e))})}catch(t){return Promise.reject(t)}},m.prototype.delete=function(e){try{return K(e),A(this,"readwrite",function(t,n){return n.delete(e),Q(t)})}catch(t){return Promise.reject(t)}},m.prototype.clear=function(){try{let o=function(){function i(){return Y(self.indexedDB.deleteDatabase(F.get(e)))}var a=function(){if(t){try{t.close()}catch{}return Promise.resolve(new Promise(setTimeout)).then(function(){})}}();return a&&a.then?a.then(i):i()};var e=this,t,n=b.get(e),r=function(){if(n!==null){let a=function(){b.set(e,null)};var i=function(c,h){try{var v=Promise.resolve(n).then(function(f){t=f})}catch{return}return v&&v.then?v.then(void 0,function(){}):v}();return i&&i.then?i.then(a):a()}}();return r&&r.then?r.then(o):o()}catch(o){return Promise.reject(o)}},m.prototype.keys=function(){var e=this;return M("keys",function(t){return A(e,"readonly",t)})},m.prototype.values=function(){var e=this;return M("values",function(t){return A(e,"readonly",t)})},m.prototype.entries=function(){var e=this;return M("entries",function(t){return A(e,"readonly",t)})},typeof Symbol=="function"&&Symbol.asyncIterator&&(m.prototype[Symbol.asyncIterator]=m.prototype.entries);var V=new m("default");if(!globalThis.Worker){let{default:e}=await import("./pseudo-worker-4AJ45KTF.js");globalThis.Worker=e}self.onmessage=async e=>{let{id:t,ops:n}=e.data,r;for(;t<j.length;)j.pop()();for(let o of n){console.log("Apply op",o);let[i,...a]=o;r=await ce[i]?.(...a)}le(r)};var le=async e=>{let t=e.map(a=>H(a).replaceAll("\u0100"," ")),n=e.reduce((a,{duration:c})=>a+c,0),r=await _(...e),o=new Blob([r],{type:"audio/wav"}),i=URL.createObjectURL(o);self.postMessage({id:j.length,url:i,segments:t,duration:n})},j=[],s=[],ce={async src(...e){return j.push(()=>s=[]),s=await Promise.all(e.map(G)),s},async file(e){if(typeof e=="string"){let r=await V.get(Z+":"+e);if(!r)return s;let o=await J(r);return s=[await z(o)]}j.push(()=>s.pop());let t=new W({numberOfChannels:e.numberOfChannels,length:e.length,sampleRate:e.sampleRate});e.channelData.forEach((r,o)=>t.getChannelData(o).set(r)),s.push(t);let n=new Blob([await _(...s)]);return console.log("save",Z+":"+e.name),V.set(Z+":"+e.name,n),s},del(e,t){e=Number(e),t=Number(t);let n=[...s];j.push(()=>{s=n});let r=ae(e),o=ae(t);!o[1]&&o[0]&&(o[0]-=1,o[1]=s[o[0]].length);let i=s[r[0]],a=s[o[0]],c=r[1]+(a.length-o[1]);if(!c)return s=[];let h=new W({length:c,sampleRate:i.sampleRate,numberOfChannels:i.numberOfChannels});for(let f=0;f<i.numberOfChannels;f++){let u=0,p=h.getChannelData(f),l=i.getChannelData(f),y=a.getChannelData(f);for(u=0;u<r[1];u++)p[u]=l[u];for(let g=o[1];g<y.length;g++)p[u]=y[g],u++}let v=s.splice(r[0],o[0]-r[0]+1,h);return s},goto(e){}},ae=e=>{let t=e*1024;if(t===0)return[0,0];var n=0,r;for(let o=0;o<s.length;o++){if(r=n+s[o].length,t<r)return[o,t-n];n=r}return[s.length-1,s[s.length-1].length]},Z="wavearea-audio";
//# sourceMappingURL=worker.js.map
