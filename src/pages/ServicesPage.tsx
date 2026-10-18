import React from 'react';
import { PageRoute } from '../types';
import { SparklesIcon, TrendingUpIcon, VideoIcon, CodeIcon, CheckCircleIcon, ArrowRightIcon } from '../components/Icons';

interface ServicesPageProps {
  onNavigate: (page: PageRoute, serviceCategory?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const workflowSteps = [
    { step: '01', title: 'Discovery', desc: 'Scope alignment, digital audit, and objective mapping.' },
    { step: '02', title: 'Planning', desc: 'Sprint schedules, wireframes, and architecture definition.' },
    { step: '03', title: 'Production', desc: 'Rapid development, creative production, and AI integration.' },
    { step: '04', title: 'Review', desc: 'Cross-device QA testing, stakeholder feedback, and fine-tuning.' },
    { step: '05', title: 'Delivery', desc: 'Live deployment, documentation handover, and ongoing metrics.' },
  ];

  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="py-14 sm:py-20 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E50914]">Capabilities &amp; Solutions</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight text-balance">
            Digital Solutions Designed to <span className="text-[#E50914]">Scale Your Business.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#626262] leading-relaxed max-w-2xl mx-auto">
            Practical AI integration, targeted growth marketing, motion content, and high-performance digital engineering.
          </p>
        </div>
      </section>

      {/* 4 Detailed Service Sections */}
      <div className="divide-y divide-[#E7E7E7]">
        
        {/* Service 1: AI Solutions & Automation */}
        <section id="ai-automation" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center border border-red-100">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Service 01</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  AI Solutions &amp; Automation
                </h2>
                <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                  We empower organizations to incorporate modern artificial intelligence into their day-to-day operations, eliminating manual friction points and maximizing knowledge worker productivity.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact', 'AI Solutions & Automation')}
                    className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#E50914] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Discuss This Service <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] mb-4">
                  Deliverables &amp; Focus Areas
                </h3>
                <div className="space-y-3">
                  {[
                    'AI workflow automation to eliminate repetitive operational tasks',
                    'AI-assisted business processes tailored to your specific tools',
                    'Intelligent productivity solutions and custom knowledge retrieval',
                    'AI content workflows for accelerated media generation',
                    'Business process optimization and AI readiness assessments',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
                      <CheckCircleIcon className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Service 2: Digital Marketing & Growth */}
        <section id="digital-marketing" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center border border-red-100">
                  <TrendingUpIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Service 02</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  Digital Marketing &amp; Growth
                </h2>
                <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                  Data-guided multi-channel campaigns designed to amplify organic reach and systematically attract prospects ready to engage with your products and services.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact', 'Digital Marketing & Growth')}
                    className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#E50914] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Discuss This Service <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] mb-4">
                  Deliverables &amp; Focus Areas
                </h3>
                <div className="space-y-3">
                  {[
                    'Search engine optimization (SEO) architecture and organic authority building',
                    'Social media marketing with continuous demographic audience targeting',
                    'Content strategy focused on industry thought leadership',
                    'Campaign creative development and iterative A/B testing',
                    'Performance-focused marketing support and attribution insights',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
                      <CheckCircleIcon className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Service 3: Video Production & Creative Content */}
        <section id="video-creative" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center border border-red-100">
                  <VideoIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Service 03</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  Video Production &amp; Creative Content
                </h2>
                <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                  Compelling motion design and branded video assets crafted to communicate complex corporate value propositions with clarity and emotional resonance.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact', 'Video Production & Creative Content')}
                    className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#E50914] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Discuss This Service <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] mb-4">
                  Deliverables &amp; Focus Areas
                </h3>
                <div className="space-y-3">
                  {[
                    'AI-assisted video production and prompt-engineered visual generation',
                    'Promotional and advertising videos optimized for conversions',
                    'Motion graphics, title sequences, and graphic explanations',
                    'Social media video content optimized for vertical feeds',
                    'Creative campaign asset libraries for marketing teams',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
                      <CheckCircleIcon className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Service 4: Website Design & Development */}
        <section id="web-development" className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              <div className="lg:col-span-5 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center border border-red-100">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Service 04</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
                  Website Design &amp; Development
                </h2>
                <p className="text-sm sm:text-base text-[#626262] leading-relaxed">
                  Clean-coded, accessible, lightning-fast web presences built on modern stacks that turn visitors into long-term commercial relationships.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('contact', 'Website Design & Development')}
                    className="inline-flex items-center gap-2 bg-[#171717] hover:bg-[#E50914] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors cursor-pointer"
                  >
                    Discuss This Service <ArrowRightIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl p-6 sm:p-8">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#171717] mb-4">
                  Deliverables &amp; Focus Areas
                </h3>
                <div className="space-y-3">
                  {[
                    'Corporate website design with clean typography and whitespace systems',
                    'Responsive website development adapted to mobile, tablet, and desktop',
                    'High-conversion landing pages engineered for specific marketing funnels',
                    'UI/UX design prototypes with validated user journeys',
                    'Website usability and performance improvements for rapid page loads',
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#171717]">
                      <CheckCircleIcon className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>

      {/* Project Workflow: Desktop Horizontal & Mobile Vertical Timeline */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Workflow Timeline</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1">
              Discovery &rarr; Planning &rarr; Production &rarr; Review &rarr; Delivery
            </h2>
            <p className="text-xs sm:text-sm text-[#626262] mt-2">
              A transparent 5-phase delivery model ensuring accountability at each milestone.
            </p>
          </div>

          {/* Desktop Timeline (Horizontal with line bridge) */}
          <div className="hidden md:grid md:grid-cols-5 gap-3 relative">
            <div className="absolute top-7 left-10 right-10 h-0.5 bg-[#E7E7E7] z-0" />
            
            {workflowSteps.map((stage, idx) => (
              <div key={idx} className="relative z-10 bg-white border border-[#E7E7E7] p-5 rounded-2xl shadow-xs text-center flex flex-col items-center">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-200 text-[#E50914] text-xs font-mono font-bold flex items-center justify-center mb-3">
                  {stage.step}
                </div>
                <h3 className="text-sm font-bold text-[#171717] mb-1">{stage.title}</h3>
                <p className="text-xs text-[#626262] leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Mobile Timeline (Vertical connected timeline) */}
          <div className="md:hidden space-y-4 relative pl-6 border-l-2 border-[#E7E7E7] ml-3">
            {workflowSteps.map((stage, idx) => (
              <div key={idx} className="relative bg-white border border-[#E7E7E7] p-4 rounded-xl shadow-xs">
                <div className="absolute -left-[31px] top-4 w-5 h-5 rounded-full bg-[#E50914] text-white text-[10px] font-bold flex items-center justify-center">
                  {idx + 1}
                </div>
                <h3 className="text-sm font-bold text-[#171717]">{stage.title}</h3>
                <p className="text-xs text-[#626262] mt-1 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#171717]">
            Looking for a Custom Combination of Services?
          </h2>
          <p className="text-sm sm:text-base text-[#626262] max-w-xl mx-auto">
            We frequently assemble tailored hybrid scopes combining automated workflows, custom websites, and ongoing growth marketing.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#E50914] hover:bg-[#C6000D] active:scale-[0.98] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              Request Custom Proposal <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
