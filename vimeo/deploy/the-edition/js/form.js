/*! For license information please see form.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/the-edition/assets/imgs/fundo.png":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/imgs/fundo.png"},"./src/the-edition/assets/imgs/logo.jpg":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/imgs/logo.jpg"}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,o),a.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})();var r={};(()=>{o.r(r);var e=o("./src/the-edition/assets/imgs/logo.jpg"),t=o("./src/the-edition/assets/imgs/fundo.png");document.body.style.backgroundImage='url("'.concat(t.default,'")');$(document).ready((function(){document.getElementById("logo_header").src=e.default,$("#form").submit((function(e){e.preventDefault();$("#email").val();$.ajax({url:"https://bleskim.com/".concat("the-edition","/php/cadastro.php"),type:"POST",contentType:"application/x-www-form-urlencoded;charset=utf-8",data:{nome:$("#nome").val(),email:$("#email").val()},success:function(e){console.log(e),e.response>=0?window.location.href="?user=".concat(e.response,"#live"):alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")}})}))}))})()})();
//# sourceMappingURL=form.js.map