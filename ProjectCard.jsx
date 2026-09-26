export default function ProjectCard({ project }) {
  return (
    <article style={styles.card}>
      <div
        style={{
          ...styles.thumb,
          backgroundColor: project.accent,
        }}
        role="img"
        aria-label={project.title + " preview"}
      >
        <span style={styles.thumbInitial}>
          {project.title.charAt(0)}
        </span>
      </div>
      <div style={styles.body}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.description}>{project.description}</p>
        <ul style={styles.tags} aria-label={project.title + " tags"}>
          {project.tags.map((tag) => (
            <li key={tag} style={styles.tag}>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

const styles = {
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    border: "1px solid #eee",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.15s ease, box-shadow 0.15s ease",
  },
  thumb: {
    height: "140px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  thumbInitial: {
    fontSize: "3rem",
    fontWeight: 800,
    color: "rgba(255,255,255,0.85)",
  },
  body: {
    padding: "1.25rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.6rem",
    flex: 1,
  },
  title: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#111",
  },
  description: {
    margin: 0,
    color: "#555",
    fontSize: "0.95rem",
    flex: 1,
  },
  tags: {
    listStyle: "none",
    padding: 0,
    margin: "0.5rem 0 0",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.4rem",
  },
  tag: {
    fontSize: "0.75rem",
    color: "#666",
    backgroundColor: "#f2f2f2",
    padding: "0.2rem 0.6rem",
    borderRadius: "999px",
  },
};
