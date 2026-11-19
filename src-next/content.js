export const profile = {
  name: "Souvik Samanta",
  role: "Software Engineer · Applied AI",
  email: "souviksamanta059@gmail.com",
  github: "https://github.com/Souviksamanta34",
  linkedin: "https://www.linkedin.com/in/souvik-samanta-17a3071ba",
  resume: `${import.meta.env.BASE_URL}Souvik-Samanta-Resume.pdf`,
};

// Professional work is summarized from the supplied CV and public GitHub profile.
// No private repository content, employer source code, or client identities are included.
export const caseStudies = [
  {
    id: "incident-remediation",
    number: "01",
    category: "AGENTIC AI · TCS",
    title: "From production incident to reviewed pull request.",
    shortTitle: "Agentic incident remediation",
    summary:
      "A controlled multi-agent workflow that connects incident evidence, repository context, and code remediation—with engineers in control.",
    tags: ["Google ADK", "Vertex AI", "Gemini", "Python"],
    recognition: "Top 10 · TCS Google Hackathon 2026",
    evidence: "Presented to Google after a Top 10 finish at the TCS Google Hackathon 2026.",
    context:
      "Production incidents force engineers to move between logs, repositories, and code review. I developed a multi-agent system that keeps those steps connected while preserving review at the point of change.",
    contributions: [
      "Separated coordination, log retrieval, and repository navigation into focused agents so each step had a clear responsibility.",
      "Connected Google Cloud Logging and controlled Python tools for evidence gathering, code changes, and pull-request creation.",
      "Used Gemini CLI to propose minimal, evidence-grounded patches, with mandatory human review before acceptance.",
    ],
    engineering:
      "The design made security boundaries explicit: PII sanitization, prompt-injection protection, sandboxed execution, least-privilege access, private connectivity, and non-root containers.",
    outcome:
      "Placed in the Top 10 of the TCS Google Hackathon 2026 and presented the solution to Google.",
    note: "Professional work summary. Implementation details are limited to information in my CV and public profile.",
  },
  {
    id: "document-intelligence",
    number: "02",
    category: "DOCUMENT INTELLIGENCE · TCS",
    title: "Turning financial documents into structured intelligence.",
    shortTitle: "Financial document intelligence",
    summary:
      "A human-validated extraction pipeline for financial tables, relationships, and context in complex PDFs.",
    tags: ["Azure OpenAI", "Document Intelligence", "Python"],
    recognition: "Multilingual extraction · Human validation",
    evidence: "Cash-flow extraction reached 100% on a 10-record experiment; this is not a production-wide result.",
    context:
      "Balance sheets, income statements, and cash flow statements combine tables, hierarchies, and financial context. I developed a GenAI-assisted pipeline that extracts this information and validates it before downstream processing.",
    contributions: [
      "Combined Azure Document Intelligence and Azure OpenAI to extract tables, metadata, contextual relationships, and mathematical relationships.",
      "Handled multipage, image-based, multilingual documents and normalized currency, units, periods, and negative values.",
      "Built human validation, automated quality checks, supplementary-data processing, and CSV/ZIP output into the workflow.",
    ],
    engineering:
      "The solution separated API access, processing, secrets, identity, private networking, monitoring, and content safety across Azure App Service, API Management, Functions, Key Vault, Entra ID, Private Link, and Content Safety.",
    outcome:
      "Fine-tuning experiments achieved 100% cash-flow extraction accuracy on a small 10-record test set. This was a limited evaluation, not a claim of production-wide accuracy.",
    note: "Professional work summary. No client documents, financial data, or proprietary code are published.",
  },
];

