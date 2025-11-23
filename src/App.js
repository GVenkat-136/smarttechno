import React from 'react';
import { useEffect } from 'react';
import { useDataLoader } from './utils/dataLoader';
import LoadingSpinner from './components/ui/LoadingSpinner';
import ErrorBoundary from './components/ui/ErrorBoundary';
import { ThemeProvider } from './components/providers/ThemeProvider';

// Layout Components
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Section Components
import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import AboutSection from './components/sections/AboutSection';
import TeamSection from './components/sections/TeamSection';
import ContactSection from './components/sections/ContactSection';

// App content component that uses theme context
const AppContent = () => {
  const { data, loading, error } = useDataLoader();

  // Implement smooth scroll functionality for the entire app
  useEffect(() => {
    // Add smooth scroll behavior to the document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup function to reset scroll behavior
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Loading state with full page spinner and skeleton
  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white theme-transition flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <LoadingSpinner 
            size="xl" 
            text="Loading TechSolutions Pro..." 
            variant="spinner"
          />
          
          {/* Loading skeleton preview */}
          <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <div className="loading-skeleton h-4 rounded w-3/4 mx-auto"></div>
            <div className="loading-skeleton h-4 rounded w-1/2 mx-auto"></div>
            <div className="loading-skeleton h-4 rounded w-2/3 mx-auto"></div>
          </div>
          
          <p className="mt-6 text-gray-600 dark:text-gray-400 animate-pulse">
            Preparing your experience...
          </p>
        </div>
      </div>
    );
  }

  // Error state with fallback content and error boundary
  if (error) {
    return (
      <ErrorBoundary>
        <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
          <Navbar />
          <main className="pt-16">
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center max-w-2xl mx-auto px-6">
                <h1 className="text-4xl font-bold mb-4">
                  {data?.company?.name || 'TechSolutions Pro'}
                </h1>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 mb-6">
                  <p className="text-red-600 dark:text-red-400 font-medium mb-2">
                    ⚠️ Data Loading Error
                  </p>
                  <p className="text-red-700 dark:text-red-300 text-sm">
                    We're experiencing issues loading content, but the site is still functional with fallback data.
                  </p>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400">
                  {data?.company?.tagline || 'Innovative Technology Solutions'}
                </p>
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

  // Main app content with all sections
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white theme-transition">
        {/* Fixed Navigation */}
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
};

// Main App component wrapped with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;