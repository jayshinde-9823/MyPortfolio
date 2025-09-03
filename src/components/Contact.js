import React, { useRef, useState } from "react";
import { sendForm } from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    // Replace serviceId, templateId, publicKey with your EmailJS credentials
    const serviceId = "YOUR_EMAILJS_SERVICE_ID";
    const templateId = "YOUR_EMAILJS_TEMPLATE_ID";
    const publicKey = "YOUR_EMAILJS_PUBLIC_KEY";

    if (!serviceId || !templateId || !publicKey) {
      // fallback: open mail client
      const form = new FormData(formRef.current);
      const subject = form.get("subject") || "Contact from portfolio";
      const body = `Name: ${form.get("name")}\nEmail: ${form.get("email")}\n\n${form.get("message")}`;
      window.location.href = `mailto:jayshinde9823@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setSent(true);
        formRef.current.reset();
        setTimeout(() => setSent(false), 5000);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to send. You can email me directly.");
        setTimeout(() => setError(""), 5000);
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
            <a href="/DOC-20240720-WA0002.pdf" target="_blank" rel="noreferrer" className="inline-block mt-3 bg-indigo-600 px-4 py-2 rounded text-white">Download CV</a>
          </div>

          <form ref={formRef} onSubmit={onSubmit} className="md:col-span-2 space-y-4 bg-slate-900/60 p-6 rounded-xl border border-slate-800">
            <input name="name" placeholder="Your Name" required className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <input name="email" type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <input name="subject" placeholder="Subject" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" />
            <textarea name="message" rows="5" placeholder="Message" className="w-full px-4 py-3 rounded bg-slate-800 border border-slate-700" required />
            <div className="flex items-center gap-3">
              <button type="submit" className="px-4 py-2 bg-indigo-600 rounded text-white">Send Message</button>
              {sent && <div className="text-green-400 text-sm">Message sent — thank you!</div>}
              {error && <div className="text-red-400 text-sm">{error}</div>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
