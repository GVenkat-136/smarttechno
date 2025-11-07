import React, { useState, useEffect, useRef } from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import { useScrollAnimation, useStaggeredAnimation } from '../../utils/scrollAnimations';

const AboutSection = ({ aboutData }) => {
  const [animatedStats, setAnimatedStats] = useState({});
  
  // Enhanced scroll animations
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });
  const statsAnimation = useScrollAnimation({ threshold: 0.3 });
  const valuesAnimation = useStaggeredAnimation(
    aboutData?.values?.length || 4, 
    100, 
    { threshold: 0.2 }
  );
  
  const sectionRef = useRef(null);

  // Start stat animations when stats section becomes visible
  useEffect(() => {
    if (statsAnimation.isVisible && aboutData?.stats) {
      aboutData.stats.forEach((stat, index) => {
        setTimeout(() => {
          animateStatValue(stat.value, index);
        }, index * 200);
      });
    }
  }, [statsAnimation.isVisible, aboutData]);

  const animateStatValue = (finalValue, index) => {
    const numericValue = parseInt(finalValue.replace(/\D/g, ''));
    const suffix = finalValue.replace(/\d/g, '');
    let current = 0;
    const increment = numericValue / 30; // Animation duration control
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        current = numericValue;
        clearInterval(timer);
      }
      
      setAnimatedStats(prev => ({
        ...prev,
        [index]: Math.floor(current) + suffix
      }));
    }, 50);
  };

  if (!aboutData) {
    return (
      <section id="about" className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-2"></div>
                <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded mb-8"></div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {[...Array(4)].map((_, index) => (
                  <div key={index} className="bg-gray-300 dark:bg-gray-600 rounded-lg h-24"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 relative overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl transform -translate-x-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-primary/10 rounded-full blur-3xl transform translate-x-1/2 animate-pulse-slow animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About <span className="bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">TechSolutions Pro</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming businesses through innovative technology solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div 
            ref={contentAnimation.ref}
            className={`transition-all duration-800 gpu-accelerated ${
              contentAnimation.isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {aboutData.title}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Mission and Vision */}
            {(aboutData.mission || aboutData.vision) && (
              <div className="space-y-6 mb-8">
                {aboutData.mission && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <HeroIcons.RocketLaunchIcon className="w-6 h-6 text-primary mr-2" />
                      Our Mission
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {aboutData.mission}
                    </p>
                  </div>
                )}
                
                {aboutData.vision && (
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center">
                      <HeroIcons.EyeIcon className="w-6 h-6 text-primary mr-2" />
                      Our Vision
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {aboutData.vision}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Values */}
            {aboutData.values && (
              <div 
                ref={valuesAnimation.ref}
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              >
                {aboutData.values.map((value, index) => (
                  <div 
                    key={index}
                    className={`bg-white dark:bg-gray-700 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-600 transition-all duration-500 gpu-accelerated hover:shadow-lg hover:-translate-y-1 ${
                      valuesAnimation.isItemVisible(index)
                        ? 'opacity-100 transform translate-y-0'
                        : 'opacity-0 transform translate-y-4'
                    }`}
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column - Image and Statistics */}
          <div 
            ref={statsAnimation.ref}
            className={`transition-all duration-800 delay-200 gpu-accelerated ${
              statsAnimation.isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-8'
            }`}
          >
            {/* Featured Image */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-3xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300"></div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="relative rounded-2xl shadow-2xl w-full h-96 object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>

            {/* Info Card with Enhanced Design */}
            <div className="relative group bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800 rounded-2xl p-8 border border-primary/20 dark:border-primary/30 animate-fade-in-slow gpu-accelerated hover:shadow-2xl transition-all duration-300 overflow-hidden" style={{ animationDelay: '800ms' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                  <span className="text-2xl">✨</span>
                  Why Choose Us?
                </h3>
                <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-600 rounded-lg mr-4 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <HeroIcons.CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base leading-relaxed">Expert team with 10+ years experience</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mr-4 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <HeroIcons.CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base leading-relaxed">Cutting-edge technology solutions</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-primary rounded-lg mr-4 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <HeroIcons.CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base leading-relaxed">24/7 support and maintenance</span>
                  </li>
                  <li className="flex items-start group/item">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary via-purple-600 to-blue-600 rounded-lg mr-4 flex items-center justify-center flex-shrink-0 group-hover/item:scale-110 transition-transform">
                      <HeroIcons.CheckIcon className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-base leading-relaxed">Proven track record of success</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;