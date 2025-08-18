import { Zap, BarChart3, FileText, Settings, ArrowRight, Search, TrendingUp, Users, Shield, Activity, Layers, Code, BookOpen, Monitor, Scale } from "lucide-react";
import InfiniteScroll from './InfiniteScroll';
import TextType from './TextType';

export default function ServicesOverview() {
  const beyondAutomationItems = [
    { 
      content: (
        <div className="flex items-center text-left">
          <Search className="w-8 h-8 text-blue-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">Automation Audit & ROI Analysis</div>
            <div className="text-lg text-slate-300">Map processes, find quick wins, estimate hours saved and payback.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <FileText className="w-8 h-8 text-emerald-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-emerald-400 mb-2">Process Blueprint & Documentation</div>
            <div className="text-lg text-slate-300">Create detailed workflows, SOPs, and implementation guides.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <Code className="w-8 h-8 text-purple-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-purple-400 mb-2">Custom Automation Implementation</div>
            <div className="text-lg text-slate-300">Build and deploy tailored automation solutions for your business.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <Settings className="w-8 h-8 text-yellow-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">Managed Automation Services</div>
            <div className="text-lg text-slate-300">Ongoing monitoring, maintenance, and optimization of your automations.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <Layers className="w-8 h-8 text-pink-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-pink-400 mb-2">Integration & API Development</div>
            <div className="text-lg text-slate-300">Connect your tools and systems for seamless data flow.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <BookOpen className="w-8 h-8 text-indigo-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-indigo-400 mb-2">Training & Knowledge Transfer</div>
            <div className="text-lg text-slate-300">Empower your team to maintain and extend automations.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <Monitor className="w-8 h-8 text-orange-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-orange-400 mb-2">Performance Monitoring</div>
            <div className="text-lg text-slate-300">Track automation efficiency and identify optimization opportunities.</div>
          </div>
        </div>
      )
    },
    { 
      content: (
        <div className="flex items-center text-left">
          <Scale className="w-8 h-8 text-teal-400 mr-4 flex-shrink-0" />
          <div>
            <div className="text-2xl font-bold text-teal-400 mb-2">Scalability Planning</div>
            <div className="text-lg text-slate-300">Design automations that grow with your business needs.</div>
          </div>
        </div>
      )
    }
  ];

  const inspirationalQuotes = [
    "We make automation simple — no jargon, just results.",
    "Tell us your problem, we'll design the solution.",
    "Think of us as your automation partner, not just a vendor.",
    "Automation is difficult, but we make it look easy.",
    "We don't just build workflows, we support them.",
    "Reliable automations, built for real-world businesses.",
    "Ongoing support, so your business never misses a beat."
  ];

  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            What We Do
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            We design, build, and manage automations that eliminate manual busywork, 
            so you can focus on what matters most to your business.
          </p>
        </div>

        {/* Core Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
              Automation Audit
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We analyze your current processes to identify automation opportunities and calculate potential ROI.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <FileText className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors">
              Process Design
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We create detailed blueprints and workflows that map out your automation strategy.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Settings className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
              Implementation
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We build and deploy your automations using the best tools and practices for your business.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-orange-400 transition-colors">
              Ongoing Support
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We monitor, maintain, and optimize your automations to ensure they continue delivering value.
            </p>
          </div>
        </div>

        {/* Beyond Automation Section with InfiniteScroll */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              Beyond Automation
            </h3>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              <TextType 
                text={inspirationalQuotes}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
                className="text-emerald-400 font-semibold"
                variableSpeed={undefined}
                onSentenceComplete={undefined}
              />
            </p>
          </div>
          
          <div style={{height: '600px', position: 'relative'}}>
            <InfiniteScroll
              items={beyondAutomationItems}
              isTilted={true}
              tiltDirection='left'
              autoplay={true}
              autoplaySpeed={0.3}
              autoplayDirection="down"
              pauseOnHover={true}
              width="40rem"
              maxHeight="100%"
              itemMinHeight={120}
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-12 rounded-3xl border border-slate-600/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how automation can eliminate manual work and boost your productivity.
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
              Start Your Automation Journey
              <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
