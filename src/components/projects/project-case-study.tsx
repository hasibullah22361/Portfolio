import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import type { Project } from '@/types/project';
import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';
import { GithubIcon } from '@/components/ui/github-icon';

type ProjectCaseStudyProps = {
  project: Project;
};

function renderEmptyMessage(label: string) {
  return (
    <p className="mt-3 text-sm leading-7 text-slate-400">
      {label} are not yet available in the current workspace.
    </p>
  );
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const coverImage = project.images?.[0];

  return (
    <div className="space-y-8">
      <Surface>
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">Project</p>
          <h1 className="text-3xl font-semibold sm:text-5xl">{project.title}</h1>
          <p className="max-w-3xl text-base leading-7 text-slate-400">{project.shortDescription}</p>
        </div>
      </Surface>

      {coverImage ? (
        <Surface className="overflow-hidden p-0">
          <div className="relative aspect-[16/9]">
            <Image src={coverImage.src} alt={coverImage.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 80vw" />
          </div>
        </Surface>
      ) : null}

      <Surface className="portfolio-surface-soft">
        <SectionHeading eyebrow="Screenshots" title="Visual reference" />
        {project.images && project.images.length > 0 ? (
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {project.images.map((image) => (
              <div key={image.src} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/60">
                <div className="relative aspect-[16/10]">
                  <Image src={image.src} alt={image.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <p className="border-t border-slate-800 px-4 py-3 text-xs uppercase tracking-[0.2em] text-slate-500">
                  {image.alt}
                </p>
              </div>
            ))}
          </div>
        ) : (
          renderEmptyMessage('Screenshot details')
        )}
      </Surface>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Problem" title="The challenge" />
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.problem ?? 'Problem details are not yet available.'}</p>
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Solution" title="How it was approached" />
          <p className="mt-3 text-sm leading-7 text-slate-400">{project.solution ?? 'Solution details are not yet available.'}</p>
        </Surface>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Architecture" title="System architecture" />
          {project.architecture && project.architecture.length > 0 ? (
            <ol className="mt-4 space-y-3">
              {project.architecture.map((step, index) => (
                <li key={step} className="flex gap-3 text-sm text-slate-300">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-xs text-slate-400">
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            renderEmptyMessage('Architecture details')
          )}
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Technologies" title="Tools and stack" />
          {project.technologies.length > 0 ? (
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span key={technology} className="rounded-full border border-slate-700 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">
                  {technology}
                </span>
              ))}
            </div>
          ) : (
            renderEmptyMessage('Technology details')
          )}
        </Surface>
      </div>

      <Surface className="portfolio-surface-soft">
        <SectionHeading eyebrow="Development process" title="How the project was built" />
        {project.developmentProcess && project.developmentProcess.length > 0 ? (
          <ol className="mt-4 space-y-3">
            {project.developmentProcess.map((step, index) => (
              <li key={step} className="flex gap-3 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-700 bg-slate-950 text-xs text-slate-400">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        ) : (
          renderEmptyMessage('Development process details')
        )}
      </Surface>

      <Surface className="portfolio-surface-soft">
        <SectionHeading eyebrow="Features" title="Key capabilities" />
        {project.features.length > 0 ? (
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {project.features.map((feature) => (
              <li key={feature} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                {feature}
              </li>
            ))}
          </ul>
        ) : (
          renderEmptyMessage('Feature details')
        )}
      </Surface>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Challenges" title="Development challenges" />
          {project.challenges && project.challenges.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {project.challenges.map((challenge) => (
                <li key={challenge} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                  {challenge}
                </li>
              ))}
            </ul>
          ) : (
            renderEmptyMessage('Challenge details')
          )}
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Results" title="Outcome" />
          {project.results && project.results.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {project.results.map((result) => (
                <li key={result} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                  {result}
                </li>
              ))}
            </ul>
          ) : (
            renderEmptyMessage('Result details')
          )}
        </Surface>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Future Improvements" title="What comes next" />
          {project.futureImprovements && project.futureImprovements.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {project.futureImprovements.map((improvement) => (
                <li key={improvement} className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 text-sm text-slate-300">
                  {improvement}
                </li>
              ))}
            </ul>
          ) : (
            renderEmptyMessage('Future improvement details')
          )}
        </Surface>

        <Surface className="portfolio-surface-soft">
          <SectionHeading eyebrow="Links" title="Project references" />
          <div className="mt-4 flex flex-wrap gap-3">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-cyan gap-2 rounded-full px-4 py-2 text-sm font-medium"
              >
                <ExternalLink className="h-4 w-4" />
                <span>Live Demo</span>
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-btn portfolio-btn-secondary gap-2 rounded-full px-4 py-2 text-sm font-medium"
              >
                <GithubIcon className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            ) : null}
            {!project.githubUrl && !project.liveUrl ? (
              <p className="text-sm leading-7 text-slate-400">No public links are available for this project yet.</p>
            ) : null}
          </div>
        </Surface>
      </div>
    </div>
  );
}