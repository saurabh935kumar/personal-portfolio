import { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from "react-icons/fi";
import { siteConfig } from "../../data/siteConfig";
import ScrollReveal from "../ScrollReveal/ScrollReveal";
import "./Contact.css";

const initialFormState = { name: "", email: "", message: "" };

function Contact() {
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const nextErrors = {};
    if (!formData.name.trim()) nextErrors.name = "Please enter your name.";
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) nextErrors.message = "Please add a short message.";
    return nextErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("submitting");
    // TODO: replace this simulated delay with a real submit — e.g.
    // EmailJS, Formspree, or a POST to your own backend route.
    setTimeout(() => {
      setStatus("sent");
      setFormData(initialFormState);
    }, 900);
  };

  const contactDetails = [
    { icon: <FiMail />, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <FiPhone />, label: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/\s/g, "")}` },
    { icon: <FiLinkedin />, label: "LinkedIn", href: siteConfig.socials.linkedin },
    { icon: <FiGithub />, label: "GitHub", href: siteConfig.socials.github },
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <ScrollReveal as="div" className="section-head">
          <span className="section-eyebrow">// 06 — contact</span>
          <h2 className="section-title">
            Let's <span className="accent">connect</span>
          </h2>
          <p className="section-desc">
            Have a role, project, or just want to talk tech? My inbox is open.
          </p>
        </ScrollReveal>

        <div className="contact__grid">
          <ScrollReveal className="glass-card contact__form-card">
            <form className="contact__form" onSubmit={handleSubmit} noValidate>
              <div className="contact__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span className="contact__error" id="name-error">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span className="contact__error" id="email-error">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="contact__field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me a bit about the opportunity or what's on your mind..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span className="contact__error" id="message-error">
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === "submitting"}
              >
                {status === "sent" ? (
                  <>
                    <FiCheckCircle /> Message sent
                  </>
                ) : status === "submitting" ? (
                  "Sending..."
                ) : (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>

              {status === "sent" && (
                <p className="contact__success-note" role="status">
                  Thanks for reaching out — I'll get back to you soon.
                </p>
              )}
            </form>
          </ScrollReveal>

          <ScrollReveal delay={120} className="contact__info-col">
            <div className="glass-card contact__info-card">
              <h3>Direct contact</h3>
              <ul className="contact__list">
                {contactDetails.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <span className="contact__list-icon">{item.icon}</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card contact__info-card contact__location-card">
              <h3>Based in</h3>
              <p>{siteConfig.location}</p>
              <p className="contact__availability">
                {siteConfig.availableForWork
                  ? "Available for internships and entry-level roles."
                  : "Currently not open to new opportunities."}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Contact;
