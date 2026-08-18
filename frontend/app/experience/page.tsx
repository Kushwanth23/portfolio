import type { Metadata } from "next";
import { ExperienceClient } from "./client";

export const metadata: Metadata = {
  title: "Experience",
  description: "Kushwanth's professional experience and education in AI and backend engineering.",
};

export default function ExperiencePage() {
  return <ExperienceClient />;
}
