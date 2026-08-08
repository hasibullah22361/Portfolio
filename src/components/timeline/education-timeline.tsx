import { education } from '@/data/education';
import { EducationCard } from '@/components/timeline/education-card';

export function EducationTimeline() {
  const sortedEducation = [...education];

  return (
    <div className="space-y-6">
      {sortedEducation.map((entry) => (
        <EducationCard key={`${entry.degree}-${entry.institution}`} education={entry} />
      ))}
    </div>
  );
}
