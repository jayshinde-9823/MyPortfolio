import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin, Globe, Menu, X } from "lucide-react";
 
// Jay Jitendra Shinde — Portfolio (Final with Resume in New Tab + GitHub)
 
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
  { name: "HTML / HTML5 / CSS", pct: 85 },
  { name: "ASP.NET (C#)", pct: 70 },
  { name: "Database (Oracle, SQL)", pct: 75 },
  { name: "Linux (RHEL Admin)", pct: 65 },
  { name: "Power BI & VMware", pct: 60 },
];
 
const SOFT_SKILLS = ["Problem Solving", "Leadership (Student Coordinator)", "Communication", "Time Management", "Teamwork"];
 
const PROJECTS = [
  {
    title: "Shindeshahi Roadlines Services",
    desc: "Web-based transportation management system to maintain and store transport records. Users can also track past and current orders.",
    tags: ["Web Development", "Database", "Frontend/Backend"],
    href: "#",
  },
];
 
export default function Portfolio() {
  const [open, setOpen] = useState(false);
 
  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#home" className="text-xl font-bold tracking-tight">
            Jay <span className="text-indigo-400">Shinde</span>
          </a>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="text-sm text-slate-300 hover:text-indigo-300">
                {n.label}
              </a>
            ))}
          </nav>
          <button className="md:hidden" onClick={() => setOpen((s) => !s)} aria-label="Toggle Menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t border-slate-800 bg-slate-950 px-4 py-2 md:hidden">
            <div className="flex flex-col gap-2">
              {NAV.map((n) => (
                <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)} className="py-2 text-sm text-slate-300 hover:text-indigo-300">
                  {n.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
 
      {/* Hero */}
      <section id="home" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-20 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-sm uppercase tracking-widest text-indigo-300">Hello, It's Me</p>
            <h1 className="mt-2 text-4xl font-extrabold leading-tight sm:text-5xl">Jay Jitendra Shinde</h1>
            <p className="mt-3 text-lg text-slate-300">B.Sc. Information Technology (2024 Graduate)</p>
            <p className="mt-5 max-w-xl text-slate-300">
              A self-driven IT graduate skilled in app and web development, database management, and Linux system administration. Passionate about coding, error solving, and full-stack development.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#portfolio" className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold shadow hover:bg-indigo-500">View Work</a>
              <a href="#contact" className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-300">Contact</a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-300">
              <a href="https://github.com/jayshinde-9823" target="_blank" className="flex items-center gap-2 hover:text-indigo-300" rel="noreferrer"><Github size={18}/>GitHub</a>
              <a href="https://www.linkedin.com/in/jay-shinde-303a74311" target="_blank" className="flex items-center gap-2 hover:text-indigo-300" rel="noreferrer"><Linkedin size={18}/>LinkedIn</a>
              <a href="#" className="flex items-center gap-2 hover:text-indigo-300" rel="noreferrer"><Globe size={18}/>Portfolio</a>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="mx-auto h-60 w-60 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 p-1 ring-1 ring-slate-800 sm:h-72 sm:w-72">
            <div className="h-full w-full rounded-full bg-[url('https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop')] bg-cover bg-center"/>
          </motion.div>
        </div>
      </section>
 
      {/* About */}
      <section id="about" className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">About Me</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            I recently graduated with a <strong>B.Sc. in Information Technology</strong> (2024, 8.98 CGPA) and have strong skills in Java, Python, HTML5, CSS, C#, C++, Oracle DB, and Linux system administration (RHEL). Experienced in web-based project development and eager to work in IT sector roles to expand my knowledge and career.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-800 p-5">
              <h3 className="font-semibold text-slate-200">Education</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>2024 · B.Sc. IT, D.B.J. College (8.98 CGPA)</li>
                <li>2021 · HSC, D.B.J. College (94%)</li>
                <li>2019 · SSC, National English Medium School (85.2%)</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-800 p-5">
              <h3 className="font-semibold text-slate-200">Activities</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-300">
                <li>Student Coordinator — Technophilia (2023)</li>
                <li>Student Coordinator — I.T. Talent Mania (2024, State Level)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* Skills */}
      <section id="skills" className="border-t border-slate-800 bg-slate-950/40">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">My Skills</h2>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Technical Skills</h3>
              <div className="mt-4 space-y-4">
                {TECH_SKILLS.map((s) => (
                  <div key={s.name}>
                    <div className="mb-1 flex items-center justify-between text-sm"><span>{s.name}</span><span className="text-slate-400">{s.pct}%</span></div>
                    <div className="h-2 w-full rounded-full bg-slate-800">
                      <div className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" style={{ width: `${s.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Professional Skills</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                {SOFT_SKILLS.map((s) => (
                  <li key={s} className="rounded-xl border border-slate-800 px-3 py-2">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
 
      {/* Portfolio */}
      <section id="portfolio" className="border-t border-slate-800 bg-slate-950/60">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">My Work</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((p) => (
              <motion.a
                key={p.title}
                href={p.href || "#"}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noreferrer" : undefined}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:-translate-y-1 hover:border-indigo-500/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-800/50">
                  <div className="h-full w-full bg-[url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center transition group-hover:scale-[1.03]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-slate-700 px-2 py-0.5 text-slate-300">{t}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
 
      {/* Contact */}
      <section id="contact" className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="text-2xl font-bold">Contact Me</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div className="space-y-4 text-sm text-slate-300">
              <p className="flex items-center gap-2"><Mail size={18}/> <a className="hover:text-indigo-300" href="mailto:jayshinde9823@gmail.com">jayshinde9823@gmail.com</a></p>
              <p className="flex items-center gap-2"><Phone size={18}/> <span>+91 8180019745</span></p>
              <p className="flex items-center gap-2"><MapPin size={18}/> <span>Shindewadi Ravalgaon, Chiplun, Ratnagiri, India</span></p>
              <div className="pt-2">
                {/* CV Open in New Tab */}
                <a href="/DOC-20240720-WA0002.pdf" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-500">
                  <Download size={18}/> View CV
                </a>
              </div>
            </div>
            <form className="md:col-span-2">
              <div className="grid gap-4 sm:grid-cols-2">
                <input className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-400" placeholder="Your Name" />
                <input className="rounded-xl border bor
