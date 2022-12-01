// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).isMethodIn=e()}(this,(function(){"use strict";var t=/./,e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,c=o.__defineSetter__,f=o.__lookupGetter__,l=o.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(t){return!1}}()?n:function(t,e,r){var n,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===i.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(f.call(t,e)||l.call(t,e)?(n=t.__proto__,t.__proto__=o,delete t[e],t[e]=r.value,t.__proto__=n):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&c&&c.call(t,e,r.set),t};var a=r;function y(t,e,r){a(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}function p(t){return"boolean"==typeof t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return s&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;var _="function"==typeof Symbol?Symbol.toStringTag:"";var j=b()?function(t){var e,r,n,o,i;if(null==t)return d.call(t);r=t[_],i=_,e=null!=(o=t)&&v.call(o,i);try{t[_]=void 0}catch(e){return d.call(t)}return n=d.call(t),e?t[_]=r:delete t[_],n}:function(t){return d.call(t)},m=Boolean.prototype.toString;var g=b();function w(t){return"object"==typeof t&&(t instanceof Boolean||(g?function(t){try{return m.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function h(t){return p(t)||w(t)}function S(){return new Function("return this;")()}y(h,"isPrimitive",p),y(h,"isObject",w);var O="object"==typeof self?self:null,A="object"==typeof window?window:null,E="object"==typeof global?global:null;var T=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(O)return O;if(A)return A;if(E)return E;throw new Error("unexpected error. Unable to resolve global object.")}(),B=T.document&&T.document.childNodes,P=Int8Array;function x(){return/^\s*function\s*([^(]*)/i}var V=/^\s*function\s*([^(]*)/i;y(x,"REGEXP",V);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var e,r,n,o;if(("Object"===(r=j(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=V.exec(n.toString()))return e[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}y(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!k(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(C));var L="function"==typeof t||"object"==typeof P||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?G(t).toLowerCase():e};var M=Object;return function(t,e){return null!=t&&(t=M(t),"symbol"!=typeof e&&(e=String(e)),e in t&&function(t){return"function"===L(t)}(t[e]))}}));
//# sourceMappingURL=index.js.map
