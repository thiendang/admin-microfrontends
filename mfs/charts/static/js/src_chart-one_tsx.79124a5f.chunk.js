"use strict";(self.webpackChunkcharts=self.webpackChunkcharts||[]).push([["src_chart-one_tsx"],{2109:(e,s,t)=>{t.r(s),t.d(s,{default:()=>x});var a=t(1896),r=t(5752),l=t.n(r),n=t(4669),o=t.n(n),i=t(2267),d=t(4147),c=t(5791),m=t(5305);const h=e=>e instanceof HTMLElement?e:document.getElementById(e),u=()=>{const{navigate:e}=(0,r.useContext)(a.MicrofrontendContext);return(0,m.jsx)(c.Z,{scope:"charts",module:"./chart-one"})},x=(0,a.register)(d.u2,"./chart-one",{mount:(e,s)=>{const t=h(e);if("true"===(null===t||void 0===t?void 0:t.getAttribute("data-mf-mounted")))return()=>{o().unmountComponentAtNode(t)};null===t||void 0===t||t.setAttribute("data-mf-mounted","true");const r=(0,i.s)(t);return r.render((0,m.jsx)(l().StrictMode,{children:(0,m.jsx)(a.MicrofrontendContext.Provider,{value:s,children:(0,m.jsx)(u,{})})})),()=>{r.unmount()}},unmount:e=>{o().unmountComponentAtNode(h(e))},props:a.z.object({})})},5791:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(5752),r=t(646),l=t(5305);const n=(0,r.ZP)((()=>t.e("vendors-node_modules_pnpm_react-apexcharts_1_4_1_apexcharts_3_41_0_react_18_2_0_node_modules_-ab75a0").then(t.bind(t,6647)))),o={legend:{show:!1,position:"top",horizontalAlign:"left"},colors:["#3C50E0","#80CAEE"],chart:{fontFamily:"Satoshi, sans-serif",height:335,type:"area",dropShadow:{enabled:!0,color:"#623CEA14",top:10,blur:4,left:0,opacity:.1},toolbar:{show:!1}},responsive:[{breakpoint:1024,options:{chart:{height:300}}},{breakpoint:1366,options:{chart:{height:350}}}],stroke:{width:[2,2],curve:"straight"},grid:{xaxis:{lines:{show:!0}},yaxis:{lines:{show:!0}}},dataLabels:{enabled:!1},markers:{size:4,colors:"#fff",strokeColors:["#3056D3","#80CAEE"],strokeWidth:3,strokeOpacity:.9,strokeDashArray:0,fillOpacity:1,discrete:[],hover:{size:void 0,sizeOffset:5}},xaxis:{type:"category",categories:["Sep","Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug"],axisBorder:{show:!1},axisTicks:{show:!1}},yaxis:{title:{style:{fontSize:"0px"}},min:0,max:100}},i=e=>{let{scope:s,module:t}=e;const[r,i]=(0,a.useState)({series:[{name:"Product One",data:[23,11,22,27,13,22,37,21,44,22,30,45]},{name:"Product Two",data:[30,25,36,30,45,35,64,52,59,36,39,51]}]});return(0,l.jsxs)("div",{className:"outline outline-orange-400 relative h-full rounded-sm border border-stroke bg-white px-5 pt-8 pb-5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-8",children:[s&&t&&(0,l.jsxs)("div",{className:"absolute top-0 left-px text-xs font-semibold",children:["mf-scope: ",s," - (mf-module: ",t,")"]}),(0,l.jsxs)("div",{className:"flex flex-wrap items-start justify-between gap-3 sm:flex-nowrap",children:[(0,l.jsxs)("div",{className:"flex w-full flex-wrap gap-3 sm:!gap-5",children:[(0,l.jsxs)("div",{className:"flex min-w-48",children:[(0,l.jsx)("span",{className:"mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary",children:(0,l.jsx)("span",{className:"block h-2 w-full max-w-2 rounded-full bg-primary"})}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("p",{className:"font-semibold text-[#3c50e0]",children:"Total Revenue"}),(0,l.jsx)("p",{className:"text-sm font-medium",children:"12.04.2022 - 12.05.2022"})]})]}),(0,l.jsxs)("div",{className:"flex min-w-48",children:[(0,l.jsx)("span",{className:"mt-1 mr-2 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary",children:(0,l.jsx)("span",{className:"block h-2 w-full max-w-2 rounded-full bg-secondary"})}),(0,l.jsxs)("div",{className:"w-full",children:[(0,l.jsx)("p",{className:"font-semibold text-[#80caee]",children:"Total Sales"}),(0,l.jsx)("p",{className:"text-sm font-medium",children:"12.04.2022 - 12.05.2022"})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:"relative z-20 inline-block",children:[(0,l.jsxs)("select",{name:"",id:"",className:"relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-6 text-sm font-medium outline-none",children:[(0,l.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Day"}),(0,l.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Week"}),(0,l.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Month"})]}),(0,l.jsx)("span",{className:"absolute right-3 top-1/2 z-10 -translate-y-1/2",children:(0,l.jsxs)("svg",{width:"10",height:"6",viewBox:"0 0 10 6",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,l.jsx)("path",{d:"M0.47072 1.08816C0.47072 1.02932 0.500141 0.955772 0.54427 0.911642C0.647241 0.808672 0.809051 0.808672 0.912022 0.896932L4.85431 4.60386C4.92785 4.67741 5.06025 4.67741 5.14851 4.60386L9.09079 0.896932C9.19376 0.793962 9.35557 0.808672 9.45854 0.911642C9.56151 1.01461 9.5468 1.17642 9.44383 1.27939L5.50155 4.98632C5.22206 5.23639 4.78076 5.23639 4.51598 4.98632L0.558981 1.27939C0.50014 1.22055 0.47072 1.16171 0.47072 1.08816Z",fill:"#637381"}),(0,l.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M1.22659 0.546578L5.00141 4.09604L8.76422 0.557869C9.08459 0.244537 9.54201 0.329403 9.79139 0.578788C10.112 0.899434 10.0277 1.36122 9.77668 1.61224L9.76644 1.62248L5.81552 5.33722C5.36257 5.74249 4.6445 5.7544 4.19352 5.32924C4.19327 5.32901 4.19377 5.32948 4.19352 5.32924L0.225953 1.61241C0.102762 1.48922 -4.20186e-08 1.31674 -3.20269e-08 1.08816C-2.40601e-08 0.905899 0.0780105 0.712197 0.211421 0.578787C0.494701 0.295506 0.935574 0.297138 1.21836 0.539529L1.22659 0.546578ZM4.51598 4.98632C4.78076 5.23639 5.22206 5.23639 5.50155 4.98632L9.44383 1.27939C9.5468 1.17642 9.56151 1.01461 9.45854 0.911642C9.35557 0.808672 9.19376 0.793962 9.09079 0.896932L5.14851 4.60386C5.06025 4.67741 4.92785 4.67741 4.85431 4.60386L0.912022 0.896932C0.809051 0.808672 0.647241 0.808672 0.54427 0.911642C0.500141 0.955772 0.47072 1.02932 0.47072 1.08816C0.47072 1.16171 0.50014 1.22055 0.558981 1.27939L4.51598 4.98632Z",fill:"#637381"})]})})]})})]}),(0,l.jsx)("div",{children:(0,l.jsx)("div",{id:"chartOne",className:"-ml-5",children:"undefined"!==typeof window&&(0,l.jsx)(n,{options:o,series:r.series,type:"area",height:350})})})]})}}}]);
//# sourceMappingURL=src_chart-one_tsx.79124a5f.chunk.js.map