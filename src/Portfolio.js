import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, Github, Linkedin, Globe, Menu, X, Send } from "lucide-react";

// Jay Jitendra Shinde — Portfolio (Enhanced Version)

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
    image: "https://images.unsplash.com/photo-1569144157581-984dea473e49?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "E-Commerce Platform",
    desc: "A full-stack e-commerce solution with user authentication, product catalog, and payment integration.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    href: "#",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Task Management App",
    desc: "Productivity application for managing tasks with drag-and-drop functionality and team collaboration features.",
    tags: ["JavaScript", "Firebase", "CSS3"],
    href: "#",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800&auto=format&fit=crop"
  },
];

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log("Form submitted:", formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    
    // Show success message for 5 seconds
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <div className="min-h-screen scroll-smooth bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <button onClick={() => scrollToSection("home")} className="text-xl font-bold tracking-tight">
            Jay <span className="text-indigo-400">Shinde</span>
          </button>
          <nav className="hidden gap-6 md:flex">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => scrollToSection(n.id)}
                className="text-sm text-slate-300 hover:text-indigo-300 transition-colors"
              >
                {n.label}
              </button>
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
                <button
                  key={n.id}
                  onClick={() => scrollToSection(n.id)}
                  className="py-2 text-sm text-slate-300 hover:text-indigo-300 text-left transition-colors"
                >
                  {n.label}
                </button>
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
              <button onClick={() => scrollToSection("portfolio")} className="rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold shadow hover:bg-indigo-500 transition-colors">
                View Work
              </button>
              <button onClick={() => scrollToSection("contact")} className="rounded-xl border border-slate-700 px-5 py-2 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-300 transition-colors">
                Contact
              </button>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-slate-300">
              <a href="https://github.com/jayshinde-9823" target="_blank" className="flex items-center gap-2 hover:text-indigo-300 transition-colors" rel="noreferrer">
                <Github size={18}/>GitHub
              </a>
              <a href="https://www.linkedin.com/in/jay-shinde-303a74311" target="_blank" className="flex items-center gap-2 hover:text-indigo-300 transition-colors" rel="noreferrer">
                <Linkedin size={18}/>LinkedIn
              </a>
              <a href="#" className="flex items-center gap-2 hover:text-indigo-300 transition-colors" rel="noreferrer">
                <Globe size={18}/>Portfolio
              </a>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.6, delay: 0.1 }} 
            className="mx-auto h-60 w-60 rounded-full bg-gradient-to-tr from-indigo-500/20 to-cyan-500/20 p-1 ring-1 ring-slate-800 sm:h-72 sm:w-72"
          >
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
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>{s.name}</span>
                      <span className="text-slate-400">{s.pct}%</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-800">
                      <motion.div 
                        className="h-2 rounded-full bg-gradient-to-r from-indigo-500 to-cyan-400" 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-200">Professional Skills</h3>
              <ul className="mt-4 grid grid-cols-2 gap-3 text-sm text-slate-300">
                {SOFT_SKILLS.map((s) => (
                  <motion.li 
                    key={s} 
                    className="rounded-xl border border-slate-800 px-3 py-2"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    {s}
                  </motion.li>
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
            {PROJECTS.map((p, index) => (
              <motion.div
                key={p.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-5 transition hover:-translate-y-1 hover:border-indigo-500/60"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="aspect-video w-full overflow-hidden rounded-xl bg-slate-800/50">
                  <div 
                    className="h-full w-full bg-cover bg-center transition group-hover:scale-[1.03]" 
                    style={{ backgroundImage: `url(${p.image})` }}
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-100">{p.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
                  {p.tags.map((t) => (
                    <span key={t} className="rounded-md border border-slate-700 px-2 py-0.5 text-slate-300">{t}</span>
                  ))}
                </div>
                <button className="mt-4 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors">
                  View Details
                </button>
              </motion.div>
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
              <p className="flex items-center gap-2">
                <Mail size={18}/> 
                <a className="hover:text-indigo-300 transition-colors" href="mailto:jayshinde9823@gmail.com">
                  jayshinde9823@gmail.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={18}/> 
                <span>+91 8180019745</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={18}/> 
                <span>Shindewadi Ravalgaon, Chiplun, Ratnagiri, India</span>
              </p>
              <div className="pt-2">
                {/* CV Download Button */}
                <a 
                  href="/DOC-20240720-WA0002.pdf" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold hover:bg-indigo-500 transition-colors"
                >
                  <Download size={18}/> Download CV
                </a>
              </div>
            </div>
            
            {/* Contact Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="md:col-span-2 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input 
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-400 transition-colors" 
                  placeholder="Your Name" 
                  required
                />
                <input 
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-400 transition-colors" 
                  placeholder="Your Email" 
                  required
                />
              </div>
              <input 
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-400 transition-colors" 
                placeholder="Subject" 
                required
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm outline-none focus:border-indigo-400 transition-colors" 
                placeholder="Your Message" 
                required
              />
              <button 
                type="submit" 
                className="flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold hover:bg-indigo-500 transition-colors"
              >
                <Send size={18} /> Send Message
              </button>
              
              {formSubmitted && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-900/30 border border-green-800 rounded-xl text-green-300 text-sm"
                >
                  Thank you for your message! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Jay Jitendra Shinde. All rights reserved.</p>
      </footer>
    </div>
  );
}