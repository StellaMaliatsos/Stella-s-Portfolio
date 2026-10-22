// All portfolio content lives here, so you can edit text without touching the layout.

// Google Calendar appointment schedule for the 20-minute "Book a call" section.
// "Book a call" opens BOOKING_URL (Google Calendar appointment schedule) in a pop-up;
// BOOKING_LINK is the shareable page, used if the pop-up can't open.
const BOOKING_URL = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ2-VIyPVYXNwk5qjpmm3e6H0H2_2LHR6-uiFGOJfa3PsI1rH6BeqO-z4F11f02v6SiDKl3fUka1?gv=true";
const BOOKING_LINK = "https://calendar.app.google/ngcaKVrFLyGMT8wn9";

const PROJECTS = [
  {
    id: "corpay",
    company: "Corpay",
    title: "Savings Monitor: an AI cost-optimisation MVP from 0 to 1",
    tags: ["AI", "0→1", "B2B", "Mobility"],
    context: "Fortune 500 fleet payments · Interim PM via Product People · 2026–now",
    metrics: [["8,000", "beta customers"], ["~10", "alpha customers"], ["0→1", "AI MVP"]],
    problem: "Corpay needed an AI cost-optimisation feature that finds cheaper nearby fuel and EV charging sites and helps Fleet Managers act on the savings, shipped as an MVP inside a legacy billing system with heavily regulated, compliance-heavy releases.",
    role: "Took over Savings Monitor from zero to launch as interim PM, owning the backlog, QA readiness and rollout.",
    approach: [
      "Defined phased scope for Alpha (about 10 customers), Beta and V2, and steered it through to launch approval.",
      "Ran customer research and user feedback interviews, subject-matter expert reviews and the leadership go/no-go demo.",
      "Shaped the roadmap: route-aware recommendations, driver thresholds and push notifications to drivers.",
      "Wrote the demo video script for marketing the launch."
    ],
    outcome: "Helped combine Savings Monitor and Anomaly Monitor into one AI platform, \"Integrated Spark\", part of Corpay's \"Virtual Fleet Manager\" plan. Aligned V1.5 and V2 into one release and supported the V1 beta to a cohort growing from 1,000 to 8,000 customers."
  },
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
    title: "0→1 medical dispatcher vertical",
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
    title: "A carbon impact management solution for Scope 3 emissions",
    tags: ["Sustainability", "B2B"],
    context: "Product Manager, Sustainability & CSR · 2024–25",
    metrics: [["Scope 3", "carbon solution, idea to delivery"], ["C-level", "brand & vision partner"], ["5", "person team led"]],
    problem: "Companies need to measure and manage Scope 3 (supply-chain) emissions, a complex and fast-changing reporting area.",
    role: "Owned the end-to-end product lifecycle from ideation to delivery, leading a team of 5, and acted as the company's subject-matter expert in sustainability.",
    approach: [
      "Developed product strategy and innovation for the carbon impact management solution.",
      "Connected Solution Design, Business Strategy, Sales and IT around one roadmap.",
      "Ran roadmap workshops across design, engineering and sales with C-level stakeholders.",
      "Partnered with C-level on redesigning brand strategy and company vision, and fed customer insights into product improvements."
    ],
    outcome: "A Scope 3 product strategy and roadmap shared across the company, plus a refreshed brand strategy and company vision."
  },
  {
    id: "google",
    company: "Google",
    title: "Growth and user acquisition with Google Ads",
    tags: ["Growth", "B2B"],
    context: "Digital Product Marketing Consultant · Barcelona · 2020–22",
    metrics: [["2 yrs", "at Google"], ["BOLD", "leadership programme"]],
    problem: "Business clients needed their Google Ads campaigns to deliver better ROI and more visibility, and a clear strategy for acquiring users.",
    role: "Digital Product Marketing Consultant, advising clients on online marketing and business development.",
    approach: [
      "Optimised Google Ads strategies for client campaigns.",
      "Led user acquisition and digital product strategies with clients.",
      "Selected for Google's BOLD leadership and development programme (EMEA), with personal coaching from Google leadership."
    ],
    outcome: "Improved ROI and brand visibility for client campaigns, supporting their business development."
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
    context: "Side project · Natural endurance gel · built with Lovable & Claude Code",
    metrics: [["6", "ingredients, 0 synthetic additives"], ["−70%", "wrapper waste per race day"], ["30 days", "for the pouch to compost"]],
    problem: "Most endurance gels are a chemistry experiment in a wrapper: maltodextrin, \"natural flavours\" and plastic sachets left on the trail. High-performance athletes want real-food fuel that doesn't upset their stomach or the planet.",
    role: "Founder, taking RAW from idea and formulation to a working prototype and go-to-market plan.",
    approach: [
      "Formulated a 6-ingredient gel (rice syrup, agave, coconut sugar, fruit, citrus, Himalayan salt) in three flavours.",
      "Designed a compostable, reclosable 120g pouch that replaces two standard gels.",
      "Built the full brand site and shop prototype with Lovable and Claude Code: positioning, manifesto, science section and subscriptions.",
      "Planned go-to-market for runners, cyclists, triathletes and other endurance athletes."
    ],
    outcome: "A launch-ready brand, product concept and clickable prototype, taken from zero to go-to-market plan as a solo builder.",
    link: ["See the prototype on Lovable", "https://lovable.dev/preview/pUFMp67hKhpSn6fnLM7qIOWP2tEry8br"],
    phone: true // shows the same scrollable iPhone preview as on the page
  }
];

