export interface Experience {
  id: string;
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  startDate: string;
  endDate: string | null;
  location: string;
  description: string[];
  tags: string[];
  logo?: string;
}

export const experiences: Experience[] = [
  {
    id: "valgenesis-se",
    type: "work",
    role: "Software Engineer",
    company: "ValGenesis India Pvt Ltd",
    period: "Sep 2024 – Present",
    startDate: "2024-09",
    endDate: null,
    location: "Hyderabad, India",
    description: [
      "Developing AI-powered document comparison platform using FastAPI and Azure OpenAI",
      "Building scalable backend services and microservices for regulated life sciences industry",
      "Working with PostgreSQL, Redis, and Docker for production-grade systems",
      "Implementing RAG-based solutions for compliance and gap analysis",
      "Designing and deploying LLM pipelines with evaluation frameworks using RAGAS and Phoenix",
    ],
    tags: ["FastAPI", "Azure OpenAI", "PostgreSQL", "Redis", "Docker", "RAG", "Python"],
  },
  {
    id: "digifrills",
    type: "work",
    role: "Application Developer (Freelance)",
    company: "DigiFrills",
    period: "Mar 2024 – Sep 2024",
    startDate: "2024-03",
    endDate: "2024-09",
    location: "Remote",
    description: [
      "Developed and delivered web and mobile applications, including a School Communication Platform and JobLink, collaborating with clients from requirements analysis to deployment.",
      "Built backend APIs, integrated third-party services, and explored workflow automation solutions using low-code/no-code platforms to improve operational efficiency."
    ],
    tags: ["Automations", "Low-Code Tools", "Python", "AI"],
  },
  {
    id: "yupp-tv",
    type: "work",
    role: "Data Analyst Intern",
    company: "YuppTV India Pvt Ltd",
    period: "Jun 2023 – Jul 2023",
    startDate: "2023-06",
    endDate: "2023-07",
    location: "Hyderabad, India",
    description: [
      "Analyzed large-scale video analytics datasets using Python, NumPy, and Pandas to generate insights on streaming performance and user engagement.",
      "Automated data analysis workflows and presented analytical findings to support product and business decisions"
    ],
    tags: ["Python", "NumPy", "Pandas"],
  },
];
