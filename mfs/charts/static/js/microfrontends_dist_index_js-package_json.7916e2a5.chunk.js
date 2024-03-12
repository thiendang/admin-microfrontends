"use strict";(self.webpackChunkcharts=self.webpackChunkcharts||[]).push([["microfrontends_dist_index_js-package_json"],{1896:(e,t,n)=>{var o,r=Object.create,a=Object.defineProperty,c=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,l=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,i=(e,t,n,o)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let r of s(t))u.call(e,r)||r===n||a(e,r,{get:()=>t[r],enumerable:!(o=c(t,r))||o.enumerable});return e},d=(e,t,n)=>(n=null!=e?r(l(e)):{},i(!t&&e&&e.__esModule?n:a(n,"default",{value:e,enumerable:!0}),e)),f={};((e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})})(f,{ErrorBoundary:()=>S,Microfrontend:()=>B,MicrofrontendContext:()=>R,MicrofrontendScreen:()=>H,MicrofrontendSlot:()=>z,assert:()=>p,canMatchHost:()=>b,canMatchPermission:()=>E,canMatchPermissions:()=>k,canMatchRoute:()=>w,getMicrofrontendsByName:()=>q,getMicrofrontendsMatchingLocation:()=>D,jsonSchemaOf:()=>O,makeError:()=>v,register:()=>I,selectProps:()=>M,sleep:()=>y,throwError:()=>h,z:()=>x.z}),e.exports=(o=f,i(a({},"__esModule",{value:!0}),o));var m="Invariant failed";var p=(e,t)=>{!function(e,t){if(!e)throw new Error(m)}(e,"string"===typeof t&&"AssertError: ".concat(t));return e},v=(e,t,n)=>({name:e,message:t,stack:(new Error).stack,cause:n,toString:()=>"".concat(e,": ").concat(t)}),h=(e,t)=>{throw v(e,t)},y=e=>new Promise((t=>{setTimeout(t,e)})),g=n(5646),w=(e,t)=>{const n=(0,g.pathToRegexp)(e.replace(/\/\*+/g,"/:params*"),[]),o=(0,g.pathToRegexp)(t.replace(/\/\*+/g,"/:params*"),[]);return n.test(t)||o.test(e)},E=(e,t)=>{const n=(0,g.pathToRegexp)(e.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]),o=(0,g.pathToRegexp)(t.replace(/\/\*\*+/g,"/:params*").replace(/\/\*/g,"/:params"),[]);return n.test(t)||o.test(e)},b=(e,t)=>!e||!t||e===t,k=(e,t)=>null===t||void 0===t?void 0:t.every((t=>{const[n,...o]=t.split(":"),r=o.join(":");return e.permissions.some((e=>{const[t,...o]=e.split(":"),a=o.join(":");return(a===r||E(a,r))&&(t===n||"read-only"===n&&"manage"===t)}))})),M=e=>t=>Object.fromEntries(Object.entries(t).filter((t=>{let[n]=t;return e.includes(n)}))),x=n(9980),P=n(6297),j=()=>"undefined"===typeof window?{}:window,F=(e,t)=>{const n="mf-".concat(e.toLocaleLowerCase(),"-entry"),o=document.getElementById(n);if(!o)return;const r=p(o.getAttribute("src"),"script #".concat(n," must have attr [src]")),a=r.lastIndexOf("/"),c=r.slice(0,a);async function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const n=Array.from(document.querySelectorAll("head script")).filter((e=>{var t;return null===(t=e.getAttribute("src"))||void 0===t?void 0:t.startsWith(c)})),o=Array.from(document.querySelectorAll("head link")).filter((e=>{var t;return null===(t=e.getAttribute("href"))||void 0===t?void 0:t.startsWith(c)}));return o.length&&t.hasZeroInstances()?(console.log("Removed assets",[...n,...o]),n.forEach((e=>{e.remove()})),o.forEach((e=>{e.remove()})),[...n,...o]):y(100).then((()=>e<3?s(e+1):[]))}return y(100).then((()=>s()))},I=(e,t,n)=>{let{mount:o,unmount:r,props:a}=n;const c=((e,t)=>{"undefined"===typeof window&&console.warn("Microfrontend cannot be registered without a global window scope");const n=j();n.$mfs=n.$mfs||{},n.$mfs[e]=n.$mfs[e]||{};const o=n.$mfs[e];return o?(o[t]=o[t]||{mount:()=>(console.warn("No ".concat(e," mount fn exists")),()=>{}),unmount:()=>console.warn("No ".concat(e," unmount fn exists")),instances:0,scope:e,module:t,props:{}},null===o||void 0===o?void 0:o[t]):(console.warn("No ".concat(e," scope exists in window.$mfs")),null===o||void 0===o?void 0:o[t])})(e,t);c.props=O(a),c.tracker=c.tracker||(e=>({increment:()=>{e.instances++},decrement:()=>{e.instances>0&&e.instances--},hasZeroInstances:()=>{var t;const n=null===(t=j().$mfs)||void 0===t?void 0:t[e.scope];return 0===Object.values(p(n,"window.$mfs.".concat(e.scope," must exist"))).reduce(((e,t)=>e+t.instances),0)}}))(c);const s=t=>{var n,o;return null===(n=c.tracker)||void 0===n||n.decrement(),null!==(o=c.tracker)&&void 0!==o&&o.hasZeroInstances()&&F(e,c.tracker),()=>{setTimeout((()=>{t()()}))}};return c.mount=(n,r)=>{var a;null===(a=c.tracker)||void 0===a||a.increment();const l=p(o,"mount fn must exist")(n,r),u=(i=n)instanceof HTMLElement?i:document.getElementById(i);var i;const d=null===r||void 0===r?void 0:r.eventBus;return console.log("%c [eventBus] emit mount - mf-scope: ".concat(e," - (mf-module: ").concat(t,")"),"background: green; color: #ffffff"),null===d||void 0===d||d.emit("mf:mount",{container:u,scope:e,module:t}),()=>(console.log("%c [eventBus] emit unmount - mf-scope: ".concat(e," - (mf-module: ").concat(t,")"),"background: orange; color: #ffffff"),null===d||void 0===d||d.emit("mf:unmount",{container:u,scope:e,module:t}),s(l))},c.unmount=e=>s((()=>p(r,"unmount fn must exist")(e))),c},O=e=>(0,P.zodToJsonSchema)(e,"props"),L=d(n(5752)),S=class extends L.Component{constructor(e){super(e),this.state={error:null,errorInfo:null}}componentDidCatch(e,t){this.setState({error:e,errorInfo:t})}render(){if(this.state.errorInfo&&this.state.error){const e=this.state.error,t=this.state.errorInfo;e&&(e.cause=t);const n=this.props.Fallback;return"function"===typeof n?L.default.createElement(n,{error:e}):n}return this.props.children}},C=d(n(3563)),N=d(n(5752)),A=n(8797);var B=e=>{let{id:t,scope:n,entry:o,module:r,Loading:a,Fallback:c,className:s,loadMicrofrontend:l,...u}=e;const{isFetched:i,isError:d,error:f,data:{mount:m}={}}=(0,A.useQuery)("microfrontend?entry=".concat(o,"&module=").concat(r),(async()=>(console.log("1.[Query]: microfrontend?entry=".concat(o,"&module=").concat(r)),p(l,"props.loadMicrofrontend must be a function"),null===l||void 0===l?void 0:l({entry:o,scope:n,module:r})))),h=(0,C.default)("microfrontend-container spin-when-empty",s),y="mount-".concat((t||n).toLowerCase(),"-container"),[g,w]=(0,N.useState)(null),[E,b]=(0,N.useState)(0),k=e=>"function"===typeof c?N.default.createElement(c,{...{containerId:y,scope:n,entry:o,module:r,...u},...e,retry:()=>b(E+1)}):c,M=e=>{let{children:t}=e;return N.default.createElement(S,{Fallback:k},t)};return(0,N.useEffect)((()=>{if(!i||d||"function"!==typeof m)return;let e=null;try{e=m(y,{...u,ErrorBoundary:M})}catch(t){w(v("MountError","Could not mount Microfrontend: ".concat(n," (").concat(r,")"),t))}return()=>{setTimeout((()=>{try{"function"===typeof e&&(console.log("%c unmount: mf-scope: ".concat(n," - (mf-module: ").concat(r,")"),"background: purple; color: #ffffff"),e())}catch(t){console.error(t),w(v("UnmountError","Could not unmount Microfrontend: ".concat(n," (").concat(r,")"),f))}}))}}),[i,d,o,r,E]),d?N.default.createElement(k,{error:f instanceof Error?f:v("UnknownError","string"===typeof f?f:"An error occurred in a microfrontend: ".concat(f),f)}):g?N.default.createElement(k,{error:g}):i?N.default.createElement("div",{id:y,className:h,"data-mf-scope":n,"data-mf-module":r}):"function"===typeof a?N.default.createElement(a,null):a};B.defaultProps={loadMicrofrontend:async e=>{let{entry:t,scope:o,module:r}=e;return(a="mf-".concat(o.toLowerCase(),"-entry"),c=t,new Promise(((e,t)=>{if(document.querySelector('script[id="'.concat(a,'"]'))){const t=p(document.querySelector('script[id="'.concat(a,'"]')),"script must exist: [id=".concat(a,"]"));return e(t)}const n=document.createElement("script");n.id=a,n.src=c,n.type="text/javascript",n.async=!0,n.onload=()=>e(n),n.onerror=t,document.head.appendChild(n)}))).then((()=>function(e,t){return async()=>{if("undefined"===typeof window)return;const o=window;await n.I("default");const r=o[e];await r.init(n.S.default);const a=await Promise.race([null===r||void 0===r?void 0:r.get(t),y(300).then((()=>Promise.reject(new Error("No module ".concat(t," was found in window.").concat(e," container")))))]);return"function"===typeof a?a():Promise.reject(new Error("No module ".concat(t," was found in window.").concat(e," container")))}}(o,r)())).then((e=>e.default)).then((e=>{let{mount:t,unmount:n}=e;return{mount:t,unmount:n}})).catch((e=>Promise.reject(e)));var a,c}};var T=d(n(5752)),$=d(n(5752)),_={homedir:"/",url:"/",navigate:()=>{},manifests:[],fetch:(e,t)=>window.fetch(e,t),user:void 0,eventBus:void 0,layout:{navItems:[],logout:()=>{}},ErrorBoundary:e=>{let{children:t}=e;return $.default.createElement(S,{Fallback:()=>$.default.createElement($.default.Fragment,null,"An Error occurred")},t)}},R=$.default.createContext(_),q=(e,t,n)=>null===e||void 0===e?void 0:e.reduce(((e,n)=>{var o;return[...e,...(null===(o=n.slots[t])||void 0===o?void 0:o.map((e=>({...M(["entry","scope","module","auth"])(n),..."string"===typeof e?{slot:e}:e}))))||[]]}),[]).filter((e=>{let{host:t}=e;return b(t,null===n||void 0===n?void 0:n.host)})).filter((e=>{var t;let{auth:o}=e;return!(null!==o&&void 0!==o&&o.required)||k(p(null===n||void 0===n?void 0:n.user,"options.user must exist"),(null===o||void 0===o||null===(t=o.permissions)||void 0===t?void 0:t.map((e=>"function"===typeof(null===n||void 0===n?void 0:n.transformPermission)?null===n||void 0===n?void 0:n.transformPermission(e):e)))||[])})),z=e=>{let{name:t,transform:n,Fallback:o,Loading:r,className:a,...c}=e;const s=(0,T.useId)(),{manifests:l,user:u,...i}=(0,T.useContext)(R),d=q(l,t,{user:u}),f=(null===n||void 0===n?void 0:n(d))||d;return T.default.createElement(T.default.Fragment,null,f.map(((e,t)=>T.default.createElement(S,{key:"slot-".concat(e.scope,"-").concat(e.module,"-").concat(s,"-").concat(t),Fallback:"function"===typeof o?t=>T.default.createElement(o,{slot:e,...c,...t}):o||(()=>T.default.createElement(T.default.Fragment,null))},T.default.createElement(B,{...{manifests:l,user:u,...e,...i,...c},Fallback:"function"===typeof o?t=>T.default.createElement(o,{slot:e,...c,...t}):o||(()=>T.default.createElement(T.default.Fragment,null)),Loading:"function"===typeof r?()=>T.default.createElement(r,{slot:e}):r||(()=>T.default.createElement(T.default.Fragment,null)),entry:e.entry,module:e.module,scope:e.scope,className:a,id:"slot-".concat(e.scope,"-").concat(s,"-").concat(t)})))))};z.defaultProps={transform:e=>e,Fallback:()=>T.default.createElement("div",null,"Sorry, there was an error loading this component"),Loading:()=>T.default.createElement("div",null,"...loading...")};var Q=d(n(5752)),U=n(8797),Z=n(5095),D=(e,t,n)=>null===e||void 0===e?void 0:e.reduce(((e,t)=>{var n;return[...e,...(null===(n=t.slots.routes)||void 0===n?void 0:n.map((e=>({...M(["entry","scope","module","auth"])(t),..."string"===typeof e?{route:e}:e}))))||[]]}),[]).filter((e=>{let{route:o,host:r}=e;return w(o,t)&&b(r,null===n||void 0===n?void 0:n.host)})).filter((e=>{var t;let{auth:o}=e;return!(null!==o&&void 0!==o&&o.required)||k(p(null===n||void 0===n?void 0:n.user,"options.user must exist"),(null===o||void 0===o||null===(t=o.permissions)||void 0===t?void 0:t.map("function"===typeof(null===n||void 0===n?void 0:n.transformPermission)?null===n||void 0===n?void 0:n.transformPermission:e=>e))||[])})),H=e=>{let{host:t,Loading:n,Fallback:o,navigate:r,Microfrontend:a,...c}=e;const s=(0,Z.useLocation)().pathname,{data:l=("manifests"in c?c.manifests:[]),isLoading:u,isError:i,error:d}=(0,U.useQuery)("manifests",(()=>"getMicrofrontendManifests"in c?c.getMicrofrontendManifests():c.manifests),{enabled:"getMicrofrontendManifests"in c}),[f]=D(l||[],s,{host:t,user:null===c||void 0===c?void 0:c.user})||[],m=e=>"function"===typeof o?Q.default.createElement(o,{...c,...e}):o;return i?Q.default.createElement(m,{error:d instanceof Error?d:v("UnknownError","string"===typeof d?d:"An error occurred in a microfrontend: ".concat(d),d)}):u?"function"===typeof n?Q.default.createElement(n,null):n:!f&&null!==l&&void 0!==l&&l.length?Q.default.createElement(m,{error:v("NoRouteMatchFound","No microfrontend was found capable of handling the route: ".concat(s))}):f?Q.default.createElement(a,{...c,url:s,entry:f.entry,scope:f.scope,module:f.module,manifests:l,navigate:r,Loading:n,Fallback:o}):null};H.defaultProps={Microfrontend:B}},4147:e=>{e.exports={u2:"charts"}}}]);
//# sourceMappingURL=microfrontends_dist_index_js-package_json.7916e2a5.chunk.js.map