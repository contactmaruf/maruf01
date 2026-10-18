import React, { useEffect } from 'react';
import { ProjectItem } from '../types';
import { CloseIcon, CheckCircleIcon, ArrowRightIcon } from './Icons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onContactClick: (serviceCategory?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  // Lock body scroll and register escape keyboard listener
  useEffect(() => {
    if (!project) return;
    
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-project-title"
    >
      <div 
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden border border-[#E7E7E7] my-8 animate-scaleIn max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E7E7E7] bg-[#F8F9FB] shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 bg-red-50 text-[#E50914] text-xs font-bold rounded uppercase tracking-wider border border-red-100">
              {project.category}
            </span>
            <span className="px-2.5 py-1 bg-gray-200 text-[#171717] text-xs font-semibold rounded">
              {project.typeLabel}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#626262] hover:text-[#171717] hover:bg-gray-200 transition-colors cursor-pointer"
            aria-label="Close project modal"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Visual Banner */}
          <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-[#F8F9FB]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
              onError={(e) => {
                // Fallback graceful banner if image fails
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>

          {/* Modal Details */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 id="modal-project-title" className="text-xl sm:text-2xl font-extrabold text-[#171717] mb-2.5 leading-snug">
                {project.title}
              </h3>
              <p className="text-[#626262] leading-relaxed text-sm sm:text-base">
                {project.fullDesc}
              </p>
            </div>

            {/* Deliverables Box */}
            <div className="bg-[#F8F9FB] p-5 rounded-xl border border-[#E7E7E7]">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#171717] mb-3">
                Deliverables &amp; Technical Scope
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#171717]">
                    <CheckCircleIcon className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#626262] mb-2">
                Applied Technologies &amp; Methods
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="bg-white border border-[#E7E7E7] px-3 py-1 rounded text-xs font-medium text-[#171717]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-[#E7E7E7] bg-white flex flex-col sm:flex-row items-center justify-end gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-[#E7E7E7] text-[#171717] hover:bg-gray-50 text-sm font-semibold transition-colors cursor-pointer"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onContactClick(project.category);
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-[#E50914] hover:bg-[#C6000D] text-white text-sm font-semibold shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Discuss a Similar Project</span>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
