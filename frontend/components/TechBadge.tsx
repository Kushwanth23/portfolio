import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
}

export function TechBadge({ name, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border",
        "bg-secondary/50 text-muted-foreground border-border/50",
        className
      )}
    >
      {name}
    </span>
  );
}

interface ProjectTagProps {
  name: string;
  color: string;
  className?: string;
}

export function ProjectTag({ name, color, className }: ProjectTagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border",
        color,
        className
      )}
    >
      {name}
    </span>
  );
}
