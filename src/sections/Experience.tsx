"use client";

import React from "react";

export default function Experience() {
  const items = [
    {
      title: "Technical Support Engineer",
      org: "BluePMS Software Solutions · Full-time",
      duration: "Jul 2026 – Present",
      location: "Chennai, Tamil Nadu, India · On-site",
      points: [
        "Work across software development, testing, DevOps, and technical support functions.",
        "Contribute to coding, troubleshooting, and issue resolution activities.",
        "Perform software testing and quality assurance to support reliable, high-quality solutions.",
        "Assist with DevOps tasks, software deployments, and operational processes.",
        "Provide technical support to customers and resolve technical issues effectively.",
        "Conduct product demonstrations and communicate technical solutions to customers and stakeholders.",
        "Collaborate with internal teams and customers to understand requirements and deliver effective software solutions.",
        "Support customer engagement, product awareness, and business growth initiatives.",
      ],
    },
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
    <section id="experience" className="section-shell py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-eyebrow">CAREER TIMELINE</p>
        <h2 className="section-title mb-10">Experience</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-300 via-cyan-300/20 to-transparent" />
          <div className="pl-12">
            {items.map((it, idx) => (
              <div key={idx} className="mb-8 rounded-xl border border-white/[.07] bg-white/[.02] p-5 transition hover:border-cyan-300/25">
                <div className="text-xl font-semibold">{it.title}</div>
                <div className="text-sm text-zinc-400">{it.org} • {it.duration}</div>
                {"location" in it && (
                  <div className="text-sm text-zinc-400">{it.location}</div>
                )}
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
