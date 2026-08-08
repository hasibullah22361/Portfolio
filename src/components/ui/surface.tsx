import { cn } from '@/lib/cn';
import type { ReactNode } from 'react';

type SurfaceProps = {
  children: ReactNode;
  className?: string;
};

export function Surface({ children, className }: SurfaceProps) {
  return <div className={cn('portfolio-surface rounded-3xl p-6 sm:p-8', className)}>{children}</div>;
}