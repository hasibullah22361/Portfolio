'use client';

import { useState } from 'react';
import { ProjectsSection } from '@/components/sections/projects';
import type { ProjectCategory } from '@/types/project';

export function ProjectsBrowser() {
  const [activeCategory, setActiveCategory] = useState<'All' | ProjectCategory>('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <ProjectsSection
      activeCategory={activeCategory}
      searchTerm={searchTerm}
      onCategoryChange={setActiveCategory}
      onSearchChange={setSearchTerm}
    />
  );
}
