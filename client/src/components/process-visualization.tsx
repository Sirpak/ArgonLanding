import { ArrowRight, CheckCircle, Clock, Users, Zap } from "lucide-react";
import TextType from './TextType';

export default function ProcessVisualization() {
  const processQuotes = [
    "We help small businesses do more with less by automating the repetitive tasks that slow them down.",
    "Your team should focus on growth, not manual busywork.",
    "We connect your tools so your business runs seamlessly.",
    "Automating routine tasks to save your team time, allowing them to focus on what really matters.",
    "Turn time-consuming tasks into background processes.",
    "Work smarter, not harder — let automation handle the grind.",
    "Your resources are valuable — we'll help you use them more wisely.",
    "Automations pay for themselves by giving your team hours back every week.",
    "Save time, reduce errors, and scale faster.",
    "We transform your business through our proven process. We create tailor-made solutions that deliver more efficient ways to get work done by combining the tools you already use with automation and AI.",
    "Efficiency that compounds — every workflow saves time forever.",
    "Cut costs, boost productivity, and reclaim your team's focus.",
    "We make automation simple — no jargon, just results.",
    "Tell us your problem, we'll design the solution.",
    "Think of us as your automation partner, not just a service.",
    "Automation is difficult, so rely on experts to help you get it right from the start.",
    "Simple solutions to complex problems.",
    "Automation you'll actually understand and use.",
    "We don't just build workflows, we support them.",
    "Reliable automations, built for real-world businesses.",
    "Ongoing support, so your business never misses a beat.",
    "We're with you at every step — from idea to execution to ongoing care.",
    "Automation you can trust, built for people not just systems.",
    "Custom workflows tailored to your business, not cookie-cutter templates.",
    "Powered by tools you already use, enhanced by automation.",
    "Affordable automation for SMBs — no enterprise price tag.",
    "Automation designed for small businesses, not Fortune 500s.",
    "Tailored to your workflow, built to grow with you.",
    "Your competitive edge — faster, leaner, smarter operations."
  ];

  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Our Process
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            From Discovery to Delivery
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Our proven methodology ensures your automation project succeeds from start to finish.
          </p>
          
          {/* Inspirational Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-600/10 hover:bg-emerald-600/20 transition-all duration-300 group text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-emerald-400">Our Promise</h4>
              </div>
              <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
                <TextType 
                  text={processQuotes}
                  typingSpeed={65}
                  pauseDuration={1900}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-emerald-400"
                  variableSpeed={undefined}
                  onSentenceComplete={undefined}
                />
              </blockquote>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors">
              Discovery
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We dive deep into your business processes to understand your unique needs and identify automation opportunities.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-emerald-400 transition-colors">
              Planning
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We create detailed roadmaps and technical specifications that align with your business goals and timeline.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-purple-400 transition-colors">
              Development
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              Our expert team builds your automation solution using industry best practices and cutting-edge tools.
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-orange-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-orange-400 transition-colors">
              Launch
            </h3>
            <p className="text-lg text-slate-300 leading-relaxed">
              We deploy your automation, provide training, and ensure everything runs smoothly from day one.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button
            onClick={() => {
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
          >
            Start Your Discovery
            <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
