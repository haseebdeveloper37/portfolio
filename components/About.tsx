const principles = [
  {
    title: "Problem-First Approach",
    desc: "Every build starts with the business problem, not the tech stack — code comes after the requirements are clear.",
    path: (
      <>
        <circle cx="12" cy="12" r="9" />
        <circle cx="12" cy="12" r="5" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
  },
  {
    title: "Performance & Scalability",
    desc: "Clean architecture and optimized databases mean sites that hold up under real traffic, not just at launch.",
    path: (
      <>
        <path d="M3 17l6-6 4 4 8-8" />
        <path d="M15 7h6v6" />
      </>
    ),
  },
  {
    title: "Always Learning",
    desc: "From headless WordPress to modern React tooling, the stack keeps evolving — and so does the work.",
    path: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
      </>
    ),
  },
  {
    title: "Outcome-Driven",
    desc: "Every recommendation is judged by what it does for conversion, load time and long-term maintenance cost.",
    path: (
      <>
        <rect x="3" y="8" width="18" height="12" rx="2" />
        <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      </>
    ),
  },
  {
    title: "Built Around the User",
    desc: "Technical decisions are made with the person using the site in mind, not just the one approving it.",
    path: (
      <>
        <circle cx="9" cy="8" r="3.2" />
        <path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6" />
        <circle cx="18" cy="9" r="2.4" />
        <path d="M15.8 14.2c2.4.3 4.7 2.2 4.7 5.3" />
      </>
    ),
  },
];

export default function About() {
  return (
    <section id="about" className="section-border-top">
      <div className="wrap about-grid">
        <div className="reveal">
          <div className="about-principles">
            {principles.map((p) => (
              <div className="principle" key={p.title}>
                <div className="p-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    {p.path}
                  </svg>
                </div>
                <div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="reveal about-copy" style={{ transitionDelay: ".1s" }}>
          <div className="eyebrow">About Haseeb</div>
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(26px,3vw,36px)",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Five years in the WordPress ecosystem — and fluent in where it&apos;s heading.
          </h2>
          <p>
            I consider myself a strong fit for web development projects because of my 5+ years of hands-on experience
            in WordPress development and design. I specialize in building custom themes, plugins and scalable
            solutions using HTML5, CSS3, JavaScript, React.js and Next.js.
          </p>
          <p>
            I have solid experience working with custom post types, WordPress hooks and filters, REST APIs,
            WooCommerce and custom functionality. I also work extensively with Elementor, Divi, WPBakery and the
            Gutenberg block editor, including building custom blocks and interactive UI components.
          </p>
          <div className="about-focus">
            <span className="focus-pill">Clean Code</span>
            <span className="focus-pill">Performance</span>
            <span className="focus-pill">Scalability</span>
            <span className="focus-pill">UX</span>
            <span className="focus-pill">SEO</span>
            <span className="focus-pill">Conversion</span>
          </div>
        </div>
      </div>
    </section>
  );
}
