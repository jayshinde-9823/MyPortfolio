import React from "react";

export default function Footer() {
  return (
    <footer className="py-8 text-center text-slate-400 border-t border-slate-800 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        © {new Date().getFullYear()} Jay Jitendra Shinde — ASP.NET & SAP B1 Technical Consultant
      </div>
    </footer>
  );
}
