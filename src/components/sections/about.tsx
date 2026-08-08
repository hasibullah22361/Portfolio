import { Button } from '@/components/ui/button';
import { ProfileImage } from '@/components/ui/profile-image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { profile } from '@/data/profile';

export function AboutSection() {
  return (
    <Surface className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
      <div className="mx-auto w-full max-w-sm lg:mx-0">
        <ProfileImage
          src={profile.profileImage}
          alt={`${profile.name} professional profile photo`}
          name={profile.name}
          isAvailable={profile.profileImageAvailable}
        />
      </div>

      <div>
        <SectionHeading
          eyebrow="About"
          title="A practical AI and Data Science profile built for long-term growth"
          description={profile.longBio}
        />

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              Academic background
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              BS Computer Science at Hazara University, Mansehra.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
              Career direction
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Building practical intelligent systems for internships, jobs, research, and future academic growth.
            </p>
          </div>
        </div>

        <div className="mt-6">
          <p className="text-sm font-medium uppercase tracking-[0.24em] text-slate-400">
            Research interests
          </p>
          <ul className="mt-3 flex flex-wrap gap-3">
            {profile.researchInterests.map((interest) => (
              <li
                key={interest}
                className="rounded-full border border-slate-700/80 bg-slate-900/70 px-3 py-1 text-sm text-slate-200"
              >
                {interest}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/projects" variant="primary">
            View Projects
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Me
          </Button>
        </div>
      </div>
    </Surface>
  );
}