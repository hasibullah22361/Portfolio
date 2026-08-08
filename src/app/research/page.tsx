import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { ResearchSection } from '@/components/research/research-section';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Research | ${profile.name}`,
  description: 'Research interests and publication area for Hasib Ullah.',
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Research"
            title="Research Directions & Focus Areas"
            description="Overview of research interests in Artificial Intelligence, Machine Learning, and Computer Vision."
          />
        </Surface>

        <ResearchSection />
      </div>
    </main>
  );
}
