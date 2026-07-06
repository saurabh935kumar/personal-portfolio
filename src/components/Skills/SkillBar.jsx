import { useEffect, useRef, useState } from "react";

/**
 * A single skill row with a name and an animated progress meter.
 * The fill animates from 0 to `level` only once it scrolls into
 * view, using its own small IntersectionObserver so it works
 * independently of the parent card's reveal timing.
 */
function SkillBar({ name, level }) {
  const ref = useRef(null);
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedLevel(level);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div className="skill-bar" ref={ref}>
      <div className="skill-bar__head">
        <span className="skill-bar__name">{name}</span>
        <span className="skill-bar__level">{level}%</span>
      </div>
      <div
        className="skill-bar__track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <div className="skill-bar__fill" style={{ width: `${animatedLevel}%` }} />
      </div>
    </div>
  );
}

export default SkillBar;
