import { educationTimeline } from "../../data/educationData";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Education.css";

function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 04 — education</span>
          <h2 className="section-title">
            Academic <span className="accent">journey</span>
          </h2>
          <p className="section-desc">
            From secondary school to my current degree — the milestones that shaped my technical
            foundation.
          </p>
        </ScrollReveal>

        <div className="timeline">
          {educationTimeline.map((item, index) => (
            <ScrollReveal
              key={item.id}
              delay={index * 110}
              className="timeline__item"
            >
              <div className="timeline__marker">
                <span className="timeline__dot" />
              </div>
              <div className="glass-card timeline__card">
                <div className="timeline__card-head">
                  <h3 className="timeline__degree">{item.degree}</h3>
                  <span className="tag timeline__duration">{item.duration}</span>
                </div>
                <p className="timeline__institution">{item.institution}</p>
                <p className="timeline__score">{item.score}</p>
                <p className="timeline__description">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
