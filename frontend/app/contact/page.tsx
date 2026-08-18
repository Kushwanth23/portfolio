import type { Metadata } from "next";
import { ContactClient } from "./client";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Kushwanth — open to AI engineering and backend roles.",
};

export default function ContactPage() {
  return <ContactClient />;
}
