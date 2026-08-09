'use client';

import Link from 'next/link';
import { Menu, X, Sparkles, Sun, Moon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState, useCallback } from 'react';
import { navigationLinks } from '@/data/navigation';
import { profile } from '@/data/profile';
import { cn } from '@/lib/cn';
import { useTheme } from '@/components/layout/theme-provider';

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Track scroll for navbar shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    },
    [isOpen],
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b backdrop-blur-2xl transition-all duration-300',
        scrolled ? 'shadow-[0_4px_24px_-4px_rgba(0,0,0,0.15)]' : '',
      )}
      style={{
        backgroundColor: 'var(--body-bg)',
        borderColor: 'var(--surface-border)',
        background:
          theme === 'dark'
            ? 'rgba(3,7,18,0.85)'
            : 'rgba(248,250,252,0.90)',
      }}
    >
      <div className="portfolio-shell">
        <div className="flex h-16 items-center justify-between gap-3">
          {/* ─── Structured Logo / Brand ─── */}
          <Link
            href="/"
            className="portfolio-focus group inline-flex items-center gap-2.5 rounded-xl p-1 transition-all shrink-0"
          >
            {/* HU Avatar Badge */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-cyan-500/40 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-400 font-bold text-xs shadow-[0_0_12px_rgba(6,182,212,0.2)] transition-all group-hover:scale-105 group-hover:border-cyan-400">
              HU
            </div>

            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-1.5">
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] transition-colors group-hover:text-cyan-400 truncate"
                  style={{ color: 'var(--heading-color)' }}
                >
                  {profile.name}
                </span>
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
              </div>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-wide text-cyan-400/90 whitespace-nowrap">
                AI & Data Science Developer
              </span>
            </div>
          </Link>

          {/* ─── Desktop Navigation ─── */}
          <nav
            className="hidden items-center gap-1 rounded-full p-1.5 lg:flex nav-pill"
            aria-label="Primary navigation"
          >
            {navigationLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={cn(
                    'portfolio-btn relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-300',
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                      : 'hover:bg-[var(--nav-hover-bg)]',
                  )}
                  style={isActive ? undefined : { color: 'var(--nav-text)' }}
                >
                  {link.label}
                  {!isActive && (
                    <span className="absolute bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-3/4" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* ─── Right Actions ─── */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="portfolio-btn portfolio-btn-secondary rounded-full p-2.5 transition-all"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? (
                <Sun className="h-4 w-4 text-amber-400" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600" aria-hidden="true" />
              )}
            </button>

            {/* Contact CTA */}
            <Link
              href="/contact"
              className="hidden xl:inline-flex portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
              style={{ color: 'var(--nav-text)' }}
            >
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              Get in Touch
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="portfolio-btn portfolio-btn-secondary inline-flex items-center justify-center rounded-full p-2.5 lg:hidden"
              onClick={() => setIsOpen((current) => !current)}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              {isOpen ? (
                <X className="h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ─── Mobile Navigation Panel ─── */}
        <div
          id="mobile-navigation"
          className={cn(
            'grid overflow-hidden transition-all duration-300 lg:hidden',
            isOpen ? 'grid-rows-[1fr] pb-4 opacity-100' : 'grid-rows-[0fr] pb-0 opacity-0',
          )}
        >
          <div className="overflow-hidden">
            <nav
              className="flex flex-col gap-2 rounded-3xl p-3 backdrop-blur-xl nav-pill"
              aria-label="Mobile navigation"
            >
              {navigationLinks.map((link) => {
                const isActive = pathname === link.href;

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className={cn(
                      'portfolio-btn justify-start rounded-2xl px-4 py-3 text-sm font-medium transition-all',
                      isActive
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_0_20px_rgba(6,182,212,0.4)]'
                        : 'hover:bg-[var(--nav-hover-bg)]',
                    )}
                    style={isActive ? undefined : { color: 'var(--nav-text)' }}
                  >
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