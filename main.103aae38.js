parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return o(e)||r(e)||n(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function n(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function o(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}window.addEventListener("hashchange",function(){"#menu"===window.location.hash?document.body.classList.add("page__menu--stop-scrolling"):document.body.classList.remove("page__menu--stop-scrolling")});var c=document.querySelector(".form");c.addEventListener("submit",function(e){e.preventDefault(),c.reset()});var a,l=document.querySelector(".slider-line"),u=e(l.children),s=document.querySelector(".header__slider-block"),d=document.querySelector(".slider-nav__arrow--left"),f=document.querySelector(".slider-nav__arrow--right"),y=0;function m(){a=s.offsetWidth,l.style.width=a*u.length+"px",u.forEach(function(e){e.style.width=a+"px",e.style.height="auto"}),h()}function h(){l.style.transform="translate(-".concat(y*a,"px)")}u.forEach(function(e){e.style.objectFit="cover"}),m(),window.addEventListener("resize",m),f.addEventListener("click",function(e){e.preventDefault(),++y>=u.length&&(y=0),h()}),d.addEventListener("click",function(e){e.preventDefault(),--y<0&&(y=u.length-1),h()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.103aae38.js.map