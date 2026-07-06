import { siteConfig } from "../../data/siteConfig";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./About.css";

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 01 — about</span>
          <h2 className="section-title">
            Get to know <span className="accent">me</span>
          </h2>
          <p className="section-desc">
            A quick look at who I am, what I'm working toward, and the path that
            got me here.
          </p>
        </ScrollReveal>

        <div className="about__grid">
          <ScrollReveal className="about__bio-col" delay={0}>
            <div className="glass-card about__card about__card--bio">
              <h3 className="about__card-title">Who I am</h3>
              <p>{siteConfig.shortBio}</p>
            </div>

            <div className="glass-card about__card about__card--objective">
              <h3 className="about__card-title">Career objective</h3>
              <p>{siteConfig.careerObjective}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal className="about__side-col" delay={120}>
            <div className="glass-card about__card about__card--edu">
              <h3 className="about__card-title">Education summary</h3>
              <p>
                Currently pursuing a <strong>B.Tech in Computer Science</strong>
                , building a strong foundation in software engineering, data
                structures, and AI fundamentals alongside practical,
                project-based learning.
              </p>
            </div>

            <div className="glass-card about__card about__card--interests">
              <h3 className="about__card-title">Interests</h3>
              <ul className="about__interests">
                {siteConfig.interests.map((interest) => (
                  <li key={interest} className="tag">
                    {interest}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default About;
