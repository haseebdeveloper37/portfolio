"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function Contact() {

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  };

  return (
    <section id="contact" className="section-border-top">
      <div className="wrap contact-grid">
        <form className="reveal" onSubmit={handleSubmit}>
          <div className="eyebrow">Contact</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(24px,2.8vw,32px)",
              fontWeight: 600,
              marginBottom: "26px",
            }}
          >
            Tell me about your project.
          </h2>
          <div className="row2">
            <div className="field">
              <label htmlFor="fname">Name</label>
              <input id="fname" type="text" placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="femail">Email</label>
              <input id="femail" type="email" placeholder="you@company.com" />
            </div>
          </div>
          <div className="field">
            <label htmlFor="ftype">Project Type</label>
            <select id="ftype">
              <option>WordPress Development</option>
              <option>Custom Plugin</option>
              <option>WooCommerce Store</option>
              <option>React / Next.js App</option>
              <option>SEO &amp; Performance</option>
              <option>Something else</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="fmsg">Message</label>
            <textarea id="fmsg" rows={5} placeholder="What are you building?"></textarea>
          </div>
          <button className="btn btn-primary" type="submit" style={{ marginTop: "6px" }}>
            Send Message
          </button>
        </form>

        <div className="reveal contact-info" style={{ transitionDelay: ".1s" }}>
          <h3>Haseeb Ahmed</h3>
          <div className="role">WordPress Developer &amp; Web Development Specialist</div>
          <div className="info-line">
            <span>Email</span>
            <span style={{ marginLeft: "auto", color: "var(--text-secondary)" }}>haseebdeveloper37@gmail.com</span>
          </div>
          <div className="info-line">
            <span>Based in</span>
            <span style={{ marginLeft: "auto", color: "var(--text-secondary)" }}>Lahore, Pakistan · working worldwide</span>
          </div>
          <div className="info-line">
            <span>Availability</span>
            <span style={{ marginLeft: "auto", color: "var(--text-secondary)" }}>24/7</span>
          </div>
<div className="social-row">
  <a
    href="https://www.linkedin.com/in/haseeb-ahmed-760674141/"
    className="social-icon"
    aria-label="LinkedIn"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7 10v7M7 7v.01M12 17v-4.5c0-1.38 1-2.5 2.25-2.5S16.5 11.12 16.5 12.5V17M12 10.5v6.5" />
    </svg>
  </a>

  <a
    href="mailto:haseebdeveloper37@gmail.com"
    className="social-icon"
    aria-label="Email"
  >
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  </a>

  <a
    href="https://wa.me/923056684827"
    className="social-icon"
    aria-label="WhatsApp"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.48 0 .14 5.34.14 11.9c0 2.1.55 4.15 1.6 5.96L.03 24l6.28-1.65a11.86 11.86 0 0 0 5.73 1.47h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.43-8.44ZM12.05 21.78h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.64-.23-.37a9.88 9.88 0 1 1 8.36 4.62Zm5.42-7.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  </a>
</div>
        </div>
      </div>
    </section>
  );
}
