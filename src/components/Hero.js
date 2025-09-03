import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen pt-20">
      <motion.img
        src="/profile.jpg"
        alt="Jay Shinde"
        className="w-40 h-40 rounded-full shadow-lg border-4 border-indigo-500 mb-6"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-bold"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm <span className="text-indigo-500 dark:text-indigo-400">Jay Shinde</span>
      </motion.h1>
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        MCA Student • SAP B1 Technical Consultant • Passionate about UI/UX & Full Stack Development
      </motion.p>
      <motion.a
        href="#contact"
        className="mt-6 px-6 py-3 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Get In Touch
      </motion.a>
    </section>
  );
}

export default Hero;
