import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    { title: "Task Manager App", desc: "Full-stack task management app with UI/UX lifecycle." },
    { title: "SAP Service Layer API", desc: "C# .NET Core integration with SAP B1 Service Layer." },
    { title: "Cybersecurity Research", desc: "Formal research paper on modern cyber threats." },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-500 dark:text-indigo-400">Projects</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="bg-gray-200 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-700 dark:text-gray-400">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
