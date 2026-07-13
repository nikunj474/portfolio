/**
 * Nikunj Agrawal — portfolio content.
 * Content sourced from Nikunj's master resume bank and current portfolio.
 * Layout/design is an original build in an editorial single-page format.
 */
window.PORTFOLIO = {
  meta: {
    title: "Nikunj Agrawal",
    description:
      "Nikunj Agrawal — AI/ML engineer and product technologist. M.C.I.T. at the University of Pennsylvania. Building trustworthy RAG systems, ML pipelines, and data-driven products.",
  },

  brand: {
    name: "Nikunj Agrawal",
    logoText: "Nikunj",
    initials: "NA",
  },

  hero: {
    availability: "",
    firstName: "Nikunj",
    lastName: "Agrawal",
    tagline:
      "AI/ML Engineer · Product Technologist (New Grad). Building trustworthy RAG systems, ML pipelines, and data-driven products at the intersection of AI and product.",
    location: "Based in Philadelphia, PA",
    version: "v. 01.0",
    portrait: {
      src: "./images/Nikunj_Formal_photo.JPG",
      alt: "Portrait of Nikunj Agrawal",
      fallbackInitials: "NA",
    },
  },

  about: {
    kicker: "A note on me",
    subhead: "THE SHORT VERSION",
    statement:
      "I build trustworthy AI systems and the products around them — and I'm picky about both halves.",
    paragraphs: [
      "Hi, I'm Nikunj — an AI/ML engineer and product technologist, currently finishing my Master's in Computer &amp; Information Technology at the University of Pennsylvania. I've shipped production RAG and agentic AI at Darwinbox, led ML-driven programs on a $400M+ Gates Foundation initiative at GDi, and built ML pipelines and dashboards with Penn's Provost's Office.",
      "I work across RAG, ML pipelines, backend APIs, and data products — turning ambiguous problems into measurable outcomes, and arguing with models until they behave.",
      "If you're hiring, curious, or just want to talk AI, product, and everything in between, reach me through any of the ways in the contact section below.",
    ],
    resume: {
      label: "READ MY FULL RESUME",
      href: "assets/nikunj-agrawal-resume.pdf",
      filename: "Nikunj-Agrawal-resume.pdf",
    },
  },

  education: {
    kicker: "Things I studied",
    subhead: "TWO DEGREES, ONE CONSTANT QUESTION",
    items: [
      {
        school: "University of Pennsylvania",
        degree: "Masters in Computer Science · Philadelphia, PA, USA",
        stats: [
          { label: "TENURE", value: "2024 — 2026" },
          { label: "FOCUS", value: "ML · Systems" },
        ],
        note: "Teaching Assistant (Algorithms) · Research Assistant — Center for Engineering Mechanobiology (NSF-funded).",
      },
      {
        school: "Shri Ram College of Commerce (SRCC), University of Delhi",
        degree: "B.Com. (Honors), Finance &amp; Economics · New Delhi, India",
        stats: [
          { label: "TENURE", value: "2018 — 2021" },
          { label: "GPA", value: "8.69 / 10" },
        ],
        note: "Top 5% · V.K. Bhalla Gold Medal (Financial Management) · CMA Scholarship for the full program.",
      },
    ],
  },

  skills: {
    kicker: "Tools of the trade",
    subhead: "LANGUAGES, FRAMEWORKS &amp; PLATFORMS",
    items: [
      "Python",
      "C++",
      "C",
      "Java",
      "SQL",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "R",
      "PyTorch",
      "TensorFlow",
      "HuggingFace",
      "Scikit-Learn",
      "XGBoost",
      "LangChain",
      "FAISS",
      "pgvector",
      "RAG",
      "RAGAS",
      "vLLM",
      "MLflow",
      "Weights & Biases",
      "FastAPI",
      "Node.js",
      "React",
      "GraphQL",
      "REST APIs",
      "Docker",
      "AWS",
      "Git",
      "GitHub Actions",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Kafka",
      "Tableau",
      "OCR",
    ],
  },

  experience: {
    kicker: "Where I've worked",
    subhead: "A REVERSE-CHRONOLOGICAL TOUR",
    items: [
      {
        title: "ML & Data Engineering Intern",
        org: "Provost's Office, University of Pennsylvania",
        location: "Philadelphia, PA",
        date: "May 2025 — Aug 2025",
        description:
          "Built ML pipelines and TypeScript REST APIs surfacing enrollment insights across UPenn's academic schools. Trained Scikit-learn and TensorFlow models to ~84% accuracy, shipped a versioned serving API, and parallelized batch inference with asyncio for a 6× throughput gain — all surfaced to faculty through React and Tableau dashboards.",
      },
      {
        title: "Technical Product Consultant",
        org: "GDi Partners (Tech & Government Consulting)",
        location: "Delhi, India",
        date: "Jan 2023 — Feb 2024",
        description:
          "Owned product and delivery on a $400M+ Gates Foundation–funded state program. Built an XGBoost ML pipeline with SHAP explainability and a FastAPI + React grievance platform (RBAC) serving 150K+ users; model-driven interventions improved learning outcomes ~28% across 900+ government schools and lifted engagement ~30%.",
      },
      {
        title: "Founder's Office — Product & AI",
        org: "Darwinbox (HR SaaS Unicorn)",
        location: "Hyderabad, India",
        date: "Dec 2021 — Jan 2023",
        description:
          "Led U.S. expansion from the Founder's Office. Shipped a production RAG chatbot (LangChain, FAISS, React) that cut resolution time ~40%, architected three U.S. payroll integrations, and helped close a $72M Series D with product narrative and technical diligence — growing user adoption ~25%.",
      },
      {
        title: "Technical Product Analyst",
        org: "Astra Asset Management UK Ltd.",
        location: "London & Delhi",
        date: "Jun 2021 — Dec 2021",
        description:
          "Designed a Bayesian multi-objective optimization pipeline (PyTorch, BoTorch, Gaussian-process surrogates) for portfolio risk calibration, and built React + FastAPI tools exposing the results. Containerized model serving with Docker and deployed on AWS with CI/CD.",
      },
    ],
  },

  projects: {
    kicker: "Selected work",
    subhead: "SELECTED BUILDS, EXPERIMENTS & SIDE QUESTS",
    items: [
      {
        title: "RAG-Based Financial News Intelligence",
        date: "2025",
        description:
          "Answers natural-language questions over 10+ years of S&P 500 news with citations and price-movement context.",
        tags: ["Python", "DistilBERT", "FAISS", "RAG"],
        link: { label: "VIEW ON GITHUB", href: "https://github.com/nikunj474/RAG_Stock_predictor_model" },
      },
      {
        title: "LLM Fine-Tuning + Multi-Agent Serving",
        date: "2025",
        description:
          "Fine-tuned Llama-3-8B (LoRA) served via vLLM behind a LangChain multi-agent RAG layer at 10K+ queries/day.",
        tags: ["Python", "HuggingFace", "LoRA", "vLLM", "LangChain"],
        link: null,
      },
      {
        title: "Predictive Risk Modeling System",
        date: "2024",
        description:
          "End-to-end rare-event (meteorite fall) prediction with model comparison, BorderlineSMOTE, and a calibrated REST API.",
        tags: ["Python", "Scikit-Learn", "Docker", "REST API"],
        link: null,
      },
      {
        title: "Nutritional Intelligence Web App",
        date: "2024",
        description:
          "Tracks daily nutrition by scanning grocery receipts through an OCR ingestion pipeline.",
        tags: ["Java", "MERN", "OCR"],
        link: { label: "VIEW ON GITHUB", href: "https://github.com/nikunj474/NutS" },
      },
      {
        title: "Email Administration & Onboarding",
        date: "2023",
        description:
          "Internal platform automating employee onboarding and department provisioning with role-based access.",
        tags: ["Node.js", "RBAC", "REST API"],
        link: { label: "VIEW ON GITHUB", href: "https://github.com/nikunj474/Email-Administration-App" },
      },
      {
        title: "Growth Analytics & Experimentation",
        date: "2023",
        description:
          "A/B testing platform running 15+ concurrent experiments, cutting decision time from weeks to 3 days.",
        tags: ["Python", "SQL", "Experimentation"],
        link: null,
      },
    ],
  },

  certifications: {
    kicker: "Certifications",
    subhead: "CREDENTIALS & COURSEWORK",
    items: [],
    placeholder: "More coming soon — certifications and credentials will land here.",
  },

  contact: {
    kicker: "Say hello",
    subhead: "LET'S BUILD SOMETHING",
    lead:
      "If you're hiring, curious, or just want to talk AI, product, and everything in between — reach me any of these ways.",
    location: "Philadelphia, PA",
    links: [
      { label: "nikunj@seas.upenn.edu", href: "mailto:nikunj@seas.upenn.edu" },
      { label: "+1 (445) 256-2065", href: "tel:+14452562065" },
      { label: "linkedin.com/in/nikunj3", href: "https://www.linkedin.com/in/nikunj3/" },
      { label: "github.com/nikunj474", href: "https://github.com/nikunj474" },
    ],
  },

  footerName: "Nikunj Agrawal",
};
