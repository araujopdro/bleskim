/*! For license information please see form.js.LICENSE.txt */
(()=>{"use strict";var e={"./src/homeboutiqueanaliafranco/assets/imgs/efeito.png":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/imgs/efeito.png"},"./src/homeboutiqueanaliafranco/assets/imgs/header.png":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/imgs/header.png"},"./src/homeboutiqueanaliafranco/assets/imgs/rodape.png":(e,t,o)=>{o.r(t),o.d(t,{default:()=>r});const r=o.p+"assets/imgs/rodape.png"}},t={};function o(r){var a=t[r];if(void 0!==a)return a.exports;var n=t[r]={exports:{}};return e[r](n,n.exports,o),n.exports}o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var a=r.length-1;a>-1&&!e;)e=r[a--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e+"../"})();var r={};(()=>{o.r(r);var e=o("./src/homeboutiqueanaliafranco/assets/imgs/header.png"),t=o("./src/homeboutiqueanaliafranco/assets/imgs/efeito.png"),a=o("./src/homeboutiqueanaliafranco/assets/imgs/rodape.png");$(document).ready((function(){console.log("form.js"),document.getElementById("logo_header").src=e.default,document.getElementById("efeito_form").src=t.default,document.getElementById("rodape").src=a.default,$("#form").submit((function(e){e.preventDefault();$("#email").val();$.ajax({url:"https://bleskim.com/".concat("homeboutiqueanaliafranco","/php/cadastro.php"),type:"POST",contentType:"application/x-www-form-urlencoded;charset=utf-8",data:{email:$("#email").val(),identificacao:$('input[name="radiobtn"]:checked').val()},success:function(e){e.response>=0?window.location.href="?user=".concat(e.response,"#live"):alert("Erro no cadastro do e-mail, entre em contato com a organização do evento.")}})}))}))})()})();
//# sourceMappingURL=form.js.map