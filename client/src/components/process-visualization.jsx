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
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600/20 to-blue-600/20 text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            From Discovery to Delivery
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            A proven methodology that ensures your automation project delivers maximum value with minimal disruption.
          </p>
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
