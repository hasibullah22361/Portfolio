'use client';

import { useEffect, useState, useMemo } from 'react';
import { cn } from '@/lib/cn';

type TypewriterTextProps = {
  text: string;
  speed?: number;
  deleteSpeed?: number;
  pauseDelay?: number;
  startDelay?: number;
  loop?: boolean;
  highlightKeywords?: string[];
  className?: string;
};

type Segment = {
  text: string;
  isHighlight: boolean;
};

function parseSegments(text: string, keywords: string[]): Segment[] {
  if (!keywords || keywords.length === 0) {
    return [{ text, isHighlight: false }];
  }

  // Create a regex pattern to match any of the keywords
  const escapedKeywords = keywords.map((kw) => kw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const regex = new RegExp(`(${escapedKeywords.join('|')})`, 'g');

  const parts = text.split(regex);
  const segments: Segment[] = [];

  for (const part of parts) {
    if (!part) continue;
    const isHighlight = keywords.includes(part);
    segments.push({ text: part, isHighlight });
  }

  return segments;
}

export function TypewriterText({
  text,
  speed = 45,
  deleteSpeed = 25,
  pauseDelay = 4000,
  startDelay = 300,
  loop = true,
  highlightKeywords = ['Artificial Intelligence', 'Machine Learning', 'Computer Vision', 'Data Science'],
  className,
}: TypewriterTextProps) {
  const [charCount, setCharCount] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const segments = useMemo(() => parseSegments(text, highlightKeywords), [text, highlightKeywords]);
  const totalLength = text.length;

  useEffect(() => {
    // Initial start delay before typing begins
    const timer = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(timer);
  }, [startDelay]);

  useEffect(() => {
    if (!hasStarted) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setCharCount(totalLength);
      return;
    }

    let timeoutId: NodeJS.Timeout;

    if (!isDeleting && charCount === totalLength) {
      if (loop) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDelay);
      }
    } else if (isDeleting && charCount === 0) {
      timeoutId = setTimeout(() => {
        setIsDeleting(false);
      }, startDelay);
    } else {
      const currentSpeed = isDeleting ? deleteSpeed : speed;
      timeoutId = setTimeout(() => {
        setCharCount((prev) => (isDeleting ? prev - 1 : prev + 1));
      }, currentSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [charCount, isDeleting, totalLength, speed, deleteSpeed, pauseDelay, startDelay, loop, hasStarted]);

  // Render sliced segments according to current charCount
  const renderContent = (count: number) => {
    let remaining = count;
    return segments.map((segment, index) => {
      if (remaining <= 0) return null;
      const visibleText = segment.text.slice(0, remaining);
      remaining -= visibleText.length;

      if (segment.isHighlight) {
        return (
          <span
            key={index}
            className="font-semibold text-blue-400 bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(59,130,246,0.35)] transition-all duration-200"
          >
            {visibleText}
          </span>
        );
      }

      return <span key={index}>{visibleText}</span>;
    });
  };

  return (
    <span className={cn('relative inline', className)}>
      {/* Screen reader accessible full text */}
      <span className="sr-only">{text}</span>

      {/* Typewriter animated display */}
      <span aria-hidden="true" className="inline">
        {renderContent(charCount)}
        <span
          className="inline-block ml-1 w-[2.5px] h-[1.15em] align-middle bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.9)] animate-pulse"
          style={{ verticalAlign: '-0.15em' }}
        />
      </span>
    </span>
  );
}
