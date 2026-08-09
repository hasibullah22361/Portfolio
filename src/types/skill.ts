export type SkillCategory =
  | 'AI & Machine Learning'
  | 'Data Science'
  | 'Computer Vision'
  | 'Development'
  | 'Tools';

export type Skill = {
  name: string;
  category: SkillCategory;
  icon?: string;
  level?: string;
  years?: string;
  description?: string;
  featured?: boolean;
  order?: number;
};
