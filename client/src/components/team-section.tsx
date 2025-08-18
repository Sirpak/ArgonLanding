import { Linkedin, Twitter, Facebook } from "lucide-react";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  alt: string;
  linkedin?: string;
  twitter?: string;
  facebook?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "member-1",
    name: "David Czerepak",
    role: "CEO & Software Engineer",
    image: "https://picsum.photos/id/1005/300/300",
    alt: "David Czerepak - CEO",
    linkedin: "https://linkedin.com/in/davidczerepak",
    twitter: "https://twitter.com/davidczerepak",
    facebook: "https://facebook.com/davidczerepak"
  },
  {
    id: "member-2",
    name: "Swapnil Deb",
    role: "President & Lead Software Engineer",
    image: "https://picsum.photos/id/1006/300/300",
    alt: "Swapnil Deb - President",
    linkedin: "https://linkedin.com/in/swapnild",
    twitter: "https://twitter.com/swapnild"
  },
  {
    id: "member-3",
    name: "Datha Bindumalam",
    role: "AI Integration Expert & Solutions Engineer",
    image: "https://picsum.photos/id/1007/300/300",
    alt: "Datha Bindumalam - AI Integration Expert",
    linkedin: "https://linkedin.com/in/dathabindumalam",
    twitter: "https://twitter.com/dathabindumalam"
  }
];

export default function TeamSection() {
  return (
    <section id="team" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Meet Our Team
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            The experts behind your automation success. We combine technical expertise with business acumen to deliver solutions that transform your operations.
          </p>
          
          {/* CEO Quote */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              {/* Quote Box */}
              <blockquote className="glass-card p-8 md:p-12 rounded-2xl border-l-4 border-gradient-to-b from-blue-500 to-emerald-500 bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm">
                <p className="text-xl md:text-2xl text-slate-200 leading-relaxed italic font-light">
                  "We don't overpromise and we don't underdeliver. I believe in honesty, transparency, and being direct—in business and in life."
                </p>
                <footer className="mt-6 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-lg">DC</span>
                    </div>
                    <div>
                      <cite className="text-blue-400 font-semibold text-lg not-italic">David Czerepak</cite>
                      <p className="text-slate-400 text-sm">CEO & Software Engineer</p>
                    </div>
                  </div>
                  
                  {/* Decorative Element */}
                  <div className="hidden md:block">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600/20 to-emerald-600/20 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full"></div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              
              {/* Bottom Decoration */}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-emerald-600 to-blue-600 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-500/50 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-4xl font-bold opacity-80">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-slate-300 leading-relaxed text-lg mb-6">
                {member.role}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700/50 hover:bg-blue-600/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700/50 hover:bg-blue-400/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <Twitter className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                )}
                {member.facebook && (
                  <a
                    href={member.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-slate-700/50 hover:bg-blue-600/80 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                  >
                    <Facebook className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                )}
              </div>

              {/* Hover effect line */}
              <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 mt-6 mx-auto"></div>
            </div>
          ))}
        </div>

        {/* Team CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to work with our team? Let's discuss how we can automate your business processes and drive real results.
          </p>
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            Get Started Today
            <svg className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
