!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={};Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}
/*! @vimeo/player v2.16.4 | (c) 2022 Vimeo | MIT License | https://github.com/vimeo/player.js */;var r=void 0!==t&&"[object global]"==={}.toString.call(t);function o(e){return!isNaN(parseFloat(e))&&isFinite(e)&&Math.floor(e)==e}function i(e){return/^(https?:)?\/\/((player|www)\.)?vimeo\.com(?=$|\/)/.test(e)}function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id,n=e.url,r=t||n;if(!r)throw new Error("An id or url must be passed, either in an options object or as a data-vimeo-id or data-vimeo-url attribute.");if(o(r))return"https://vimeo.com/".concat(r);if(i(r))return r.replace("http:","https:");if(t)throw new TypeError("“".concat(t,"” is not a valid video id."));throw new TypeError("“".concat(r,"” is not a vimeo.com url."))}var a=void 0!==Array.prototype.indexOf,u="undefined"!=typeof window&&void 0!==window.postMessage;if(!(r||a&&u))throw new Error("Sorry, the Vimeo Player API is not available in this browser.");var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{};
/*!
 * weakmap-polyfill v2.0.1 - ECMAScript6 WeakMap polyfill
 * https://github.com/polygonplanet/weakmap-polyfill
 * Copyright (c) 2015-2020 Polygon Planet <polygon.planet.aqua@gmail.com>
 * @license MIT
 */
