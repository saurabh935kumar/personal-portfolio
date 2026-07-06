import { useState } from "react";
import { navLinks, siteConfig } from "../../data/siteConfig";
import { useActiveSection, useScrolled } from "../../hooks";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const scrolled = useScrolled(20);
  const activeId = useActiveSection(navLinks.map((link) => link.id));

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <nav className="navbar__inner container">
        <a
          href="#home"
          className="navbar__logo"
          onClick={(e) => handleNavClick(e, "home")}
          aria-label={`${siteConfig.name} — home`}
        >
          <span className="navbar__logo-mark">{siteConfig.initials}</span>
        </a>

        <ul className={`navbar__links ${isOpen ? "navbar__links--open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`navbar__link ${activeId === link.id ? "navbar__link--active" : ""}`}
                onClick={(e) => handleNavClick(e, link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`navbar__toggle ${isOpen ? "navbar__toggle--open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
