'use client';

import { Search } from 'lucide-react';
import type { ProjectCategory } from '@/types/project';

/**
 * Filter categories derived from actual project data.
 * Projects use: AI, Computer Vision, Mobile
 */
const categories: Array<'All' | ProjectCategory> = [
  'All',
  'AI',
  'Computer Vision',
  'Mobile',
];

type ProjectFilterProps = {
  activeCategory: 'All' | ProjectCategory;
  searchTerm: string;
  onCategoryChange: (category: 'All' | ProjectCategory) => void;
  onSearchChange: (searchTerm: string) => void;
};

export function ProjectFilter({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: ProjectFilterProps) {
  return (
    <div className="flex flex-col gap-4">
      {/* Search input */}
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2"
          style={{ color: 'var(--muted-text-color)' }}
          aria-hidden="true"
        />
        <input
          type="search"
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects…"
          aria-label="Search projects"
          className="w-full rounded-2xl border py-3 pl-11 pr-4 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/40"
          style={{
            borderColor: 'var(--surface-border)',
            background: 'var(--surface-bg)',
            color: 'var(--body-text-color)',
          }}
        />
      </div>

      {/* Category filter buttons */}
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              aria-pressed={isActive}
              className={`portfolio-btn rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                isActive ? 'portfolio-btn-primary' : 'portfolio-btn-secondary'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}