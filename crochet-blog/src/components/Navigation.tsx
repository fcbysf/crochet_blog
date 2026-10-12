"use client";

import Link from "next/link";

export const Navigation = () => {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-zinc-200/50">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-wider text-zinc-900">CROCHET ART</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="#latest-patterns" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 font-medium text-sm">
            Patterns
          </Link>

          <Link href="#about" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 font-medium text-sm">
            About Us
          </Link>

          <Link href="#contact" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 font-medium text-sm">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};