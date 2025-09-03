import React from "react";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen bg-gray-900 pt-20">
      <img
        src="/profile.jpg"
        alt="Jay Shinde"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500 mb-6"
      />
      <h1 className="text-4xl md:text-6xl font-bold">
        Hi, I'm <span className="text-indigo-400">Jay Shinde</span>
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        MCA Student • SAP B1 Technical Consultant • Passionate about UI/UX & Full Stack Development
      </p>
      <a
        href="#contact"
        className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 shadow-lg"
      >
        Get In Touch
      </a>
    </section>
  );
}

export default Hero;

