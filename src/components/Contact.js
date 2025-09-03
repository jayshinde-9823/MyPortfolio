import React from "react";

function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-800">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-400">Contact Me</h2>
        <p className="mt-4 text-gray-300">Let's work together! Reach me at:</p>
        <a
          href="mailto:your.email@example.com"
          className="mt-6 inline-block px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 shadow-lg"
        >
          Email Me
        </a>
      </div>
    </section>
  );
}

export default Contact;

