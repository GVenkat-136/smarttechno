// Data loader utility with error handling and fallback content
import React from 'react';

// Fallback data in case JSON loading fails
const fallbackData = {
  company: {
    name: "TechSolutions Pro",
    tagline: "Innovative Technology Solutions",
    description: "Leading provider of cutting-edge technology services"
  },
  hero: {
    title: "Transform Your Business with Technology",
    subtitle: "We deliver innovative solutions that drive growth and efficiency",
    ctaText: "Get Started",
    ctaSecondaryText: "Learn More",
    features: ["Experience", "Quality", "Support"]
  },
  services: [
    {
      id: "ai",
      title: "Artificial Intelligence",
      description: "Advanced AI solutions for business automation",
      icon: "cpu-chip",
      features: ["Machine Learning", "Data Analytics", "Automation"]
    },
    {
      id: "mobile",
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications",
      icon: "device-phone-mobile",
      features: ["iOS", "Android", "Cross-platform"]
    },
    {
      id: "web",
      title: "Web Development",
      description: "Modern, responsive web applications",
      icon: "globe-alt",
      features: ["Frontend", "Backend", "Full-stack"]
    }
  ],
  about: {
    title: "About Us",
    description: "We are a technology solutions company focused on innovation and excellence.",
    stats: [
      { label: "Projects", value: "500+", icon: "check-circle" },
      { label: "Clients", value: "200+", icon: "face-smile" }
    ]
  },
  testimonials: [
    {
      id: 1,
      name: "John Doe",
      company: "Tech Corp",
      role: "CTO",
      content: "Excellent service and innovative solutions",
      rating: 5
    }
  ],
  footer: {
    sections: [
      {
        title: "Services",
        links: [
          { text: "AI Solutions", href: "#ai" },
          { text: "Mobile Apps", href: "#mobile" }
        ]
      }
    ],
    social: [
      { platform: "twitter", url: "#", icon: "twitter" },
      { platform: "linkedin", url: "#", icon: "linkedin" }
    ],
    contact: {
      email: "contact@techsolutions.com",
      phone: "+1 (555) 123-4567",
      address: "123 Tech Street, Silicon Valley, CA"
    },
    copyright: "© 2024 TechSolutions Pro. All rights reserved."
  }
};

/**
 * Loads data from Data.json with error handling and fallback
 * @returns {Promise<Object>} The loaded data or fallback data
 */
export const loadData = async () => {
  try {
    // Try to import the JSON data
    const data = await import('../data/Data.json');
    
    // Validate that the data has required structure
    if (!data.default || typeof data.default !== 'object') {
      console.warn('Invalid data structure, using fallback data');
      return fallbackData;
    }

    // Validate required sections exist
    const requiredSections = ['company', 'hero', 'services', 'about', 'testimonials', 'footer'];
    const missingSection = requiredSections.find(section => !data.default[section]);
    
    if (missingSection) {
      console.warn(`Missing required section: ${missingSection}, using fallback data`);
      return fallbackData;
    }

    console.log('Data loaded successfully from Data.json');
    return data.default;
    
  } catch (error) {
    console.error('Error loading data from Data.json:', error);
    console.log('Using fallback data instead');
    return fallbackData;
  }
};

/**
 * Loads data with retry mechanism
 * @param {number} maxRetries - Maximum number of retry attempts
 * @param {number} delay - Delay between retries in milliseconds
 * @returns {Promise<Object>} The loaded data
 */
export const loadDataWithRetry = async (maxRetries = 3, delay = 1000) => {
  let lastError;
  
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      const data = await loadData();
      return data;
    } catch (error) {
      lastError = error;
      console.warn(`Data loading attempt ${attempt} failed:`, error);
      
      if (attempt < maxRetries) {
        console.log(`Retrying in ${delay}ms...`);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
    }
  }
  
  console.error(`All ${maxRetries} attempts failed. Using fallback data.`, lastError);
  return fallbackData;
};

/**
 * Validates data structure and provides default values for missing fields
 * @param {Object} data - The data to validate
 * @returns {Object} Validated and normalized data
 */
export const validateAndNormalizeData = (data) => {
  const normalized = { ...data };
  
  // Ensure services have required fields
  if (normalized.services && Array.isArray(normalized.services)) {
    normalized.services = normalized.services.map(service => ({
      id: service.id || 'unknown',
      title: service.title || 'Untitled Service',
      description: service.description || 'No description available',
      icon: service.icon || 'cog',
      features: service.features || [],
      technologies: service.technologies || [],
      ...service
    }));
  }
  
  // Ensure testimonials have required fields
  if (normalized.testimonials && Array.isArray(normalized.testimonials)) {
    normalized.testimonials = normalized.testimonials.map(testimonial => ({
      id: testimonial.id || Math.random(),
      name: testimonial.name || 'Anonymous',
      company: testimonial.company || 'Unknown Company',
      role: testimonial.role || 'Client',
      content: testimonial.content || 'No testimonial content',
      rating: testimonial.rating || 5,
      avatar: testimonial.avatar || null,
      ...testimonial
    }));
  }
  
  // Ensure about stats have required fields
  if (normalized.about && normalized.about.stats && Array.isArray(normalized.about.stats)) {
    normalized.about.stats = normalized.about.stats.map(stat => ({
      label: stat.label || 'Stat',
      value: stat.value || '0',
      icon: stat.icon || 'chart-bar',
      ...stat
    }));
  }
  
  return normalized;
};

/**
 * Gets a specific section of data with fallback
 * @param {Object} data - The full data object
 * @param {string} section - The section name to retrieve
 * @returns {Object|Array} The requested section or fallback
 */
export const getDataSection = (data, section) => {
  if (!data || !section) {
    console.warn('Invalid parameters for getDataSection');
    return fallbackData[section] || {};
  }
  
  if (!data[section]) {
    console.warn(`Section '${section}' not found in data, using fallback`);
    return fallbackData[section] || {};
  }
  
  return data[section];
};

/**
 * Custom hook for loading and managing data state
 * @returns {Object} Object containing data, loading state, and error state
 */
export const useDataLoader = () => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const loadedData = await loadDataWithRetry();
        const normalizedData = validateAndNormalizeData(loadedData);
        
        setData(normalizedData);
      } catch (err) {
        console.error('Failed to load data:', err);
        setError(err);
        setData(fallbackData);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  return { data, loading, error };
};

// Export fallback data for testing purposes
export { fallbackData };