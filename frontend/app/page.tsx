"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ChevronRight, Bot, Zap } from "lucide-react";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { TechIcon } from "@/components/TechIcon";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader, AnimatedSection } from "@/components/SectionHeader";

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(0_0%_15%/0.1)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_15%/0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  AI & BACKEND ENGINEER
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
                  Building intelligent solutions that solve{" "}
                  <span className="text-gradient">real-world problems.</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Specializing in AI, FastAPI, and scalable systems. Turning
                  complex challenges into simple, powerful experiences.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all hover:gap-3"
                >
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-secondary/50 hover:bg-secondary font-medium transition-colors"
                >
                  Contact Me
                </Link>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-3"
              >
                {personal.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-card text-sm text-muted-foreground hover:text-foreground hover:border-border/80 transition-colors"
                  >
                    <TechIcon name={tech.name} size={15} style={{ color: tech.color }} />
                    {tech.name}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* Right content – Decorative AI card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-full max-w-md">
                {/* Floating card */}
                <div className="glass rounded-2xl p-6 space-y-4 glow animate-float">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/20 border border-primary/30">
                      <Bot className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">AI Assistant</p>
                      <p className="text-xs text-muted-foreground">Powered by RAG</p>
                    </div>
                    <span className="ml-auto flex items-center gap-1 text-xs text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Online
                    </span>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-secondary/50 rounded-xl rounded-tl-sm p-3 text-sm text-muted-foreground">
                      How can I help you learn about my experience with AI and LLMs?
                    </div>
                    <div className="bg-primary/20 rounded-xl rounded-tr-sm p-3 text-sm text-right ml-8">
                      Tell me about your experience with AI and LLMs
                    </div>
                    <div className="bg-secondary/50 rounded-xl rounded-tl-sm p-3 text-sm text-muted-foreground">
                      I have extensive experience working with Large Language Models and AI technologies...
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 glass rounded-xl px-3 py-2 text-xs font-medium text-foreground"
                >
                  <Zap className="h-3 w-3 inline mr-1 text-yellow-400" />
                  FastAPI + RAG
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {personal.stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1}>
                <div className="text-center space-y-1">
                  <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex items-end justify-between">
            <SectionHeader
              badge="FEATURED PROJECTS"
              title="Solutions I've built"
              titleAccent="and delivered"
              description="A collection of projects that showcase my skills in AI, backend development, and automation."
              align="left"
            />
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              View all projects
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Filter tabs */}
          <AnimatedSection>
            <div className="flex flex-wrap gap-2">
              {["All", "AI/ML", "Backend", "Automation", "Tools"].map((cat) => (
                <span
                  key={cat}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium cursor-pointer transition-colors border ${
                    cat === "All"
                      ? "bg-foreground text-background border-foreground"
                      : "border-border text-muted-foreground hover:text-foreground hover:border-border/80"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>
          </AnimatedSection>

          {/* Project grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              View all projects <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="glass rounded-2xl p-12 text-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-purple-500/5 to-pink-500/5" />
              <div className="relative space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Let&apos;s build something{" "}
                  <span className="text-gradient">intelligent</span>
                </h2>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Open to interesting AI engineering and backend roles. Let&apos;s
                  talk about what we can build together.
                </p>
                <div className="flex flex-wrap justify-center gap-4 pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                  >
                    Get in Touch
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/chat"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-secondary font-medium transition-colors"
                  >
                    <Bot className="h-4 w-4" />
                    Ask AI About Me
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
