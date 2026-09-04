"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";
import { ArrowDownRight, AtSign, Download, GitFork, Mail } from "lucide-react";

const CoreScene = dynamic(() => import("./CoreScene"), { ssr: false, loading: () => <div className="core-fallback" aria-hidden="true" /> });

const titles = [
  "Software Engineer",
  "AI Developer",
  "Full Stack Developer",
  "Data Analyst",
];

export default function Hero() {
  const el = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!el.current) return;
    const typed = new Typed(el.current, {
      strings: titles,
      typeSpeed: 48,
      backSpeed: 28,
      backDelay: 1200,
      startDelay: 150,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (<>
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left py-16 lg:py-0"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold mb-4"
      >
        <span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-300 align-middle shadow-[0_0_14px_#67e8f9]" />SANDEEP INTERFACE / AVAILABLE FOR OPPORTUNITIES
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
      >
        <span className="text-white">Sandeep</span><span className="text-gradient">.</span>
      </motion.h1>

      <p className="text-xl md:text-2xl text-sky-300 font-medium mb-6 min-h-[3rem] flex items-start">
        <span ref={el} />
      </p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-base md:text-lg text-zinc-300 mb-10 leading-relaxed max-w-lg"
      >
        Building intelligent applications, scalable systems, data-driven solutions, and modern digital experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-wrap gap-4"
      >
        <a href="#projects" className="button-primary">
          View Projects <ArrowDownRight size={17} />
        </a>
        <a href="/Sandeep_Resume.pdf" className="button-secondary" target="_blank">
          Download Resume <Download size={16} />
        </a>
      </motion.div>
      <div className="mt-9 flex items-center gap-4 text-zinc-400">
        <a aria-label="GitHub" href="https://github.com/sandeep776580" target="_blank" rel="noreferrer" className="social-link"><GitFork size={19} /></a>
        <a aria-label="LinkedIn" href="https://linkedin.com/in/contactsandeep786/" target="_blank" rel="noreferrer" className="social-link"><AtSign size={19} /></a>
        <a aria-label="Email Sandeep" href="mailto:sandeep.official.593@gmail.com" className="social-link"><Mail size={19} /></a>
      </div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.25 }} className="relative mx-auto h-[370px] w-full max-w-[520px] lg:h-[540px]">
      <div className="ai-orbit ai-orbit-one" aria-hidden="true" />
      <div className="ai-orbit ai-orbit-two" aria-hidden="true" />
      <div className="absolute inset-[12%] rounded-full border border-cyan-300/15 bg-cyan-400/[.04] blur-sm" />
      <CoreScene />
      <div className="ai-panel ai-panel-left" aria-hidden="true"><span>01 / INTELLIGENCE</span><strong>AI + DATA</strong><i /></div>
      <div className="ai-panel ai-panel-right" aria-hidden="true"><span>SYSTEM CAPABILITY</span><strong>FULL STACK</strong><i /></div>
      <div className="ai-coordinate ai-coordinate-top" aria-hidden="true">NODE / 01</div>
      <div className="ai-coordinate ai-coordinate-bottom" aria-hidden="true">LATENCY: OPTIMIZED</div>
      <div className="absolute bottom-7 left-1/2 w-max -translate-x-1/2 rounded-full border border-cyan-200/20 bg-black/45 px-4 py-2 font-mono text-[10px] tracking-[.22em] text-cyan-50/70 backdrop-blur">SANDEEP CORE / ONLINE</div>
    </motion.div>
  </>);
}
