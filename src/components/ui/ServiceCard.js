import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';

const ServiceCard = ({ service }) => {
  const { title, description, icon, features = [], technologies = [] } = service;
  
  // Get the icon component from Heroicons
  const IconComponent = HeroIcons[icon] || HeroIcons.CpuChipIcon;
  
  return (
    <div className="group relative h-full bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-100 dark:border-gray-700">
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Decorative Circle */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
      
      <div className="relative p-8">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/10 via-purple-500/10 to-blue-500/10 dark:from-primary/20 dark:via-purple-500/20 dark:to-blue-500/20 rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
          <IconComponent className="w-8 h-8 text-primary group-hover:text-purple-600 transition-colors duration-300" />
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Features */}
        {features.length > 0 && (
          <div className="space-y-2 mb-6">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Key Features:</h4>
            {features.slice(0, 4).map((feature, index) => (
              <div key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-400 group/item">
                <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-purple-600 rounded-full mr-3 mt-1.5 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                <span className="group-hover/item:text-gray-900 dark:group-hover/item:text-white transition-colors">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Technologies */}
        {technologies && technologies.length > 0 && (
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Technologies:</h4>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary dark:text-purple-400 rounded-full text-xs font-medium border border-primary/20 hover:border-primary/40 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Hover Indicator */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
