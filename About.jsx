export default function About() {
  const skills = [
    "React",
    "TypeScript",
    "Node.js",
    "Figma",
    "Accessibility",
    "CSS",
  ];

  return (
    <section id="about" style={styles.section} aria-labelledby="about-heading">
      <div style={styles.inner}>
        <h2 id="about-heading" style={styles.heading}>
          About
        </h2>
        <div style={styles.grid}>
          <p style={styles.paragraph}>
            I'm a designer-developer hybrid with a passion for building
            products that feel effortless to use. Over the past six years I've
            worked with startups and studios to ship interfaces that balance
            beauty with function.
          </p>
          <p style={styles.paragraph}>
            When I'm not coding, you'll find me sketching, hiking, or
            experimenting with generative art. I believe great design is a
            conversation between craft and empathy.
          </p>
        </div>
        <ul style={styles.skillsList} aria-label="Skills">
          {skills.map((skill) => (
            <li key={skill} style={styles.skillChip}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: "5rem 1.5rem",
    backgroundColor: "#fff",
    borderTop: "1px solid #eee",
  },
  inner: {
    maxWidth: "820px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    fontWeight: 700,
    margin: "0 0 1.5rem",
    color: "#111",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
    marginBottom: "2rem",
  },
  paragraph: {
    color: "#444",
    fontSize: "1rem",
    margin: 0,
  },
  skillsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  skillChip: {
    padding: "0.4rem 0.9rem",
    backgroundColor: "#f2f2f2",
    borderRadius: "999px",
    fontSize: "0.85rem",
    color: "#333",
    fontWeight: 500,
  },
};
