import { MapPin } from "lucide-react";

const processSteps = [
  { number: 1, title: "Discover", description: "Process mapping & opportunity identification", gradient: "from-blue-500 to-emerald-500" },
  { number: 2, title: "Blueprint", description: "Detailed architecture & implementation plan", gradient: "from-emerald-500 to-purple-500" },
  { number: 3, title: "Build", description: "Development, testing & integration", gradient: "from-purple-500 to-orange-500" },
  { number: 4, title: "Test", description: "User acceptance testing & validation", gradient: "from-orange-500 to-red-500" },
  { number: 5, title: "Launch", description: "Deployment & team training", gradient: "from-red-500 to-teal-500" },
  { number: 6, title: "Optimize", description: "Monitoring & continuous improvement", gradient: "from-teal-500 to-blue-500" }
];

export default function ProcessVisualization() {
  return (
    <section id="process" className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            Process Overview
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            From Discovery to Delivery
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Our proven methodology ensures your automation journey is smooth, efficient, and delivers measurable results
          </p>
        </div>

        {/* Inspirational Quote near From Discovery to Delivery */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="glass-card p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 group text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-400">Our Commitment</h4>
            </div>
            <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
              "We don't just build workflows, we support them."
            </blockquote>
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid lg:grid-cols-6 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Step Card */}
              <div className="glass-card p-6 rounded-2xl text-center hover:bg-slate-700/40 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-sm">{step.description}</p>
              </div>
              {/* Connector Line */}
              {index < processSteps.length - 1 && (
                <div className={`hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-gradient-to-r ${step.gradient} transform -translate-y-1/2`}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
