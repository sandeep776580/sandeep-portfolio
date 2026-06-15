"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";
import { projects } from "../data/projects";

export default function Projects() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const categories = useMemo(() => ["All", ...new Set(projects.map((p) => p.category))], []);

  const filtered = projects.filter((p) => {
    const matchQuery = p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase());
    const matchCategory = category === "All" || p.category === category;
    return matchQuery && matchCategory;
  });

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-2 text-sm font-semibold uppercase text-sky-300">Selected Work</p>
            <h2 className="text-3xl font-bold text-white">Featured Projects</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects..."
              className="rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-sky-400"
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-lg border border-white/10 bg-zinc-950 px-4 py-2 text-sm text-white outline-none transition focus:border-sky-400"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <article
              key={p.id}
              className="group overflow-hidden rounded-lg border border-white/10 bg-zinc-950/70 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:shadow-2xl hover:shadow-sky-950/25"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-900">
                <Image
                  src={`/projects/${p.id}.svg`}
                  alt={p.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-5">
                <div className="mb-3 inline-flex rounded-md border border-sky-400/20 bg-sky-400/10 px-2.5 py-1 text-xs font-medium text-sky-200">
                  {p.category}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mb-4 min-h-12 text-sm leading-6 text-zinc-400">{p.description}</p>
                <div className="mb-5 flex flex-wrap gap-2">
                  {p.tech.map((tech) => (
                    <span key={tech} className="rounded-md bg-white/5 px-2 py-1 text-xs text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <a href={p.github} className="text-sm font-medium text-zinc-300 underline-offset-4 hover:text-sky-300 hover:underline">GitHub</a>
                  {p.demo && <a href={p.demo} className="text-sm font-medium text-zinc-300 underline-offset-4 hover:text-sky-300 hover:underline">Live</a>}
                  <a href={`/projects/${p.id}`} className="ml-auto inline-block rounded-md bg-sky-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-sky-400">Details</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
