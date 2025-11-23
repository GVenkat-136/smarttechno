import { useState } from 'react';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  SparklesIcon,
  RocketLaunchIcon
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
    <footer id="footer" className="relative bg-navy text-cream overflow-hidden border-t-4 border-gold">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #FFC107 1px, transparent 1px),
            linear-gradient(to bottom, #FFC107 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Floating Accent */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-gold/10 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Footer Content */}
        <div className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
            {/* Company Info & Newsletter */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-4xl font-black text-cream mb-4 uppercase tracking-wider group cursor-default">
                  Tech<span className="text-gold group-hover:text-orange transition-colors duration-300">Solutions</span>
                </h3>
                <p className="text-cream/80 mb-6 leading-relaxed">
                  Pioneering digital excellence through innovation, expertise, and unwavering commitment to transforming businesses worldwide.
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-black text-gold">850+</div>
                    <div className="text-xs text-cream/60 uppercase">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-orange">300+</div>
                    <div className="text-xs text-cream/60 uppercase">Clients</div>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              {footerData.newsletter && (
                <div className="relative">
                  <div className="absolute -top-2 -left-2 w-full h-full border-2 border-gold/20"></div>
                  <div className="relative bg-cream/5 p-6 border-2 border-cream/10">
                    <h4 className="text-lg font-black text-cream mb-2 uppercase flex items-center gap-2">
                      <SparklesIcon className="w-5 h-5 text-gold" />
                      {footerData.newsletter.title}
                    </h4>
                    <p className="text-cream/70 text-sm mb-4">
                      {footerData.newsletter.description}
                    </p>
                    <form onSubmit={handleNewsletterSubmit} className="flex">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={footerData.newsletter.placeholder}
                        className="flex-1 px-4 py-3 bg-cream text-navy placeholder-navy/50 focus:outline-none focus:ring-2 focus:ring-gold transition-all duration-300 text-sm"
                        required
                      />
                      <button
                        type="submit"
                        className="px-6 py-3 bg-gold hover:bg-orange text-navy font-bold transition-all duration-300 transform hover:scale-105"
                      >
                        <ArrowRightIcon className="w-5 h-5" />
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* Footer Links Sections */}
            {footerData.sections && footerData.sections.map((section, index) => (
              <div key={index} className="lg:col-span-1">
                <h4 className="text-lg font-black text-cream mb-6 uppercase tracking-wider relative pb-3">
                  {section.title}
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gold"></span>
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="group text-cream/70 hover:text-gold transition-all duration-300 text-sm flex items-center"
                      >
                        <span className="w-0 h-px bg-gold group-hover:w-4 mr-0 group-hover:mr-2 transition-all duration-300"></span>
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
          <div className="border-t-2 border-cream/10 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="group relative">
                <div className="absolute inset-0 border-2 border-gold/20 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-cream/5 p-6 transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <EnvelopeIcon className="w-6 h-6 text-navy" />
                  </div>
                  <p className="text-xs text-cream/60 mb-2 uppercase tracking-wider">Email Us</p>
                  <a 
                    href={`mailto:${footerData.contact.email}`}
                    className="text-cream hover:text-gold transition-colors duration-300 text-sm font-bold break-all"
                  >
                    {footerData.contact.email}
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 border-2 border-orange/20 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-cream/5 p-6 transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-orange flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <PhoneIcon className="w-6 h-6 text-cream" />
                  </div>
                  <p className="text-xs text-cream/60 mb-2 uppercase tracking-wider">Call Us</p>
                  <a 
                    href={`tel:${footerData.contact.phone}`}
                    className="text-cream hover:text-orange transition-colors duration-300 text-sm font-bold"
                  >
                    {footerData.contact.phone}
                  </a>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 border-2 border-burgundy/20 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-cream/5 p-6 transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-burgundy flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MapPinIcon className="w-6 h-6 text-cream" />
                  </div>
                  <p className="text-xs text-cream/60 mb-2 uppercase tracking-wider">Visit Us</p>
                  <p className="text-cream text-sm font-bold">{footerData.contact.address}</p>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 border-2 border-gold/20 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-cream/5 p-6 transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="w-12 h-12 bg-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <ClockIcon className="w-6 h-6 text-navy" />
                  </div>
                  <p className="text-xs text-cream/60 mb-2 uppercase tracking-wider">Working Hours</p>
                  <p className="text-cream text-sm font-bold">{footerData.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Footer */}
        <div className="border-t-2 border-cream/10 py-10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright & Links */}
            <div className="text-center md:text-left">
              <div className="text-cream/80 text-sm mb-2">
                {footerData.copyright}
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs text-cream/60">
                <a href="#privacy" className="hover:text-gold transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#terms" className="hover:text-gold transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#cookies" className="hover:text-gold transition-colors duration-300">Cookie Policy</a>
              </div>
            </div>

            {/* Social Media Links */}
            {footerData.social && (
              <div className="flex items-center gap-4">
                <span className="text-cream/60 text-sm font-bold uppercase tracking-wider">Follow Us</span>
                <div className="flex gap-3">
                  {footerData.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-10 h-10 border-2 border-cream/20 hover:border-gold flex items-center justify-center text-cream/70 hover:text-gold hover:bg-gold/10 transition-all duration-300 hover:scale-110 transform"
                      aria-label={`Follow us on ${social.platform}`}
                    >
                      <div className="transform group-hover:rotate-12 transition-transform duration-300">
                        {getSocialIcon(social.platform)}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          {/* Back to Top Button */}
          <div className="text-center mt-8">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="group inline-flex items-center gap-2 px-6 py-3 border-2 border-gold text-gold hover:bg-gold hover:text-navy font-bold uppercase tracking-wider text-xs transition-all duration-300"
            >
              <RocketLaunchIcon className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
              Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;