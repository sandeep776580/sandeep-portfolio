"use client";

import React, { useEffect, useState } from "react";

function useCount(to: number, duration = 1200) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.max(1, Math.round((to / (duration / 16))));
    const id = setInterval(() => {
      start += step;
      if (start >= to) {
        setVal(to);
        clearInterval(id);
      } else setVal(start);
    }, 16);
    return () => clearInterval(id);
  }, [to, duration]);
  return val;
}

export default function Counters() {
  const projects = useCount(6);
  const certs = useCount(2);
  const tech = useCount(15);
  const contributions = useCount(120);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="p-4 glass rounded-lg text-center">
        <div className="text-2xl font-bold">{projects}+</div>
        <div className="text-sm text-zinc-400">Projects</div>
      </div>
      <div className="p-4 glass rounded-lg text-center">
        <div className="text-2xl font-bold">{certs}+</div>
        <div className="text-sm text-zinc-400">Certifications</div>
      </div>
      <div className="p-4 glass rounded-lg text-center">
        <div className="text-2xl font-bold">{tech}+</div>
        <div className="text-sm text-zinc-400">Technologies</div>
      </div>
      <div className="p-4 glass rounded-lg text-center">
        <div className="text-2xl font-bold">{contributions}+</div>
        <div className="text-sm text-zinc-400">Contributions</div>
      </div>
    </div>
  );
}
