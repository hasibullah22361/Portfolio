import {
  BrainCircuit,
  Camera,
  ChartColumn,
  Code2,
  Flame,
  GitBranch,
  Image,
  Layers3,
  LocateFixed,
  Network,
  Package,
  ScanEye,
  ScanSearch,
  Sigma,
  Smartphone,
  Sparkles,
  Table2,
} from 'lucide-react';
import type { Skill } from '@/types/skill';

const iconMap = {
  BrainCircuit,
  Sparkles,
  Network,
  ScanSearch,
  Code2,
  Sigma,
  Table2,
  ChartColumn,
  Camera,
  ScanEye,
  LocateFixed,
  Image,
  GitBranch,
  Layers3,
  Smartphone,
  Flame,
  Package,
  Container: Package,
} as const;

type SkillCardProps = {
  skill: Skill;
};

export function SkillCard({ skill }: SkillCardProps) {
  const Icon = skill.icon ? iconMap[skill.icon as keyof typeof iconMap] : undefined;

  return (
    <article className="glass-card-interactive group rounded-2xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all"
            style={{
              borderColor: 'var(--surface-border)',
              background: 'var(--body-bg)',
            }}
          >
            {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span className="text-xs font-bold">SK</span>}
          </div>
          <div>
            <h3 className="text-base font-bold transition-colors group-hover:text-cyan-400" style={{ color: 'var(--heading-color)' }}>
              {skill.name}
            </h3>
            <p className="text-xs uppercase tracking-[0.2em] font-medium" style={{ color: 'var(--muted-text-color)' }}>
              {skill.category}
            </p>
          </div>
        </div>

        {skill.featured ? (
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            Featured
          </span>
        ) : null}
      </div>

      {skill.description ? (
        <p className="mt-4 text-sm leading-relaxed" style={{ color: 'var(--body-text-color)' }}>
          {skill.description}
        </p>
      ) : null}

      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        {skill.level ? (
          <span
            className="rounded-full border px-3 py-1 font-medium"
            style={{
              borderColor: 'var(--surface-border)',
              background: 'var(--surface-bg)',
              color: 'var(--body-text-color)',
            }}
          >
            {skill.level}
          </span>
        ) : null}
        {skill.years ? (
          <span
            className="rounded-full border px-3 py-1 font-medium"
            style={{
              borderColor: 'var(--surface-border)',
              background: 'var(--surface-bg)',
              color: 'var(--muted-text-color)',
            }}
          >
            {skill.years}
          </span>
        ) : null}
      </div>
    </article>
  );
}