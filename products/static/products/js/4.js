/*! For license information please see 623-81eb12e890eccbb103d3.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[623,682],{682:(t,e,r)=>{r.d(e,{r:()=>l});var a=r(5980),n=r(5191),o=r(922);const c={productAnalytics:{options:{threshold:[.2]},callback:function(t,e){var r=[];return t.forEach((function(t){if(t.isIntersecting){var c=(0,o.fr)(t.target.dataset);(0,a.y)((0,n.c)("clear")),(0,a.y)((0,n.c)("viewItemList",c)),e.unobserve(t.target),r.push(t.target.dataset)}})),r}},authorNavigation:{options:{rootMargin:"-10% 0% -85% 0%"},callback:function(t){var e=document.querySelector(".floating-bar-tabs"),r=document.querySelector(".author-tabs");t.forEach((function(t){var a=t.target.querySelector(".anchor").id;"author-intro"===a&&(t.isIntersecting?r.classList.remove("author-tabs_shadow"):r.classList.add("author-tabs_shadow")),t.isIntersecting&&e.querySelectorAll(".floating-bar-tabs-link").forEach((function(t){t.getAttribute("href")==="#".concat(a)||t.getAttribute("data-href")==="#".concat(a)?t.classList.add("floating-bar-tabs-link_active"):t.classList.remove("floating-bar-tabs-link_active")}))}))}},productNavBar:{options:{rootMargin:"-8% 0% -85% 0%"},callback:function(t){var e=document.querySelectorAll(".product-nav-bar-tabs-link"),r=document.querySelector(".floating-bar");t.forEach((function(t){var a=t.target.querySelector(".anchor").id;"tab-intro"===a&&t.isIntersecting&&r.classList.remove("floating-bar_visible"),t.isIntersecting&&e.forEach((function(t){t.getAttribute("href")==="#".concat(a)||t.getAttribute("data-href")==="#".concat(a)?(t.classList.add("product-nav-bar-tabs-link_active"),"tab-intro"!==a&&r.classList.add("floating-bar_visible")):t.classList.remove("product-nav-bar-tabs-link_active")}))}))}},serviceNavBar:{},promotionAnalytics:{options:{threshold:[.2]},callback:function(t,e){var r=[];return t.forEach((function(t){t.isIntersecting&&((0,a.y)((0,n.c)("clear")),(0,a.y)((0,n.c)("promotionView",t.target.dataset)),e.unobserve(t.target),r.push(t.target.dataset))})),r}},trackEventAnalytics:{options:{threshold:[.2]},callback:function(t,e){var r=[];return t.forEach((function(t){t.isIntersecting&&((0,a.y)((0,n.c)("trackEvent",t.target.dataset)),e.unobserve(t.target),r.push(t.target.dataset))})),r}},hideProductLicenseDropdown:{options:{threshold:[1]},callback:function(t,e){t.forEach((function(t){if(!t.isIntersecting){var e=t.target.querySelector(".cart-modal-license-button_active"),r=t.target.querySelector(".cart-modal-license-container_active");e&&e.classList.add("cart-modal-license-button_hidden-dropdown"),r&&r.classList.add("cart-modal-license-container_hidden-dropdown")}}))}},recommendedServicesAnalytics:{options:{threshold:[.2]},callback:function(t,e){var r=[];return t.forEach((function(t){if(t.isIntersecting){var o=t.target.dataset;(0,a.y)((0,n.c)("clear")),(0,a.y)((0,n.c)("viewItemList",[o])),(0,a.y)((0,n.c)("cartOffer",{eventAction:"View",eventLabel:"".concat(o.item_id," - ").concat(o.index," - ").concat(o.type)})),e.unobserve(t.target),r.push(t.target.dataset)}})),r}}};function i(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return s(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){i=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(i)throw o}}}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,a=new Array(e);r<e;r++)a[r]=t[r];return a}function l(t){if(t){var e=JSON.parse(t.getAttribute("data-visibility-observer")),r=t.querySelectorAll(e.selector),a=c[e.preset],n=a.callback,o=a.options;if(!r.length||!n||!o)return;var s,l=new IntersectionObserver(n,o),u=i(r);try{for(u.s();!(s=u.n()).done;){var d=s.value;l.observe(d)}}catch(t){u.e(t)}finally{u.f()}}}(0,r(3081).Fi)((function(){document.querySelectorAll("[data-visibility-observer]").forEach((function(t){return l(t)}))}))},1740:(t,e,r)=>{r.r(e),r.d(e,{default:()=>f});var a=r(4234),n=(r(8568),r(6943)),o=r(5980),c=r(5191),i=r(7312);function s(t){let e,r;return e=new i.Z({props:{cartTranslations:t[0],cartItems:t[1]}}),e.$on("closeCartModal",t[4]),{c(){(0,a.YCL)(e.$$.fragment)},m(t,n){(0,a.yef)(e,t,n),r=!0},p(t,r){const a={};1&r&&(a.cartTranslations=t[0]),2&r&&(a.cartItems=t[1]),e.$set(a)},i(t){r||((0,a.Ui)(e.$$.fragment,t),r=!0)},o(t){(0,a.etI)(e.$$.fragment,t),r=!1},d(t){(0,a.vpE)(e,t)}}}function l(t){let e,r,n,o,c,i,l=t[2]&&s(t);return{c(){e=(0,a.bGB)("div"),r=(0,a.DhX)(),l&&l.c(),n=(0,a.cSb)(),(0,a.Ljt)(e,"class","cart-button-modal-opener")},m(s,u){(0,a.$Tr)(s,e,u),(0,a.$Tr)(s,r,u),l&&l.m(s,u),(0,a.$Tr)(s,n,u),o=!0,c||(i=(0,a.oLt)(e,"click",t[3]),c=!0)},p(t,[e]){t[2]?l?(l.p(t,e),4&e&&(0,a.Ui)(l,1)):(l=s(t),l.c(),(0,a.Ui)(l,1),l.m(n.parentNode,n)):l&&((0,a.dvw)(),(0,a.etI)(l,1,1,(()=>{l=null})),(0,a.gbL)())},i(t){o||((0,a.Ui)(l),o=!0)},o(t){(0,a.etI)(l),o=!1},d(t){t&&(0,a.ogt)(e),t&&(0,a.ogt)(r),l&&l.d(t),t&&(0,a.ogt)(n),c=!1,i()}}}function u(t,e,r){let i,s,l;(0,a.FIv)(t,n.Z,(t=>r(5,l=t)));let{cartTranslations:u}=e;return t.$$set=t=>{"cartTranslations"in t&&r(0,u=t.cartTranslations)},t.$$.update=()=>{32&t.$$.dirty&&r(2,i=l.isCartModalOpen),32&t.$$.dirty&&r(1,s=l.cartModal.items)},[u,s,i,function(){n.Z.setIsCartModalOpen(!0),(0,o.y)((0,c.c)("openCartPopup",{label:"Open cart"}))},function(){n.Z.setIsCartModalOpen(!1)},l]}class d extends a.f_C{constructor(t){super(),(0,a.S1n)(this,t,u,l,a.N8,{cartTranslations:0})}}const f=d}}]);