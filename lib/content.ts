/**
 * Single source of truth for every word on this site.
 *
 * Content is drawn from Nikunj's master resume bank; the framing is the
 * engineering track throughout. Components read from here and never hardcode
 * copy, so a resume update is a one-file change.
 */

export type Section = {
  id: string;
  /** Nav label, and the <h1> on the section's standalone route. */
  label: string;
  /** Two-digit index rendered in the monospace section rule. */
  index: string;
  /** All-caps monospace subheader that precedes the section body. */
  kicker: string;
  /** Serif headline for the standalone route. */
  title: string;
  href: string;
};

export const site = {
  name: "Nikunj Agrawal",
  url: "https://nikunj-agrawal.com",
  role: "Software Engineer, AI Systems and Infrastructure",
  description:
    "Nikunj Agrawal builds AI-native software: multi-agent orchestration, retrieval systems, and the distributed infrastructure underneath them. MS Computer Science, University of Pennsylvania.",
} as const;

export const sections: Section[] = [
  { id: "index", label: "Index", index: "01", kicker: "Start here", title: "Index", href: "/" },
  { id: "about", label: "About", index: "02", kicker: "The short version", title: "About", href: "/about" },
  { id: "education", label: "Education", index: "03", kicker: "Where I learned it", title: "Education", href: "/education" },
  { id: "skills", label: "Skills", index: "04", kicker: "Tools of the trade", title: "Skills", href: "/skills" },
  { id: "experience", label: "Experience", index: "05", kicker: "A reverse-chronological tour", title: "Experience", href: "/experience" },
  { id: "portfolio", label: "Portfolio", index: "06", kicker: "Things I have built", title: "Portfolio", href: "/portfolio" },
  { id: "contact", label: "Contact", index: "07", kicker: "Say something", title: "Contact", href: "/contact" },
];

export const hero = {
  first: "Nikunj",
  last: "Agrawal",
  subtitle: "Software Engineer · AI Systems & Infrastructure",
  bio: "I build AI-native software: multi-agent orchestration, retrieval systems, and the scalable data pipelines that feed them. Most of my work sits where the model meets the machine, which is usually where things break.",
  meta: [
    { label: "Based", value: "New York, NY" },
    { label: "Degree", value: "MS CS, UPenn" },
    { label: "Status", value: "Open to roles" },
  ],
  portrait: {
    src: "/images/nikunj-agrawal.jpg",
    alt: "Portrait of Nikunj Agrawal",
  },
} as const;

export const about = {
  statement:
    "I build AI systems, and the infrastructure that has to hold them up. I am picky about both halves.",
  paragraphs: [
    "Most AI engineering stops at the API call. The part I care about is what sits underneath: how retrieval behaves at ten years of documents instead of ten, what happens when a storage node dies mid-request, why an agent's fourth tool call comes back as nonsense. So my work runs in both directions, from a replicated key-value store written from the socket layer up to multi-agent systems built on the same instinct for what fails.",
    "I finished my Masters in Computer Science at the University of Pennsylvania in May 2026, where I was a teaching assistant for Algorithms and a research assistant at the NSF-funded Center for Engineering Mechanobiology. Before that I shipped a production RAG support system at Darwinbox, an HR SaaS unicorn, built ML pipelines for a $400M Gates Foundation education program at GDi Partners, and wrote Bayesian optimization tooling for a London credit fund.",
    "I have won the National Hack-AI-thon at IIT Roorkee and the Princeton AI Hackathon, both by building something that ran by the end of the weekend. That is roughly how I like to work.",
  ],
  resume: {
    label: "Read the full resume",
    href: "/assets/nikunj-agrawal-resume.pdf",
  },
} as const;

export type EducationItem = {
  school: string;
  degree: string;
  meta: string;
  dates: string;
  detail: string[];
};

