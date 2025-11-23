import React, { useState } from 'react';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  PaperAirplaneIcon 
} from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../../utils/scrollAnimations';

const ContactSection = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-black dark:bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 38, 38, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-20 transition-all duration-600 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="inline-block mb-4">
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
              Get In Touch
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-primary">CONTACT US</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Information - 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Talk</h3>
              <p className="text-gray-400 leading-relaxed">
                Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Location */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MapPinIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Location</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Smartchip Technologies F.No:r4, Second Floor, Daivasadan Apartments, Malkajgiri, Hyderabad
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <EnvelopeIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:info@smartchiptechno.com"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    info@smartchiptechno.com
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl transform scale-95 group-hover:scale-100 transition-transform duration-300"></div>
              <div className="relative flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-primary/50 transition-all duration-300">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center border border-primary/30 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <PhoneIcon className="w-7 h-7 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Call</h3>
                  <a 
                    href="tel:+919046608123"
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    (+91)4046608123
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - 3 columns */}
          <div className="lg:col-span-3">
            <div className="relative">
              {/* Decorative corner */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
              
              <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-white/10 shadow-2xl">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-200">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-200">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-200">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:bg-white/10"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-200">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 hover:bg-white/10"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold mb-2 text-gray-300 group-focus-within:text-primary transition-colors duration-200">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows="5"
                      className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none hover:bg-white/10"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      className="group relative w-full md:w-auto px-10 py-4 bg-primary text-white rounded-xl font-bold text-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary/50"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        Send Message
                        <PaperAirplaneIcon className="w-5 h-5 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-primary-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
