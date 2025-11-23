import React, { useEffect } from 'react';
import { useDataLoader } from './utils/dataLoader';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  const { data, loading, error } = useDataLoader();

  // Implement smooth scroll functionality
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Add scroll animation observer for elements with animate-on-scroll class
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    // Observe all elements with animate-on-scroll class
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, [data]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <LoadingSpinner 
            size="xl" 
            text="Loading TechSolutions Pro..." 
            variant="spinner"
          />
          
          <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="loading-skeleton h-4 rounded w-3/4 mx-auto"></div>
            <div className="loading-skeleton h-4 rounded w-1/2 mx-auto"></div>
            <div className="loading-skeleton h-4 rounded w-2/3 mx-auto"></div>
          </div>
          
          <p className="mt-6 text-navy animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-cream text-navy">
          <Navbar />
          <main className="pt-16">
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center max-w-2xl mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">
                  {data?.company?.name || 'TechSolutions Pro'}
                </h1>
                <div className="bg-red-900/20 border border-red-800 rounded-lg p-6 mb-6">
                  <p className="text-red-400 font-medium mb-2">
                    ⚠️ Data Loading Error
                  </p>
                  <p className="text-red-300 text-sm">
                    We're experiencing issues loading content.
                  </p>
                </div>
                <button 
                  onClick={() => window.location.reload()}
                  className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-700 hover:shadow-lg transition-all duration-300"
                >
                  Retry Loading
                </button>
              </div>
            </div>
          </main>
          <Footer footerData={data?.footer} />
        </div>
      </ErrorBoundary>
    );
  }

  // Main app content
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-cream text-navy">
        <Navbar />
        <main>
          <HeroSection heroData={data.hero} />
          <ServicesSection servicesData={data.services} />
          <AboutSection aboutData={data.about} />
          <TeamSection teamData={data.team} />
          <ContactSection />
        </main>
        <Footer footerData={data.footer} />
      </div>
    </ErrorBoundary>
  );
}

export default App;