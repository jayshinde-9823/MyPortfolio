import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[70vh] flex items-center py-16">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <p className="uppercase text-sm text-indigo-400">Hello, it's me</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Jay Jitendra <span className="text-indigo-400">Shinde</span>
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            ASP.NET Developer • API Integration • SAP HANA • SAP B1 Technical Consultant (Service Layer). MCA background — I build scalable APIs and full-stack apps that integrate enterprise systems.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/DOC-20240720-WA0002.pdf"
              download
              className="inline-block px-5 py-2 rounded-xl bg-indigo-600 text-white shadow hover:bg-indigo-500"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-block px-5 py-2 rounded-xl border border-slate-700 text-slate-200 hover:border-indigo-400"
            >
              Contact
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-slate-300">
            <a href="https://github.com/jayshinde-9823" target="_blank" rel="noreferrer" className="hover:text-indigo-300">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jay-shinde-303a74311" target="_blank" rel="noreferrer" className="hover:text-indigo-300">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full p-1 bg-gradient-to-tr from-indigo-500/30 to-cyan-400/20 ring-1 ring-slate-800">
            <img
              src="/profile.jpg"
              alt="Jay Shinde"
              className="w-full h-full rounded-full object-cover border-4 border-slate-900 shadow-lg"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
