import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section-border-top">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Technology Stack</div>
          <h2>The tools behind the work.</h2>
          <p>
            A working stack spanning WordPress core, page-builder ecosystems and the modern React/Next.js toolchain.
          </p>
        </div>
        <div className="skills-grid">
          {skills.map((s) => (
            <div className="skill-cell reveal" style={{ ["--pct" as string]: `${s.pct}%` }} key={s.name}>
              <div className="name">{s.name}</div>
              <div className="skill-bar">
                <i></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
