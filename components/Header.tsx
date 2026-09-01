"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site${scrolled ? " scrolled" : ""}`} id="siteHeader">
        <div className="wrap nav-inner">
          <a href="#top" className="logo">
            <span className="dot"></span>Haseeb Ahmed
          </a>
          <nav className="nav-links">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="nav-right">
            <a href="#contact" className="btn btn-primary">
              Let&apos;s Work Together
            </a>
            <button
              className="burger"
              id="burgerBtn"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`} id="mobileMenu">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </div>

      <div className={`scrim${menuOpen ? " open" : ""}`} onClick={closeMenu}></div>
    </>
  );
}
