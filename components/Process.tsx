import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section className="section-border-top">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">How I Work</div>
          <h2>A six-step process, in the same order every time.</h2>
        </div>
        <div className="process-grid">
          {processSteps.map((step, i) => (
            <div
              className="process-card reveal"
              style={i % 3 !== 0 ? { transitionDelay: `${(i % 3) * 0.05}s` } : undefined}
              key={step.num}
            >
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
