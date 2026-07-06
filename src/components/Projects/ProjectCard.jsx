import { FiGithub, FiExternalLink } from "react-icons/fi";

const ACCENT_LABELS = {
  blue: "var(--accent-blue)",
  purple: "var(--accent-violet)",
  teal: "var(--accent-mint)",
};

/**
 * A single project card: visual header, title, description,
 * tech-stack tags, and GitHub / Live Demo actions.
 */
function ProjectCard({ project }) {
  const accentColor = ACCENT_LABELS[project.accent] || ACCENT_LABELS.blue;

  return (
    <article className="glass-card project-card">
      <div
        className="project-card__media"
        style={{ "--accent-color": accentColor }}
      >
        {project.image ? (
          <img src={project.image} alt={`${project.title} preview`} />
        ) : (
          <div className="project-card__media-placeholder">
            <span className="project-card__media-glyph">{project.title.charAt(0)}</span>
          </div>
        )}
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__desc">{project.description}</p>

        <div className="project-card__stack">
          {project.stack.map((tech) => (
            <span key={tech} className="tag">
              {tech}
            </span>
          ))}
        </div>

        <div className="project-card__actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FiGithub aria-hidden="true" /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FiExternalLink aria-hidden="true" /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
