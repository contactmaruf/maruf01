import React, { useState, useEffect } from 'react';
import { PageRoute } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ContactPage } from './pages/ContactPage';

export const App: React.FC = () => {
  // Parse initial route from URL hash or pathname
  const getInitialPage = (): PageRoute => {
    const hash = window.location.hash.replace('#/', '').replace('#', '').toLowerCase();
    const validRoutes: PageRoute[] = ['home', 'about', 'services', 'portfolio', 'contact'];
    if (validRoutes.includes(hash as PageRoute)) {
      return hash as PageRoute;
    }
    const path = window.location.pathname.replace('/', '').toLowerCase();
    if (validRoutes.includes(path as PageRoute)) {
      return path as PageRoute;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageRoute>(getInitialPage);
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string | undefined>(undefined);

  // Synchronize route with browser history and URL hash
  const navigateTo = (page: PageRoute, serviceCategory?: string) => {
    if (serviceCategory) {
      setSelectedServiceForContact(serviceCategory);
    }
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '/' : `/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Listen to browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const page = getInitialPage();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title dynamically
  useEffect(() => {
    const titles: Record<PageRoute, string> = {
      home: 'Maruf Scale Labs — Scale Smarter. Grow Faster.',
      about: 'About Us — Maruf Scale Labs | Built for Growth',
      services: 'Services — Maruf Scale Labs | AI, Marketing, Video & Web',
      portfolio: 'Portfolio — Maruf Scale Labs | Proof of Concepts & Projects',
      contact: 'Contact Us — Maruf Scale Labs | Let’s Talk About Your Next Big Idea',
    };
    document.title = titles[currentPage] || 'Maruf Scale Labs';
  }, [currentPage]);

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={navigateTo} />;
      case 'about':
        return <AboutPage onNavigate={navigateTo} />;
      case 'services':
        return <ServicesPage onNavigate={navigateTo} />;
      case 'portfolio':
        return <PortfolioPage onNavigate={navigateTo} />;
      case 'contact':
        return <ContactPage initialService={selectedServiceForContact} />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#171717] flex flex-col font-sans selection:bg-[#E50914] selection:text-white">
      {/* Sticky White Global Navigation */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Page Body */}
      <main className="flex-grow">
        {renderCurrentPage()}
      </main>

      {/* Charcoal Contrast Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;
