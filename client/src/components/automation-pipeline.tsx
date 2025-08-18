import { ArrowRight, CheckCircle, Play, Database, Code, Send, Zap } from "lucide-react";

export default function AutomationPipeline() {
  const workflowSteps = [
    {
      step: 1,
      title: "Define the Trigger",
      description: "Every workflow starts with a trigger node (e.g., 'When new email arrives,' 'HTTP request received,' 'Schedule every hour'). This is what starts the workflow.",
      icon: <Play className="w-6 h-6" />,
      color: "from-blue-500 to-blue-600"
    },
    {
      step: 2,
      title: "Add Input / Source Nodes",
      description: "Pull in data from the apps/services you want to work with. Example: Google Sheets, MySQL, Slack, or an API endpoint.",
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      step: 3,
      title: "Process / Transform the Data",
      description: "Use n8n's built-in function nodes: Set (map fields), IF / Switch (conditional logic), Function / Code (custom JavaScript). This is where you clean, filter, or transform the data.",
      icon: <Code className="w-6 h-6" />,
      color: "from-purple-500 to-purple-600"
    },
    {
      step: 4,
      title: "Add Output / Action Nodes",
      description: "Send the processed data to another service or app. Examples: send Slack message, write to a database, create a task in Trello, send an email.",
      icon: <Send className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      step: 5,
      title: "Test & Activate the Workflow",
      description: "Run the workflow in Test mode to confirm it behaves as expected. Debug errors using the execution log. Once it's correct, turn it on so it runs automatically.",
      icon: <Zap className="w-6 h-6" />,
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <section id="pipeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Workflow Demo
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            n8n Workflow Demo
          </h2>
          <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            This is a demo walkthrough of making a workflow that will add automation to your business via n8n
          </p>
          
          {/* Inspirational Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 group text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-blue-400">Reliable Automations</h4>
              </div>
              <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
                "Reliable automations, built for real-world businesses."
              </blockquote>
            </div>
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="space-y-8">
          {workflowSteps.map((step, index) => (
            <div key={step.step} className="glass-card p-8 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group">
              <div className="flex items-start gap-6">
                {/* Step Number and Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white font-bold text-xl">{step.step}</div>
                </div>
                
                {/* Step Icon */}
                <div className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {step.icon}
                </div>
                
                {/* Step Content */}
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-blue-400 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Check Icon for Completed Steps */}
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 opacity-60">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Summary */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border-2 border-emerald-500/30 bg-emerald-600/10">
            <h3 className="text-3xl font-bold mb-6 text-emerald-400">
              ✅ In Short:
            </h3>
            <div className="text-2xl font-semibold text-white mb-4">
              Trigger → Input → Process → Output → Activate
            </div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              This simple 5-step process is how we build reliable automations that transform your business operations.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-12 rounded-3xl border border-slate-600/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Build Your First Workflow?
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Let's walk through creating an automation that saves you hours every week.
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
              Start Building Your Workflow
              <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}