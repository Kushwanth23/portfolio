"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";
import { experiences } from "@/data/experience";
import { TechBadge } from "@/components/TechBadge";
import { SectionHeader, AnimatedSection } from "@/components/SectionHeader";
import { cn } from "@/lib/utils";

export function ExperienceClient() {
  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            badge="MY JOURNEY"
            title="Experience that shaped"
            titleAccent="my expertise"
            description="My professional journey from engineering to AI-powered systems."
          />

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-border to-transparent" />

            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <AnimatedSection key={exp.id} delay={i * 0.1}>
                  <div className="flex gap-6 md:gap-10">
                    {/* Timeline dot */}
                    <div className="flex flex-col items-center shrink-0">
                      <div
                        className={cn(
                          "flex h-10 w-10 md:h-16 md:w-16 items-center justify-center rounded-xl md:rounded-2xl border-2 z-10 shrink-0",
                          exp.type === "work"
                            ? "bg-primary/10 border-primary/30"
                            : "bg-secondary border-border"
                        )}
                      >
                        {exp.type === "work" ? (
                          <Briefcase className="h-4 w-4 md:h-6 md:w-6 text-primary" />
                        ) : (
                          <GraduationCap className="h-4 w-4 md:h-6 md:w-6 text-muted-foreground" />
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card border border-border rounded-2xl p-6 space-y-4 card-hover pb-8">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <p className="text-primary font-medium text-sm">
                              {exp.company}
                            </p>
                            {exp.endDate === null && (
                              <span className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full px-2 py-0.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                Current
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
                          <span className="text-sm text-muted-foreground font-medium">
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {exp.description.map((item, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.05 + 0.2 }}
                            className="flex gap-3 text-sm text-muted-foreground"
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0 mt-2" />
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-2">
                        {exp.tags.map((tag) => (
                          <TechBadge key={tag} name={tag} />
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
