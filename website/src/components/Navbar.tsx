import React, { useState, useEffect } from 'react';
import { PageRoute } from '../types';
import { MenuIcon, CloseIcon } from './Icons';

interface NavbarProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile drawer on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navLinks: { label: string; page: PageRoute }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Portfolio', page: 'portfolio' },
    { label: 'Contact', page: 'contact' },
  ];

  const handleLinkClick = (page: PageRoute) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FFFFFF] border-b border-[#E7E7E7] shadow-[0_1px_6px_rgba(0,0,0,0.03)] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Zone 1: Brand Wordmark with Geometric Red Accent */}
          <button
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914] rounded-md p-1 group"
            aria-label="Maruf Scale Labs Homepage"
          >
            <div className="w-8 h-8 rounded bg-[#171717] flex items-center justify-center transition-colors duration-200 group-hover:bg-[#E50914] shrink-0">
              <span className="w-2.5 h-2.5 bg-[#E50914] group-hover:bg-white rounded-xs transform rotate-45 transition-colors"></span>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-[17px] sm:text-[18px] tracking-wide text-[#171717] leading-none whitespace-nowrap">
                MARUF <span className="text-[#E50914]">SCALE</span> LABS
              </span>
            </div>
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => handleLinkClick(item.page)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`px-3.5 py-2 text-sm transition-all duration-150 relative whitespace-nowrap font-medium ${
                    isActive
                      ? 'text-[#E50914] font-semibold'
                      : 'text-[#171717] hover:text-[#E50914]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#E50914] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Primary CTA */}
          <div className="hidden md:flex items-center shrink-0">
            <button
              onClick={() => handleLinkClick('contact')}
              className="bg-[#E50914] hover:bg-[#C6000D] active:scale-[0.98] text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-[0_2px_8px_rgba(229,9,20,0.18)] whitespace-nowrap cursor-pointer"
            >
              Let's Talk
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#171717] hover:text-[#E50914] hover:bg-[#F8F9FB] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E50914]"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-panel"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <CloseIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="md:hidden bg-white border-b border-[#E7E7E7] px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          {navLinks.map((item) => {
            const isActive = currentPage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleLinkClick(item.page)}
                className={`block w-full text-left px-4 py-3 rounded-lg text-base transition-colors ${
                  isActive
                    ? 'bg-[#F8F9FB] text-[#E50914] font-bold border-l-4 border-[#E50914]'
                    : 'text-[#171717] font-medium hover:bg-[#F8F9FB] hover:text-[#E50914]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full bg-[#E50914] hover:bg-[#C6000D] text-white py-3 rounded-lg text-center font-bold text-sm shadow-sm transition-colors cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
