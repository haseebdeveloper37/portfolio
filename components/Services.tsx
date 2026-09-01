import { services } from "@/lib/data";
import ServiceIcon from "./ServiceIcon";

export default function Services() {
  return (
    <section id="services" className="section-border-top">
      <div className="wrap">
        <div className="section-head reveal">
          <div className="eyebrow">Services</div>
          <h2>Work built to be fast, findable and easy to grow.</h2>
          <p>
            From a single custom plugin to a full React/Next.js rebuild — every engagement is scoped around clean
            architecture and measurable outcomes.
          </p>
        </div>
        <div className="services-grid reveal">
          {services.map((s) => (
            <div className="service-card" key={s.title}>
              <div className="service-icon">
                <ServiceIcon name={s.icon} />
              </div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              {/* <p className="service-link">
                Learn more <span className="a">→</span>
              </a> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
