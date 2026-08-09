'use client';

import Link from 'next/link';
import { Menu, X, Sparkles } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navigationLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import { cn } from '@/lib/cn';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-2xl transition-colors duration-300">
      <div className="portfolio-shell">
        <div className="flex h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="portfolio-focus group inline-flex items-center gap-3 rounded-2xl p-1 transition-all"
          >
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold uppercase tracking-[0.25em] text-white group-hover:text-cyan-400 transition-colors">
                  {profile.name}
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
              </div>
              <span className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                {profile.headline}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-800/60 bg-slate-900/40 p-1.5 backdrop-blur-md lg:flex" aria-label="Primary navigation">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'portfolio-btn rounded-full px-4 py-2 text-sm font-medium transition-all duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                      : 'text-slate-300 hover:bg-slate-800/80 hover:text-white',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cyan-300 border-cyan-500/30 hover:border-cyan-400"
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Get in Touch
            </Link>

            <button
              type="button"
              className="portfolio-btn portfolio-btn-secondary inline-flex items-center justify-center rounded-full p-3 text-white lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            'grid overflow-hidden transition-all duration-300 lg:hidden',
            isOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-2 rounded-3xl border border-slate-800/80 bg-slate-900/90 p-3 backdrop-blur-xl" aria-label="Mobile navigation">
              {navigationLinks.map((link) => {
                const commonClassName = cn(
                  'portfolio-btn justify-start rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                  pathname === link.href
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white',
                );

                return (
                  <Link key={link.label} href={link.href} className={commonClassName}>
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}