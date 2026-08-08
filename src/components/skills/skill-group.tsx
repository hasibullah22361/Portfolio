import type { SkillCategory } from '@/types/skill';
import { SectionHeading } from '@/components/ui/section-heading';
import { SkillCard } from '@/components/skills/skill-card';
import type { Skill } from '@/types/skill';

type SkillGroupProps = {
  category: SkillCategory;
  skills: Skill[];
};

export function SkillGroup({ category, skills }: SkillGroupProps) {
  const sortedSkills = [...skills].sort((firstSkill, secondSkill) => {
    return (firstSkill.order ?? 999) - (secondSkill.order ?? 999);
  });

  return (
    <section className="space-y-5">
      <SectionHeading
        eyebrow={category}
        title={`${category} Skills`}
        description={`Technical skills and proficiency in ${category}.`}
      />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sortedSkills.map((skill) => (
          <SkillCard key={`${skill.category}-${skill.name}`} skill={skill} />
        ))}
      </div>
    </section>
  );
}