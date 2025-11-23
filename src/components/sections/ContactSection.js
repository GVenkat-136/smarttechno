import { useState } from 'react';
import { 
  MapPinIcon, 
  EnvelopeIcon, 
  PhoneIcon,
  PaperAirplaneIcon,
  SparklesIcon,
  ClockIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../../utils/scrollAnimations';

const ContactSection = () => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const contactInfoAnimation = useScrollAnimation({ threshold: 0.2 });
  const formAnimation = useScrollAnimation({ threshold: 0.2 });
  const benefitsAnimation = useScrollAnimation({ threshold: 0.2 });
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
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-24 bg-navy relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, #FFC107 20px, #FFC107 22px)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`mb-20 transition-all duration-600 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center gap-2 text-cream font-bold text-xs uppercase tracking-widest px-6 py-3 border-2 border-cream hover:bg-cream hover:text-navy transition-all duration-300 cursor-default group">
                <SparklesIcon className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
                Start Your Project
              </span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-cream mb-6 leading-tight">
              Let's Build Something <span className="text-gold">Amazing</span>
            </h2>
            <p className="text-lg text-cream/80 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? Our team is ready to turn your vision into reality. Get in touch and let's start the conversation.
            </p>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center group cursor-default">
              <div className="text-3xl font-black text-gold group-hover:scale-110 transition-transform duration-300">&lt; 1h</div>
              <div className="text-xs text-cream/70 uppercase tracking-wider">Response Time</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-black text-orange group-hover:scale-110 transition-transform duration-300">24/7</div>
              <div className="text-xs text-cream/70 uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-black text-gold group-hover:scale-110 transition-transform duration-300">Free</div>
              <div className="text-xs text-cream/70 uppercase tracking-wider">Consultation</div>
            </div>
            <div className="text-center group cursor-default">
              <div className="text-3xl font-black text-orange group-hover:scale-110 transition-transform duration-300">100%</div>
              <div className="text-xs text-cream/70 uppercase tracking-wider">Confidential</div>
            </div>
          </div>
        </div>

        {/* Contact Information - Horizontal List */}
        <div 
          ref={contactInfoAnimation.ref}
          className={`mb-16 transition-all duration-800 ${
            contactInfoAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location */}
            <div className="group relative border-t-4 border-gold pt-6 hover:bg-cream/5 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPinIcon className="w-7 h-7 text-navy" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-black mb-2 text-cream uppercase tracking-wider">Visit Us</h3>
                  <p className="text-sm text-cream/80 leading-relaxed">
                    Smartchip Technologies F.No:r4, Second Floor, Daivasadan Apartments, Malkajgiri, Hyderabad
                  </p>
                </div>
              </div>
              <div className="h-1 bg-gold w-0 group-hover:w-full transition-all duration-700"></div>
            </div>

            {/* Email */}
            <div className="group relative border-t-4 border-orange pt-6 hover:bg-cream/5 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <EnvelopeIcon className="w-7 h-7 text-cream" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-black mb-2 text-cream uppercase tracking-wider">Email Us</h3>
                  <a 
                    href="mailto:info@smartchiptechno.com"
                    className="text-sm text-cream/80 hover:text-gold transition-colors duration-300 font-semibold break-all"
                  >
                    info@smartchiptechno.com
                  </a>
                </div>
              </div>
              <div className="h-1 bg-orange w-0 group-hover:w-full transition-all duration-700"></div>
            </div>

            {/* Phone */}
            <div className="group relative border-t-4 border-burgundy pt-6 hover:bg-cream/5 transition-all duration-500">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 bg-burgundy flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <PhoneIcon className="w-7 h-7 text-cream" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-black mb-2 text-cream uppercase tracking-wider">Call Us</h3>
                  <a 
                    href="tel:+919046608123"
                    className="text-sm text-cream/80 hover:text-gold transition-colors duration-300 font-semibold"
                  >
                    (+91) 4046608123
                  </a>
                </div>
              </div>
              <div className="h-1 bg-burgundy w-0 group-hover:w-full transition-all duration-700"></div>
            </div>
          </div>
        </div>

        {/* Contact Form - Full Width */}
        <div 
          ref={formAnimation.ref}
          className={`max-w-5xl mx-auto transition-all duration-800 ${
            formAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
            <div className="relative">
              {/* Decorative Frame */}
              <div className="absolute -top-6 -left-6 w-full h-full border-4 border-gold"></div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-4 border-orange"></div>
              
              <div className="relative bg-cream p-8 md:p-12">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-navy mb-2">Send Us a <span className="text-gold">Message</span></h3>
                  <p className="text-navy/70">Fill out the form below and we'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-black mb-2 text-navy uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="w-full px-4 py-3 bg-cream-light border-2 border-navy text-navy text-sm placeholder-navy focus:outline-none focus:border-gold transition-all duration-300"
                    />
                  </div>

                  {/* Email and Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-black mb-2 text-navy uppercase tracking-wider">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full px-4 py-3 bg-cream-light border-2 border-navy text-navy text-sm placeholder-navy focus:outline-none focus:border-gold transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black mb-2 text-navy uppercase tracking-wider">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 1234567890"
                        className="w-full px-4 py-3 bg-cream-light border-2 border-navy text-navy text-sm placeholder-navy focus:outline-none focus:border-gold transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-black mb-2 text-navy uppercase tracking-wider">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="w-full px-4 py-3 bg-cream-light border-2 border-navy text-navy text-sm placeholder-navy focus:outline-none focus:border-gold transition-all duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-black mb-2 text-navy uppercase tracking-wider">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-cream-light border-2 border-navy text-navy text-sm placeholder-navy focus:outline-none focus:border-gold transition-all duration-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="group px-10 py-4 bg-orange text-cream font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold flex items-center gap-2"
                    >
                      Send Message
                      <PaperAirplaneIcon className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
        </div>

        {/* Why Choose Us Section - Horizontal List */}
        <div 
          ref={benefitsAnimation.ref}
          className={`mt-24 pt-16 border-t-2 border-cream/20 transition-all duration-800 ${
            benefitsAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-black text-cream mb-4">
              Why Partner With <span className="text-gold">Us?</span>
            </h3>
            <p className="text-lg text-cream/70 max-w-2xl mx-auto">
              Join 300+ companies that trust us with their digital transformation
            </p>
          </div>
          
          <div className="space-y-0">
            {[
              { icon: ClockIcon, color: 'gold', title: 'Fast Turnaround', desc: 'Quick response and efficient project delivery with agile methodologies' },
              { icon: ChatBubbleLeftRightIcon, color: 'orange', title: 'Expert Guidance', desc: '15+ years of industry experience with certified professionals at your service' },
              { icon: CheckCircleIcon, color: 'burgundy', title: 'Proven Results', desc: '850+ successful projects delivered worldwide with 98% client satisfaction' },
              { icon: SparklesIcon, color: 'gold', title: 'Innovation First', desc: 'Cutting-edge solutions using latest technologies and best practices' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="group relative border-t-2 border-cream/10 py-8 hover:bg-cream/5 transition-all duration-500"
                >
                  <div className="flex items-center gap-8">
                    {/* Number */}
                    <div className="hidden md:block text-6xl font-black text-cream/10 group-hover:text-cream/20 transition-colors duration-500 w-20">
                      0{index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-${item.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-navy" />
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1">
                      <h4 className="text-2xl font-black text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-cream/70 leading-relaxed max-w-2xl">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  {/* Hover Line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-${item.color} w-0 group-hover:w-full transition-all duration-700`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
