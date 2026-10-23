export const personalInfo = {
  name: "Somya Bansal",
  title: "Software Engineer",
  subtitle: "Specializing in REST APIs, Scalable Microservices on AWS & Agentic AI",
  email: "somyabansal68@gmail.com",
  phone: "+91 8744919622",
  phoneRaw: "+918744919622",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/somya-bansal-59736a220",
  linkedinDisplay: "linkedin.com/in/somya-bansal",
  github: "https://github.com/somya-05",
  githubDisplay: "github.com/somya-05",
  resumePdf: "/Somya_Bansal_CV.pdf",
  summary:
    "Software Engineer with 2.5+ years of experience building REST APIs and scalable microservices on AWS. Delivered high-performance backend systems, automating workflows (saving 500+ hours) and improving application security by 40%. Skilled in Java, Spring Boot, and Angular, focused on reliable, production-ready systems."
};

export const experiences = [
  {
    role: "Associate Software Engineer",
    company: "Moody's Ratings",
    period: "Jan 2024 - Present",
    location: "Gurugram, India",
    type: "Full-Time",
    highlight: "Leading microservices automation, serverless AWS compliance pipelines, and Agentic AI integrations.",
    achievements: [
      {
        title: "Microservices & REST APIs Automation",
        detail: "Designed and developed REST APIs for automated user access provisioning in a microservices architecture, saving 500+ hours annually and eliminating manual workflows.",
        tag: "500+ hrs saved"
      },
      {
        title: "Serverless ESMA Compliance Engine",
        detail: "Built AWS Lambda–based issuer default-status system ensuring European Securities and Markets Authority (ESMA) regulatory compliance and highly scalable performance.",
        tag: "AWS Lambda & ESMA"
      },
      {
        title: "Agentic AI & MCP Server",
        detail: "Developed an AI agent utilizing Agentic AI and Model Context Protocol (MCP) server to automate rating decision workflows, reducing manual analyst effort by 70+ hours and elevating operational efficiency.",
        tag: "Agentic AI / MCP"
      },
      {
        title: "Large-Scale Data Engineering",
        detail: "Engineered robust data pipelines to ingest and process 10,000+ legacy press releases, ensuring end-to-end data accuracy through automated database validation.",
        tag: "10,000+ records"
      },
      {
        title: "Application Security & Modernization",
        detail: "Led the Angular version upgrade and resolved 25+ critical security vulnerabilities flagged by Snyk, improving application security posture by 40% and minimizing risk exposure.",
        tag: "40% Security Boost"
      }
    ],
    technologies: ["Java", "Spring Boot", "AWS", "Agentic AI", "MCP Server", "REST APIs", "Angular", "PostgreSQL", "Snyk", "Microservices"]
  },
  {
    role: "Data Analyst & Automation Intern",
    company: "Dell Technologies",
    period: "Jun 2023 - Jul 2023",
    location: "Bangalore, India",
    type: "Internship",
    highlight: "Analyzed supply chain telemetry and developed real-time simulation tools for factory-level analysis.",
    achievements: [
      {
        title: "Supply Chain Telemetry Analysis",
        detail: "Analyzed 1M+ rows of supply chain data utilizing PowerBI, ThoughtSpot, PostgreSQL, and Python to extract actionable operational intelligence.",
        tag: "1M+ Rows"
      },
      {
        title: "Real-time Fault Assessment Simulation",
        detail: "Developed an interactive Power BI simulation enabling engineering end-users to assess specification changes, spot potential faults before deployment, and drive data-driven decisions.",
        tag: "Predictive Analytics"
      },
      {
        title: "High-Volume Data Pipeline",
        detail: "Built optimized PostgreSQL function for incremental loading of 40M+ rows into ThoughtSpot, powering granular factory-level analysis and reporting.",
        tag: "40M+ Rows Ingestion"
      }
    ],
    technologies: ["Python", "PostgreSQL", "Power BI", "ThoughtSpot", "Data Pipelines", "SQL Optimization"]
  }
];

