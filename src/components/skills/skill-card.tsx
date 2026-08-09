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
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/80 text-cyan-400 group-hover:border-cyan-500/50 group-hover:text-cyan-300 group-hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all">
            {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span className="text-xs font-bold">SK</span>}
          </div>
          <div>
            <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{skill.name}</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400 font-medium">{skill.category}</p>
          </div>
        </div>

        {skill.featured ? (
          <span className="rounded-full border border-cyan-500/40 bg-cyan-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]">
            Featured
          </span>
        ) : null}
      </div>

      {skill.description ? <p className="mt-4 text-sm leading-relaxed text-slate-300">{skill.description}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
        {skill.level ? <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 font-medium">{skill.level}</span> : null}
        {skill.years ? <span className="rounded-full border border-slate-700/80 bg-slate-900/60 px-3 py-1 font-medium text-slate-400">{skill.years}</span> : null}
      </div>
    </article>
  );
}