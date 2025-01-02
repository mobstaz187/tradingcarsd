import{r as E,a as ue,d as me,R as B,S as ge,e as he,c as ee,m as M,b as ve,f as Z,g as be,h as X,i as we}from"./vendor-CgSct-zA.js";import{c as Ee}from"./ui-B-dksMZM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function s(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=s(o);fetch(o.href,l)}})();var te={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe=E,Ce=Symbol.for("react.element"),ye=Symbol.for("react.fragment"),Se=Object.prototype.hasOwnProperty,_e=xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Le={key:!0,ref:!0,__self:!0,__source:!0};function ae(t,e,s){var a,o={},l=null,u=null;s!==void 0&&(l=""+s),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(u=e.ref);for(a in e)Se.call(e,a)&&!Le.hasOwnProperty(a)&&(o[a]=e[a]);if(t&&t.defaultProps)for(a in e=t.defaultProps,e)o[a]===void 0&&(o[a]=e[a]);return{$$typeof:Ce,type:t,key:l,ref:u,props:o,_owner:_e.current}}W.Fragment=ye;W.jsx=ae;W.jsxs=ae;te.exports=W;var O=te.exports,Y={},K=ue;Y.createRoot=K.createRoot,Y.hydrateRoot=K.hydrateRoot;const ie=["eventsPrefix","injectStyles","injectStylesUrls","modules","init","_direction","oneWayMovement","swiperElementNodeName","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","breakpointsBase","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_loop","loopAdditionalSlides","loopAddBlankSlides","loopPreventsSliding","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideActiveClass","slideVisibleClass","slideFullyVisibleClass","slideNextClass","slidePrevClass","slideBlankClass","wrapperClass","lazyPreloaderClass","lazyPreloadPrevNext","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom","control"];function D(t){return typeof t=="object"&&t!==null&&t.constructor&&Object.prototype.toString.call(t).slice(8,-1)==="Object"&&!t.__swiper__}function H(t,e){const s=["__proto__","constructor","prototype"];Object.keys(e).filter(a=>s.indexOf(a)<0).forEach(a=>{typeof t[a]>"u"?t[a]=e[a]:D(e[a])&&D(t[a])&&Object.keys(e[a]).length>0?e[a].__swiper__?t[a]=e[a]:H(t[a],e[a]):t[a]=e[a]})}function ne(t){return t===void 0&&(t={}),t.navigation&&typeof t.navigation.nextEl>"u"&&typeof t.navigation.prevEl>"u"}function se(t){return t===void 0&&(t={}),t.pagination&&typeof t.pagination.el>"u"}function re(t){return t===void 0&&(t={}),t.scrollbar&&typeof t.scrollbar.el>"u"}function le(t){t===void 0&&(t="");const e=t.split(" ").map(a=>a.trim()).filter(a=>!!a),s=[];return e.forEach(a=>{s.indexOf(a)<0&&s.push(a)}),s.join(" ")}function Oe(t){return t===void 0&&(t=""),t?t.includes("swiper-wrapper")?t:`swiper-wrapper ${t}`:"swiper-wrapper"}function $e(t){let{swiper:e,slides:s,passedParams:a,changedParams:o,nextEl:l,prevEl:u,scrollbarEl:v,paginationEl:r}=t;const C=o.filter(p=>p!=="children"&&p!=="direction"&&p!=="wrapperClass"),{params:c,pagination:g,navigation:x,scrollbar:P,virtual:m,thumbs:h}=e;let w,d,i,n,f,b,L,y;o.includes("thumbs")&&a.thumbs&&a.thumbs.swiper&&!a.thumbs.swiper.destroyed&&c.thumbs&&(!c.thumbs.swiper||c.thumbs.swiper.destroyed)&&(w=!0),o.includes("controller")&&a.controller&&a.controller.control&&c.controller&&!c.controller.control&&(d=!0),o.includes("pagination")&&a.pagination&&(a.pagination.el||r)&&(c.pagination||c.pagination===!1)&&g&&!g.el&&(i=!0),o.includes("scrollbar")&&a.scrollbar&&(a.scrollbar.el||v)&&(c.scrollbar||c.scrollbar===!1)&&P&&!P.el&&(n=!0),o.includes("navigation")&&a.navigation&&(a.navigation.prevEl||u)&&(a.navigation.nextEl||l)&&(c.navigation||c.navigation===!1)&&x&&!x.prevEl&&!x.nextEl&&(f=!0);const N=p=>{e[p]&&(e[p].destroy(),p==="navigation"?(e.isElement&&(e[p].prevEl.remove(),e[p].nextEl.remove()),c[p].prevEl=void 0,c[p].nextEl=void 0,e[p].prevEl=void 0,e[p].nextEl=void 0):(e.isElement&&e[p].el.remove(),c[p].el=void 0,e[p].el=void 0))};o.includes("loop")&&e.isElement&&(c.loop&&!a.loop?b=!0:!c.loop&&a.loop?L=!0:y=!0),C.forEach(p=>{if(D(c[p])&&D(a[p]))Object.assign(c[p],a[p]),(p==="navigation"||p==="pagination"||p==="scrollbar")&&"enabled"in a[p]&&!a[p].enabled&&N(p);else{const R=a[p];(R===!0||R===!1)&&(p==="navigation"||p==="pagination"||p==="scrollbar")?R===!1&&N(p):c[p]=a[p]}}),C.includes("controller")&&!d&&e.controller&&e.controller.control&&c.controller&&c.controller.control&&(e.controller.control=c.controller.control),o.includes("children")&&s&&m&&c.virtual.enabled?(m.slides=s,m.update(!0)):o.includes("virtual")&&m&&c.virtual.enabled&&(s&&(m.slides=s),m.update(!0)),o.includes("children")&&s&&c.loop&&(y=!0),w&&h.init()&&h.update(!0),d&&(e.controller.control=c.controller.control),i&&(e.isElement&&(!r||typeof r=="string")&&(r=document.createElement("div"),r.classList.add("swiper-pagination"),r.part.add("pagination"),e.el.appendChild(r)),r&&(c.pagination.el=r),g.init(),g.render(),g.update()),n&&(e.isElement&&(!v||typeof v=="string")&&(v=document.createElement("div"),v.classList.add("swiper-scrollbar"),v.part.add("scrollbar"),e.el.appendChild(v)),v&&(c.scrollbar.el=v),P.init(),P.updateSize(),P.setTranslate()),f&&(e.isElement&&((!l||typeof l=="string")&&(l=document.createElement("div"),l.classList.add("swiper-button-next"),l.innerHTML=e.hostEl.constructor.nextButtonSvg,l.part.add("button-next"),e.el.appendChild(l)),(!u||typeof u=="string")&&(u=document.createElement("div"),u.classList.add("swiper-button-prev"),u.innerHTML=e.hostEl.constructor.prevButtonSvg,u.part.add("button-prev"),e.el.appendChild(u))),l&&(c.navigation.nextEl=l),u&&(c.navigation.prevEl=u),x.init(),x.update()),o.includes("allowSlideNext")&&(e.allowSlideNext=a.allowSlideNext),o.includes("allowSlidePrev")&&(e.allowSlidePrev=a.allowSlidePrev),o.includes("direction")&&e.changeDirection(a.direction,!1),(b||y)&&e.loopDestroy(),(L||y)&&e.loopCreate(),e.update()}function Pe(t,e){t===void 0&&(t={}),e===void 0&&(e=!0);const s={on:{}},a={},o={};H(s,me),s._emitClasses=!0,s.init=!1;const l={},u=ie.map(r=>r.replace(/_/,"")),v=Object.assign({},t);return Object.keys(v).forEach(r=>{typeof t[r]>"u"||(u.indexOf(r)>=0?D(t[r])?(s[r]={},o[r]={},H(s[r],t[r]),H(o[r],t[r])):(s[r]=t[r],o[r]=t[r]):r.search(/on[A-Z]/)===0&&typeof t[r]=="function"?e?a[`${r[2].toLowerCase()}${r.substr(3)}`]=t[r]:s.on[`${r[2].toLowerCase()}${r.substr(3)}`]=t[r]:l[r]=t[r])}),["navigation","pagination","scrollbar"].forEach(r=>{s[r]===!0&&(s[r]={}),s[r]===!1&&delete s[r]}),{params:s,passedParams:o,rest:l,events:a}}function Ne(t,e){let{el:s,nextEl:a,prevEl:o,paginationEl:l,scrollbarEl:u,swiper:v}=t;ne(e)&&a&&o&&(v.params.navigation.nextEl=a,v.originalParams.navigation.nextEl=a,v.params.navigation.prevEl=o,v.originalParams.navigation.prevEl=o),se(e)&&l&&(v.params.pagination.el=l,v.originalParams.pagination.el=l),re(e)&&u&&(v.params.scrollbar.el=u,v.originalParams.scrollbar.el=u),v.init(s)}function Re(t,e,s,a,o){const l=[];if(!e)return l;const u=r=>{l.indexOf(r)<0&&l.push(r)};if(s&&a){const r=a.map(o),C=s.map(o);r.join("")!==C.join("")&&u("children"),a.length!==s.length&&u("children")}return ie.filter(r=>r[0]==="_").map(r=>r.replace(/_/,"")).forEach(r=>{if(r in t&&r in e)if(D(t[r])&&D(e[r])){const C=Object.keys(t[r]),c=Object.keys(e[r]);C.length!==c.length?u(r):(C.forEach(g=>{t[r][g]!==e[r][g]&&u(r)}),c.forEach(g=>{t[r][g]!==e[r][g]&&u(r)}))}else t[r]!==e[r]&&u(r)}),l}const je=t=>{!t||t.destroyed||!t.params.virtual||t.params.virtual&&!t.params.virtual.enabled||(t.updateSlides(),t.updateProgress(),t.updateSlidesClasses(),t.parallax&&t.params.parallax&&t.params.parallax.enabled&&t.parallax.setTranslate())};function U(){return U=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var s=arguments[e];for(var a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a])}return t},U.apply(this,arguments)}function oe(t){return t.type&&t.type.displayName&&t.type.displayName.includes("SwiperSlide")}function ce(t){const e=[];return B.Children.toArray(t).forEach(s=>{oe(s)?e.push(s):s.props&&s.props.children&&ce(s.props.children).forEach(a=>e.push(a))}),e}function Be(t){const e=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]};return B.Children.toArray(t).forEach(a=>{if(oe(a))e.push(a);else if(a.props&&a.props.slot&&s[a.props.slot])s[a.props.slot].push(a);else if(a.props&&a.props.children){const o=ce(a.props.children);o.length>0?o.forEach(l=>e.push(l)):s["container-end"].push(a)}else s["container-end"].push(a)}),{slides:e,slots:s}}function Me(t,e,s){if(!s)return null;const a=c=>{let g=c;return c<0?g=e.length+c:g>=e.length&&(g=g-e.length),g},o=t.isHorizontal()?{[t.rtlTranslate?"right":"left"]:`${s.offset}px`}:{top:`${s.offset}px`},{from:l,to:u}=s,v=t.params.loop?-e.length:0,r=t.params.loop?e.length*2:e.length,C=[];for(let c=v;c<r;c+=1)c>=l&&c<=u&&C.push(e[a(c)]);return C.map((c,g)=>B.cloneElement(c,{swiper:t,style:o,key:c.props.virtualIndex||c.key||`slide-${g}`}))}function V(t,e){return typeof window>"u"?E.useEffect(t,e):E.useLayoutEffect(t,e)}const J=E.createContext(null),Ae=E.createContext(null),de=E.forwardRef(function(t,e){let{className:s,tag:a="div",wrapperTag:o="div",children:l,onSwiper:u,...v}=t===void 0?{}:t,r=!1;const[C,c]=E.useState("swiper"),[g,x]=E.useState(null),[P,m]=E.useState(!1),h=E.useRef(!1),w=E.useRef(null),d=E.useRef(null),i=E.useRef(null),n=E.useRef(null),f=E.useRef(null),b=E.useRef(null),L=E.useRef(null),y=E.useRef(null),{params:N,passedParams:p,rest:R,events:S}=Pe(v),{slides:A,slots:_}=Be(l),$=()=>{m(!P)};Object.assign(N.on,{_containerClasses(z,I){c(I)}});const j=()=>{Object.assign(N.on,S),r=!0;const z={...N};if(delete z.wrapperClass,d.current=new ge(z),d.current.virtual&&d.current.params.virtual.enabled){d.current.virtual.slides=A;const I={cache:!1,slides:A,renderExternal:x,renderExternalUpdate:!1};H(d.current.params.virtual,I),H(d.current.originalParams.virtual,I)}};w.current||j(),d.current&&d.current.on("_beforeBreakpoint",$);const T=()=>{r||!S||!d.current||Object.keys(S).forEach(z=>{d.current.on(z,S[z])})},q=()=>{!S||!d.current||Object.keys(S).forEach(z=>{d.current.off(z,S[z])})};E.useEffect(()=>()=>{d.current&&d.current.off("_beforeBreakpoint",$)}),E.useEffect(()=>{!h.current&&d.current&&(d.current.emitSlidesClasses(),h.current=!0)}),V(()=>{if(e&&(e.current=w.current),!!w.current)return d.current.destroyed&&j(),Ne({el:w.current,nextEl:f.current,prevEl:b.current,paginationEl:L.current,scrollbarEl:y.current,swiper:d.current},N),u&&!d.current.destroyed&&u(d.current),()=>{d.current&&!d.current.destroyed&&d.current.destroy(!0,!1)}},[]),V(()=>{T();const z=Re(p,i.current,A,n.current,I=>I.key);return i.current=p,n.current=A,z.length&&d.current&&!d.current.destroyed&&$e({swiper:d.current,slides:A,passedParams:p,changedParams:z,nextEl:f.current,prevEl:b.current,scrollbarEl:y.current,paginationEl:L.current}),()=>{q()}}),V(()=>{je(d.current)},[g]);function F(){return N.virtual?Me(d.current,A,g):A.map((z,I)=>B.cloneElement(z,{swiper:d.current,swiperSlideIndex:I}))}return B.createElement(a,U({ref:w,className:le(`${C}${s?` ${s}`:""}`)},R),B.createElement(Ae.Provider,{value:d.current},_["container-start"],B.createElement(o,{className:Oe(N.wrapperClass)},_["wrapper-start"],F(),_["wrapper-end"]),ne(N)&&B.createElement(B.Fragment,null,B.createElement("div",{ref:b,className:"swiper-button-prev"}),B.createElement("div",{ref:f,className:"swiper-button-next"})),re(N)&&B.createElement("div",{ref:y,className:"swiper-scrollbar"}),se(N)&&B.createElement("div",{ref:L,className:"swiper-pagination"}),_["container-end"]))});de.displayName="Swiper";const fe=E.forwardRef(function(t,e){let{tag:s="div",children:a,className:o="",swiper:l,zoom:u,lazy:v,virtualIndex:r,swiperSlideIndex:C,...c}=t===void 0?{}:t;const g=E.useRef(null),[x,P]=E.useState("swiper-slide"),[m,h]=E.useState(!1);function w(f,b,L){b===g.current&&P(L)}V(()=>{if(typeof C<"u"&&(g.current.swiperSlideIndex=C),e&&(e.current=g.current),!(!g.current||!l)){if(l.destroyed){x!=="swiper-slide"&&P("swiper-slide");return}return l.on("_slideClass",w),()=>{l&&l.off("_slideClass",w)}}}),V(()=>{l&&g.current&&!l.destroyed&&P(l.getSlideClasses(g.current))},[l]);const d={isActive:x.indexOf("swiper-slide-active")>=0,isVisible:x.indexOf("swiper-slide-visible")>=0,isPrev:x.indexOf("swiper-slide-prev")>=0,isNext:x.indexOf("swiper-slide-next")>=0},i=()=>typeof a=="function"?a(d):a,n=()=>{h(!0)};return B.createElement(s,U({ref:g,className:le(`${x}${o?` ${o}`:""}`),"data-swiper-slide-index":r,onLoad:n},c),u&&B.createElement(J.Provider,{value:d},B.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":typeof u=="number"?u:void 0},i(),v&&!m&&B.createElement("div",{className:"swiper-lazy-preloader"}))),!u&&B.createElement(J.Provider,{value:d},i(),v&&!m&&B.createElement("div",{className:"swiper-lazy-preloader"})))});fe.displayName="SwiperSlide";function pe(t,e,s,a){return t.params.createElements&&Object.keys(a).forEach(o=>{if(!s[o]&&s.auto===!0){let l=he(t.el,`.${a[o]}`)[0];l||(l=ee("div",a[o]),l.className=a[o],t.el.append(l)),s[o]=l,e[o]=l}}),s}function ze(t){let{swiper:e,extendParams:s,on:a,emit:o}=t;s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),e.navigation={nextEl:null,prevEl:null};function l(m){let h;return m&&typeof m=="string"&&e.isElement&&(h=e.el.querySelector(m)||e.hostEl.querySelector(m),h)?h:(m&&(typeof m=="string"&&(h=[...document.querySelectorAll(m)]),e.params.uniqueNavElements&&typeof m=="string"&&h&&h.length>1&&e.el.querySelectorAll(m).length===1?h=e.el.querySelector(m):h&&h.length===1&&(h=h[0])),m&&!h?m:h)}function u(m,h){const w=e.params.navigation;m=M(m),m.forEach(d=>{d&&(d.classList[h?"add":"remove"](...w.disabledClass.split(" ")),d.tagName==="BUTTON"&&(d.disabled=h),e.params.watchOverflow&&e.enabled&&d.classList[e.isLocked?"add":"remove"](w.lockClass))})}function v(){const{nextEl:m,prevEl:h}=e.navigation;if(e.params.loop){u(h,!1),u(m,!1);return}u(h,e.isBeginning&&!e.params.rewind),u(m,e.isEnd&&!e.params.rewind)}function r(m){m.preventDefault(),!(e.isBeginning&&!e.params.loop&&!e.params.rewind)&&(e.slidePrev(),o("navigationPrev"))}function C(m){m.preventDefault(),!(e.isEnd&&!e.params.loop&&!e.params.rewind)&&(e.slideNext(),o("navigationNext"))}function c(){const m=e.params.navigation;if(e.params.navigation=pe(e,e.originalParams.navigation,e.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!(m.nextEl||m.prevEl))return;let h=l(m.nextEl),w=l(m.prevEl);Object.assign(e.navigation,{nextEl:h,prevEl:w}),h=M(h),w=M(w);const d=(i,n)=>{i&&i.addEventListener("click",n==="next"?C:r),!e.enabled&&i&&i.classList.add(...m.lockClass.split(" "))};h.forEach(i=>d(i,"next")),w.forEach(i=>d(i,"prev"))}function g(){let{nextEl:m,prevEl:h}=e.navigation;m=M(m),h=M(h);const w=(d,i)=>{d.removeEventListener("click",i==="next"?C:r),d.classList.remove(...e.params.navigation.disabledClass.split(" "))};m.forEach(d=>w(d,"next")),h.forEach(d=>w(d,"prev"))}a("init",()=>{e.params.navigation.enabled===!1?P():(c(),v())}),a("toEdge fromEdge lock unlock",()=>{v()}),a("destroy",()=>{g()}),a("enable disable",()=>{let{nextEl:m,prevEl:h}=e.navigation;if(m=M(m),h=M(h),e.enabled){v();return}[...m,...h].filter(w=>!!w).forEach(w=>w.classList.add(e.params.navigation.lockClass))}),a("click",(m,h)=>{let{nextEl:w,prevEl:d}=e.navigation;w=M(w),d=M(d);const i=h.target;let n=d.includes(i)||w.includes(i);if(e.isElement&&!n){const f=h.path||h.composedPath&&h.composedPath();f&&(n=f.find(b=>w.includes(b)||d.includes(b)))}if(e.params.navigation.hideOnClick&&!n){if(e.pagination&&e.params.pagination&&e.params.pagination.clickable&&(e.pagination.el===i||e.pagination.el.contains(i)))return;let f;w.length?f=w[0].classList.contains(e.params.navigation.hiddenClass):d.length&&(f=d[0].classList.contains(e.params.navigation.hiddenClass)),o(f===!0?"navigationShow":"navigationHide"),[...w,...d].filter(b=>!!b).forEach(b=>b.classList.toggle(e.params.navigation.hiddenClass))}});const x=()=>{e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")),c(),v()},P=()=>{e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")),g()};Object.assign(e.navigation,{enable:x,disable:P,update:v,init:c,destroy:g})}function G(t){return t===void 0&&(t=""),`.${t.trim().replace(/([\.:!+\/])/g,"\\$1").replace(/ /g,".")}`}function Te(t){let{swiper:e,extendParams:s,on:a,emit:o}=t;const l="swiper-pagination";s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:i=>i,formatFractionTotal:i=>i,bulletClass:`${l}-bullet`,bulletActiveClass:`${l}-bullet-active`,modifierClass:`${l}-`,currentClass:`${l}-current`,totalClass:`${l}-total`,hiddenClass:`${l}-hidden`,progressbarFillClass:`${l}-progressbar-fill`,progressbarOppositeClass:`${l}-progressbar-opposite`,clickableClass:`${l}-clickable`,lockClass:`${l}-lock`,horizontalClass:`${l}-horizontal`,verticalClass:`${l}-vertical`,paginationDisabledClass:`${l}-disabled`}}),e.pagination={el:null,bullets:[]};let u,v=0;function r(){return!e.params.pagination.el||!e.pagination.el||Array.isArray(e.pagination.el)&&e.pagination.el.length===0}function C(i,n){const{bulletActiveClass:f}=e.params.pagination;i&&(i=i[`${n==="prev"?"previous":"next"}ElementSibling`],i&&(i.classList.add(`${f}-${n}`),i=i[`${n==="prev"?"previous":"next"}ElementSibling`],i&&i.classList.add(`${f}-${n}-${n}`)))}function c(i,n,f){if(i=i%f,n=n%f,n===i+1)return"next";if(n===i-1)return"previous"}function g(i){const n=i.target.closest(G(e.params.pagination.bulletClass));if(!n)return;i.preventDefault();const f=Z(n)*e.params.slidesPerGroup;if(e.params.loop){if(e.realIndex===f)return;const b=c(e.realIndex,f,e.slides.length);b==="next"?e.slideNext():b==="previous"?e.slidePrev():e.slideToLoop(f)}else e.slideTo(f)}function x(){const i=e.rtl,n=e.params.pagination;if(r())return;let f=e.pagination.el;f=M(f);let b,L;const y=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.slides.length,N=e.params.loop?Math.ceil(y/e.params.slidesPerGroup):e.snapGrid.length;if(e.params.loop?(L=e.previousRealIndex||0,b=e.params.slidesPerGroup>1?Math.floor(e.realIndex/e.params.slidesPerGroup):e.realIndex):typeof e.snapIndex<"u"?(b=e.snapIndex,L=e.previousSnapIndex):(L=e.previousIndex||0,b=e.activeIndex||0),n.type==="bullets"&&e.pagination.bullets&&e.pagination.bullets.length>0){const p=e.pagination.bullets;let R,S,A;if(n.dynamicBullets&&(u=ve(p[0],e.isHorizontal()?"width":"height"),f.forEach(_=>{_.style[e.isHorizontal()?"width":"height"]=`${u*(n.dynamicMainBullets+4)}px`}),n.dynamicMainBullets>1&&L!==void 0&&(v+=b-(L||0),v>n.dynamicMainBullets-1?v=n.dynamicMainBullets-1:v<0&&(v=0)),R=Math.max(b-v,0),S=R+(Math.min(p.length,n.dynamicMainBullets)-1),A=(S+R)/2),p.forEach(_=>{const $=[...["","-next","-next-next","-prev","-prev-prev","-main"].map(j=>`${n.bulletActiveClass}${j}`)].map(j=>typeof j=="string"&&j.includes(" ")?j.split(" "):j).flat();_.classList.remove(...$)}),f.length>1)p.forEach(_=>{const $=Z(_);$===b?_.classList.add(...n.bulletActiveClass.split(" ")):e.isElement&&_.setAttribute("part","bullet"),n.dynamicBullets&&($>=R&&$<=S&&_.classList.add(...`${n.bulletActiveClass}-main`.split(" ")),$===R&&C(_,"prev"),$===S&&C(_,"next"))});else{const _=p[b];if(_&&_.classList.add(...n.bulletActiveClass.split(" ")),e.isElement&&p.forEach(($,j)=>{$.setAttribute("part",j===b?"bullet-active":"bullet")}),n.dynamicBullets){const $=p[R],j=p[S];for(let T=R;T<=S;T+=1)p[T]&&p[T].classList.add(...`${n.bulletActiveClass}-main`.split(" "));C($,"prev"),C(j,"next")}}if(n.dynamicBullets){const _=Math.min(p.length,n.dynamicMainBullets+4),$=(u*_-u)/2-A*u,j=i?"right":"left";p.forEach(T=>{T.style[e.isHorizontal()?j:"top"]=`${$}px`})}}f.forEach((p,R)=>{if(n.type==="fraction"&&(p.querySelectorAll(G(n.currentClass)).forEach(S=>{S.textContent=n.formatFractionCurrent(b+1)}),p.querySelectorAll(G(n.totalClass)).forEach(S=>{S.textContent=n.formatFractionTotal(N)})),n.type==="progressbar"){let S;n.progressbarOpposite?S=e.isHorizontal()?"vertical":"horizontal":S=e.isHorizontal()?"horizontal":"vertical";const A=(b+1)/N;let _=1,$=1;S==="horizontal"?_=A:$=A,p.querySelectorAll(G(n.progressbarFillClass)).forEach(j=>{j.style.transform=`translate3d(0,0,0) scaleX(${_}) scaleY(${$})`,j.style.transitionDuration=`${e.params.speed}ms`})}n.type==="custom"&&n.renderCustom?(p.innerHTML=n.renderCustom(e,b+1,N),R===0&&o("paginationRender",p)):(R===0&&o("paginationRender",p),o("paginationUpdate",p)),e.params.watchOverflow&&e.enabled&&p.classList[e.isLocked?"add":"remove"](n.lockClass)})}function P(){const i=e.params.pagination;if(r())return;const n=e.virtual&&e.params.virtual.enabled?e.virtual.slides.length:e.grid&&e.params.grid.rows>1?e.slides.length/Math.ceil(e.params.grid.rows):e.slides.length;let f=e.pagination.el;f=M(f);let b="";if(i.type==="bullets"){let L=e.params.loop?Math.ceil(n/e.params.slidesPerGroup):e.snapGrid.length;e.params.freeMode&&e.params.freeMode.enabled&&L>n&&(L=n);for(let y=0;y<L;y+=1)i.renderBullet?b+=i.renderBullet.call(e,y,i.bulletClass):b+=`<${i.bulletElement} ${e.isElement?'part="bullet"':""} class="${i.bulletClass}"></${i.bulletElement}>`}i.type==="fraction"&&(i.renderFraction?b=i.renderFraction.call(e,i.currentClass,i.totalClass):b=`<span class="${i.currentClass}"></span> / <span class="${i.totalClass}"></span>`),i.type==="progressbar"&&(i.renderProgressbar?b=i.renderProgressbar.call(e,i.progressbarFillClass):b=`<span class="${i.progressbarFillClass}"></span>`),e.pagination.bullets=[],f.forEach(L=>{i.type!=="custom"&&(L.innerHTML=b||""),i.type==="bullets"&&e.pagination.bullets.push(...L.querySelectorAll(G(i.bulletClass)))}),i.type!=="custom"&&o("paginationRender",f[0])}function m(){e.params.pagination=pe(e,e.originalParams.pagination,e.params.pagination,{el:"swiper-pagination"});const i=e.params.pagination;if(!i.el)return;let n;typeof i.el=="string"&&e.isElement&&(n=e.el.querySelector(i.el)),!n&&typeof i.el=="string"&&(n=[...document.querySelectorAll(i.el)]),n||(n=i.el),!(!n||n.length===0)&&(e.params.uniqueNavElements&&typeof i.el=="string"&&Array.isArray(n)&&n.length>1&&(n=[...e.el.querySelectorAll(i.el)],n.length>1&&(n=n.filter(f=>be(f,".swiper")[0]===e.el)[0])),Array.isArray(n)&&n.length===1&&(n=n[0]),Object.assign(e.pagination,{el:n}),n=M(n),n.forEach(f=>{i.type==="bullets"&&i.clickable&&f.classList.add(...(i.clickableClass||"").split(" ")),f.classList.add(i.modifierClass+i.type),f.classList.add(e.isHorizontal()?i.horizontalClass:i.verticalClass),i.type==="bullets"&&i.dynamicBullets&&(f.classList.add(`${i.modifierClass}${i.type}-dynamic`),v=0,i.dynamicMainBullets<1&&(i.dynamicMainBullets=1)),i.type==="progressbar"&&i.progressbarOpposite&&f.classList.add(i.progressbarOppositeClass),i.clickable&&f.addEventListener("click",g),e.enabled||f.classList.add(i.lockClass)}))}function h(){const i=e.params.pagination;if(r())return;let n=e.pagination.el;n&&(n=M(n),n.forEach(f=>{f.classList.remove(i.hiddenClass),f.classList.remove(i.modifierClass+i.type),f.classList.remove(e.isHorizontal()?i.horizontalClass:i.verticalClass),i.clickable&&(f.classList.remove(...(i.clickableClass||"").split(" ")),f.removeEventListener("click",g))})),e.pagination.bullets&&e.pagination.bullets.forEach(f=>f.classList.remove(...i.bulletActiveClass.split(" ")))}a("changeDirection",()=>{if(!e.pagination||!e.pagination.el)return;const i=e.params.pagination;let{el:n}=e.pagination;n=M(n),n.forEach(f=>{f.classList.remove(i.horizontalClass,i.verticalClass),f.classList.add(e.isHorizontal()?i.horizontalClass:i.verticalClass)})}),a("init",()=>{e.params.pagination.enabled===!1?d():(m(),P(),x())}),a("activeIndexChange",()=>{typeof e.snapIndex>"u"&&x()}),a("snapIndexChange",()=>{x()}),a("snapGridLengthChange",()=>{P(),x()}),a("destroy",()=>{h()}),a("enable disable",()=>{let{el:i}=e.pagination;i&&(i=M(i),i.forEach(n=>n.classList[e.enabled?"remove":"add"](e.params.pagination.lockClass)))}),a("lock unlock",()=>{x()}),a("click",(i,n)=>{const f=n.target,b=M(e.pagination.el);if(e.params.pagination.el&&e.params.pagination.hideOnClick&&b&&b.length>0&&!f.classList.contains(e.params.pagination.bulletClass)){if(e.navigation&&(e.navigation.nextEl&&f===e.navigation.nextEl||e.navigation.prevEl&&f===e.navigation.prevEl))return;const L=b[0].classList.contains(e.params.pagination.hiddenClass);o(L===!0?"paginationShow":"paginationHide"),b.forEach(y=>y.classList.toggle(e.params.pagination.hiddenClass))}});const w=()=>{e.el.classList.remove(e.params.pagination.paginationDisabledClass);let{el:i}=e.pagination;i&&(i=M(i),i.forEach(n=>n.classList.remove(e.params.pagination.paginationDisabledClass))),m(),P(),x()},d=()=>{e.el.classList.add(e.params.pagination.paginationDisabledClass);let{el:i}=e.pagination;i&&(i=M(i),i.forEach(n=>n.classList.add(e.params.pagination.paginationDisabledClass))),h()};Object.assign(e.pagination,{enable:w,disable:d,render:P,update:x,init:m,destroy:h})}function Ie(t){const{effect:e,swiper:s,on:a,setTranslate:o,setTransition:l,overwriteParams:u,perspective:v,recreateShadows:r,getEffectParams:C}=t;a("beforeInit",()=>{if(s.params.effect!==e)return;s.classNames.push(`${s.params.containerModifierClass}${e}`),v&&v()&&s.classNames.push(`${s.params.containerModifierClass}3d`);const g=u?u():{};Object.assign(s.params,g),Object.assign(s.originalParams,g)}),a("setTranslate",()=>{s.params.effect===e&&o()}),a("setTransition",(g,x)=>{s.params.effect===e&&l(x)}),a("transitionEnd",()=>{if(s.params.effect===e&&r){if(!C||!C().slideShadows)return;s.slides.forEach(g=>{g.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(x=>x.remove())}),r()}});let c;a("virtualUpdate",()=>{s.params.effect===e&&(s.slides.length||(c=!0),requestAnimationFrame(()=>{c&&s.slides&&s.slides.length&&(o(),c=!1)}))})}function De(t,e){const s=X(e);return s!==e&&(s.style.backfaceVisibility="hidden",s.style["-webkit-backface-visibility"]="hidden"),s}function Q(t,e,s){const a=`swiper-slide-shadow${s?`-${s}`:""}${` swiper-slide-shadow-${t}`}`,o=X(e);let l=o.querySelector(`.${a.split(" ").join(".")}`);return l||(l=ee("div",a.split(" ")),o.append(l)),l}function qe(t){let{swiper:e,extendParams:s,on:a}=t;s({coverflowEffect:{rotate:50,stretch:0,depth:100,scale:1,modifier:1,slideShadows:!0}}),Ie({effect:"coverflow",swiper:e,on:a,setTranslate:()=>{const{width:u,height:v,slides:r,slidesSizesGrid:C}=e,c=e.params.coverflowEffect,g=e.isHorizontal(),x=e.translate,P=g?-x+u/2:-x+v/2,m=g?c.rotate:-c.rotate,h=c.depth,w=we(e);for(let d=0,i=r.length;d<i;d+=1){const n=r[d],f=C[d],b=n.swiperSlideOffset,L=(P-b-f/2)/f,y=typeof c.modifier=="function"?c.modifier(L):L*c.modifier;let N=g?m*y:0,p=g?0:m*y,R=-h*Math.abs(y),S=c.stretch;typeof S=="string"&&S.indexOf("%")!==-1&&(S=parseFloat(c.stretch)/100*f);let A=g?0:S*y,_=g?S*y:0,$=1-(1-c.scale)*Math.abs(y);Math.abs(_)<.001&&(_=0),Math.abs(A)<.001&&(A=0),Math.abs(R)<.001&&(R=0),Math.abs(N)<.001&&(N=0),Math.abs(p)<.001&&(p=0),Math.abs($)<.001&&($=0);const j=`translate3d(${_}px,${A}px,${R}px)  rotateX(${w(p)}deg) rotateY(${w(N)}deg) scale(${$})`,T=De(c,n);if(T.style.transform=j,n.style.zIndex=-Math.abs(Math.round(y))+1,c.slideShadows){let q=g?n.querySelector(".swiper-slide-shadow-left"):n.querySelector(".swiper-slide-shadow-top"),F=g?n.querySelector(".swiper-slide-shadow-right"):n.querySelector(".swiper-slide-shadow-bottom");q||(q=Q("coverflow",n,g?"left":"top")),F||(F=Q("coverflow",n,g?"right":"bottom")),q&&(q.style.opacity=y>0?y:0),F&&(F.style.opacity=-y>0?-y:0)}}},setTransition:u=>{e.slides.map(r=>X(r)).forEach(r=>{r.style.transitionDuration=`${u}ms`,r.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(C=>{C.style.transitionDuration=`${u}ms`})})},perspective:()=>!0,overwriteParams:()=>({watchSlidesProgress:!0})})}function Fe({title:t,titleId:e,...s},a){return E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},s),t?E.createElement("title",{id:e},t):null,E.createElement("path",{fillRule:"evenodd",d:"M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z",clipRule:"evenodd"}))}const He=E.forwardRef(Fe);function Ge({title:t,titleId:e,...s},a){return E.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:a,"aria-labelledby":e},s),t?E.createElement("title",{id:e},t):null,E.createElement("path",{fillRule:"evenodd",d:"M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z",clipRule:"evenodd"}))}const Ve=E.forwardRef(Ge),Ue={common:"bg-gray-500",uncommon:"bg-green-500",rare:"bg-blue-500",legendary:"bg-purple-500"},We=({card:t})=>O.jsxs("div",{className:"relative w-[300px] h-[400px] rounded-xl overflow-hidden shadow-xl transform transition-transform hover:scale-105",children:[O.jsx("img",{src:t.image,alt:t.name,className:"w-full h-full object-cover"}),O.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/70 to-transparent",children:O.jsxs("div",{className:"absolute bottom-0 w-full p-4 text-white",children:[O.jsxs("div",{className:"flex justify-between items-center mb-2",children:[O.jsx("h3",{className:"text-xl font-bold",children:t.name}),O.jsx("span",{className:Ee("px-2 py-1 rounded-full text-xs font-semibold",Ue[t.rarity]),children:t.rarity})]}),O.jsxs("div",{className:"flex justify-between mt-2",children:[O.jsxs("div",{className:"flex items-center",children:[O.jsx(He,{className:"w-5 h-5 text-red-500 mr-1"}),O.jsx("span",{children:t.attack})]}),O.jsxs("div",{className:"flex items-center",children:[O.jsx(Ve,{className:"w-5 h-5 text-blue-500 mr-1"}),O.jsx("span",{children:t.defense})]})]})]})})]}),Ye=[{id:1,name:"Dragon Knight",image:"https://picsum.photos/300/400?random=1",rarity:"legendary",attack:8,defense:7},{id:2,name:"Forest Sprite",image:"https://picsum.photos/300/400?random=2",rarity:"uncommon",attack:4,defense:3},{id:3,name:"Stone Golem",image:"https://picsum.photos/300/400?random=3",rarity:"rare",attack:6,defense:8},{id:4,name:"Shadow Assassin",image:"https://picsum.photos/300/400?random=4",rarity:"rare",attack:7,defense:4},{id:5,name:"Mystic Wizard",image:"https://picsum.photos/300/400?random=5",rarity:"legendary",attack:9,defense:5}],Xe=()=>O.jsx("div",{className:"w-full py-12",children:O.jsx(de,{modules:[qe,Te,ze],effect:"coverflow",grabCursor:!0,centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1,slideShadows:!0},pagination:{clickable:!0},navigation:!0,children:Ye.map(t=>O.jsx(fe,{className:"w-auto flex justify-center",children:O.jsx(We,{card:t})},t.id))})});function Ze(){return O.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-8",children:O.jsxs("div",{className:"container mx-auto px-4",children:[O.jsx("h1",{className:"text-4xl font-bold text-center text-white mb-8",children:"Trading Cards Collection"}),O.jsx(Xe,{})]})})}const k=document.getElementById("root");k&&Y.createRoot(k).render(O.jsx(B.StrictMode,{children:O.jsx(Ze,{})}));
//# sourceMappingURL=index-CJxhn5Pb.js.map
