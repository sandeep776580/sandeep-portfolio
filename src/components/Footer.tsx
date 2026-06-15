"use client";

import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-8 px-6 text-center text-sm text-zinc-500">
      <div>© {new Date().getFullYear()} Sandeep. All rights reserved.</div>
      <div className="mt-2 flex items-center justify-center gap-4">
        <a href="/Sandeep_Resume.pdf" className="underline">
          Download Resume
        </a>
        <a href="https://github.com/sandeep776580" className="underline">
          GitHub
        </a>
      </div>
    </footer>
  );
}
