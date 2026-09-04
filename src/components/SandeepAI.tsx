"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Command, Mic, Send, Trash2, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { personalInfo } from "../data/portfolio";
import { projects } from "../data/projects";

type Message = { from: "ai" | "user"; text: string; project?: string };
type Recognition = { continuous: boolean; interimResults: boolean; lang: string; start(): void; onresult: ((event: { results: ArrayLike<ArrayLike<{ transcript: string }>> }) => void) | null; onend: (() => void) | null; onerror: (() => void) | null };

function answer(raw: string): Omit<Message, "from"> {
  const q = raw.toLowerCase().trim();
  const commands: Record<string, string> = { "/about": "about", "/projects": "projects", "/skills": "skills", "/experience": "experience", "/contact": "contact" };
  if (q.startsWith("/")) {
    if (q === "/help") return { text: "Commands: /about, /projects, /skills, /experience, /github, /resume, /contact." };
    if (q === "/github") { window.open(personalInfo.github, "_blank", "noopener,noreferrer"); return { text: "Opening Sandeep's GitHub." }; }
    if (q === "/resume") { window.open("/Sandeep_Resume.pdf", "_blank", "noopener,noreferrer"); return { text: "Opening Sandeep's résumé." }; }
    const target = commands[q]; if (target) { document.getElementById(target)?.scrollIntoView({ behavior: "smooth" }); return { text: `Opening ${target} module.` }; }
    return { text: "That command is not available. Use /help." };
  }
  if (/who is|what does|about sandeep/.test(q)) return { text: `Sandeep is a ${personalInfo.title}. ${personalInfo.tagline}` };
  if (/contact|email|linkedin/.test(q)) return { text: `Email Sandeep at ${personalInfo.email}, or use the GitHub and LinkedIn links in the Connection section.` };
  if (/resume|cv/.test(q)) { window.open("/Sandeep_Resume.pdf", "_blank", "noopener,noreferrer"); return { text: "Opening Sandeep's résumé." }; }
  if (/github/.test(q)) { window.open(personalInfo.github, "_blank", "noopener,noreferrer"); return { text: "Opening Sandeep's GitHub." }; }
  const found = projects.find((project) => `${project.title} ${project.category} ${project.tech.join(" ")}`.toLowerCase().split(/\s+/).some((word) => word.length > 3 && q.includes(word)));
  if (found) return { text: `${found.title}: ${found.description} Technologies: ${found.tech.join(", ")}.`, project: found.id };
  if (/technolog|skills?|backend/.test(q)) return { text: "Sandeep's current portfolio highlights React, Next.js, TypeScript, Node.js, Python, Java, C++, SQL, Machine Learning, LLMs, Power BI, Docker, and AWS." };
  return { text: "I can answer questions about Sandeep's real projects, technologies, résumé, GitHub, and contact information. Try “Show me the Salesforce project” or /help." };
}

export default function SandeepAI() {
  const [messages, setMessages] = useState<Message[]>([{ from: "ai", text: "Hello. I’m SANDEEP AI. Ask about Sandeep’s verified portfolio data." }]);
  const [input, setInput] = useState(""); const [status, setStatus] = useState("ONLINE"); const [palette, setPalette] = useState(false); const [voice, setVoice] = useState(false);
  const recognition = useRef<Recognition | null>(null);
  useEffect(() => { const w = window as typeof window & { SpeechRecognition?: new () => Recognition; webkitSpeechRecognition?: new () => Recognition }; const Ctor = w.SpeechRecognition || w.webkitSpeechRecognition; const frame = requestAnimationFrame(() => setVoice(Boolean(Ctor))); if (Ctor) { const r = new Ctor(); r.continuous = false; r.interimResults = false; r.lang = "en-US"; r.onresult = (event) => { setInput(event.results[0][0].transcript); setStatus("ONLINE"); }; r.onend = () => setStatus("ONLINE"); r.onerror = () => setStatus("TEXT MODE"); recognition.current = r; } const keys = (event: KeyboardEvent) => { if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") { event.preventDefault(); setPalette(true); } }; addEventListener("keydown", keys); return () => { cancelAnimationFrame(frame); removeEventListener("keydown", keys); }; }, []);
  async function ask(value = input) { const text = value.trim(); if (!text) return; setMessages((all) => [...all, { from: "user", text }]); setInput(""); setStatus("ANALYZING…"); await new Promise((resolve) => setTimeout(resolve, 300)); setStatus("RESPONDING…"); setMessages((all) => [...all, { from: "ai", ...answer(text) }]); setTimeout(() => setStatus("ONLINE"), 650); }
  function submit(event: FormEvent) { event.preventDefault(); void ask(); }
  function listen() { if (!recognition.current) return; setStatus("LISTENING…"); recognition.current.start(); }
  return <section id="ai" className="section-shell px-6 py-24"><div className="mx-auto max-w-6xl"><div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between"><div><p className="section-eyebrow">PERSONAL INTELLIGENCE SYSTEM</p><h2 className="section-title">SANDEEP <span className="text-cyan-300">AI</span></h2><p className="mt-3 max-w-xl text-zinc-400">A local portfolio assistant grounded in the information available on this site.</p></div><button onClick={() => setPalette(true)} className="ai-command"><Command size={16} /> COMMAND CENTER <kbd>CTRL K</kbd></button></div><div className="ai-shell"><aside><div className="ai-avatar"><Bot /></div><p className="mt-3 font-mono text-xs tracking-[.16em] text-cyan-100">SANDEEP AI</p><p className="mt-1 text-xs text-cyan-300">{status}</p><div className="mt-8 space-y-3 font-mono text-[10px] text-zinc-500"><p>RETRIEVAL <span>LOCAL</span></p><p>VOICE <span>{voice ? "READY" : "TEXT MODE"}</span></p><p>DATA <span>VERIFIED</span></p></div></aside><div className="min-w-0"><div className="ai-thread" aria-live="polite">{messages.map((message, index) => <motion.div key={index} initial={{ opacity: 0, y: 7 }} animate={{ opacity: 1, y: 0 }} className={`ai-bubble ${message.from}`}><p>{message.text}</p>{message.project && <a href={`/projects/${message.project}`} className="mt-2 inline-block text-xs font-semibold text-cyan-300">OPEN PROJECT MODULE →</a>}</motion.div>)}</div><form onSubmit={submit} className="ai-form"><input value={input} onChange={(event) => setInput(event.target.value)} placeholder="Ask about Sandeep’s portfolio…" aria-label="Ask Sandeep AI" /><button type="button" onClick={listen} disabled={!voice} aria-label="Talk to Sandeep AI"><Mic size={18} /></button><button aria-label="Send"><Send size={18} /></button></form><div className="ai-prompts"><button onClick={() => void ask("Show me Sandeep's AI projects")}>AI projects</button><button onClick={() => void ask("What technologies does Sandeep know?")}>Technology matrix</button><button onClick={() => setMessages([{ from: "ai", text: "Conversation cleared. How can I help?" }])}><Trash2 size={13} /> Clear</button></div></div></div></div><AnimatePresence>{palette && <motion.div className="ai-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} role="dialog" aria-modal="true" aria-label="Command center"><div className="ai-dialog"><button onClick={() => setPalette(false)} aria-label="Close command center"><X /></button><p className="section-eyebrow">COMMAND CENTER</p><h3>Navigate the system</h3><div>{["/help", "/about", "/projects", "/skills", "/experience", "/github", "/resume", "/contact"].map((command) => <button key={command} onClick={() => { setPalette(false); void ask(command); }}>{command}</button>)}</div></div></motion.div>}</AnimatePresence></section>;
}
