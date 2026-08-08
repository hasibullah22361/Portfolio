import Link from 'next/link';
import type { ReactNode, MouseEvent } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost' | 'cyan';
  className?: string;
  onClick?: (e?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  target?: string;
  rel?: string;
  'aria-label'?: string;
};

const variantClasses: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary: 'portfolio-btn-primary',
  secondary: 'portfolio-btn-secondary',
  cyan: 'portfolio-btn-cyan',
  ghost: 'portfolio-btn-ghost',
};

export function Button({
  href,
  children,
  variant = 'primary',
  className,
  onClick,
  type = 'button',
  disabled,
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const baseClasses = cn(
    'portfolio-btn rounded-full px-5 py-3 text-sm font-medium',
    variantClasses[variant],
    disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
    className,
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} aria-label={ariaLabel} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} aria-label={ariaLabel} className={baseClasses}>
      {children}
    </button>
  );
}