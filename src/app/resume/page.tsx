import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { ResumeViewer } from '@/components/resume/resume-viewer';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Resume & CV | ${profile.name}`,
  description: `Official resume and Curriculum Vitae for ${profile.name}, AI & Data Science Developer.`,
};

export default function ResumePage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Resume & CV"
            title="Official Qualifications & Experience Record"
            description="View or download verified PDF documents including the standard resume, full curriculum vitae, and ATS-formatted visual layout."
          />
        </Surface>

        <Surface className="portfolio-surface-soft">
          <ResumeViewer />
        </Surface>
      </div>
    </main>
  );
}
