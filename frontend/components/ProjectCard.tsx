"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { Project } from "@/data/projects";
import { ProjectTag } from "@/components/TechBadge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  variant?: "default" | "compact";
}

export function ProjectCard({ project, index = 0, variant = "default" }: ProjectCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative bg-card border border-border rounded-2xl p-6 card-hover",
        "flex flex-col gap-4"
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border text-xl shrink-0">
            {project.icon}
          </div>
          <div>
            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
              {project.title}
            </h3>
            <div className="flex gap-1.5 mt-0.5">
              {project.category.map((cat) => (
                <span
                  key={cat}
                  className="text-xs text-muted-foreground"
                >
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="shrink-0 flex h-8 w-8 items-center justify-center rounded-lg border border-border hover:border-primary/50 hover:bg-primary/10 transition-all"
        >
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Description */}
      <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
        {project.shortDescription}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {project.tags.slice(0, 4).map((tag) => (
          <ProjectTag key={tag.name} name={tag.name} color={tag.color} />
        ))}
        {project.tags.length > 4 && (
          <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border bg-secondary/50 text-muted-foreground border-border/50">
            +{project.tags.length - 4}
          </span>
        )}
      </div>

      {/* External links */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="flex gap-3 pt-1 border-t border-border">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              <ExternalLink className="h-3 w-3" />
              Live Demo
            </a>
          )}
        </div>
      )}
    </motion.div>
  );
}
