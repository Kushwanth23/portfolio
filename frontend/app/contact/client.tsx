"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { personal } from "@/data/personal";
import { SectionHeader, AnimatedSection } from "@/components/SectionHeader";
import { TechIcon } from "@/components/TechIcon";

export function ContactClient() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSent(true);
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try emailing me directly.");
      }
    } catch {
      // Fallback: open mailto
      window.location.href = `mailto:${personal.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`Hi Kushwanth,\n\n${form.message}\n\nBest,\n${form.name}`)}`;
      toast.success("Opening your email client...");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16">
          <SectionHeader
            title="Let's"
            titleAccent="Connect"
            description="Open to interesting AI engineering and backend opportunities. Let's build something great together."
          />

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <AnimatedSection>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Get in touch</h3>
                  <p className="text-muted-foreground">
                    Whether you have a project in mind, want to collaborate, or just want to say hi — my inbox is always open.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: personal.email,
                      href: `mailto:${personal.email}`,
                    },
                    {
                      icon:  "github",
                      label: "GitHub",
                      value: "Kushwanth23",
                      href: personal.github,
                    },
                    {
                      icon: "linkedin",
                      label: "LinkedIn",
                      value: "kushwanth",
                      href: personal.linkedin,
                    },
                    {
                      icon: MapPin,
                      label: "Location",
                      value: personal.location,
                      href: null,
                    },
                  ].map((contact) => (
                    <div key={contact.label} className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border shrink-0">
                      {typeof contact.icon === "string" ? (
                        <TechIcon
                          name={contact.icon}
                          size={18}
                          className="text-muted-foreground"
                        />
                      ) : (
                        (() => {
                          const Icon = contact.icon as typeof Mail;
                          return <Icon className="h-4 w-4 text-muted-foreground" />;
                        })()
                      )}
                    </div>
                      <div>
                        <p className="text-xs text-muted-foreground">{contact.label}</p>
                        {contact.href ? (
                          <a
                            href={contact.href}
                            target={contact.href.startsWith("http") ? "_blank" : undefined}
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-sm font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Availability */}
                <div className="bg-card border border-border rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Open to AI engineering, backend, and full-stack roles. Response within 24 hours.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection delay={0.1}>
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full gap-4 text-center bg-card border border-border rounded-2xl p-12"
                >
                  <CheckCircle className="h-12 w-12 text-emerald-400" />
                  <h3 className="text-xl font-semibold">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-6 space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-muted-foreground">
                        Name
                      </label>
                      <input
                        required
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-muted-foreground">
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-muted-foreground">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="What's this about?"
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full px-3 py-2.5 text-sm rounded-xl border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all placeholder:text-muted-foreground/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <>
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}
