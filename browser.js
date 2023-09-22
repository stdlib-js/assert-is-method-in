// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=/./,r="function"==typeof Object.defineProperty?Object.defineProperty:null,i=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function a(e,r,i){var t=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+n(a):n(a)+e,t&&(e="-"+e)),e}var o=String.prototype.toLowerCase,s=String.prototype.toUpperCase;function c(e){var r,i,n;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,n=parseInt(i,10),!isFinite(n)){if(!t(i))throw new Error("invalid integer. Value: "+i);n=0}return n<0&&("u"===e.specifier||10!==r)&&(n=4294967295+n+1),n<0?(i=(-n).toString(r),e.precision&&(i=a(i,e.precision,e.padRight)),i="-"+i):(i=n.toString(r),n||e.precision?e.precision&&(i=a(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===s.call(e.specifier)?s.call(i):o.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function p(e){return"string"==typeof e}var l=Math.abs,u=String.prototype.toLowerCase,f=String.prototype.toUpperCase,g=String.prototype.replace,d=/e\+(\d)$/,h=/e-(\d)$/,w=/^(\d+)$/,b=/^(\d+)e/,y=/\.0$/,v=/\.0*e/,m=/(\..*[^0])0*e/;function E(e){var r,i,n=parseFloat(e.arg);if(!isFinite(n)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+i);n=e.arg}switch(e.specifier){case"e":case"E":i=n.toExponential(e.precision);break;case"f":case"F":i=n.toFixed(e.precision);break;case"g":case"G":l(n)<1e-4?((r=e.precision)>0&&(r-=1),i=n.toExponential(r)):i=n.toPrecision(e.precision),e.alternate||(i=g.call(i,m,"$1e"),i=g.call(i,v,"e"),i=g.call(i,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=g.call(i,d,"e+0$1"),i=g.call(i,h,"e-0$1"),e.alternate&&(i=g.call(i,w,"$1."),i=g.call(i,b,"$1.e")),n>=0&&e.sign&&(i=e.sign+i),i=e.specifier===f.call(e.specifier)?f.call(i):u.call(i)}function x(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function k(e,r,i){var t=r-e.length;return t<0?e:e=i?e+x(t):x(t)+e}var S=String.fromCharCode,V=isNaN,$=Array.isArray;function _(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function T(e){var r,i,t,n,o,s,l,u,f;if(!$(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,u=0;u<e.length;u++)if(p(t=e[u]))s+=t;else{if(r=void 0!==t.precision,!(t=_(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,V(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,V(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=c(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!V(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=V(o)?String(t.arg):S(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=E(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),s+=t.arg||"",l+=1}return s}var j=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function A(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function F(e){var r,i,t,n;for(i=[],n=0,t=j.exec(e);t;)(r=e.slice(n,j.lastIndex-t[0].length)).length&&i.push(r),i.push(A(t)),n=j.lastIndex,t=j.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function I(e){return"string"==typeof e}function C(e){var r,i,t;if(!I(e))throw new TypeError(C("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=F(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return T.apply(null,i)}var R,Z=Object.prototype,O=Z.toString,L=Z.__defineGetter__,W=Z.__defineSetter__,P=Z.__lookupGetter__,G=Z.__lookupSetter__;R=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?i:function(e,r,i){var t,n,a,o;if("object"!=typeof e||null===e||"[object Array]"===O.call(e))throw new TypeError(C("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof i||null===i||"[object Array]"===O.call(i))throw new TypeError(C("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((n="value"in i)&&(P.call(e,r)||G.call(e,r)?(t=e.__proto__,e.__proto__=Z,delete e[r],e[r]=i.value,e.__proto__=t):e[r]=i.value),a="get"in i,o="set"in i,n&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&L&&L.call(e,r,i.get),o&&W&&W.call(e,r,i.set),e};var B=R;function N(e,r,i){B(e,r,{configurable:!1,enumerable:!1,writable:!1,value:i})}function U(e){return"boolean"==typeof e}var X="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function M(){return X&&"symbol"==typeof Symbol.toStringTag}var z=Object.prototype.toString,q=Object.prototype.hasOwnProperty,D="function"==typeof Symbol?Symbol:void 0,H="function"==typeof D?D.toStringTag:"",J=M()?function(e){var r,i,t,n,a;if(null==e)return z.call(e);i=e[H],a=H,r=null!=(n=e)&&q.call(n,a);try{e[H]=void 0}catch(r){return z.call(e)}return t=z.call(e),r?e[H]=i:delete e[H],t}:function(e){return z.call(e)},K=Boolean,Q=Boolean.prototype.toString,Y=M();function ee(e){return"object"==typeof e&&(e instanceof K||(Y?function(e){try{return Q.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===J(e)))}function re(e){return U(e)||ee(e)}function ie(e){return"number"==typeof e}function te(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function ne(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+te(n):te(n)+e,t&&(e="-"+e)),e}N(re,"isPrimitive",U),N(re,"isObject",ee);var ae=String.prototype.toLowerCase,oe=String.prototype.toUpperCase;function se(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!ie(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=ne(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=ne(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===oe.call(e.specifier)?oe.call(i):ae.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function ce(e){return"string"==typeof e}var pe=Math.abs,le=String.prototype.toLowerCase,ue=String.prototype.toUpperCase,fe=String.prototype.replace,ge=/e\+(\d)$/,de=/e-(\d)$/,he=/^(\d+)$/,we=/^(\d+)e/,be=/\.0$/,ye=/\.0*e/,ve=/(\..*[^0])0*e/;function me(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!ie(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":pe(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=fe.call(i,ve,"$1e"),i=fe.call(i,ye,"e"),i=fe.call(i,be,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=fe.call(i,ge,"e+0$1"),i=fe.call(i,de,"e-0$1"),e.alternate&&(i=fe.call(i,he,"$1."),i=fe.call(i,we,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===ue.call(e.specifier)?ue.call(i):le.call(i)}function Ee(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function xe(e,r,i){var t=r-e.length;return t<0?e:e=i?e+Ee(t):Ee(t)+e}var ke=String.fromCharCode,Se=isNaN,Ve=Array.isArray;function $e(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function _e(e){var r,i,t,n,a,o,s,c,p;if(!Ve(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(ce(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=$e(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,Se(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,Se(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=se(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!Se(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Se(a)?String(t.arg):ke(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=me(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=ne(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=xe(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var Te=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function je(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function Ae(e){var r,i,t,n;for(i=[],n=0,t=Te.exec(e);t;)(r=e.slice(n,Te.lastIndex-t[0].length)).length&&i.push(r),i.push(je(t)),n=Te.lastIndex,t=Te.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function Fe(e){return"string"==typeof e}function Ie(e){var r,i,t;if(!Fe(e))throw new TypeError(Ie("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=Ae(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return _e.apply(null,i)}function Ce(){return new Function("return this;")()}var Re="object"==typeof self?self:null,Ze="object"==typeof window?window:null,Oe="object"==typeof globalThis?globalThis:null,Le=function(e){if(arguments.length){if(!U(e))throw new TypeError(Ie("invalid argument. Must provide a boolean. Value: `%s`.",e));if(e)return Ce()}if(Oe)return Oe;if(Re)return Re;if(Ze)return Ze;throw new Error("unexpected error. Unable to resolve global object.")}(),We=Le.document&&Le.document.childNodes,Pe=Int8Array;function Ge(){return/^\s*function\s*([^(]*)/i}var Be=/^\s*function\s*([^(]*)/i;N(Ge,"REGEXP",Be);var Ne=Array.isArray?Array.isArray:function(e){return"[object Array]"===J(e)};function Ue(e){return"number"==typeof e}function Xe(e){var r,i="";for(r=0;r<e;r++)i+="0";return i}function Me(e,r,i){var t=!1,n=r-e.length;return n<0||(function(e){return"-"===e[0]}(e)&&(t=!0,e=e.substr(1)),e=i?e+Xe(n):Xe(n)+e,t&&(e="-"+e)),e}var ze=String.prototype.toLowerCase,qe=String.prototype.toUpperCase;function De(e){var r,i,t;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(i=e.arg,t=parseInt(i,10),!isFinite(t)){if(!Ue(i))throw new Error("invalid integer. Value: "+i);t=0}return t<0&&("u"===e.specifier||10!==r)&&(t=4294967295+t+1),t<0?(i=(-t).toString(r),e.precision&&(i=Me(i,e.precision,e.padRight)),i="-"+i):(i=t.toString(r),t||e.precision?e.precision&&(i=Me(i,e.precision,e.padRight)):i="",e.sign&&(i=e.sign+i)),16===r&&(e.alternate&&(i="0x"+i),i=e.specifier===qe.call(e.specifier)?qe.call(i):ze.call(i)),8===r&&e.alternate&&"0"!==i.charAt(0)&&(i="0"+i),i}function He(e){return"string"==typeof e}var Je=Math.abs,Ke=String.prototype.toLowerCase,Qe=String.prototype.toUpperCase,Ye=String.prototype.replace,er=/e\+(\d)$/,rr=/e-(\d)$/,ir=/^(\d+)$/,tr=/^(\d+)e/,nr=/\.0$/,ar=/\.0*e/,or=/(\..*[^0])0*e/;function sr(e){var r,i,t=parseFloat(e.arg);if(!isFinite(t)){if(!Ue(e.arg))throw new Error("invalid floating-point number. Value: "+i);t=e.arg}switch(e.specifier){case"e":case"E":i=t.toExponential(e.precision);break;case"f":case"F":i=t.toFixed(e.precision);break;case"g":case"G":Je(t)<1e-4?((r=e.precision)>0&&(r-=1),i=t.toExponential(r)):i=t.toPrecision(e.precision),e.alternate||(i=Ye.call(i,or,"$1e"),i=Ye.call(i,ar,"e"),i=Ye.call(i,nr,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return i=Ye.call(i,er,"e+0$1"),i=Ye.call(i,rr,"e-0$1"),e.alternate&&(i=Ye.call(i,ir,"$1."),i=Ye.call(i,tr,"$1.e")),t>=0&&e.sign&&(i=e.sign+i),i=e.specifier===Qe.call(e.specifier)?Qe.call(i):Ke.call(i)}function cr(e){var r,i="";for(r=0;r<e;r++)i+=" ";return i}function pr(e,r,i){var t=r-e.length;return t<0?e:e=i?e+cr(t):cr(t)+e}var lr=String.fromCharCode,ur=isNaN,fr=Array.isArray;function gr(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function dr(e){var r,i,t,n,a,o,s,c,p;if(!fr(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(o="",s=1,c=0;c<e.length;c++)if(He(t=e[c]))o+=t;else{if(r=void 0!==t.precision,!(t=gr(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+t+"`.");for(t.mapping&&(s=t.mapping),i=t.flags,p=0;p<i.length;p++)switch(n=i.charAt(p)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[s],10),s+=1,ur(t.width))throw new TypeError("the argument for * width at position "+s+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(r&&"*"===t.precision){if(t.precision=parseInt(arguments[s],10),s+=1,ur(t.precision))throw new TypeError("the argument for * precision at position "+s+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,r=!1)}switch(t.arg=arguments[s],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(t.padZeros=!1),t.arg=De(t);break;case"s":t.maxWidth=r?t.precision:-1;break;case"c":if(!ur(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=ur(a)?String(t.arg):lr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(t.precision=6),t.arg=sr(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=Me(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=pr(t.arg,t.width,t.padRight)),o+=t.arg||"",s+=1}return o}var hr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function wr(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function br(e){var r,i,t,n;for(i=[],n=0,t=hr.exec(e);t;)(r=e.slice(n,hr.lastIndex-t[0].length)).length&&i.push(r),i.push(wr(t)),n=hr.lastIndex,t=hr.exec(e);return(r=e.slice(n)).length&&i.push(r),i}function yr(e){return"string"==typeof e}function vr(e){var r,i,t;if(!yr(e))throw new TypeError(vr("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=br(e),(i=new Array(arguments.length))[0]=r,t=1;t<i.length;t++)i[t]=arguments[t];return dr.apply(null,i)}function mr(e){return null!==e&&"object"==typeof e}function Er(e){var r,i,t,n;if(("Object"===(i=J(e).slice(8,-1))||"Error"===i)&&e.constructor){if("string"==typeof(t=e.constructor).name)return t.name;if(r=Be.exec(t.toString()))return r[1]}return mr(n=e)&&(n._isBuffer||n.constructor&&"function"==typeof n.constructor.isBuffer&&n.constructor.isBuffer(n))?"Buffer":i}N(mr,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError(vr("invalid argument. Must provide a function. Value: `%s`.",e));return function(r){var i,t;if(!Ne(r))return!1;if(0===(i=r.length))return!1;for(t=0;t<i;t++)if(!1===e(r[t]))return!1;return!0}}(mr));var xr="function"==typeof e||"object"==typeof Pe||"function"==typeof We?function(e){return Er(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"==(r=typeof e)?Er(e).toLowerCase():r},kr=Object;return function(e,r){return null!=e&&(e=kr(e),"symbol"!=typeof r&&(r=String(r)),r in e&&function(e){return"function"===xr(e)}(e[r]))}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).isMethodIn=r();
//# sourceMappingURL=browser.js.map
