import { Gavel, Zap, Code, Database, Check } from "lucide-react";

const technologies = [
  { name: "Zapier", badge: "Certified Partner", color: "orange", initial: "Z" },
  { name: "HubSpot", badge: "Solutions Partner", color: "red", initial: "H" },
  { name: "Salesforce", badge: "Certified", color: "blue", initial: "SF" },
  { name: "n8n", badge: "Self-hosted", color: "purple", initial: "n8n" },
  { name: "Airtable", badge: "Expert Level", color: "green", initial: "AT" },
  { name: "Python", badge: "Custom Code", color: "yellow", initial: "PY" }
];

const capabilities = [
  {
    icon: Zap,
    title: "Low-Code Automation",
    description: "Rapid deployment using Zapier and Make for common integration patterns and workflows.",
    color: "yellow",
    features: ["CRM to email automation", "Lead qualification workflows", "Document generation"]
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Bespoke solutions using Python/JavaScript for complex business logic and unique requirements.",
    color: "blue",
    features: ["API integrations", "Data transformation", "Complex workflows"]
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Centralized data stores and reporting solutions using Airtable, Sheets, and BigQuery.",
    color: "emerald",
    features: ["Analytics dashboards", "Data synchronization", "Automated reporting"]
  }
];

export default function AutomationToolkit() {
  return (
    <section id="toolkit" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-orange-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Gavel className="w-4 h-4" />
            Technology Stack
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Your Automation Toolkit, Unlocked
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            We're certified partners with leading automation platforms and build custom solutions when needed.
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
          {technologies.map((tech, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center hover:bg-slate-700/40 transition-all duration-300 group">
              <div className={`w-12 h-12 bg-gradient-to-br from-${tech.color}-500 to-${tech.color}-600 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white font-bold text-xs">{tech.initial}</span>
              </div>
              <div className="text-white font-medium text-sm">{tech.name}</div>
              <div className="text-slate-400 text-xs">{tech.badge}</div>
            </div>
          ))}
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((capability, index) => {
            const IconComponent = capability.icon;
            return (
              <div key={index} className="gradient-border">
                <div className="gradient-border-inner p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <IconComponent className={`w-8 h-8 text-${capability.color}-500`} />
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                  </div>
                  <p className="text-slate-300 mb-4">
                    {capability.description}
                  </p>
                  <ul className="space-y-2 text-slate-400 text-sm">
                    {capability.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
