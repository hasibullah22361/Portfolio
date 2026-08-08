'use client';

import { ProjectGrid } from '@/components/projects/project-grid';
import { ProjectFilter } from '@/components/projects/project-filter';
import { projects } from '@/data/projects';
import type { ProjectCategory } from '@/types/project';

type ProjectsSectionProps = {
  activeCategory: 'All' | ProjectCategory;
  searchTerm: string;
  onCategoryChange: (category: 'All' | ProjectCategory) => void;
  onSearchChange: (searchTerm: string) => void;
};

export function ProjectsSection({
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
}: ProjectsSectionProps) {
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch =
      searchTerm.trim().length === 0 ||
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6">
      <ProjectFilter
        activeCategory={activeCategory}
        searchTerm={searchTerm}
        onCategoryChange={onCategoryChange}
        onSearchChange={onSearchChange}
      />

      <ProjectGrid projects={filteredProjects} />
    </div>
  );
}