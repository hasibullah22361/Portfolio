import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { certifications } from '@/data/certifications';
import { CertificationCard } from '@/components/certifications/certification-card';

export function CertificationsSection() {
  return (
    <Surface className="portfolio-surface-soft">
      <SectionHeading
        eyebrow="Certifications"
        title="Training and Certificate Records"
        description="Verified certifications, technical training, and professional learning achievements demonstrating practical skills in Artificial Intelligence, Data Science, UI/UX Design, and professional development."
      />

      {certifications.length > 0 ? (
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification) => (
            <CertificationCard key={`${certification.title}-${certification.provider}`} certification={certification} />
          ))}
        </div>
      ) : (
        <p className="mt-6 text-sm leading-7 text-slate-400">Verified certifications will be added here.</p>
      )}

      {/* Certification Summary */}
      <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 mb-3">Certification Summary</p>
        <ul className="space-y-2">
          {certifications.map((cert) => (
            <li key={`summary-${cert.title}`} className="flex items-center gap-2 text-sm text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
              <span className="font-medium text-white">{cert.title}</span>
              <span className="text-slate-500">—</span>
              <span className="text-slate-400">{cert.provider}</span>
            </li>
          ))}
        </ul>
      </div>
    </Surface>
  );
}
