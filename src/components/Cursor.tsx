"use client";

import { useEffect, useState } from "react";

export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    update(); media.addEventListener("change", update);
    const dot = document.querySelector<HTMLElement>(".cursor-dot");
    const ring = document.querySelector<HTMLElement>(".cursor-ring");
    const move = (event: MouseEvent) => { dot?.style.setProperty("transform", `translate(${event.clientX}px, ${event.clientY}px)`); requestAnimationFrame(() => ring?.style.setProperty("transform", `translate(${event.clientX}px, ${event.clientY}px)`)); };
    const enter = () => document.body.classList.add("cursor-active");
    const leave = () => document.body.classList.remove("cursor-active");
    const interactive = document.querySelectorAll("a, button, input, select, textarea");
    window.addEventListener("mousemove", move);
    interactive.forEach((el) => { el.addEventListener("mouseenter", enter); el.addEventListener("mouseleave", leave); });
    return () => { media.removeEventListener("change", update); window.removeEventListener("mousemove", move); interactive.forEach((el) => { el.removeEventListener("mouseenter", enter); el.removeEventListener("mouseleave", leave); }); };
  }, []);
  return enabled ? <><span className="cursor-dot" /><span className="cursor-ring" /></> : null;
}
