import { useScrollAnimation } from '../../utils/scrollAnimations';
import {
  CpuChipIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  CloudIcon,
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

const ServicesSection = ({ servicesData }) => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  const iconMap = {
    'CpuChipIcon': CpuChipIcon,
    'DevicePhoneMobileIcon': DevicePhoneMobileIcon,
    'GlobeAltIcon': GlobeAltIcon,
    'CloudIcon': CloudIcon
  };

  const serviceImages = {
    'ai': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&auto=format&fit=crop&q=80',
    'mobile': 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    'web': 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    'cloud': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    'embedded': 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&auto=format&fit=crop&q=80'
  };

  const colors = [
    { accent: 'bg-navy', border: 'border-navy', text: 'text-navy' },
    { accent: 'bg-gold', border: 'border-gold', text: 'text-gold' },
    { accent: 'bg-orange', border: 'border-orange', text: 'text-orange' },
    { accent: 'bg-burgundy', border: 'border-burgundy', text: 'text-burgundy' },
    { accent: 'bg-navy', border: 'border-navy', text: 'text-navy' }
  ];

  if (!servicesData || !Array.isArray(servicesData)) {
    return null;
  }

  return (
    <section id="services" className="py-24 bg-cream-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`mb-20 transition-all duration-800 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-block mb-4">
                <span className="inline-flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-widest px-4 py-2 border-2 border-navy hover:bg-navy hover:text-cream transition-all duration-300 cursor-default group">
                  <SparklesIcon className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
                  Our Expertise
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-navy leading-tight">
                Enterprise-Grade <br />
                <span className="text-gold">Solutions</span>
              </h2>
            </div>
            <div>
              <p className="text-lg text-navy leading-relaxed mb-6">
                From AI-powered automation to cloud infrastructure, we deliver cutting-edge technology solutions that scale with your ambitions.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-navy">
                  <ShieldCheckIcon className="w-5 h-5 text-orange" />
                  <span className="font-semibold">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-navy">
                  <RocketLaunchIcon className="w-5 h-5 text-gold" />
                  <span className="font-semibold">Rapid Deployment</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {servicesData.map((service, index) => {
            const serviceAnimation = useScrollAnimation({ threshold: 0.2 });
            const Icon = iconMap[service.icon] || CpuChipIcon;
            const imageUrl = serviceImages[service.id] || serviceImages['ai'];
            const color = colors[index % colors.length];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={service.id}
                ref={serviceAnimation.ref}
                className={`group relative border-t-2 border-navy py-12 transition-all duration-800 hover:bg-cream ${
                  serviceAnimation.isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-12'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Number */}
                  <div className="lg:col-span-1">
                    <div className={`text-6xl font-black ${color.text} opacity-20 group-hover:opacity-100 transition-opacity duration-500`}>
                      0{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-3'}`}>
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-14 h-14 ${color.border} border-2 flex items-center justify-center flex-shrink-0 transition-all duration-500 group-hover:${color.accent} group-hover:border-transparent group-hover:scale-110`}>
                        <Icon className={`w-7 h-7 ${color.text} transition-colors duration-500 group-hover:text-cream`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-black text-navy mb-3 group-hover:text-gold transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-base text-navy leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Enhanced Features with Better Descriptions */}
                    {service.features && service.features.length > 0 && (
                      <div className="ml-18 space-y-3 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-3 text-sm text-navy group/feature">
                            <div className={`w-5 h-5 ${color.border} border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/feature:${color.accent} group-hover/feature:border-transparent`}>
                              <div className={`w-2 h-2 ${color.accent} transition-transform duration-300 group-hover/feature:scale-150`}></div>
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Enhanced CTA with Stats */}
                    <div className="ml-18 flex items-center gap-6">
                      <button className={`group/btn flex items-center gap-2 text-sm font-bold ${color.text} uppercase tracking-wider hover:gap-4 transition-all duration-300 relative`}>
                        <span className="relative z-10">Explore Service</span>
                        <ArrowRightIcon className="w-4 h-4 relative z-10" />
                        <span className={`absolute inset-0 ${color.accent} opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300`}></span>
                      </button>
                      <div className="text-xs text-navy/60">
                        <span className="font-bold text-navy">{Math.floor(Math.random() * 50 + 50)}+</span> projects completed
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-3' : 'lg:order-2'}`}>
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={imageUrl}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 ${color.accent} opacity-20`}></div>
                      
                      {/* Corner Accent */}
                      <div className={`absolute top-0 right-0 w-16 h-16 ${color.accent} transform translate-x-8 -translate-y-8 transition-transform duration-500 group-hover:translate-x-0 group-hover:translate-y-0`}></div>
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 h-1 ${color.accent} w-0 group-hover:w-full transition-all duration-700`}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="mt-24 pt-16 border-t-2 border-navy relative">
          {/* Background Accent */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-orange font-bold text-xs uppercase tracking-widest px-4 py-2 border-2 border-orange">
                  Let's Collaborate
                </span>
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-navy mb-4 leading-tight">
                Ready to Build Something <span className="text-gold">Extraordinary?</span>
              </h3>
              <p className="text-base text-navy leading-relaxed mb-6">
                Whether you need a complete digital transformation or a specific solution, our team of experts is ready to turn your vision into reality.
              </p>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="text-2xl font-black text-orange">500+</div>
                  <div className="text-xs text-navy uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold">98%</div>
                  <div className="text-xs text-navy uppercase tracking-wider">Client Retention</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-burgundy">24/7</div>
                  <div className="text-xs text-navy uppercase tracking-wider">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-4">
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 py-5 bg-orange text-cream font-bold uppercase tracking-wider transition-all duration-300 hover:bg-burgundy hover:scale-105 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Start Your Project</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative" />
              </button>
              
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group px-8 py-5 bg-transparent text-navy font-bold uppercase tracking-wider border-2 border-navy transition-all duration-300 hover:bg-navy hover:text-cream hover:scale-105 relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative">Schedule Consultation</span>
              </button>
              
              <p className="text-xs text-navy/60 text-center mt-2">
                Free consultation • No commitment required • Response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
