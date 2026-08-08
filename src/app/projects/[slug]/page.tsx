import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectCaseStudy } from '@/components/projects/project-case-study';
import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    return {
      title: `Project not found | ${profile.name}`,
    };
  }

  return {
    title: `${project.title} | ${profile.name}`,
    description: project.shortDescription,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((candidate) => candidate.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen px-6 py-16 text-white sm:px-8 lg:px-10">
      <div className="portfolio-shell">
        <ProjectCaseStudy project={project} />
      </div>
    </main>
  );
}