export const caseStudies = [
  {
    slug: "inisra",
    title: "Inisra",
    subtitle: "Co-working platform with full admin dashboard",
    role: "Backend & Admin Dashboard · Solo project",
    timeline: "2024",
    tags: ["REACT", "NODE.JS", "EXPRESS", "POSTGRESQL"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/901f2c158_generated_image.png",
    summary:
      "Inisra is a WeWork-style co-working platform I built end-to-end — from workspace booking flows to a full admin dashboard for members, billing, and real-time analytics.",
    problem: [
      "Co-working operators needed one place to manage desks, rooms, members, and payments instead of spreadsheets and disconnected tools.",
      "Members expected a simple booking experience with clear availability and instant confirmation.",
      "Admins needed visibility into occupancy, revenue, and member activity without switching systems.",
    ],
    approach: [
      "Designed a PostgreSQL schema around workspaces, bookings, members, and billing with clear ownership boundaries.",
      "Built RESTful APIs with Express for booking logic, admin operations, and reporting endpoints.",
      "Created a React admin dashboard with role-aware views for operators to manage inventory and members.",
      "Added real-time analytics panels so admins could track utilization and revenue trends.",
    ],
    challenges: [
      {
        title: "Booking conflicts",
        detail:
          "Preventing double-bookings across overlapping time slots required transactional writes and clear validation at the API layer before any UI feedback.",
      },
      {
        title: "Admin complexity",
        detail:
          "The dashboard had to stay usable as features grew — I grouped actions by workflow (members, spaces, billing) instead of dumping everything into one screen.",
      },
    ],
    outcomes: [
      "Delivered a complete booking + admin system as a solo full-stack build.",
      "Structured the backend for future mobile or member-facing apps without rewriting core logic.",
      "Shipped analytics views that give operators actionable occupancy and revenue insight.",
    ],
    stack: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "JWT auth"],
    links: {
      demo: null,
      github: null,
    },
  },
  {
    slug: "ora",
    title: "ORA",
    subtitle: "POS & inventory management system",
    role: "Full-Stack Engineer · Solo project",
    timeline: "2024",
    tags: ["REACT", "NODE.JS", "EXPRESS", "MONGODB"],
    image:
      "https://media.base44.com/images/public/6a252a130a6d44cc87309d9e/3633ecbb8_generated_image.png",
    summary:
      "ORA is a point-of-sale and inventory platform for businesses that need real-time stock tracking, sales reporting, and multi-location product management in one system.",
    problem: [
      "Retail and small-chain operators were losing track of stock across locations and reconciling sales manually at the end of each day.",
      "Existing tools were either too heavy for local businesses or too simple to support multiple branches.",
      "Teams needed fast checkout flows without sacrificing accurate inventory updates.",
    ],
    approach: [
      "Modelled products, stock levels, locations, and sales as first-class MongoDB collections with atomic stock adjustments on each sale.",
      "Built a React front-end optimized for cashier workflows — quick search, cart management, and receipt-style summaries.",
      "Implemented reporting endpoints for daily sales, low-stock alerts, and per-location breakdowns.",
      "Designed the API so new locations and product catalogs could be added without schema migrations.",
    ],
    challenges: [
      {
        title: "Stock consistency",
        detail:
          "Every sale had to decrement inventory reliably, even under concurrent checkouts — I used atomic updates and server-side validation rather than trusting the client.",
      },
      {
        title: "Multi-location clarity",
        detail:
          "Users needed to see which branch held which stock without cluttering the POS screen — location filters and dashboards were separated by role.",
      },
    ],
    outcomes: [
      "Unified POS checkout and inventory in a single full-stack application.",
      "Gave operators daily sales visibility and low-stock warnings out of the box.",
      "Built a foundation that scales from one shop to multiple locations on the same codebase.",
    ],
    stack: ["React", "Node.js", "Express", "MongoDB", "REST APIs", "Chart reporting"],
    links: {
      demo: null,
      github: null,
    },
  },
];

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}
