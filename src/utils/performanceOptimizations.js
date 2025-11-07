// Performance optimization utilities for animations and responsive design

/**
 * Debounce function for performance optimization
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @param {boolean} immediate - Whether to execute immediately
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait, immediate = false) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      timeout = null;
      if (!immediate) func(...args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func(...args);
  };
};

/**
 * Throttle function for performance optimization
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Request animation frame wrapper for smooth animations
 * @param {Function} callback - Callback function
 * @returns {number} Animation frame ID
 */
export const requestAnimationFrame = (callback) => {
  return window.requestAnimationFrame || 
         window.webkitRequestAnimationFrame || 
         window.mozRequestAnimationFrame || 
         function(callback) { 
           return window.setTimeout(callback, 1000 / 60); 
         };
};

/**
 * Cancel animation frame wrapper
 * @param {number} id - Animation frame ID
 */
export const cancelAnimationFrame = (id) => {
  const cancel = window.cancelAnimationFrame || 
                 window.webkitCancelAnimationFrame || 
                 window.mozCancelAnimationFrame || 
                 window.clearTimeout;
  cancel(id);
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean} Whether user prefers reduced motion
 */
export const prefersReducedMotion = () => {
  return window.matchMedia && 
         window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Get optimal animation duration based on user preferences
 * @param {number} defaultDuration - Default animation duration
 * @returns {number} Optimal animation duration
 */
export const getOptimalAnimationDuration = (defaultDuration = 300) => {
  return prefersReducedMotion() ? 0 : defaultDuration;
};

/**
 * Lazy load images for better performance
 * @param {HTMLImageElement} img - Image element
 * @param {string} src - Image source
 */
export const lazyLoadImage = (img, src) => {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.src = src;
          entry.target.classList.remove('loading');
          observer.unobserve(entry.target);
        }
      });
    });
    observer.observe(img);
  } else {
    // Fallback for browsers without IntersectionObserver
    img.src = src;
  }
};

/**
 * Optimize scroll performance with passive listeners
 * @param {HTMLElement} element - Element to attach listener to
 * @param {Function} handler - Scroll handler function
 * @param {Object} options - Event listener options
 */
export const addOptimizedScrollListener = (element, handler, options = {}) => {
  const optimizedHandler = throttle(handler, 16); // ~60fps
  const listenerOptions = {
    passive: true,
    ...options
  };
  
  element.addEventListener('scroll', optimizedHandler, listenerOptions);
  
  return () => {
    element.removeEventListener('scroll', optimizedHandler, listenerOptions);
  };
};

/**
 * Preload critical resources
 * @param {Array} resources - Array of resource URLs
 * @param {string} type - Resource type ('image', 'font', 'script', etc.)
 */
export const preloadResources = (resources, type = 'image') => {
  resources.forEach(resource => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = resource;
    link.as = type;
    document.head.appendChild(link);
  });
};

/**
 * Measure and log performance metrics
 * @param {string} name - Performance mark name
 * @param {Function} callback - Function to measure
 * @returns {any} Function result
 */
export const measurePerformance = async (name, callback) => {
  if ('performance' in window && 'mark' in performance) {
    performance.mark(`${name}-start`);
    const result = await callback();
    performance.mark(`${name}-end`);
    performance.measure(name, `${name}-start`, `${name}-end`);
    
    const measure = performance.getEntriesByName(name)[0];
    console.log(`${name} took ${measure.duration.toFixed(2)}ms`);
    
    return result;
  }
  return callback();
};

/**
 * Check if device has touch capability
 * @returns {boolean} Whether device supports touch
 */
export const isTouchDevice = () => {
  return 'ontouchstart' in window || 
         navigator.maxTouchPoints > 0 || 
         navigator.msMaxTouchPoints > 0;
};

/**
 * Get device pixel ratio for high-DPI displays
 * @returns {number} Device pixel ratio
 */
export const getDevicePixelRatio = () => {
  return window.devicePixelRatio || 1;
};

/**
 * Check if user is on a slow connection
 * @returns {boolean} Whether connection is slow
 */
export const isSlowConnection = () => {
  if ('connection' in navigator) {
    const connection = navigator.connection;
    return connection.effectiveType === 'slow-2g' || 
           connection.effectiveType === '2g' ||
           connection.saveData;
  }
  return false;
};