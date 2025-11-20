import { e as createComponent, k as renderComponent, r as renderTemplate } from '../chunks/astro/server_C27Lqkz0.mjs';
import 'kleur/colors';
import { f as fetchTeamMembersFromContentful, a as fetchTeamDescriptionsFromContentful, b as fetchSiteImagesFromContentful, $ as $$Main } from '../chunks/main_1fEQDcjL.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Instagram, Linkedin } from 'lucide-react';
import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';
export { renderers } from '../renderers.mjs';

function TeamMemberCard({
  name,
  role,
  photo,
  instagramLink,
  linkedinLink
}) {
  const hasLinks = Boolean(instagramLink || linkedinLink);
  const isCoordinator = role.toLowerCase().includes("coordinator");
  const wrapperClasses = [
    "group w-full max-w-[215px]",
    isCoordinator ? "rounded-2xl p-[3px] bg-gradient-to-r from-[#4cc9ff50] via-[#4c7bff70] to-[#4cc9ff50]" : ""
  ].join(" ").trim();
  const cardClasses = [
    "w-full flex flex-col rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border",
    isCoordinator ? "border-[#8ac7ff]/70" : "border-white/60 dark:border-gray-800"
  ].join(" ").trim();
  return /* @__PURE__ */ jsx("div", { className: wrapperClasses, children: /* @__PURE__ */ jsxs("div", { className: cardClasses, children: [
    /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-square overflow-hidden rounded-[16px] bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-800 dark:to-gray-900", children: [
      photo ? /* @__PURE__ */ jsx(
        "img",
        {
          src: photo,
          alt: name,
          className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-105",
          loading: "lazy"
        }
      ) : /* @__PURE__ */ jsx("div", { className: "w-full h-full flex items-center justify-center text-4xl text-gray-500 bg-white/40", children: "👤" }),
      hasLinks && /* @__PURE__ */ jsx("div", { className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black flex items-end justify-center pb-[5px] gap-4", children: [
        instagramLink && /* @__PURE__ */ jsx(
          "a",
          {
            href: instagramLink,
            target: "_blank",
            rel: "noreferrer",
            className: "transition-transform duration-200 hover:scale-110",
            "aria-label": `${name} Instagram profile`,
            children: /* @__PURE__ */ jsx(Instagram, { className: "w-8 h-8 text-white" })
          }
        ),
        linkedinLink && /* @__PURE__ */ jsx(
          "a",
          {
            href: linkedinLink,
            target: "_blank",
            rel: "noreferrer",
            className: "transition-transform duration-200 hover:scale-110",
            "aria-label": `${name} LinkedIn profile`,
            children: /* @__PURE__ */ jsx(Linkedin, { className: "w-8 h-8 text-white" })
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "px-4 pt-0 pb-4", children: [
      /* @__PURE__ */ jsx("h5", { className: "text-xs font-semibold text-gray-900 dark:text-white leading-tight uppercase tracking-wide", children: name }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-[#2B5DAA] dark:text-[#8FB7FF]", children: role })
    ] })
  ] }) });
}

const fallbackTeamData = {
  board: [],
  events: [],
  corporate: [],
  humanCapital: [],
  marketing: [],
  it: []
};
const TEAM_TITLE_ORDER = [
  "Board",
  "Human Capital and Internal Processes",
  "Events",
  "Corporate and External Relationships",
  "Marketing",
  "Information Technology"
];
const FALLBACK_SECTIONS = [
  { title: "Board", members: fallbackTeamData.board },
  { title: "Human Capital and Internal Processes", members: fallbackTeamData.humanCapital },
  { title: "Events", members: fallbackTeamData.events },
  { title: "Corporate and External Relationships", members: fallbackTeamData.corporate },
  { title: "Marketing", members: fallbackTeamData.marketing },
  { title: "Information Technology", members: fallbackTeamData.it }
];
const DEFAULT_QUOTE = "Proud member of E-Club Polimi.";
const DEFAULT_AUTHOR = "E-Club Polimi";
const DEFAULT_MISSION_INTRO = "Our core mission is to create impactful opportunities for students by organizing high-quality events—from intimate networking sessions to large-scale gatherings. As an active part of Milan's entrepreneurial ecosystem, we bridge the gap between aspiring founders, industry leaders, and like-minded university clubs. Through strategic partnerships and cross-border collaborations, we are expanding our reach across Europe to empower the next generation of innovators and changemakers.";
const markdownToHtml = (markdown) => {
  if (!markdown) return void 0;
  const raw = marked.parse(markdown);
  if (typeof raw !== "string") {
    return void 0;
  }
  return sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "h1", "h2", "h3"]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title"]
    }
  });
};
const TEAM_DESCRIPTIONS = {
  Board: {
    intro: "Lead the strategic direction, partnerships, and impact of E-Club.",
    bullets: [
      "Craft the club vision and yearly roadmap",
      "Coordinate with all departments to ensure aligned execution",
      "Represent E-Club in institutional and external occasions"
    ]
  },
  Events: {
    intro: "Plan and execute events that resonate with our three core pillars.",
    bullets: [
      "Manage logistics, run of show, and budgets",
      "Coordinate task forces on WhatsApp and Notion",
      "Collaborate with Corporate Relations and Marketing teams"
    ]
  },
  "Human Capital and Internal Processes": {
    intro: "Grow and support the people that make E-Club possible.",
    bullets: [
      "Lead recruiting and onboarding",
      "Own internal communications and knowledge sharing",
      "Promote culture initiatives and member success"
    ]
  },
  "Corporate and External Relationships": {
    intro: "Build long-term partnerships with companies and associations.",
    bullets: [
      "Scout and manage sponsors",
      "Coordinate collaborations with other student clubs",
      "Showcase partner value through custom touchpoints"
    ]
  },
  Marketing: {
    intro: "Tell the E-Club story across channels and formats.",
    bullets: [
      "Design campaigns for launches and announcements",
      "Run social media and newsletter content",
      "Collaborate with Events to capture highlights"
    ]
  },
  "Information Technology": {
    intro: "Ship the digital experiences that power our community.",
    bullets: [
      "Maintain the website and internal tools",
      "Support events with registration and analytics",
      "Prototype new experiences leveraging automation"
    ]
  },
  "Our Mission": {
    intro: DEFAULT_MISSION_INTRO,
    bullets: []
  }
};
const DESCRIPTION_SLUG_TO_TITLE = {
  driver_board: "Board",
  driver_events: "Events",
  driver_hc: "Human Capital and Internal Processes",
  driver_corporate: "Corporate and External Relationships",
  driver_marketing: "Marketing",
  driver_it: "Information Technology",
  driver_ourMission: "Our Mission"
};
const normalizeTeamTitle = (team) => {
  if (!team) return "Other";
  const key = team.trim().toLowerCase();
  if (key.includes("corporate")) {
    return "Corporate and External Relationships";
  }
  if (key.includes("human capital")) {
    return "Human Capital and Internal Processes";
  }
  if (key.includes("information")) {
    return "Information Technology";
  }
  if (key.includes("board")) {
    return "Board";
  }
  if (key.includes("event")) {
    return "Events";
  }
  if (key.includes("marketing")) {
    return "Marketing";
  }
  return team;
};
const buildQuote = (member) => {
  if (member.quote) return member.quote;
  if (member.instagramLink) return "Let’s connect on Instagram.";
  if (member.linkedinLink) return "Let’s connect on LinkedIn.";
  if (member.email) return `Email me at ${member.email}`;
  return DEFAULT_QUOTE;
};
const buildAuthor = (member) => member.quoteAuthor ?? member.role ?? DEFAULT_AUTHOR;
const BOARD_ROLE_ORDER = [
  "president",
  "vice-president",
  "treasurer",
  "secretary",
  "public relations"
];
const prioritizeCoordinators = (members) => {
  const coordinators = [];
  const others = [];
  members.forEach((member) => {
    const role = member.role?.toLowerCase() ?? "";
    if (role.includes("coordinator")) {
      coordinators.push(member);
    } else {
      others.push(member);
    }
  });
  return [...coordinators, ...others];
};
const arrangeMembersForSection = (title, members) => {
  let arranged = prioritizeCoordinators(members);
  if (title === "Board") {
    arranged = [...arranged].sort((a, b) => {
      const roleA = a.role.toLowerCase();
      const roleB = b.role.toLowerCase();
      const indexA = BOARD_ROLE_ORDER.findIndex((role) => roleA.includes(role));
      const indexB = BOARD_ROLE_ORDER.findIndex((role) => roleB.includes(role));
      const fallback = BOARD_ROLE_ORDER.length;
      return (indexA === -1 ? fallback : indexA) - (indexB === -1 ? fallback : indexB);
    });
  }
  return arranged;
};
const parseDescriptionText = (text) => {
  const html = markdownToHtml(text);
  if (!html) return void 0;
  return { html };
};
const buildDescriptionsFromContentful = (entries) => {
  const map = {};
  entries?.forEach((entry) => {
    const slug = entry.textArea ?? "";
    const title = DESCRIPTION_SLUG_TO_TITLE[slug];
    if (!title) return;
    const description = parseDescriptionText(entry.textField);
    if (description) {
      map[title] = description;
    }
  });
  return map;
};
const mapMemberToCarousel = (member) => ({
  name: member.nameSurname ?? "E-Club Member",
  role: member.role ?? member.team ?? "Member",
  photo: member.image?.url ?? "",
  quote: buildQuote(member),
  author: buildAuthor(member),
  instagramLink: member.instagramLink ?? void 0,
  linkedinLink: member.linkedinLink ?? void 0
});
const buildTeamSections = (members) => {
  if (!members?.length) return [];
  const grouped = /* @__PURE__ */ new Map();
  members.forEach((member) => {
    const title = normalizeTeamTitle(member.team);
    const normalizedMember = mapMemberToCarousel(member);
    const existing = grouped.get(title);
    if (existing) {
      existing.push(normalizedMember);
    } else {
      grouped.set(title, [normalizedMember]);
    }
  });
  const orderedSections = [];
  TEAM_TITLE_ORDER.forEach((title) => {
    const sectionMembers = grouped.get(title);
    if (sectionMembers?.length) {
      orderedSections.push({ title, members: arrangeMembersForSection(title, sectionMembers) });
      grouped.delete(title);
    }
  });
  grouped.forEach((sectionMembers, title) => {
    orderedSections.push({ title, members: arrangeMembersForSection(title, sectionMembers) });
  });
  return orderedSections;
};
function TeamSectionBlock({
  title,
  members,
  description
}) {
  const sectionDescription = description ?? TEAM_DESCRIPTIONS[title];
  return /* @__PURE__ */ jsxs("section", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: title }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 h-[3px] bg-gray-200 dark:bg-gray-700 rounded-full" }),
      sectionDescription && /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-2 text-gray-600 dark:text-gray-300", children: sectionDescription.html ? /* @__PURE__ */ jsx(
        "div",
        {
          className: "prose prose-sm text-gray-600 dark:text-gray-300 max-w-none",
          dangerouslySetInnerHTML: { __html: sectionDescription.html }
        }
      ) : /* @__PURE__ */ jsxs(Fragment, { children: [
        sectionDescription.intro && /* @__PURE__ */ jsx("p", { className: "text-base", children: sectionDescription.intro }),
        sectionDescription.bullets && sectionDescription.bullets.length > 0 && /* @__PURE__ */ jsx("ul", { className: "list-disc list-inside space-y-1 text-sm", children: sectionDescription.bullets.map((bullet) => /* @__PURE__ */ jsx("li", { children: bullet }, bullet)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5", children: members.map((member, index) => /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(
      TeamMemberCard,
      {
        name: member.name,
        role: member.role,
        photo: member.photo,
        instagramLink: member.instagramLink,
        linkedinLink: member.linkedinLink
      }
    ) }, `${member.name}-${index}`)) })
  ] });
}
function OurTeamSection(props = {}) {
  const { teamMembers, teamDescriptions, heroImage } = props;
  if (teamMembers && teamMembers.length > 0) {
    console.log("[OurTeamSection] First team member received:", teamMembers[0]);
  }
  const sectionsToRender = buildTeamSections(teamMembers);
  const visibleSections = sectionsToRender.length ? sectionsToRender : FALLBACK_SECTIONS;
  const descriptionOverrides = buildDescriptionsFromContentful(teamDescriptions);
  const combinedDescriptions = { ...TEAM_DESCRIPTIONS, ...descriptionOverrides };
  const missionDescription = combinedDescriptions["Our Mission"];
  const missionIntro = missionDescription?.intro ?? DEFAULT_MISSION_INTRO;
  const heroImageLight = heroImage?.imageLightMode?.url ?? heroImage?.url ?? void 0;
  const heroImageDark = heroImage?.imageDarkMode?.url ?? heroImageLight;
  const heroAlt = heroImage?.imageLightMode?.description ?? heroImage?.imageDarkMode?.description ?? heroImage?.imageLightMode?.title ?? heroImage?.imageDarkMode?.title ?? "Our Team Hero Image";
  return /* @__PURE__ */ jsx("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900 py-20 px-5 transition-colors duration-300", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16 animate-fade-in", children: /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6", children: "Our Team" }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-20 animate-fade-in-delay", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "w-full h-96 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] flex items-center justify-center", children: heroImageLight ? /* @__PURE__ */ jsxs("picture", { className: "w-full h-full", children: [
        heroImageDark && /* @__PURE__ */ jsx("source", { media: "(prefers-color-scheme: dark)", srcSet: heroImageDark }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: heroImageLight,
            alt: heroAlt,
            className: "w-full h-full object-cover",
            loading: "lazy"
          }
        )
      ] }) : /* @__PURE__ */ jsxs("div", { className: "text-white/30 text-center p-8", children: [
        /* @__PURE__ */ jsx("svg", { className: "w-24 h-24 mx-auto mb-4", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx(
          "path",
          {
            fillRule: "evenodd",
            d: "M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",
            clipRule: "evenodd"
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Landscape image placeholder" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs mt-2", children: "Replace with actual team photo" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Our Mission" }),
        missionDescription?.html ? /* @__PURE__ */ jsx(
          "div",
          {
            className: "prose prose-base text-gray-700 dark:text-gray-300 max-w-none",
            dangerouslySetInnerHTML: { __html: missionDescription.html }
          }
        ) : /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700 dark:text-gray-300 leading-relaxed", children: missionIntro }),
          missionDescription?.bullets?.length ? /* @__PURE__ */ jsx("ul", { className: "mt-4 list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2", children: missionDescription.bullets.map((bullet) => /* @__PURE__ */ jsx("li", { children: bullet }, bullet)) }) : null
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "text-center mb-16 animate-fade-in", children: /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white", children: "E-Club Teams" }) }),
    /* @__PURE__ */ jsx("div", { className: "space-y-16", children: visibleSections.map((section) => /* @__PURE__ */ jsx(
      TeamSectionBlock,
      {
        title: section.title,
        members: section.members,
        description: combinedDescriptions[section.title]
      },
      section.title
    )) }),
    /* @__PURE__ */ jsx("div", { className: "mt-20 text-center animate-fade-in-delay-3", children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] dark:from-[#1a2942] dark:to-[#0d1829] rounded-2xl p-12 shadow-xl", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: "Want to Join Our Team?" }),
      /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-200 mb-8 max-w-2xl mx-auto", children: "We're always looking for passionate individuals to join our mission. Be part of something bigger." }),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/join",
          style: { backgroundColor: "#FC3F1A" },
          className: "inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:opacity-90",
          children: "Join E-Club Polimi"
        }
      )
    ] }) })
  ] }) });
}

const $$OurTeam = createComponent(async ($$result, $$props, $$slots) => {
  const [teamMembers, teamDescriptions, siteImages] = await Promise.all([
    fetchTeamMembersFromContentful(),
    fetchTeamDescriptionsFromContentful(),
    fetchSiteImagesFromContentful()
  ]);
  console.log("[Our Team Page] First Contentful team member:", teamMembers?.[0]);
  const heroAsset = siteImages?.find(
    (asset) => asset.key?.toLowerCase() === "driver_hero_background"
  );
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Main, {}, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "OurTeamSection", OurTeamSection, { "client:load": true, "teamMembers": teamMembers, "teamDescriptions": teamDescriptions, "heroImage": heroAsset, "client:component-hydration": "load", "client:component-path": "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/team/OurTeamSection.tsx", "client:component-export": "default" })} ` })}`;
}, "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/our-team.astro", void 0);

const $$file = "/Users/yuwei/Documents/GitHub/eclubpolimi.it/src/pages/our-team.astro";
const $$url = "/our-team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$OurTeam,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
