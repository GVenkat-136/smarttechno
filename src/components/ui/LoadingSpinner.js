import React from 'react';

const LoadingSpinner = ({ 
  size = 'md', 
  text = 'Loading...', 
  variant = 'spinner',
  className = '' 
}) => {
  const sizeClasses = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16'
  };

  const textSizeClasses = {
    xs: 'text-xs',
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
    xl: 'text-lg'
  };

  // Spinner variant
  const SpinnerVariant = () => (
    <div className={`${sizeClasses[size]} animate-spin gpu-accelerated`}>
      <div className="w-full h-full border-4 border-gray-200 dark:border-gray-700 border-t-primary rounded-full"></div>
    </div>
  );

  // Dots variant
  const DotsVariant = () => (
    <div className="flex space-x-1">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse`}
          style={{ animationDelay: `${index * 0.2}s` }}
        />
      ))}
    </div>
  );

  // Pulse variant
  const PulseVariant = () => (
    <div className={`${sizeClasses[size]} bg-primary rounded-full animate-pulse-slow opacity-75`} />
  );

  // Skeleton variant for loading states
  const SkeletonVariant = () => (
    <div className="space-y-3 w-full max-w-sm">
      <div className="loading-skeleton h-4 rounded"></div>
      <div className="loading-skeleton h-4 rounded w-5/6"></div>
      <div className="loading-skeleton h-4 rounded w-4/6"></div>
    </div>
  );

  const renderVariant = () => {
    switch (variant) {
      case 'dots':
        return <DotsVariant />;
      case 'pulse':
        return <PulseVariant />;
      case 'skeleton':
        return <SkeletonVariant />;
      default:
        return <SpinnerVariant />;
    }
  };

  return (
    <div className={`flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 ${className}`}>
      <div className="mb-4">
        {renderVariant()}
      </div>
      
      {text && variant !== 'skeleton' && (
        <div className="text-center max-w-xs sm:max-w-sm">
          <p className={`text-gray-600 dark:text-gray-400 font-medium animate-fade-in ${textSizeClasses[size]}`}>
            {text}
          </p>
          
          {/* Optional loading dots animation */}
          <div className="flex justify-center mt-2 space-x-1">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className="w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full animate-pulse"
                style={{ animationDelay: `${index * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingSpinner;