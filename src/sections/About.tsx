"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolio";

const skills = [
  { id: "react", label: "React", group: "Frontend", icon: "/skills/react.svg", accent: "from-cyan-400/20 to-sky-500/10", ring: "group-hover:border-cyan-300/60" },
  { id: "nextjs", label: "Next.js", group: "Frontend", icon: "/skills/nextjs.svg", accent: "from-zinc-100/20 to-zinc-500/10", ring: "group-hover:border-zinc-200/60" },
  { id: "typescript", label: "TypeScript", group: "Language", icon: "/skills/typescript.svg", accent: "from-blue-400/20 to-indigo-500/10", ring: "group-hover:border-blue-300/60" },
  { id: "nodejs", label: "Node.js", group: "Backend", icon: "/skills/nodejs.svg", accent: "from-emerald-400/20 to-lime-500/10", ring: "group-hover:border-emerald-300/60" },
  { id: "python", label: "Python", group: "Language", icon: "/skills/python.svg", accent: "from-yellow-300/20 to-blue-500/10", ring: "group-hover:border-yellow-200/60" },
  { id: "java", label: "Java", group: "Language", icon: "/skills/java.svg", accent: "from-orange-400/20 to-red-500/10", ring: "group-hover:border-orange-300/60" },
  { id: "cpp", label: "C++", group: "Language", icon: "/skills/cpp.svg", accent: "from-indigo-400/20 to-blue-500/10", ring: "group-hover:border-indigo-300/60" },
  { id: "sql", label: "SQL", group: "Data", icon: "/skills/sql.svg", accent: "from-sky-400/20 to-teal-500/10", ring: "group-hover:border-sky-300/60" },
  { id: "ml", label: "Machine Learning", group: "AI", icon: "/skills/ml.svg", accent: "from-rose-400/20 to-fuchsia-500/10", ring: "group-hover:border-rose-300/60" },
  { id: "llm", label: "LLM", group: "AI", icon: "/skills/llm.svg", accent: "from-violet-400/20 to-fuchsia-500/10", ring: "group-hover:border-violet-300/60" },
  { id: "powerbi", label: "Power BI", group: "Data", icon: "/skills/powerbi.svg", accent: "from-amber-300/20 to-orange-500/10", ring: "group-hover:border-amber-200/60" },
  { id: "docker", label: "Docker", group: "DevOps", icon: "/skills/docker.svg", accent: "from-blue-300/20 to-cyan-500/10", ring: "group-hover:border-blue-200/60" },
  { id: "aws", label: "AWS", group: "Cloud", icon: "/skills/aws.svg", accent: "from-orange-300/20 to-yellow-500/10", ring: "group-hover:border-orange-200/60" },
];

const skillGroups = ["Frontend", "Backend", "AI", "Data", "Cloud", "DevOps"];

function SkillIcon({ skill }: { skill: (typeof skills)[number] }) {
  return (
    <Image
      src={skill.icon}
      alt={skill.label}
      width={48}
      height={48}
      className="h-12 w-12 object-contain transition duration-300 group-hover:scale-110"
    />
  );
}

const timeline = [
  {
    title: "AI Research Project",
    org: "Personal",
    date: "2025",
    points: ["Built a prototype for document summarization using transformers."],
  },
  {
    title: "Data Analytics Intern",
    org: "HP Computer",
    date: "May 2024 – Jul 2024",
    points: ["ETL pipelines, cleaning, and sales analysis."],
  },
  {
    title: "Frontend Web Developer Intern",
    org: "Gauravgo Games Technologie",
    date: "Apr 2024 – May 2024",
    points: ["Built responsive UIs and collaborated in Agile sprints."],
  },
];

const education = [
  {
    degree: "B.TECH IN COMPUTER SCIENCE ENGINEERING",
    school: "JAYPEE UNIVERSITY OF ENGINEERING AND TECHNOLOGY GUNA",
    year: "2025",
    details: ["Focus on algorithms, data structures, machine learning, and systems."],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold mb-4"
        >
          About
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="text-lg text-zinc-200 mb-4 max-w-3xl"
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-base text-zinc-300 mb-6 leading-relaxed max-w-3xl"
        >
          I&apos;m {personalInfo.name}, a {personalInfo.title}. I enjoy building
          intelligent applications, scalable systems, and data-driven
          experiences. I focus on AI-driven web apps and full-stack systems
          that solve real problems for users and businesses.
        </motion.p>

        <motion.div
          id="skills"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mb-12 overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 shadow-2xl shadow-sky-950/20"
        >
          <div className="border-b border-white/10 bg-white/[0.03] p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase text-sky-300">
                  Technical Skills
                </p>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  Modern stack for AI-driven products
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                  >
                    {group}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-6">
            <div className="mb-6 lg:hidden">
              <div className="marquee">
                <div className="marquee-track">
                  {skills.concat(skills).map((s, i) => (
                    <div
                      key={s.id + String(i)}
                      className={`group flex w-48 items-center gap-3 rounded-lg border border-white/10 bg-gradient-to-br ${s.accent} px-4 py-3`}
                    >
                      <SkillIcon skill={s} />
                      <div>
                        <div className="text-sm font-semibold text-white">{s.label}</div>
                        <div className="text-xs text-zinc-400">{s.group}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="hidden lg:grid grid-cols-4 gap-4">
              {skills.map((s, index) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * index }}
                  whileHover={{ y: -6 }}
                  className={`group relative min-h-36 overflow-hidden rounded-lg border border-white/10 bg-zinc-900/70 p-4 transition ${s.ring}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${s.accent} opacity-80`} />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div className="rounded-lg border border-white/10 bg-black/20 p-3 shadow-lg shadow-black/20">
                        <SkillIcon skill={s} />
                      </div>
                      <span className="rounded-md bg-black/20 px-2 py-1 text-xs font-medium text-zinc-300">
                        {s.group}
                      </span>
                    </div>
                    <div>
                      <h4 className="mt-5 text-lg font-semibold text-white">{s.label}</h4>
                      <div className="mt-3 h-1.5 rounded-full bg-white/10">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${68 + (index % 5) * 6}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.05 * index }}
                          className="h-full rounded-full bg-white/60"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Education</h3>
            <div className="space-y-4">
              {education.map((e, i) => (
                <div key={i} className="bg-zinc-900/40 p-4 rounded-lg">
                  <div className="font-semibold">{e.degree}</div>
                  <div className="text-sm text-zinc-400">{e.school} • {e.year}</div>
                  <ul className="mt-2 list-disc ml-5 text-zinc-200">
                    {e.details.map((d, di) => (
                      <li key={di}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
        >
          <h3 className="text-xl font-semibold mb-6">Timeline</h3>

          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />
            <div className="pl-12 space-y-8">
              {timeline.map((it, idx) => (
                <motion.div key={idx} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.05 * idx }}>
                  <div className="text-lg font-semibold">{it.title}</div>
                  <div className="text-sm text-zinc-400">{it.org} • {it.date}</div>
                  <ul className="mt-2 list-disc ml-5 text-zinc-200">
                    {it.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
