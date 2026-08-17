import type { Metadata } from "next";
import { ChatClient } from "./client";

export const metadata: Metadata = {
  title: "AI Assistant",
  description: "Chat with an AI trained on Kushwanth's experience, projects, and skills.",
};

export default function ChatPage() {
  return <ChatClient />;
}
