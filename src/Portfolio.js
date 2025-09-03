import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import { Mail, Phone, MapPin, Download, Github, Linkedin, Globe, Menu, X, Send } from "lucide-react";

// =============================
//  Data
// =============================
const NAV = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const TECH_SKILLS = [
  { name: "Java", pct: 80 },
  { name: "Python", pct: 75 },
  { name: "C++ / C#", pct: 70 },
  { name: "HTML / CSS", pct: 85 },
  { name: "ASP.NET (C#)", pct: 70 },
  { name: "SQL / Oracle", pct: 75 },
  { name: "Linux (RHEL Admin)", pct: 65 },
  { name: "Power BI & VMware", pct: 60 },
];

const SOFT_SKILLS = ["Problem Solving", "Leadership", "Communication", "Time Management", "Teamwork"];

const PROJECTS = [
  {
    title: "Shindeshahi Roadlines Services",
    desc: "Transportation management system to track records and orders.",
    tags: ["Web Dev", "Database", "Frontend/Backend"],
    image: "https://images.unsplash.com/photo-1569144157581-984dea473e49?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Platform",
    desc: "Full-stack solution with auth, catalog & payments.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Task Management App",
    desc: "Productivity app with drag & drop + team features.",
    tags: ["JavaScript", "Firebase", "CSS3"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop",
  },
];

// =============================
//  Component
// =============================
export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "your_service_id",     // replace with EmailJS service ID
        "your_template_id",    // replace with EmailJS template ID
        formRef.current,
        "your_public_key"      // replace with EmailJS public key
      )
      .then(() => {
        setFormSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setFormSubmitted(false), 5000);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 scroll-smooth">
      {/* ================= Header ================= */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button onClick={() => scrollToSection("home")} className="text-xl font-bold">
            Jay <span className="text-indigo-400">Shinde</span>
          </button>
          <nav className="hidden md:flex gap-6">
            {NAV.map((n) => (
              <button key={n.id} onClick={() => scrollToSection(n.id)} className="text-sm hover:text-indigo-300">
                {n.label}
              </button>
            ))}
          </nav>
          <button onClick={() => setOpen((s) => !s)} className="md:hidden">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="md:hidden border-t border-slate-800 px-4 py-2">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToSection(n.id)}
                className="block py-2 text-sm hover:text-indigo-300"
              >
                {n.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ================= Hero ================= */}
      <section id="home" className="py-20">
        <div className="max-w-6xl mx-auto grid gap-10 px-4 md:grid-cols-2 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <p className="uppercase text-indigo-300 text-sm">Hello, It's Me</p>
            <h1 className="mt-2 text-4xl font-bold sm:text-5xl">Jay Jitendra Shinde</h1>
            <p className="mt-3 text-lg text-slate-300">B.Sc. Information Technology (2024 Graduate)</p>
            <p className="mt-4 text-slate-300 max-w-xl">
              Self-driven IT graduate skilled in web/app development, databases, and Linux system administration. Passionate about full-stack development & problem-solving.
            </p>
            <div className="mt-6 flex gap-3">
              <button onClick={() => scrollToSection("portfolio")} className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-xl">
                View Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="border border-slate-700 hover:border-indigo-400 px-5 py-2 rounded-xl">
                Contact
              </button>
            </div>
            <div className="mt-6 flex gap-4 text-slate-300">
              <a href="https://github.com/jayshinde-9823" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-300">
                <Github size={18} /> GitHub
              </a>
              <a href="https://www.linkedin.com/in/jay-shinde-303a74311" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-indigo-300">
                <Linkedin size={18} /> LinkedIn
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mx-auto h-60 w-60 sm:h-72 sm:w-72 rounded-full p-1 bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20"
          >
            <div
              className="h-full w-full rounded-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop)",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* ================= About ================= */}
      <section id="about" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 text-slate-300 max-w-3xl">
            Graduated with <b>B.Sc. IT (2024, 8.98 CGPA)</b>. Strong skills in Java, Python, HTML5, CSS, C#, C++, Oracle DB, and Linux system administration. Experienced in project development, eager to expand in IT.
          </p>
        </div>
      </section>

      {/* ================= Skills ================= */}
      <section id="skills" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Skills</h2>
          <div className="grid md:grid-cols-2 gap-10 mt-8">
            <div>
              <h3 className="font-semibold">Technical</h3>
              {TECH_SKILLS.map((s) => (
                <div key={s.name} className="mt-3">
                  <div className="flex justify-between text-sm">
                    <span>{s.name}</span>
                    <span>{s.pct}%</span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full">
                    <motion.div
                      className="h-2 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold">Soft Skills</h3>
              <ul className="mt-3 grid grid-cols-2 gap-3 text-sm">
                {SOFT_SKILLS.map((s) => (
                  <li key={s} className="border border-slate-800 rounded-xl px-3 py-2">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= Projects ================= */}
      <section id="portfolio" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">My Work</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border border-slate-800 rounded-2xl p-5 bg-slate-900/40 hover:border-indigo-500"
              >
                <div className="aspect-video rounded-xl bg-cover bg-center" style={{ backgroundImage: `url(${p.image})` }} />
                <h3 className="mt-3 font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-300">{p.desc}</p>
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  {p.tags.map((t) => (
                    <span key={t} className="border border-slate-700 px-2 py-0.5 rounded">{t}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= Contact ================= */}
      <section id="contact" className="py-16 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-2"><Mail size={18}/> jayshinde9823@gmail.com</p>
              <p className="flex items-center gap-2"><Phone size={18}/> +91 8180019745</p>
              <p className="flex items-center gap-2"><MapPin size={18}/> Chiplun, Ratnagiri, India</p>
              <a href="/jay-cv.pdf" target="_blank" className="inline-flex gap-2 bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-xl text-sm">
                <Download size={18}/> Download CV
              </a>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Your Name" className="px-4 py-3 bg-slate-900 rounded-xl border border-slate-700" required />
                <input type="email" name="email" placeholder="Your Email" className="px-4 py-3 bg-slate-900 rounded-xl border border-slate-700" required />
              </div>
              <input name="subject" placeholder="Subject" className="px-4 py-3 bg-slate-900 rounded-xl border border-slate-700 w-full" required />
              <textarea name="message" rows="5" placeholder="Your Message" className="px-4 py-3 bg-slate-900 rounded-xl border border-slate-700 w-full" required />
              <button type="submit" className="flex gap-2 items-center bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-xl">
                <Send size={18}/> Send Message
              </button>
              {formSubmitted && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-green-400 mt-2">
                  ✅ Message sent successfully!
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* ================= Footer ================= */}
      <footer className="py-8 border-t border-slate-800 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Jay Jitendra Shinde. All rights reserved.
      </footer>
    </div>
  );
}
