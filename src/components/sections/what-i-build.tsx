import { Surface } from '@/components/ui/surface';
import { SectionHeading } from '@/components/ui/section-heading';

const areas = [
  {
    id: 'ai-ml',
    emoji: '🤖',
    title: 'AI & Machine Learning',
    description:
      'Building intelligent systems that learn from data — from model training and evaluation to deploying practical ML pipelines that solve real problems.',
    techs: ['Python', 'TensorFlow', 'YOLO', 'Scikit-learn', 'Deep Learning'],
    gradient: 'from-violet-500/20 to-purple-600/10',
    border: 'border-violet-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(139,92,246,0.2)]',
    iconBg: 'bg-violet-500/10 border-violet-500/30',
    dot: 'bg-violet-400',
  },
  {
    id: 'computer-vision',
    emoji: '👁️',
    title: 'Computer Vision',
    description:
      'Designing vision systems for object detection, tracking, and video analytics — building on real-time pipelines like YOLO + DeepSORT for traffic and surveillance.',
    techs: ['OpenCV', 'YOLO11m', 'DeepSORT', 'Image Processing', 'Object Tracking'],
    gradient: 'from-cyan-500/20 to-blue-600/10',
    border: 'border-cyan-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(6,182,212,0.2)]',
    iconBg: 'bg-cyan-500/10 border-cyan-500/30',
    dot: 'bg-cyan-400',
  },
  {
    id: 'data-science',
    emoji: '📊',
    title: 'Data Science',
    description:
      'Extracting insights from structured and unstructured data using Python, Pandas, and NumPy — turning raw data into actionable analysis and clear visualizations.',
    techs: ['Python', 'NumPy', 'Pandas', 'Data Analysis', 'Data Visualization'],
    gradient: 'from-emerald-500/20 to-teal-600/10',
    border: 'border-emerald-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]',
    iconBg: 'bg-emerald-500/10 border-emerald-500/30',
    dot: 'bg-emerald-400',
  },
  {
    id: 'full-stack',
    emoji: '💻',
    title: 'Full-Stack Applications',
    description:
      'Building modern, performant web and mobile applications with Next.js and Flutter — from interactive dashboards to offline-capable cross-platform apps.',
    techs: ['Next.js', 'React', 'Flutter', 'Firebase', 'TypeScript'],
    gradient: 'from-orange-500/20 to-amber-600/10',
    border: 'border-orange-500/30',
    glow: 'group-hover:shadow-[0_0_30px_rgba(249,115,22,0.2)]',
    iconBg: 'bg-orange-500/10 border-orange-500/30',
    dot: 'bg-orange-400',
  },
];

export function WhatIBuildSection() {
  return (
    <section className="space-y-8" aria-labelledby="what-i-build-heading">
      <Surface>
        <SectionHeading
          eyebrow="Expertise"
          title="What I Build"
          description="Practical, intelligent applications across AI, computer vision, data science, and modern software development."
        />
      </Surface>

      <div className="grid gap-5 sm:grid-cols-2">
        {areas.map((area) => (
          <article
            key={area.id}
            className={`glass-card-interactive group rounded-3xl p-6 bg-gradient-to-br ${area.gradient} border ${area.border} transition-all duration-300 ${area.glow}`}
          >
            {/* Icon */}
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border text-3xl ${area.iconBg} transition-transform duration-300 group-hover:scale-110`}
            >
              {area.emoji}
            </div>

            {/* Title */}
            <h3
              className="mt-4 text-xl font-bold transition-colors group-hover:text-cyan-400"
              style={{ color: 'var(--heading-color)' }}
            >
              {area.title}
            </h3>

            {/* Description */}
            <p
              className="mt-3 text-sm leading-relaxed"
              style={{ color: 'var(--body-text-color)' }}
            >
              {area.description}
            </p>

            {/* Tech badges */}
            <div className="mt-5 flex flex-wrap gap-2">
              {area.techs.map((tech) => (
                <span
                  key={tech}
                  className="flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium"
                  style={{
                    background: 'var(--surface-bg)',
                    border: '1px solid var(--surface-border)',
                    color: 'var(--body-text-color)',
                  }}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${area.dot}`} aria-hidden="true" />
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
