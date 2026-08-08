import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { SkillsBrowser } from '@/components/skills/skills-browser';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Skills | ${profile.name}`,
  description: 'Structured AI, data science, computer vision, and development skills for Hasib Ullah.',
};

export default function SkillsPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Skills"
            title="Core Technical Capabilities & Methodologies"
            description="Comprehensive catalog of skills across AI, Machine Learning, Computer Vision, Data Science, and Application Development."
          />
        </Surface>

        <SkillsBrowser />
      </div>
    </main>
  );
}