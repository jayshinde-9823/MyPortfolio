import React from "react";

function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-400">Jay Shinde</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#about" className="hover:text-indigo-400">About</a></li>
          <li><a href="#projects" className="hover:text-indigo-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

