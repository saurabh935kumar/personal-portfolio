import { skillCategories } from "../../data/skillsData";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import SkillBar from "./SkillBar";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 02 — skills</span>
          <h2 className="section-title">
            What I <span className="accent">work with</span>
          </h2>
          <p className="section-desc">
            A snapshot of the languages, frameworks, and tools I use to take a project from idea
            to deployed product.
          </p>
        </ScrollReveal>

        <div className="skills__grid">
          {skillCategories.map((category, index) => (
            <ScrollReveal
              key={category.id}
              delay={index * 90}
              className="glass-card skills__card"
            >
              <div className="skills__card-head">
                <h3 className="skills__card-title">{category.label}</h3>
                <span className="skills__card-comment">// {category.comment}</span>
              </div>
              <div className="skills__bars">
                {category.skills.map((skill) => (
                  <SkillBar key={skill.name} name={skill.name} level={skill.level} />
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
