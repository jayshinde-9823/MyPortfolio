import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ darkMode, setDarkMode }) {
  const [active, setActive] = useState("hero");

  const navLinks = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="bg-gray-200 dark:bg-gray-800 shadow-md fixed w-full z-10 transition">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-500 dark:text-indigo-400">Jay Shinde</h1>
        <ul className="flex gap-6 text-lg items-center">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                spy={true}
                offset={-80} // adjusts for fixed navbar height
                duration={500}
                onSetActive={() => setActive(link.id)}
                className={`cursor-pointer transition ${
                  active === link.id
                    ? "text-indigo-500 dark:text-indigo-400 font-semibold"
                    : "hover:text-indigo-500 dark:hover:text-indigo-400"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
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
