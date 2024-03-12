"use strict";(self.webpackChunkcharts=self.webpackChunkcharts||[]).push([["src_chart-eight_tsx"],{4496:(e,t,s)=>{s.r(t),s.d(t,{default:()=>u});var n=s(1896),a=s(5752),l=s.n(a),i=s(4669),r=s.n(i),d=s(2267),o=s(4147),c=s(2845),m=s(5305);const x=e=>e instanceof HTMLElement?e:document.getElementById(e),h=()=>{const{navigate:e}=(0,a.useContext)(n.MicrofrontendContext);return(0,m.jsx)(c.Z,{scope:"charts",module:"./chart-eight"})},u=(0,n.register)(o.u2,"./chart-eight",{mount:(e,t)=>{const s=x(e);if("true"===(null===s||void 0===s?void 0:s.getAttribute("data-mf-mounted")))return()=>{r().unmountComponentAtNode(s)};null===s||void 0===s||s.setAttribute("data-mf-mounted","true");const a=(0,d.s)(s);return a.render((0,m.jsx)(l().StrictMode,{children:(0,m.jsx)(n.MicrofrontendContext.Provider,{value:t,children:(0,m.jsx)(h,{})})})),()=>{a.unmount()}},unmount:e=>{r().unmountComponentAtNode(x(e))},props:n.z.object({})})},2845:(e,t,s)=>{s.d(t,{Z:()=>d});var n=s(5752),a=s(646),l=s(5305);const i=(0,a.ZP)((()=>s.e("vendors-node_modules_pnpm_react-apexcharts_1_4_1_apexcharts_3_41_0_react_18_2_0_node_modules_-ab75a0").then(s.bind(s,6647)))),r={chart:{type:"donut"},colors:["#0FADCF","#80CAEE","#3C50E0"],labels:["Desktop","Tablet","Mobile"],legend:{show:!1,position:"bottom"},plotOptions:{pie:{donut:{size:"75%",background:"transparent"}}},dataLabels:{enabled:!1},responsive:[{breakpoint:2600,options:{chart:{width:380}}},{breakpoint:640,options:{chart:{width:250}}}]},d=e=>{let{scope:t,module:s}=e;const[a,d]=(0,n.useState)({series:[70,20,10]});return(0,l.jsxs)("div",{className:"outline outline-orange-400 relative h-full sm:px-8 rounded-sm border border-stroke bg-white px-5 pb-5 pt-8 shadow-default dark:border-strokedark dark:bg-boxdark",children:[t&&s&&(0,l.jsxs)("div",{className:"absolute top-0 left-px text-xs font-semibold",children:["mf-scope: ",t," - (mf-module: ",s,")"]}),(0,l.jsxs)("div",{className:"mb-3 justify-between gap-4 sm:flex",children:[(0,l.jsx)("div",{children:(0,l.jsx)("h4",{className:"text-title-sm2 font-bold text-black dark:text-white",children:"Used Devices"})}),(0,l.jsxs)("div",{className:"mt-2 flex items-center sm:mt-0",children:[(0,l.jsx)("p",{className:"font-medium uppercase text-black dark:text-white",children:"Short by:"}),(0,l.jsxs)("div",{className:"relative z-20 inline-block",children:[(0,l.jsxs)("select",{name:"#",id:"#",className:"relative z-20 inline-flex appearance-none bg-transparent py-1 pl-3 pr-8 font-medium outline-none",children:[(0,l.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Monthly"}),(0,l.jsx)("option",{value:"",className:"dark:bg-boxdark",children:"Weekly"})]}),(0,l.jsx)("span",{className:"absolute right-1 top-1/2 z-10 -translate-y-1/2",children:(0,l.jsx)("svg",{width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,l.jsx)("path",{d:"M8.99995 12.8249C8.8312 12.8249 8.69058 12.7687 8.54995 12.6562L2.0812 6.2999C1.82808 6.04678 1.82808 5.65303 2.0812 5.3999C2.33433 5.14678 2.72808 5.14678 2.9812 5.3999L8.99995 11.278L15.0187 5.34365C15.2718 5.09053 15.6656 5.09053 15.9187 5.34365C16.1718 5.59678 16.1718 5.99053 15.9187 6.24365L9.44995 12.5999C9.30933 12.7405 9.1687 12.8249 8.99995 12.8249Z",fill:"#64748B"})})})]})]})]}),(0,l.jsx)("div",{className:"mb-2",children:(0,l.jsx)("div",{id:"chartEight",className:"mx-auto flex justify-center",children:(0,l.jsx)("div",{style:{minHeight:"295.367px"},children:"undefined"!==typeof window&&(0,l.jsx)(i,{options:r,series:a.series,type:"donut"})})})}),(0,l.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"block h-4 w-4 rounded-full border-4 border-[#8FD0EF]"}),(0,l.jsx)("span",{className:"font-medium text-black-2 dark:text-white",children:"Mobile"})]}),(0,l.jsx)("span",{className:"inline-block rounded-md bg-[#8FD0EF] px-2 py-1 text-xs font-medium text-white",children:"10%"})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"block h-4 w-4 rounded-full border-4 border-[#6577F3]"}),(0,l.jsx)("span",{className:"font-medium text-black-2 dark:text-white",children:"Tablet"})]}),(0,l.jsx)("span",{className:"inline-block rounded-md bg-[#6577F3] px-2 py-1 text-xs font-medium text-white",children:"20%"})]}),(0,l.jsxs)("div",{className:"flex items-center justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center gap-2",children:[(0,l.jsx)("span",{className:"block h-4 w-4 rounded-full border-4 border-[#3c50e0]"}),(0,l.jsx)("span",{className:"font-medium text-black-2 dark:text-white",children:"Desktop"})]}),(0,l.jsx)("span",{className:"inline-block rounded-md bg-[#3c50e0] px-2 py-1 text-xs font-medium text-white",children:"70%"})]})]})]})}}}]);
//# sourceMappingURL=src_chart-eight_tsx.f4986b13.chunk.js.map