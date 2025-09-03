import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md fixed w-full z-10 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">Jay Shinde</h1>
        <ul className="flex gap-6 text-lg items-center">
          <li><a href="#about" className="hover:text-indigo-500 dark:hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-500 dark:hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-500 dark:hover:text-indigo-400">Contact</a></li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 hover:scale-110 transition"
            >
              {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-900" />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
