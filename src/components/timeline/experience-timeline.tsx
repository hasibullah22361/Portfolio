import { experience } from '@/data/experience';
import { ExperienceCard } from '@/components/timeline/experience-card';

export function ExperienceTimeline() {
  const sortedExperience = [...experience];

  return (
    <div className="space-y-6">
      {sortedExperience.map((entry) => (
        <ExperienceCard key={`${entry.company}-${entry.role}`} experience={entry} />
      ))}
    </div>
  );
}
