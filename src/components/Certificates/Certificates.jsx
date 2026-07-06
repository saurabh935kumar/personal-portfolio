import { FiAward, FiArrowUpRight } from "react-icons/fi";
import { certificates } from "../../data/certificatesData";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Certificates.css";

function Certificates() {
  return (
    <section id="certificates" className="section certificates">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 05 — certificates</span>
          <h2 className="section-title">
            Verified <span className="accent">learning</span>
          </h2>
          <p className="section-desc">
            Courses and certifications I've completed to keep my skills current and credible.
          </p>
        </ScrollReveal>

        <div className="certificates__grid">
          {certificates.map((cert, index) => (
            <ScrollReveal
              key={cert.id}
              delay={(index % 3) * 90}
              className="glass-card certificate-card"
            >
              <div className="certificate-card__icon">
                <FiAward aria-hidden="true" />
              </div>
              <div className="certificate-card__body">
                <h3 className="certificate-card__title">{cert.title}</h3>
                <p className="certificate-card__issuer">{cert.issuer}</p>
                <span className="certificate-card__date">{cert.date}</span>
              </div>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-card__link"
                aria-label={`View credential: ${cert.title}`}
              >
                <FiArrowUpRight />
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Certificates;
