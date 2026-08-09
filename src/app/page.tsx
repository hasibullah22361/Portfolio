import { profile } from '@/data/profile';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { ExperienceTimeline } from '@/components/timeline/experience-timeline';
import { EducationTimeline } from '@/components/timeline/education-timeline';
import { ResearchSection } from '@/components/research/research-section';
import { CertificationsSection } from '@/components/certifications/certifications-section';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">
        <HeroSection />

        <div className="animate-on-scroll">
          <AboutSection />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Skills"
              title="Core technical capabilities"
              description="Specialized technical skills across Artificial Intelligence, Data Science, Computer Vision, and Software Development."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <SkillsSection />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Projects"
              title="Featured work and case studies"
              description="Selected intelligent systems, software applications, and interactive project case studies."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <FeaturedProjectsSection />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Experience"
              title="Current professional timeline"
              description="Professional experience, internship history, and engineering roles."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <ExperienceTimeline />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Education"
              title="Academic progression"
              description="Academic foundation and degree studies in Computer Science."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <EducationTimeline />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Research"
              title="Current research interests"
              description="Primary research directions in Artificial Intelligence, Machine Learning, and Computer Vision."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <ResearchSection />
        </div>

        <div className="animate-on-scroll">
          <Surface>
            <SectionHeading
              eyebrow="Certifications"
              title="Verified certificates and training"
              description="Professional certifications, credentials, and technical training programs."
            />
          </Surface>
        </div>

        <div className="animate-on-scroll">
          <CertificationsSection />
        </div>

        <section id="primary-areas" className="animate-on-scroll grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <Surface className="portfolio-surface-soft">
            <SectionHeading
              eyebrow="Primary Areas"
              title="Core Technical Focus Areas"
              description="Primary technical domains driving software development, data science, and research projects."
            />
            <ul className="mt-6 flex flex-wrap gap-3">
              {profile.primaryAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border px-3 py-1 text-sm"
                  style={{
                    borderColor: 'var(--surface-border)',
                    background: 'var(--surface-bg)',
                    color: 'var(--body-text-color)',
                  }}
                >
                  {area}
                </li>
              ))}
            </ul>
          </Surface>

          <Surface className="portfolio-surface-soft">
            <SectionHeading
              eyebrow="Approach"
              title="Engineering Philosophy"
              description="Combining machine learning, computer vision, and modern software design to build reliable, practical applications."
            />
          </Surface>
        </section>
      </div>
    </main>
  );
}
