/*! For license information please see form.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/full-vila-olimpia/assets/imgs/fundo.jpg":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=r.p+"assets/imgs/fundo.jpg"},"./src/full-vila-olimpia/assets/imgs/living.png":(e,t,r)=>{r.r(t),r.d(t,{default:()=>o});const o=r.p+"assets/imgs/living.png"}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,r),i.exports}r.d=(e,t)=>{for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"})();var o={};(()=>{r.r(o);var e=r("./src/full-vila-olimpia/assets/imgs/living.png"),t=r("./src/full-vila-olimpia/assets/imgs/fundo.jpg");document.body.style.backgroundImage='url("'.concat(t.default,'")'),$(document).ready((function(){document.getElementById("logo_header").src=e.default,$("#form").submit((function(e){e.preventDefault();$("#email").val();$.ajax({url:"https://bleskim.com/".concat("full-vila-olimpia","/php/cadastro.php"),type:"POST",contentType:"application/x-www-form-urlencoded;charset=utf-8",data:{email:$("#email").val(),identificacao:$('input[name="radiobtn"]:checked').val()},success:function(e){e.response>=0?window.location.href="?user=".concat(e.response,"#live"):alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")}})}))}))})()})();
//# sourceMappingURL=form.js.map