import React from 'react';
import { PageRoute } from '../types';
import { SparklesIcon, TrendingUpIcon, VideoIcon, CodeIcon, ArrowRightIcon } from '../components/Icons';

interface HomePageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenProject?: (projectId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#FFFFFF]">
      
      {/* 1. HERO SECTION (Predominantly White, 2-Column Desktop Grid) */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-16 sm:pb-24 lg:pt-20 lg:pb-28 border-b border-[#E7E7E7] bg-white">
        {/* Subtle geometric light-gray grid accent */}
        <div className="absolute inset-0 bg-[radial-gradient(#E7E7E7_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F9FB] border border-[#E7E7E7]">
                <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-[#171717]">
                  AI &bull; CREATIVITY &bull; DIGITAL GROWTH
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#171717] tracking-tight leading-[1.12] break-words text-balance">
                Scale Smarter.{' '}
                <span className="text-[#E50914]">Grow Faster.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-[#626262] max-w-2xl leading-relaxed">
                Maruf Scale Labs helps ambitious businesses unlock growth through AI-powered solutions, digital marketing, creative content, and scalable digital experiences.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <button
                  onClick={() => onNavigate('contact')}
                  className="bg-[#E50914] hover:bg-[#C6000D] active:scale-[0.98] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="bg-white hover:bg-[#F8F9FB] text-[#171717] border border-[#E7E7E7] hover:border-gray-300 px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center cursor-pointer"
                >
                  Explore Our Services
                </button>
              </div>

              {/* Supporting Trust Statement */}
              <div className="pt-4 border-t border-[#E7E7E7] max-w-lg">
                <p className="text-xs uppercase tracking-widest font-semibold text-[#626262]">
                  Strategy meets creativity. Technology drives growth.
                </p>
              </div>
            </div>

            {/* Right Column: Premium Bright Visual (White Canvas with Red Geometry & Connected Telemetry) */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-md bg-[#F8F9FB] border border-[#E7E7E7] rounded-3xl p-5 sm:p-7 shadow-[0_4px_24px_rgba(0,0,0,0.04)]">
                
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E7]">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E50914]"></span>
                    <span className="text-xs font-mono font-bold text-[#171717] tracking-wider uppercase">
                      Growth Architecture
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-semibold text-[#171717] bg-white border border-[#E7E7E7] px-2 py-0.5 rounded">
                    Active System
                  </span>
                </div>

                {/* SVG Connected Growth Network */}
                <div className="relative py-4">
                  <svg viewBox="0 0 340 120" className="w-full h-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="30" y1="60" x2="110" y2="30" stroke="#E7E7E7" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="30" y1="60" x2="110" y2="90" stroke="#E7E7E7" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="110" y1="30" x2="210" y2="40" stroke="#E50914" strokeWidth="2" />
                    <line x1="110" y1="90" x2="210" y2="80" stroke="#E7E7E7" strokeWidth="2" />
                    <line x1="210" y1="40" x2="300" y2="60" stroke="#E50914" strokeWidth="2.5" />
                    <line x1="210" y1="80" x2="300" y2="60" stroke="#E7E7E7" strokeWidth="2" />

                    {/* Nodes */}
                    <circle cx="30" cy="60" r="14" fill="#FFFFFF" stroke="#171717" strokeWidth="2.5" />
                    <text x="30" y="64" textAnchor="middle" fontSize="9" fontWeight="bold" fill="#171717">AI</text>

                    <circle cx="110" cy="30" r="12" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="2" />
                    <text x="110" y="34" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#626262">DATA</text>

                    <circle cx="110" cy="90" r="12" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="2" />
                    <text x="110" y="94" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#626262">OPS</text>

                    <circle cx="210" cy="40" r="13" fill="#FFFFFF" stroke="#E50914" strokeWidth="2" />
                    <text x="210" y="44" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#E50914">SCALE</text>

                    <circle cx="210" cy="80" r="12" fill="#FFFFFF" stroke="#E7E7E7" strokeWidth="2" />
                    <text x="210" y="84" textAnchor="middle" fontSize="8" fontWeight="bold" fill="#626262">MEDIA</text>

                    <circle cx="300" cy="60" r="16" fill="#E50914" />
                    <text x="300" y="64" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#FFFFFF">&uarr; ROI</text>
                  </svg>
                </div>

                {/* Growth Metric Showcase Cards */}
                <div className="space-y-3 pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-[#E7E7E7] shadow-xs flex items-center justify-between hover:border-[#E50914] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-red-50 text-[#E50914] flex items-center justify-center font-bold text-xs">
                        AI
                      </div>
                      <div>
                        <div className="text-[11px] text-[#626262] uppercase font-semibold">Workflow Automation</div>
                        <div className="text-sm font-bold text-[#171717]">Operational Efficiency</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-[#E50914] bg-red-50 px-2 py-0.5 rounded">Continuous</span>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-[#E7E7E7] shadow-xs flex items-center justify-between hover:border-[#E50914] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gray-100 text-[#171717] flex items-center justify-center font-bold text-xs">
                        <TrendingUpIcon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] text-[#626262] uppercase font-semibold">Digital Growth Funnels</div>
                        <div className="text-sm font-bold text-[#171717]">Customer Acquisition</div>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">High Impact</span>
                  </div>
                </div>

                {/* Bottom caption */}
                <div className="pt-4 mt-3 border-t border-[#E7E7E7] text-center">
                  <span className="text-xs text-[#626262]">
                    Engineered for modern high-performance businesses
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION SECTION */}
      <section className="py-16 sm:py-20 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-block px-3 py-1 bg-white border border-[#E7E7E7] rounded-full text-xs font-bold text-[#E50914] uppercase tracking-wider">
            Who We Are
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            Your Partner in Digital Growth
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-[#626262] leading-relaxed">
            At Maruf Scale Labs, we believe modern brand growth demands both analytical rigor and creative execution. We integrate generative AI capabilities, performance marketing, high-impact video storytelling, and fast web infrastructure into one cohesive ecosystem designed to help you outpace the competition.
          </p>
        </div>
      </section>

      {/* 3. SERVICES PREVIEW (4 Responsive Cards) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider">Our Core Pillars</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1 tracking-tight">
                Services Built for Modern Scale
              </h2>
            </div>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#E50914] hover:text-[#C6000D] transition-colors cursor-pointer"
            >
              View detailed service catalog <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1 */}
            <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#E50914] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FB] border border-[#E7E7E7] text-[#171717] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <SparklesIcon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2.5">
                  AI Solutions &amp; Automation
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                  Streamline operations, automate repetitive workflows, and leverage smart model integration to scale output without increasing headcount.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#E50914] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#E50914] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FB] border border-[#E7E7E7] text-[#171717] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <TrendingUpIcon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2.5">
                  Digital Marketing &amp; Growth
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                  Search engine visibility, targeted social media distribution, and data-backed creative testing to acquire qualified customer pipelines.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#E50914] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#E50914] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FB] border border-[#E7E7E7] text-[#171717] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <VideoIcon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2.5">
                  Video Production &amp; Creative
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                  High-converting motion graphics, promotional spots, and creative assets designed to capture audience attention in crowded digital spaces.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#E50914] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-[#E7E7E7] rounded-2xl p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#E50914] transition-all flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F8F9FB] border border-[#E7E7E7] text-[#171717] group-hover:bg-[#E50914] group-hover:text-white flex items-center justify-center transition-colors mb-5">
                  <CodeIcon className="w-6 h-6" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mb-2.5">
                  Website Design &amp; Development
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                  Fast, ultra-responsive corporate websites and landing pages engineered for intuitive user experiences, accessibility, and high conversion.
                </p>
              </div>
              <button
                onClick={() => onNavigate('services')}
                className="mt-6 pt-4 border-t border-[#E7E7E7] flex items-center justify-between text-xs font-bold text-[#171717] group-hover:text-[#E50914] transition-colors cursor-pointer"
              >
                <span>Learn more</span>
                <ArrowRightIcon className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE US */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider">The Value Proposition</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1 tracking-tight">
              Built Around Your Business Goals
            </h2>
            <p className="text-sm text-[#626262] mt-2">
              We eliminate fluff and replace guesswork with measurable roadmaps, transparent communication, and continuous delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl">
              <span className="text-2xl font-black text-[#E50914]">01</span>
              <h3 className="text-base font-bold text-[#171717] mt-3 mb-2">Strategy-First Execution</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Every line of code and marketing campaign starts with deep market research and alignment with your commercial objectives.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl">
              <span className="text-2xl font-black text-[#E50914]">02</span>
              <h3 className="text-base font-bold text-[#171717] mt-3 mb-2">AI-Powered Workflows</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                We harness advanced artificial intelligence models to accelerate research, design iterations, and automated execution.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl">
              <span className="text-2xl font-black text-[#E50914]">03</span>
              <h3 className="text-base font-bold text-[#171717] mt-3 mb-2">Creative &amp; Technical Precision</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                A multidisciplinary team where visual designers, video editors, copywriters, and software developers build side-by-side.
              </p>
            </div>

            <div className="p-6 bg-[#F8F9FB] border border-[#E7E7E7] rounded-2xl">
              <span className="text-2xl font-black text-[#E50914]">04</span>
              <h3 className="text-base font-bold text-[#171717] mt-3 mb-2">Continuous Improvement</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Launch is just day one. We test, monitor analytics, and optimize assets continuously for compounding performance.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. OUR PROCESS (4 Visually Connected Steps) */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider">How We Work</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1 tracking-tight">
              A Direct Path From Vision to Scale
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-[#E50914] tracking-widest uppercase mb-2">Step 01</div>
              <h3 className="text-base font-bold text-[#171717] mb-1.5">Discover</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                We audit your digital footprint, analyze customer segments, and understand technical requirements.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-[#E50914] tracking-widest uppercase mb-2">Step 02</div>
              <h3 className="text-base font-bold text-[#171717] mb-1.5">Strategize</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Formulating the exact roadmap: technology architecture, content themes, campaign budgets, and KPI milestones.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-[#E50914] tracking-widest uppercase mb-2">Step 03</div>
              <h3 className="text-base font-bold text-[#171717] mb-1.5">Create</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Engineering websites, training AI models, producing high-fidelity video, and launching digital assets.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <div className="text-xs font-mono font-bold text-[#E50914] tracking-widest uppercase mb-2">Step 04</div>
              <h3 className="text-base font-bold text-[#171717] mb-1.5">Scale</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Iterating on data insights, automating routine overhead, and scaling outreach for sustained commercial growth.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold text-[#E50914] uppercase tracking-wider">Concept Showcase</span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1 tracking-tight">
                Featured Demonstration Projects
              </h2>
            </div>
            <button
              onClick={() => onNavigate('portfolio')}
              className="mt-3 md:mt-0 text-sm font-semibold text-[#E50914] hover:text-[#C6000D] flex items-center gap-1.5 cursor-pointer"
            >
              Browse all 6 projects <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div 
              onClick={() => onNavigate('portfolio')} 
              className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#E50914] transition-all cursor-pointer group"
            >
              <div className="relative h-48 bg-[#F8F9FB] overflow-hidden">
                <img
                  src="/src/assets/images/ai_workflow_concept_1792303614823.jpg"
                  alt="AI Workflow Concept"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-[11px] font-bold px-2 py-0.5 rounded text-[#171717] shadow-xs">
                  Concept Project
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">AI &amp; Automation</span>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mt-1 group-hover:text-[#E50914] transition-colors">
                  AI-Powered Workflow Concept
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] mt-2 line-clamp-2">
                  Autonomous content and data triage system streamlining multi-channel customer communications.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              onClick={() => onNavigate('portfolio')} 
              className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#E50914] transition-all cursor-pointer group"
            >
              <div className="relative h-48 bg-[#F8F9FB] overflow-hidden">
                <img
                  src="/src/assets/images/website_redesign_1792303615661.jpg"
                  alt="Corporate Website Redesign"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-[11px] font-bold px-2 py-0.5 rounded text-[#171717] shadow-xs">
                  Demo Project
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Web Design</span>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mt-1 group-hover:text-[#E50914] transition-colors">
                  Corporate Website Redesign
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] mt-2 line-clamp-2">
                  High-speed, modern SaaS corporate portal with sub-second page loads and complete responsive adaptation.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              onClick={() => onNavigate('portfolio')} 
              className="bg-white border border-[#E7E7E7] rounded-2xl overflow-hidden shadow-xs hover:shadow-md hover:border-[#E50914] transition-all cursor-pointer group"
            >
              <div className="relative h-48 bg-[#F8F9FB] overflow-hidden">
                <img
                  src="/src/assets/images/motion_graphics_brand_1792303615246.jpg"
                  alt="Motion Graphics Brand Explainer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-white/95 text-[11px] font-bold px-2 py-0.5 rounded text-[#171717] shadow-xs">
                  Concept Project
                </span>
              </div>
              <div className="p-5">
                <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Video &amp; Motion Graphics</span>
                <h3 className="text-base sm:text-lg font-bold text-[#171717] mt-1 group-hover:text-[#E50914] transition-colors">
                  Motion Graphics Brand Explainer
                </h3>
                <p className="text-xs sm:text-sm text-[#626262] mt-2 line-clamp-2">
                  Dynamic visual storytelling designed for product launch campaigns and investor presentations.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FINAL CONTRAST CTA (Strictly Charcoal #171717 with White & Red Text) */}
      <section className="py-16 sm:py-20 bg-[#171717] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E50914]">
            Start Your Next Phase
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Ready to Build Something That Scales?
          </h2>
          <p className="text-gray-300 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Let's turn your next big idea into a growth opportunity with cutting-edge AI and precision creative strategy.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#E50914] hover:bg-[#C6000D] text-white px-8 py-3.5 rounded-xl font-bold text-sm sm:text-base shadow-lg transition-all cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
