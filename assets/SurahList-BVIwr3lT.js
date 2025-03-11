import{r as s,j as e,L as h,A as g}from"./index-BlyaFP9m.js";import{G as f}from"./index-3kZfdK2R.js";import{L as u}from"./LoadingIcon-Dw00p04L.js";import{S as y}from"./SearchBar-BgttLusG.js";import{f as p}from"./AlQuranCloudAPIServices-20DmmIUC.js";import"./iconBase-DxbKi1KB.js";import"./index-COsmeGCm.js";import"./index-C88pvD_q.js";const T=()=>{const[r,o]=s.useState([]),[d,c]=s.useState(!0),[i,x]=s.useState(null),[a,m]=s.useState("");s.useEffect(()=>{(async()=>{try{const l=await p();o(l)}catch(l){x(g,l)}finally{c(!1)}})()},[]);const n=r.filter(t=>t.name.toLowerCase().includes(a.toLowerCase())||t.englishName.toLowerCase().includes(a.toLowerCase())||t.englishNameTranslation.toLowerCase().includes(a.toLowerCase())||t.revelationType.toLowerCase().includes(a.toLowerCase()));return d?e.jsx("div",{children:e.jsxs("div",{className:"flex flex-col items-center justify-center text-red-500",children:[e.jsx("div",{className:"mb-2 text-green-500 dark:text-green-400",children:"Data is loading..."}),e.jsx(u,{height:"h-20",width:"w-20",color:"yellow"})]})}):i?e.jsx("div",{className:"font-bold text-red-500",children:i}):e.jsxs("div",{className:"p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-center dark:text-white",children:[e.jsxs("div",{className:"flex justify-center items-center font-bold text-xl md:text-2xl space-x-2",children:[e.jsx(f,{size:25,className:"mr-2 text-green-500"}),"Surah Details ",r.length>0&&`(${r.length})`]}),e.jsx("div",{className:"flex justify-center text-center",children:e.jsx("hr",{className:"text-center w-2/4 md:w-1/4 mt-3 mb-8"})})]}),e.jsx("div",{className:"mb-6 text-sm text-gray-800 dark:text-white",children:e.jsx("p",{children:"The following Surahs from the Quran have been carefully selected to showcase a variety of themes and teachings. These Surahs are revealed at different times and have their own unique context and message. Feel free to explore each Surah's verses and their meanings below."})}),e.jsx(y,{searchQuery:a,setSearchQuery:m}),n.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6",children:n.map(t=>e.jsxs(h,{to:`/surah/${t.number}`,"aria-label":`Read Surah ${t.englishName}`,className:"flex flex-col p-6 mb-6 shadow-2xl rounded-xl bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",children:[e.jsx("div",{className:"text-xl font-bold text-center text-gray-800 dark:text-white",children:e.jsxs("p",{children:[t.number,". ",t.englishName]})}),e.jsxs("div",{className:"flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300",children:["Arabic:",e.jsx("strong",{className:"mx-2 font-semibold text-green-500",children:t.name})]}),e.jsxs("div",{className:"flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300",children:["English:",e.jsxs("p",{className:"mx-2 font-semibold",children:[" ",t.englishName]})]}),e.jsxs("div",{className:"flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300",children:["Translated:",e.jsx("p",{className:"mx-2 font-semibold",children:t.englishNameTranslation})]}),e.jsxs("div",{className:"flex mt-4 text-md font-bold text-gray-700 dark:text-gray-300",children:["Revelation Type:",e.jsxs("p",{className:"mx-2 font-semibold",children:[" ",t.revelationType]})]}),e.jsxs("div",{className:"mt-4 text-sm text-gray-600 dark:text-gray-400",children:["This Surah is an important part of the Quran, revealed during the ",t.revelationType," period, providing key lessons on [general message or teaching of the Surah]."]})]},t.number))}):e.jsx("p",{className:"text-center font-bold text-2xl text-red-500",children:"No Surahs match your search criteria."})]})};export{T as default};
