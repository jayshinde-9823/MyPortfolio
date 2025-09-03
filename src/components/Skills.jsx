import React from "react";
import { motion } from "framer-motion";

const TECH = [
  { name: "ASP.NET (C#)", pct: 82 },
  { name: "API Integration", pct: 85 },
  { name: "SAP HANA", pct: 72 },
  { name: "SAP B1 (Service Layer)", pct: 80 },
  { name: "Java / Python", pct: 75 },
  { name: "SQL / Oracle", pct: 78 },
];

const SOFT = ["Problem Solving", "Fast Learner", "Teamwork", "Communication", "Leadership"];

export default function Skills() {
  return (
    <section id="skills" className="py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400">Skills</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <div>
            {TECH.map((t) => (
              <div key={t.name} className="mb-4">
                <div className="flex justify-between text-sm">
                  <span>{t.name}</span>
                  <span className="text-slate-400">{t.pct}%</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full mt-1">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${t.pct}%` }} transition={{ duration: 1 }} className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
                </div>
              </div>
            ))}
          </div>

          <div>
            <h3 className="font-semibold mb-3">Professional Skills</h3>
            <div className="grid grid-cols-2 gap-3">
              {SOFT.map((s) => (
                <div key={s} className="border border-slate-800 rounded-xl px-3 py-2 text-sm">{s}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
