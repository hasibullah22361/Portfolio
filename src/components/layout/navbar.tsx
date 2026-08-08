'use client';

import Link from 'next/link';
import { Menu, X } from 'lucide-react';
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
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl">
      <div className="portfolio-shell">
        <div className="flex h-18 items-center justify-between gap-4 py-4">
          <Link
            href="/"
            className="portfolio-focus inline-flex flex-col gap-0.5 rounded-2xl px-1 py-1"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.34em] text-white">
              {profile.name}
            </span>
            <span className="text-xs text-slate-400">{profile.headline}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'portfolio-btn rounded-full px-4 py-2 text-sm font-medium',
                    isActive ? 'portfolio-btn-cyan' : 'portfolio-btn-ghost',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

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

        <div
          id="mobile-navigation"
          className={cn(
            'grid overflow-hidden transition-all duration-200 lg:hidden',
            isOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <nav className="flex flex-col gap-2 rounded-3xl border border-slate-800 bg-slate-900/80 p-3" aria-label="Mobile navigation">
              {navigationLinks.map((link) => {
                const commonClassName = cn(
                  'portfolio-btn justify-start rounded-2xl px-4 py-3 text-sm font-medium',
                  pathname === link.href
                    ? 'portfolio-btn-cyan'
                    : 'portfolio-btn-ghost text-slate-300 hover:text-white',
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