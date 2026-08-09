'use client';

import Link from 'next/link';
import { ArrowUp, Mail, FileText } from 'lucide-react';
import { navigationLinks, socialNavigationLinks } from '@/data/navigation';
import { profile } from '@/data/profile';

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export function Footer() {
  return (
    <footer
      className="relative mt-24 border-t backdrop-blur-2xl"
      style={{
        backgroundColor: 'var(--footer-bg)',
        borderColor: 'var(--footer-border)',
        color: 'var(--muted-text-color)',
      }}
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[1px] w-3/4 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <div className="portfolio-shell py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-5">
            <Link href="/" className="inline-block group">
              <span
                className="text-base font-bold uppercase tracking-[0.25em] transition-colors group-hover:text-cyan-400"
                style={{ color: 'var(--heading-color)' }}
              >
                {profile.name}
              </span>
              <p className="mt-1 text-xs transition-colors group-hover:text-cyan-400" style={{ color: 'var(--muted-text-color)' }}>
                {profile.headline}
              </p>
            </Link>
            <p className="text-xs leading-relaxed max-w-sm" style={{ color: 'var(--muted-text-color)' }}>
              {profile.shortBio}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socialNavigationLinks.map((link) => {
                const isMailto = link.href.startsWith('mailto:');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={isMailto ? undefined : '_blank'}
                    rel={isMailto ? undefined : 'noreferrer'}
                    className="portfolio-btn portfolio-btn-secondary rounded-full p-2.5 hover:text-cyan-400"
                    aria-label={link.label}
                  >
                    {link.label === 'GitHub' ? (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    ) : link.label === 'LinkedIn' ? (
                      <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                  </a>
                );
              })}
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:text-cyan-400"
              >
                <FileText className="h-3.5 w-3.5 text-cyan-400" />
                Resume
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 lg:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--heading-color)' }}>
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              {navigationLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="portfolio-focus transition-colors duration-200 hover:text-cyan-400 py-1"
                  style={{ color: 'var(--muted-text-color)' }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Availability & Location */}
          <div className="space-y-3 lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: 'var(--heading-color)' }}>
              Status & Location
            </h3>
            <p className="text-xs leading-5 font-medium" style={{ color: 'var(--body-text-color)' }}>
              {profile.location}
            </p>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {profile.availability}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t pt-6 text-xs font-medium"
          style={{ borderColor: 'var(--surface-border)', color: 'var(--muted-text-color)' }}>
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="portfolio-btn portfolio-btn-secondary gap-1.5 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider hover:text-cyan-400"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
          </button>
        </div>
      </div>
    </footer>
  );
}
