'use client';

import { useEffect, useRef, useState } from 'react';
import { Surface } from '@/components/ui/surface';

const stats = [
  {
    id: 'experience',
    value: 1,
    suffix: '+',
    label: 'Year Learning & Building',
    description: 'Focused on AI, ML, Computer Vision & Data Science',
    color: 'text-violet-400',
    border: 'border-violet-500/30',
  },
  {
    id: 'projects',
    value: 5,
    suffix: '+',
    label: 'Projects Completed',
    description: 'Spanning AI, computer vision, mobile, and web',
    color: 'text-cyan-400',
    border: 'border-cyan-500/30',
  },
  {
    id: 'ai-projects',
    value: 3,
    suffix: '+',
    label: 'AI & ML Projects',
    description: 'Real-world intelligent systems with Python & YOLO',
    color: 'text-emerald-400',
    border: 'border-emerald-500/30',
  },
  {
    id: 'certifications',
    value: 5,
    suffix: '+',
    label: 'Certifications Earned',
    description: 'IBM SkillsBuild, novaXccelerate, ACT Programs',
    color: 'text-orange-400',
    border: 'border-orange-500/30',
  },
];

function useCountUp(target: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(target);
      return;
    }
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, trigger]);

  return count;
}

function StatCard({ stat, trigger, index }: { stat: typeof stats[0]; trigger: boolean; index: number }) {
  const count = useCountUp(stat.value, 1200 + index * 150, trigger);

  return (
    <div className={`glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center text-center border ${stat.border} transition-all duration-300 hover:-translate-y-1`}>
      <div className={`text-5xl sm:text-6xl font-extrabold tabular-nums tracking-tight ${stat.color}`} aria-label={`${stat.value}${stat.suffix} ${stat.label}`}>
        {count}{stat.suffix}
      </div>
      <div className="mt-3 text-sm font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--heading-color)' }}>
        {stat.label}
      </div>
      <p className="mt-2 text-xs leading-relaxed" style={{ color: 'var(--muted-text-color)' }}>
        {stat.description}
      </p>
    </div>
  );
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !triggered) setTriggered(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [triggered]);

  return (
    <section ref={ref} aria-label="Statistics summary">
      <Surface>
        <div className="mb-6 text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
            By the numbers
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} trigger={triggered} index={i} />
          ))}
        </div>
        <p className="mt-6 text-center text-xs" style={{ color: 'var(--muted-text-color)' }}>
          Values represent completed work, earned credentials, and active development experience.
        </p>
      </Surface>
    </section>
  );
}
