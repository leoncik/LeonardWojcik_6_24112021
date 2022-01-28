!function(){"use strict";function e(e,t){var n=e.name,r=e.city,o=e.tagline,i=e.price,a=e.id,c=e.portrait,s="".concat(t,"assets/photographers/medium/").concat(c);return{name:n,picture:s,city:r,tagline:o,id:a,price:i,getUserCardDOM:function(){var e=document.createElement("article"),t=document.createElement("a");t.setAttribute("href","./pages/photographer-pages/photographer.html?id=".concat(a)),e.appendChild(t);var c=document.createElement("img");c.setAttribute("src",s),c.setAttribute("alt","Photo de profil de ".concat(n)),t.appendChild(c);var u=document.createElement("h2");u.textContent=n,t.appendChild(u);var l=document.createElement("p");l.textContent=r,l.classList.add("photographer-location"),e.appendChild(l);var d=document.createElement("p");d.textContent=o,d.classList.add("photographer-motto"),e.appendChild(d);var m=document.createElement("p");return m.textContent="".concat(i,"€/jour"),m.classList.add("photographer-pricing"),e.appendChild(m),e},getProfile:function(){var e=document.createElement("div"),t=document.querySelector(".contact-photographer"),a=document.createElement("h1");a.textContent=n,t.textContent=n,a.classList.add("photograph-header__name"),e.appendChild(a);var c=document.createElement("p");c.textContent=r,c.classList.add("photograph-header__location"),e.appendChild(c);var u=document.createElement("p");u.textContent=o,u.classList.add("photograph-header__motto"),e.appendChild(u);var l=document.createElement("img");l.setAttribute("src",s),l.setAttribute("alt","Photo de profil de ".concat(n)),l.classList.add("photograph-header__profile-picture"),document.getElementsByClassName("photographer-profile-picture")[0].appendChild(l);var d=document.createElement("span");return d.textContent="".concat(i," €/jour"),document.querySelector(".total-likes-pricing").appendChild(d),e}}}function t(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function n(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,s,"next",e)}function s(e){t(a,o,i,c,s,"throw",e)}c(void 0)}))}}function r(e){return o.apply(this,arguments)}function o(){return o=n(regeneratorRuntime.mark((function e(t){var n,r,o,i,a=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"<p>ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.</p>",r=a.length>2&&void 0!==a[2]?a[2]:"GET",o=a.length>3&&void 0!==a[3]?a[3]:{},e.prev=3,e.next=6,fetch(t,{method:r,headers:o});case 6:return i=e.sent,e.next=9,i.json();case 9:return e.abrupt("return",e.sent);case 12:e.prev=12,e.t0=e.catch(3),document.getElementsByClassName("api-error")[0].insertAdjacentHTML("beforeend",n);case 15:case"end":return e.stop()}}),e,null,[[3,12]])}))),o.apply(this,arguments)}function i(e){return a.apply(this,arguments)}function a(){return(a=n(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function c(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){c(i,r,o,a,s,"next",e)}function s(e){c(i,r,o,a,s,"throw",e)}a(void 0)}))}}function u(e){return l.apply(this,arguments)}function l(){return(l=s(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=document.querySelector(".photographer_section"),n.forEach((function(t){var n=e(t,"").getUserCardDOM();r.appendChild(n)}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(){return m.apply(this,arguments)}function m(){return(m=s(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("src/data/photographers.json");case 2:return t=e.sent,e.next=5,t.photographers;case 5:u(e.sent);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var p=function(e){document.querySelector(e).innerHTML=" "},f=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,v=document.getElementById("contact_modal"),h=document.getElementById("contact-form"),y=document.getElementById("first-name"),g=document.getElementById("last-name"),b=document.getElementById("email"),w=document.getElementById("message"),E=(document.querySelector(".submit-button"),document.querySelector(".validation-message")),x=(document.getElementsByClassName("inputform-assist"),document.querySelector("#sort-popularity-button")),L=document.querySelector("#sort-date-button"),S=document.querySelector("#sort-title-button"),k=document.getElementById("lightbox-modal"),C=document.querySelector(".previous"),A=document.querySelector(".next"),q=function(e){var t=e.querySelectorAll('[tabindex], a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), input[type="submit"]:not([disabled]), select:not([disabled])'),n=t[0],r=t[t.length-1];e.addEventListener("keydown",(function(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===n&&(r.focus(),e.preventDefault()):document.activeElement===r&&(n.focus(),e.preventDefault()))}))};function I(e){return function(e){if(Array.isArray(e))return M(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=R(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function R(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var j,B=new URL(document.location).searchParams.get("id"),P=0,_=[],H=[];function D(e){var t=e.id,n=e.price,r=e.title,o=e.date,i=e.image,a=e.video,c=e.likes,s=e.altText,u="../../assets/medias/".concat(B,"/medium/").concat(i),l="../../assets/medias/".concat(B,"/original/").concat(a),d=function(){var e,t=T(document.querySelectorAll(".like-icon"));try{var n=function(){var t=e.value,n=parseInt(t.parentElement.lastChild.textContent);t.addEventListener("click",(function(){t.classList.toggle("like-icon_active"),t.nextElementSibling.classList.toggle("liked"),"liked"===String(t.nextElementSibling.classList)?(t.setAttribute("aria-pressed","true"),t.setAttribute("title","".concat(n+1," J'aime")),t.nextElementSibling.textContent=parseInt(t.nextElementSibling.textContent)+1,P+=1,document.querySelector(".total-likes").textContent=P):(t.setAttribute("aria-pressed","false"),t.setAttribute("title","".concat(n," J'aime")),t.nextElementSibling.textContent=parseInt(t.nextElementSibling.textContent)-1,P-=1,document.querySelector(".total-likes").textContent=P)})),t.addEventListener("keydown",(function(e){"Enter"===e.key&&(t.classList.toggle("like-icon_active"),t.toggleAttribute("aria-pressed"),t.nextElementSibling.classList.toggle("liked"),"liked"===String(t.nextElementSibling.classList)?(t.setAttribute("aria-pressed","true"),t.setAttribute("title","".concat(n+1," J'aime")),t.nextElementSibling.textContent=parseInt(t.nextElementSibling.textContent)+1,P+=1,document.querySelector(".total-likes").textContent=P):(t.setAttribute("aria-pressed","false"),t.setAttribute("title","".concat(n," J'aime")),t.nextElementSibling.textContent=parseInt(t.nextElementSibling.textContent)-1,P-=1,document.querySelector(".total-likes").textContent=P))}))};for(t.s();!(e=t.n()).done;)n()}catch(e){t.e(e)}finally{t.f()}};function m(){function e(){k.style.display="block",document.body.style.overflow="hidden",document.getElementById("main").setAttribute("aria-hidden","true"),document.getElementById("lightbox-modal").setAttribute("aria-hidden","false"),n.focus(),q(k)}function t(){k.style.display="none",document.body.style.overflow="auto",document.getElementById("main").setAttribute("aria-hidden","false"),document.getElementById("lightbox-modal").setAttribute("aria-hidden","true"),x.focus()}var n=document.querySelector(".close");n.addEventListener("click",t),n.addEventListener("keydown",(function(e){"Enter"===e.key&&t()})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&"block"===k.style.display&&t()}));var r,o=function(e,t,n){var r=document.createElement(n);r.src=e,document.querySelector(".current-media").appendChild(r),document.querySelector(".current-image-title span").innerHTML=t,"video"===n&&r.setAttribute("controls","")},i=document.querySelectorAll(".photographer-medias article"),a=T(i);try{var c=function(){for(var t=r.value,n=t.querySelector(".media").src.split("/");"assets"!==n[0];)n.shift();n.splice(0,0,"..",".."),n.splice(5,1,"large"),n=n.join("/");var i=t.querySelector(".media-description h2").innerText;t.firstChild.addEventListener("click",(function(){return e(),p(".current-media"),"jpg"===n.split(".").pop()?o(n,i,"img"):"mp4"===n.split(".").pop()?o(n,i,"video"):void 0}))};for(a.s();!(r=a.n()).done;)c()}catch(e){a.e(e)}finally{a.f()}var s,u=T(i);try{var l=function(){for(var t=s.value,n=t.querySelector(".media").src.split("/");"assets"!==n[0];)n.shift();n.splice(0,0,"..",".."),n.splice(5,1,"large"),n=n.join("/");var r=t.querySelector(".media-description h2").innerText;t.firstChild.addEventListener("keydown",(function(t){if("Enter"===t.key){if(e(),p(".current-media"),"jpg"===n.split(".").pop())return o(n,r,"img");if("mp4"===n.split(".").pop())return o(n,r,"video")}}))};for(u.s();!(s=u.n()).done;)l()}catch(e){u.e(e)}finally{u.f()}}var f=function(){for(var t=document.querySelectorAll(".media-content"),n=function(n){t[n].addEventListener("click",(function(){j=e.findIndex((function(t){return t.image===e[n].image}))})),t[n].addEventListener("keydown",(function(t){"Enter"===t.key&&(j=e.findIndex((function(t){return t.image===e[n].image})))}))},r=0;r<t.length;r++)n(r)},v=function(){if("jpg"===_[j].split(".").pop()){var e=document.createElement("img");document.querySelector(".current-media").appendChild(e)}else if("mp4"===_[j].split(".").pop()){var t=document.createElement("video");document.querySelector(".current-media").appendChild(t),t.setAttribute("controls","")}},h=function(){document.querySelector(".current-media > *").src=_[j]},y=function(e){return e.map((function(e){return _=[].concat(I(_),["../../assets/medias/".concat(B,"/large/").concat(e.image||e.video)])}))},g=function(e){return e.map((function(e){return H=[].concat(I(H),["".concat(e.title)])}))},b=function(){document.querySelector(".current-image-title > *").innerText=H[j]},w=function(){_=[],H=[],j=0,y(e),f(),g(e)},E=function(e){p(".photographer-medias"),ee(e)},R=function(){d(),m(),w()},M=document.querySelector("#dropdown-input");return{id:t,price:n,title:r,date:o,image:i,video:a,likes:c,altText:s,getPhotographerData:function(){var t,n,o=document.createElement("article"),i=document.createElement("div");i.classList.add("media-content"),o.appendChild(i),t=e.image?"img":"video",(n=document.createElement(t)).setAttribute("src","img"===t?u:l),n.setAttribute("title","".concat(r,", vue rapprochée")),n.setAttribute("alt",s),n.setAttribute("role","link"),n.setAttribute("tabindex","0"),n.classList.add("media"),i.appendChild(n),"video"===t&&n.parentElement.classList.add("video-icon");var a=document.createElement("div");a.classList.add("media-description"),o.appendChild(a);var d=document.createElement("h2");d.textContent=r,a.appendChild(d);var m=document.createElement("div");m.classList.add("likes-container"),a.appendChild(m);var p=document.createElement("span");p.classList.add("like-icon"),p.innerHTML='<svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">\n        <path d="M9.5 18.35L8.23125 17.03C3.725 12.36 0.75 9.28 0.75 5.5C0.75 2.42 2.8675 0 5.5625 0C7.085 0 8.54625 0.81 9.5 2.09C10.4537 0.81 11.915 0 13.4375 0C16.1325 0 18.25 2.42 18.25 5.5C18.25 9.28 15.275 12.36 10.7688 17.04L9.5 18.35Z" fill="#911C1C"/>\n        </svg>',p.setAttribute("tabindex","0"),p.setAttribute("role","button"),p.setAttribute("aria-pressed","false"),p.setAttribute("title","".concat(c," J'aime")),m.appendChild(p);var f=document.createElement("span");return f.textContent=c,m.appendChild(f),o},likeToggler:d,findTotalLikes:function(e){var t,n=T(e);try{for(n.s();!(t=n.n()).done;){var r=t.value;P+=r.likes}}catch(e){n.e(e)}finally{n.f()}return P},lightboxDisplay:m,lightboxControls:function(t){y(t),f(),g(t);var n=function(){p(".current-media"),0===j?(j=e.length-1,v(),h(),b()):(j--,v(),h(),b())},r=function(){p(".current-media"),j===e.length-1?(j=0,v(),h(),b()):(j++,v(),h(),b())};C.addEventListener("click",n),A.addEventListener("click",r),C.addEventListener("keydown",(function(e){"Enter"===e.key&&n()})),A.addEventListener("keydown",(function(e){"Enter"===e.key&&r()})),window.addEventListener("keydown",(function(e){"ArrowLeft"===e.key&&"block"===k.style.display?n():"ArrowRight"===e.key&&"block"===k.style.display&&r()}))},getMediaIndex:f,setLightboxMedias:w,sortMedias:function(e){x.addEventListener("click",(function(){e.sort((function(e,t){return t.likes-e.likes})),E(e),R(),M.focus()})),L.addEventListener("click",(function(){e.sort((function(e,t){return new Date(e.date)-new Date(t.date)})),E(e),R(),M.focus()})),S.addEventListener("click",(function(){e.sort((function(e,t){var n=e.title.toLowerCase(),r=t.title.toLowerCase();return n<r?-1:n>r?1:0})),E(e),R(),M.focus()}))}}}function U(){function e(){v.style.display="none",document.body.style.overflow="auto",document.getElementById("main").setAttribute("aria-hidden","false"),document.getElementById("contact_modal").setAttribute("aria-hidden","true"),document.querySelector("a").focus()}var t=document.querySelector(".close-button");t.addEventListener("click",e),document.querySelector(".contact-button").addEventListener("click",(function(){v.style.display="block",document.body.style.overflow="hidden",h.style.display="block",document.getElementById("main").setAttribute("aria-hidden","true"),document.getElementById("contact_modal").setAttribute("aria-hidden","false"),t.focus(),q(v),2===E.childNodes.length&&(E.textContent=" ")})),window.addEventListener("keydown",(function(t){"Escape"===t.key&&"block"===v.style.display&&e()}))}var V=function(e,t,n){return""===e.value?(document.querySelector(".".concat(n," .error-message")).innerHTML="⚠ Veuillez saisir un ".concat(t),document.querySelector(".".concat(n," .inputform-assist")).classList.add("visible"),e.classList.add("input-error"),e.focus(),!1):e.value.length<2?(document.querySelector(".".concat(n," .error-message")).innerHTML="⚠ Votre ".concat(t," doit contenir au moins deux caractères."),document.querySelector(".".concat(n," .inputform-assist")).classList.add("visible"),e.classList.add("input-error"),e.focus(),!1):(document.querySelector(".".concat(n," .error-message")).innerHTML=" ",document.querySelector(".".concat(n," .inputform-assist")).classList.remove("visible"),e.classList.remove("input-error"),!0)},O=function(){return""===b.value?(document.querySelector(".email .error-message").innerHTML="⚠ Veuillez saisir votre courriel.",document.querySelector(".email .inputform-assist").classList.add("visible"),b.classList.add("input-error"),b.focus(),!1):b.value.match(f)?(document.querySelector(".email .error-message").innerHTML=" ",document.querySelector(".email .inputform-assist").classList.remove("visible"),b.classList.remove("input-error"),!0):(document.querySelector(".email .error-message").innerHTML="⚠ Veuillez saisir un courriel valide.",document.querySelector(".email .inputform-assist").classList.add("visible"),b.classList.add("input-error"),b.focus(),!1)},z=function(){h.addEventListener("submit",(function(e){e.preventDefault(),V(y,"prénom","first-name"),V(g,"nom","last-name"),O(),V(w,"message","message"),V(y,"prénom","first-name")&&V(g,"nom","last-name")&&O()&&V(w,"message","message")&&(console.log("Nouveau message de : ".concat(y.value," ").concat(g.value,".\n\nContenu du message : ").concat(w.value)),h.style.display="none",E.insertAdjacentHTML("afterbegin","<span class='submission-message' tabindex='0'>Votre message a bien été envoyé, merci ! Vous pouvez à présent fermer le formulaire de contact.</span>"),h.reset(),q(v),document.querySelector(".submission-message").focus())}),!1)};function J(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?N(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function $(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}function G(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){$(i,r,o,a,c,"next",e)}function c(e){$(i,r,o,a,c,"throw",e)}a(void 0)}))}}var K=new URL(document.location).searchParams,Z=parseInt(K.get("id"));function F(e){return Q.apply(this,arguments)}function Q(){return(Q=G(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.find((function(e){return parseInt(e.id)===Z})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(t){var n=document.querySelector(".photographer-info"),r=e(t,"../../").getProfile();n.appendChild(r)}function X(e){return Y.apply(this,arguments)}function Y(){return(Y=G(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.filter((function(e){return e.photographerId===Z})),e.abrupt("return",n);case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ee(e){var t=document.querySelector(".photographer-medias");e.forEach((function(e){var n=D(e).getPhotographerData();t.appendChild(n)}))}function te(e){D(e).likeToggler()}function ne(e){var t=document.querySelector(".total-likes"),n=D(e).findTotalLikes(e);t.innerHTML=n}function re(e){D(e).lightboxDisplay(),D(e).lightboxControls(e)}function oe(e){D(e).sortMedias(e)}var ie,ae=document.querySelector("#dropdown-input"),ce=document.querySelector("svg.dropdown-arrow:nth-child(2)"),se=function(){ae.addEventListener("click",(function(){var e,t=document.querySelectorAll(".sort-button:not(.active"),n=J(t);try{for(n.s();!(e=n.n()).done;)e.value.classList.toggle("wrapped")}catch(e){n.e(e)}finally{n.f()}ae.classList.toggle("dropdown-expanded"),ce.classList.toggle("dropdown-arrow"),ce.classList.toggle("dropdown-arrow_rotate"),ue(),t[t.length-1].classList.add("last-dropdown-option"),fe()}))},ue=function(){var e,t=J(de);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("last-dropdown-option")}catch(e){t.e(e)}finally{t.f()}},le=document.querySelector("#dropdown-input"),de=document.querySelectorAll(".sort-button"),me=J(de);try{var pe=function(){var e=ie.value;e.addEventListener("click",(function(){!function(){var e,t=J(de);try{for(t.s();!(e=t.n()).done;)e.value.classList.remove("active")}catch(e){t.e(e)}finally{t.f()}}(),e.classList.add("active"),le.value=e.value,function(){var e,t=J(document.querySelectorAll(".dropdown-options button:not(.active)"));try{for(t.s();!(e=t.n()).done;)e.value.classList.add("wrapped")}catch(e){t.e(e)}finally{t.f()}ae.classList.remove("dropdown-expanded"),ce.classList.toggle("dropdown-arrow"),ce.classList.toggle("dropdown-arrow_rotate"),fe()}();var t=e.id;ae.setAttribute("aria-activedescendant","".concat(t))}))};for(me.s();!(ie=me.n()).done;)pe()}catch(e){me.e(e)}finally{me.f()}var fe=function(){return ae.setAttribute("aria-expanded",ae.matches(".dropdown-expanded"))};function ve(){return he.apply(this,arguments)}function he(){return(he=G(regeneratorRuntime.mark((function e(){var t,n,r,o,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i("../../src/data/photographers.json");case 2:return t=e.sent,n=t.photographers,r=t.media,e.next=7,F(n);case 7:return o=e.sent,e.next=10,X(r);case 10:a=e.sent,W(o),ee(a),ne(a),U(),z(),re(a),te(a),oe(a),se();case 20:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(e){return void n(e)}c.done?t(s):Promise.resolve(s).then(r,o)}var ge=function(){var e,t=(e=regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=window.location.pathname.split("/").pop(),e.next=""===e.t0||"index.html"===e.t0?3:"photographer.html"===e.t0?6:9;break;case 3:return e.next=5,d();case 5:case 8:return e.abrupt("break",9);case 6:return e.next=8,ve();case 9:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){ye(i,r,o,a,c,"next",e)}function c(e){ye(i,r,o,a,c,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();ge()}();