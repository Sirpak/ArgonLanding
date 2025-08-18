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
    name: "David Chen",
    role: "Automation Architect & Lead Developer",
    image: "https://picsum.photos/id/1005/300/300",
    alt: "David Chen - Automation Architect",
    linkedin: "https://linkedin.com/in/davidchen",
    twitter: "https://twitter.com/davidchen",
    facebook: "https://facebook.com/davidchen"
  },
  {
    id: "member-2",
    name: "Sarah Rodriguez",
    role: "Business Process Specialist & Project Manager",
    image: "https://picsum.photos/id/1006/300/300",
    alt: "Sarah Rodriguez - Business Process Specialist",
    linkedin: "https://linkedin.com/in/sarahrodriguez",
    twitter: "https://twitter.com/sarahrodriguez"
  },
  {
    id: "member-3",
    name: "Michael Thompson",
    role: "AI Integration Expert & Solutions Engineer",
    image: "https://picsum.photos/id/1007/300/300",
    alt: "Michael Thompson - AI Integration Expert",
    linkedin: "https://linkedin.com/in/michaelthompson",
    twitter: "https://twitter.com/michaelthompson"
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
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-500/50 transition-colors duration-300">
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