const TIMELINE = [
  {
    period: "2025 – now",
    role: "Product Management Consultant",
    company: "Product People",
    intro: "Europe's Product Management consultancy: interim and fractional product roles (3–12 months), onboarding fast, aligning teams and delivering outcomes. Clients include eBay, DeepL and the World Health Organization.",
    // Client engagements: a heading, its dates, then the text as its own paragraph
    points: [
      { title: "Corpay · Product Manager, Savings Monitor & Spark AI", period: "2026 – now",
        text: "Launched an AI fuel and EV-charging savings MVP from 0 to 1 for a Fortune 500 fleet-payments company, owning roadmap, customer interviews and the demo video script. Merged it with Anomaly Monitor into the \"Integrated Spark\" AI platform (beta: 1,000 → 8,000 customers)." },
      { title: "RLDatix · Healthcare workforce SaaS", period: "2026 – now",
        text: "Turned 40+ unvalidated requirements into a tested v1/v2 scope for a 40,000-employee hospital group (52 hospitals), built to scale across the German market." },
      { title: "N26 · Product Manager, KYC", period: "2025 – 2026",
        text: "Shipped a new KYC flow in 4 EU markets: −18% retries, −6–7% cost per verification. Business case for new identity methods in Germany: +2.4pp conversion, €135K/month potential savings." },
      { title: "Freenow by Lyft · Product Manager, New Business", period: "2025 – 2026",
        text: "Led discovery and MVP for the new medical dispatcher vertical, turning offline call-centre workflows into a measurable product from day one." }
    ]
  },
  {
    period: "2024 – 2025",
    role: "Product Manager, Sustainability & CSR",
    company: "B2X",
    points: [
      "Subject-matter expert in sustainability, connecting Solution Design, Business Strategy, Sales and IT.",
      "Developed product strategy and innovation for a carbon impact management solution for Scope 3 emissions.",
      "Owned the end-to-end product lifecycle from ideation to delivery, leading a team of 5.",
      "Partnered with C-level on redesigning brand strategy and company vision, and on product improvements informed by customer insights."
    ]
  },
  {
    period: "2023 – 2024",
    role: "Sustainability Consultant, ESG & Climate Change",
    company: "PwC",
    points: [
      "Led cross-functional teams to develop sustainable business strategies and drive impact.",
      "Designed scalable ESG frameworks to solve business challenges, aligned to client goals.",
      "Advised companies on sustainable business models and the circular economy.",
      "Developed ESG strategies, carbon footprints, EU taxonomy and ESRS gap analyses (CSRD) and sustainable finance."
    ]
  },
  {
    period: "2022 – 2023",
    role: "SaaS Sales Account Manager, CSR",
    company: "Hewlett Packard Enterprise",
    points: [
      "Directed innovation strategies for SaaS products (GreenLake), boosting adoption and sustainable transformation.",
      "Managed 200 accounts and fed user feedback back into product functionality.",
      "Owned full sales cycles in the Swiss manufacturing sector, building partnerships with stakeholders.",
      "Led HPE's sustainability initiative at the Barcelona Sales Hub."
    ]
  },
  {
    period: "2020 – 2022",
    role: "Digital Product Marketing Consultant",
    company: "Google",
    points: [
      "Optimised Google Ads strategies for client campaigns, improving ROI and brand visibility.",
      "Advised on online marketing and business development, leading user acquisition and digital product strategies.",
      "Selected for Google's BOLD leadership and development programme (EMEA, 2020–21), with personal coaching from Google leadership."
    ]
  },
  {
    period: "2018 – 2020",
    role: "Product Innovation Manager",
    company: "Airbus",
    points: [
      "Validated product-market fit and go-to-market strategies for 20 start-ups, leading to faster deployment and traction.",
      "Led innovation campaigns for the IdeaSpace platform and Airbus's innovation ecosystem.",
      "Led the annual User Convention in Toulouse with 2,000+ participants (2019).",
      "Built the front end of the IdeaSpace hub page."
    ]
  },
  {
    period: "2016 – 2018",
    role: "Marketing & Sales Manager",
    company: "Philips",
    points: [
      "Repositioned Philips Beauty as a sustainable brand, pitching campaigns to DACH clients.",
      "Created quarterly performance and trade presentations used in a dozen DACH market stores.",
      "Benchmarked 50 competitors daily on Amazon, contributing to a 7% sales increase that quarter.",
      "Improved the product analysis tool within 3 months as a business analyst."
    ]
  }
];
