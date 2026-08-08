import type { Metadata } from 'next';
import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { CertificationsSection } from '@/components/certifications/certifications-section';

export const metadata: Metadata = {
  title: `Certifications | ${profile.name}`,
  description: 'Certificate and training records for Hasib Ullah.',
};

export default function CertificationsPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Certifications"
            title="Professional certificates and training"
            description="This area tracks verified certificates while keeping unknown fields explicitly marked to maintain factual integrity."
          />
        </Surface>

        <CertificationsSection />
      </div>
    </main>
  );
}
