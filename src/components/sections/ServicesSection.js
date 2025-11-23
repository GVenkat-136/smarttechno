import React from 'react';
import { useScrollAnimation } from '../../utils/scrollAnimations';

const ServicesSection = ({ servicesData }) => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  // Service images mapping
  const serviceImages = {
    'ai': 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80',
    'mobile': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    'web': 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80',
    'cloud': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&auto=format&fit=crop&q=80',
    'embedded': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
  };

  if (!servicesData || !Array.isArray(servicesData)) {
    return (
      <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 dark:bg-gray-600 rounded mb-4 max-w-md mx-auto"></div>
              <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded max-w-2xl mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-16 px-6 transition-all duration-600 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to transform and elevate your business
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 0;
            const imageUrl = serviceImages[service.id] || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80';
            
            return (
              <div 
                key={service.id}
                className="group relative"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-0 items-stretch min-h-[500px] ${index !== 0 ? 'border-t border-gray-200 dark:border-gray-800' : ''}`}>
                  {/* Image */}
                  <div 
                    className={`relative ${isEven ? 'lg:col-span-2 lg:order-1' : 'lg:col-span-2 lg:order-2'} overflow-hidden`}
                  >
                    <div className="relative h-full min-h-[400px] lg:min-h-full">
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-transparent z-10"></div>
                      
                      {/* Image */}
                      <img 
                        src={imageUrl}
                        alt={service.title}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      
                      {/* Service Number Overlay */}
                      <div className="absolute bottom-8 left-8 z-20">
                        <div className="text-8xl md:text-9xl font-bold text-white/10">
                          0{index + 1}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div 
                    className={`${isEven ? 'lg:col-span-3 lg:order-2' : 'lg:col-span-3 lg:order-1'} flex items-center bg-white dark:bg-gray-900 p-8 md:p-12 lg:p-16`}
                  >
                    <div className="w-full">
                      {/* Title */}
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                        {service.title}
                      </h3>

                      {/* Summary Description */}
                      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Additional Summary */}
                      <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 leading-relaxed">
                          {service.features && service.features.length > 0 && (
                            <>
                              Our {service.title.toLowerCase()} services include {service.features.slice(0, 3).join(', ').toLowerCase()}, and more. 
                              We leverage cutting-edge technologies to deliver exceptional results that exceed expectations and drive measurable business outcomes.
                            </>
                          )}
                        </p>
                      </div>

                      {/* Decorative Line */}
                      <div className="mt-8 w-20 h-1 bg-primary rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
