/*! For license information please see form.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/studios-secret-garden/assets/imgs/header.png":(e,r,t)=>{t.r(r),t.d(r,{default:()=>o});const o=t.p+"assets/imgs/header.png"}},r={};function t(o){var a=r[o];if(void 0!==a)return a.exports;var n=r[o]={exports:{}};return e[o](n,n.exports,t),n.exports}t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var r=t.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var o=r.getElementsByTagName("script");if(o.length)for(var a=o.length-1;a>-1&&!e;)e=o[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e+"../"})();var o={};(()=>{t.r(o);var e=t("./src/studios-secret-garden/assets/imgs/header.png");$(document).ready((function(){console.log("form.js"),document.getElementById("logo_header").src=e.default,$("#form").submit((function(e){e.preventDefault();var r=$("#email").val();r.includes("lopes.com.br")||r.includes("cyrela.com.br")||r.includes("sellerassociados.com.br")?$.ajax({url:"https://bleskim.com/".concat("studios-secret-garden","/php/cadastro.php"),type:"POST",contentType:"application/x-www-form-urlencoded;charset=utf-8",data:{email:$("#email").val(),identificacao:$('input[name="radiobtn"]:checked').val()},success:function(e){e.response>=0?window.location.href="?user=".concat(e.response,"#live"):alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")}}):alert("E-mail inválido. Entre em contato com a organização do evento.")}))}))})()})();
//# sourceMappingURL=form.js.map