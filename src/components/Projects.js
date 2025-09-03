import React from "react";

function Projects() {
  const projects = [
    { title: "Task Manager App", desc: "A full-stack task management app with UI/UX lifecycle implementation." },
    { title: "SAP Service Layer API", desc: "C# and .NET Core integration with SAP B1 Service Layer." },
    { title: "Cybersecurity Research", desc: "Formal research paper on modern cyber threats & countermeasures." },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-indigo-400">Projects</h2>
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-lg hover:scale-105 transform transition">
              <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;

