import{r as i,j as e}from"./index-BlyaFP9m.js";import{H as d}from"./Utils-B8xnQMIN.js";import{R as x}from"./index-ByDzYbbZ.js";import"./iconBase-DxbKi1KB.js";const m="https://api.aladhan.com/v1",u=async(n,r)=>{const s=await fetch(`${m}/qibla/${n}/${r}`,{mode:"cors",headers:d});return console.log("Qibla",s),s.json().data};function y(){const[n,r]=i.useState(null),[s,o]=i.useState(null);return i.useEffect(()=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(a=>{const{latitude:c,longitude:l}=a.coords;u(c.toFixed(6),l.toFixed(6)).then(t=>t.data).then(t=>r(t.direction)).catch(t=>o(t.message))},a=>o(a.message)):o("Geolocation is not supported by this browser.")},[]),e.jsxs("div",{className:"p-6 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen dark:from-gray-800 dark:to-gray-900",children:[e.jsxs("div",{className:"text-center mb-12",children:[e.jsxs("h2",{className:"text-2xl font-semibold text-center dark:text-white",children:[e.jsxs("div",{className:"flex justify-center items-center font-bold text-xl md:text-2xl space-x-2",children:[e.jsx(x,{size:25,className:"mr-3 text-green-500"}),"Qibla Direction"]}),e.jsx("div",{className:"flex justify-center text-center",children:e.jsx("hr",{className:"text-center w-1/2 sm:w-1/3 md:w-1/5 mt-3 mb-8"})})]}),e.jsx("p",{className:"mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300",children:"Here you can explore your daily duas, favorite prayers, and reminders. Choose any category below to dive deeper into your spiritual journey."})]}),e.jsx("div",{className:"dark:text-yellow-300 text-center text-2xl font-bold text-red-500",children:"Feature is coming soon..."})]})}export{y as default};
