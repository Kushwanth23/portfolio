import type { Metadata } from "next";
import { AboutClient } from "./client";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Kushwanth — AI & Backend Engineer specializing in LLMs, RAG, and FastAPI.",
};

export default function AboutPage() {
  return <AboutClient />;
}
