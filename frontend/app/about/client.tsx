"use client";

import { motion } from "framer-motion";
import { Briefcase, FolderOpen, Code, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { SectionHeader, AnimatedSection } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";

const statIcons = {
  briefcase: Briefcase,
  folder: FolderOpen,
  code: Code,
  sparkles: Sparkles,
};

export function AboutClient() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-indigo-500/8 rounded-full blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-medium text-primary uppercase tracking-widest">
                  ABOUT ME
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold leading-tight"
              >
                Driven by curiosity.{" "}
                <span className="text-gradient">Built for impact.</span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {personal.aboutBio.map((paragraph, i) => (
                  <p key={i} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </motion.div>
            </div>

            {/* Photo placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 border border-border flex items-center justify-center glow">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 text-sm">
                  <p className="font-medium text-foreground">{personal.name}</p>
                  <p className="text-muted-foreground text-xs">{personal.title}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {personal.stats.map((stat, i) => {
              const Icon = statIcons[stat.icon as keyof typeof statIcons] || Code;
              return (
                <AnimatedSection key={stat.label} delay={i * 0.1}>
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-3xl font-bold text-gradient">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeader
            title="What I"
            titleAccent="Do"
            description="I build end-to-end solutions — from designing robust APIs and databases to integrating AI models and delivering intuitive user experiences."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {personal.skills.map((skill, i) => (
              <AnimatedSection key={skill.title} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl p-6 space-y-4 card-hover h-full">
                  <div className="text-3xl">{skill.icon}</div>
                  <div>
                    <h3 className="font-semibold text-foreground">{skill.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {skill.description}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {skill.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-1 w-1 rounded-full bg-primary/60 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeader
            title="My"
            titleAccent="Tech Stack"
            description="Tools and technologies I work with daily"
          />
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { name: "Python",          color: "#3776AB" },
                { name: "FastAPI",          color: "#009688" },
                { name: "Azure OpenAI",     color: "#0078D4" },
                { name: "LangChain",        color: "#1C3C3C" },
                { name: "PostgreSQL",       color: "#336791" },
                { name: "Redis",            color: "#DC382D" },
                { name: "Docker",           color: "#2496ED" },
                { name: "Robot Framework",  color: "#00B09B" },
                { name: "Selenium",         color: "#43B02A" },
                { name: "Pinecone",         color: "#6C47FF" },
                { name: "Git",              color: "#F05032" },
              ].map((tech) => (
                <div
                  key={tech.name}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-medium"
                >
                  <TechIcon name={tech.name} size={18} style={{ color: tech.color }} />
                  {tech.name}
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
