import React, { useState } from 'react';
import { PageRoute } from '../types';
import { CloseIcon } from './Icons';

interface FooterProps {
  onNavigate: (page: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [activeLegalModal, setActiveLegalModal] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-[#171717] text-white pt-16 pb-12 border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#2A2A2A]">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#E50914] rounded flex items-center justify-center shrink-0">
                <span className="w-2 h-2 bg-white rounded-xs transform rotate-45"></span>
              </div>
              <span className="font-extrabold text-lg tracking-wide text-white">
                MARUF <span className="text-[#E50914]">SCALE</span> LABS
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              An AI-powered digital growth and creative solutions company helping businesses grow through AI automation, digital marketing, video production, and modern website development.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-gray-300 bg-[#222222] px-3 py-1.5 rounded-full border border-gray-700">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                Accepting Strategic Partnerships
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('portfolio')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Portfolio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Capabilities</h4>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  AI Solutions &amp; Automation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Digital Marketing &amp; Growth
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Video Production &amp; Creative
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-[#E50914] transition-colors cursor-pointer text-left">
                  Website Engineering &amp; UI/UX
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Inquiry */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Direct Contact</h4>
            <div className="space-y-3 text-sm text-gray-400">
              <p>
                Inquiries:
                <span className="text-white block font-mono text-xs mt-0.5 select-all">
                  contact@marufscalelabs.com
                </span>
              </p>
              <p>
                Operating Model:
                <span className="text-white block text-xs mt-0.5">
                  Global Distributed Operations
                </span>
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('contact')}
                  className="text-xs uppercase tracking-wider font-bold text-[#E50914] hover:text-white transition-colors cursor-pointer"
                >
                  Start Project Inquiry &rarr;
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>&copy; {currentYear} Maruf Scale Labs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button 
              onClick={() => setActiveLegalModal('privacy')} 
              className="hover:text-[#E50914] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span className="text-gray-600">&bull;</span>
            <button 
              onClick={() => setActiveLegalModal('terms')} 
              className="hover:text-[#E50914] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <span className="text-gray-600">&bull;</span>
            <span className="text-gray-500">Corporate Agency Architecture</span>
          </div>
        </div>
      </div>

      {/* Accessible Legal Policy Modal */}
      {activeLegalModal && (
        <div 
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
          onClick={() => setActiveLegalModal(null)}
          role="dialog"
          aria-modal="true"
        >
          <div 
            className="bg-white text-[#171717] w-full max-w-xl rounded-2xl p-6 sm:p-8 shadow-2xl border border-[#E7E7E7] animate-scaleIn max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[#E7E7E7] mb-4">
              <h3 className="text-lg font-bold text-[#171717]">
                {activeLegalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button 
                onClick={() => setActiveLegalModal(null)}
                className="p-1 rounded-lg text-gray-500 hover:text-[#171717] hover:bg-gray-100"
                aria-label="Close dialog"
              >
                <CloseIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs sm:text-sm text-[#626262] leading-relaxed">
              {activeLegalModal === 'privacy' ? (
                <>
                  <p>
                    Maruf Scale Labs respects client confidentiality. Information submitted through our inquiries is utilized strictly for communication, project scoping, and strategic service delivery.
                  </p>
                  <p>
                    We do not sell, rent, or distribute client contact credentials or proprietary project specifications to third-party data brokers.
                  </p>
                  <p>
                    For inquiries concerning data privacy policies or removal requests, contact privacy@marufscalelabs.com.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All project engagements entered into with Maruf Scale Labs are governed by mutual statements of work (SOW) defining milestones, deliverables, and service parameters.
                  </p>
                  <p>
                    Portfolio entries identified as Concept Projects or Demo Projects represent illustrative engineering prototypes and strategic capability demonstrations.
                  </p>
                  <p>
                    Intellectual property rights are transferred to clients upon completion and delivery as delineated in individual client agreements.
                  </p>
                </>
              )}
            </div>
            <div className="mt-6 pt-4 border-t border-[#E7E7E7] flex justify-end">
              <button
                onClick={() => setActiveLegalModal(null)}
                className="px-4 py-2 bg-[#171717] hover:bg-[#E50914] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
