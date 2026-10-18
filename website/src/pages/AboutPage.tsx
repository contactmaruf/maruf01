import React from 'react';
import { PageRoute } from '../types';
import { ArrowRightIcon } from '../components/Icons';

interface AboutPageProps {
  onNavigate: (page: PageRoute) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="bg-white">
      
      {/* Header Banner */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E50914]">About Maruf Scale Labs</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#171717] tracking-tight text-balance">
            Built for Growth. <span className="text-[#E50914]">Driven by Innovation.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#626262] leading-relaxed pt-2 max-w-2xl mx-auto">
            Maruf Scale Labs brings together creative thinking, modern technology, and strategic execution to help businesses strengthen their digital presence and scale with confidence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs hover:border-[#E50914] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E50914] flex items-center justify-center font-bold text-sm mb-6 border border-red-100">
                01
              </div>
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Our Mission</h2>
              <blockquote className="text-[#626262] text-base leading-relaxed italic border-l-2 border-[#E50914] pl-4">
                “To empower businesses with innovative digital solutions that make growth more accessible, efficient, and sustainable.”
              </blockquote>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E7E7E7] shadow-xs hover:border-[#E50914] transition-colors">
              <div className="w-10 h-10 rounded-lg bg-red-50 text-[#E50914] flex items-center justify-center font-bold text-sm mb-6 border border-red-100">
                02
              </div>
              <h2 className="text-2xl font-bold text-[#171717] mb-4">Our Vision</h2>
              <blockquote className="text-[#626262] text-base leading-relaxed italic border-l-2 border-[#E50914] pl-4">
                “To become a trusted partner for ambitious businesses seeking meaningful growth through technology and creativity.”
              </blockquote>
            </div>

          </div>
        </div>
      </section>

      {/* Core Values (5 Cards) */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB] border-b border-[#E7E7E7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Principles</span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] mt-1 tracking-tight">
              Our Core Values
            </h2>
            <p className="text-sm text-[#626262] mt-2">
              The behavioral standards that steer every engagement, communication, and technical decision.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            
            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E50914]">01</span>
              <h3 className="text-base font-bold text-[#171717] mt-2 mb-2">Innovation</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Embracing artificial intelligence and modern tooling to build next-generation customer touchpoints.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E50914]">02</span>
              <h3 className="text-base font-bold text-[#171717] mt-2 mb-2">Transparency</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Clear expectations, honest metrics, no fabricated vanity numbers, and upfront communication.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E50914]">03</span>
              <h3 className="text-base font-bold text-[#171717] mt-2 mb-2">Quality</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Delivering polished, high-performing websites, campaigns, and content that represent your brand with pride.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E50914]">04</span>
              <h3 className="text-base font-bold text-[#171717] mt-2 mb-2">Collaboration</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Working as a dedicated strategic ally with your internal team to realize long-term business goals.
              </p>
            </div>

            <div className="bg-white border border-[#E7E7E7] p-6 rounded-2xl shadow-xs">
              <span className="text-xs font-mono font-bold text-[#E50914]">05</span>
              <h3 className="text-base font-bold text-[#171717] mt-2 mb-2">Continuous Improvement</h3>
              <p className="text-xs sm:text-sm text-[#626262] leading-relaxed">
                Relentlessly refining workflows, optimizing conversion rates, and advancing technical standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#E7E7E7]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E50914]">Methodology</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#171717] tracking-tight">
            How We Approach Business Growth
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-[#626262] leading-relaxed">
            <p>
              At Maruf Scale Labs, our methodology combines foundational commercial objectives with creative experimentation and AI-assisted execution. We avoid pre-baked formulas because no two market positions are identical.
            </p>
            <p>
              By connecting AI-driven workflows with human storytelling and clean software engineering, we remove bottlenecks that traditionally slow down agency turnaround times. This ensures your projects move from whiteboard concept to live deployment swiftly, cleanly, and reliably.
            </p>
            <p>
              Every sprint focuses on measurable business outcomes: operational efficiency, brand distinction, and qualified lead generation.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 sm:py-24 bg-[#F8F9FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717]">
            Have a Vision? <span className="text-[#E50914]">Let's Build It Together.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#626262] max-w-lg mx-auto">
            Connect with our team to explore tailor-made AI, marketing, video production, or website development solutions.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#E50914] hover:bg-[#C6000D] active:scale-[0.98] text-white px-8 py-3.5 rounded-xl font-bold text-base shadow-sm hover:shadow-lg hover:shadow-red-500/20 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              Contact Maruf Scale Labs
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
