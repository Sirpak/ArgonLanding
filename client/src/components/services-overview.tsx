import { Search, Settings, TrendingUp, Users, Shield, Activity, Layers } from "lucide-react";
import StackedList from "./stacked-list";

const services = [
  {
    icon: Search,
    title: "Automation Audit & ROI Analysis",
    description: "Map processes, find quick wins, estimate hours saved and payback.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Settings,
    title: "Custom Implementation",
    description: "Seamless integration of automation solutions using Zapier, n8n, and custom code to connect your CRMs, email, docs, and finance tools.",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: TrendingUp,
    title: "Continuous Optimization",
    description: "Ongoing monitoring, refinement, and enhancement of your automated workflows to ensure peak performance and ROI.",
    gradient: "from-purple-500 to-purple-600"
  },
  {
    icon: Users,
    title: "Team Training",
    description: "Comprehensive training and documentation to ensure your team maximizes the value of new automated processes.",
    gradient: "from-orange-500 to-orange-600"
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Enterprise-grade security practices, credential management, and compliance documentation for peace of mind.",
    gradient: "from-red-500 to-red-600"
  },
  {
    icon: Activity,
    title: "Performance Analytics",
    description: "Detailed reporting on time saved, error reduction, and productivity gains to measure and communicate value.",
    gradient: "from-teal-500 to-teal-600"
  }
];

export default function ServicesOverview() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Layers className="w-5 h-5" />
            What We Do
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Beyond Automation
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            We understand the big picture of your business, strategize the best solutions, 
            and implement them seamlessly for unprecedented productivity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inspirational Quotes in Beyond Automation Section */}
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {/* Quote 1 */}
          <div className="glass-card p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-blue-400">Our Promise</h4>
            </div>
            <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
              "We make automation simple — no jargon, just results."
            </blockquote>
          </div>

          {/* Quote 2 */}
          <div className="glass-card p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-600/10 hover:bg-emerald-600/20 transition-all duration-300 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-emerald-400">Our Approach</h4>
            </div>
            <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
              "Tell us your problem, we'll design the solution."
            </blockquote>
          </div>
        </div>

        {/* Stacked Process Cards */}
        <StackedList />
      </div>
    </section>
  );
}
