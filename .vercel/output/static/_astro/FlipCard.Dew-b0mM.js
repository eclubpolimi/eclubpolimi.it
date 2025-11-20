import{j as r}from"./jsx-runtime.D_zvdyIk.js";import{r as c}from"./index.RH_Wq4ov.js";function b({keyword:l,description:o,bgColor:i,emoji:a,image:s}){const[e,t]=c.useState(!1);return r.jsxs("div",{className:"relative w-full h-80 md:h-96 cursor-pointer perspective-1000",onClick:()=>t(!e),onMouseEnter:()=>t(!0),onMouseLeave:()=>t(!1),children:[r.jsxs("div",{className:"relative w-full h-full",children:[r.jsx("div",{className:`absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${e?"opacity-0 pointer-events-none":"opacity-100"} ${i}`,children:r.jsxs("div",{className:"w-full h-full flex flex-col items-center justify-center p-8 text-center gap-6",children:[r.jsx("h3",{className:"text-white font-bold text-3xl",children:l}),s?r.jsx("div",{className:"w-40 h-40 md:w-48 md:h-48",children:r.jsx("img",{src:s,alt:l,className:"w-full h-full object-cover rounded-lg shadow-md"})}):a?r.jsx("div",{className:"text-6xl",children:a}):null]})}),r.jsx("div",{className:`absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${e?"opacity-100":"opacity-0 pointer-events-none"} bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700`,children:r.jsx("div",{className:"w-full h-full flex items-center justify-center p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent",children:r.jsx("p",{className:"text-gray-800 dark:text-gray-100 text-sm md:text-base leading-relaxed text-center",children:o})})})]}),r.jsx("style",{jsx:!0,children:`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(156, 163, 175, 0.5);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.7);
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(75, 85, 99, 0.7);
        }
        .dark .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(75, 85, 99, 0.9);
        }
      `})]})}export{b as F};