export const projects = [
  {
    title: "Medical RAG Assistant",
    category: "Full-Stack AI",
    description: "Built a full-stack AI application using REST APIs, ChromaDB, Groq LLM, and Streamlit, enabling low-latency medical query responses across 400+ symptoms.",
    metrics: "ChromaDB • Groq LLM • Streamlit",
    technologies: ["Python", "REST APIs", "ChromaDB", "Groq", "Streamlit", "RAG"],
    github: "https://github.com/somya-05",
    featured: true,
    highlights: [
      "Vector embeddings with ChromaDB for semantic retrieval across 400+ medical symptoms",
      "Groq accelerated inference enabling sub-second response times",
      "Interactive Streamlit interface with low-latency query handling and context synthesis"
    ]
  },
  {
    title: "Urban Tails: Pet Adoption",
    category: "Android & Cloud",
    description: "Developed an application using Java, Firebase, and Android (XML), enabling streamlined pet adoption workflows and implementing real-time data handling to improve user engagement.",
    metrics: "Real-time Data • Java • Firebase",
    technologies: ["Java", "Firebase", "Android (XML)", "Real-time DB"],
    github: "https://github.com/somya-05",
    featured: true,
    highlights: [
      "Real-time data handling and synchronization to boost user engagement and adoption flow",
      "End-to-end pet listing, discovery, and adoption inquiry tracking",
      "Native Android XML layout design paired with Firebase backend infrastructure"
    ]
  }
];

export const skillCategories = [
  {
    category: "Languages & Core",
    icon: "Code",
    skills: [
      { name: "Java", level: 90, highlighted: true },
      { name: "TypeScript", level: 85, highlighted: true },
      { name: "C++", level: 80, highlighted: false },
      { name: "Python", level: 85, highlighted: true },
      { name: "JavaScript", level: 88, highlighted: false },
      { name: "HTML / CSS", level: 90, highlighted: false }
    ]
  },
  {
    category: "Frameworks & Backend",
    icon: "Server",
    skills: [
      { name: "Spring Boot", level: 90, highlighted: true },
      { name: "REST APIs", level: 95, highlighted: true },
      { name: "Microservices", level: 90, highlighted: true },
      { name: "Angular", level: 85, highlighted: true },
      { name: "React.js", level: 85, highlighted: true },
      { name: "Streamlit", level: 80, highlighted: false }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      { name: "AWS (Certified)", level: 88, highlighted: true },
      { name: "AWS Lambda", level: 90, highlighted: true },
      { name: "Jenkins (CI/CD)", level: 82, highlighted: false },
      { name: "Git / GitHub", level: 92, highlighted: true },
      { name: "Datadog", level: 80, highlighted: false },
      { name: "Grafana", level: 80, highlighted: false }
    ]
  },
  {
    category: "Databases & AI Tools",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: 90, highlighted: true },
      { name: "ChromaDB (Vector)", level: 85, highlighted: true },
      { name: "Agentic AI & MCP", level: 88, highlighted: true },
      { name: "Firebase", level: 85, highlighted: false },
      { name: "Power BI", level: 85, highlighted: false },
      { name: "ThoughtSpot", level: 82, highlighted: false },
      { name: "Snyk (Security)", level: 85, highlighted: false },
      { name: "Figma", level: 78, highlighted: false }
    ]
  }
];

export const education = {
  institution: "Manipal Institute of Technology",
  degree: "Bachelor of Technology",
  field: "Information Technology",
  period: "2020 - 2024",
  location: "Karnataka, India",
  cgpa: "8.59 / 10",
  highlights: [
    "Specialized in Distributed Systems, Object-Oriented Programming, Data Structures, and Cloud Computing",
    "Served as Web Master for ACM-W Manipal chapter",
    "Graduated with First Class distinction"
  ]
};

export const certificationsAndAwards = [
  {
    type: "Certification",
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    year: "2025",
    badge: "Official Certification",
    icon: "Award",
    description: "Validated comprehensive understanding of AWS cloud concepts, security, architecture, pricing, and serverless infrastructure."
  },
  {
    type: "Award",
    title: "Bronze Award - Performance Recognition",
    issuer: "Moody's Ratings",
    year: "Q1 2025",
    badge: "Corporate Honor",
    icon: "Trophy",
    description: "Awarded for outstanding contributions to automated access provisioning microservices, saving 500+ operational hours."
  }
];

export const leadership = [
  {
    role: "Mentor - EmpowHER Program",
    organization: "Moody's Ratings",
    period: "2024 - Present",
    description: "Mentoring and guiding women in STEM through dedicated technical sessions, code reviews, project guidance, and lab exercises.",
    impact: "Empowering early-career women engineers to excel in backend engineering and cloud systems."
  },
  {
    role: "Web Master",
    organization: "ACM-W Manipal",
    period: "Collegiate Tenure",
    description: "Spearheaded website initiatives, led full-stack technical projects, and managed digital development operations for student club events and tech hackathons.",
    impact: "Delivered responsive club portals and guided student contributors in modern web technologies."
  }
];
