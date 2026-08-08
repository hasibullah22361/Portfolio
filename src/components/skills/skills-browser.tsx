'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Surface } from '@/components/ui/surface';
import { skills } from '@/data/skills';
import { SkillGroup } from '@/components/skills/skill-group';
import { SkillCard } from '@/components/skills/skill-card';
import type { SkillCategory } from '@/types/skill';

const categories: Array<'All' | SkillCategory> = [
  'All',
  'AI & Machine Learning',
  'Data Science',
  'Computer Vision',
  'Development',
];

export function SkillsBrowser() {
  const [activeCategory, setActiveCategory] = useState<'All' | SkillCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredSkills = skills.filter((skill) => {
    const matchesCategory = activeCategory === 'All' || skill.category === activeCategory;
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (skill.description?.toLowerCase().includes(searchTerm.toLowerCase()) ?? false);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Filter and Search Bar */}
      <Surface className="portfolio-surface-soft space-y-5">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search skills by keyword or tool (e.g. Python, YOLO, OpenCV)..."
            className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 py-3.5 pl-11 pr-4 text-sm text-white placeholder:text-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            const count =
              category === 'All'
                ? skills.length
                : skills.filter((s) => s.category === category).length;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`portfolio-btn gap-2 rounded-full px-4 py-2 text-xs font-semibold ${
                  isActive
                    ? 'portfolio-btn-cyan'
                    : 'portfolio-btn-secondary'
                }`}
              >
                <span>{category}</span>
                <span className="rounded-full bg-slate-950/60 px-2 py-0.5 text-[10px] text-slate-400">
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </Surface>

      {/* Results Display */}
      {activeCategory === 'All' && searchTerm.trim().length === 0 ? (
        <div className="space-y-8">
          {(['AI & Machine Learning', 'Data Science', 'Computer Vision', 'Development'] as SkillCategory[]).map(
            (category) => {
              const categorySkills = skills.filter((skill) => skill.category === category);
              return (
                <Surface key={category} className="portfolio-surface-soft">
                  <SkillGroup category={category} skills={categorySkills} />
                </Surface>
              );
            }
          )}
        </div>
      ) : (
        <Surface className="portfolio-surface-soft">
          {filteredSkills.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {filteredSkills.map((skill) => (
                <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center text-sm text-slate-400">
              No skills found matching your search. Try a different keyword or select another category.
            </div>
          )}
        </Surface>
      )}
    </div>
  );
}