export const education: EducationItem[] = [
  {
    school: "University of Pennsylvania",
    degree: "Masters in Computer Science",
    meta: "Philadelphia, PA, USA",
    dates: "Aug 2024 — May 2026",
    detail: [
      "Teaching Assistant, Algorithms. Research Assistant at the Center for Engineering Mechanobiology, funded by the NSF.",
      "Coursework: Machine Learning, Software (Distributed) Systems, Databases, Cybersecurity, Big Data Analytics, Data Structures and Algorithms.",
    ],
  },
  {
    school: "Shri Ram College of Commerce, University of Delhi",
    degree: "B.Com. (Honors), Finance & Economics (Quantitative Methods)",
    meta: "GPA 8.69 / 10 · Top 5%",
    dates: "Jul 2018 — May 2021",
    detail: [
      "Computer and Maths Society. President of the National Service Scheme, the largest student-run organisation on campus.",
    ],
  },
];

export type SkillGroup = {
  label: string;
  /** Geometric glyph keyed to the group, rendered inside every pill. */
  glyph: "square" | "circle" | "diamond" | "triangle" | "bars" | "grid" | "arrow";
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    glyph: "square",
    items: ["Python", "TypeScript", "JavaScript", "C++", "C", "Java", "C#", "SQL", "HTML", "CSS"],
  },
  {
    label: "AI & Machine Learning",
    glyph: "circle",
    items: [
      "PyTorch", "TensorFlow", "HuggingFace Transformers", "Scikit-Learn", "XGBoost",
      "BoTorch", "ONNX", "LoRA / QLoRA", "RLHF", "SHAP",
    ],
  },
  {
    label: "LLM Systems",
    glyph: "diamond",
    items: [
      "RAG", "LangChain", "LangGraph", "MCP", "FastMCP", "FAISS", "pgvector",
      "vLLM", "RAGAS", "Multi-agent orchestration", "Weights & Biases", "MLflow",
    ],
  },
  {
    label: "Backend & APIs",
    glyph: "triangle",
    items: [
      "FastAPI", "Node.js", "Express", "GraphQL", "REST", "WebSockets",
      "OpenAPI", "asyncio", "Flask", "Django", "Spring MVC",
    ],
  },
  {
    label: "Frontend",
    glyph: "arrow",
    items: ["React", "Next.js", "Tailwind CSS", "Recharts", "Storybook", "Vue.js", "AngularJS"],
  },
  {
    label: "Data",
    glyph: "bars",
    items: [
      "PostgreSQL", "Redis", "MongoDB", "MS SQL Server", "Snowflake",
      "Databricks", "Kafka", "Tableau", "Power BI",
    ],
  },
  {
    label: "Infrastructure",
    glyph: "grid",
    items: [
      "AWS (SageMaker, EC2, S3, RDS)", "Azure", "Docker", "GitHub Actions",
      "Jenkins", "CI/CD", "Linux", "CUDA",
    ],
  },
];

export type Role = {
  company: string;
  note: string;
  title: string;
  dates: string;
  bullets: string[];
  stack: string[];
};

