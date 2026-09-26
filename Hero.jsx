export default function Hero() {
  return (
    <section
      style={styles.hero}
      aria-labelledby="hero-heading"
    >
      <div style={styles.inner}>
        <p style={styles.eyebrow}>Portfolio</p>
        <h1 id="hero-heading" style={styles.heading}>
          Alex Rivera
        </h1>
        <p style={styles.subheading}>
          Product designer and front-end developer crafting thoughtful,
          accessible digital experiences.
        </p>
        <div style={styles.actions}>
          <a href="#projects" style={styles.primaryButton}>
            View Projects
          </a>
          <a href="#about" style={styles.secondaryButton}>
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

const styles = {
  hero: {
    padding: "6rem 1.5rem 5rem",
    backgroundColor: "#fafafa",
  },
  inner: {
    maxWidth: "720px",
    margin: "0 auto",
  },
  eyebrow: {
    textTransform: "uppercase",
    letterSpacing: "0.15em",
    fontSize: "0.8rem",
    color: "#666",
    margin: "0 0 1rem",
  },
  heading: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 800,
    lineHeight: 1.1,
    margin: "0 0 1.25rem",
    color: "#111",
  },
  subheading: {
    fontSize: "1.15rem",
    color: "#444",
    margin: "0 0 2rem",
    maxWidth: "560px",
  },
  actions: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  primaryButton: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    backgroundColor: "#111",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "0.95rem",
  },
  secondaryButton: {
    display: "inline-block",
    padding: "0.75rem 1.5rem",
    backgroundColor: "transparent",
    color: "#111",
    textDecoration: "none",
    borderRadius: "6px",
    fontWeight: 600,
    fontSize: "0.95rem",
    border: "1px solid #ccc",
  },
};
