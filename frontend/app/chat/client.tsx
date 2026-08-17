"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Bot, User, Download, Github, RefreshCw } from "lucide-react";
import { personal } from "@/data/personal";
import { cn } from "@/lib/utils";

interface Message {
  role: "user" | "assistant";
  content: string;
  id: string;
}

const suggestions = [
  "What projects have you built?",
  "What technologies do you use?",
  "Tell me about Smart Compare",
  "How are we work together?",
];

const SYSTEM_CONTEXT = `You are an AI assistant for ${personal.fullName}'s portfolio website. Answer questions about his experience, projects, skills, and background based on the following information:

PERSONAL:
- Name: ${personal.fullName}
- Role: ${personal.title}
- Location: ${personal.location}
- Currently: Software Engineer at ValGenesis India Pvt Ltd (Sep 2024 - Present)

SKILLS:
- AI Engineering: LLM integration, RAG pipelines, Prompt Engineering, AI Agents, Vector Databases
- Backend: FastAPI, REST APIs, Microservices, PostgreSQL, Redis, Docker
- Automation: Robot Framework, Selenium, pytest
- Tools: Azure OpenAI, LangChain, RAGAS, Arize Phoenix

PROJECTS:
1. AI Smart Compare Platform - AI-powered document comparison using FastAPI + Azure OpenAI. 70% reduction in review time, 95% accuracy.
2. Smart Gap Assessor - LLM-powered regulatory compliance gap analysis. 60% time savings.
3. AI Agent Evaluation Framework - RAGAS + Phoenix integration for evaluating RAG pipelines.
4. Robot Framework Test Generator - LLM-powered test case generation. 80% authoring time reduction.

EXPERIENCE:
- Software Engineer at ValGenesis (Sep 2024 - Present): AI document comparison, RAG solutions, microservices
- Graduate Engineer Trainee at ValGenesis (Jan 2024 - Aug 2024): Robot Framework, Selenium, backend dev
- B.Tech Computer Science (2019-2023)

Keep responses concise, helpful, and professional. If asked about contact/hiring, direct to the contact page.`;

