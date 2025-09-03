import React from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    title: "Shindeshahi Roadlines Services",
    desc: "Web-based transportation management system with order tracking & record maintenance.",
    tags: ["Web Dev", "DB", "Frontend/Backend"],
    image: "https://images.unsplash.com/photo-1569144157581-984dea473e49?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "SAP B1 Service Layer Integrations",
    desc: "C# APIs and automation for SAP Business One using Service Layer & HANA.",
    tags: ["SAP B1", "API", "C#"],
    image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Task Management App",
    desc: "Full-stack productivity app with modern UI/UX and collaboration features.",
    tags: ["React", "Firebase"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-slate-800 bg-slate-950/10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400">Projects</h2>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              className="rounded-2xl border border-slate-800 p-4 bg-slate-900/40 hover:translate-y-[-6px] transform transition"
            >
              <div className="aspect-video rounded-lg overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
              <h3 className="mt-3 font-semibold">{p.title}</h3>
              <p className="text-slate-300 text-sm mt-1">{p.desc}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {p.tags.map((t) => (
                  <span key={t} className="px-2 py-0.5 border border-slate-700 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
