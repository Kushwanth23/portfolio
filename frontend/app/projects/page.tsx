import type { Metadata } from "next";
import { ProjectsClient } from "./client";

export const metadata: Metadata = {
  title: "Projects",
  description: "AI, backend, and automation projects built by Kushwanth.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
