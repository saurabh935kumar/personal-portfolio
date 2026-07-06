import { FiGithub, FiLinkedin, FiTwitter, FiInstagram, FiArrowUp } from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: <FiGithub />, href: siteConfig.socials.github, label: "GitHub" },
    { icon: <FiLinkedin />, href: siteConfig.socials.linkedin, label: "LinkedIn" },
    
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">{siteConfig.initials}</span>
          <p className="footer__tagline">
            Built with React &amp; a lot of coffee.
          </p>
        </div>

        <div className="footer__socials">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="footer__social-link"
            >
              {social.icon}
            </a>
          ))}
        </div>

        <button className="footer__top-btn" onClick={scrollToTop} aria-label="Back to top">
          <FiArrowUp />
        </button>
      </div>

      <div className="footer__bottom">
        <p>
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
