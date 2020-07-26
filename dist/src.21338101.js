parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"IJ8E":[function(require,module,exports) {
var global = arguments[3];
var t=arguments[3],o=function(t){return t&&t.Math==Math&&t};module.exports=o("object"==typeof globalThis&&globalThis)||o("object"==typeof window&&window)||o("object"==typeof self&&self)||o("object"==typeof t&&t)||Function("return this")();
},{}],"rtOw":[function(require,module,exports) {
module.exports=function(r){try{return!!r()}catch(t){return!0}};
},{}],"RA6A":[function(require,module,exports) {
var e=require("../internals/fails");module.exports=!e(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});
},{"../internals/fails":"rtOw"}],"vkXE":[function(require,module,exports) {
"use strict";var r={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,t=e&&!r.call({1:2},1);exports.f=t?function(r){var t=e(this,r);return!!t&&t.enumerable}:r;
},{}],"v6Vm":[function(require,module,exports) {
module.exports=function(e,r){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:r}};
},{}],"UNYT":[function(require,module,exports) {
var r={}.toString;module.exports=function(t){return r.call(t).slice(8,-1)};
},{}],"dEmU":[function(require,module,exports) {
var r=require("../internals/fails"),e=require("../internals/classof-raw"),t="".split;module.exports=r(function(){return!Object("z").propertyIsEnumerable(0)})?function(r){return"String"==e(r)?t.call(r,""):Object(r)}:Object;
},{"../internals/fails":"rtOw","../internals/classof-raw":"UNYT"}],"CnUG":[function(require,module,exports) {
module.exports=function(o){if(null==o)throw TypeError("Can't call method on "+o);return o};
},{}],"M0Be":[function(require,module,exports) {
var e=require("../internals/indexed-object"),r=require("../internals/require-object-coercible");module.exports=function(i){return e(r(i))};
},{"../internals/indexed-object":"dEmU","../internals/require-object-coercible":"CnUG"}],"FS7x":[function(require,module,exports) {
module.exports=function(o){return"object"==typeof o?null!==o:"function"==typeof o};
},{}],"UzHL":[function(require,module,exports) {
var t=require("../internals/is-object");module.exports=function(r,e){if(!t(r))return r;var n,o;if(e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;if("function"==typeof(n=r.valueOf)&&!t(o=n.call(r)))return o;if(!e&&"function"==typeof(n=r.toString)&&!t(o=n.call(r)))return o;throw TypeError("Can't convert object to primitive value")};
},{"../internals/is-object":"FS7x"}],"mKeN":[function(require,module,exports) {
var r={}.hasOwnProperty;module.exports=function(e,n){return r.call(e,n)};
},{}],"mGtY":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/is-object"),t=e.document,n=r(t)&&r(t.createElement);module.exports=function(e){return n?t.createElement(e):{}};
},{"../internals/global":"IJ8E","../internals/is-object":"FS7x"}],"DSHT":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/fails"),n=require("../internals/document-create-element");module.exports=!e&&!r(function(){return 7!=Object.defineProperty(n("div"),"a",{get:function(){return 7}}).a});
},{"../internals/descriptors":"RA6A","../internals/fails":"rtOw","../internals/document-create-element":"mGtY"}],"HtdO":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/object-property-is-enumerable"),i=require("../internals/create-property-descriptor"),t=require("../internals/to-indexed-object"),n=require("../internals/to-primitive"),s=require("../internals/has"),a=require("../internals/ie8-dom-define"),o=Object.getOwnPropertyDescriptor;exports.f=e?o:function(e,c){if(e=t(e),c=n(c,!0),a)try{return o(e,c)}catch(u){}if(s(e,c))return i(!r.f.call(e,c),e[c])};
},{"../internals/descriptors":"RA6A","../internals/object-property-is-enumerable":"vkXE","../internals/create-property-descriptor":"v6Vm","../internals/to-indexed-object":"M0Be","../internals/to-primitive":"UzHL","../internals/has":"mKeN","../internals/ie8-dom-define":"DSHT"}],"Ohll":[function(require,module,exports) {
var r=require("../internals/fails"),e=/#|\.prototype\./,t=function(e,t){var u=o[n(e)];return u==i||u!=a&&("function"==typeof t?r(t):!!t)},n=t.normalize=function(r){return String(r).replace(e,".").toLowerCase()},o=t.data={},a=t.NATIVE="N",i=t.POLYFILL="P";module.exports=t;
},{"../internals/fails":"rtOw"}],"iXvo":[function(require,module,exports) {
module.exports={};
},{}],"USpF":[function(require,module,exports) {
module.exports=function(n){if("function"!=typeof n)throw TypeError(String(n)+" is not a function");return n};
},{}],"PPXG":[function(require,module,exports) {
var n=require("../internals/a-function");module.exports=function(r,t,e){if(n(r),void 0===t)return r;switch(e){case 0:return function(){return r.call(t)};case 1:return function(n){return r.call(t,n)};case 2:return function(n,e){return r.call(t,n,e)};case 3:return function(n,e,u){return r.call(t,n,e,u)}}return function(){return r.apply(t,arguments)}};
},{"../internals/a-function":"USpF"}],"kalM":[function(require,module,exports) {
var r=require("../internals/is-object");module.exports=function(e){if(!r(e))throw TypeError(String(e)+" is not an object");return e};
},{"../internals/is-object":"FS7x"}],"y7Dx":[function(require,module,exports) {
var e=require("../internals/descriptors"),r=require("../internals/ie8-dom-define"),i=require("../internals/an-object"),t=require("../internals/to-primitive"),n=Object.defineProperty;exports.f=e?n:function(e,o,s){if(i(e),o=t(o,!0),i(s),r)try{return n(e,o,s)}catch(u){}if("get"in s||"set"in s)throw TypeError("Accessors not supported");return"value"in s&&(e[o]=s.value),e};
},{"../internals/descriptors":"RA6A","../internals/ie8-dom-define":"DSHT","../internals/an-object":"kalM","../internals/to-primitive":"UzHL"}],"yNEm":[function(require,module,exports) {
var r=require("../internals/descriptors"),e=require("../internals/object-define-property"),t=require("../internals/create-property-descriptor");module.exports=r?function(r,n,i){return e.f(r,n,t(1,i))}:function(r,e,t){return r[e]=t,r};
},{"../internals/descriptors":"RA6A","../internals/object-define-property":"y7Dx","../internals/create-property-descriptor":"v6Vm"}],"SNRl":[function(require,module,exports) {

"use strict";var e=require("../internals/global"),r=require("../internals/object-get-own-property-descriptor").f,t=require("../internals/is-forced"),n=require("../internals/path"),o=require("../internals/function-bind-context"),a=require("../internals/create-non-enumerable-property"),i=require("../internals/has"),s=function(e){var r=function(r,t,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(r);case 2:return new e(r,t)}return new e(r,t,n)}return e.apply(this,arguments)};return r.prototype=e.prototype,r};module.exports=function(p,u){var c,l,f,y,h,q,w,b,d=p.target,g=p.global,m=p.stat,v=p.proto,x=g?e:m?e[d]:(e[d]||{}).prototype,j=g?n:n[d]||(n[d]={}),F=j.prototype;for(f in u)c=!t(g?f:d+(m?".":"#")+f,p.forced)&&x&&i(x,f),h=j[f],c&&(q=p.noTargetGet?(b=r(x,f))&&b.value:x[f]),y=c&&q?q:u[f],c&&typeof h==typeof y||(w=p.bind&&c?o(y,e):p.wrap&&c?s(y):v&&"function"==typeof y?o(Function.call,y):y,(p.sham||y&&y.sham||h&&h.sham)&&a(w,"sham",!0),j[f]=w,v&&(i(n,l=d+"Prototype")||a(n,l,{}),n[l][f]=y,p.real&&F&&!F[f]&&a(F,f,y)))};
},{"../internals/global":"IJ8E","../internals/object-get-own-property-descriptor":"HtdO","../internals/is-forced":"Ohll","../internals/path":"iXvo","../internals/function-bind-context":"PPXG","../internals/create-non-enumerable-property":"yNEm","../internals/has":"mKeN"}],"h9JO":[function(require,module,exports) {
var r=require("../internals/classof-raw");module.exports=Array.isArray||function(a){return"Array"==r(a)};
},{"../internals/classof-raw":"UNYT"}],"Nvz5":[function(require,module,exports) {
var e=require("../internals/require-object-coercible");module.exports=function(r){return Object(e(r))};
},{"../internals/require-object-coercible":"CnUG"}],"nqqY":[function(require,module,exports) {
var o=Math.ceil,r=Math.floor;module.exports=function(t){return isNaN(t=+t)?0:(t>0?r:o)(t)};
},{}],"upEt":[function(require,module,exports) {
var e=require("../internals/to-integer"),r=Math.min;module.exports=function(n){return n>0?r(e(n),9007199254740991):0};
},{"../internals/to-integer":"nqqY"}],"hp6J":[function(require,module,exports) {
"use strict";var e=require("../internals/to-primitive"),r=require("../internals/object-define-property"),i=require("../internals/create-property-descriptor");module.exports=function(t,n,o){var p=e(n);p in t?r.f(t,p,i(0,o)):t[p]=o};
},{"../internals/to-primitive":"UzHL","../internals/object-define-property":"y7Dx","../internals/create-property-descriptor":"v6Vm"}],"oj7W":[function(require,module,exports) {
module.exports=!0;
},{}],"RHRM":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/create-non-enumerable-property");module.exports=function(n,t){try{r(e,n,t)}catch(a){e[n]=t}return t};
},{"../internals/global":"IJ8E","../internals/create-non-enumerable-property":"yNEm"}],"kERb":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/set-global"),l="__core-js_shared__",a=e[l]||r(l,{});module.exports=a;
},{"../internals/global":"IJ8E","../internals/set-global":"RHRM"}],"yAEX":[function(require,module,exports) {
var r=require("../internals/is-pure"),e=require("../internals/shared-store");(module.exports=function(r,i){return e[r]||(e[r]=void 0!==i?i:{})})("versions",[]).push({version:"3.6.4",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"});
},{"../internals/is-pure":"oj7W","../internals/shared-store":"kERb"}],"MCkq":[function(require,module,exports) {
var o=0,r=Math.random();module.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++o+r).toString(36)};
},{}],"qRXg":[function(require,module,exports) {
var r=require("../internals/fails");module.exports=!!Object.getOwnPropertySymbols&&!r(function(){return!String(Symbol())});
},{"../internals/fails":"rtOw"}],"HGpA":[function(require,module,exports) {
var e=require("../internals/native-symbol");module.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;
},{"../internals/native-symbol":"qRXg"}],"G69i":[function(require,module,exports) {

var e=require("../internals/global"),r=require("../internals/shared"),i=require("../internals/has"),n=require("../internals/uid"),s=require("../internals/native-symbol"),t=require("../internals/use-symbol-as-uid"),l=r("wks"),u=e.Symbol,a=t?u:u&&u.withoutSetter||n;module.exports=function(e){return i(l,e)||(s&&i(u,e)?l[e]=u[e]:l[e]=a("Symbol."+e)),l[e]};
},{"../internals/global":"IJ8E","../internals/shared":"yAEX","../internals/has":"mKeN","../internals/uid":"MCkq","../internals/native-symbol":"qRXg","../internals/use-symbol-as-uid":"HGpA"}],"zaTs":[function(require,module,exports) {
var r=require("../internals/is-object"),e=require("../internals/is-array"),n=require("../internals/well-known-symbol"),o=n("species");module.exports=function(n,i){var t;return e(n)&&("function"!=typeof(t=n.constructor)||t!==Array&&!e(t.prototype)?r(t)&&null===(t=t[o])&&(t=void 0):t=void 0),new(void 0===t?Array:t)(0===i?0:i)};
},{"../internals/is-object":"FS7x","../internals/is-array":"h9JO","../internals/well-known-symbol":"G69i"}],"qvVx":[function(require,module,exports) {

var n=require("../internals/path"),e=require("../internals/global"),r=function(n){return"function"==typeof n?n:void 0};module.exports=function(t,i){return arguments.length<2?r(n[t])||r(e[t]):n[t]&&n[t][i]||e[t]&&e[t][i]};
},{"../internals/path":"iXvo","../internals/global":"IJ8E"}],"WMuu":[function(require,module,exports) {
var e=require("../internals/get-built-in");module.exports=e("navigator","userAgent")||"";
},{"../internals/get-built-in":"qvVx"}],"U15D":[function(require,module,exports) {


var e,r,s=require("../internals/global"),n=require("../internals/engine-user-agent"),a=s.process,i=a&&a.versions,t=i&&i.v8;t?r=(e=t.split("."))[0]+e[1]:n&&(!(e=n.match(/Edge\/(\d+)/))||e[1]>=74)&&(e=n.match(/Chrome\/(\d+)/))&&(r=e[1]),module.exports=r&&+r;
},{"../internals/global":"IJ8E","../internals/engine-user-agent":"WMuu"}],"Z9gc":[function(require,module,exports) {
var n=require("../internals/fails"),e=require("../internals/well-known-symbol"),r=require("../internals/engine-v8-version"),o=e("species");module.exports=function(e){return r>=51||!n(function(){var n=[];return(n.constructor={})[o]=function(){return{foo:1}},1!==n[e](Boolean).foo})};
},{"../internals/fails":"rtOw","../internals/well-known-symbol":"G69i","../internals/engine-v8-version":"U15D"}],"uRLs":[function(require,module,exports) {
"use strict";var r=require("../internals/export"),e=require("../internals/fails"),n=require("../internals/is-array"),t=require("../internals/is-object"),i=require("../internals/to-object"),a=require("../internals/to-length"),o=require("../internals/create-property"),s=require("../internals/array-species-create"),l=require("../internals/array-method-has-species-support"),u=require("../internals/well-known-symbol"),c=require("../internals/engine-v8-version"),f=u("isConcatSpreadable"),p=9007199254740991,q="Maximum allowed index exceeded",h=c>=51||!e(function(){var r=[];return r[f]=!1,r.concat()[0]!==r}),d=l("concat"),y=function(r){if(!t(r))return!1;var e=r[f];return void 0!==e?!!e:n(r)},v=!h||!d;r({target:"Array",proto:!0,forced:v},{concat:function(r){var e,n,t,l,u,c=i(this),f=s(c,0),h=0;for(e=-1,t=arguments.length;e<t;e++)if(u=-1===e?c:arguments[e],y(u)){if(h+(l=a(u.length))>p)throw TypeError(q);for(n=0;n<l;n++,h++)n in u&&o(f,h,u[n])}else{if(h>=p)throw TypeError(q);o(f,h++,u)}return f.length=h,f}});
},{"../internals/export":"SNRl","../internals/fails":"rtOw","../internals/is-array":"h9JO","../internals/is-object":"FS7x","../internals/to-object":"Nvz5","../internals/to-length":"upEt","../internals/create-property":"hp6J","../internals/array-species-create":"zaTs","../internals/array-method-has-species-support":"Z9gc","../internals/well-known-symbol":"G69i","../internals/engine-v8-version":"U15D"}],"IHDx":[function(require,module,exports) {
var r=require("../internals/path");module.exports=function(e){return r[e+"Prototype"]};
},{"../internals/path":"iXvo"}],"atD1":[function(require,module,exports) {
require("../../../modules/es.array.concat");var r=require("../../../internals/entry-virtual");module.exports=r("Array").concat;
},{"../../../modules/es.array.concat":"uRLs","../../../internals/entry-virtual":"IHDx"}],"qnyC":[function(require,module,exports) {
var r=require("../array/virtual/concat"),a=Array.prototype;module.exports=function(t){var o=t.concat;return t===a||t instanceof Array&&o===a.concat?r:o};
},{"../array/virtual/concat":"atD1"}],"VZSQ":[function(require,module,exports) {
var e=require("../../es/instance/concat");module.exports=e;
},{"../../es/instance/concat":"qnyC"}],"W5Mo":[function(require,module,exports) {
module.exports=require("core-js-pure/stable/instance/concat");
},{"core-js-pure/stable/instance/concat":"VZSQ"}],"rbSf":[function(require,module,exports) {

},{}],"uBxZ":[function(require,module,exports) {
"use strict";var e=t(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));function t(e){return e&&e.__esModule?e:{default:e}}require("./scss/main.scss");var n=document.getElementById("currency-one"),a=document.getElementById("amount-one"),c=document.getElementById("currency-two"),u=document.getElementById("amount-two"),r=document.getElementById("rate"),o=document.getElementById("swap");function d(){var t=n.value,o=c.value;fetch("https://cors-anywhere.herokuapp.com/https://api.exchangerate-api.com/v4/latest/".concat(t)).then(function(e){return e.json()}).then(function(n){var c,d,l=n.rates[o];r.innerText=(0,e.default)(c=(0,e.default)(d="1 ".concat(t," = ")).call(d,l," ")).call(c,o),u.value=(a.value*l).toFixed(2)})}n.addEventListener("change",d),a.addEventListener("input",d),c.addEventListener("change",d),u.addEventListener("input",d),o.addEventListener("click",function(){var e=n.value;n.value=c.value,c.value=e,d()}),d();
},{"@babel/runtime-corejs3/core-js-stable/instance/concat":"W5Mo","./scss/main.scss":"rbSf"}]},{},["uBxZ"], null)
//# sourceMappingURL=src.21338101.js.map