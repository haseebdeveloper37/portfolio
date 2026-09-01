"use client";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: wire this up to your form handler / API route / email service.
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
            <a href="https://www.linkedin.com/in/haseeb-ahmed-760674141/" className="social-icon" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <path d="M7 10v7M7 7v.01M12 17v-4.5c0-1.38 1-2.5 2.25-2.5S16.5 11.12 16.5 12.5V17M12 10.5v6.5" />
              </svg>
            </a>
            <a href="mailto:haseebdeveloper37@gmail.com" className="social-icon" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
