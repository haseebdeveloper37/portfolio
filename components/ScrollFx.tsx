"use client";

import { useEffect } from "react";

/**
 * Ports the original vanilla-JS scroll behavior:
 * - fades/slides in any element with class="reveal" as it enters the viewport
 * - triggers the skill-bar fill animation on elements with class="skill-cell"
 *
 * Mount this once near the top of the page.
 */
export default function ScrollFx() {
  useEffect(() => {
    const revealIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => revealIo.observe(el));

    const skillIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          }
        });
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".skill-cell").forEach((el) => skillIo.observe(el));

    return () => {
      revealIo.disconnect();
      skillIo.disconnect();
    };
  }, []);

  return null;
}
