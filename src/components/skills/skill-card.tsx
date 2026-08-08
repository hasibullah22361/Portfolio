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
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 transition-transform duration-200 hover:-translate-y-0.5 hover:border-slate-700">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-800 bg-slate-950 text-accent">
            {Icon ? <Icon className="h-5 w-5" aria-hidden="true" /> : <span className="text-xs font-semibold">SK</span>}
          </div>
          <div>
            <h3 className="text-base font-semibold text-white">{skill.name}</h3>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-500">{skill.category}</p>
          </div>
        </div>

        {skill.featured ? (
          <span className="rounded-full border border-blue-500/40 bg-blue-500/10 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-blue-200">
            Featured
          </span>
        ) : null}
      </div>

      {skill.description ? <p className="mt-4 text-sm leading-7 text-slate-400">{skill.description}</p> : null}

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400">
        {skill.level ? <span className="rounded-full border border-slate-700 px-2.5 py-1">{skill.level}</span> : null}
        {skill.years ? <span className="rounded-full border border-slate-700 px-2.5 py-1">{skill.years}</span> : null}
      </div>
    </article>
  );
}