/**
 * Nikunj Agrawal — sourced from Nikunj_Agrawal.pdf, Nikunj_SE.pdf, and Nikunj_TP__1_.pdf
 */
window.PORTFOLIO = {
  meta: {
    title: "Nikunj Agrawal — Portfolio",
    description:
      "Nikunj Agrawal — MS in CS at University of Pennsylvania. Product, ML/RAG systems, and data-driven platforms across enterprise SaaS and public-sector scale.",
  },

  brand: {
    initials: "NA",
  },

  hero: {
    eyebrow: "MS in CS · University of Pennsylvania",
    heading: "Hi, I'm Nikunj Agrawal",
    lead:
      "MS in CS student at Penn with a product and consulting background: agentic AI and RAG at HR SaaS Unicorn Startup, Gates-funded agriculture and education programs at the Government Consulting Firm, and ML/data work with the Provost’s Office—focused on trustworthy systems, integrations, and measurable outcomes.",
    portrait: {
      src: "./images/Nikunj_Formal_photo.JPG",
      alt: "Portrait of Nikunj Agrawal",
      fallbackInitials: "NA",
    },
    actions: [
      { kind: "anchor", label: "Get in touch", href: "#contact" },
      {
        kind: "download",
        label: "Download résumé",
        href: "assets/nikunj-agrawal-resume.pdf",
        filename: "Nikunj-Agrawal-resume.pdf",
      },
      { kind: "external", label: "GitHub", href: "https://github.com/nikunj474" },
      { kind: "external", label: "LinkedIn", href: "https://www.linkedin.com/in/nikunj3/" },
    ],
  },

  aboutParagraphs: [
    {
      html:
        "I'm pursuing a <strong>MS in CS</strong> at the <strong>University of Pennsylvania</strong> (Aug 2024 – May 2026), with relevant coursework in machine learning, distributed systems, databases, cybersecurity, and big data analytics. I've been a <strong>Graduate Teaching Assistant</strong> for Algorithms and Computations and a <strong>Research Assistant</strong> (data research) at the Center for Engineering Mechanobiology (NSF-funded).",
    },
    {
      html:
        "Earlier I earned a <strong>B.Com. (Honors)</strong> in Finance &amp; Economics from <strong>SRCC, University of Delhi</strong> (Top 5%, GPA 8.68/10), with honors including the V.K. Bhalla Gold Medal in Financial Management and the CMA Scholarship. I care about clear metrics, stakeholder alignment, and shipping—from RAG and ML pipelines to APIs and dashboards—whether in enterprise HR tech or large public programs.",
    },
  ],

  experience: [
    {
      title: "ML and Data Intern",
      place: "Provost’s Office, University of Pennsylvania · Philadelphia, PA",
      date: "May 2025 – Aug 2025",
      bullets: [
        "Partnered with academic stakeholders on data requirements and success metrics for enrollment patterns across a substantial share of UPenn’s course catalog.",
        "Delivered predictive insights and Tableau dashboards for faculty and administrators; built data pipelines with Scikit-learn, NumPy, and related ML tooling.",
        "Shipped a customer-facing REST API for multi-platform course lists with real-time tracking and comprehensive error handling; parallelized template processing with asyncio for higher throughput while preserving accuracy checks.",
      ],
    },
    {
      title: "Associate Consultant",
      place: "Government Consulting Firm · Delhi, India",
      date: "Jan 2023 – Feb 2024",
      bullets: [
        "Product consultant on a 5+ year, $400M+ Gates Foundation–funded agriculture program for a state government.",
        "Owned end-to-end delivery of Python-based AI workflows for routing, automated triage, and human-in-the-loop grievance redressal—~30% higher engagement and ~80% automated resolution within 48 hours (per résumé).",
        "Applied predictive models to improve learning outcomes for Grades 5–8 (~28%) and reduce dropouts (~15%); bridged policymakers, domain experts, and engineering.",
      ],
    },
    {
      title: "Founder’s Office — Product & Strategy",
      place: "HR SaaS Unicorn Startup · Hyderabad, India",
      date: "Dec 2021 – Jan 2023",
      bullets: [
        "Led technical product work for U.S. expansion—discovery through PRD, MVP, and production—for agentic AI and integration-heavy features that increased adoption ~25%.",
        "Architected third-party payroll integrations (3 major U.S. providers) with data models, error taxonomies, and rollout plans; supported a $72M Series D with product narratives and technical diligence.",
        "Owned a production RAG-based AI agent with React integration—prompt patterns, tool use, evaluation, and guardrails—plus roadmap input from market analysis with EY’s HR consulting team.",
      ],
    },
    {
      title: "Technical Product Analyst",
      place: "Astra Asset Management UK Ltd. · London & Delhi",
      date: "June 2021 – Dec 2021",
      bullets: [
        "Led a Bayesian optimization multi-objective calibration pipeline using BoTorch with Gaussian process surrogates.",
        "Supported Python and MERN-based financial models for investment decisions; containerized services with Docker and deployed on Microsoft Azure.",
      ],
    },
  ],

  publications: [],

  projects: [
    {
      title: "Predictive risk modeling — meteorite fall prediction",
      meta: "ML pipeline · class imbalance · model comparison",
      text:
        "End-to-end ML pipeline for rare-event prediction: Logistic Regression, Random Forest, Gradient Boosting, and ensembles; BorderlineSMOTE for imbalance; modular experiments with precision, recall, F1, and ROC-AUC; stakeholder-facing synthesis of risk and uncertainty.",
      links: [],
    },
    {
      title: "RAG-based financial news intelligence",
      meta: "S&P 500 · DistilBERT · contextual retrieval",
      text:
        "RAG product answering natural-language queries over 10+ years of financial news for S&P 500 names; DistilBERT-style embedding retrieval, tradeoffs between keyword search, embeddings, and latency; explainable outputs with citations and price-movement context across related equities.",
      links: [{ label: "GitHub", href: "https://github.com/nikunj474/RAG_Stock_predictor_model" }],
    },
    {
      title: "Nutritional intelligence web application",
      meta: "Java · MERN · OCR",
      text:
        "Full-stack app to track nutrition by scanning grocery receipts with OCR; backend services to parse, normalize, and store data for trends and goal tracking.",
      links: [{ label: "GitHub", href: "https://github.com/nikunj474/NutS" }],
    },
    {
      title: "Email administration & onboarding system",
      meta: "Internal platform · RBAC",
      text:
        "Internal email administration platform automating employee onboarding and department assignment—modular backend, role-based access, and account provisioning.",
      links: [{ label: "GitHub", href: "https://github.com/nikunj474/Email-Administration-App" }],
    },
  ],

  education: [
    {
      title: "University of Pennsylvania",
      meta: "Philadelphia, PA · MS in CS (Aug 2024 – May 2026)",
      lines: [
        "<strong>MS in CS</strong>",
        "Graduate Teaching Assistant — Algorithms and Computations",
        "Research Assistant — Center for Engineering Mechanobiology (NSF-funded)",
      ],
      footnote:
        "Coursework includes Machine Learning, Software Systems (distributed systems), Databases, Cybersecurity, Big Data Analytics, and DSA.",
    },
    {
      title: "Shri Ram College of Commerce (SRCC), University of Delhi",
      meta: "New Delhi, India · GPA 8.68/10 (Top 5%)",
      lines: ["<strong>B.Com. (Honors)</strong> — Finance &amp; Economics · July 2018 – May 2021"],
      footnote:
        "Honors: V.K. Bhalla Gold Medal in Financial Management; CMA Scholarship for the full program. Activities: President (NSS), Secretary (Student Government, Class of 2021), Computer and Maths Society.",
    },
  ],

  skills: {
    "Product & AI": [
      "Product roadmapping",
      "PRDs & metrics",
      "AI / LLM evaluation",
      "Human-in-the-loop design",
      "RAG pipelines",
      "LangChain",
      "Multi-agent orchestration",
      "Agentic workflows",
    ],
    "Languages & stacks": ["Python", "C", "C++", "Java", "SQL", "JavaScript", "HTML/CSS", "R", "MERN"],
    "ML & data": [
      "scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Tableau",
      "ML pipelines",
    ],
    "Systems & tools": [
      "REST APIs",
      "Docker",
      "Git",
      "AWS",
      "MongoDB",
      "Vector DBs",
      "asyncio",
      "BoTorch",
    ],
  },

  contact: {
    lead: "Philadelphia, PA",
    address: "4200 Ludlow St., Apt 412, Philadelphia, PA 19104",
    links: [
      { label: "nikunj@seas.upenn.edu", href: "mailto:nikunj@seas.upenn.edu" },
      { label: "(445) 256-2065", href: "tel:+14452562065" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nikunj3/" },
      { label: "GitHub", href: "https://github.com/nikunj474" },
    ],
  },

  footerName: "Nikunj Agrawal",
};
