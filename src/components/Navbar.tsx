"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  const links = ["About", "Skills", "Projects", "Experience", "AI", "Contact"];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "border-b border-white/10 bg-[#080a11]/80 py-3 backdrop-blur-xl" : "py-5"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
      <a href="#home" className="font-mono text-sm font-bold tracking-[.18em] text-white">SANDEEP<span className="text-cyan-300"> / OS</span></a>

      <nav className="hidden items-center gap-7 md:flex">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>)}
      </nav>
      <a href="#contact" className="hidden rounded-full border border-indigo-300/30 px-4 py-2 text-xs font-semibold text-indigo-100 transition hover:bg-indigo-300/10 md:block">Let&apos;s talk</a>
      <button className="rounded-md p-2 text-white md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && <nav className="mx-4 mt-3 grid rounded-xl border border-white/10 bg-[#0c0f19]/95 p-3 backdrop-blur-xl md:hidden">{links.map((link) => <a onClick={() => setOpen(false)} key={link} href={`#${link.toLowerCase()}`} className="rounded-lg px-4 py-3 text-sm text-zinc-200 hover:bg-white/5">{link}</a>)}</nav>}
    </header>
  );
}
