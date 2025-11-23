import React, { useEffect, useRef } from 'react';
import Button from '../ui/Button';
import { RocketLaunchIcon, SparklesIcon } from '@heroicons/react/24/outline';

const HeroSection = ({ heroData }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Force video to play
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  if (!heroData) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-12 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
            <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded mb-8"></div>
            <div className="flex gap-4 justify-center">
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
              <div className="h-12 w-32 bg-gray-300 dark:bg-gray-600 rounded"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleGetStarted = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLearnMore = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src="/assets/video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-white animate-fade-in">
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed animate-fade-in-up">
            {heroData.subtitle}
          </p>

          {/* Feature Highlights */}
          {heroData.features && (
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-12 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              {heroData.features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-center bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 border border-primary/30 hover:bg-white/20 hover:border-primary/50 transition-all duration-300 group"
                >
                  <div className="w-2 h-2 bg-primary rounded-full mr-2 group-hover:scale-125 transition-transform"></div>
                  <span className="text-sm md:text-base font-medium text-white">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '600ms' }}>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-sm text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">200+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;