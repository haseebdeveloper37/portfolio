"use client";

import { useState } from "react";
import Image from "next/image";
import { projects, projectFilters } from "@/lib/data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section id="projects" className="section-border-top">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Featured Projects</div>
          <h2>Recent builds across WordPress, WooCommerce and React.</h2>
          <p>
            A selection of custom sites, stores and applications — filter by the technology or focus that&apos;s
            relevant to you.
          </p>
        </div>
        <div className="filter-row reveal">
          {projectFilters.map((f) => (
            <button
              key={f.value}
              className={`filter-btn${activeFilter === f.value ? " active" : ""}`}
              data-filter={f.value}
              onClick={() => setActiveFilter(f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="projects-grid reveal">
          {projects.map((p) => {
            const match = activeFilter === "all" || p.category.includes(activeFilter);
            return (
              <div
                key={p.slug}
                className={`project-card${match ? " show" : ""}`}
                data-cat={p.category}
              >
                <div className="project-thumb">
                  {/* Placeholder image — replace `image` in lib/data.ts with your real screenshot later */}
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    sizes="(max-width: 800px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="grid-overlay"></div>
                </div>
                <div className="project-body">
                  {/* <div className="project-cat">{p.categoryLabel}</div> */}
                  <h3>{p.title}</h3>
                  <p className="desc">{p.desc}</p>
                  <div className="project-tech">
                    {p.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <a href={p.href} target="_blank" className="project-view">
                    View project →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
