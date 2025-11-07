// Scroll animation utilities for smooth section transitions
import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook for scroll-triggered animations
 * @param {Object} options - Animation options
 * @param {number} options.threshold - Intersection threshold (0-1)
 * @param {string} options.rootMargin - Root margin for intersection observer
 * @param {boolean} options.triggerOnce - Whether to trigger animation only once
 * @returns {Object} - Ref and animation state
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            setHasAnimated(true);
          }
        } else if (!triggerOnce && !hasAnimated) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, triggerOnce, hasAnimated]);

  return {
    ref: elementRef,
    isVisible,
    hasAnimated
  };
};

/**
 * Custom hook for staggered animations of multiple elements
 * @param {number} itemCount - Number of items to animate
 * @param {number} staggerDelay - Delay between each item animation (ms)
 * @param {Object} options - Intersection observer options
 * @returns {Object} - Ref, visibility state, and item animation states
 */
export const useStaggeredAnimation = (itemCount, staggerDelay = 100, options = {}) => {
  const { ref, isVisible } = useScrollAnimation(options);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  useEffect(() => {
    if (isVisible && animatedItems.size === 0) {
      // Stagger the animations
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setAnimatedItems(prev => new Set([...prev, i]));
        }, i * staggerDelay);
      }
    }
  }, [isVisible, itemCount, staggerDelay, animatedItems.size]);

  const isItemVisible = (index) => animatedItems.has(index);

  return {
    ref,
    isVisible,
    isItemVisible
  };
};

/**
 * Smooth scroll to element with offset for fixed navbar
 * @param {string} elementId - Target element ID
 * @param {number} offset - Offset from top (default: 80px for navbar)
 * @param {string} behavior - Scroll behavior ('smooth' or 'auto')
 */
export const scrollToElement = (elementId, offset = 80, behavior = 'smooth') => {
  const element = document.getElementById(elementId);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.pageYOffset - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior
  });
};

/**
 * Debounced scroll handler for performance optimization
 * @param {Function} callback - Function to call on scroll
 * @param {number} delay - Debounce delay in milliseconds
 * @returns {Function} - Debounced scroll handler
 */
export const createDebouncedScrollHandler = (callback, delay = 16) => {
  let timeoutId;
  
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(null, args), delay);
  };
};

/**
 * Get scroll progress as percentage
 * @returns {number} - Scroll progress (0-100)
 */
export const getScrollProgress = () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  return Math.min((scrollTop / docHeight) * 100, 100);
};

/**
 * Check if element is in viewport
 * @param {HTMLElement} element - Element to check
 * @param {number} threshold - Visibility threshold (0-1)
 * @returns {boolean} - Whether element is visible
 */
export const isElementInViewport = (element, threshold = 0.1) => {
  if (!element) return false;
  
  const rect = element.getBoundingClientRect();
  const elementHeight = rect.height;
  const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
  
  return visibleHeight / elementHeight >= threshold;
};

/**
 * Animation class names for different scroll animations
 */
export const SCROLL_ANIMATIONS = {
  FADE_IN: 'scroll-fade-in',
  SLIDE_LEFT: 'scroll-slide-left',
  SLIDE_RIGHT: 'scroll-slide-right',
  SCALE_IN: 'scroll-scale-in'
};

/**
 * Get animation class with animate state
 * @param {string} animationType - Type of animation
 * @param {boolean} isVisible - Whether element is visible
 * @returns {string} - Complete class string
 */
export const getAnimationClass = (animationType, isVisible) => {
  return `${animationType} ${isVisible ? 'animate' : ''}`;
};