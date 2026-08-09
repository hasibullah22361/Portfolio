import { Mail, Download, ExternalLink } from 'lucide-react';
import { GithubIcon } from '@/components/ui/github-icon';
import { profile } from '@/data/profile';

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

export function ContactCTASection() {
  return (
    <section
      className="relative overflow-hidden rounded-3xl px-6 py-14 sm:px-12 sm:py-20 text-center"
      style={{
        background: 'linear-gradient(135deg, rgba(6,182,212,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(16,185,129,0.08) 100%)',
        border: '1px solid rgba(6,182,212,0.25)',
      }}
      aria-labelledby="contact-cta-heading"
    >
      {/* Background glows */}
      <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl motion-reduce:hidden" aria-hidden="true" />
      <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl motion-reduce:hidden" aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-2xl">
        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for Opportunities
        </span>

        {/* Heading */}
        <h2
          id="contact-cta-heading"
          className="mt-6 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl"
          style={{ color: 'var(--heading-color)' }}
        >
          Let&apos;s Build Something{' '}
          <span className="magic-name">Intelligent</span>{' '}
          Together
        </h2>

        {/* Sub-text */}
        <p
          className="mt-5 text-base leading-relaxed sm:text-lg"
          style={{ color: 'var(--body-text-color)' }}
        >
          {profile.availability} — open to project collaborations, research partnerships, and conversations about AI & Data Science.
        </p>

        {/* Action buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href={`mailto:${profile.email}`}
            className="portfolio-btn portfolio-btn-cyan gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            <Mail className="h-4 w-4" />
            Email Me
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:text-cyan-400"
          >
            <LinkedInIcon />
            LinkedIn
            <ExternalLink className="h-3 w-3 opacity-50" />
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:text-cyan-400"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3 w-3 opacity-50" />
          </a>

          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-6 py-3 text-sm font-semibold hover:text-cyan-400"
          >
            <Download className="h-4 w-4 text-cyan-400" />
            Download CV
          </a>
        </div>

        {/* Direct email hint */}
        <p className="mt-6 text-xs" style={{ color: 'var(--muted-text-color)' }}>
          Or email directly at{' '}
          <a
            href={`mailto:${profile.email}`}
            className="text-cyan-400 hover:underline font-medium"
          >
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}
