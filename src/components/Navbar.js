import React, { useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";

const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-slate-950/90 backdrop-blur border-b border-gray-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-3">
        <h1
          onClick={() => scrollToSection("home")}
          className="text-xl font-bold cursor-pointer"
        >
          Jay <span className="text-indigo-500">Shinde</span>
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToSection(n.id)}
              className="hover:text-indigo-500 transition"
            >
              {n.label}
            </button>
          ))}
          <a
            href="/DOC-20240720-WA0002.pdf"
            download
            className="flex items-center gap-2 px-3 py-1 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500"
          >
            <Download size={16} /> CV
          </a>
          <button onClick={toggleTheme} className="p-2 rounded-lg">
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
        </nav>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-3 space-y-2 border-t border-slate-800">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollToSection(n.id)}
              className="block w-full text-left py-2 hover:text-indigo-500"
            >
              {n.label}
            </button>
          ))}
          <a
            href="/DOC-20240720-WA0002.pdf"
            download
            className="block py-2 text-indigo-500"
          >
            Download CV
          </a>
          <button
            onClick={toggleTheme}
            className="flex items-center gap-2 py-2"
          >
            {theme === "dark" ? <Sun /> : <Moon />}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
