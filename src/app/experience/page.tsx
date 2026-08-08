import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { ExperienceTimeline } from '@/components/timeline/experience-timeline';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Experience | ${profile.name}`,
  description: 'Professional experience timeline for Hasib Ullah, including verified internship history.',
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Experience"
            title="Career Timeline & Professional History"
            description="Professional experience, technical internships, and software engineering roles."
          />
        </Surface>

        <ExperienceTimeline />
      </div>
    </main>
  );
}
