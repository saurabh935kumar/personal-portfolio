// ============================================================
// SKILLS DATA — add, remove, or re-level any skill here.
// `level` is a percentage (0-100) used for the progress meter.
// ============================================================

export const skillCategories = [
  {
    id: "frontend",
    label: "Frontend",
    comment: "what the user sees",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "React", level: 85 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    comment: "what makes it run",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    id: "database",
    label: "Database",
    comment: "where it's stored",
    skills: [
      { name: "MongoDB", level: 82 },
      { name: "MySQL", level: 75 },
    ],
  },
  {
    id: "tools",
    label: "Tools",
    comment: "how it gets built",
    skills: [
      { name: "Git", level: 88 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];
