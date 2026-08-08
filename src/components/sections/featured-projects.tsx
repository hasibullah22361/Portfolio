import { Button } from '@/components/ui/button';
import { ProjectGrid } from '@/components/projects/project-grid';
import { projects } from '@/data/projects';

export function FeaturedProjectsSection() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section className="space-y-6">
      <ProjectGrid projects={featuredProjects} />

      <div className="flex justify-center">
        <Button href="/projects" variant="secondary">
          View all projects
        </Button>
      </div>
    </section>
  );
}