export const projects = [
  {
    id: "gruham",
    name: "Gruham",
    category: "Web",
    year: "2026",
    type: "E-COMMERCE",
    description:
      "A React storefront with account access, shopping carts, order history, and a Stripe test checkout.",
    buildDetail: "Firebase auth and order flows; a serverless Netlify payment function.",
    tags: ["React", "Firebase", "Stripe", "Netlify"],
    url: "https://github.com/Souviksamanta34/gruham",
    symbol: "G",
  },
  {
    id: "stokigen",
    name: "StokiGen",
    category: "Mobile",
    year: "2025",
    type: "ANDROID APPLICATION",
    description:
      "An Android stock-news app with watchlists, saved articles, sentiment views, and chat.",
    buildDetail: "Java client wired to Firebase and REST APIs across news, analysis, and chat screens.",
    tags: ["Java", "Android", "Firebase", "REST APIs"],
    url: "https://github.com/Souviksamanta34/demo-001",
    symbol: "S",
  },
  {
    id: "classification",
    name: "Neural classification",
    category: "ML",
    year: "2023",
    type: "ACADEMIC MACHINE LEARNING",
    description:
      "An academic neural-network study on breast-cancer data with feature selection.",
    buildDetail: "TensorFlow notebook using mutual information and scikit-learn evaluation; no clinical validation.",
    tags: ["Python", "TensorFlow", "scikit-learn"],
    url: "https://github.com/Souviksamanta34/Breast_Cancer_Classification_Using_NN",
    symbol: "N",
  },
];

export const capabilities = [
  {
    number: "01",
    title: "Applied AI & agents",
    text: "Orchestrated workflows with useful tools, grounded context, and explicit human review.",
    skills: ["LLMs & RAG", "Google ADK", "LangChain", "LangGraph", "Gemini"],
  },
  {
    number: "02",
    title: "Cloud & data systems",
    text: "Document intelligence and data pipelines built around real information and validation needs.",
    skills: [
      "Azure OpenAI",
      "Document Intelligence",
      "GCP / Vertex AI",
      "Databricks",
      "Apache Spark",
    ],
  },
  {
    number: "03",
    title: "Software engineering",
    text: "Practical implementation across APIs, applications, containers, and cloud services.",
    skills: ["Python", "Java", "C++", "JavaScript", "Docker", "Kubernetes"],
  },
];

export const certifications = [
  {
    name: "Claude Certified Associate — Foundations",
    issuer: "Anthropic",
    url: "https://www.credly.com/badges/720ff470-f91e-4ea5-81d5-5a223eb95d2d/public_url",
    featured: false,
  },
  {
    name: "Claude Certified Architect — Foundations",
    issuer: "Anthropic",
    url: "https://www.credly.com/badges/692535ae-6fd8-4eb3-8cf6-af9a6ebffc74/public_url",
    featured: false,
  },
  {
    name: "Claude Certified Developer — Professional",
    issuer: "Anthropic",
    url: "https://www.credly.com/badges/c44057b2-1d3d-4951-9a51-d14a86e87206/public_url",
    featured: false,
  },
  {
    name: "AWS Certified Developer — Associate",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/f0ebfa5c-bece-472c-b0e6-d32a07b2bb13/public_url",
    featured: false,
  },
  {
    name: "Databricks Certified Machine Learning Professional",
    issuer: "Databricks",
    date: "Issued Nov 2026 · Expires Nov 2028",
    url: "https://credentials.databricks.com/fc23dd31-d344-460c-82e7-9a1fb4f11a5f",
    featured: true,
  },
  {
    name: "Databricks Certified Data Engineer Professional",
    issuer: "Databricks",
    date: "Issued Oct 2026 · Expires Oct 2028",
    url: "https://credentials.databricks.com/5c925d85-b7e9-4c2b-90c9-6ef09d9e53bc",
    featured: true,
  },
  {
    name: "Claude Certified Developer — Foundations",
    issuer: "Anthropic",
    date: "Issued Oct 2026 · Expires Oct 2027",
    url: "https://www.credly.com/badges/8652c7e4-d363-462a-aa72-c7e9ec7e11ce/public_url",
    featured: true,
  },
  {
    name: "Databricks Certified Machine Learning Engineer Associate",
    issuer: "Databricks",
    date: "Issued Nov 2026 · Expires Nov 2028",
    url: "https://credentials.databricks.com/9cf076da-6175-43c5-b151-eb87dde69a71",
    featured: false,
  },
  {
    name: "Databricks Certified Data Engineer Associate",
    issuer: "Databricks",
    date: "Issued Oct 2026 · Expires Oct 2028",
    url: "https://credentials.databricks.com/83d89cd4-4bb9-46e9-a7c0-19e9e152749c",
    featured: false,
  },
];
