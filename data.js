// All portfolio content lives here, so you can edit text without touching the layout.

const PROJECTS = [
  {
    id: "rldatix",
    company: "RLDatix",
    title: "Turning Germany's largest hospital pilot into a reusable offering",
    tags: ["Healthcare", "B2B", "Discovery"],
    context: "Healthcare workforce SaaS · B2B · via Product People",
    metrics: [["52", "hospitals"], ["40,000", "staff"], ["8 mo", "to go-live"]],
    problem: "Germany's largest hospital client came in with 40+ requirements, almost all framed as \"build this for us\". The easy answer was a one-client fix, during a post-acquisition turnaround.",
    role: "Owned discovery for the client pilot.",
    approach: [
      "Ran a fit-gap of 40+ requirements against German labour law and our platform.",
      "Found the 10+ that were really general patterns and validated them into a v1/v2 delivery set.",
      "Aligned 5+ teams with MoSCoW and ICE prioritisation."
    ],
    outcome: "A reusable market offering instead of a one-client fix. The pilot went live within 8 months and expanded to 10 more hospitals."
  },
  {
    id: "n26",
    company: "N26",
    title: "New KYC methods for a neobank across 4 EU markets",
    tags: ["Fintech", "B2C", "Experimentation"],
    context: "Neobank unicorn · B2C KYC · via Product People",
    metrics: [["+2.4pp", "conversion"], ["€135K", "monthly savings"], ["−18%", "retries"]],
    problem: "Identity verification was a costly, high-drop-off step in onboarding, in a market regulated by BaFin and eIDAS.",
    role: "Product Manager for the KYC flow.",
    approach: [
      "Built the business case for new KYC methods (BAV, NFC eID), compliant with BaFin and eIDAS.",
      "Pinpointed a 14pp drop-off in the funnel and launched a 3-variant A/B test.",
      "Shipped the new KYC flow in 4 EU markets."
    ],
    outcome: "+2.4pp conversion and €135K/month savings in the validated business case; −18% retries and −6–7% cost per verification after launch."
  },
  {
    id: "freenow",
    company: "FreeNow by Lyft",
    title: "0→1 medical-transport vertical",
    tags: ["Mobility", "Healthcare", "0→1"],
    context: "Medical Dispatcher · B2B2C · via Product People",
    metrics: [["0→1", "MVP"], ["DE", "first market"]],
    problem: "Medical transport ran on offline call-centre workflows, for a regulated, patient-facing service.",
    role: "Led 0→1 discovery and the MVP.",
    approach: [
      "Mapped offline call-centre workflows into a Germany-first roadmap.",
      "Turned Legal/Policy and Ops requirements into product rules.",
      "Set north-star metrics and Mixpanel instrumentation from day one."
    ],
    outcome: "An MVP and roadmap for a new vertical, measurable from launch."
  },
  {
    id: "b2x",
    company: "B2X",
    title: "Scope 3 carbon solution",
    tags: ["Sustainability", "B2B"],
    context: "Sustainability SaaS · Product Manager · 2024–25",
    metrics: [["5", "person team"], ["C-level", "roadmap workshops"]],
    problem: "Companies need to measure Scope 3 emissions across their supply chain, a complex and fast-changing reporting area.",
    role: "Owned the product lifecycle and a team of 5.",
    approach: [
      "Ran roadmap workshops across design, engineering and sales with C-level stakeholders."
    ],
    outcome: "A shared roadmap for the Scope 3 product across the company."
  },
  {
    id: "airbus",
    company: "Airbus",
    title: "Product-market fit for 20 innovation start-ups",
    tags: ["Innovation", "Discovery"],
    context: "Product Innovation Manager · 2018–20",
    metrics: [["20", "start-ups"]],
    problem: "Innovation start-ups needed to prove product-market fit before pilots with Airbus.",
    role: "Product Innovation Manager, owning discovery.",
    approach: [
      "Validated product-market fit for 20 start-ups.",
      "Used discovery findings to shape go-to-market strategies and pilots."
    ],
    outcome: "Go-to-market strategies and pilots grounded in validated discovery."
  },
  {
    id: "raw",
    company: "RAW.",
    title: "RAW. worth the squeeze.",
    tags: ["0→1", "AI"],
    context: "Side project · Natural endurance gel",
    metrics: [["Idea → GTM", "end to end"]],
    problem: "High-performance athletes want a natural endurance gel.",
    role: "Founder, taking it from idea to go-to-market.",
    approach: [
      "Took the product from formulation to prototyping.",
      "Built prototypes with Lovable and Claude Code.",
      "Planned go-to-market."
    ],
    outcome: "A prototyped product and go-to-market plan.",
    link: ["See the prototype on Lovable", "https://lovable.dev/preview/pUFMp67hKhpSn6fnLM7qIOWP2tEry8br"]
  }
];

const TIMELINE = [
  {
    period: "2025 – now",
    role: "Product Management Consultant",
    company: "Product People",
    points: [
      "RLDatix · Owned discovery for Germany's largest client pilot (40,000 staff, 52 hospitals).",
      "N26 · Shipped a new KYC flow in 4 EU markets: −18% retries, −6–7% cost per verification.",
      "FreeNow by Lyft · Led 0→1 discovery and MVP for a medical-transport vertical."
    ]
  },
  {
    period: "2024 – 2025",
    role: "Product Manager",
    company: "B2X",
    points: ["Owned the product lifecycle and a team of 5 for a Scope 3 carbon solution."]
  },
  {
    period: "2023 – 2024",
    role: "Sustainability Consultant",
    company: "PwC",
    points: []
  },
  {
    period: "2020 – 2022",
    role: "Digital Product Marketing",
    company: "Google",
    points: []
  },
  {
    period: "2018 – 2020",
    role: "Product Innovation Manager",
    company: "Airbus",
    points: ["Validated product-market fit for 20 innovation start-ups, shaping go-to-market strategies and pilots."]
  }
];
