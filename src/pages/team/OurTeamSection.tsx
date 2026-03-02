import TeamMemberCard from "../../components/TeamMemberCard";
import { marked } from "marked";
import sanitizeHtml from "sanitize-html";
import type { SiteImageAsset } from "../../lib/contentful";

type ContentfulTeamMember = {
  nameSurname?: string | null;
  team?: string | null;
  role?: string | null;
  email?: string | null;
  instagramLink?: string | null;
  linkedinLink?: string | null;
  quote?: string | null;
  quoteAuthor?: string | null;
  image?: {
    url?: string | null;
    description?: string | null;
  } | null;
};

type CarouselMember = {
  name: string;
  role: string;
  photo: string;
  quote?: string;
  author?: string;
  instagramLink?: string;
  linkedinLink?: string;
};

type TeamSectionData = {
  title: string;
  members: CarouselMember[];
};

type ContentfulTeamDescription = {
  textArea?: string | null;
  textField?: string | null;
};

type DescriptionContent = {
  intro?: string;
  bullets?: string[];
  html?: string;
};

type OurTeamSectionProps = {
  teamMembers?: ContentfulTeamMember[];
  teamDescriptions?: ContentfulTeamDescription[];
  heroImage?: SiteImageAsset;
};

// Team data organized by department
const fallbackTeamData = {
  board: [],
  events: [],
  corporate: [],
  humanCapital: [],
  marketing: [],
  it: [],
};

const TEAM_TITLE_ORDER = [
  "Board",
  "Human Capital and Internal Processes",
  "Events",
  "Corporate and External Relationships",
  "Marketing",
  "Information Technology",
];

const FALLBACK_SECTIONS: TeamSectionData[] = [
  { title: "Board", members: fallbackTeamData.board },
  {
    title: "Human Capital and Internal Processes",
    members: fallbackTeamData.humanCapital,
  },
  { title: "Events", members: fallbackTeamData.events },
  {
    title: "Corporate and External Relationships",
    members: fallbackTeamData.corporate,
  },
  { title: "Marketing", members: fallbackTeamData.marketing },
  { title: "Information Technology", members: fallbackTeamData.it },
];

const DEFAULT_QUOTE = "Proud member of E-Club Polimi.";
const DEFAULT_AUTHOR = "E-Club Polimi";
const DEFAULT_MISSION_INTRO =
  "Our core mission is to create impactful opportunities for students by organizing high-quality events—from intimate networking sessions to large-scale gatherings. As an active part of Milan's entrepreneurial ecosystem, we bridge the gap between aspiring founders, industry leaders, and like-minded university clubs. Through strategic partnerships and cross-border collaborations, we are expanding our reach across Europe to empower the next generation of innovators and changemakers.";

const markdownToHtml = (markdown?: string | null): string | undefined => {
  if (!markdown) return undefined;
  const raw = marked.parse(markdown);
  if (typeof raw !== "string") {
    return undefined;
  }
  const sanitized = sanitizeHtml(raw, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([
      "img",
      "h1",
      "h2",
      "h3",
    ]),
    allowedAttributes: {
      ...sanitizeHtml.defaults.allowedAttributes,
      img: ["src", "alt", "title"],
    },
  });
  // Convert list items to paragraphs to avoid unintended <li> rendering from markdown bullets.
  return sanitized
    .replace(/<\/?ul[^>]*>/g, "")
    .replace(/<li[^>]*>/g, "<p>")
    .replace(/<\/li>/g, "</p>");
};

const TEAM_DESCRIPTIONS: Record<string, DescriptionContent> = {
  Board: {
    intro: "Lead the strategic direction, partnerships, and impact of E-Club.",
    bullets: [
      "Craft the club vision and yearly roadmap",
      "Coordinate with all departments to ensure aligned execution",
      "Represent E-Club in institutional and external occasions",
    ],
  },
  Events: {
    intro: "Plan and execute events that resonate with our three core pillars.",
    bullets: [
      "Manage logistics, run of show, and budgets",
      "Coordinate task forces on WhatsApp and Notion",
      "Collaborate with Corporate Relations and Marketing teams",
    ],
  },
  "Human Capital and Internal Processes": {
    intro: "Grow and support the people that make E-Club possible.",
    bullets: [
      "Lead recruiting and onboarding",
      "Own internal communications and knowledge sharing",
      "Promote culture initiatives and member success",
    ],
  },
  "Corporate and External Relationships": {
    intro: "Build long-term partnerships with companies and associations.",
    bullets: [
      "Scout and manage sponsors",
      "Coordinate collaborations with other student clubs",
      "Showcase partner value through custom touchpoints",
    ],
  },
  Marketing: {
    intro: "Tell the E-Club story across channels and formats.",
    bullets: [
      "Design campaigns for launches and announcements",
      "Run social media and newsletter content",
      "Collaborate with Events to capture highlights",
    ],
  },
  "Information Technology": {
    intro: "Ship the digital experiences that power our community.",
    bullets: [
      "Maintain the website and internal tools",
      "Support events with registration and analytics",
      "Prototype new experiences leveraging automation",
    ],
  },
  "Our Mission": {
    intro: DEFAULT_MISSION_INTRO,
    bullets: [],
  },
};

