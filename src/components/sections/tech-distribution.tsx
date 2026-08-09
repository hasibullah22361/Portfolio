'use client';

import { useEffect, useRef, useState } from 'react';
import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';
import { projects } from '@/data/projects';

/**
 * Technology Distribution Chart
 * Values are computed programmatically from real project data.
 * Each technology count = number of projects that list it.
 */
function computeTechData() {
  const counts: Record<string, number> = {};
  for (const project of projects) {
    for (const tech of project.technologies) {
      counts[tech] = (counts[tech] || 0) + 1;
    }
  }
  // Sort descending, take top 6
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([name, count]) => ({ name, count }));
}

// Category distribution from real project categories
function computeCategoryData() {
  const counts: Record<string, number> = {};
  for (const project of projects) {
    counts[project.category] = (counts[project.category] || 0) + 1;
  }
  return Object.entries(counts).map(([name, count]) => ({ name, count }));
}

const COLORS = [
  { fill: '#06b6d4', label: 'text-cyan-400', border: 'border-cyan-500/40', bg: 'bg-cyan-500' },
  { fill: '#8b5cf6', label: 'text-violet-400', border: 'border-violet-500/40', bg: 'bg-violet-500' },
  { fill: '#10b981', label: 'text-emerald-400', border: 'border-emerald-500/40', bg: 'bg-emerald-500' },
  { fill: '#f97316', label: 'text-orange-400', border: 'border-orange-500/40', bg: 'bg-orange-500' },
  { fill: '#3b82f6', label: 'text-blue-400', border: 'border-blue-500/40', bg: 'bg-blue-500' },
  { fill: '#ec4899', label: 'text-pink-400', border: 'border-pink-500/40', bg: 'bg-pink-500' },
];

function DonutChart({ items, animate }: { items: { name: string; count: number }[]; animate: boolean }) {
  const total = items.reduce((s, i) => s + i.count, 0);
  const cx = 80, cy = 80, r = 60, strokeWidth = 22;
  const circumference = 2 * Math.PI * r;

  let cumulativePercent = 0;
  const segments = items.map((item, idx) => {
    const pct = item.count / total;
    const offset = circumference - cumulativePercent * circumference;
    const dashArray = `${pct * circumference} ${(1 - pct) * circumference}`;
    cumulativePercent += pct;
    return { ...item, dashArray, offset, color: COLORS[idx % COLORS.length], pct };
  });

  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
      {/* SVG Donut */}
      <div className="relative shrink-0" style={{ width: 160, height: 160 }}>
        <svg width="160" height="160" role="img" aria-label="Project category distribution donut chart">
          <title>Project Category Distribution</title>
          {segments.map((seg, i) => (
            <circle
              key={seg.name}
              cx={cx}
              cy={cy}
              r={r}
              fill="none"
              stroke={seg.color.fill}
              strokeWidth={strokeWidth}
              strokeDasharray={animate ? seg.dashArray : `0 ${circumference}`}
              strokeDashoffset={seg.offset}
              strokeLinecap="butt"
              transform={`rotate(-90 ${cx} ${cy})`}
              style={{
                transition: animate ? `stroke-dasharray 1s ease ${i * 0.2}s` : 'none',
                opacity: 0.9,
              }}
            />
          ))}
          {/* Centre text */}
          <text x={cx} y={cy - 6} textAnchor="middle" fontSize="22" fontWeight="bold" fill="currentColor">
            {total}
          </text>
          <text x={cx} y={cy + 14} textAnchor="middle" fontSize="9" fill="#94a3b8">
            TECH USES
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div className="flex flex-col gap-2.5 text-sm min-w-0">
        {segments.map((seg) => (
          <div key={seg.name} className="flex items-center gap-2.5">
            <span className={`h-3 w-3 shrink-0 rounded-sm ${seg.color.bg}`} aria-hidden="true" />
            <span className="font-medium truncate" style={{ color: 'var(--body-text-color)' }}>
              {seg.name}
            </span>
            <span className={`ml-auto pl-3 font-bold tabular-nums ${seg.color.label}`}>
              ×{seg.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function TechDistributionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);
  const techData = computeTechData();
  const categoryData = computeCategoryData();

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
    <section ref={ref} aria-labelledby="tech-distribution-heading">
      <Surface>
        <SectionHeading
          eyebrow="Project Breakdown"
          title="Technology Distribution"
          description="How technologies are distributed across my projects — computed directly from real project metadata."
        />

        {/* Screen reader accessible summary */}
        <p className="sr-only">
          Technology distribution across {projects.length} projects.
          {techData.map(t => `${t.name}: used in ${t.count} project${t.count > 1 ? 's' : ''}`).join('. ')}.
          Project categories: {categoryData.map(c => `${c.name}: ${c.count}`).join(', ')}.
        </p>

        <div className="mt-8 grid gap-8 lg:grid-cols-2" aria-hidden="true">
          {/* Top tech bar chart */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--muted-text-color)' }}>
              Top Technologies Used
            </h3>
            <div className="space-y-4">
              {techData.map((tech, i) => {
                const color = COLORS[i % COLORS.length];
                const maxCount = techData[0].count;
                const widthPct = (tech.count / maxCount) * 100;
                return (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium" style={{ color: 'var(--body-text-color)' }}>
                        {tech.name}
                      </span>
                      <span className={`text-xs font-bold ${color.label}`}>
                        {tech.count} project{tech.count > 1 ? 's' : ''}
                      </span>
                    </div>
                    <div className="h-2.5 w-full rounded-full overflow-hidden" style={{ background: 'var(--surface-border)' }}>
                      <div
                        className={`h-full rounded-full ${color.bg}`}
                        style={{
                          width: animate ? `${widthPct}%` : '0%',
                          transition: animate ? `width 1s ease ${i * 0.1}s` : 'none',
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Category donut */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--muted-text-color)' }}>
              Project Categories
            </h3>
            <DonutChart items={categoryData} animate={animate} />
          </div>
        </div>

        <p className="mt-5 text-xs" style={{ color: 'var(--muted-text-color)' }}>
          Values computed automatically from {projects.length} project entries. Each count = number of projects using that technology or category.
        </p>
      </Surface>
    </section>
  );
}
