import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as StarOutlineIcon, ChatBubbleLeftIcon } from '@heroicons/react/24/outline';

const TestimonialCard = ({ testimonial }) => {
  const { name, company, role, content, rating = 5, avatar, id } = testimonial;
  
  // Generate random avatar from UI Avatars if none provided
  const avatarUrl = avatar && avatar !== '/images/testimonial1.jpg' && avatar !== '/images/testimonial2.jpg' && avatar !== '/images/testimonial3.jpg' && avatar !== '/images/testimonial4.jpg' && avatar !== '/images/testimonial5.jpg'
    ? avatar
    : `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&size=200&background=random&color=fff&bold=true`;
  
  // Generate star rating display
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className="transform transition-transform duration-200 hover:scale-125">
          {i <= rating ? (
            <StarIcon className="w-5 h-5 text-yellow-400" />
          ) : (
            <StarOutlineIcon className="w-5 h-5 text-gray-300 dark:text-gray-600" />
          )}
        </span>
      );
    }
    return stars;
  };
  
  return (
    <div className="group relative h-full">
      {/* Background Gradient Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500"></div>
      
      {/* Card Content */}
      <div className="relative h-full bg-gradient-to-br from-white via-white to-blue-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 dark:border-gray-700 hover:border-primary/30 flex flex-col transform hover:-translate-y-2">
        {/* Quote Icon */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <ChatBubbleLeftIcon className="w-16 h-16 text-primary" />
        </div>

        {/* Rating at Top */}
        <div className="flex items-center mb-6 relative z-10">
          {renderStars()}
          <span className="ml-2 text-sm font-semibold text-gray-600 dark:text-gray-400">
            {rating}.0
          </span>
        </div>
        
        {/* Quote Content */}
        <div className="flex-1 mb-6 relative z-10">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            "{content}"
          </p>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-600 to-transparent mb-6"></div>
        
        {/* Author Info */}
        <div className="flex items-center relative z-10">
          {/* Avatar with Gradient Border */}
          <div className="relative mr-4 flex-shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-600 to-blue-600 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative w-16 h-16 rounded-full bg-white dark:bg-gray-800 p-1">
              <img 
                src={avatarUrl} 
                alt={`${name}'s avatar`}
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            {/* Online Status Indicator */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 border-4 border-white dark:border-gray-800 rounded-full"></div>
          </div>
          
          {/* Name and Company */}
          <div className="flex-1">
            <h4 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-primary group-hover:via-purple-600 group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300">
              {name}
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
              {role}
            </p>
            {company && (
              <p className="text-xs text-gray-500 dark:text-gray-500 flex items-center mt-1">
                <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                {company}
              </p>
            )}
          </div>
        </div>

        {/* Hover Effect Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl overflow-hidden">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, rgb(220, 38, 38) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}></div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;