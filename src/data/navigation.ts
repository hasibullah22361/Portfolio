import { profile } from '@/data/profile';
import type { NavigationLink } from '@/types/navigation';

export const navigationLinks: NavigationLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Work', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Education', href: '/education' },
  { label: 'Research', href: '/research' },
  { label: 'Certifications', href: '/certifications' },
  { label: 'Skills', href: '/skills' },
  { label: 'Contact', href: '/contact' },
  { label: 'Resume', href: '/resume' },
];

export const socialNavigationLinks: NavigationLink[] = [
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Email', href: `mailto:${profile.email}`, external: true },
];
