"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full py-4 px-8 flex items-center justify-between backdrop-blur-lg bg-black/30 border-b border-white/10 z-50">
      <div className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-purple-500 bg-clip-text text-transparent">Sandeep</div>

      <nav className="flex items-center gap-8">
        <a href="#about" className="text-white/80 hover:text-sky-400 transition font-medium uppercase text-sm tracking-widest">
          About
        </a>
        <a href="#projects" className="text-white/80 hover:text-sky-400 transition font-medium uppercase text-sm tracking-widest">
          Projects
        </a>
        <a href="#contact" className="text-white/80 hover:text-sky-400 transition font-medium uppercase text-sm tracking-widest">
          Contact
        </a>

        <button
          aria-label="Toggle theme"
          className="ml-4 p-2 rounded-md bg-white/10 hover:bg-white/20 transition"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </nav>
    </header>
  );
}
