/*! For license information please see common.4b4a13c0.js.LICENSE.txt */
"use strict";(self.webpackChunkyui_docs_yui_ibc_solidity=self.webpackChunkyui_docs_yui_ibc_solidity||[]).push([[592],{3905:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return v}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},f=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=a(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,p=d["".concat(c,".").concat(v)]||d[v]||s[v]||i;return t?r.createElement(p,u(u({ref:n},f),{},{components:t})):r.createElement(p,u({ref:n},f))}));function v(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,u=new Array(i);u[0]=d;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=t[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6742:function(e,n,t){t.d(n,{Z:function(){return v}});var r=t(3366),o=t(7294),i=t(3727),u=t(2263),a=t(3919),c=t(412),l=(0,o.createContext)({collectLink:function(){}}),f=t(4996),s=t(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var n,t,v=e.isNavLink,p=e.to,m=e.href,g=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,w=void 0===b||b,E=(0,r.Z)(e,d),O=(0,u.Z)().siteConfig,_=O.trailingSlash,P=O.baseUrl,S=(0,f.C)().withBaseUrl,j=(0,o.useContext)(l),L=p||m,x=(0,a.Z)(L),C=null==L?void 0:L.replace("pathname://",""),k=void 0!==C?(t=C,w&&function(e){return e.startsWith("/")}(t)?S(t):t):void 0;k&&x&&(k=(0,s.applyTrailingSlash)(k,{trailingSlash:_,baseUrl:P}));var A=(0,o.useRef)(!1),D=v?i.OL:i.rU,R=c.Z.canUseIntersectionObserver,T=(0,o.useRef)();(0,o.useEffect)((function(){return!R&&x&&null!=k&&window.docusaurus.prefetch(k),function(){R&&T.current&&T.current.disconnect()}}),[T,k,R,x]);var M=null!==(n=null==k?void 0:k.startsWith("#"))&&void 0!==n&&n,I=!k||!x||M;return k&&x&&!M&&!y&&j.collectLink(k),I?o.createElement("a",Object.assign({href:k},L&&!x&&{target:"_blank",rel:"noopener noreferrer"},E)):o.createElement(D,Object.assign({},E,{onMouseEnter:function(){A.current||null==k||(window.docusaurus.preload(k),A.current=!0)},innerRef:function(e){var n,t;R&&e&&x&&(n=e,t=function(){null!=k&&window.docusaurus.prefetch(k)},T.current=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(T.current.unobserve(n),T.current.disconnect(),t())}))})),T.current.observe(n))},to:k||""},v&&{isActive:h,activeClassName:g}))}},4973:function(e,n,t){t.d(n,{Z:function(){return f},I:function(){return l}});var r=t(7294),o=/{\w+}/g,i="{}";function u(e,n){var t=[],u=e.replace(o,(function(e){var o=e.substr(1,e.length-2),u=null==n?void 0:n[o];if(void 0!==u){var a=r.isValidElement(u)?u:String(u);return t.push(a),i}return e}));return 0===t.length?e:t.every((function(e){return"string"==typeof e}))?u.split(i).reduce((function(e,n,r){var o;return e.concat(n).concat(null!==(o=t[r])&&void 0!==o?o:"")}),""):u.split(i).reduce((function(e,n,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},n,t[o])])}),[])}var a=t(7529);function c(e){var n,t,r=e.id,o=e.message;if(void 0===r&&void 0===o)throw new Error("Docusaurus translation declarations must have at least a translation id or a default translation message");return null!==(t=null!==(n=a[null!=r?r:o])&&void 0!==n?n:o)&&void 0!==t?t:r}function l(e,n){return u(c({message:e.message,id:e.id}),n)}function f(e){var n=e.children,t=e.id,r=e.values;if(n&&"string"!=typeof n)throw console.warn("Illegal <Translate> children",n),new Error("The Docusaurus <Translate> component only accept simple string values");return u(c({message:n,id:t}),r)}},9935:function(e,n,t){t.d(n,{m:function(){return r}});var r="default"},3919:function(e,n,t){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}t.d(n,{b:function(){return r},Z:function(){return o}})},8143:function(e,n,t){t.r(n),t.d(n,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=t(3727)},4996:function(e,n,t){t.d(n,{C:function(){return i},Z:function(){return u}});var r=t(2263),o=t(3919);function i(){var e=(0,r.Z)().siteConfig,n=(e=void 0===e?{}:e).baseUrl,t=void 0===n?"/":n,i=e.url;return{withBaseUrl:function(e,n){return function(e,n,t,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,o.b)(t))return t;if(a)return n+t;var f=t.startsWith(n)?t:n+t.replace(/^\//,"");return l?e+f:f}(i,t,e,n)}}}function u(e,n){return void 0===n&&(n={}),(0,i().withBaseUrl)(e,n)}},8084:function(e,n,t){t.r(n),t.d(n,{default:function(){return i},useAllPluginInstancesData:function(){return u},usePluginData:function(){return a}});var r=t(2263),o=t(9935);function i(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function u(e){var n=i()[e];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return n}function a(e,n){void 0===n&&(n=o.m);var t=u(e)[n];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+n+'".');return t}},2389:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(7294),o=t(9913);function i(){return(0,r.useContext)(o._)}},8408:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.getDocVersionSuggestions=n.getActiveDocContext=n.getActiveVersion=n.getLatestVersion=n.getActivePlugin=void 0;var r=t(8143);n.getActivePlugin=function(e,n,t){void 0===t&&(t={});var o=Object.entries(e).find((function(e){e[0];var t=e[1];return!!(0,r.matchPath)(n,{path:t.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&t.failfast)throw new Error("Can't find active docs plugin for \""+n+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};n.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};n.getActiveVersion=function(e,t){var o=(0,n.getLatestVersion)(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!1,strict:!1})}))};n.getActiveDocContext=function(e,t){var o,i,u=(0,n.getActiveVersion)(e,t),a=null==u?void 0:u.docs.find((function(e){return!!(0,r.matchPath)(t,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(n){n.id===o&&(i[e.name]=n)}))})),i):{}}};n.getDocVersionSuggestions=function(e,t){var r=(0,n.getLatestVersion)(e),o=(0,n.getActiveDocContext)(e,t);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,n,t){n.Jo=n.Iw=n.zu=n.yW=n.gB=n.gA=n.zh=n._r=void 0;var r=t(655),o=t(8143),i=(0,r.__importStar)(t(8084)),u=t(8408),a={};n._r=function(){var e;return null!==(e=(0,i.default)()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};n.zh=function(e){return(0,i.usePluginData)("docusaurus-plugin-content-docs",e)};n.gA=function(e){void 0===e&&(e={});var t=(0,n._r)(),r=(0,o.useLocation)().pathname;return(0,u.getActivePlugin)(t,r,e)};n.gB=function(e){return(0,n.zh)(e).versions};n.yW=function(e){var t=(0,n.zh)(e);return(0,u.getLatestVersion)(t)};n.zu=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getActiveVersion)(t,r)};n.Iw=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getActiveDocContext)(t,r)};n.Jo=function(e){var t=(0,n.zh)(e),r=(0,o.useLocation)().pathname;return(0,u.getDocVersionSuggestions)(t,r)}},1217:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(7294),o=t(9105),i=t(3773),u=t(4996);function a(e){var n=e.title,t=e.description,a=e.keywords,c=e.image,l=e.children,f=(0,i.pe)(n),s=(0,u.C)().withBaseUrl,d=c?s(c,{absolute:!0}):void 0;return r.createElement(o.Z,null,n&&r.createElement("title",null,f),n&&r.createElement("meta",{property:"og:title",content:f}),t&&r.createElement("meta",{name:"description",content:t}),t&&r.createElement("meta",{property:"og:description",content:t}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),d&&r.createElement("meta",{property:"og:image",content:d}),d&&r.createElement("meta",{name:"twitter:image",content:d}),l)}},907:function(e,n,t){t.d(n,{Iw:function(){return r.Iw},gA:function(){return r.gA},zu:function(){return r.zu},_r:function(){return r._r},Jo:function(){return r.Jo},zh:function(){return r.zh},yW:function(){return r.yW},gB:function(){return r.gB}});var r=t(6730)},3783:function(e,n,t){var r=t(7294),o=t(412),i="desktop",u="mobile",a="ssr";function c(){return o.Z.canUseDOM?window.innerWidth>996?i:u:a}n.Z=function(){var e=(0,r.useState)((function(){return c()})),n=e[0],t=e[1];return(0,r.useEffect)((function(){function e(){t(c())}return window.addEventListener("resize",e),function(){window.removeEventListener("resize",e),clearTimeout(undefined)}}),[]),n}},3773:function(e,n,t){t.d(n,{pl:function(){return ge},zF:function(){return B},HX:function(){return m},PO:function(){return G},L5:function(){return ue},Cv:function(){return ee},Cn:function(){return K},OC:function(){return Le},kM:function(){return fe},WA:function(){return l},os:function(){return g},Mg:function(){return b},_f:function(){return f},bc:function(){return p},l5:function(){return d},nT:function(){return he},uR:function(){return D},J:function(){return le},Rb:function(){return be},be:function(){return ye},SL:function(){return L},g8:function(){return $},D9:function(){return j},RF:function(){return ke},DA:function(){return Se},Si:function(){return _e},LU:function(){return o},pe:function(){return w}});var r=t(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function u(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(t){return n=t,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",n),a=!0),null}var n}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var l=function(e,n){if("undefined"==typeof window)return function(e){function n(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:n,set:n,del:n}}(e);var t=u(null==n?void 0:n.persistence);return null===t?c:{get:function(){return t.getItem(e)},set:function(n){return t.setItem(e,n)},del:function(){return t.removeItem(e)}}};function f(e){void 0===e&&(e=i);var n=u(e);if(!n)return[];for(var t=[],r=0;r<n.length;r+=1){var o=n.key(r);null!==o&&t.push(o)}return t}var s=t(5977);function d(){var e=(0,r.Z)(),n=e.siteConfig,t=n.baseUrl,o=n.url,i=e.i18n,u=i.defaultLocale,a=i.currentLocale,c=(0,s.TH)().pathname,l=a===u?t:t.replace("/"+a+"/","/"),f=c.replace(t,"");return{createUrl:function(e){var n=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===u?""+l:""+l+e+"/"}(n)+f}}}var v=/title=(["'])(.*?)\1/;function p(e){var n,t;return null!==(t=null===(n=null==e?void 0:e.match(v))||void 0===n?void 0:n[2])&&void 0!==t?t:""}var m="default";function g(e,n){return"docs-"+e+"-"+n}var h=t(907),y=!!h._r,b=function(e,n){var t=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return t(e)===t(n)},w=function(e){var n=(0,r.Z)().siteConfig,t=n.title,o=n.titleDelimiter;return e&&e.trim().length?e.trim()+" "+o+" "+t:t},E=t(7294),O=["zero","one","two","few","many","other"];function _(e){return O.filter((function(n){return e.includes(n)}))}_(["one","other"]);var P="undefined"!=typeof window?E.useLayoutEffect:E.useEffect;function S(e){var n=(0,E.useRef)(e);return P((function(){n.current=e}),[e]),(0,E.useCallback)((function(){return n.current.apply(n,arguments)}),[])}function j(e){var n=(0,E.useRef)();return P((function(){n.current=e})),n.current}function L(e){var n=(0,s.TH)(),t=j(n),r=S(e);(0,E.useEffect)((function(){r({location:n,previousLocation:t})}),[r,n,t])}var x=t(3366),C=t(412),k=["collapsed"],A=["lazy"];function D(e){var n=e.initialState,t=(0,E.useState)(null!=n&&n),r=t[0],o=t[1],i=(0,E.useCallback)((function(){o((function(e){return!e}))}),[]);return{collapsed:r,setCollapsed:o,toggleCollapsed:i}}var R={display:"none",overflow:"hidden",height:"0px"},T={display:"block",overflow:"visible",height:"auto"};function M(e,n){var t=n?R:T;e.style.display=t.display,e.style.overflow=t.overflow,e.style.height=t.height}function I(e){var n=e.collapsibleRef,t=e.collapsed,r=e.animation,o=(0,E.useRef)(!1);(0,E.useEffect)((function(){var e,i=n.current;function u(){var e,n,t=i.scrollHeight,o=null!==(e=null==r?void 0:r.duration)&&void 0!==e?e:function(e){var n=e/36;return Math.round(10*(4+15*Math.pow(n,.25)+n/5))}(t);return{transition:"height "+o+"ms "+(null!==(n=null==r?void 0:r.easing)&&void 0!==n?n:"ease-in-out"),height:t+"px"}}function a(){var e=u();i.style.transition=e.transition,i.style.height=e.height}if(!o.current)return M(i,t),void(o.current=!0);return i.style.willChange="height",e=requestAnimationFrame((function(){t?(a(),requestAnimationFrame((function(){i.style.height=R.height,i.style.overflow=R.overflow}))):(i.style.display="block",requestAnimationFrame((function(){a()})))})),function(){return cancelAnimationFrame(e)}}),[n,t,r])}function V(e){if(!C.Z.canUseDOM)return e?R:T}function Z(e){var n=e.as,t=void 0===n?"div":n,r=e.collapsed,o=e.children,i=e.animation,u=e.onCollapseTransitionEnd,a=e.className,c=e.disableSSRStyle,l=(0,E.useRef)(null);return I({collapsibleRef:l,collapsed:r,animation:i}),E.createElement(t,{ref:l,style:c?void 0:V(r),onTransitionEnd:function(e){"height"===e.propertyName&&(M(l.current,r),null==u||u(r))},className:a},o)}function N(e){var n=e.collapsed,t=(0,x.Z)(e,k),r=(0,E.useState)(!n),o=r[0],i=r[1];(0,E.useLayoutEffect)((function(){n||i(!0)}),[n]);var u=(0,E.useState)(n),a=u[0],c=u[1];return(0,E.useLayoutEffect)((function(){o&&c(n)}),[o,n]),o?E.createElement(Z,Object.assign({},t,{collapsed:a})):null}function B(e){var n=e.lazy,t=(0,x.Z)(e,A),r=n?N:Z;return E.createElement(r,Object.assign({},t))}var U=t(2389),H=t(6010),z="details_2Ziz",F="isBrowser_2j9b",W="collapsibleContent_3OHp",q=["summary","children"];function J(e){return!!e&&("SUMMARY"===e.tagName||J(e.parentElement))}function X(e,n){return!!e&&(e===n||X(e.parentElement,n))}var G=function(e){var n,t=e.summary,r=e.children,o=(0,x.Z)(e,q),i=(0,U.Z)(),u=(0,E.useRef)(null),a=D({initialState:!o.open}),c=a.collapsed,l=a.setCollapsed,f=(0,E.useState)(o.open),s=f[0],d=f[1];return E.createElement("details",Object.assign({},o,{ref:u,open:s,"data-collapsed":c,className:(0,H.Z)(z,(n={},n[F]=i,n),o.className),onMouseDown:function(e){J(e.target)&&e.detail>1&&e.preventDefault()},onClick:function(e){e.stopPropagation();var n=e.target;J(n)&&X(n,u.current)&&(e.preventDefault(),c?(l(!1),d(!0)):l(!0))}}),t,E.createElement(B,{lazy:!1,collapsed:c,disableSSRStyle:!0,onCollapseTransitionEnd:function(e){l(e),d(!e)}},E.createElement("div",{className:W},r)))};var Y=(0,E.createContext)(null);function K(e){var n=e.children;return E.createElement(Y.Provider,{value:(0,E.useState)(null)},n)}function Q(){var e=(0,E.useContext)(Y);if(null===e)throw new Error("MobileSecondaryMenuProvider was not used correctly, context value is null");return e}function $(){var e=Q()[0];if(e){var n=e.component;return function(t){return E.createElement(n,Object.assign({},e.props,t))}}return function(){}}function ee(e){var n,t=e.component,r=e.props,o=Q()[1],i=(n=r,(0,E.useMemo)((function(){return n}),[].concat(Object.keys(n),Object.values(n))));return(0,E.useEffect)((function(){o({component:t,props:i})}),[o,t,i]),(0,E.useEffect)((function(){return function(){return o(null)}}),[o]),null}var ne=function(e){return"docs-preferred-version-"+e},te={save:function(e,n,t){l(ne(e),{persistence:n}).set(t)},read:function(e,n){return l(ne(e),{persistence:n}).get()},clear:function(e,n){l(ne(e),{persistence:n}).del()}};function re(e){var n=e.pluginIds,t=e.versionPersistence,r=e.allDocsData;var o={};return n.forEach((function(e){o[e]=function(e){var n=te.read(e,t);return r[e].versions.some((function(e){return e.name===n}))?{preferredVersionName:n}:(te.clear(e,t),{preferredVersionName:null})}(e)})),o}function oe(){var e=(0,h._r)(),n=o().docs.versionPersistence,t=(0,E.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,E.useState)((function(){return function(e){var n={};return e.forEach((function(e){n[e]={preferredVersionName:null}})),n}(t)})),i=r[0],u=r[1];return(0,E.useEffect)((function(){u(re({allDocsData:e,versionPersistence:n,pluginIds:t}))}),[e,n,t]),[i,(0,E.useMemo)((function(){return{savePreferredVersion:function(e,t){te.save(e,n,t),u((function(n){var r;return Object.assign({},n,((r={})[e]={preferredVersionName:t},r))}))}}}),[n])]}var ie=(0,E.createContext)(null);function ue(e){var n=e.children;return y?E.createElement(ae,null,n):E.createElement(E.Fragment,null,n)}function ae(e){var n=e.children,t=oe();return E.createElement(ie.Provider,{value:t},n)}var ce=t(9935);function le(e){void 0===e&&(e=ce.m);var n=(0,h.zh)(e),t=function(){var e=(0,E.useContext)(ie);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=t[0],o=t[1],i=r[e].preferredVersionName;return{preferredVersion:i?n.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,E.useCallback)((function(n){o.savePreferredVersion(e,n)}),[o,e])}}var fe={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagPostListPage:"blog-tags-post-list-page",docsDocPage:"docs-doc-page",docsTagsListPage:"docs-tags-list-page",docsTagDocListPage:"docs-tags-doc-list-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docsPages:"docs-wrapper",mdxPages:"mdx-wrapper"},common:{editThisPage:"theme-edit-this-page",lastUpdated:"theme-last-updated",backToTopButton:"theme-back-to-top-button"},layout:{},docs:{docVersionBanner:"theme-doc-version-banner",docVersionBadge:"theme-doc-version-badge",docMarkdown:"theme-doc-markdown",docTocMobile:"theme-doc-toc-mobile",docTocDesktop:"theme-doc-toc-desktop",docFooter:"theme-doc-footer",docFooterTagsRow:"theme-doc-footer-tags-row",docFooterEditMetaRow:"theme-doc-footer-edit-meta-row",docSidebarMenu:"theme-doc-sidebar-menu",docSidebarItemCategory:"theme-doc-sidebar-item-category",docSidebarItemLink:"theme-doc-sidebar-item-link",docSidebarItemCategoryLevel:function(e){return"theme-doc-sidebar-item-category-level-"+e},docSidebarItemLinkLevel:function(e){return"theme-doc-sidebar-item-link-level-"+e}},blog:{}},se=l("docusaurus.announcement.dismiss"),de=l("docusaurus.announcement.id"),ve=function(){return"true"===se.get()},pe=function(e){return se.set(String(e))},me=(0,E.createContext)(null),ge=function(e){var n=e.children,t=function(){var e=o().announcementBar,n=(0,U.Z)(),t=(0,E.useState)((function(){return!!n&&ve()})),r=t[0],i=t[1];(0,E.useEffect)((function(){i(ve())}),[]);var u=(0,E.useCallback)((function(){pe(!0),i(!0)}),[]);return(0,E.useEffect)((function(){if(e){var n=e.id,t=de.get();"annoucement-bar"===t&&(t="announcement-bar");var r=n!==t;de.set(n),r&&pe(!1),!r&&ve()||i(!1)}}),[e]),(0,E.useMemo)((function(){return{isActive:!!e&&!r,close:u}}),[e,r,u])}();return E.createElement(me.Provider,{value:t},n)},he=function(){var e=(0,E.useContext)(me);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e};function ye(){var e=(0,r.Z)().siteConfig.baseUrl;return(0,s.TH)().pathname.replace(e,"/")}t(4973);function be(e){!function(e){var n=(0,s.k6)().block,t=(0,E.useRef)(e);(0,E.useEffect)((function(){t.current=e}),[e]),(0,E.useEffect)((function(){return n((function(e,n){return t.current(e,n)}))}),[n,t])}((function(n,t){if("POP"===t)return e(n,t)}))}function we(e){var n=e.getBoundingClientRect();return n.top===n.bottom?we(e.parentNode):n}function Ee(e,n){var t,r=n.anchorTopOffset,o=e.find((function(e){return we(e).top>=r}));return o?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(we(o))?o:null!==(t=e[e.indexOf(o)-1])&&void 0!==t?t:null:e[e.length-1]}function Oe(){var e=(0,E.useRef)(0),n=o().navbar.hideOnScroll;return(0,E.useEffect)((function(){e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}var _e=function(e){var n=(0,E.useRef)(void 0),t=Oe();(0,E.useEffect)((function(){if(!e)return function(){};var r=e.linkClassName,o=e.linkActiveClassName,i=e.minHeadingLevel,u=e.maxHeadingLevel;function a(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(r),a=function(e){for(var n=e.minHeadingLevel,t=e.maxHeadingLevel,r=[],o=n;o<=t;o+=1)r.push("h"+o+".anchor");return Array.from(document.querySelectorAll(r.join()))}({minHeadingLevel:i,maxHeadingLevel:u}),c=Ee(a,{anchorTopOffset:t.current}),l=e.find((function(e){return c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,t){var r;t?(n.current&&n.current!==e&&(null===(r=n.current)||void 0===r||r.classList.remove(o)),e.classList.add(o),n.current=e):e.classList.remove(o)}(e,e===l)}))}return document.addEventListener("scroll",a),document.addEventListener("resize",a),a(),function(){document.removeEventListener("scroll",a),document.removeEventListener("resize",a)}}),[e,t])};function Pe(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return n.flatMap((function(e){var n=Pe({toc:e.children,minHeadingLevel:t,maxHeadingLevel:r});return function(e){return e.level>=t&&e.level<=r}(e)?[Object.assign({},e,{children:n})]:n}))}function Se(e){var n=e.toc,t=e.minHeadingLevel,r=e.maxHeadingLevel;return(0,E.useMemo)((function(){return Pe({toc:n,minHeadingLevel:t,maxHeadingLevel:r})}),[n,t,r])}var je=(0,E.createContext)(void 0);function Le(e){var n,t=e.children;return E.createElement(je.Provider,{value:(n=(0,E.useRef)(!0),(0,E.useMemo)((function(){return{scrollEventsEnabledRef:n,enableScrollEvents:function(){n.current=!0},disableScrollEvents:function(){n.current=!1}}}),[]))},t)}function xe(){var e=(0,E.useContext)(je);if(null==e)throw new Error('"useScrollController" is used but no context provider was found in the React tree.');return e}var Ce=function(){return C.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null};function ke(e,n){void 0===n&&(n=[]);var t=xe().scrollEventsEnabledRef,r=(0,E.useRef)(Ce()),o=S(e);(0,E.useEffect)((function(){var e=function(){if(t.current){var e=Ce();o&&o(e,r.current),r.current=e}},n={passive:!0};return e(),window.addEventListener("scroll",e,n),function(){return window.removeEventListener("scroll",e,n)}}),[o,t].concat(n))}},8802:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){var t=n.trailingSlash,r=n.baseUrl;if(e.startsWith("#"))return e;if(void 0===t)return e;var o,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(o=i,t?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,u)}},8780:function(e,n,t){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(n,"__esModule",{value:!0}),n.uniq=n.applyTrailingSlash=void 0;var o=t(8802);Object.defineProperty(n,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=t(9964);Object.defineProperty(n,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return Array.from(new Set(e))}},6010:function(e,n,t){function r(e){var n,t,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=r(e[n]))&&(o&&(o+=" "),o+=t);else for(n in e)e[n]&&(o&&(o+=" "),o+=n);return o}function o(){for(var e,n,t=0,o="";t<arguments.length;)(e=arguments[t++])&&(n=r(e))&&(o&&(o+=" "),o+=n);return o}t.d(n,{Z:function(){return o}})},655:function(e,n,t){t.r(n),t.d(n,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return a},__param:function(){return c},__metadata:function(){return l},__awaiter:function(){return f},__generator:function(){return s},__createBinding:function(){return d},__exportStar:function(){return v},__values:function(){return p},__read:function(){return m},__spread:function(){return g},__spreadArrays:function(){return h},__spreadArray:function(){return y},__await:function(){return b},__asyncGenerator:function(){return w},__asyncDelegator:function(){return E},__asyncValues:function(){return O},__makeTemplateObject:function(){return _},__importStar:function(){return S},__importDefault:function(){return j},__classPrivateFieldGet:function(){return L},__classPrivateFieldSet:function(){return x}});var r=function(e,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},r(e,n)};function o(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}r(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}var i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)};function u(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t}function a(e,n,t,r){var o,i=arguments.length,u=i<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,n,t,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(n,t,u):o(n,t))||u);return i>3&&u&&Object.defineProperty(n,t,u),u}function c(e,n){return function(t,r){n(t,r,e)}}function l(e,n){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,n)}function f(e,n,t,r){return new(t||(t=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(n){i(n)}}function a(e){try{c(r.throw(e))}catch(n){i(n)}}function c(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(u,a)}c((r=r.apply(e,n||[])).next())}))}function s(e,n){var t,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(e,u)}catch(a){i=[6,a],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}var d=Object.create?function(e,n,t,r){void 0===r&&(r=t),Object.defineProperty(e,r,{enumerable:!0,get:function(){return n[t]}})}:function(e,n,t,r){void 0===r&&(r=t),e[r]=n[t]};function v(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||d(n,e,t)}function p(e){var n="function"==typeof Symbol&&Symbol.iterator,t=n&&e[n],r=0;if(t)return t.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(n?"Object is not iterable.":"Symbol.iterator is not defined.")}function m(e,n){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var r,o,i=t.call(e),u=[];try{for(;(void 0===n||n-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=i.return)&&t.call(i)}finally{if(o)throw o.error}}return u}function g(){for(var e=[],n=0;n<arguments.length;n++)e=e.concat(m(arguments[n]));return e}function h(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var r=Array(e),o=0;for(n=0;n<t;n++)for(var i=arguments[n],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}function y(e,n,t){if(t||2===arguments.length)for(var r,o=0,i=n.length;o<i;o++)!r&&o in n||(r||(r=Array.prototype.slice.call(n,0,o)),r[o]=n[o]);return e.concat(r||Array.prototype.slice.call(n))}function b(e){return this instanceof b?(this.v=e,this):new b(e)}function w(e,n,t){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=t.apply(e,n||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(n){return new Promise((function(t,r){i.push([e,n,t,r])>1||a(e,n)}))})}function a(e,n){try{(t=o[e](n)).value instanceof b?Promise.resolve(t.value.v).then(c,l):f(i[0][2],t)}catch(r){f(i[0][3],r)}var t}function c(e){a("next",e)}function l(e){a("throw",e)}function f(e,n){e(n),i.shift(),i.length&&a(i[0][0],i[0][1])}}function E(e){var n,t;return n={},r("next"),r("throw",(function(e){throw e})),r("return"),n[Symbol.iterator]=function(){return this},n;function r(r,o){n[r]=e[r]?function(n){return(t=!t)?{value:b(e[r](n)),done:"return"===r}:o?o(n):n}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,t=e[Symbol.asyncIterator];return t?t.call(e):(e=p(e),n={},r("next"),r("throw"),r("return"),n[Symbol.asyncIterator]=function(){return this},n);function r(t){n[t]=e[t]&&function(n){return new Promise((function(r,o){(function(e,n,t,r){Promise.resolve(r).then((function(n){e({value:n,done:t})}),n)})(r,o,(n=e[t](n)).done,n.value)}))}}}function _(e,n){return Object.defineProperty?Object.defineProperty(e,"raw",{value:n}):e.raw=n,e}var P=Object.create?function(e,n){Object.defineProperty(e,"default",{enumerable:!0,value:n})}:function(e,n){e.default=n};function S(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)"default"!==t&&Object.prototype.hasOwnProperty.call(e,t)&&d(n,e,t);return P(n,e),n}function j(e){return e&&e.__esModule?e:{default:e}}function L(e,n,t,r){if("a"===t&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof n?e!==n||!r:!n.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===t?r:"a"===t?r.call(e):r?r.value:n.get(e)}function x(e,n,t,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof n?e!==n||!o:!n.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,t):o?o.value=t:n.set(e,t),t}}}]);