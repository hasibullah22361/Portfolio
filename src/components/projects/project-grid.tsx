import { ProjectCard } from '@/components/projects/project-card';
import type { Project } from '@/types/project';

type ProjectGridProps = {
  projects: Project[];
};

export function ProjectGrid({ projects }: ProjectGridProps) {
  if (projects.length === 0) {
    return (
      <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 text-sm text-slate-400">
        No projects match the selected filters.
      </div>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}