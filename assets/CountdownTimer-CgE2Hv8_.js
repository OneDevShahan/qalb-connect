import{r as i,j as o}from"./index-BlyaFP9m.js";import{P as c}from"./index-COsmeGCm.js";const S=({targetTime:r,label:l=""})=>{const a=()=>{const n=new Date;let t;if(r.includes(":")){const[h,x]=r.split(":").map(Number);t=new Date,t.setHours(h,x,0,0),t<n&&t.setDate(t.getDate()+1)}else t=new Date(r);let s=t-n;if(s<0)return{days:0,hours:0,minutes:0,seconds:0};const u=Math.floor(s/(1e3*60*60*24)),m=Math.floor(s/(1e3*60*60)%24),f=Math.floor(s/(1e3*60)%60),p=Math.floor(s/1e3%60);return{days:u,hours:m,minutes:f,seconds:p}},[e,d]=i.useState(a());return i.useEffect(()=>{const n=setInterval(()=>{d(a())},1e3);return()=>clearInterval(n)},[r]),o.jsxs("div",{className:"p-4 dark:text-white",children:[o.jsx("h2",{className:"text-lg font-semibold",children:l}),o.jsxs("p",{className:"text-xl font-bold",children:[e.days>0&&`${String(e.days).padStart(2,"0")}d `,String(e.hours).padStart(2,"0"),"h"," ",String(e.minutes).padStart(2,"0"),"m"," ",String(e.seconds).padStart(2,"0"),"s"]})]})};S.propTypes={targetTime:c.string.isRequired,label:c.string};export{S as C};
