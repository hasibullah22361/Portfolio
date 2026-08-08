import type { Metadata } from 'next';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { ContactForm } from '@/components/sections/contact-form';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: `Contact | ${profile.name}`,
  description: `Get in touch with ${profile.name} for research, project inquiries, or professional opportunities.`,
};

export default function ContactPage() {
  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <Surface>
          <SectionHeading
            eyebrow="Contact"
            title="Get in touch for opportunities & research"
            description="Whether you have questions about AI projects, research collaborations, or entry-level opportunities, send a message below."
          />
        </Surface>

        <Surface className="portfolio-surface-soft">
          <ContactForm />
        </Surface>
      </div>
    </main>
  );
}
