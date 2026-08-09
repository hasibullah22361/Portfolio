import { HeroSection } from '@/components/sections/hero';
import { StatsSection } from '@/components/sections/stats-section';
import { WhatIBuildSection } from '@/components/sections/what-i-build';
import { SkillsSection } from '@/components/sections/skills';
import { SkillsChartSection } from '@/components/sections/skills-chart';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { TechDistributionSection } from '@/components/sections/tech-distribution';
import { GitHubActivitySection } from '@/components/sections/github-activity';
import { CertificationsSection } from '@/components/certifications/certifications-section';
import { ContactCTASection } from '@/components/sections/contact-cta';
import { SectionHeading } from '@/components/ui/section-heading';
import { Surface } from '@/components/ui/surface';

export default function HomePage() {
  return (
    <main className="min-h-screen px-4 py-12 sm:px-6 sm:py-16 lg:px-10">
      <div className="portfolio-shell flex flex-col gap-8">

        {/* ── 1. Hero ── */}
        <HeroSection />

        {/* ── 2. Animated Statistics ── */}
        <div className="animate-on-scroll">
          <StatsSection />
        </div>

        {/* ── 3. What I Build ── */}
        <div className="animate-on-scroll">
          <WhatIBuildSection />
        </div>

        {/* ── 4. Skills by Category ── */}
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

        {/* ── 5. Skills Focus Chart ── */}
        <div className="animate-on-scroll">
          <SkillsChartSection />
        </div>

        {/* ── 6. Featured Projects ── */}
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

        {/* ── 7. Technology Distribution ── */}
        <div className="animate-on-scroll">
          <TechDistributionSection />
        </div>

        {/* ── 8. GitHub Activity ── */}
        <div className="animate-on-scroll">
          <GitHubActivitySection />
        </div>

        {/* ── 9. Certifications & Achievements ── */}
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

        {/* ── 10. Contact CTA ── */}
        <div className="animate-on-scroll">
          <ContactCTASection />
        </div>

      </div>
    </main>
  );
}
