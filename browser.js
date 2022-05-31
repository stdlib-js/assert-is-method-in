// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isMethodIn=e()}(this,(function(){"use strict";function t(t){var e=t.default;if("function"==typeof e){var r=function(){return e.apply(this,arguments)};r.prototype=e.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(t).forEach((function(e){var n=Object.getOwnPropertyDescriptor(t,e);Object.defineProperty(r,e,n.get?n:{enumerable:!0,get:function(){return t[e]}})})),r}var e=/./,r=t(Object.freeze({__proto__:null,default:()=>window}))(),n=r.document&&r.document.childNodes,o=Int8Array,u=e,i=n,c=o;var f=function(){return"function"==typeof u||"object"==typeof c||"function"==typeof i};var a=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var l=function(){return a&&"symbol"==typeof Symbol.toStringTag},y=Object.prototype.toString,p=y;var s=function(t){return p.call(t)},b=Object.prototype.hasOwnProperty;var v=function(t,e){return null!=t&&b.call(t,e)},d="function"==typeof Symbol?Symbol.toStringTag:"",_=v,j=d,m=y;var g=s,h=function(t){var e,r,n;if(null==t)return m.call(t);r=t[j],e=_(t,j);try{t[j]=void 0}catch(e){return m.call(t)}return n=m.call(t),e?t[j]=r:delete t[j],n},w=l()?h:g,O="function"==typeof Object.defineProperty?Object.defineProperty:null;var S=function(){try{return O({},"x",{}),!0}catch(t){return!1}},E=Object.defineProperty,P=Object.prototype,A=P.toString,T=P.__defineGetter__,k=P.__defineSetter__,x=P.__lookupGetter__,B=P.__lookupSetter__;var G=E,C=function(t,e,r){var n,o,u,i;if("object"!=typeof t||null===t||"[object Array]"===A.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===A.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(x.call(t,e)||B.call(t,e)?(n=t.__proto__,t.__proto__=P,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),u="get"in r,i="set"in r,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&T&&T.call(t,e,r.get),i&&k&&k.call(t,e,r.set),t},L=S()?G:C;var M=function(t,e,r){L(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})};var V=function(){return/^\s*function\s*([^(]*)/i},I=V;M(I,"REGEXP",V());var R=I,X=w;var z=Array.isArray?Array.isArray:function(t){return"[object Array]"===X(t)};var D=function(t){return null!==t&&"object"==typeof t};M(D,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!z(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(D));var F=D;var N=w,q=R.REGEXP,H=function(t){return F(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var J=function(t){var e,r,n;if(("Object"===(r=N(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=q.exec(n.toString()))return e[1]}return H(t)?"Buffer":r},K=J;var Q=J;var U=function(t){var e;return null===t?"null":"object"===(e=typeof t)?K(t).toLowerCase():e},W=function(t){return Q(t).toLowerCase()},Y=f()?W:U;var Z=function(t){return"function"===Y(t)};return function(t,e){return null!=t&&(t=Object(t),"symbol"!=typeof e&&(e=String(e)),e in t&&Z(t[e]))}}));
//# sourceMappingURL=browser.js.map
