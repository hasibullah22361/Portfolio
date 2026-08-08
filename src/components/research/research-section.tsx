import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';
import { publications, researchInterests } from '@/data/research';
import { ResearchInterestCard } from '@/components/research/research-interest-card';

export function ResearchSection() {
  return (
    <div className="space-y-8">
      <Surface className="portfolio-surface-soft">
        <SectionHeading
          eyebrow="Research Interests"
          title="Current research directions"
          description="Primary focus areas in Artificial Intelligence, Machine Learning, and Computer Vision."
        />

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {researchInterests.map((interest) => (
            <ResearchInterestCard key={interest.name} interest={interest} />
          ))}
        </div>
      </Surface>

      <Surface className="portfolio-surface-soft">
        <SectionHeading
          eyebrow="Publications"
          title="Research publications"
          description="Academic papers, journal publications, conference proceedings, and preprints."
        />

        {publications.length > 0 ? (
          <div className="mt-6 space-y-4">
            {publications.map((publication) => (
              <article key={publication.title} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <h3 className="text-base font-semibold text-white">{publication.title}</h3>
              </article>
            ))}
          </div>
        ) : (
          <p className="mt-6 text-sm leading-7 text-slate-400">Research publications will be added here.</p>
        )}
      </Surface>
    </div>
  );
}
