'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { cn } from '@/lib/cn';

type ProfileImageProps = {
  src: string;
  alt: string;
  name: string;
  isAvailable?: boolean;
  className?: string;
};

export function ProfileImage({ src, alt, name, isAvailable = true, className }: ProfileImageProps) {
  const [hasError, setHasError] = useState(!isAvailable);

  const initials = useMemo(() => {
    return name
      .split(' ')
      .filter(Boolean)
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();
  }, [name]);

  return (
    <div
      className={cn(
        'relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 shadow-[0_24px_80px_-24px_rgba(15,23,42,0.95)]',
        className,
      )}
    >
      {!hasError ? (
        <Image
          src={src}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 420px"
          className="object-cover"
          onError={() => setHasError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_34%),linear-gradient(180deg,rgba(15,23,42,1),rgba(2,6,23,1))]">
          <div className="flex h-28 w-28 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-3xl font-semibold tracking-[0.2em] text-white">
            {initials}
          </div>
        </div>
      )}
    </div>
  );
}