import React, { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const Footer = ({ footerData }) => {
  const [email, setEmail] = useState('');

  // Handle newsletter subscription
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    console.log('Newsletter subscription:', email);
    setEmail('');
    // Show success message or handle submission
  };

  // Social media icon mapping - using simple text for now since Heroicons doesn't have brand icons
  const getSocialIcon = (platform) => {
    const iconClasses = "w-5 h-5 flex items-center justify-center text-xs font-bold";
    
    switch (platform) {
      case 'twitter':
        return <div className={iconClasses}>𝕏</div>;
      case 'linkedin':
        return <div className={iconClasses}>in</div>;
      case 'github':
        return <div className={iconClasses}>gh</div>;
      case 'facebook':
        return <div className={iconClasses}>f</div>;
      default:
        return <div className={iconClasses}>?</div>;
    }
  };

  // Smooth scroll function for internal links
  const handleSmoothScroll = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  };

  if (!footerData) {
    return null;
  }

  return (
    <footer id="footer" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-4">
                  TechSolutions Pro
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed text-lg">
                  Leading provider of cutting-edge technology services for businesses worldwide. 
                  Transform your business with our innovative solutions.
                </p>
              </div>

              {/* Newsletter Signup */}
              {footerData.newsletter && (
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                    <span className="text-2xl">📧</span>
                    {footerData.newsletter.title}
                  </h4>
                  <p className="text-gray-300 text-sm mb-4">
                    {footerData.newsletter.description}
                  </p>
                  <form onSubmit={handleNewsletterSubmit} className="flex group">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={footerData.newsletter.placeholder}
                      className="flex-1 px-5 py-3 bg-gray-800/50 border border-gray-700 rounded-l-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all duration-300 backdrop-blur-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary hover:bg-primary-700 text-white rounded-r-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-gray-900 transform hover:scale-105"
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </form>
                </div>
              )}
            </div>

            {/* Footer Links Sections */}
            {footerData.sections && footerData.sections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="text-lg font-bold text-white mb-6 relative inline-block">
                  {section.title}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-primary rounded-full"></span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="group text-gray-400 hover:text-white transition-all duration-300 text-sm flex items-center"
                      >
                        <span className="w-0 h-px bg-primary group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        {footerData.contact && (
          <div className="border-t border-gray-800/50 py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-primary/30">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Email</p>
                  <a 
                    href={`mailto:${footerData.contact.email}`}
                    className="text-white hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    {footerData.contact.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-primary/30">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Phone</p>
                  <a 
                    href={`tel:${footerData.contact.phone}`}
                    className="text-white hover:text-primary transition-colors duration-300 text-sm font-medium"
                  >
                    {footerData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-primary/30">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Address</p>
                  <p className="text-white text-sm font-medium">{footerData.contact.address}</p>
                </div>
              </div>

              <div className="group flex items-center space-x-4 p-4 bg-gray-800/30 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-700/30 hover:border-primary/30">
                <div className="p-3 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <ClockIcon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">Hours</p>
                  <p className="text-white text-sm font-medium">{footerData.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t border-gray-800/50 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              {footerData.copyright}
            </div>

            {/* Social Media Links */}
            {footerData.social && (
              <div className="flex space-x-3">
                {footerData.social.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gray-800/50 hover:bg-primary text-gray-300 hover:text-white rounded-xl transition-all duration-300 hover:scale-110 transform border border-gray-700/30 hover:border-primary"
                    aria-label={`Follow us on ${social.platform}`}
                  >
                    <div className="transform group-hover:rotate-12 transition-transform duration-300">
                      {getSocialIcon(social.platform)}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;