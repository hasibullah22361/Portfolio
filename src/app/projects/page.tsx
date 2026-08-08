import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { ProjectsBrowser } from '@/components/projects/projects-browser';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Projects | ${profile.name}`,
  description: 'Featured AI, data science, computer vision, web, and mobile projects by Hasib Ullah.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Work"
            title="Projects built around practical AI, computer vision, and software systems"
            description="Explore selected projects, intelligent systems, and interactive case study breakdowns."
          />
        </Surface>

        <ProjectsBrowser />
      </div>
    </main>
  );
}