"use client";

import React from "react";

export default function Experience() {
  const items = [
    {
      title: "Data Analytics Intern",
      org: "HP Computer",
      duration: "May 2024 – July 2024",
      points: [
        "Data Cleaning & Transformation",
        "ETL Processes",
        "Amazon Sales Data Analysis",
      ],
    },
    {
      title: "Frontend Web Developer Intern",
      org: "Gauravgo Games Technologie",
      duration: "April 2024 – May 2024",
      points: ["React.js Development", "Responsive UI Design", "Agile Collaboration"],
    },
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-zinc-700" />
          <div className="pl-12">
            {items.map((it, idx) => (
              <div key={idx} className="mb-8">
                <div className="text-xl font-semibold">{it.title}</div>
                <div className="text-sm text-zinc-400">{it.org} • {it.duration}</div>
                <ul className="mt-2 list-disc ml-5 text-zinc-200">
                  {it.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
