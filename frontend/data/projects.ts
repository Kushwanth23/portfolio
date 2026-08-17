export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: ("AI/ML" | "Backend" | "Automation" | "Tools")[];
  tags: { name: string; color: string }[];
  featured: boolean;
  problem: string;
  solution: string;
  impact: { metric: string; value: string }[];
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  icon: string;
}

export const projects: Project[] = [
  {
    slug: "ai-smart-compare-platform",
    title: "AI Smart Compare Platform",
    shortDescription:
      "AI-powered document comparison platform that generates accurate, contextual redlines with detailed change insights.",
    longDescription:
      "An enterprise-grade AI platform that compares large regulatory documents (1000+ pages), understands context, identifies meaningful changes, and generates structured insights with redlined documents. Built for regulated industries where document accuracy is critical.",
    category: ["AI/ML", "Backend"],
    tags: [
      { name: "FastAPI", color: "bg-green-500/20 text-green-400 border-green-500/30" },
      { name: "Azure OpenAI", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" },
      { name: "Redis", color: "bg-red-500/20 text-red-400 border-red-500/30" },
      { name: "PostgreSQL", color: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
      { name: "Docker", color: "bg-blue-400/20 text-blue-300 border-blue-400/30" },
    ],
    featured: true,
    problem:
      "Manual document comparison of regulatory files (1000+ pages) was time-consuming, error-prone, and inconsistent. Teams spent days reviewing documents with no guarantee of catching every change.",
    solution:
      "Built an AI-powered comparison engine using Azure OpenAI that understands document context, identifies meaningful semantic changes, and generates structured redlined documents with categorized insights. Implemented async processing with Redis queues and real-time progress tracking.",
    impact: [
      { metric: "Reduction in manual review time", value: "70%" },
      { metric: "Accuracy in change detection", value: "95%" },
      { metric: "Pages processed seamlessly", value: "2000+" },
    ],
    icon: "🔍",
  },
  {
    slug: "smart-gap-assessor",
    title: "Smart Gap Assessor",
    shortDescription:
      "Automated gap analysis system for regulatory compliance and requirement mapping.",
    longDescription:
      "An intelligent system that automatically identifies gaps between regulatory requirements and existing documentation. Uses LLMs to understand regulatory language and map requirements to compliance evidence.",
    category: ["AI/ML", "Tools"],
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "LLM", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "PostgreSQL", color: "bg-sky-500/20 text-sky-400 border-sky-500/30" },
    ],
    featured: true,
    problem:
      "Compliance teams struggled to manually map thousands of regulatory requirements to internal documentation, leading to missed gaps and failed audits.",
    solution:
      "Developed an LLM-powered system that semantically maps regulatory requirements to existing documentation, identifies gaps, and generates prioritized remediation reports.",
    impact: [
      { metric: "Time saved per compliance cycle", value: "60%" },
      { metric: "Gap detection accuracy", value: "92%" },
      { metric: "Requirements processed", value: "5000+" },
    ],
    icon: "📊",
  },
  {
    slug: "ai-agent-evaluation-framework",
    title: "AI Agent Evaluation Framework",
    shortDescription:
      "Evaluation framework for AI agents with RAGAS, Phoenix, and OpenTelemetry integration.",
    longDescription:
      "A comprehensive evaluation framework that assesses AI agent quality across multiple dimensions including faithfulness, answer relevancy, context precision, and hallucination detection. Integrates with RAGAS, Arize Phoenix, and OpenTelemetry for full observability.",
    category: ["AI/ML", "Tools"],
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "RAGAS", color: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30" },
      { name: "Phoenix", color: "bg-orange-500/20 text-orange-400 border-orange-500/30" },
    ],
    featured: true,
    problem:
      "AI teams had no standardized way to evaluate RAG pipeline quality, leading to inconsistent performance and undetected hallucinations in production.",
    solution:
      "Built a modular evaluation framework integrating RAGAS metrics, Arize Phoenix for tracing, and OpenTelemetry for observability. Supports batch evaluation, regression testing, and automated quality gates.",
    impact: [
      { metric: "Reduction in hallucination rate", value: "45%" },
      { metric: "Evaluation metrics tracked", value: "12+" },
      { metric: "Pipelines evaluated", value: "20+" },
    ],
    icon: "🤖",
  },
  {
    slug: "robot-framework-test-generator",
    title: "Robot Framework Test Generator",
    shortDescription:
      "AI-powered test case generation from requirements and user stories.",
    longDescription:
      "An intelligent tool that automatically generates Robot Framework test cases from natural language requirements and user stories. Uses LLMs to understand intent and generate comprehensive, executable test suites.",
    category: ["Automation", "Tools"],
    tags: [
      { name: "Python", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" },
      { name: "LLM", color: "bg-purple-500/20 text-purple-400 border-purple-500/30" },
      { name: "Robot Framework", color: "bg-green-400/20 text-green-300 border-green-400/30" },
    ],
    featured: true,
    problem:
      "Writing Robot Framework test cases manually from requirements was slow, required specialized knowledge, and often missed edge cases.",
    solution:
      "Built an LLM-powered generator that parses requirements, understands test patterns, and generates comprehensive Robot Framework test suites including positive, negative, and edge case scenarios.",
    impact: [
      { metric: "Test authoring time reduction", value: "80%" },
      { metric: "Test coverage improvement", value: "40%" },
      { metric: "Test cases generated", value: "1000+" },
    ],
    icon: "🧪",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(
  category: Project["category"][0]
): Project[] {
  return projects.filter((p) => p.category.includes(category));
}
