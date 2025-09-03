import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{ y: 8, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-2xl font-bold text-indigo-400">
          About Me
        </motion.h2>

        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-4 text-slate-300 max-w-3xl">
          I graduated with a <strong>B.Sc. Information Technology (2024)</strong> and currently work as an <strong>ASP.NET Developer</strong>.
          My responsibilities include API integration, SAP HANA & SAP B1 Service Layer automation, building backend services, and integrating enterprise systems.
        </motion.p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-slate-800 p-4">
            <h4 className="font-semibold">Current Role</h4>
            <p className="mt-2 text-slate-300 text-sm">
              ASP.NET Developer · API Integration · SAP B1 Technical Consultant (Service Layer) · SAP HANA
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 p-4">
            <h4 className="font-semibold">Education</h4>
            <ul className="mt-2 text-slate-300 text-sm space-y-1">
              <li>2024 — B.Sc. Information Technology, D.B.J. College (8.98 CGPA)</li>
              <li>2021 — HSC, D.B.J. College (94%)</li>
              <li>2019 — SSC, National English Medium School (85.2%)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