const DESCRIPTION_SLUG_TO_TITLE: Record<string, string> = {
  driver_board: "Board",
  driver_events: "Events",
  driver_hc: "Human Capital and Internal Processes",
  driver_corporate: "Corporate and External Relationships",
  driver_marketing: "Marketing",
  driver_it: "Information Technology",
  driver_ourMission: "Our Mission",
};

const normalizeTeamTitle = (team?: string | null) => {
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

const buildQuote = (member: ContentfulTeamMember) => {
  if (member.quote) return member.quote;
  if (member.instagramLink) return "Let’s connect on Instagram.";
  if (member.linkedinLink) return "Let’s connect on LinkedIn.";
  if (member.email) return `Email me at ${member.email}`;
  return DEFAULT_QUOTE;
};

const buildAuthor = (member: ContentfulTeamMember) =>
  member.quoteAuthor ?? member.role ?? DEFAULT_AUTHOR;

const BOARD_ROLE_ORDER = [
  "president",
  "vice-president",
  "treasurer",
  "secretary",
  "public relations",
];

const prioritizeCoordinators = (members: CarouselMember[]) => {
  const coordinators: CarouselMember[] = [];
  const viceCoordinators: CarouselMember[] = [];
  const others: CarouselMember[] = [];

  members.forEach((member) => {
    const role = member.role?.toLowerCase() ?? "";
    if (role.includes("vice coordinator")) {
      viceCoordinators.push(member);
    } else if (role.includes("coordinator")) {
      coordinators.push(member);
    } else {
      others.push(member);
    }
  });

  return [...coordinators, ...viceCoordinators, ...others];
};

const arrangeMembersForSection = (title: string, members: CarouselMember[]) => {
  let arranged = prioritizeCoordinators(members);

  if (title === "Board") {
    arranged = [...arranged].sort((a, b) => {
      const roleA = a.role.toLowerCase();
      const roleB = b.role.toLowerCase();
      const indexA = BOARD_ROLE_ORDER.findIndex((role) => roleA.includes(role));
      const indexB = BOARD_ROLE_ORDER.findIndex((role) => roleB.includes(role));
      const fallback = BOARD_ROLE_ORDER.length;
      return (
        (indexA === -1 ? fallback : indexA) -
        (indexB === -1 ? fallback : indexB)
      );
    });
  }

  return arranged;
};

const parseDescriptionText = (
  text?: string | null,
): DescriptionContent | undefined => {
  const html = markdownToHtml(text);
  if (!html) return undefined;
  return { html };
};

const buildDescriptionsFromContentful = (
  entries?: ContentfulTeamDescription[],
) => {
  const map: Record<string, DescriptionContent> = {};
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

const mapMemberToCarousel = (member: ContentfulTeamMember): CarouselMember => ({
  name: member.nameSurname ?? "E-Club Member",
  role: member.role ?? member.team ?? "Member",
  photo: member.image?.url ?? "",
  quote: buildQuote(member),
  author: buildAuthor(member),
  instagramLink: member.instagramLink ?? undefined,
  linkedinLink: member.linkedinLink ?? undefined,
});

const buildTeamSections = (
  members?: ContentfulTeamMember[],
): TeamSectionData[] => {
  if (!members?.length) return [];

  const grouped = new Map<string, CarouselMember[]>();

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

  const orderedSections: TeamSectionData[] = [];

  TEAM_TITLE_ORDER.forEach((title) => {
    const sectionMembers = grouped.get(title);
    if (sectionMembers?.length) {
      orderedSections.push({
        title,
        members: arrangeMembersForSection(title, sectionMembers),
      });
      grouped.delete(title);
    }
  });

  grouped.forEach((sectionMembers, title) => {
    orderedSections.push({
      title,
      members: arrangeMembersForSection(title, sectionMembers),
    });
  });

  return orderedSections;
};

function TeamSectionBlock({
  title,
  members,
  description,
}: TeamSectionData & { description?: DescriptionContent }) {
  const sectionDescription = description ?? TEAM_DESCRIPTIONS[title];

  return (
    <section className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4 h-[3px] bg-gray-200 rounded-full" />
        {sectionDescription && (
          <div className="mt-4 space-y-2 text-gray-600 break-words">
            {sectionDescription.html ? (
              <div
                className="prose prose-sm text-gray-600 max-w-none break-words"
                dangerouslySetInnerHTML={{ __html: sectionDescription.html }}
              />
            ) : (
              <>
                {sectionDescription.intro && (
                  <p className="text-base break-words">
                    {sectionDescription.intro}
                  </p>
                )}
                {sectionDescription.bullets &&
                  sectionDescription.bullets.length > 0 && (
                    <ul className="list-disc list-inside space-y-1 text-sm break-words">
                      {sectionDescription.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
              </>
            )}
          </div>
        )}
      </div>

      <div className="grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {members.map((member, index) => (
          <div key={`${member.name}-${index}`} className="flex justify-center">
            <TeamMemberCard
              name={member.name}
              role={member.role}
              photo={member.photo}
              instagramLink={member.instagramLink}
              linkedinLink={member.linkedinLink}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default function OurTeamSection(props: OurTeamSectionProps = {}) {
  const { teamMembers, teamDescriptions, heroImage } = props;
  if (teamMembers && teamMembers.length > 0) {
    console.log("[OurTeamSection] First team member received:", teamMembers[0]);
  }
  const sectionsToRender = buildTeamSections(teamMembers);
  const visibleSections = sectionsToRender.length
    ? sectionsToRender
    : FALLBACK_SECTIONS;
  const descriptionOverrides =
    buildDescriptionsFromContentful(teamDescriptions);
  const combinedDescriptions = {
    ...TEAM_DESCRIPTIONS,
    ...descriptionOverrides,
  };
  const missionDescription = combinedDescriptions["Our Mission"];
  const missionIntro = missionDescription?.intro ?? DEFAULT_MISSION_INTRO;
  const missionHtml = missionDescription?.html ?? markdownToHtml(missionIntro);
  const heroImageLight =
    heroImage?.imageLightMode?.url ?? heroImage?.url ?? undefined;
  const heroAlt =
    heroImage?.imageLightMode?.description ??
    heroImage?.imageDarkMode?.description ??
    heroImage?.imageLightMode?.title ??
    heroImage?.imageDarkMode?.title ??
    "Our Team Hero Image";
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-5 transition-colors duration-300 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Team
          </h1>
        </div>

        {/* Mission Section with Image */}
        <div className="mb-20 animate-fade-in-delay">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Image */}
            <div className="w-full h-96 rounded-2xl shadow-xl overflow-hidden bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] flex items-center justify-center">
              {heroImageLight ? (
                <picture className="w-full h-full">
                  <img
                    src={heroImageLight}
                    alt={heroAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </picture>
              ) : (
                <div className="text-white/30 text-center p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-sm">Landscape image placeholder</p>
                  <p className="text-xs mt-2">Replace with actual team photo</p>
                </div>
              )}
            </div>

            {/* Right side - Text content */}
            <div className="space-y-8">
              {/* Introductory text without title */}
              {/* <p className="text-lg text-gray-700 leading-relaxed">
                We are a student-driven association dedicated to fostering entrepreneurship, innovation, and collaboration within our university and beyond.
              </p> */}

              {/* Our Mission section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Our Mission
                </h2>
                {missionHtml ? (
                  <div
                    className="prose prose-base text-gray-700 max-w-none prose-p:leading-relaxed prose-headings:text-gray-900 text-left"
                    dangerouslySetInnerHTML={{ __html: missionHtml }}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* E-Club Teams Title */}
        {/* <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            E-Club Teams
          </h2>
        </div> */}

        {/* Team Sections with Carousels */}
        <div className="space-y-16">
          {visibleSections.map((section) => (
            <TeamSectionBlock
              key={section.title}
              title={section.title}
              members={section.members}
              description={combinedDescriptions[section.title]}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center animate-fade-in-delay-3">
          <div className="bg-gradient-to-br from-[#2B5DAA] to-[#1e3a5f] rounded-2xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
              We're always looking for passionate individuals to join our
              mission. Be part of something bigger.
            </p>
            <a
              href="/join"
              style={{ backgroundColor: "#FC3F1A" }}
              className="inline-block text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:opacity-90"
            >
              Join E-Club Polimi
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
