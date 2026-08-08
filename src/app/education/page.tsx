import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { EducationTimeline } from '@/components/timeline/education-timeline';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Education | ${profile.name}`,
  description: 'Education timeline for Hasib Ullah, including BS Computer Science and future academic structure.',
};

export default function EducationPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Education"
            title="Academic Background & Academic Timeline"
            description="Overview of degree studies, academic coursework, and educational milestones."
          />
        </Surface>

        <EducationTimeline />
      </div>
    </main>
  );
}
