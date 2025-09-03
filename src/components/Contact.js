import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ ok: false, msg: "" });

  const onSubmit = (e) => {
    e.preventDefault();

    // Put your EmailJS values here if you want real sending:
    const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // fallback to mailto if not configured
      const fd = new FormData(formRef.current);
      const subject = fd.get("subject") || "Message from portfolio";
      const body = `Name: ${fd.get("name")}\nEmail: ${fd.get("email")}\n\n${fd.get("message")}`;
      window.location.href = `mailto:jayshinde9823@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        setStatus({ ok: true, msg: "Message sent — thank you!" });
        formRef.current.reset();
        setTimeout(() => setStatus({ ok: false, msg: "" }), 5000);
      })
      .catch((err) => {
        console.error(err);
        setStatus({ ok: false, msg: "Failed to send. Please email directly." });
        setTimeout(() => setStatus({ ok: false, msg: "" }), 5000);
      });
  };

  return (
    <section id="contact" className="py-16 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-indigo-400">Contact</h2>

        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div className="space-y-3 text-sm">
            <p><strong>Email:</strong> jayshinde9823@gmail.com</p>
            <p><strong>Phone:</strong> +91 8180019745</p>
            <p><strong>Location:</strong> Shindewadi Ravalgaon, Chiplun, Ratnagiri, India</p>
            <a href="/DOC-20240720-WA0002.pdf" download className="inline-block mt-3 bg-indigo-600 px-4 py-2 rounded text-white">Download CV</a>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="md:col-span-2 space-y-4 bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <input name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <input name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <textarea name="message" rows="5" placeholder="Message" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" required />
            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 bg-indigo-600 rounded text-white">Send Message</button>
              {status.msg && <div className={`${status.ok ? "text-green-400" : "text-amber-400"} text-sm`}>{status.msg}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
