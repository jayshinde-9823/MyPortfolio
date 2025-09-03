import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-16 border-t border-slate-800">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2 initial={{ y: 10, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} className="text-2xl font-bold text-indigo-400">About Me</motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-4 text-slate-300">
          I graduated (B.Sc. IT, 2024) and currently work as an <strong>ASP.NET Developer</strong> and <strong>SAP B1 Technical Consultant</strong>.
          My work focuses on API integration, SAP HANA, Service Layer automation, and building resilient backend services.
          <br/><br/>
          <strong>Education:</strong> B.Sc. IT (2024) — D.B.J. College (8.98 CGPA). HSC 94%, SSC 85.2%.
        </motion.p>

        <div className="mt-6 grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-slate-800 p-4">
            <h4 className="font-semibold">Current Role</h4>
            <p className="text-slate-300 text-sm mt-2">ASP.NET Developer · API Integration · SAP HANA · SAP B1 (Service Layer)</p>
          </div>
          <div className="rounded-xl border border-slate-800 p-4">
            <h4 className="font-semibold">Technical Tools</h4>
            <p className="text-slate-300 text-sm mt-2">Visual Studio, VS Code, SQL Developer, HANA Studio, Postman, Git, Docker (basic)</p>
          </div>
        </div>
      </div>
    </section>
  );
}
