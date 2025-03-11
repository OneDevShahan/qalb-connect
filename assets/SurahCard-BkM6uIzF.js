import{u as h,b as g,r as n,j as e}from"./index-BlyaFP9m.js";import{G as u}from"./index-3kZfdK2R.js";import{L as f}from"./LoadingIcon-Dw00p04L.js";import{S as y}from"./SearchBar-BgttLusG.js";import"./iconBase-DxbKi1KB.js";import"./index-COsmeGCm.js";const S=()=>{const l=h(),i=g(),{data:d}=l.state,[s,o]=n.useState(null),[r,c]=n.useState(""),a=d.surahs.filter(t=>t.name.toLowerCase().includes(r.toLowerCase())||t.englishName.toLowerCase().includes(r.toLowerCase())||t.englishNameTranslation.toLowerCase().includes(r.toLowerCase())||t.revelationType.toLowerCase().includes(r.toLowerCase())),m=async t=>{o(t.number);try{i("/ayah-details",{state:{surah:t}}),o(null)}catch(x){console.error("Error loading Surah:",x),o(null)}};return e.jsxs("div",{className:"p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-center dark:text-white",children:[e.jsxs("div",{className:"flex justify-center items-center font-bold text-xl md:text-2xl space-x-2",children:[e.jsx(u,{size:25,className:"mr-2 text-green-500"}),"Surah Details"," ",a.length>0&&`(${a.length})`]}),e.jsx("div",{className:"flex justify-center text-center",children:e.jsx("hr",{className:"text-center w-2/4 md:w-1/4 mt-3 mb-8"})})]}),e.jsx("div",{className:"mb-6 text-sm text-gray-800 dark:text-white",children:e.jsx("p",{children:"The following Surahs from the Quran have been carefully selected to showcase a variety of themes and teachings. These Surahs are revealed at different times and have their own unique context and message. Feel free to explore each Surah's verses and their meanings below."})}),e.jsx(y,{searchQuery:r,setSearchQuery:c,size:"medium"}),a.length>0?e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6",children:a.map(t=>e.jsxs("div",{className:"flex flex-col p-6 mb-6 shadow-2xl rounded-xl bg-gradient-to-r from-blue-50 via-purple-100 to-indigo-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800",children:[e.jsxs("div",{className:"flex-grow",children:[e.jsxs("h2",{className:"text-xl font-bold text-gray-800 dark:text-white",children:[t.number,". ",t.englishName]}),e.jsxs("p",{className:"mt-4 text-sm font-bold text-gray-700 dark:text-gray-300",children:["Name: ",t.name]}),e.jsxs("p",{className:"mt-4 text-sm font-bold text-gray-700 dark:text-gray-300",children:["Translated: ",t.englishNameTranslation]}),e.jsxs("p",{className:"mt-4 text-sm font-bold text-gray-700 dark:text-gray-300",children:["Revelation Type: ",t.revelationType]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{onClick:()=>m(t),className:`w-full flex items-center justify-center px-4 py-2 
                  bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md
                  hover:from-green-500 hover:to-green-700 
                  ${s===t.number?"bg-gray-400 cursor-not-allowed":"bg-red-500 hover:bg-red-600"} // If not loading, set a red button color
                  transition-colors duration-300 ease-in-out`,disabled:s===t.number,children:s===t.number?e.jsxs(e.Fragment,{children:[e.jsx(f,{size:"1.25em",color:"yellow"})," "]}):e.jsx("p",{className:"text-white",children:"View Detailed Ayahs"})})})]},t.number))}):e.jsx("p",{className:"text-center font-bold text-2xl text-red-500",children:"No Surahs match your search criteria."})]})};export{S as default};
