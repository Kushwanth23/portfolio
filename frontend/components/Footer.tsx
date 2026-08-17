import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { TechIcon } from "@/components/TechIcon";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/20 border border-primary/30 text-primary font-bold text-sm">
                K
              </div>
              <span className="font-semibold text-foreground">{personal.name}</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Building intelligent AI systems and scalable backends that solve real problems.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/experience", label: "Experience" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex gap-3">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border/80 hover:bg-secondary transition-colors"
                aria-label="GitHub"
              >
                <TechIcon name="github" size={16} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border/80 hover:bg-secondary transition-colors"
                aria-label="LinkedIn"
              >
                <TechIcon name="linkedin" size={16} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border hover:border-border/80 hover:bg-secondary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              {personal.location}
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {personal.fullName}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js 15 & FastAPI
          </p>
        </div>
      </div>
    </footer>
  );
}
