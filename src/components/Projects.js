import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Shindeshahi Roadlines Services",
    desc: "Web-based transportation management system with order tracking & record maintenance.",
    tags: ["Web Dev", "DB", "Frontend/Backend"]
  },
  {
    title: "SAP B1 Service Layer Integrations",
    desc: "C# APIs and automation for SAP Business One using Service Layer & HANA.",
    tags: ["SAP B1", "API", "C#"]
  },
  {
    title: "Task Management App",
    desc: "Full-stack productivity app with modern UI/UX and real-time features.",
    tags: ["React", "Firebase"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-800 bg-slate-950/30">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400">Projects</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div key={p.title} whileHover={{ y: -6 }} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-300 text-sm">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => <span key={t} className="px-2 py-0.5 border border-slate-700 rounded">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
