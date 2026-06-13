"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    value: 4,
    suffix: "",
    prefix: "",
    label: "bedrooms per villa",
  },
  {
    value: 8,
    suffix: "",
    prefix: "",
    label: "guests per villa",
  },
  {
    value: 2,
    suffix: "",
    prefix: "",
    label: "private pools",
  },
  {
    value: 0,
    suffix: "",
    prefix: "Zero",
    label: "steps to the beach",
  },
];

export default function CountUpStats() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [values, setValues] = useState(stats.map(() => 0));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 1200;
    const startTime = performance.now();
    let animationFrame: number;

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValues(stats.map((stat) => Math.round(stat.value * easedProgress)));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted]);

  return (
    <section
      ref={sectionRef}
      className="stats-section"
      aria-label="Villa highlights"
    >
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={stat.label}>
            <strong className="stat-number">
              {stat.prefix || values[index]}
              {stat.suffix}
            </strong>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}