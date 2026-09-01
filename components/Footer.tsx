export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="logo">
              <span className="dot"></span>Haseeb Ahmed
            </a>
            <p>
              WordPress Developer | React | Next.js | SEO — building custom, scalable web solutions for growing
              businesses.
            </p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <a href="#top">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-col footer-services">
            <h4>Services</h4>
            <p >WordPress Development</p>
            <p >Plugin Development</p>
            <p >WooCommerce</p>
            <p>React / Next.js</p>
            <p>SEO &amp; Performance</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Haseeb Ahmed. All rights reserved.</span>
          <span>Designed as a Next.js-ready component system.</span>
        </div>
      </div>
    </footer>
  );
}
