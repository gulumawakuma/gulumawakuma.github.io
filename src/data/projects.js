export const projects = [
  {
    title: "Inisra",
    slug: "inisra",
    caseStudySlug: "inisra",
    description:
      "A WeWork-style co-working platform with a full admin dashboard — workspace booking, member management, billing, and real-time analytics built end-to-end.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/901f2c158_generated_image.png",
    role: "Backend & Admin Dashboard",
    type: "solo",
    links: {
      demo: null,
      github: null,
    },
    linkNote:
      "Demo and repo are private for now — read the case study or contact me for a live walkthrough.",
  },
  {
    title: "ORA",
    slug: "ora",
    caseStudySlug: "ora",
    description:
      "A comprehensive POS and inventory management system enabling real-time stock tracking, sales reporting, and multi-location product management.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png",
    role: "Full-Stack Engineer",
    type: "solo",
    links: {
      demo: null,
      github: null,
    },
    linkNote:
      "Demo and repo are private for now — read the case study or contact me for a live walkthrough.",
  },
  {
    title: "Fetness Track",
    slug: "fetness-track",
    description:
      "A native iOS fitness tracking app delivering personalized workout plans, progress visualization, and health metrics — built with a polished SwiftUI interface.",
    platform: "iOS • SWIFT",
    tags: ["SWIFT", "SWIFTUI", "CORE DATA"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/26ec04780_generated_image.png",
    role: "iOS Engineer",
    type: "solo",
    links: {
      demo: null,
      github: null,
      appStore: null,
    },
    linkNote:
      "Not on the App Store yet — contact me for a TestFlight build or feature walkthrough.",
  },
  {
    title: "ABCMS",
    slug: "abcms",
    description:
      "An AI-powered customs management system for streamlining import/export processing, automated document verification, and intelligent risk assessment.",
    platform: "FULL-STACK",
    tags: ["AI/ML", "PYTHON", "REACT", "NODE.JS"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/6c655b8a7_generated_image.png",
    role: "Team Contributor",
    type: "team",
    links: {
      demo: null,
      github: null,
    },
    linkNote:
      "Internal EAI institute project — source is private. Reach out to discuss my role and architecture.",
  },
  {
    title: "CaseFlow",
    slug: "caseflow",
    description:
      "A case flow management system enabling legal teams to track, assign, and resolve cases with automated workflows, audit trails, and status dashboards.",
    platform: "FULL-STACK",
    tags: ["REACT", "NODE.JS", "POSTGRESQL"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/d97ec4811_generated_image.png",
    role: "Team Contributor",
    type: "team",
    links: {
      demo: null,
      github: null,
    },
    linkNote:
      "Internal EAI institute project — source is private. Reach out to discuss my role and architecture.",
  },
  {
    title: "Agentic AI",
    slug: "agentic-ai",
    description:
      "A multi-agent AI orchestration platform where autonomous agents collaborate to complete complex tasks — built with modern LLM tooling and agent frameworks.",
    platform: "AI • AGENTS",
    tags: ["PYTHON", "LLMs", "AGENT FRAMEWORKS"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/f80d3ce39_generated_image.png",
    role: "Team Contributor",
    type: "team",
    links: {
      demo: null,
      github: null,
    },
    linkNote:
      "Internal EAI institute project — source is private. Reach out to discuss my role and architecture.",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectLinks(slug) {
  const project = getProjectBySlug(slug);
  return {
    links: project?.links ?? { demo: null, github: null },
    linkNote: project?.linkNote ?? null,
  };
}
