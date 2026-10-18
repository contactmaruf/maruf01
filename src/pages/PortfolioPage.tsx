import React, { useState } from 'react';
import { PageRoute, ProjectItem } from '../types';
import { ProjectModal } from '../components/ProjectModal';
import { ArrowRightIcon } from '../components/Icons';

interface PortfolioPageProps {
  onNavigate: (page: PageRoute, serviceCategory?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // 6 Demonstration Concept Projects (Accurately & Honestly Labeled)
  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      title: 'AI-Powered Workflow Concept',
      category: 'AI & Automation',
      typeLabel: 'Concept Project',
      shortDesc: 'Automated data categorization and client triage pipeline built with custom LLM connectors.',
      fullDesc: 'A demonstration architecture designed for high-volume enterprise operations. It integrates LLM-based parsing with internal ERP hooks to triage inbound client tickets, generate draft summaries, and route high-priority accounts autonomously.',
      deliverables: ['Custom LLM Prompt Pipelines', 'Automated Triage Logic', 'Audit Trail Dashboard', 'API Webhook Architecture'],
      tools: ['OpenAI API', 'Python', 'FastAPI', 'Redis', 'React'],
      image: '/src/assets/images/ai_workflow_concept_1792303614823.jpg',
    },
    {
      id: 'proj-2',
      title: 'Premium Beverage Advertising Campaign',
      category: 'Marketing',
      typeLabel: 'Demo Project',
      shortDesc: 'Multi-channel acquisition concept pairing high-contrast studio imagery with targeted search keywords.',
      fullDesc: 'A comprehensive growth campaign concept created for direct-to-consumer luxury beverage branding. Combines precise demographic positioning, targeted visual storytelling, and retargeting workflows designed for sustained engagement.',
      deliverables: ['Creative Ad Variations', 'Audience Segmentation Model', 'High-Converting Landing Pages', 'Attribution Matrix'],
      tools: ['Meta Ads Manager', 'Google Ads', 'Figma', 'Google Analytics 4'],
      image: '/src/assets/images/beverage_campaign_1792303615917.jpg',
    },
    {
      id: 'proj-3',
      title: 'Corporate Website Redesign',
      category: 'Web Design',
      typeLabel: 'Demo Project',
      shortDesc: 'High-speed corporate platform with minimalist typography, white-space balance, and top performance metrics.',
      fullDesc: 'A flagship corporate web presence architecture developed to showcase engineering excellence. Designed using a strict white aesthetic with red highlights, complete responsive adaptation, and semantic accessibility standards.',
      deliverables: ['Responsive Web Portal', 'Design System Library', 'Interactive Component Specs', 'Accessibility Compliance'],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Figma'],
      image: '/src/assets/images/website_redesign_1792303615661.jpg',
    },
    {
      id: 'proj-4',
      title: 'Social Media Marketing Campaign',
      category: 'Marketing',
      typeLabel: 'Concept Project',
      shortDesc: 'Omnichannel content rollout strategy leveraging interactive short-form video sequences.',
      fullDesc: 'An integrated social distribution model engineered to expand organic brand reach across LinkedIn, Instagram, and YouTube. Includes content pillars, scheduling frameworks, and iterative engagement tracking mechanisms.',
      deliverables: ['30-Day Content Roadmap', 'Platform-Specific Formats', 'Video Motion Hooks', 'Audience Retargeting Setup'],
      tools: ['Adobe Premiere', 'Canva Pro', 'Sprout Social', 'CapCut'],
      image: '/src/assets/images/social_marketing_campaign_1792303631709.jpg',
    },
    {
      id: 'proj-5',
      title: 'Motion Graphics Brand Explainer',
      category: 'Video & Motion Graphics',
      typeLabel: 'Concept Project',
      shortDesc: 'Kinetic typography and 3D ribbon animation introducing complex technical infrastructure in 60 seconds.',
      fullDesc: 'A dynamic visual narrative crafted to demystify cloud infrastructure for non-technical executive buyers. Utilizes smooth kinetic vectors, custom sound design, and on-brand red visual cues.',
      deliverables: ['60s Master Commercial Spot', '15s Social Cutdowns', 'Custom Vector Illustrations', 'Voiceover Master Track'],
      tools: ['After Effects', 'Illustrator', 'Cinema 4D', 'Audition'],
      image: '/src/assets/images/motion_graphics_brand_1792303615246.jpg',
    },
    {
      id: 'proj-6',
      title: 'High-Converting Landing Page Concept',
      category: 'Web Design',
      typeLabel: 'Demo Project',
      shortDesc: 'Optimized conversion funnel engineered with interactive product calculators and zero layout shifts.',
      fullDesc: 'An interactive conversion page prototype created to turn cold traffic into sales-qualified meetings. Incorporates responsive pricing comparisons, FAQ accordions, and frictionless lead capture forms.',
      deliverables: ['Funnel Architecture', 'A/B Testing Variants', 'Interactive ROI Estimator', 'Lead Capture Endpoints'],
      tools: ['React', 'Tailwind CSS', 'HTML5', 'PostCSS'],
      image: '/src/assets/images/landing_page_concept_1792303631830.jpg',
    },
  ];

  const filterCategories = [
    { label: 'All Projects', value: 'All' },
    { label: 'AI & Automation', value: 'AI & Automation' },
    { label: 'Marketing', value: 'Marketing' },
    { label: 'Video & Motion Graphics', value: 'Video & Motion Graphics' },
    { label: 'Web Design', value: 'Web Design' },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((item) => item.category === activeFilter);

  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E50914]">Selected Works &amp; Concepts</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight text-balance">
            Creative Thinking. Digital Execution.{' '}
            <span className="text-[#E50914]">Real Possibilities.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] leading-relaxed max-w-2xl mx-auto">
            Explore our architectural concepts, creative campaigns, and engineering prototypes. Every project is labeled transparently as a concept or demo build.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-6 bg-white border-b border-[#E7E7E7] sticky top-20 z-30 bg-white/95 backdrop-blur-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {filterCategories.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveFilter(tab.value)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-150 cursor-pointer ${
                  activeFilter === tab.value
                    ? 'bg-[#E50914] text-white shadow-sm'
                    : 'bg-[#F8F9FB] text-[#171717] border border-[#E7E7E7] hover:border-gray-400'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#E50914] transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 bg-[#F8F9FB] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-white/95 text-[11px] font-bold text-[#171717] px-2.5 py-1 rounded shadow-xs">
                        {project.typeLabel}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#E50914] mb-1">
                      {project.category}
                    </div>
                    <h3 className="text-lg font-bold text-[#171717] group-hover:text-[#E50914] transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#626262] leading-relaxed line-clamp-3">
                      {project.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="w-full py-2.5 rounded-lg border border-[#E7E7E7] hover:border-[#E50914] hover:bg-red-50/50 text-xs sm:text-sm font-semibold text-[#171717] hover:text-[#E50914] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>View Project Overview</span>
                    <ArrowRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 sm:py-20 bg-[#F8F9FB] border-t border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Let's Collaborate</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717]">
            Have a Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#626262] max-w-lg mx-auto">
            Whether you need AI automation, campaign execution, or an enterprise website redesign, our team is ready to assist.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#E50914] hover:bg-[#C6000D] active:scale-[0.98] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              Let's Work Together <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onContactClick={(serviceCategory) => onNavigate('contact', serviceCategory)}
      />

    </div>
  );
};
