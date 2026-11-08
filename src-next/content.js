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
      "An evidence-grounded workflow that connects incident investigation, repository context, and code remediation—with engineers in control.",
    tags: ["Google ADK", "Vertex AI", "Gemini", "Python"],
    recognition: "Top 10 · TCS Google Hackathon 2026",
    context:
      "Production incidents require engineers to move between logs, repositories, and code review. I developed a multi-agent system to connect these steps in a controlled investigation and remediation workflow.",
    contributions: [
      "Designed a coordinator with specialized log and Gitea agents to gather evidence and navigate repositories.",
      "Integrated Google Cloud Logging and controlled Python tools for investigation, code changes, and pull-request creation.",
      "Used Gemini CLI to propose minimal patches grounded in the incident evidence, with mandatory human review before acceptance.",
    ],
    engineering:
      "PII sanitization, prompt-injection protection, sandboxed execution, least-privilege access, private connectivity, and non-root containers were part of the design.",
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
      "Extracting financial tables, relationships, and context from complex PDFs, with quality checks and human validation built in.",
    tags: ["Azure OpenAI", "Document Intelligence", "Python"],
    recognition: "Multilingual extraction · Human validation",
    context:
      "Balance sheets, income statements, and cash flow statements contain complex tables, hierarchies, and financial context. I developed a GenAI-assisted pipeline to extract and validate this information for downstream processing.",
    contributions: [
      "Combined Azure Document Intelligence and Azure OpenAI to extract tables, metadata, contextual relationships, and mathematical relationships.",
      "Supported multipage, image-based, multilingual documents and financial metadata including currency, units, periods, and negative values.",
      "Built human validation, automated quality checks, supplementary-data processing, and CSV/ZIP output into the workflow.",
    ],
    engineering:
      "The solution design used Azure App Service, API Management, Functions, Key Vault, Entra ID, Private Link, monitoring, and Content Safety.",
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
      "A React storefront connecting account access, shopping carts, order history, and a Stripe test checkout.",
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
      "Personalized stock-news feeds, watchlists, saved articles, sentiment views, and an API-backed chat assistant.",
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
      "Exploring feature selection and neural-network classification on breast cancer data. An academic study, without clinical validation.",
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
