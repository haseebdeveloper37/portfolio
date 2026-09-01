export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-grid">
        <div className="reveal in">
          <div className="eyebrow">Senior WordPress Developer · 5+ Years</div>
          <h1>
            I Build Powerful Websites That Do More Than Just <em>Look Good.</em>
          </h1>
          <p className="lead">
            I&apos;m Haseeb Ahmed, a WordPress developer with 5+ years of experience building custom websites,
            plugins, scalable solutions and high-performance digital experiences.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary">
              View My Work <span className="btn-arrow">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="reveal in" style={{ transitionDelay: ".1s" }}>
          <div className="stack-collage">
            <div className="collage-card card-perf">
              <span className="cp-label">CORE WEB VITALS</span>
              <div className="cp-row">
                <span className="cp-name">LCP</span>
                <span className="cp-val">
                  <span className="cp-dot"></span>1.2s
                </span>
              </div>
              <div className="cp-row">
                <span className="cp-name">CLS</span>
                <span className="cp-val">
                  <span className="cp-dot"></span>0.02
                </span>
              </div>
              <div className="cp-row">
                <span className="cp-name">TTFB</span>
                <span className="cp-val">
                  <span className="cp-dot"></span>180ms
                </span>
              </div>
            </div>

            <div className="collage-card card-code">
              <div className="code-top">
                <span className="dot r"></span>
                <span className="dot y"></span>
                <span className="dot g"></span>
                <span className="fname">functions.php</span>
              </div>
              <pre className="code-body">
                <code>
                  <span className="tok-kw">add_action</span>(<span className="tok-str">&apos;rest_api_init&apos;</span>,{" "}
                  <span className="tok-kw">function</span> () {"{"}
                  {"\n  "}
                  <span className="tok-fn">register_rest_route</span>(<span className="tok-str">&apos;v1&apos;</span>,{" "}
                  <span className="tok-str">&apos;/projects&apos;</span>, [{"\n    "}
                  <span className="tok-str">&apos;methods&apos;</span> =&gt; <span className="tok-str">&apos;GET&apos;</span>,
                  {"\n    "}
                  <span className="tok-str">&apos;callback&apos;</span> =&gt;{" "}
                  <span className="tok-fn">&apos;get_projects&apos;</span>,{"\n  "}]);{"\n"}
                  {"}"});
                </code>
              </pre>
            </div>

            <div className="collage-badge">&lt;/&gt;</div>

            <div className="collage-card card-stack">
              <span className="cp-label">STACK</span>
              <div className="hero-badges">
                <span className="chip">WordPress</span>
                <span className="chip">Next.js</span>
                <span className="chip">WooCommerce</span>
                <span className="chip">MySQL</span>
                <span className="chip">REST API</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
