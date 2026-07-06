import { siteConfig } from "../../data/siteConfig";
import ParticleBackground from "../ParticleBackground/ParticleBackground";
import "./Hero.css";

function Hero() {
  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <ParticleBackground />
      <div className="hero__glow hero__glow--blue" aria-hidden="true" />
      <div className="hero__glow hero__glow--violet" aria-hidden="true" />

      <div className="container hero__container">
        <div className="hero__content">
          {siteConfig.availableForWork && (
            <div className="hero__badge">
              <span className="hero__badge-dot" />
              Open to internships &amp; full-time roles
            </div>
          )}

          <h1 className="hero__heading">
            Hi, I'm <span className="hero__name">{siteConfig.name}</span>
          </h1>

          <p className="hero__subtitle">{siteConfig.profession}</p>

          <p className="hero__description">{siteConfig.tagline}</p>

          <div className="hero__actions">
            <a href="/skresume.pdf" download className="btn btn-primary">
              Download Resume
            </a>
           
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__frame">
            <div className="hero__frame-bar">
              <span className="hero__frame-dot" />
              <span className="hero__frame-dot" />
              <span className="hero__frame-dot" />
              <span className="hero__frame-label">profile.jsx</span>
            </div>
            <div className="hero__image-wrap">
              {siteConfig.profileImage ? (
                
<img
  src={siteConfig.profileImage}
  alt={siteConfig.name}
/>
              ) : (
                <div
                  className="hero__image-placeholder"
                  role="img"
                  aria-label={`${siteConfig.name} profile photo placeholder`}
                >
                  {siteConfig.initials}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-cue" aria-hidden="true">
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}

export default Hero;
