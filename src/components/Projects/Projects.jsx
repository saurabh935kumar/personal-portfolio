import { projects } from "../../data/projectsData";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import ProjectCard from "./ProjectCard";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 03 — projects</span>
          <h2 className="section-title">
            Things I've <span className="accent">built</span>
          </h2>
          <p className="section-desc">
            A selection of projects spanning AI, full-stack web apps, and developer tools —
            each one shipped, documented, and open for review.
          </p>
        </ScrollReveal>

        <div className="projects__grid">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={(index % 3) * 100}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
