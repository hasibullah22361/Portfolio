'use client';

import { Search } from 'lucide-react';
import type { ProjectCategory } from '@/types/project';

const categories: Array<'All' | ProjectCategory> = [
  'All',
  'AI',
  'Machine Learning',
  'Computer Vision',
  'Data Science',
  'Web',
  'Mobile',
  'Research',
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
      <div className="relative">
        <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
        <input
          type="search"
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search projects"
          className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 py-3 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-slate-600 focus:outline-none"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`portfolio-btn rounded-full px-4 py-2 text-sm font-medium ${
                isActive
                  ? 'portfolio-btn-primary'
                  : 'portfolio-btn-secondary'
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