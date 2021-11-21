/*! For license information please see style.bunde.js.LICENSE.txt */
(()=>{"use strict";var t={337:(t,n,e)=>{t.exports=e.p+"3fb981855a9654e2a176.gif"}},n={};function e(a){var r=n[a];if(void 0!==r)return r.exports;var i=n[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var a=n.getElementsByTagName("script");a.length&&(t=a[a.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),(()=>{function t(n){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(n)}function n(e){return n="function"==typeof Symbol&&"symbol"===t(Symbol.iterator)?function(n){return t(n)}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":t(n)},n(e)}function a(t,n){for(var e=0;e<n.length;e++){var a=n[e];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},a=Object.keys(e);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),a.forEach((function(n){r(t,n,e[n])}))}return t}function o(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=[],a=!0,r=!1,i=void 0;try{for(var o,c=t[Symbol.iterator]();!(a=(o=c.next()).done)&&(e.push(o.value),!n||e.length!==n);a=!0);}catch(t){r=!0,i=t}finally{try{a||null==c.return||c.return()}finally{if(r)throw i}}return e}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var c=function(){},s={},f={},l=null,u={mark:c,measure:c};try{"undefined"!=typeof window&&(s=window),"undefined"!=typeof document&&(f=document),"undefined"!=typeof MutationObserver&&(l=MutationObserver),"undefined"!=typeof performance&&(u=performance)}catch(t){}var m=(s.navigator||{}).userAgent,d=void 0===m?"":m,p=s,h=f,g=l,v=u,b=(p.document,!!h.documentElement&&!!h.head&&"function"==typeof h.addEventListener&&"function"==typeof h.createElement),y=~d.indexOf("MSIE")||~d.indexOf("Trident/"),w="svg-inline--fa",x="data-fa-i2svg",k="data-fa-pseudo-element",_="fontawesome-i2svg",A=["HTML","HEAD","STYLE","SCRIPT"],O=function(){try{return!0}catch(t){return!1}}(),M={fas:"solid",far:"regular",fal:"light",fad:"duotone",fab:"brands",fak:"kit",fa:"solid"},S={solid:"fas",regular:"far",light:"fal",duotone:"fad",brands:"fab",kit:"fak"},E="fa-layers-text",N=/Font Awesome ([5 ]*)(Solid|Regular|Light|Duotone|Brands|Free|Pro|Kit).*/i,C={900:"fas",400:"far",normal:"far",300:"fal"},P=[1,2,3,4,5,6,7,8,9,10],z=P.concat([11,12,13,14,15,16,17,18,19,20]),T=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],I={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},j=["xs","sm","lg","fw","ul","li","border","pull-left","pull-right","spin","pulse","rotate-90","rotate-180","rotate-270","flip-horizontal","flip-vertical","flip-both","stack","stack-1x","stack-2x","inverse","layers","layers-text","layers-counter",I.GROUP,I.SWAP_OPACITY,I.PRIMARY,I.SECONDARY].concat(P.map((function(t){return"".concat(t,"x")}))).concat(z.map((function(t){return"w-".concat(t)}))),L=p.FontAwesomeConfig||{};h&&"function"==typeof h.querySelector&&[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach((function(t){var n=o(t,2),e=n[0],a=n[1],r=function(t){return""===t||"false"!==t&&("true"===t||t)}(function(t){var n=h.querySelector("script["+t+"]");if(n)return n.getAttribute(t)}(e));null!=r&&(L[a]=r)}));var R=i({},{familyPrefix:"fa",replacementClass:w,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},L);R.autoReplaceSvg||(R.observeMutations=!1);var F=i({},R);p.FontAwesomeConfig=F;var D=p||{};D.___FONT_AWESOME___||(D.___FONT_AWESOME___={}),D.___FONT_AWESOME___.styles||(D.___FONT_AWESOME___.styles={}),D.___FONT_AWESOME___.hooks||(D.___FONT_AWESOME___.hooks={}),D.___FONT_AWESOME___.shims||(D.___FONT_AWESOME___.shims=[]);var Y=D.___FONT_AWESOME___,W=[],H=!1;function B(t){b&&(H?setTimeout(t,0):W.push(t))}b&&((H=(h.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(h.readyState))||h.addEventListener("DOMContentLoaded",(function t(){h.removeEventListener("DOMContentLoaded",t),H=1,W.map((function(t){return t()}))})));var X,U="pending",q="settled",V="fulfilled",G="rejected",K=function(){},$=void 0!==e.g&&void 0!==e.g.process&&"function"==typeof e.g.process.emit,J="undefined"==typeof setImmediate?setTimeout:setImmediate,Q=[];function Z(){for(var t=0;t<Q.length;t++)Q[t][0](Q[t][1]);Q=[],X=!1}function tt(t,n){Q.push([t,n]),X||(X=!0,J(Z,0))}function nt(t){var n=t.owner,e=n._state,a=n._data,r=t[e],i=t.then;if("function"==typeof r){e=V;try{a=r(a)}catch(t){it(i,t)}}et(i,a)||(e===V&&at(i,a),e===G&&it(i,a))}function et(t,e){var a;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&("function"==typeof e||"object"===n(e))){var r=e.then;if("function"==typeof r)return r.call(e,(function(n){a||(a=!0,e===n?rt(t,n):at(t,n))}),(function(n){a||(a=!0,it(t,n))})),!0}}catch(n){return a||it(t,n),!0}return!1}function at(t,n){t!==n&&et(t,n)||rt(t,n)}function rt(t,n){t._state===U&&(t._state=q,t._data=n,tt(ct,t))}function it(t,n){t._state===U&&(t._state=q,t._data=n,tt(st,t))}function ot(t){t._then=t._then.forEach(nt)}function ct(t){t._state=V,ot(t)}function st(t){t._state=G,ot(t),!t._handled&&$&&e.g.process.emit("unhandledRejection",t._data,t)}function ft(t){e.g.process.emit("rejectionHandled",t)}function lt(t){if("function"!=typeof t)throw new TypeError("Promise resolver "+t+" is not a function");if(this instanceof lt==0)throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],function(t,n){function e(t){it(n,t)}try{t((function(t){at(n,t)}),e)}catch(t){e(t)}}(t,this)}lt.prototype={constructor:lt,_state:U,_then:null,_data:void 0,_handled:!1,then:function(t,n){var e={owner:this,then:new this.constructor(K),fulfilled:t,rejected:n};return!n&&!t||this._handled||(this._handled=!0,this._state===G&&$&&tt(ft,this)),this._state===V||this._state===G?tt(nt,e):this._then.push(e),e.then},catch:function(t){return this.then(null,t)}},lt.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new lt((function(n,e){var a=[],r=0;function i(t){return r++,function(e){a[t]=e,--r||n(a)}}for(var o,c=0;c<t.length;c++)(o=t[c])&&"function"==typeof o.then?o.then(i(c),e):a[c]=o;r||n(a)}))},lt.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new lt((function(n,e){for(var a,r=0;r<t.length;r++)(a=t[r])&&"function"==typeof a.then?a.then(n,e):n(a)}))},lt.resolve=function(t){return t&&"object"===n(t)&&t.constructor===lt?t:new lt((function(n){n(t)}))},lt.reject=function(t){return new lt((function(n,e){e(t)}))};var ut="function"==typeof Promise?Promise:lt,mt=16,dt={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function pt(t){if(t&&b){var n=h.createElement("style");n.setAttribute("type","text/css"),n.innerHTML=t;for(var e=h.head.childNodes,a=null,r=e.length-1;r>-1;r--){var i=e[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(a=i)}return h.head.insertBefore(n,a),t}}function ht(){for(var t=12,n="";t-- >0;)n+="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"[62*Math.random()|0];return n}function gt(t){for(var n=[],e=(t||[]).length>>>0;e--;)n[e]=t[e];return n}function vt(t){return t.classList?gt(t.classList):(t.getAttribute("class")||"").split(" ").filter((function(t){return t}))}function bt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function yt(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,": ").concat(t[e],";")}),"")}function wt(t){return t.size!==dt.size||t.x!==dt.x||t.y!==dt.y||t.rotate!==dt.rotate||t.flipX||t.flipY}function xt(t){var n=t.transform,e=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(e/2," 256)")},i="translate(".concat(32*n.x,", ").concat(32*n.y,") "),o="scale(".concat(n.size/16*(n.flipX?-1:1),", ").concat(n.size/16*(n.flipY?-1:1),") "),c="rotate(".concat(n.rotate," 0 0)");return{outer:r,inner:{transform:"".concat(i," ").concat(o," ").concat(c)},path:{transform:"translate(".concat(a/2*-1," -256)")}}}var kt={x:0,y:0,width:"100%",height:"100%"};function _t(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t.attributes&&(t.attributes.fill||n)&&(t.attributes.fill="black"),t}function At(t){var n=t.icons,e=n.main,a=n.mask,r=t.prefix,o=t.iconName,c=t.transform,s=t.symbol,f=t.title,l=t.maskId,u=t.titleId,m=t.extra,d=t.watchable,p=void 0!==d&&d,h=a.found?a:e,g=h.width,v=h.height,b="fak"===r,y=b?"":"fa-w-".concat(Math.ceil(g/v*16)),w=[F.replacementClass,o?"".concat(F.familyPrefix,"-").concat(o):"",y].filter((function(t){return-1===m.classes.indexOf(t)})).filter((function(t){return""!==t||!!t})).concat(m.classes).join(" "),k={children:[],attributes:i({},m.attributes,{"data-prefix":r,"data-icon":o,class:w,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(g," ").concat(v)})},_=b&&!~m.classes.indexOf("fa-fw")?{width:"".concat(g/v*16*.0625,"em")}:{};p&&(k.attributes[x]=""),f&&k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(u||ht())},children:[f]});var A=i({},k,{prefix:r,iconName:o,main:e,mask:a,maskId:l,transform:c,symbol:s,styles:i({},_,m.styles)}),O=a.found&&e.found?function(t){var n,e=t.children,a=t.attributes,r=t.main,o=t.mask,c=t.maskId,s=t.transform,f=r.width,l=r.icon,u=o.width,m=o.icon,d=xt({transform:s,containerWidth:u,iconWidth:f}),p={tag:"rect",attributes:i({},kt,{fill:"white"})},h=l.children?{children:l.children.map(_t)}:{},g={tag:"g",attributes:i({},d.inner),children:[_t(i({tag:l.tag,attributes:i({},l.attributes,d.path)},h))]},v={tag:"g",attributes:i({},d.outer),children:[g]},b="mask-".concat(c||ht()),y="clip-".concat(c||ht()),w={tag:"mask",attributes:i({},kt,{id:b,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[p,v]},x={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:(n=m,"g"===n.tag?n.children:[n])},w]};return e.push(x,{tag:"rect",attributes:i({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(b,")")},kt)}),{children:e,attributes:a}}(A):function(t){var n=t.children,e=t.attributes,a=t.main,r=t.transform,o=yt(t.styles);if(o.length>0&&(e.style=o),wt(r)){var c=xt({transform:r,containerWidth:a.width,iconWidth:a.width});n.push({tag:"g",attributes:i({},c.outer),children:[{tag:"g",attributes:i({},c.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:i({},a.icon.attributes,c.path)}]}]})}else n.push(a.icon);return{children:n,attributes:e}}(A),M=O.children,S=O.attributes;return A.children=M,A.attributes=S,s?function(t){var n=t.prefix,e=t.iconName,a=t.children,r=t.attributes,o=t.symbol;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:i({},r,{id:!0===o?"".concat(n,"-").concat(F.familyPrefix,"-").concat(e):o}),children:a}]}]}(A):function(t){var n=t.children,e=t.main,a=t.mask,r=t.attributes,o=t.styles,c=t.transform;if(wt(c)&&e.found&&!a.found){var s={x:e.width/e.height/2,y:.5};r.style=yt(i({},o,{"transform-origin":"".concat(s.x+c.x/16,"em ").concat(s.y+c.y/16,"em")}))}return[{tag:"svg",attributes:r,children:n}]}(A)}function Ot(t){var n=t.content,e=t.width,a=t.height,r=t.transform,o=t.title,c=t.extra,s=t.watchable,f=void 0!==s&&s,l=i({},c.attributes,o?{title:o}:{},{class:c.classes.join(" ")});f&&(l[x]="");var u=i({},c.styles);wt(r)&&(u.transform=function(t){var n=t.transform,e=t.width,a=void 0===e?16:e,r=t.height,i=void 0===r?16:r,o=t.startCentered,c=void 0!==o&&o,s="";return s+=c&&y?"translate(".concat(n.x/mt-a/2,"em, ").concat(n.y/mt-i/2,"em) "):c?"translate(calc(-50% + ".concat(n.x/mt,"em), calc(-50% + ").concat(n.y/mt,"em)) "):"translate(".concat(n.x/mt,"em, ").concat(n.y/mt,"em) "),(s+="scale(".concat(n.size/mt*(n.flipX?-1:1),", ").concat(n.size/mt*(n.flipY?-1:1),") "))+"rotate(".concat(n.rotate,"deg) ")}({transform:r,startCentered:!0,width:e,height:a}),u["-webkit-transform"]=u.transform);var m=yt(u);m.length>0&&(l.style=m);var d=[];return d.push({tag:"span",attributes:l,children:[n]}),o&&d.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),d}var Mt=function(){},St=F.measurePerformance&&v&&v.mark&&v.measure?v:{mark:Mt,measure:Mt},Et='FA "5.15.4"',Nt=function(t){return St.mark("".concat(Et," ").concat(t," begins")),function(){return function(t){St.mark("".concat(Et," ").concat(t," ends")),St.measure("".concat(Et," ").concat(t),"".concat(Et," ").concat(t," begins"),"".concat(Et," ").concat(t," ends"))}(t)}},Ct=function(t,n,e,a){var r,i,o,c=Object.keys(t),s=c.length,f=void 0!==a?function(t,n){return function(e,a,r,i){return t.call(n,e,a,r,i)}}(n,a):n;for(void 0===e?(r=1,o=t[c[0]]):(r=0,o=e);r<s;r++)o=f(o,t[i=c[r]],i,t);return o};function Pt(t){for(var n="",e=0;e<t.length;e++)n+=("000"+t.charCodeAt(e).toString(16)).slice(-4);return n}function zt(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=e.skipHooks,r=void 0!==a&&a,o=Object.keys(n).reduce((function(t,e){var a=n[e];return a.icon?t[a.iconName]=a.icon:t[e]=a,t}),{});"function"!=typeof Y.hooks.addPack||r?Y.styles[t]=i({},Y.styles[t]||{},o):Y.hooks.addPack(t,o),"fas"===t&&zt("fa",n)}var Tt=Y.styles,It=Y.shims,jt={},Lt={},Rt={},Ft=function(){var t=function(t){return Ct(Tt,(function(n,e,a){return n[a]=Ct(e,t,{}),n}),{})};jt=t((function(t,n,e){return n[3]&&(t[n[3]]=e),t})),Lt=t((function(t,n,e){var a=n[2];return t[e]=e,a.forEach((function(n){t[n]=e})),t}));var n="far"in Tt;Rt=Ct(It,(function(t,e){var a=e[0],r=e[1],i=e[2];return"far"!==r||n||(r="fas"),t[a]={prefix:r,iconName:i},t}),{})};function Dt(t,n){return(jt[t]||{})[n]}Ft();var Yt=Y.styles;function Wt(t){return t.reduce((function(t,n){var e=function(t,n){var e,a=n.split("-"),r=a[0],i=a.slice(1).join("-");return r!==t||""===i||(e=i,~j.indexOf(e))?null:i}(F.familyPrefix,n);if(Yt[n])t.prefix=n;else if(F.autoFetchSvg&&Object.keys(M).indexOf(n)>-1)t.prefix=n;else if(e){var a="fa"===t.prefix?Rt[e]||{prefix:null,iconName:null}:{};t.iconName=a.iconName||e,t.prefix=a.prefix||t.prefix}else n!==F.replacementClass&&0!==n.indexOf("fa-w-")&&t.rest.push(n);return t}),{prefix:null,iconName:null,rest:[]})}function Ht(t){var n=t.tag,e=t.attributes,a=void 0===e?{}:e,r=t.children,i=void 0===r?[]:r;return"string"==typeof t?bt(t):"<".concat(n," ").concat(function(t){return Object.keys(t||{}).reduce((function(n,e){return n+"".concat(e,'="').concat(bt(t[e]),'" ')}),"").trim()}(a),">").concat(i.map(Ht).join(""),"</").concat(n,">")}var Bt=function(){};function Xt(t){return"string"==typeof(t.getAttribute?t.getAttribute(x):null)}var Ut={replace:function(t){var n=t[0],e=t[1].map((function(t){return Ht(t)})).join("\n");if(n.parentNode&&n.outerHTML)n.outerHTML=e+(F.keepOriginalSource&&"svg"!==n.tagName.toLowerCase()?"\x3c!-- ".concat(n.outerHTML," Font Awesome fontawesome.com --\x3e"):"");else if(n.parentNode){var a=document.createElement("span");n.parentNode.replaceChild(a,n),a.outerHTML=e}},nest:function(t){var n=t[0],e=t[1];if(~vt(n).indexOf(F.replacementClass))return Ut.replace(t);var a=new RegExp("".concat(F.familyPrefix,"-.*"));delete e[0].attributes.style,delete e[0].attributes.id;var r=e[0].attributes.class.split(" ").reduce((function(t,n){return n===F.replacementClass||n.match(a)?t.toSvg.push(n):t.toNode.push(n),t}),{toNode:[],toSvg:[]});e[0].attributes.class=r.toSvg.join(" ");var i=e.map((function(t){return Ht(t)})).join("\n");n.setAttribute("class",r.toNode.join(" ")),n.setAttribute(x,""),n.innerHTML=i}};function qt(t){t()}function Vt(t,n){var e="function"==typeof n?n:Bt;if(0===t.length)e();else{var a=qt;"async"===F.mutateApproach&&(a=p.requestAnimationFrame||qt),a((function(){var n=!0===F.autoReplaceSvg?Ut.replace:Ut[F.autoReplaceSvg]||Ut.replace,a=Nt("mutate");t.map(n),a(),e()}))}}var Gt=!1;function Kt(){Gt=!1}var $t=null;function Jt(t){if(g&&F.observeMutations){var n=t.treeCallback,e=t.nodeCallback,a=t.pseudoElementsCallback,r=t.observeMutationsRoot,i=void 0===r?h:r;$t=new g((function(t){Gt||gt(t).forEach((function(t){if("childList"===t.type&&t.addedNodes.length>0&&!Xt(t.addedNodes[0])&&(F.searchPseudoElements&&a(t.target),n(t.target)),"attributes"===t.type&&t.target.parentNode&&F.searchPseudoElements&&a(t.target.parentNode),"attributes"===t.type&&Xt(t.target)&&~T.indexOf(t.attributeName))if("class"===t.attributeName){var r=Wt(vt(t.target)),i=r.prefix,o=r.iconName;i&&t.target.setAttribute("data-prefix",i),o&&t.target.setAttribute("data-icon",o)}else e(t.target)}))})),b&&$t.observe(i,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Qt(t){var n=function(t){var n,e,a=t.getAttribute("data-prefix"),r=t.getAttribute("data-icon"),i=void 0!==t.innerText?t.innerText.trim():"",o=Wt(vt(t));return a&&r&&(o.prefix=a,o.iconName=r),o.prefix&&i.length>1?o.iconName=(n=o.prefix,e=t.innerText,(Lt[n]||{})[e]):o.prefix&&1===i.length&&(o.iconName=Dt(o.prefix,Pt(t.innerText))),o}(t),e=n.iconName,a=n.prefix,r=n.rest,i=function(t){var n=t.getAttribute("style"),e=[];return n&&(e=n.split(";").reduce((function(t,n){var e=n.split(":"),a=e[0],r=e.slice(1);return a&&r.length>0&&(t[a]=r.join(":").trim()),t}),{})),e}(t),o=function(t){return function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t?t.toLowerCase().split(" ").reduce((function(t,n){var e=n.toLowerCase().split("-"),a=e[0],r=e.slice(1).join("-");if(a&&"h"===r)return t.flipX=!0,t;if(a&&"v"===r)return t.flipY=!0,t;if(r=parseFloat(r),isNaN(r))return t;switch(a){case"grow":t.size=t.size+r;break;case"shrink":t.size=t.size-r;break;case"left":t.x=t.x-r;break;case"right":t.x=t.x+r;break;case"up":t.y=t.y-r;break;case"down":t.y=t.y+r;break;case"rotate":t.rotate=t.rotate+r}return t}),n):n}(t.getAttribute("data-fa-transform"))}(t),c=function(t){var n=t.getAttribute("data-fa-symbol");return null!==n&&(""===n||n)}(t),s=function(t){var n=gt(t.attributes).reduce((function(t,n){return"class"!==t.name&&"style"!==t.name&&(t[n.name]=n.value),t}),{}),e=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return F.autoA11y&&(e?n["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(a||ht()):(n["aria-hidden"]="true",n.focusable="false")),n}(t),f=function(t){var n=t.getAttribute("data-fa-mask");return n?Wt(n.split(" ").map((function(t){return t.trim()}))):{prefix:null,iconName:null,rest:[]}}(t);return{iconName:e,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:o,symbol:c,mask:f,maskId:t.getAttribute("data-fa-mask-id"),extra:{classes:r,styles:i,attributes:s}}}function Zt(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=(new Error).stack}Zt.prototype=Object.create(Error.prototype),Zt.prototype.constructor=Zt;var tn={fill:"currentColor"},nn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"},en={tag:"path",attributes:i({},tn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})},an=i({},nn,{attributeName:"opacity"}),rn={tag:"g",children:[en,{tag:"circle",attributes:i({},tn,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:i({},nn,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:i({},an,{values:"1;0;1;1;0;1;"})}]},{tag:"path",attributes:i({},tn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:i({},an,{values:"1;0;0;0;0;1;"})}]},{tag:"path",attributes:i({},tn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:i({},an,{values:"0;0;1;1;0;0;"})}]}]},on=Y.styles;function cn(t){var n=t[0],e=t[1],a=o(t.slice(4),1)[0];return{found:!0,width:n,height:e,icon:Array.isArray(a)?{tag:"g",attributes:{class:"".concat(F.familyPrefix,"-").concat(I.GROUP)},children:[{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(I.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(F.familyPrefix,"-").concat(I.PRIMARY),fill:"currentColor",d:a[1]}}]}:{tag:"path",attributes:{fill:"currentColor",d:a}}}}function sn(t,n){return new ut((function(e,a){var r={found:!1,width:512,height:512,icon:rn};if(t&&n&&on[n]&&on[n][t])return e(cn(on[n][t]));t&&n&&!F.showMissingIcons?a(new Zt("Icon is missing for prefix ".concat(n," with icon name ").concat(t))):e(r)}))}var fn=Y.styles;function ln(t){var n=Qt(t);return~n.extra.classes.indexOf(E)?function(t,n){var e=n.title,a=n.transform,r=n.extra,i=null,o=null;if(y){var c=parseInt(getComputedStyle(t).fontSize,10),s=t.getBoundingClientRect();i=s.width/c,o=s.height/c}return F.autoA11y&&!e&&(r.attributes["aria-hidden"]="true"),ut.resolve([t,Ot({content:t.innerHTML,width:i,height:o,transform:a,title:e,extra:r,watchable:!0})])}(t,n):function(t,n){var e=n.iconName,a=n.title,r=n.titleId,i=n.prefix,c=n.transform,s=n.symbol,f=n.mask,l=n.maskId,u=n.extra;return new ut((function(n,m){ut.all([sn(e,i),sn(f.iconName,f.prefix)]).then((function(f){var m=o(f,2),d=m[0],p=m[1];n([t,At({icons:{main:d,mask:p},prefix:i,iconName:e,transform:c,symbol:s,mask:p,maskId:l,title:a,titleId:r,extra:u,watchable:!0})])}))}))}(t,n)}function un(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(b){var e=h.documentElement.classList,a=function(t){return e.add("".concat(_,"-").concat(t))},r=function(t){return e.remove("".concat(_,"-").concat(t))},i=F.autoFetchSvg?Object.keys(M):Object.keys(fn),o=[".".concat(E,":not([").concat(x,"])")].concat(i.map((function(t){return".".concat(t,":not([").concat(x,"])")}))).join(", ");if(0!==o.length){var c=[];try{c=gt(t.querySelectorAll(o))}catch(t){}if(c.length>0){a("pending"),r("complete");var s=Nt("onTree"),f=c.reduce((function(t,n){try{var e=ln(n);e&&t.push(e)}catch(t){O||t instanceof Zt&&console.error(t)}return t}),[]);return new ut((function(t,e){ut.all(f).then((function(e){Vt(e,(function(){a("active"),a("complete"),r("pending"),"function"==typeof n&&n(),s(),t()}))})).catch((function(){s(),e()}))}))}}}}function mn(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;ln(t).then((function(t){t&&Vt([t],n)}))}function dn(t,n){var e="".concat("data-fa-pseudo-element-pending").concat(n.replace(":","-"));return new ut((function(a,r){if(null!==t.getAttribute(e))return a();var o=gt(t.children).filter((function(t){return t.getAttribute(k)===n}))[0],c=p.getComputedStyle(t,n),s=c.getPropertyValue("font-family").match(N),f=c.getPropertyValue("font-weight"),l=c.getPropertyValue("content");if(o&&!s)return t.removeChild(o),a();if(s&&"none"!==l&&""!==l){var u=c.getPropertyValue("content"),m=~["Solid","Regular","Light","Duotone","Brands","Kit"].indexOf(s[2])?S[s[2].toLowerCase()]:C[f],d=Pt(3===u.length?u.substr(1,1):u),g=Dt(m,d),v=g;if(!g||o&&o.getAttribute("data-prefix")===m&&o.getAttribute("data-icon")===v)a();else{t.setAttribute(e,v),o&&t.removeChild(o);var b={iconName:null,title:null,titleId:null,prefix:null,transform:dt,symbol:!1,mask:null,maskId:null,extra:{classes:[],styles:{},attributes:{}}},y=b.extra;y.attributes[k]=n,sn(g,m).then((function(r){var o=At(i({},b,{icons:{main:r,mask:{prefix:null,iconName:null,rest:[]}},prefix:m,iconName:v,extra:y,watchable:!0})),c=h.createElement("svg");":before"===n?t.insertBefore(c,t.firstChild):t.appendChild(c),c.outerHTML=o.map((function(t){return Ht(t)})).join("\n"),t.removeAttribute(e),a()})).catch(r)}}else a()}))}function pn(t){return ut.all([dn(t,":before"),dn(t,":after")])}function hn(t){return!(t.parentNode===document.head||~A.indexOf(t.tagName.toUpperCase())||t.getAttribute(k)||t.parentNode&&"svg"===t.parentNode.tagName)}function gn(t){if(b)return new ut((function(n,e){var a=gt(t.querySelectorAll("*")).filter(hn).map(pn),r=Nt("searchPseudoElements");Gt=!0,ut.all(a).then((function(){r(),Kt(),n()})).catch((function(){r(),Kt(),e()}))}))}function vn(){var t="fa",n=w,e=F.familyPrefix,a=F.replacementClass,r='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';if(e!==t||a!==n){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),c=new RegExp("\\.".concat(n),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(c,".".concat(a))}return r}function bn(){F.autoAddCss&&!xn&&(pt(vn()),xn=!0)}function yn(t,n){return Object.defineProperty(t,"abstract",{get:n}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map((function(t){return Ht(t)}))}}),Object.defineProperty(t,"node",{get:function(){if(b){var n=h.createElement("div");return n.innerHTML=t.html,n.children}}}),t}var wn=new(function(){function t(){!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t),this.definitions={}}var n,e;return n=t,e=[{key:"add",value:function(){for(var t=this,n=arguments.length,e=new Array(n),a=0;a<n;a++)e[a]=arguments[a];var r=e.reduce(this._pullDefinitions,{});Object.keys(r).forEach((function(n){t.definitions[n]=i({},t.definitions[n]||{},r[n]),zt(n,r[n]),Ft()}))}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(t,n){var e=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(e).map((function(n){var a=e[n],r=a.prefix,i=a.iconName,o=a.icon;t[r]||(t[r]={}),t[r][i]=o})),t}}],e&&a(n.prototype,e),t}()),xn=!1,kn={i2svg:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(b){bn();var n=t.node,e=void 0===n?h:n,a=t.callback,r=void 0===a?function(){}:a;return F.searchPseudoElements&&gn(e),un(e,r)}return ut.reject("Operation requires a DOM of some kind.")},css:vn,insertCss:function(){xn||(pt(vn()),xn=!0)},watch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.autoReplaceSvgRoot,e=t.observeMutationsRoot;!1===F.autoReplaceSvg&&(F.autoReplaceSvg=!0),F.observeMutations=!0,B((function(){An({autoReplaceSvgRoot:n}),Jt({treeCallback:un,nodeCallback:mn,pseudoElementsCallback:gn,observeMutationsRoot:e})}))}},_n=(function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=n.transform,a=void 0===e?dt:e,r=n.symbol,o=void 0!==r&&r,c=n.mask,s=void 0===c?null:c,f=n.maskId,l=void 0===f?null:f,u=n.title,m=void 0===u?null:u,d=n.titleId,p=void 0===d?null:d,h=n.classes,g=void 0===h?[]:h,v=n.attributes,b=void 0===v?{}:v,y=n.styles,w=void 0===y?{}:y;if(t){var x=t.prefix,k=t.iconName,_=t.icon;return yn(i({type:"icon"},t),(function(){return bn(),F.autoA11y&&(m?b["aria-labelledby"]="".concat(F.replacementClass,"-title-").concat(p||ht()):(b["aria-hidden"]="true",b.focusable="false")),At({icons:{main:cn(_),mask:s?cn(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:x,iconName:k,transform:i({},dt,a),symbol:o,title:m,maskId:l,titleId:p,extra:{attributes:b,styles:w,classes:g}})}))}},kn),An=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.autoReplaceSvgRoot,e=void 0===n?h:n;(Object.keys(Y.styles).length>0||F.autoFetchSvg)&&b&&F.autoReplaceSvg&&_n.i2svg({node:e})};e(337),wn.add({prefix:"fas",iconName:"check",icon:[512,512,[],"f00c","M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"]}),kn.watch()})()})();