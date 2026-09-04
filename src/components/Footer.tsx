"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="mt-8 w-full border-t border-white/[.07] px-6 py-10 text-center text-sm text-zinc-500">
      <div className="font-mono text-xs tracking-[.2em] text-zinc-300">SANDEEP / DIGITAL SYSTEMS</div>
      <p className="mt-3">Building intelligent digital experiences.</p>
      <div className="mt-5 flex items-center justify-center gap-5">
        <a href="/Sandeep_Resume.pdf" className="transition hover:text-cyan-300">
          Download Resume
        </a>
        <a href="https://github.com/sandeep776580" className="transition hover:text-cyan-300">
          GitHub
        </a>
      </div>
      <div className="mt-6 text-xs">© {new Date().getFullYear()} Sandeep. All rights reserved.</div>
    </footer>
  );
}
