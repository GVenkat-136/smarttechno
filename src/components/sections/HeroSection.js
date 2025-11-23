import { useEffect, useState } from 'react';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, LightBulbIcon } from '@heroicons/react/24/outline';

const HeroSection = ({ heroData }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!heroData) {
    return null;
  }

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center relative overflow-hidden bg-cream"
    >
      {/* Animated Background Grid with Parallax */}
      <div className="absolute inset-0 opacity-5" style={{
        transform: `translateY(${scrollY * 0.3}px)`
      }}>
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #1A4D6D 1px, transparent 1px),
            linear-gradient(to bottom, #1A4D6D 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'gridMove 20s linear infinite'
        }}></div>
      </div>

      {/* Floating Elements with Enhanced Animations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Squares */}
        <div 
          className="absolute top-20 right-10 w-40 h-40 border-4 border-gold opacity-20 animate-spin-slow"
          style={{ 
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />
        <div 
          className="absolute bottom-20 left-10 w-32 h-32 border-4 border-orange opacity-20"
          style={{ 
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px) rotate(45deg)`,
            transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'pulse 3s ease-in-out infinite'
          }}
        />
        
        {/* Floating Circles */}
        <div 
          className="absolute top-1/3 left-1/4 w-24 h-24 rounded-full border-2 border-burgundy opacity-10"
          style={{ 
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
            transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'float 6s ease-in-out infinite'
          }}
        />
        <div 
          className="absolute bottom-1/3 right-1/4 w-16 h-16 rounded-full border-2 border-gold opacity-15"
          style={{ 
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'float 4s ease-in-out infinite reverse'
          }}
        />
        
        {/* Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-20 animate-shimmer" />
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange to-transparent opacity-15 animate-shimmer" style={{ animationDelay: '1s' }} />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-20 md:pt-24 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Badge with Icon */}
            <div className="inline-block animate-fade-in-up">
              <span className="inline-flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-widest px-4 py-2 border-2 border-navy hover:bg-navy hover:text-cream transition-all duration-300 cursor-default group">
                <SparklesIcon className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
                Next-Gen Technology
              </span>
            </div>

            {/* Headline with Staggered Animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="block text-navy animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
                Building the
              </span>
              <span className="block text-gold animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
                Future of Tech
              </span>
              <span className="block text-navy animate-slide-in-left" style={{ animationDelay: '0.3s' }}>
                Today
              </span>
            </h1>

            {/* Description with Enhanced Animation */}
            <p className="text-base md:text-lg text-navy leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Empowering businesses with cutting-edge solutions in AI, cloud computing, and digital transformation. 
              We turn visionary ideas into scalable reality.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/20 text-navy text-sm">
                <RocketLaunchIcon className="w-4 h-4 text-orange" />
                Fast Deployment
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/20 text-navy text-sm">
                <LightBulbIcon className="w-4 h-4 text-gold" />
                Innovation First
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-navy/5 border border-navy/20 text-navy text-sm">
                <SparklesIcon className="w-4 h-4 text-burgundy" />
                24/7 Support
              </div>
            </div>

            {/* CTA Buttons with Enhanced Animations */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <button 
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-orange text-cream font-bold text-sm md:text-base uppercase tracking-wider transition-all duration-300 hover:bg-burgundy hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                <span className="relative">Start Your Project</span>
                <ArrowRightIcon className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform duration-300 relative" />
              </button>
              
              <button 
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 md:px-8 py-3 md:py-4 bg-transparent text-navy font-bold text-sm md:text-base uppercase tracking-wider border-2 border-navy transition-all duration-300 hover:bg-navy hover:text-cream hover:scale-105 hover:border-gold relative overflow-hidden"
              >
                <span className="absolute inset-0 bg-navy scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="relative">Explore Solutions</span>
              </button>
            </div>

            {/* Stats with Hover Effects */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-6 animate-fade-in-up animate-on-scroll" style={{ animationDelay: '0.7s' }}>
              <div className="group cursor-default transition-transform hover:scale-110 duration-300">
                <div className="text-2xl md:text-3xl font-black text-gold group-hover:text-orange transition-colors duration-300">15+</div>
                <div className="text-xs text-navy uppercase tracking-wider">Years Exp.</div>
              </div>
              <div className="group cursor-default transition-transform hover:scale-110 duration-300">
                <div className="text-2xl md:text-3xl font-black text-orange group-hover:text-gold transition-colors duration-300">850+</div>
                <div className="text-xs text-navy uppercase tracking-wider">Projects</div>
              </div>
              <div className="group cursor-default transition-transform hover:scale-110 duration-300">
                <div className="text-2xl md:text-3xl font-black text-burgundy group-hover:text-navy transition-colors duration-300">300+</div>
                <div className="text-xs text-navy uppercase tracking-wider">Clients</div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Visual Grid */}
          <div className="relative animate-fade-in-up animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="grid grid-cols-2 gap-4">
              {/* Large Main Image */}
              <div className="col-span-2 relative group">
                {/* Decorative Frames */}
                <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-navy group-hover:-top-6 group-hover:-left-6 transition-all duration-500"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold group-hover:-bottom-6 group-hover:-right-6 transition-all duration-500"></div>
                
                <div 
                  className="relative h-64 md:h-80 overflow-hidden border-4 border-navy"
                  style={{
                    transform: `translateY(${scrollY * 0.1}px)`
                  }}
                >
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80"
                    alt="Advanced Technology"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay with Stats */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-2xl font-black text-gold">AI</div>
                          <div className="text-xs text-cream">Powered</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-orange">Cloud</div>
                          <div className="text-xs text-cream">Native</div>
                        </div>
                        <div>
                          <div className="text-2xl font-black text-gold">Secure</div>
                          <div className="text-xs text-cream">By Design</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Animated Pattern */}
                  <div className="absolute inset-0 opacity-5 animate-pattern-slide" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, #FFC107 10px, #FFC107 20px)`
                  }}></div>
                </div>
              </div>

              {/* Small Image 1 - Technology */}
              <div className="relative group overflow-hidden h-32 md:h-40 border-4 border-gold">
                <img 
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80"
                  alt="Innovation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-navy/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-black text-gold uppercase">Innovation</div>
                </div>
              </div>

              {/* Small Image 2 - Team */}
              <div className="relative group overflow-hidden h-32 md:h-40 border-4 border-orange">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80"
                  alt="Collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 right-2 bg-navy/90 p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="text-xs font-black text-orange uppercase">Teamwork</div>
                </div>
              </div>

              {/* Stats Card 1 */}
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-burgundy opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-cream p-4 border-2 border-navy transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="text-3xl font-black text-burgundy group-hover:text-orange transition-colors duration-300">99.8%</div>
                  <div className="text-xs text-navy uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>

              {/* Stats Card 2 */}
              <div className="relative group">
                <div className="absolute inset-0 border-2 border-gold opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"></div>
                <div className="relative bg-navy p-4 border-2 border-gold transition-all duration-500 transform group-hover:-translate-y-1">
                  <div className="text-3xl font-black text-gold group-hover:text-orange transition-colors duration-300">24/7</div>
                  <div className="text-xs text-cream uppercase tracking-wider">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
