export type ProjectStatus = 'Completed' | 'In Progress' | 'Archived';

export type ProjectCategory =
  | 'AI'
  | 'Machine Learning'
  | 'Computer Vision'
  | 'Data Science'
  | 'Web'
  | 'Mobile'
  | 'Research';

export type ProjectImage = {
  src: string;
  alt: string;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  category: ProjectCategory;
  technologies: string[];
  features: string[];
  architecture?: string[];
  problem?: string;
  solution?: string;
  developmentProcess?: string[];
  challenges?: string[];
  results?: string[];
  futureImprovements?: string[];
  images?: ProjectImage[];
  githubUrl?: string;
  liveUrl?: string;
  date?: string;
  status: ProjectStatus;
  featured?: boolean;
};
