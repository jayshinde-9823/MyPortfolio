import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
          <p className="uppercase text-sm text-indigo-400">Hi, I'm</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Jay Jitendra Shinde</h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            ASP.NET Developer • API Integration • SAP HANA • SAP B1 Technical Consultant (Service Layer) • MCA background.
            I build scalable backend APIs and full-stack web apps, and integrate enterprise systems with practical solutions.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="/DOC-20240720-WA0002.pdf" className="px-4 py-2 rounded-xl bg-indigo-600 text-white">Download CV</a>
            <a href="#contact" className="px-4 py-2 rounded-xl border border-slate-700 text-slate-200">Contact</a>
          </div>

          <div className="mt-6 flex gap-4 text-slate-300">
            <a href="https://github.com/jayshinde-9823" target="_blank" rel="noreferrer"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/jay-shinde-303a74311" target="_blank" rel="noreferrer"><FaLinkedin size={20} /></a>
          </div>
        </motion.div>

        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.6 }} className="flex justify-center">
          <div className="w-64 h-64 rounded-full bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 p-1 ring-1 ring-slate-800">
            <img src="/profile.jpg" alt="Jay Shinde" className="w-full h-full object-cover rounded-full border-4 border-slate-900 shadow-lg" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
