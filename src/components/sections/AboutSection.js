import * as HeroIcons from '@heroicons/react/24/outline';
import { useScrollAnimation } from '../../utils/scrollAnimations';
import { 
  SparklesIcon, 
  ShieldCheckIcon, 
  TrophyIcon, 
  UserGroupIcon,
  LightBulbIcon,
  HeartIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/react/24/outline';

const AboutSection = ({ aboutData }) => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });
  const contentAnimation = useScrollAnimation({ threshold: 0.2 });
  const statsAnimation = useScrollAnimation({ threshold: 0.3 });
  const valuesAnimation = useScrollAnimation({ threshold: 0.2 });
  const certificationsAnimation = useScrollAnimation({ threshold: 0.2 });
  const finalStatsAnimation = useScrollAnimation({ threshold: 0.2 });

  if (!aboutData) {
    return null;
  }

  return (
    <section 
      id="about" 
      className="py-32 bg-cream relative overflow-hidden"
    >
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, #1A4D6D 1px, transparent 1px),
            linear-gradient(to bottom, #1A4D6D 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px'
        }}></div>
      </div>
      
      {/* Floating Accent Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 border-4 border-gold/20 animate-spin-slow"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 border-4 border-orange/20 rotate-45 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-24 transition-all duration-800 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-widest px-6 py-3 border-2 border-navy hover:bg-navy hover:text-cream transition-all duration-300 cursor-default group">
              <SparklesIcon className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
              Our Story
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-navy mb-6 leading-tight">
            Pioneering <span className="text-gold">Digital Excellence</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto">
            Transforming businesses through innovation, expertise, and unwavering commitment to success
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          {/* Left Column - Content */}
          <div 
            ref={contentAnimation.ref}
            className={`space-y-8 transition-all duration-800 ${
              contentAnimation.isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform -translate-x-12'
            }`}
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-black text-navy mb-6 leading-tight">
                Building Tomorrow's <span className="text-gold">Technology</span> Today
              </h3>
              
              <p className="text-lg text-navy leading-relaxed mb-6">
                {aboutData.description}
              </p>
              
              {aboutData.extendedDescription && (
                <p className="text-base text-navy/80 leading-relaxed">
                  {aboutData.extendedDescription}
                </p>
              )}
            </div>

            {/* Key Highlights */}
            {aboutData.highlights && (
              <div className="grid grid-cols-2 gap-4">
                {aboutData.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-3 group">
                    <div className="w-10 h-10 bg-navy/5 border-2 border-navy flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                      <StarIcon className="w-5 h-5 text-navy group-hover:text-cream transition-colors duration-300" />
                    </div>
                    <div>
                      <div className="font-bold text-navy text-sm">{highlight.title}</div>
                      <div className="text-xs text-navy/70">{highlight.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Mission and Vision */}
            {(aboutData.mission || aboutData.vision) && (
              <div className="space-y-6 pt-6">
                {aboutData.mission && (
                  <div className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold group-hover:w-2 transition-all duration-300"></div>
                    <div className="flex items-start gap-4 pl-6">
                      <div className="w-14 h-14 bg-gold flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <HeroIcons.RocketLaunchIcon className="w-7 h-7 text-cream" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-black text-navy mb-3 uppercase">
                          Our Mission
                        </h4>
                        <p className="text-navy leading-relaxed">
                          {aboutData.mission}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                {aboutData.vision && (
                  <div className="group relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-orange group-hover:w-2 transition-all duration-300"></div>
                    <div className="flex items-start gap-4 pl-6">
                      <div className="w-14 h-14 bg-orange flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <HeroIcons.EyeIcon className="w-7 h-7 text-cream" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-black text-navy mb-3 uppercase">
                          Our Vision
                        </h4>
                        <p className="text-navy leading-relaxed">
                          {aboutData.vision}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Right Column - Enhanced Image Grid */}
          <div 
            ref={statsAnimation.ref}
            className={`relative transition-all duration-800 delay-200 ${
              statsAnimation.isVisible 
                ? 'opacity-100 transform translate-x-0' 
                : 'opacity-0 transform translate-x-12'
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Main Large Image */}
              <div className="col-span-2 relative group">
                <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-navy group-hover:-top-6 group-hover:-left-6 transition-all duration-300"></div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-gold group-hover:-bottom-6 group-hover:-right-6 transition-all duration-300"></div>
                
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  className="w-full h-[400px] object-cover border-4 border-navy group-hover:scale-[1.02] transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 bg-cream border-4 border-orange p-4 animate-float">
                  <div className="text-2xl font-black text-orange">15+</div>
                  <div className="text-xs text-navy uppercase tracking-wider">Years Excellence</div>
                </div>
              </div>
              
              {/* Small Images */}
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&auto=format&fit=crop&q=80"
                  alt="Innovation"
                  className="w-full h-48 object-cover border-4 border-gold group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="relative group overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&auto=format&fit=crop&q=80"
                  alt="Technology"
                  className="w-full h-48 object-cover border-4 border-burgundy group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Values Grid */}
        {aboutData.values && (
          <div 
            ref={valuesAnimation.ref}
            className={`mb-32 transition-all duration-800 ${
              valuesAnimation.isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-navy mb-4 uppercase">
                What Drives <span className="text-gold">Us</span>
              </h3>
              <p className="text-lg text-navy/70 max-w-2xl mx-auto">
                Our core values shape every decision, project, and partnership
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aboutData.values.map((value, index) => {
                const colors = [
                  { bg: 'bg-navy', border: 'border-navy', icon: LightBulbIcon },
                  { bg: 'bg-gold', border: 'border-gold', icon: ShieldCheckIcon },
                  { bg: 'bg-orange', border: 'border-orange', icon: UserGroupIcon },
                  { bg: 'bg-burgundy', border: 'border-burgundy', icon: HeartIcon }
                ];
                const color = colors[index % colors.length];
                const IconComponent = color.icon;
                
                return (
                  <div 
                    key={index}
                    className="group relative cursor-default"
                  >
                    <div className={`absolute inset-0 ${color.border} border-2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105 group-hover:rotate-2`}></div>
                    <div className={`relative ${color.bg} p-8 border-2 border-cream transition-all duration-500 transform group-hover:-translate-y-3 group-hover:-translate-x-1`}>
                      <div className="w-14 h-14 bg-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-7 h-7 text-navy" />
                      </div>
                      <h4 className="text-xl font-black text-cream mb-3 uppercase">
                        {value.title}
                      </h4>
                      <p className="text-cream text-sm opacity-90 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        
        {/* Certifications & Awards */}
        {aboutData.certifications && (
          <div 
            ref={certificationsAnimation.ref}
            className={`mb-32 transition-all duration-800 ${
              certificationsAnimation.isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-12'
            }`}
          >
            <div className="bg-navy/5 border-4 border-navy p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-black text-navy mb-4 uppercase">
                  Recognized <span className="text-gold">Excellence</span>
                </h3>
                <p className="text-navy/70">Industry certifications and accolades</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {aboutData.certifications.map((cert, idx) => (
                  <div key={idx} className="text-center group cursor-default">
                    <div className="w-20 h-20 mx-auto mb-4 bg-cream border-2 border-navy flex items-center justify-center group-hover:bg-gold group-hover:border-gold group-hover:scale-110 transition-all duration-300">
                      <TrophyIcon className="w-10 h-10 text-navy group-hover:text-cream transition-colors duration-300" />
                    </div>
                    <div className="font-bold text-navy text-sm mb-1">{cert.name}</div>
                    <div className="text-xs text-navy/60">{cert.year}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Stats Section */}
        <div 
          ref={finalStatsAnimation.ref}
          className={`relative transition-all duration-800 ${
            finalStatsAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-12'
          }`}
        >
          <div className="absolute inset-0 border-4 border-navy"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold"></div>
          
          <div className="relative bg-navy p-12 md:p-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-black text-cream mb-3">
                Success by the <span className="text-gold">Numbers</span>
              </h3>
              <p className="text-cream/70">Proven track record of delivering excellence</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {aboutData.stats && aboutData.stats.map((stat, idx) => {
                const colors = ['text-gold', 'text-orange', 'text-gold', 'text-orange'];
                const icons = [BoltIcon, UserGroupIcon, TrophyIcon, StarIcon];
                const IconComponent = icons[idx % icons.length];
                
                return (
                  <div key={idx} className="text-center group cursor-default">
                    <div className="w-16 h-16 mx-auto mb-4 border-2 border-cream/20 flex items-center justify-center group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                      <IconComponent className="w-8 h-8 text-cream/40 group-hover:text-gold transition-colors duration-300" />
                    </div>
                    <div className={`text-4xl md:text-6xl font-black ${colors[idx % colors.length]} mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-cream font-bold uppercase tracking-wider mb-1">
                      {stat.label}
                    </div>
                    {stat.description && (
                      <div className="text-xs text-cream/60 mt-2">
                        {stat.description}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0%, 100% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
