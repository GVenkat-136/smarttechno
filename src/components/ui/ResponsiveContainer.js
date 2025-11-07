import React from 'react';

/**
 * ResponsiveContainer component for consistent responsive layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.size - Container size variant
 * @param {boolean} props.centerContent - Whether to center content
 * @param {string} props.padding - Padding variant
 * @returns {JSX.Element} ResponsiveContainer component
 */
const ResponsiveContainer = ({ 
  children, 
  className = '', 
  size = 'default',
  centerContent = false,
  padding = 'default'
}) => {
  // Size variants
  const sizeClasses = {
    sm: 'max-w-3xl',
    default: 'max-w-7xl',
    lg: 'max-w-8xl',
    full: 'max-w-full'
  };

  // Padding variants
  const paddingClasses = {
    none: '',
    sm: 'px-4 sm:px-6',
    default: 'px-4 sm:px-6 lg:px-8',
    lg: 'px-6 sm:px-8 lg:px-12',
    xl: 'px-8 sm:px-12 lg:px-16'
  };

  // Center content classes
  const centerClasses = centerContent ? 'flex items-center justify-center' : '';

  return (
    <div className={`
      ${sizeClasses[size]} 
      ${paddingClasses[padding]} 
      ${centerClasses}
      mx-auto 
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * ResponsiveGrid component for consistent grid layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.cols - Grid columns configuration
 * @param {string} props.gap - Gap between grid items
 * @returns {JSX.Element} ResponsiveGrid component
 */
export const ResponsiveGrid = ({ 
  children, 
  className = '', 
  cols = 'auto',
  gap = 'default'
}) => {
  // Column configurations
  const colClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4',
    auto: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  };

  // Gap configurations
  const gapClasses = {
    sm: 'gap-4',
    default: 'gap-6 sm:gap-8',
    lg: 'gap-8 sm:gap-10 lg:gap-12',
    xl: 'gap-10 sm:gap-12 lg:gap-16'
  };

  return (
    <div className={`
      grid 
      ${colClasses[cols]} 
      ${gapClasses[gap]} 
      ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * ResponsiveSection component for consistent section layouts
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Child components
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.padding - Vertical padding variant
 * @param {string} props.background - Background variant
 * @param {string} props.id - Section ID for navigation
 * @returns {JSX.Element} ResponsiveSection component
 */
export const ResponsiveSection = ({ 
  children, 
  className = '', 
  padding = 'default',
  background = 'default',
  id
}) => {
  // Padding variants
  const paddingClasses = {
    sm: 'py-12 sm:py-16',
    default: 'py-16 sm:py-20 lg:py-24',
    lg: 'py-20 sm:py-24 lg:py-32',
    xl: 'py-24 sm:py-32 lg:py-40'
  };

  // Background variants
  const backgroundClasses = {
    default: 'bg-white dark:bg-gray-900',
    alt: 'bg-gray-50 dark:bg-gray-800',
    primary: 'bg-primary text-white',
    gradient: 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800'
  };

  return (
    <section 
      id={id}
      className={`
        ${paddingClasses[padding]} 
        ${backgroundClasses[background]} 
        relative overflow-hidden
        theme-transition
        ${className}
      `}
    >
      {children}
    </section>
  );
};

/**
 * ResponsiveText component for consistent typography
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Text content
 * @param {string} props.variant - Text variant
 * @param {string} props.className - Additional CSS classes
 * @param {string} props.as - HTML element to render as
 * @returns {JSX.Element} ResponsiveText component
 */
export const ResponsiveText = ({ 
  children, 
  variant = 'body',
  className = '',
  as: Component = 'p'
}) => {
  // Text variants with responsive sizing
  const variantClasses = {
    h1: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold',
    h2: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold',
    h3: 'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold',
    h4: 'text-lg sm:text-xl md:text-2xl font-semibold',
    h5: 'text-base sm:text-lg md:text-xl font-semibold',
    h6: 'text-sm sm:text-base md:text-lg font-semibold',
    body: 'text-base sm:text-lg',
    bodyLarge: 'text-lg sm:text-xl lg:text-2xl',
    bodySmall: 'text-sm sm:text-base',
    caption: 'text-xs sm:text-sm'
  };

  return (
    <Component className={`${variantClasses[variant]} ${className}`}>
      {children}
    </Component>
  );
};

export default ResponsiveContainer;