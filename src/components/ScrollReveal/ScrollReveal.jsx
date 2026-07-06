import { useEffect, useRef, useState } from "react";

/**
 * Wraps children and adds a `.reveal` / `.is-visible` class pair
 * driven by IntersectionObserver, so any element fades/slides in
 * the first time it enters the viewport. Reusable across all
 * sections instead of re-implementing observer logic per-section.
 */
function ScrollReveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export default ScrollReveal;
