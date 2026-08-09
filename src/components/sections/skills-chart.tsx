'use client';

import { useEffect, useRef, useState } from 'react';
import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';

/**
 * Self-assessed technical focus indicators.
 * These values reflect relative focus/interest, NOT certified proficiency levels.
 * They are derived from the proportion of time, projects, and study in each area.
 */
const focusAreas = [
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    value: 88,
    color: 'from-violet-500 to-purple-600',
    bg: 'bg-gradient-to-r from-violet-500 to-purple-600',
    textColor: 'text-violet-400',
  },
  {
    id: 'computer-vision',
    label: 'Computer Vision',
    value: 82,
    color: 'from-cyan-500 to-blue-600',
    bg: 'bg-gradient-to-r from-cyan-500 to-blue-600',
    textColor: 'text-cyan-400',
  },
  {
    id: 'data-science',
    label: 'Data Science',
    value: 78,
    color: 'from-emerald-500 to-teal-600',
    bg: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    textColor: 'text-emerald-400',
  },
  {
    id: 'web-dev',
    label: 'Web Development',
    value: 70,
    color: 'from-blue-500 to-indigo-600',
    bg: 'bg-gradient-to-r from-blue-500 to-indigo-600',
    textColor: 'text-blue-400',
  },
  {
    id: 'mobile',
    label: 'Mobile Development',
    value: 60,
    color: 'from-orange-500 to-amber-600',
    bg: 'bg-gradient-to-r from-orange-500 to-amber-600',
    textColor: 'text-orange-400',
  },
];

function BarRow({ area, animate }: { area: typeof focusAreas[0]; animate: boolean }) {
  return (
    <div role="presentation">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: 'var(--body-text-color)' }}>
          {area.label}
        </span>
        <span className={`text-sm font-bold tabular-nums ${area.textColor}`}>
          {area.value}
          <span className="text-xs font-normal opacity-70">/100</span>
        </span>
      </div>
      <div
        className="h-3 w-full rounded-full overflow-hidden"
        style={{ background: 'var(--surface-border)' }}
        aria-hidden="true"
      >
        <div
          className={`h-full rounded-full ${area.bg} transition-all ease-out`}
          style={{
            width: animate ? `${area.value}%` : '0%',
            transitionDuration: '1.2s',
            transitionDelay: animate ? '0.2s' : '0s',
            boxShadow: animate ? `0 0 12px rgba(var(--accent), 0.3)` : 'none',
          }}
        />
      </div>
    </div>
  );
}

export function SkillsChartSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !animate) setAnimate(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animate]);

  return (
    <section ref={ref} aria-labelledby="skills-chart-heading">
      <Surface>
        <SectionHeading
          eyebrow="Skill Focus Areas"
          title="Technical Focus"
          description="Self-assessed relative focus across technical domains — derived from projects built, certifications earned, and study time invested. Not official performance measurements."
        />

        {/* Accessible text alternative */}
        <p className="sr-only">
          Technical focus areas: AI & Machine Learning (88/100), Computer Vision (82/100),
          Data Science (78/100), Web Development (70/100), Mobile Development (60/100).
          These are self-assessed focus indicators based on relative time and project investment.
        </p>

        <div className="mt-8 space-y-6" aria-hidden="true">
          {focusAreas.map((area) => (
            <BarRow key={area.id} area={area} animate={animate} />
          ))}
        </div>

        <p className="mt-6 text-xs italic" style={{ color: 'var(--muted-text-color)' }}>
          ⚠️ These values are self-assessed focus indicators, not certified proficiency measurements or benchmarks.
        </p>
      </Surface>
    </section>
  );
}
