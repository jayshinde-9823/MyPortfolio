import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed w-full z-30 bg-white/70 dark:bg-slate-900/70 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-lg font-bold text-indigo-600 dark:text-indigo-400">Jay J. Shinde</div>

        <nav className="hidden md:flex gap-6 items-center">
          {links.map((l) => (
            <Link
              key={l.id}
              to={l.id}
              spy
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer text-slate-700 dark:text-slate-200 hover:text-indigo-500 dark:hover:text-indigo-300"
            >
              {l.label}
            </Link>
          ))}

          <button
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle theme"
            className="p-2 rounded-md bg-slate-100 dark:bg-slate-800"
          >
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
          </button>
          <a href="/DOC-20240720-WA0002.pdf" target="_blank" rel="noreferrer" className="px-3 py-1 rounded-md bg-indigo-600 text-white">
            Download CV
          </a>
        </nav>

        {/* mobile */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2 rounded-md bg-slate-100 dark:bg-slate-800">
            {darkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-slate-700" />}
          </button>
          <button onClick={() => setOpen((s) => !s)} className="p-2 rounded-md bg-slate-100 dark:bg-slate-800">
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="flex flex-col px-4 py-4 gap-3">
            {links.map((l) => (
              <Link key={l.id} to={l.id} spy smooth offset={-70} duration={500} onClick={() => setOpen(false)} className="cursor-pointer">
                <div className="py-2 text-slate-700 dark:text-slate-200">{l.label}</div>
              </Link>
            ))}
            <a href="/DOC-20240720-WA0002.pdf" target="_blank" rel="noreferrer" className="py-2 bg-indigo-600 text-white rounded-md text-center">Download CV</a>
          </div>
        </div>
      )}
    </header>
  );
}
