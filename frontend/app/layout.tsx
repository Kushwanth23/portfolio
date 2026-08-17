import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Kushwanth | AI & Backend Engineer",
    template: "%s | Kushwanth",
  },
  description:
    "Software Engineer specializing in AI-powered applications, FastAPI backends, and scalable systems.",
  keywords: ["AI Engineer", "Backend Engineer", "FastAPI", "Python", "LLM", "RAG"],
  authors: [{ name: "Kushwanth Chandramedasani" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Kushwanth Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster
            theme="dark"
            position="bottom-right"
            toastOptions={{
              style: {
                background: "hsl(0 0% 7%)",
                border: "1px solid hsl(0 0% 15%)",
                color: "hsl(0 0% 95%)",
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
