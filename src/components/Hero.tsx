"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Typed from "typed.js";

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

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="text-left"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm uppercase tracking-[0.35em] text-sky-400 font-semibold mb-4"
      >
        Welcome
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight"
      >
        <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
          HI, I'M SANDEEP
        </span>
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
        <a href="#contact" className="inline-block px-8 py-4 bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-sky-500/50 transition transform hover:scale-105">
          Contact Me
        </a>

        <a href="#projects" className="inline-block px-8 py-4 border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition">
          View Projects
        </a>
      </motion.div>
    </motion.div>
  );
}
