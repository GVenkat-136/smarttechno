import { useScrollAnimation } from '../../utils/scrollAnimations';
import { 
  SparklesIcon, 
  EnvelopeIcon, 
  BriefcaseIcon,
  AcademicCapIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

const TeamSection = ({ teamData }) => {
  const headerAnimation = useScrollAnimation({ threshold: 0.2 });

  // Default team data if not provided
  const defaultTeam = [
    {
      id: 1,
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop&q=80',
      bio: 'Visionary leader with 15+ years in tech industry'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80',
      bio: 'Expert in AI and machine learning solutions'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80',
      bio: 'Full-stack developer specializing in cloud architecture'
    },
    {
      id: 4,
      name: 'Emily Davis',
      role: 'Design Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80',
      bio: 'Creative designer with passion for user experience'
    }
  ];

  const team = teamData || defaultTeam;

  return (
    <section id="team" className="py-32 bg-cream-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <div 
          ref={headerAnimation.ref}
          className={`text-center mb-24 transition-all duration-600 ${
            headerAnimation.isVisible 
              ? 'opacity-100 transform translate-y-0' 
              : 'opacity-0 transform translate-y-8'
          }`}
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 text-navy font-bold text-xs uppercase tracking-widest px-6 py-3 border-2 border-navy hover:bg-navy hover:text-cream transition-all duration-300 cursor-default group">
              <SparklesIcon className="w-4 h-4 text-gold group-hover:rotate-180 transition-transform duration-500" />
              Leadership Team
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-black text-navy mb-6 leading-tight">
            Meet the <span className="text-gold">Visionaries</span>
          </h2>
          <p className="text-lg text-navy/70 max-w-3xl mx-auto leading-relaxed">
            World-class experts driving innovation and delivering transformative solutions for global enterprises
          </p>
        </div>

        {/* Team List - Horizontal Layout */}
        <div className="space-y-0 mb-20">
          {team.map((member, index) => {
            const memberAnimation = useScrollAnimation({ threshold: 0.2 });
            const colors = [
              { accent: 'bg-navy', border: 'border-navy', text: 'text-navy', line: 'bg-gold' },
              { accent: 'bg-gold', border: 'border-gold', text: 'text-gold', line: 'bg-orange' },
              { accent: 'bg-orange', border: 'border-orange', text: 'text-orange', line: 'bg-burgundy' },
              { accent: 'bg-burgundy', border: 'border-burgundy', text: 'text-burgundy', line: 'bg-navy' }
            ];
            const color = colors[index % colors.length];
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={member.id}
                ref={memberAnimation.ref}
                className={`group relative border-t-2 border-navy py-12 transition-all duration-800 hover:bg-cream ${
                  memberAnimation.isVisible 
                    ? 'opacity-100 transform translate-y-0' 
                    : 'opacity-0 transform translate-y-12'
                }`}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  {/* Number */}
                  <div className="lg:col-span-1 hidden lg:block">
                    <div className={`text-7xl font-black ${color.text} opacity-10 group-hover:opacity-30 transition-opacity duration-500`}>
                      0{index + 1}
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`lg:col-span-4 ${isEven ? 'lg:order-2' : 'lg:order-3'}`}>
                    <div className="relative group/img">
                      {/* Decorative Frame */}
                      <div className={`absolute -top-4 -left-4 w-full h-full ${color.border} border-4 transition-all duration-500 group-hover:-top-6 group-hover:-left-6`}></div>
                      
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 ${color.accent} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        {/* Stats Overlay */}
                        {member.stats && (
                          <div className="absolute bottom-0 left-0 right-0 bg-navy/90 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <div className="grid grid-cols-2 gap-4 text-center">
                              <div>
                                <div className="text-2xl font-black text-gold">{member.stats.experience}</div>
                                <div className="text-xs text-cream uppercase">Years</div>
                              </div>
                              <div>
                                <div className="text-2xl font-black text-orange">{member.stats.projects}</div>
                                <div className="text-xs text-cream uppercase">Projects</div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-3' : 'lg:order-2'}`}>
                    {/* Role Badge */}
                    <div className="inline-block mb-4">
                      <span className={`text-xs font-bold ${color.text} uppercase tracking-widest px-4 py-2 border-2 ${color.border}`}>
                        {member.role}
                      </span>
                    </div>
                    
                    {/* Name */}
                    <h3 className="text-3xl md:text-4xl font-black text-navy mb-4 group-hover:text-gold transition-colors duration-300">
                      {member.name}
                    </h3>
                    
                    {/* Bio */}
                    <p className="text-base text-navy/80 leading-relaxed mb-6 max-w-2xl">
                      {member.bio}
                    </p>
                    
                    {/* Expertise Tags */}
                    {member.expertise && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {member.expertise.map((skill, idx) => (
                          <span key={idx} className="text-sm px-4 py-2 bg-navy/5 border border-navy/20 text-navy font-semibold">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                      {member.email && (
                        <a 
                          href={`mailto:${member.email}`} 
                          className={`w-10 h-10 border-2 ${color.border} flex items-center justify-center hover:${color.accent} hover:border-transparent transition-all duration-300 group/social`}
                        >
                          <EnvelopeIcon className={`w-5 h-5 ${color.text} group-hover/social:text-cream transition-colors duration-300`} />
                        </a>
                      )}
                      {member.social?.linkedin && (
                        <a 
                          href={member.social.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 border-2 ${color.border} flex items-center justify-center hover:${color.accent} hover:border-transparent transition-all duration-300 group/social`}
                        >
                          <span className={`text-xs font-bold ${color.text} group-hover/social:text-cream transition-colors duration-300`}>in</span>
                        </a>
                      )}
                      {member.social?.twitter && (
                        <a 
                          href={member.social.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-10 h-10 border-2 ${color.border} flex items-center justify-center hover:${color.accent} hover:border-transparent transition-all duration-300 group/social`}
                        >
                          <span className={`text-xs font-bold ${color.text} group-hover/social:text-cream transition-colors duration-300`}>𝕏</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Line */}
                <div className={`absolute bottom-0 left-0 h-1 ${color.line} w-0 group-hover:w-full transition-all duration-700`}></div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="relative mt-32">
          <div className="absolute inset-0 border-4 border-navy"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-gold"></div>
          
          <div className="relative bg-navy p-12 md:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border-2 border-gold text-gold text-xs uppercase tracking-widest font-bold">
                  <BriefcaseIcon className="w-4 h-4" />
                  Join Our Team
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-cream mb-4 leading-tight">
                  Shape the Future of <span className="text-gold">Technology</span>
                </h3>
                <p className="text-cream/80 text-base leading-relaxed mb-6">
                  We're always looking for talented individuals who are passionate about innovation, excellence, and making a real impact.
                </p>
                
                {/* Benefits */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-cream/90 text-sm">
                    <div className="w-2 h-2 bg-gold"></div>
                    <span>Competitive Salary</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/90 text-sm">
                    <div className="w-2 h-2 bg-orange"></div>
                    <span>Remote Options</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/90 text-sm">
                    <div className="w-2 h-2 bg-gold"></div>
                    <span>Learning Budget</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/90 text-sm">
                    <div className="w-2 h-2 bg-orange"></div>
                    <span>Health Benefits</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col gap-4">
                <button className="group relative px-8 py-5 bg-orange text-cream font-bold uppercase tracking-wider transition-all duration-300 hover:bg-gold hover:scale-105 flex items-center justify-center gap-3 overflow-hidden">
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
                  <BriefcaseIcon className="w-5 h-5 relative" />
                  <span className="relative">View Open Positions</span>
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 relative" />
                </button>
                
                <button className="group px-8 py-5 bg-transparent text-cream font-bold uppercase tracking-wider border-2 border-cream transition-all duration-300 hover:bg-cream hover:text-navy hover:scale-105 relative overflow-hidden flex items-center justify-center gap-3">
                  <span className="absolute inset-0 bg-cream scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  <AcademicCapIcon className="w-5 h-5 relative" />
                  <span className="relative">Internship Program</span>
                </button>
                
                <p className="text-xs text-cream/60 text-center mt-2">
                  Equal opportunity employer • Diverse & inclusive culture
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