export function ChatClient() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi! I'm trained on ${personal.name}'s experience, projects, and skills. What would you like to know?`,
      id: "welcome",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMessage: Message = { role: "user", content: text, id: Date.now().toString() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/chat`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: text,
            history: messages.map((m) => ({ role: m.role, content: m.content })),
          }),
        }
      );

      if (res.ok) {
        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.response, id: Date.now().toString() },
        ]);
      } else {
        throw new Error("API error");
      }
    } catch {
      // Fallback: simple local responses when API is unavailable
      const response = generateFallbackResponse(text);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response, id: Date.now().toString() },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const reset = () => {
    setMessages([
      {
        role: "assistant",
        content: `Hi! I'm trained on ${personal.name}'s experience, projects, and skills. What would you like to know?`,
        id: "welcome",
      },
    ]);
  };

  return (
    <div className="pt-16 min-h-screen flex flex-col">
      <div className="mx-auto max-w-6xl w-full px-4 sm:px-6 lg:px-8 py-8 flex-1 flex flex-col gap-6">
        <div className="grid lg:grid-cols-3 gap-6 flex-1">
          {/* Sidebar */}
          <div className="space-y-4 order-2 lg:order-1">
            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                  <Bot className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">AI Assistant</p>
                  <p className="text-xs text-muted-foreground">Portfolio Q&A</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground">
                I&apos;m trained on {personal.name}&apos;s experience, projects, and skills. Ask me anything!
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold">Suggestions</h3>
              <div className="space-y-2">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="w-full text-left text-xs text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors border border-transparent hover:border-border"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 space-y-3">
              <h3 className="text-sm font-semibold">Quick Actions</h3>
              <div className="space-y-2">
                <a
                  href={personal.resumeUrl}
                  download
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors w-full"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download Resume
                </a>
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-3 py-2 rounded-lg hover:bg-secondary/50 transition-colors w-full"
                >
                  <Github className="h-3.5 w-3.5" />
                  View GitHub Profile
                </a>
              </div>
            </div>
          </div>

          {/* Chat Area */}
          <div className="lg:col-span-2 flex flex-col order-1 lg:order-2">
            <div className="bg-card border border-border rounded-2xl flex flex-col" style={{ height: "70vh" }}>
              {/* Chat header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Ask me anything</p>
                    <p className="text-xs text-muted-foreground">About {personal.name}&apos;s background</p>
                  </div>
                </div>
                <button
                  onClick={reset}
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  aria-label="Reset chat"
                >
                  <RefreshCw className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                <AnimatePresence>
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className={cn(
                        "flex gap-3",
                        message.role === "user" && "flex-row-reverse"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-7 w-7 items-center justify-center rounded-full shrink-0",
                          message.role === "assistant"
                            ? "bg-primary/20 border border-primary/30"
                            : "bg-secondary border border-border"
                        )}
                      >
                        {message.role === "assistant" ? (
                          <Bot className="h-3.5 w-3.5 text-primary" />
                        ) : (
                          <User className="h-3.5 w-3.5 text-muted-foreground" />
                        )}
                      </div>
                      <div
                        className={cn(
                          "max-w-[75%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed",
                          message.role === "assistant"
                            ? "bg-secondary/50 text-muted-foreground rounded-tl-sm"
                            : "bg-primary/20 text-foreground rounded-tr-sm"
                        )}
                      >
                        {message.content}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>

                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 border border-primary/30">
                      <Bot className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="bg-secondary/50 rounded-2xl rounded-tl-sm px-4 py-3 flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <span
                          key={i}
                          className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce"
                          style={{ animationDelay: `${i * 0.15}s` }}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="border-t border-border p-4">
                <form onSubmit={handleSubmit} className="flex gap-3">
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Ask me about my projects, skills, or experience...`}
                    className="flex-1 px-4 py-2.5 text-sm rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    className="flex items-center justify-center h-10 w-10 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function generateFallbackResponse(input: string): string {
  const q = input.toLowerCase();

  if (q.includes("project") || q.includes("built") || q.includes("work")) {
    return "I've built 4 main projects: AI Smart Compare Platform (document comparison with Azure OpenAI), Smart Gap Assessor (compliance analysis), AI Agent Evaluation Framework (RAGAS + Phoenix), and Robot Framework Test Generator (AI test generation). Check out the Projects page for details!";
  }
  if (q.includes("tech") || q.includes("stack") || q.includes("skill") || q.includes("language")) {
    return "My core stack is Python + FastAPI for backends, Azure OpenAI + LangChain for AI, PostgreSQL + Redis for data, and Docker for deployment. I also use Robot Framework and Selenium for automation.";
  }
  if (q.includes("experience") || q.includes("work") || q.includes("job")) {
    return "I'm currently a Software Engineer at ValGenesis India Pvt Ltd (Sep 2024–Present), building AI-powered document intelligence systems. Before that, I was a Graduate Engineer Trainee there (Jan–Aug 2024) working on automation frameworks.";
  }
  if (q.includes("contact") || q.includes("hire") || q.includes("email")) {
    return `You can reach Kushwanth at ${personal.email} or visit the Contact page. He's open to interesting AI engineering and backend opportunities!`;
  }
  if (q.includes("compare") || q.includes("smart compare")) {
    return "AI Smart Compare Platform is an AI-powered document comparison system built with FastAPI and Azure OpenAI. It reduced manual review time by 70%, achieved 95% accuracy in change detection, and processed 2000+ pages. It uses async queues, Redis, and PostgreSQL.";
  }
  if (q.includes("education") || q.includes("degree") || q.includes("university")) {
    return "Kushwanth holds a B.Tech in Computer Science (2019–2023), with a strong foundation in algorithms, data structures, and software engineering.";
  }
  return `I'm Kushwanth's AI assistant! I can tell you about his projects (AI Smart Compare, Gap Assessor, Agent Evaluation Framework), skills (Python, FastAPI, Azure OpenAI, RAG), or experience at ValGenesis. What would you like to know?`;
}
