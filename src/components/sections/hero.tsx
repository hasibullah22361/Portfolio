import { Download, Mail, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProfileImage } from '@/components/ui/profile-image';
import { Surface } from '@/components/ui/surface';
import { TypewriterText } from '@/components/ui/typewriter-text';
import { profile } from '@/data/profile';

function SocialIcon({ label }: { label: string }) {
  if (label === 'GitHub') {
    return (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    );
  }
  if (label === 'LinkedIn') {
    return (
      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    );
  }
  return <Mail className="h-4 w-4" aria-hidden="true" />;
}

export function HeroSection() {
  return (
    <Surface className="relative overflow-hidden" id="hero">
      {/* Subtle background accents */}
      <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl motion-reduce:hidden" />
      <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl motion-reduce:hidden" />

      <div className="relative grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        {/* ─── Content ─── */}
        <div>
          {/* Eyebrow */}
          <div className="anim-fade-in-up">
            <span
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]"
            >
              Computer Science · AI · Data Science
            </span>
          </div>

          {/* Name */}
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl anim-fade-in-up-d1">
            <span>Hasib </span>
            <span className="magic-name">Ullah</span>
          </h1>

          {/* Title */}
          <p className="mt-3 max-w-2xl text-lg sm:text-xl text-cyan-400 font-medium tracking-wide anim-fade-in-up-d2">
            {profile.headline}
          </p>

          {/* Bio */}
          <p className="mt-5 max-w-3xl text-base leading-relaxed min-h-[3.5rem] font-normal anim-fade-in-up-d3"
            style={{ color: 'var(--body-text-color)' }}>
            <TypewriterText text={profile.shortBio} />
          </p>

          {/* Location & Availability badges */}
          <div className="mt-5 flex flex-wrap gap-2.5 text-xs font-medium anim-fade-in-up-d3">
            <span className="inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 backdrop-blur-md shadow-sm"
              style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-bg)' }}>
              <MapPin className="h-3.5 w-3.5 text-cyan-400" />
              <span style={{ color: 'var(--body-text-color)' }}>{profile.location}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-emerald-400 backdrop-blur-md shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <Briefcase className="h-3.5 w-3.5 text-emerald-400" />
              {profile.availability}
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3 anim-fade-in-up-d4">
            <Button href="/projects" variant="primary">
              View My Projects
            </Button>
            <Button href={profile.resume} variant="secondary" target="_blank" rel="noreferrer">
              <Download className="mr-2 h-4 w-4 text-cyan-400" aria-hidden="true" />
              Download CV
            </Button>
            <Button href="/contact" variant="secondary">
              <Mail className="mr-2 h-4 w-4 text-cyan-400" aria-hidden="true" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-6 flex flex-wrap gap-3 anim-fade-in-up-d5">
            {profile.socialLinks.map((link) => {
              const isMailto = link.href.startsWith('mailto:');

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  target={isMailto ? undefined : '_blank'}
                  rel={isMailto ? undefined : 'noreferrer'}
                  aria-label={link.ariaLabel}
                  className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-sm font-medium hover:text-cyan-400 transition-colors"
                >
                  <SocialIcon label={link.label} />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* ─── Profile Image ─── */}
        <div className="mx-auto w-full max-w-sm lg:ml-auto lg:max-w-none anim-slide-in-right">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-25 blur-xl transition duration-500 group-hover:opacity-50 motion-reduce:transition-none" />
            <div className="relative rounded-[2rem] border p-4 shadow-2xl backdrop-blur-xl"
              style={{ borderColor: 'var(--surface-border)', background: 'var(--surface-bg)' }}>
              <ProfileImage
                src={profile.profileImage}
                alt={`${profile.name} professional profile photo`}
                name={profile.name}
                isAvailable={profile.profileImageAvailable}
              />
            </div>
          </div>
        </div>
      </div>
    </Surface>
  );
}