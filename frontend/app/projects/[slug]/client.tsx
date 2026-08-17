"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { ProjectTag } from "@/components/TechBadge";
import { AnimatedSection } from "@/components/SectionHeader";

interface Props {
  project: Project;
}

export function ProjectDetailClient({ project }: Props) {
  return (
    <div className="pt-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <div className="space-y-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary border border-border text-4xl shrink-0">
              {project.icon}
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
                  {project.title}
                </h1>
                {project.featured && (
                  <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-primary/20 text-primary border border-primary/30">
                    Featured Project
                  </span>
                )}
              </div>
              <p className="text-muted-foreground">{project.shortDescription}</p>
            </div>
          </motion.div>

          {/* Tags + Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap items-center gap-3"
          >
            {project.tags.map((tag) => (
              <ProjectTag key={tag.name} name={tag.name} color={tag.color} />
            ))}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            )}
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            <AnimatedSection>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-red-400">⚠</span> Problem
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-green-400">✦</span> Solution
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <span className="text-blue-400">📈</span> Description
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Impact sidebar */}
          <div className="space-y-6">
            <AnimatedSection delay={0.15}>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-5">
                <h2 className="text-lg font-semibold">Impact</h2>
                {project.impact.map((item) => (
                  <div key={item.metric} className="space-y-1">
                    <p className="text-2xl font-bold text-gradient">{item.value}</p>
                    <p className="text-xs text-muted-foreground">{item.metric}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.25}>
              <div className="bg-card border border-border rounded-2xl p-6 space-y-4">
                <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                  Tech Stack
                </h2>
                <div className="flex flex-col gap-2">
                  {project.tags.map((tag) => (
                    <ProjectTag key={tag.name} name={tag.name} color={tag.color} />
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
