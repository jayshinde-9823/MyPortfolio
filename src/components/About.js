import React from "react";

function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400">About Me</h2>
        <p className="mt-6 text-gray-300 text-lg leading-relaxed">
          I'm currently pursuing <span className="font-semibold">MCA</span> and
          working as a <span className="font-semibold">SAP B1 Technical Consultant</span>.
          I love solving problems with technology and building elegant,
          user-friendly solutions. I specialize in{" "}
          <span className="font-semibold">React, Node.js, and SAP integrations</span>.
        </p>
      </div>
    </section>
  );
}

export default About;

