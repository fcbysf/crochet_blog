import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PopunderInjector } from "@/components/ads/ad-injector";
import { PatternsProvider } from "@/context/PatternsContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hook & Loop - Crochet Blog",
  description: "Premium crochet patterns, tutorials, and resources for enthusiasts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-50">
        <PatternsProvider>
          <PopunderInjector />
          <Navigation />

          <main className="flex-1">{children}</main>

          <Footer />
        </PatternsProvider>
      </body>
    </html>
  );
}