export const experience: Role[] = [
  {
    company: "University of Pennsylvania",
    note: "Provost's Office",
    title: "ML Research Engineer",
    dates: "May 2025 — Aug 2025",
    bullets: [
      "Built responsive React dashboards and versioned TypeScript REST APIs with Zod validation, rate limiting, and OpenAPI documentation, surfacing ML enrollment insights across Penn's 12 academic schools for 3 downstream teams.",
      "Fine-tuned a BERT-based classifier on 50K labeled enrollment records with HuggingFace Transformers, reaching 84% held-out accuracy with cross-validation and hyperparameter tuning.",
      "Stood up an MLflow pipeline with a model registry, retraining triggers, and a versioned serving API; rewrote batch inference with asyncio concurrency for a 6x throughput gain at identical accuracy.",
      "Added SHAP feature importance, early stopping, and calibrated probability outputs to every deployed model, and set up GitHub Actions CI enforcing type-safety, lint, and test coverage on every pull request.",
    ],
    stack: ["Python", "PyTorch", "HuggingFace", "MLflow", "React", "TypeScript", "asyncio"],
  },
  {
    company: "GDi Partners",
    note: "Technology and government consulting",
    title: "Data & ML Consultant",
    dates: "Jan 2023 — Feb 2024",
    bullets: [
      "Built a full XGBoost pipeline with feature engineering, k-fold cross-validation, SHAP explainability, and calibrated REST API serving for a $400M Gates Foundation education program.",
      "Model-driven interventions informed planning across 900+ government schools, improving learning outcomes by 28% and reducing dropout by 15%.",
      "Handled severe class imbalance in rare-event prediction with BorderlineSMOTE and threshold tuning across heterogeneous state datasets, and designed asyncio-parallelised feature pipelines over 50+ sources with schema validation and dead-letter queues.",
      "Built a FastAPI backend with MERN and AngularJS frontend modules for a civic-tech grievance platform with role-based access control, serving 150K+ users.",
      "Shipped a reusable TypeScript component library with Storybook documentation, cutting new dashboard build time for the team by 60%.",
    ],
    stack: ["Python", "XGBoost", "SHAP", "FastAPI", "TypeScript", "React", "PostgreSQL"],
  },
  {
    company: "Darwinbox",
    note: "HR SaaS unicorn",
    title: "AI Product Engineer, Founder's Office",
    dates: "Dec 2021 — Jan 2023",
    bullets: [
      "Architected a production RAG support chatbot over enterprise knowledge bases with a GraphQL data layer, LangChain backend, and FAISS retrieval, cutting average resolution time by 40% and lifting adoption 25%.",
      "Fine-tuned a DistilBERT intent classifier on 200K proprietary HR queries with custom tokenization and domain vocabulary expansion, improving intent accuracy 32% over the base model across 10K+ daily queries at sub-2s p99.",
      "Built an LLM evaluation framework with RAGAS, BERTScore, A/B harnesses, and regression suites, then shipped the inference endpoints it gated.",
      "Built an ML monitoring stack with drift detection, latency alerting, and weekly accuracy regression reports, plus a WebSocket event streaming layer with TypeScript observability dashboards tracking usage and SLA metrics across 50+ tenants.",
    ],
    stack: ["Python", "LangChain", "FAISS", "DistilBERT", "RAGAS", "GraphQL", "React"],
  },
  {
    company: "Astra Asset Management UK",
    note: "Credit fund, London",
    title: "Technical Product Analyst",
    dates: "Jun 2021 — Dec 2021",
    bullets: [
      "Designed a Bayesian multi-objective optimization pipeline in PyTorch and BoTorch using Gaussian Process surrogates and custom acquisition functions for portfolio risk parameter calibration across correlated asset classes.",
      "Built React and FastAPI tooling exposing optimization results through interactive charts with real-time data refresh.",
      "Containerized the model-serving stack with Docker and set up AWS CI/CD with lint, test, and staged deploy gates, cutting release cycles to 15 minutes, with automated retraining triggers for production refreshes.",
    ],
    stack: ["Python", "PyTorch", "BoTorch", "FastAPI", "React", "Docker", "AWS"],
  },
];

