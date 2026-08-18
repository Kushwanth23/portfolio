import {
  SiPython, SiFastapi, SiPostgresql, SiRedis, SiDocker,
  SiLangchain, SiSelenium, SiGithub, SiRobotframework
} from "react-icons/si";
import { Brain, Database, Bot, GitBranch, Server } from "lucide-react";
import type { IconType } from "react-icons";
import type { LucideIcon } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";


type AnyIcon = IconType | LucideIcon;

const iconMap: Record<string, AnyIcon> = {
  python: SiPython,
  fastapi: SiFastapi,
  postgresql: SiPostgresql,
  redis: SiRedis,
  docker: SiDocker,
  langchain: SiLangchain,
  selenium: SiSelenium,
  git: SiGithub,
  github: SiGithub,
  "robot framework": SiRobotframework,
  // No Simple Icon available for these; use Lucide fallbacks
  "azure openai": Brain,
  openai: Bot,
  pinecone: Database,
  weaviate: Database,
  server: Server,
  gitbranch: GitBranch,
  linkedin: FaLinkedinIn,
};

interface TechIconProps {
  readonly name: string;
  readonly className?: string;
  readonly size?: number;
  readonly style?: React.CSSProperties;
}

export function TechIcon({ name, className, size = 20, style }: TechIconProps) {
  const Icon = iconMap[name.toLowerCase()];
  if (!Icon) return null;
  return <Icon size={size} className={className} style={style} />;
}