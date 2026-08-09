import { Surface } from '@/components/ui/surface';
import { skills } from '@/data/skills';
import { SkillGroup } from '@/components/skills/skill-group';
import type { SkillCategory } from '@/types/skill';

const skillCategories: SkillCategory[] = [
  'AI & Machine Learning',
  'Data Science',
  'Computer Vision',
  'Development',
  'Tools',
];

export function SkillsSection() {
  return (
    <div className="space-y-8">
      {skillCategories.map((category) => {
        const categorySkills = skills.filter((skill) => skill.category === category);

        return (
          <Surface key={category} className="portfolio-surface-soft">
            <SkillGroup category={category} skills={categorySkills} />
          </Surface>
        );
      })}
    </div>
  );
}