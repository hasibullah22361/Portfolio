import type { Metadata } from 'next';
import { AboutSection } from '@/components/sections/about';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: profile.longBio,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="About"
            title="Professional background and technical direction"
            description="Detailed overview of academic foundation, artificial intelligence focus, and engineering background."
          />
        </Surface>

        <AboutSection />
      </div>
    </main>
  );
}