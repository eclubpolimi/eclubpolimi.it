import { e as createComponent, f as createAstro, r as renderTemplate, k as renderComponent, l as renderSlot, n as renderHead, h as addAttribute } from './astro/server_C27Lqkz0.mjs';
import 'kleur/colors';
/* empty css                          */
import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Rocket } from 'lucide-react';

const baseUrl = "/".replace(/\/$/, "");

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isRocketHovered, setIsRocketHovered] = useState(false);
  return /* @__PURE__ */ jsxs("nav", { className: "fixed top-0 left-0 right-0 z-50 backdrop-blur-md shadow-md transition-colors duration-300", style: { backgroundColor: "#120A68" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "px-5 md:px-40 py-4 flex justify-between items-center", children: [
      /* @__PURE__ */ jsx("a", { href: baseUrl || "/", className: "flex items-center space-x-2", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-white", children: "E-Club Polimi" }) }),
      /* @__PURE__ */ jsxs("div", { className: "hidden md:flex items-center space-x-8", children: [
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/`,
            className: "text-white hover:text-gray-200 transition-colors duration-200",
            children: "Home"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/our-team`,
            className: "text-white hover:text-gray-200 transition-colors duration-200",
            children: "Our Team"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/events`,
            className: "text-white hover:text-gray-200 transition-colors duration-200",
            children: "Events"
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "relative",
            onMouseEnter: () => setIsDropdownOpen(true),
            onMouseLeave: () => setIsDropdownOpen(false),
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  className: "flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200",
                  onMouseEnter: () => setIsRocketHovered(true),
                  onMouseLeave: () => setIsRocketHovered(false),
                  children: [
                    /* @__PURE__ */ jsx(
                      Rocket,
                      {
                        className: `w-4 h-4 text-[#FC3F1A] transition-all duration-500 ${isRocketHovered ? "-translate-y-2 rotate-[-15deg]" : "rotate-[-15deg]"}`,
                        style: {
                          filter: isRocketHovered ? "drop-shadow(0 0 8px rgba(252, 63, 26, 0.6))" : "none"
                        }
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700 font-medium", children: "Startup Challenge" }),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: `w-4 h-4 text-gray-700 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`,
                        fill: "none",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        strokeWidth: "2",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor",
                        children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7" })
                      }
                    )
                  ]
                }
              ),
              isDropdownOpen && /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute top-full left-0 right-0 pt-2",
                  style: { marginTop: "0px" },
                  children: /* @__PURE__ */ jsxs("div", { className: "w-56 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden animate-fade-in", children: [
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: `${baseUrl}/usc-2024`,
                        className: "block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200",
                        onClick: () => setIsDropdownOpen(false),
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("span", { children: "USC 2024" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600", children: "Finished" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: `${baseUrl}/usc-2025`,
                        className: "block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200 border-b border-gray-200",
                        onClick: () => setIsDropdownOpen(false),
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("span", { children: "USC 2025" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-gray-200 rounded-full text-gray-600", children: "Finished" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "a",
                      {
                        href: `${baseUrl}/usc-2026`,
                        className: "block px-4 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200",
                        onClick: () => setIsDropdownOpen(false),
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("span", { children: "USC 2026" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-[#FC3F1A] text-white rounded-full", children: "Coming Soon" })
                        ] })
                      }
                    )
                  ] })
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/network`,
            className: "text-white hover:text-gray-200 transition-colors duration-200",
            children: "Network"
          }
        ),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: `${baseUrl}/join`,
            className: "px-6 py-2 rounded-lg font-semibold transition-colors duration-200",
            style: { backgroundColor: "#FC3F1A", color: "white" },
            onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#E0371A",
            onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#FC3F1A",
            children: "Join us"
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          className: "md:hidden text-white focus:outline-none",
          onClick: () => setIsOpen(!isOpen),
          "aria-label": "Toggle menu",
          children: /* @__PURE__ */ jsx(
            "svg",
            {
              className: "w-6 h-6 text-white",
              fill: "none",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              viewBox: "0 0 24 24",
              stroke: "currentColor",
              children: isOpen ? /* @__PURE__ */ jsx("path", { d: "M6 18L18 6M6 6l12 12" }) : /* @__PURE__ */ jsx("path", { d: "M4 6h16M4 12h16M4 18h16" })
            }
          )
        }
      )
    ] }),
    isOpen && /* @__PURE__ */ jsx("div", { className: "md:hidden border-t border-white/20 transition-colors duration-300", style: { backgroundColor: "#120A68" }, children: /* @__PURE__ */ jsxs("div", { className: "px-5 py-4 space-y-4", children: [
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `${baseUrl}/`,
          className: "block text-white hover:text-gray-200 transition-colors duration-200 py-2",
          onClick: () => setIsOpen(false),
          children: "Home"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `${baseUrl}/our-team`,
          className: "block text-white hover:text-gray-200 transition-colors duration-200 py-2",
          onClick: () => setIsOpen(false),
          children: "Our Team"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `${baseUrl}/events`,
          className: "block text-white hover:text-gray-200 transition-colors duration-200 py-2",
          onClick: () => setIsOpen(false),
          children: "Events"
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => setIsDropdownOpen(!isDropdownOpen),
            className: "flex items-center justify-between w-full text-white hover:text-gray-200 transition-colors duration-200 py-2",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Rocket, { className: "w-5 h-5 text-[#FC3F1A] rotate-[-15deg]" }),
                /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: "Startup Challenge" })
              ] }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  className: `w-5 h-5 text-white transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`,
                  fill: "none",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "2",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: /* @__PURE__ */ jsx("path", { d: "M19 9l-7 7-7-7" })
                }
              )
            ]
          }
        ),
        isDropdownOpen && /* @__PURE__ */ jsxs("div", { className: "pl-4 space-y-1 animate-fade-in bg-white/5 backdrop-blur-sm rounded-lg py-3 border border-white/10", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `${baseUrl}/usc-2024`,
              className: "flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200",
              onClick: () => {
                setIsOpen(false);
                setIsDropdownOpen(false);
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "USC 2024" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-gray-600 rounded-full text-gray-300", children: "Finished" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `${baseUrl}/usc-2025`,
              className: "flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200",
              onClick: () => {
                setIsOpen(false);
                setIsDropdownOpen(false);
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "USC 2025" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-gray-600 rounded-full text-gray-300", children: "Finished" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: `${baseUrl}/usc-2026`,
              className: "flex items-center justify-between px-3 py-2.5 text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-all duration-200",
              onClick: () => {
                setIsOpen(false);
                setIsDropdownOpen(false);
              },
              children: [
                /* @__PURE__ */ jsx("span", { className: "font-medium", children: "USC 2026" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs px-2 py-1 bg-[#FC3F1A] rounded-full text-white font-medium", children: "Coming Soon" })
              ]
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `${baseUrl}/network`,
          className: "block text-white hover:text-gray-200 transition-colors duration-200 py-2",
          onClick: () => setIsOpen(false),
          children: "Network"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: `${baseUrl}/join`,
          className: "block px-6 py-3 rounded-lg font-semibold text-center transition-colors duration-200 mt-2",
          style: { backgroundColor: "#FC3F1A", color: "white" },
          onMouseEnter: (e) => e.currentTarget.style.backgroundColor = "#E0371A",
          onMouseLeave: (e) => e.currentTarget.style.backgroundColor = "#FC3F1A",
          onClick: () => setIsOpen(false),
          children: "Join us"
        }
      )
    ] }) })
  ] });
}

function Footer() {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center p-2 pb-6 transition-colors duration-300", style: { backgroundColor: "#120A68" }, children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-lg p-3", children: [
      /* @__PURE__ */ jsx("div", { className: "text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center", children: /* @__PURE__ */ jsx("div", { className: "text-white font-bold text-4xl mb-4", children: "E-Club Polimi" }) }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center w-full lg:w-1/2 mt-6 lg:mt-0", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-white text-lg font-semibold text-center lg:text-left mb-4", children: "Contact Us" }),
        /* @__PURE__ */ jsxs("div", { className: "flex space-x-6", children: [
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.instagram.com/eclubpolimi/",
              target: "_blank",
              rel: "noreferrer",
              className: "text-white hover:text-gray-200 transition-colors",
              children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.linkedin.com/company/eclubpolimi/",
              target: "_blank",
              rel: "noreferrer",
              className: "text-white hover:text-gray-200 transition-colors",
              children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "https://www.facebook.com/eclubpolimi/",
              target: "_blank",
              rel: "noreferrer",
              className: "text-white hover:text-gray-200 transition-colors",
              children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" }) })
            }
          ),
          /* @__PURE__ */ jsx(
            "a",
            {
              href: "mailto:info@eclubpolimi.it",
              target: "_blank",
              rel: "noreferrer",
              className: "text-white hover:text-gray-200 transition-colors",
              children: /* @__PURE__ */ jsx("svg", { className: "w-8 h-8", fill: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" }) })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "text-white text-xs mt-9 text-center", children: [
      "Copyright © ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " E-Club Polimi. All rights reserved."
    ] })
  ] }) });
}

function ThemeToggle() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-4 left-4 z-50 bg-[#2B5DAA] dark:bg-[#1e3a5f] transition-colors duration-300 p-2 rounded-full shadow-lg sm:bottom-6 sm:left-6 md:bottom-8 md:left-8", children: /* @__PURE__ */ jsxs(
    "button",
    {
      onClick: toggleTheme,
      className: "relative w-14 h-7 rounded-full bg-gray-500 dark:bg-gray-600 cursor-pointer transition-colors flex items-center px-1",
      "aria-label": "Toggle theme",
      children: [
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: `h-5 w-5 text-gray-600 dark:text-gray-200 absolute right-1 transition-opacity duration-300 ${theme === "dark" ? "opacity-100" : "opacity-30"}`,
            children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z", clipRule: "evenodd" })
          }
        ),
        /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 20 20",
            fill: "currentColor",
            className: `h-5 w-5 text-yellow-400 absolute left-1 transition-opacity duration-300 ${theme === "light" ? "opacity-100" : "opacity-30"}`,
            children: /* @__PURE__ */ jsx("path", { d: "M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: `absolute w-6 h-6 bg-white dark:bg-gray-800 rounded-full shadow-md transition-transform duration-300 ${theme === "dark" ? "translate-x-7" : "translate-x-0"}`
          }
        )
      ]
    }
  ) });
}

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><link rel="icon" type="image/png" href="/favicon.ico"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><meta name="description" content="Entrepreneurship Club Polimi - Fostering innovation and entrepreneurship at Politecnico di Milano"><meta name="theme-color" content="#ffffff"><title>E-Club Polimi</title><!-- Dark mode script (runs before page render to prevent flash) --><script>\n      (function() {\n        const theme = localStorage.getItem("theme");\n        if (theme === "dark") {\n          document.documentElement.classList.add("dark");\n        } else {\n          document.documentElement.classList.remove("dark");\n        }\n      })();\n    <\/script>', '</head> <body class="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen transition-colors duration-300"> <div class="flex flex-col min-h-screen transition-colors duration-300"> <!-- Navigation --> ', ' <!-- Main content --> <main class="flex-grow transition-colors duration-300"> ', " </main> <!-- Footer --> ", " </div> <!-- Theme toggle button --> ", " </body></html>"])), addAttribute(Astro2.generator, "content"), renderHead(), renderComponent($$result, "Navbar", Navbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/Navbar", "client:component-export": "default" }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/Footer", "client:component-export": "default" }), renderComponent($$result, "ThemeToggle", ThemeToggle, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/components/ThemeToggle", "client:component-export": "default" }));
}, "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/layouts/main.astro", void 0);

export { $$Main as $, baseUrl as b };
