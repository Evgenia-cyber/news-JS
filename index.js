(()=>{"use strict";var n={669:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".news__item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin: 1rem auto;\r\n    margin-bottom: 1.6%;\r\n    background: #fff;\r\n    color: #333;\r\n    line-height: 1.4;\r\n    font-family: Arial, sans-serif;\r\n    border-radius: 5px;\r\n    overflow: hidden;\r\n}\r\n\r\n.news__item:hover .news__meta-photo {\r\n    transform: scale(1.3) rotate(3deg);\r\n}\r\n\r\n.news__item .news__meta {\r\n    position: relative;\r\n    height: 200px;\r\n}\r\n\r\n.news__item .news__meta-photo {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: cover;\r\n    background-position: center;\r\n    transition: transform 0.2s;\r\n}\r\n\r\n.news__item .news__meta-details,\r\n.news__item .news__meta-details ul {\r\n    margin: auto;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\n.news__item .news__meta-details {\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: -120%;\r\n    margin: auto;\r\n    transition: left 0.2s;\r\n    background: rgba(0, 0, 0, 0.6);\r\n    color: #fff;\r\n    padding: 10px;\r\n    width: 100%;\r\n    font-size: 0.9rem;\r\n}\r\n\r\n.news__item .news__description {\r\n    padding: 1rem;\r\n    background: #fff;\r\n    position: relative;\r\n    z-index: 1;\r\n}\r\n\r\n.news__item .news__description h2 {\r\n    line-height: 1;\r\n    margin: 0;\r\n    font-size: 1.7rem;\r\n}\r\n\r\n.news__item .news__description h3 {\r\n    font-size: 1rem;\r\n    font-weight: 300;\r\n    text-transform: uppercase;\r\n    color: #a2a2a2;\r\n    margin-top: 5px;\r\n}\r\n\r\n.news__item .news__description .news__read-more {\r\n    text-align: right;\r\n}\r\n\r\n.news__item .news__description .news__read-more a {\r\n    color: #5ad67d;\r\n    display: inline-block;\r\n    position: relative;\r\n    text-decoration: none;\r\n    font-weight: 800;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:after {\r\n    content: '→';\r\n    margin-left: -10px;\r\n    opacity: 0;\r\n    vertical-align: middle;\r\n    transition: margin 0.3s, opacity 0.3s;\r\n}\r\n\r\n.news__item .news__description .news__read-more a:hover:after {\r\n    margin-left: 5px;\r\n    opacity: 1;\r\n}\r\n\r\n.news__item p {\r\n    margin: 1rem 0 0;\r\n}\r\n\r\n.news__item p:first-of-type {\r\n    margin-top: 1.25rem;\r\n    position: relative;\r\n}\r\n\r\n.news__item p:first-of-type:before {\r\n    content: '';\r\n    position: absolute;\r\n    height: 5px;\r\n    background: #5ad67d;\r\n    width: 35px;\r\n    top: -0.75rem;\r\n    border-radius: 3px;\r\n}\r\n\r\n.news__item:hover .news__meta-details {\r\n    left: 0%;\r\n}\r\n\r\n@media (min-width: 640px) {\r\n    .news__item {\r\n        flex-direction: row;\r\n        max-width: 700px;\r\n    }\r\n\r\n    .news__item .news__meta {\r\n        flex-basis: 40%;\r\n        height: auto;\r\n    }\r\n\r\n    .news__item .news__description {\r\n        flex-basis: 60%;\r\n    }\r\n\r\n    .news__item .news__description:before {\r\n        -webkit-transform: skewX(-3deg);\r\n        transform: skewX(-3deg);\r\n        content: '';\r\n        background: #fff;\r\n        width: 30px;\r\n        position: absolute;\r\n        left: -10px;\r\n        top: 0;\r\n        bottom: 0;\r\n        z-index: -1;\r\n    }\r\n\r\n    .news__item.alt {\r\n        flex-direction: row-reverse;\r\n    }\r\n\r\n    .news__item.alt .news__description:before {\r\n        left: inherit;\r\n        right: -10px;\r\n        -webkit-transform: skew(3deg);\r\n        transform: skew(3deg);\r\n    }\r\n\r\n    .news__item.alt .news__meta-details {\r\n        padding-left: 25px;\r\n    }\r\n}\r\n",""]);const i=o},501:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,".sources {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    width: 100%;\r\n    height: 120px;\r\n    overflow: auto;\r\n    align-items: center;\r\n    font: 300 1em 'Fira Sans', sans-serif;\r\n}\r\n\r\n.source__item {\r\n    background: none;\r\n    border: 2px solid #30c5ff;\r\n    font: inherit;\r\n    line-height: 1;\r\n    margin: 0.5em;\r\n    padding: 1em 2em;\r\n    color: #70d6ff;\r\n    transition: 0.25s;\r\n    cursor: pointer;\r\n}\r\n\r\n.source__item:hover {\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n\r\n.source__item:hover,\r\n.source__item:focus {\r\n    border-color: #3fcc59;\r\n    color: #69db7e;\r\n}\r\n\r\n.source__item-name {\r\n    font-weight: 400;\r\n    white-space: nowrap;\r\n}\r\n",""]);const i=o},767:(n,r,e)=>{e.d(r,{Z:()=>i});var t=e(645),o=e.n(t)()((function(n){return n[1]}));o.push([n.id,"body {\r\n    color: #fff;\r\n    background: #17181c;\r\n    font-family: sans-serif;\r\n}\r\n\r\nheader {\r\n    padding: 10px 30px;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 40px;\r\n    font-weight: 800;\r\n}\r\n@media (max-width: 350px) {\r\n    header h1 {\r\n        margin: 0;\r\n    }\r\n}\r\n\r\nmain {\r\n    min-height: calc(100vh - 140px - 120px);\r\n    padding-left: 30px;\r\n    padding-right: 30px;\r\n}\r\n@media (max-width: 550px) {\r\n    main {\r\n        padding: 0;\r\n    }\r\n}\r\n@media (max-width: 350px) {\r\n    main {\r\n        min-height: calc(100vh - 150px - 160px);\r\n    }\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    height: 8px; /* высота для горизонтального скролла */\r\n    width: 0; /* ширина для вертикального скролла - срываем вертикальный скролл */\r\n}\r\n\r\n::-webkit-scrollbar-button {\r\n    /* скрываем кнопки, чтобы не было ни кнопок, ни отступов */\r\n    height: 0;\r\n    width: 0;\r\n}\r\n\r\n/* стили для полосы */\r\n.sources::-webkit-scrollbar-track {\r\n    border-radius: 50px;\r\n    background: linear-gradient(\r\n        0deg,\r\n        rgba(0, 0, 0, 0) 0%,\r\n        rgba(0, 0, 0, 0) 30%,\r\n        #30c5ff 30%,\r\n        #30c5ff 60%,\r\n        rgba(0, 0, 0, 0) 60%,\r\n        rgba(0, 0, 0, 0) 100%\r\n    );\r\n}\r\n\r\n/* стили для ползунка */\r\n.sources::-webkit-scrollbar-thumb {\r\n    width: 100px;\r\n    border-radius: 50px;\r\n    background: linear-gradient(0deg, #3fcc59, #000000, #3fcc59);\r\n    box-shadow: 0px -3px 6px 0px rgb(45 107 57);\r\n}\r\n@media (max-width: 550px) {\r\n    .sources::-webkit-scrollbar-thumb {\r\n        width: 50px;\r\n    }\r\n}\r\n\r\n.footer {\r\n    padding: 30px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    flex-wrap: wrap;\r\n    color: #ffffff;\r\n}\r\n@media (max-width: 350px) {\r\n    .footer {\r\n        flex-direction: column;\r\n    }\r\n}\r\n\r\n.footer-author {\r\n    text-decoration: none;\r\n    color: #30c5ff;\r\n    transition: color 0.3s;\r\n}\r\n\r\n.footer-author:hover {\r\n    color: #69db7e;\r\n}\r\n\r\n.rs-school {\r\n    width: 70px;\r\n    height: auto;\r\n    padding: 2px;\r\n    background-color: #30c5ff;\r\n    transition: 0.3s;\r\n}\r\n\r\n.rs-school:hover,\r\n.rs-school:focus {\r\n    background-color: #3fcc59;\r\n}\r\n\r\n.rs-school:hover {\r\n    box-shadow: 0 0.5em 0.5em -0.4em #3fcc59;\r\n    transform: translateY(-0.25em);\r\n}\r\n",""]);const i=o},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=n(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);t&&o[c[0]]||(e&&(c[2]?c[2]="".concat(e," and ").concat(c[2]):c[2]=e),r.push(c))}},r}},379:(n,r,e)=>{var t,o=function(){var n={};return function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[r]=e}return n[r]}}(),i=[];function a(n){for(var r=-1,e=0;e<i.length;e++)if(i[e].identifier===n){r=e;break}return r}function s(n,r){for(var e={},t=[],o=0;o<n.length;o++){var s=n[o],c=r.base?s[0]+r.base:s[0],u=e[c]||0,l="".concat(c," ").concat(u);e[c]=u+1;var d=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==d?(i[d].references++,i[d].updater(p)):i.push({identifier:l,updater:m(p,r),references:1}),t.push(l)}return t}function c(n){var r=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var i=e.nc;i&&(t.nonce=i)}if(Object.keys(t).forEach((function(n){r.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(r);else{var a=o(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(r)}return r}var u,l=(u=[],function(n,r){return u[n]=r,u.filter(Boolean).join("\n")});function d(n,r,e,t){var o=e?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=l(r,o);else{var i=document.createTextNode(o),a=n.childNodes;a[r]&&n.removeChild(a[r]),a.length?n.insertBefore(i,a[r]):n.appendChild(i)}}function p(n,r,e){var t=e.css,o=e.media,i=e.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,h=0;function m(n,r){var e,t,o;if(r.singleton){var i=h++;e=f||(f=c(r)),t=d.bind(null,e,i,!1),o=d.bind(null,e,i,!0)}else e=c(r),t=p.bind(null,e,r),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return t(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap)return;t(n=r)}else o()}}n.exports=function(n,r){(r=r||{}).singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t));var e=s(n=n||[],r);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<e.length;t++){var o=a(e[t]);i[o].references--}for(var c=s(n,r),u=0;u<e.length;u++){var l=a(e[u]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}e=c}}}},359:(n,r,e)=>{n.exports=e.p+"assets/news_placeholder.jpg"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n,r,t,o;!function(n){n.OK="ok",n.ERROR="error"}(n||(n={})),function(n){n.GET="GET"}(r||(r={})),function(n){n[n.UNAUTHORIZED=401]="UNAUTHORIZED",n[n.NOT_FOUND=404]="NOT_FOUND"}(t||(t={})),function(n){n.SOURCES="sources",n.EVERYTHING="everything"}(o||(o={}));var i,a=function(){return a=Object.assign||function(n){for(var r,e=1,t=arguments.length;e<t;e++)for(var o in r=arguments[e])Object.prototype.hasOwnProperty.call(r,o)&&(n[o]=r[o]);return n},a.apply(this,arguments)},s=function(){function n(n,r){this.baseLink=n,this.options=r,this.baseLink=n,this.options=r}return n.prototype.getResp=function(n,e){var t=n.endpoint,o=n.options,i=void 0===o?{}:o;void 0===e&&(e=function(){console.error("No callback for GET response")}),this.load(r.GET,t,e,i)},n.prototype.errorHandler=function(n){if(!n.ok)throw n.status!==t.UNAUTHORIZED&&n.status!==t.NOT_FOUND||console.log("Sorry, but there is ".concat(n.status," error: ").concat(n.statusText)),Error(n.statusText);return n},n.prototype.makeUrl=function(n,r){var e=a(a({},this.options),n),t="".concat(this.baseLink).concat(r,"?");return Object.keys(e).forEach((function(n){t+="".concat(n,"=").concat(e[n],"&")})),t.slice(0,-1)},n.prototype.load=function(n,r,e,t){void 0===t&&(t={}),fetch(this.makeUrl(t,r),{method:n}).then(this.errorHandler).then((function(n){return n.json()})).then((function(n){return e(n)})).catch((function(n){return console.error(n)}))},n}(),c=(i=function(n,r){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])},i(n,r)},function(n,r){if("function"!=typeof r&&null!==r)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");function e(){this.constructor=n}i(n,r),n.prototype=null===r?Object.create(r):(e.prototype=r.prototype,new e)});const u=function(n){function r(){return n.call(this,"https://news-js-server.herokuapp.com/",{apiKey:"19e9dbb0325c4420bbc0897b7c6629b2"})||this}return c(r,n),r}(s);var l=function(){var n=function(r,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])},n(r,e)};return function(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function t(){this.constructor=r}n(r,e),r.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}();const d=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return l(r,n),r.prototype.getSources=function(r){n.prototype.getResp.call(this,{endpoint:o.SOURCES,options:{}},r)},r.prototype.getNews=function(r,e){for(var t=r.target,i=r.currentTarget;t!==i;){if(t.classList.contains("source__item")){var a=t.getAttribute("data-source-id");return void(i.getAttribute("data-source")!==a&&(i.setAttribute("data-source",a),n.prototype.getResp.call(this,{endpoint:o.EVERYTHING,options:{sources:a}},e)))}t=t.parentNode}},r}(u);var p=e(359),f=e(379),h=e.n(f),m=e(669);h()(m.Z,{insert:"head",singleton:!1}),m.Z.locals;var w=function(){function n(){}return n.prototype.draw=function(n){var r=n.length>=10?n.filter((function(n,r){return r<10})):n,e=document.createDocumentFragment(),t=document.querySelector("#newsItemTemp");r.forEach((function(n,r){var o=t.content.cloneNode(!0);r%2&&o.querySelector(".news__item").classList.add("alt");var i="null"!==n.urlToImage?n.urlToImage:p;o.querySelector(".news__meta-photo").style.backgroundImage="url(".concat(i,")"),o.querySelector(".news__meta-author").textContent=n.author||n.source.name,o.querySelector(".news__meta-date").textContent=n.publishedAt.slice(0,10).split("-").reverse().join("-"),o.querySelector(".news__description-title").textContent=n.title,o.querySelector(".news__description-source").textContent=n.source.name,o.querySelector(".news__description-content").textContent=n.description,o.querySelector(".news__read-more a").setAttribute("href",n.url),e.append(o)})),document.querySelector(".news").innerHTML="",document.querySelector(".news").appendChild(e)},n}();const _=w;var g=e(501);h()(g.Z,{insert:"head",singleton:!1}),g.Z.locals;const b=function(){function n(){}return n.prototype.draw=function(n){var r=document.createDocumentFragment(),e=document.querySelector("#sourceItemTemp");n.forEach((function(n){var t=e.content.cloneNode(!0);t.querySelector(".source__item-name").textContent=n.name,t.querySelector(".source__item").setAttribute("data-source-id",n.id),r.append(t)})),document.querySelector(".sources").append(r)},n}(),v=function(){function n(){this.news=new _,this.sources=new b}return n.prototype.drawNews=function(n){var r=(null==n?void 0:n.articles)?null==n?void 0:n.articles:[];this.news.draw(r)},n.prototype.drawSources=function(n){var r=(null==n?void 0:n.sources)?null==n?void 0:n.sources:[];this.sources.draw(r)},n}(),y=function(){function n(){this.controller=new d,this.view=new v}return n.prototype.start=function(){var n=this;document.querySelector(".sources").addEventListener("click",(function(r){return n.controller.getNews(r,(function(r){return n.view.drawNews(r)}))})),this.controller.getSources((function(r){return n.view.drawSources(r)}))},n}();var x=e(767);h()(x.Z,{insert:"head",singleton:!1}),x.Z.locals,(new y).start()})()})();