export default function Footer() {
  const links = [
    { label: "GitHub", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Email", href: "mailto:hello@example.com" },
  ];

  return (
    <footer id="contact" style={styles.footer}>
      <div style={styles.inner}>
        <p style={styles.tagline}>
          Let's build something thoughtful together.
        </p>
        <ul style={styles.links} aria-label="Social links">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} style={styles.link}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Alex Rivera. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111",
    color: "#e5e5e5",
    padding: "3rem 1.5rem",
  },
  inner: {
    maxWidth: "1080px",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
    textAlign: "center",
  },
  tagline: {
    margin: 0,
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "#fff",
  },
  links: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "1.5rem",
  },
  link: {
    color: "#ccc",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  copyright: {
    margin: "0.5rem 0 0",
    fontSize: "0.85rem",
    color: "#888",
  },
};
