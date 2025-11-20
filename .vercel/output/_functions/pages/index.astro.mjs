import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_C27Lqkz0.mjs';
import 'kleur/colors';
import { b as baseUrl, $ as $$Main } from '../chunks/main_BjLudWTY.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';
export { renderers } from '../renderers.mjs';

function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] dark:from-[#1a2942] dark:to-[#0d1829] text-white flex items-center justify-center relative overflow-hidden transition-colors duration-300 pt-16 md:pt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 overflow-hidden opacity-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B35] rounded-full blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 px-5 md:px-40 max-w-7xl mx-auto text-center pb-24 md:pb-28", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-8xl font-bold mb-8 md:mb-12 animate-fade-in leading-tight", children: "Entrepreneurship Club Polimi" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl md:text-4xl mb-6 md:mb-10 text-gray-200 max-w-4xl mx-auto animate-fade-in-delay font-medium", children: "The largest student-run entrepreneurship club in Milan" }),
      /* @__PURE__ */ jsx("p", { className: "text-base md:text-xl mb-8 md:mb-12 text-gray-300 max-w-2xl mx-auto animate-fade-in-delay-2 leading-relaxed", children: "Join a community of innovators, builders, and future entrepreneurs. Learn from industry leaders, network with like-minded peers, and turn your ideas into reality." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/join`,
            className: "text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105",
            style: { backgroundColor: "#FC3F1A" },
            onMouseEnter: (e) => {
              e.currentTarget.style.backgroundColor = "#E33615";
              e.currentTarget.style.opacity = "0.95";
            },
            onMouseLeave: (e) => {
              e.currentTarget.style.backgroundColor = "#FC3F1A";
              e.currentTarget.style.opacity = "1";
            },
            children: "Join Us Today"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/events`,
            className: "bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white/30 hover:border-white/50",
            children: "Explore Events"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: scrollToContent,
        className: "absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-all duration-300 group cursor-pointer bg-transparent border-none",
        "aria-label": "Scroll to content",
        children: [
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: "Discover More" }),
          /* @__PURE__ */ jsx("div", { className: "relative w-8 h-12 border-2 border-white/50 rounded-full flex items-start justify-center pt-2 group-hover:border-white transition-colors duration-300", children: /* @__PURE__ */ jsx("div", { className: "w-1.5 h-3 bg-white/70 rounded-full animate-bounce-slow group-hover:bg-white" }) }),
          /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6 animate-bounce-slow",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: /* @__PURE__ */ jsx("path", { d: "M19 14l-7 7m0 0l-7-7m7 7V3" })
            }
          )
        ]
      }
    ),
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      ` })
  ] });
}

function FlipCard({ keyword, description, bgColor, emoji, image }) {
  const [isFlipped, setIsFlipped] = useState(false);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "relative w-full h-80 md:h-96 cursor-pointer perspective-1000",
      onClick: () => setIsFlipped(!isFlipped),
      onMouseEnter: () => setIsFlipped(true),
      onMouseLeave: () => setIsFlipped(false),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative w-full h-full", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${isFlipped ? "opacity-0 pointer-events-none" : "opacity-100"} ${bgColor}`,
              children: /* @__PURE__ */ jsxs("div", { className: "w-full h-full flex flex-col items-center justify-center p-8 text-center gap-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-white font-bold text-3xl", children: keyword }),
                image ? /* @__PURE__ */ jsx("div", { className: "w-40 h-40 md:w-48 md:h-48", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: image,
                    alt: keyword,
                    className: "w-full h-full object-cover rounded-lg shadow-md"
                  }
                ) }) : emoji ? /* @__PURE__ */ jsx("div", { className: "text-6xl", children: emoji }) : null
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: `absolute inset-0 rounded-xl shadow-lg transition-opacity duration-500 ease-in-out ${isFlipped ? "opacity-100" : "opacity-0 pointer-events-none"} bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700`,
              children: /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center p-6 md:p-8 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent", children: /* @__PURE__ */ jsx("p", { className: "text-gray-800 dark:text-gray-100 text-sm md:text-base leading-relaxed text-center", children: description }) })
            }
          )
        ] }),
        /* @__PURE__ */ jsx("style", { jsx: true, children: `
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
      ` })
      ]
    }
  );
}

