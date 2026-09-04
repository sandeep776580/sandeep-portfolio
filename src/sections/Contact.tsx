"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { AtSign, GitFork, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

type ContactForm = z.infer<typeof schema>;

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: ContactForm) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setSubmitted(true);
        reset();
        setTimeout(() => setSubmitted(false), 4000);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <section id="contact" className="section-shell py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <p className="section-eyebrow text-center">ESTABLISH CONNECTION</p>
        <motion.h2
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title mb-2 text-center"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-zinc-300 mb-12 max-w-2xl mx-auto"
        >
          Have a question or want to collaborate? Drop me a message and I&apos;ll get back to you soon.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-6 bg-zinc-900/40 border border-zinc-700 rounded-xl hover:border-sky-500 hover:bg-zinc-900/60 transition"
          >
            <Mail className="mb-4 text-cyan-300" size={22} />
            <h3 className="font-semibold text-cyan-100 mb-1">Email</h3>
            <a href="mailto:sandeep.official.593@gmail.com" className="text-zinc-300 hover:text-sky-400 text-sm break-all">
              sandeep.official.593@gmail.com
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-6 bg-zinc-900/40 border border-zinc-700 rounded-xl hover:border-sky-500 hover:bg-zinc-900/60 transition"
          >
            <AtSign className="mb-4 text-cyan-300" size={22} />
            <h3 className="font-semibold text-cyan-100 mb-1">LinkedIn</h3>
            <a href="https://linkedin.com/in/contactsandeep786/" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 text-sm">
              View Profile →
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="p-6 bg-zinc-900/40 border border-zinc-700 rounded-xl hover:border-sky-500 hover:bg-zinc-900/60 transition"
          >
            <GitFork className="mb-4 text-cyan-300" size={22} />
            <h3 className="font-semibold text-cyan-100 mb-1">GitHub</h3>
            <a href="https://github.com/sandeep776580" target="_blank" rel="noopener noreferrer" className="text-zinc-300 hover:text-sky-400 text-sm">
              View Code →
            </a>
          </motion.div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gradient-to-br from-zinc-900/60 to-zinc-900/30 border border-zinc-700 backdrop-blur-md rounded-2xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-200 mb-2">Name</label>
              <input
                id="name"
                {...register("name")}
                placeholder="Your name"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition text-zinc-100 placeholder-zinc-500"
              />
              {formState.errors.name && <p className="text-red-400 text-xs mt-1">{formState.errors.name.message}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-2">Email</label>
              <input
                id="email"
                {...register("email")}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition text-zinc-100 placeholder-zinc-500"
              />
              {formState.errors.email && <p className="text-red-400 text-xs mt-1">{formState.errors.email.message}</p>}
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-zinc-200 mb-2">Subject (optional)</label>
            <input
              id="subject"
              {...register("subject")}
              placeholder="What is this about?"
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition text-zinc-100 placeholder-zinc-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium text-zinc-200 mb-2">Message</label>
            <textarea
              id="message"
              {...register("message")}
              placeholder="Your message here..."
              className="w-full px-4 py-3 bg-zinc-800/50 border border-zinc-700 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500/20 transition text-zinc-100 placeholder-zinc-500 resize-none h-32"
            />
            {formState.errors.message && <p className="text-red-400 text-xs mt-1">{formState.errors.message.message}</p>}
          </div>

          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-green-900/40 border border-green-700 rounded-lg text-green-300 text-sm"
            >
              ✓ Message sent successfully! I&apos;ll get back to you soon.
            </motion.div>
          )}

          <button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-purple-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-sky-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition transform hover:scale-105"
          >
            {formState.isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