export type Project = {
  name: string;
  blurb: string;
  bullets: string[];
  stack: string[];
  links: { label: string; href: string }[];
  /** Featured projects render as full-width cards ahead of the grid. */
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "Financial MCP Server",
    featured: true,
    blurb:
      "An open-source Model Context Protocol server that gives any LLM live, tool-calling access to SEC filings, Federal Reserve series, and market fundamentals.",
    bullets: [
      "Six typed tools across three sources, SEC EDGAR, FRED, and Alpha Vantage, that a model chains on its own: resolve a company to a CIK, pull its filings, then correlate against a macro series, without a human copying anything between tabs.",
      "Pydantic schemas with strict field validation and tool annotations mean a hallucinated argument is rejected at the boundary rather than becoming a malformed upstream request.",
      "Async httpx client with typed error handling that converts every upstream failure into a readable string, because an MCP tool cannot raise: the model has no way to catch it.",
      "24 tests run with no network access, covering CIK zero-padding, SEC archive URL construction, form-type filtering, and the error contract; CI runs them on Python 3.11, 3.12 and 3.13.",
    ],
    stack: ["Python", "FastMCP", "Pydantic", "httpx", "pytest"],
    links: [{ label: "GitHub", href: "https://github.com/nikunj474/financial-mcp-server" }],
  },
  {
    name: "NCloud",
    featured: true,
    blurb:
      "A fault-tolerant cloud platform, webmail plus drive plus chat, running on a replicated, range-sharded key-value store written from the socket layer up in C++17.",
    bullets: [
      "Roughly 16,000 lines of C++17 across five services with no web framework, no ORM, and no database. The HTTP parser, storage engine, replication protocol, failure detector, leader election, SMTP server, and load balancer are all original code.",
      "Kill a storage node mid-upload and the cluster elects a new primary in about 1.5 seconds, the request still completes, and the dead node resyncs when it returns. There is a kill button for every node in the admin console.",
      "Storage engine with a write-ahead log, checkpoints, and bloom filters; primary-backup replication sequenced by log sequence numbers with quorum acknowledgement; coordinator heartbeats every 500ms and elects on highest LSN.",
      "Built by a team of five for CIS 5050. I owned the storage layer: the key-value server and its tablet engine, replication wiring across multi-tablet groups, primary-backup sequencing, and coordinator failover.",
    ],
    stack: ["C++17", "Distributed systems", "Replication", "SMTP", "Docker", "AWS"],
    links: [{ label: "GitHub", href: "https://github.com/nikunj474/ncloud" }],
  },
  {
    name: "LLM Fine-Tuning & Multi-Agent Serving",
    blurb:
      "A full fine-tune-to-serve pipeline: Llama-3-8B adapted on instruction pairs, served through vLLM, and consumed by a downstream multi-agent RAG system.",
    bullets: [
      "Fine-tuned Llama-3-8B on 50K instruction pairs with LoRA in bf16 using gradient checkpointing, tracking RAGAS and BERTScore evaluations in Weights & Biases for a 38% accuracy gain.",
      "Served through vLLM behind FastAPI; the downstream LangChain multi-agent RAG system handled 10K+ queries per day at sub-2s p99.",
      "Improved response faithfulness 14% by benchmarking BM25, dense, and hybrid retrieval strategies against a fixed RAGAS suite rather than by intuition.",
    ],
    stack: ["PyTorch", "HuggingFace", "LoRA", "vLLM", "LangChain", "RAGAS", "W&B"],
    links: [],
  },
  {
    name: "Aria Health — Voice AI for Insurance Benefits",
    blurb:
      "A voice agent that answers coverage, prior-authorization, and claims questions over the phone, with the identity gate enforced in code rather than in the prompt.",
    bullets: [
      "React and TanStack front end over a Supabase and PostgreSQL backend, wired to Twilio voice APIs with LLM tool-calling to verify caller identity and answer benefits questions live.",
      "Server-side PHI guardrails, an identity gate that lives in application code rather than the system prompt, untrusted-speech handling against prompt injection, and a second-model classifier flagging jailbreak and policy violations.",
      "Ingests real Synthea C-CDA patient records; identity matching normalises date-of-birth formats before comparison, which is what stopped the verification loop from failing on valid callers.",
    ],
    stack: ["React", "Supabase", "PostgreSQL", "Twilio", "LLM tool-calling"],
    links: [{ label: "Live", href: "https://ariahealth.lovable.app" }],
  },
  {
    name: "RAG Financial News Retrieval",
    blurb:
      "Semantic search over roughly a decade of S&P 500 news, built to survive the fact that a few million headlines do not fit in memory.",
    bullets: [
      "DistilBERT embeddings generated on a local RTX 3090: batches of 512 grouped into super-batches of 10 to cut writes 10x, per-batch failure isolation so one malformed batch cannot kill a multi-hour run, and explicit memory reclamation between super-batches.",
      "Stored in Postgres with pgvector on AWS RDS and indexed with HNSW for sub-second cosine similarity, which needed the instance's maintenance_work_mem and parallel worker settings retuned before the graph build would complete.",
      "Chunked cleaning across roughly 20GB of GDELT and Kaggle news plus yfinance price history, normalising columns across sources that disagreed about nearly every field name.",
    ],
    stack: ["Python", "DistilBERT", "CUDA", "pgvector", "HNSW", "AWS RDS"],
    links: [{ label: "GitHub", href: "https://github.com/nikunj474/RAG_Stock_predictor_model" }],
  },
  {
    name: "Multi-Agent Customer Support Orchestration",
    blurb:
      "A LangChain multi-agent system with intent-based routing and FAISS retrieval, built for concurrency rather than for a demo.",
    bullets: [
      "Intent-based router in front of specialised agents, handling 10K+ daily queries at sub-2s p99 end-to-end.",
      "Established a data-driven evaluation loop on RAGAS metrics, improving response faithfulness 14% through iterative benchmarking of BM25, dense, and hybrid retrieval modes.",
    ],
    stack: ["LangChain", "FAISS", "RAGAS", "Python"],
    links: [],
  },
  {
    name: "FinPortco",
    blurb:
      "A client manager for financial advisors, with full-text search over meeting notes and Claude-generated prep briefs.",
    bullets: [
      "Search is SQLite FTS5, not LIKE '%term%': an independent virtual table kept in sync by three triggers, so snippet() returns highlighted excerpts without a round trip to the base table.",
      "Highlighting cannot inject HTML. Matches are wrapped in private sentinels, the whole result is escaped, and only then are sentinels swapped for mark tags.",
      "Ownership is checked per row, not just at the door: the JWT proves who you are, a separate check proves the row is yours, and it returns 404 rather than 403 so client IDs cannot be enumerated.",
      "14 integration tests against a real server process and a throwaway database, including that one advisor can neither list, write to, nor search another's data.",
    ],
    stack: ["TypeScript", "React", "Express", "SQLite FTS5", "JWT", "Claude API"],
    links: [{ label: "GitHub", href: "https://github.com/nikunj474/finance-portco-app" }],
  },
  {
    name: "Penn Planner",
    blurb:
      "Wharton students track coursework in Canvas and recruiting in CareerPath, so nobody sees when four deadlines land on one Tuesday. This does.",
    bullets: [
      "Pulls both sources into one list ranked by a priority engine that weighs urgency, task type, and competing commitments, then flags when three or more deadlines converge inside 48 hours.",
      "Generates a daily briefing with the Claude API that says what to work on and for how long, rather than restating the list.",
      "Next.js App Router with Prisma over SQLite, and CI that migrates, lints, and builds on every push.",
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "SQLite", "Claude API"],
    links: [{ label: "GitHub", href: "https://github.com/nikunj474/penn_planner" }],
  },
];

export const contact = {
  line: "I am open to software, AI, and infrastructure roles. The fastest way to reach me is email.",
  links: [
    { label: "Email", value: "nikunjag24@gmail.com", href: "mailto:nikunjag24@gmail.com" },
    { label: "GitHub", value: "github.com/nikunj474", href: "https://github.com/nikunj474" },
    { label: "LinkedIn", value: "linkedin.com/in/nikunj3", href: "https://linkedin.com/in/nikunj3" },
    { label: "Resume", value: "Download PDF", href: "/assets/nikunj-agrawal-resume.pdf" },
  ],
  note: "No sponsorship needed.",
} as const;