function CoreValues() {
  const values = [
    {
      keyword: "Learn",
      description: "We host impactful events, hands-on workshops, and insightful speaker sessions featuring top entrepreneurs and industry experts. Gain firsthand knowledge and skills essential for navigating the startup ecosystem.",
      bgColor: "bg-[#120A68]"
    },
    {
      keyword: "Network",
      description: "Join a diverse and dynamic network of like-minded individuals. Connect with future co-founders, mentors, and industry professionals across various fields, fostering valuable collaborations and idea exchanges.",
      bgColor: "bg-[#FF6B35] dark:bg-[#E85D31]"
    },
    {
      keyword: "Build",
      description: "With the right knowledge and network at your fingertips, it's time to turn ideas into reality. Collaborate, innovate, and build scalable projects that make a lasting impact.",
      bgColor: "bg-[#120A68]"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-50 dark:bg-gray-800 transition-colors duration-300 relative overflow-hidden py-16", children: /* @__PURE__ */ jsxs("div", { className: "px-5 md:px-40 flex flex-col gap-12 md:max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white", children: "Our Core Values & Mission" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium", children: "Events • Workshops • Speaker Sessions • Knowledge • Skills" }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-gray-500 dark:text-gray-500", children: "Click or hover over each card to discover more" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsx(
      FlipCard,
      {
        keyword: value.keyword,
        description: value.description,
        bgColor: value.bgColor
      },
      index
    )) })
  ] }) });
}

function WhatWeDo() {
  const activities = [
    {
      keyword: "Events",
      description: "We curate exclusive events featuring top entrepreneurs, innovators, and business leaders. Gain insights from industry pioneers and participate in interactive discussions that shape the future of entrepreneurship.",
      bgColor: "bg-[#FF6B35] dark:bg-[#E85D31]",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop"
    },
    {
      keyword: "Startup Challenge",
      description: "Our flagship Startup Challenge unites top students from Politecnico di Milano, Bocconi University, Università Statale, and Università Cattolica to tackle real-world business challenges. Participants will collaborate in teams to develop innovative solutions, guided by industry experts and keynote speakers. Through hands-on workshops, networking sessions, and mentorship opportunities, this challenge provides an immersive experience in entrepreneurship, problem-solving, and startup development.",
      bgColor: "bg-[#120A68]",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=400&fit=crop"
    },
    {
      keyword: "Travel",
      description: "Explore Europe's most vibrant startup ecosystems. Visit pioneering companies, meet inspiring founders, and immerse yourself in diverse cultures—broadening your entrepreneurial perspective beyond borders.",
      bgColor: "bg-[#FF6B35] dark:bg-[#E85D31]",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=400&fit=crop"
    }
  ];
  return /* @__PURE__ */ jsx("div", { className: "bg-gray-50 dark:bg-gray-800 transition-colors duration-300 py-16", children: /* @__PURE__ */ jsxs("div", { className: "px-5 md:px-40 flex flex-col gap-12 md:max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center space-y-4", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white", children: "A glimpse of what we do" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium", children: "Entrepreneurs • Innovators • Business Leaders • Experts • Solutions" }),
      /* @__PURE__ */ jsx("p", { className: "text-base text-gray-500 dark:text-gray-500", children: "Click or hover over each card to learn more" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: activities.map((activity, index) => /* @__PURE__ */ jsx(
      FlipCard,
      {
        keyword: activity.keyword,
        description: activity.description,
        bgColor: activity.bgColor,
        image: activity.image
      },
      index
    )) })
  ] }) });
}

function Sponsors() {
  return /* @__PURE__ */ jsx("section", { className: "py-20 px-5 bg-white dark:bg-gray-900 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 text-center", children: "Sponsors" }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto items-center", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://polihub.it/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center transition-all duration-300 hover:scale-110 group",
          children: /* @__PURE__ */ jsx("div", { className: "w-full h-32 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300", children: "PoliHub" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://jemp.it/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center transition-all duration-300 hover:scale-110 group",
          children: /* @__PURE__ */ jsx("div", { className: "w-full h-32 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300", children: "JEMP" })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "https://astraincubator.com/",
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex items-center justify-center transition-all duration-300 hover:scale-110 group",
          children: /* @__PURE__ */ jsx("div", { className: "w-full h-32 flex items-center justify-center", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("svg", { className: "w-24 h-24 mx-auto text-gray-400 group-hover:text-blue-500 transition-colors duration-300", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 font-semibold text-xl mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300", children: "Astra" })
          ] }) })
        }
      )
    ] })
  ] }) });
}

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", Hero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/Hero", "client:component-export": "default" })} ${renderComponent($$result2, "CoreValues", CoreValues, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/CoreValues", "client:component-export": "default" })} ${renderComponent($$result2, "WhatWeDo", WhatWeDo, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/WhatWeDo", "client:component-export": "default" })} ${renderComponent($$result2, "Sponsors", Sponsors, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/home/Sponsors", "client:component-export": "default" })} ` })}`;
}, "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/index.astro", void 0);

const $$file = "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