!function(t){if(!t.WeakMap){var r=Object.prototype.hasOwnProperty,o=function(e,t,n){Object.defineProperty?Object.defineProperty(e,t,{configurable:!0,writable:!0,value:n}):e[t]=n};t.WeakMap=function(){function t(){if(void 0===this)throw new TypeError("Constructor WeakMap requires 'new'");if(o(this,"_id",a("_WeakMap")),arguments.length>0)throw new TypeError("WeakMap iterable is not supported")}function c(t,o){if(!i(t)||!r.call(t,"_id"))throw new TypeError(o+" method called on incompatible receiver "+(void 0===t?"undefined":e(n)(t)))}function a(e){return e+"_"+u()+"."+u()}function u(){return Math.random().toString().substring(2)}return o(t.prototype,"delete",(function(e){if(c(this,"delete"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)&&(delete e[this._id],!0)})),o(t.prototype,"get",(function(e){if(c(this,"get"),i(e)){var t=e[this._id];return t&&t[0]===e?t[1]:void 0}})),o(t.prototype,"has",(function(e){if(c(this,"has"),!i(e))return!1;var t=e[this._id];return!(!t||t[0]!==e)})),o(t.prototype,"set",(function(e,t){if(c(this,"set"),!i(e))throw new TypeError("Invalid value used as weak map key");var n=e[this._id];return n&&n[0]===e?(n[1]=t,this):(o(e,this._id,[e,t]),this)})),o(t,"_polyfill",!0),t}()}function i(e){return Object(e)===e}}("undefined"!=typeof self?self:"undefined"!=typeof window?window:l);var f,s;f=function(t){
/*! Native Promise Only
    v0.8.1 (c) Kyle Simpson
    MIT License: http://getify.mit-license.org
*/
var r,o,i;i=function(){var t,r,o,i=Object.prototype.toString,c="undefined"!=typeof setImmediate?function(e){return setImmediate(e)}:setTimeout;try{Object.defineProperty({},"x",{}),t=function(e,t,n,r){return Object.defineProperty(e,t,{value:n,writable:!0,configurable:!1!==r})}}catch(e){t=function(e,t,n){return e[t]=n,e}}function a(e,t){o.add(e,t),r||(r=c(o.drain))}function u(t){var r,o=void 0===t?"undefined":e(n)(t);return null==t||"object"!=o&&"function"!=o||(r=t.then),"function"==typeof r&&r}function l(){for(var e=0;e<this.chain.length;e++)f(this,1===this.state?this.chain[e].success:this.chain[e].failure,this.chain[e]);this.chain.length=0}function f(e,t,n){var r,o;try{!1===t?n.reject(e.msg):(r=!0===t?e.msg:t.call(void 0,e.msg))===n.promise?n.reject(TypeError("Promise-chain cycle")):(o=u(r))?o.call(r,n.resolve,n.reject):n.resolve(r)}catch(e){n.reject(e)}}function s(e){var t,n=this;if(!n.triggered){n.triggered=!0,n.def&&(n=n.def);try{(t=u(e))?a((function(){var r=new p(n);try{t.call(e,(function(){s.apply(r,arguments)}),(function(){d.apply(r,arguments)}))}catch(e){d.call(r,e)}})):(n.msg=e,n.state=1,n.chain.length>0&&a(l,n))}catch(e){d.call(new p(n),e)}}}function d(e){var t=this;t.triggered||(t.triggered=!0,t.def&&(t=t.def),t.msg=e,t.state=2,t.chain.length>0&&a(l,t))}function h(e,t,n,r){for(var o=0;o<t.length;o++)!function(o){e.resolve(t[o]).then((function(e){n(o,e)}),r)}(o)}function p(e){this.def=e,this.triggered=!1}function v(e){this.promise=e,this.state=0,this.triggered=!1,this.chain=[],this.msg=void 0}function m(e){if("function"!=typeof e)throw TypeError("Not a function");if(0!==this.__NPO__)throw TypeError("Not a promise");this.__NPO__=1;var t=new v(this);this.then=function(e,n){var r={success:"function"!=typeof e||e,failure:"function"==typeof n&&n};return r.promise=new this.constructor((function(e,t){if("function"!=typeof e||"function"!=typeof t)throw TypeError("Not a function");r.resolve=e,r.reject=t})),t.chain.push(r),0!==t.state&&a(l,t),r.promise},this.catch=function(e){return this.then(void 0,e)};try{e.call(void 0,(function(e){s.call(t,e)}),(function(e){d.call(t,e)}))}catch(e){d.call(t,e)}}o=function(){var e,t,n;function o(e,t){this.fn=e,this.self=t,this.next=void 0}return{add:function(r,i){n=new o(r,i),t?t.next=n:e=n,t=n,n=void 0},drain:function(){var n=e;for(e=t=r=void 0;n;)n.fn.call(n.self),n=n.next}}}();var y=t({},"constructor",m,!1);return m.prototype=y,t(y,"__NPO__",0,!1),t(m,"resolve",(function(e){return e&&"object"==typeof e&&1===e.__NPO__?e:new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");t(e)}))})),t(m,"reject",(function(e){return new this((function(t,n){if("function"!=typeof t||"function"!=typeof n)throw TypeError("Not a function");n(e)}))})),t(m,"all",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):0===e.length?t.resolve([]):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");var o=e.length,i=Array(o),c=0;h(t,e,(function(e,t){i[e]=t,++c===o&&n(i)}),r)}))})),t(m,"race",(function(e){var t=this;return"[object Array]"!=i.call(e)?t.reject(TypeError("Not an array")):new t((function(n,r){if("function"!=typeof n||"function"!=typeof r)throw TypeError("Not a function");h(t,e,(function(e,t){n(t)}),r)}))})),m},(o=l)[r="Promise"]=o[r]||i(),t.exports&&(t.exports=o[r])},f(s={exports:{}},s.exports),new WeakMap;var d=["autopause","autoplay","background","byline","color","controls","dnt","height","id","interactive_params","keyboard","loop","maxheight","maxwidth","muted","playsinline","portrait","responsive","speed","texttrack","title","transparent","url","width"];function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return d.reduce((function(t,n){var r=e.getAttribute("data-vimeo-".concat(n));return(r||""===r)&&(t[n]=""===r?1:r),t}),t)}function p(e,t){var n=e.html;if(!t)throw new TypeError("An element must be provided");if(null!==t.getAttribute("data-vimeo-initialized"))return t.querySelector("iframe");var r=document.createElement("div");return r.innerHTML=n,t.appendChild(r.firstChild),t.setAttribute("data-vimeo-initialized","true"),t.querySelector("iframe")}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return new Promise((function(r,o){if(!i(e))throw new TypeError("“".concat(e,"” is not a vimeo.com url."));var c="https://vimeo.com/api/oembed.json?url=".concat(encodeURIComponent(e));for(var a in t)t.hasOwnProperty(a)&&(c+="&".concat(a,"=").concat(encodeURIComponent(t[a])));var u="XDomainRequest"in window?new XDomainRequest:new XMLHttpRequest;u.open("GET",c,!0),u.onload=function(){if(404!==u.status)if(403!==u.status)try{var t=JSON.parse(u.responseText);if(403===t.domain_status_code)return p(t,n),void o(new Error("“".concat(e,"” is not embeddable.")));r(t)}catch(e){o(e)}else o(new Error("“".concat(e,"” is not embeddable.")));else o(new Error("“".concat(e,"” was not found.")))},u.onerror=function(){var e=u.status?" (".concat(u.status,")"):"";o(new Error("There was an error fetching the embed code from Vimeo".concat(e,".")))},u.send()}))}new WeakMap,new WeakMap;r||(function(){var e=function(){for(var e,t=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],n=0,r=t.length,o={};n<r;n++)if((e=t[n])&&e[1]in document){for(n=0;n<e.length;n++)o[t[0][n]]=e[n];return o}return!1}(),t={fullscreenchange:e.fullscreenchange,fullscreenerror:e.fullscreenerror},n={request:function(t){return new Promise((function(r,o){var i=function e(){n.off("fullscreenchange",e),r()};n.on("fullscreenchange",i);var c=(t=t||document.documentElement)[e.requestFullscreen]();c instanceof Promise&&c.then(i).catch(o)}))},exit:function(){return new Promise((function(t,r){if(n.isFullscreen){var o=function e(){n.off("fullscreenchange",e),t()};n.on("fullscreenchange",o);var i=document[e.exitFullscreen]();i instanceof Promise&&i.then(o).catch(r)}else t()}))},on:function(e,n){var r=t[e];r&&document.addEventListener(r,n)},off:function(e,n){var r=t[e];r&&document.removeEventListener(r,n)}};return Object.defineProperties(n,{isFullscreen:{get:function(){return Boolean(document[e.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[e.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[e.fullscreenEnabled])}}}),n}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document,t=[].slice.call(e.querySelectorAll("[data-vimeo-id], [data-vimeo-url]")),n=function(e){"console"in window&&console.error&&console.error("There was an error creating an embed: ".concat(e))};t.forEach((function(e){try{if(null!==e.getAttribute("data-vimeo-defer"))return;var t=h(e);v(c(t),t,e).then((function(t){return p(t,e)})).catch(n)}catch(e){n(e)}}))}(),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;if(!window.VimeoPlayerResizeEmbeds_){window.VimeoPlayerResizeEmbeds_=!0;var t=function(t){if(i(t.origin)&&t.data&&"spacechange"===t.data.event)for(var n=e.querySelectorAll("iframe"),r=0;r<n.length;r++)if(n[r].contentWindow===t.source){n[r].parentElement.style.paddingBottom="".concat(t.data.data[0].bottom,"px");break}};window.addEventListener("message",t)}}());var m,y="Expected a function",w=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,E=/^0o[0-7]+$/i,T=parseInt,_="object"==typeof t&&t&&t.Object===Object&&t,j="object"==typeof self&&self&&self.Object===Object&&self,k=_||j||Function("return this")(),F=Object.prototype.toString,S=Math.max,O=Math.min,x=function(){return k.Date.now()};function P(e,t,n){var r,o,i,c,a,u,l=0,f=!1,s=!1,d=!0;if("function"!=typeof e)throw new TypeError(y);function h(t){var n=r,i=o;return r=o=void 0,l=t,c=e.apply(i,n)}function p(e){return l=e,a=setTimeout(m,t),f?h(e):c}function v(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=i}function m(){var e=x();if(v(e))return w(e);a=setTimeout(m,function(e){var n=t-(e-u);return s?O(n,i-(e-l)):n}(e))}function w(e){return a=void 0,d&&r?h(e):(r=o=void 0,c)}function g(){var e=x(),n=v(e);if(r=arguments,o=this,u=e,n){if(void 0===a)return p(u);if(s)return a=setTimeout(m,t),h(u)}return void 0===a&&(a=setTimeout(m,t)),c}return t=M(t)||0,N(n)&&(f=!!n.leading,i=(s="maxWait"in n)?S(M(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),g.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=u=o=a=void 0},g.flush=function(){return void 0===a?c:w(x())},g}function N(t){var r=void 0===t?"undefined":e(n)(t);return!!t&&("object"==r||"function"==r)}function M(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(n)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==F.call(t)}(t))return NaN;if(N(t)){var r="function"==typeof t.valueOf?t.valueOf():t;t=N(r)?r+"":r}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(w,"");var o=b.test(t);return o||E.test(t)?T(t.slice(2),o?2:8):g.test(t)?NaN:+t}m=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(y);return N(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),P(e,t,{leading:r,maxWait:t,trailing:o})};var q=document.querySelector("iframe"),A=new Vimeo.Player(q),R=JSON.parse(localStorage.getItem("videoplayer-current-time"));function W(e){localStorage.setItem("videoplayer-current-time",JSON.stringify(e))}A.on("timeupdate",e(m)(W,1e3)),R&&A.setCurrentTime(R.seconds).then((function(e){})).catch((function(e){"RangeError"===e.name?console.log("Error: the time was less than 0 or greater than the video’s duration"):console.log("Unknown error")}))}();
//# sourceMappingURL=02-video.c019669b.js.map
