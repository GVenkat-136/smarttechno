import React from 'react';
import { useScrollAnimation } from '../../utils/scrollAnimations';

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
    <section id="team" className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(220, 38, 38, 0.1) 35px, rgba(220, 38, 38, 0.1) 70px)`
        }}></div>
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
            <span className="text-primary font-bold text-sm uppercase tracking-wider px-4 py-2 bg-primary/10 rounded-full">
              Our Team
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 dark:text-white mb-6">
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Talented professionals dedicated to delivering exceptional results
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={member.id}
              className="group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card */}
              <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                {/* Red accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                
                {/* Image Container */}
                <div className="relative overflow-hidden aspect-square">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  
                  {/* Floating role badge */}
                  <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg transform translate-x-20 group-hover:translate-x-0 transition-transform duration-500">
                    {member.role.split(' ')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 relative">
                  {/* Name */}
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors duration-300">
                    {member.name}
                  </h3>
                  
                  {/* Role */}
                  <p className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3">
                    {member.role}
                  </p>
                  
                  {/* Divider */}
                  <div className="w-12 h-0.5 bg-primary mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  
                  {/* Bio */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-primary/5 rounded-tl-full transform translate-x-10 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
            Want to join our amazing team?
          </p>
          <button className="px-8 py-4 bg-secondary text-white rounded-lg font-semibold hover:bg-primary transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Open Positions
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
