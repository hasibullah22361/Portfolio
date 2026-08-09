'use client';

import { useEffect } from 'react';

/**
 * Observes elements with class "animate-on-scroll" and adds
 * "in-view" when they enter the viewport. Respects reduced motion.
 * Mount this once in the root layout.
 */
export function ScrollAnimator() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Immediately show all elements
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        el.classList.add('in-view');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
    );

    // Observe existing and future elements
    const observeAll = () => {
      document.querySelectorAll('.animate-on-scroll:not(.in-view)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();

    // Re-observe on route changes (Next.js client navigation)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return null;
}
