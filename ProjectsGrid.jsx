import ProjectCard from "./ProjectCard.jsx";

const projects = [
  {
    id: "aurora",
    title: "Aurora Dashboard",
    description:
      "A real-time analytics dashboard with customizable widgets and dark mode.",
    tags: ["React", "D3.js", "WebSockets"],
    accent: "#4f46e5",
  },
  {
    id: "fieldnotes",
    title: "Fieldnotes",
    description:
      "A minimal journaling app focused on distraction-free writing and offline sync.",
    tags: ["TypeScript", "PWA", "IndexedDB"],
    accent: "#059669",
  },
  {
    id: "palette",
    title: "Palette Studio",
    description:
      "A color tool for designers to generate accessible palettes from a single seed.",
    tags: ["React", "Canvas", "A11y"],
    accent: "#db2777",
  },
  {
    id: "trailhead",
    title: "Trailhead",
    description:
      "A hiking companion with offline maps, elevation profiles, and route sharing.",
    tags: ["React Native", "Mapbox", "SQLite"],
    accent: "#d97706",
  },
  {
    id: "ledger",
    title: "Ledger",
    description:
      "A personal finance tracker with budgeting insights and CSV import.",
    tags: ["Node.js", "Postgres", "React"],
    accent: "#0891b2",
  },
  {
    id: "echo",
    title: "Echo",
    description:
      "A collaborative audio sketchpad for musicians to jam in real time.",
    tags: ["Web Audio", "WebRTC", "React"],
    accent: "#7c3aed",
  },
];

export default function ProjectsGrid() {
  return (
    <section
      id="projects"
      style={styles.section}
      aria-labelledby="projects-heading"
    >
      <div style={styles.inner}>
        <h2 id="projects-heading" style={styles.heading}>
          Projects
        </h2>
        <p style={styles.intro}>
          A selection of recent work spanning web apps, tools, and experiments.
        </p>
        <div style={styles.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 1.5rem",
    backgroundColor: "#fafafa",
    borderTop: "1px solid #eee",
  },
  inner: {
    maxWidth: "1080px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 700,
    margin: "0 0 0.75rem",
    color: "#111",
  },
  intro: {
    color: "#555",
    margin: "0 0 2.5rem",
    maxWidth: "560px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: "1.5rem",
  },
};
