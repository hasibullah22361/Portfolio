export type AchievementCategory =
  | 'Academic'
  | 'Professional'
  | 'Technical'
  | 'Competition'
  | 'Research'
  | 'Awards';

export type Achievement = {
  title: string;
  description: string;
  date?: string;
  category: AchievementCategory;
  image?: string;
  link?: string;
};
