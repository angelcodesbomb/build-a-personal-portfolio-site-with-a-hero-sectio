import { useState } from "react";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import ProjectsGrid from "./ProjectsGrid.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <nav style={styles.nav} aria-label="Primary navigation">
          <a href="#top" style={styles.logo} aria-label="Home">
            Alex Rivera
          </a>
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            style={styles.menuButton}
          >
            <span style={styles.menuBar} />
            <span style={styles.menuBar} />
            <span style={styles.menuBar} />
          </button>
          <ul
            style={{
              ...styles.navList,
              display: menuOpen ? "flex" : "none",
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} style={styles.navLink} onClick={handleNavClick}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        <Hero />
        <About />
        <ProjectsGrid />
      </main>

      <Footer />
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#fafafa",
    color: "#1a1a1a",
    fontFamily:
      "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    lineHeight: 1.6,
  },
  header: {
    position: "sticky",
    top: 0,
    zIndex: 10,
    backgroundColor: "rgba(250, 250, 250, 0.95)",
    borderBottom: "1px solid #e5e5e5",
    backdropFilter: "blur(8px)",
  },
  nav: {
    maxWidth: "1080px",
    margin: "0 auto",
    padding: "1rem 1.5rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    fontWeight: 700,
    fontSize: "1.1rem",
    color: "#1a1a1a",
    textDecoration: "none",
  },
  menuButton: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    background: "none",
    border: "none",
    cursor: "pointer",
    padding: "8px",
  },
  menuBar: {
    display: "block",
    width: "22px",
    height: "2px",
    backgroundColor: "#1a1a1a",
  },
  navList: {
    listStyle: "none",
    margin: 0,
    padding: 0,
    gap: "1.5rem",
    flexDirection: "row",
  },
  navLink: {
    color: "#444",
    textDecoration: "none",
    fontSize: "0.95rem",
    fontWeight: 500,
  },
};
