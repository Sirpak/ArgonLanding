import { useState, useEffect } from "react";
import { Zap, Calendar, MessageSquare, FileText, ShoppingCart, Building, DollarSign, Users, ArrowRight, Play } from "lucide-react";

interface WorkflowWidget {
  id: string;
  title: string;
  description: string;
  tools: string[];
  icon: React.ReactNode;
  position: { x: number; y: number };
  connections: string[];
  category: string;
}

const workflows: WorkflowWidget[] = [
  {
    id: "overview",
    title: "What We Can Do For You",
    description: "We map the busywork in your day—intake, approvals, updates, handoffs—and turn it into fast, reliable workflows. Our stack is Zapier, n8n, and custom code, so we can meet you where your tools live and ship quickly.",
    tools: ["Zapier", "n8n", "Custom Code"],
    icon: <Zap className="w-8 h-8" />,
    position: { x: 0, y: 0 },
    connections: ["integration"],
    category: "overview"
  },
  {
    id: "integration",
    title: "Connect Your Apps",
    description: "We then connect the apps you already use—think QuickBooks/Xero, HubSpot, Gmail/Google Drive, Google Calendar, Twilio, Shopify—and stitch them together with triggers, data transforms, and guardrails.",
    tools: ["QuickBooks", "Xero", "HubSpot", "Gmail", "Google Drive", "Google Calendar", "Twilio", "Shopify"],
    icon: <Play className="w-8 h-8" />,
    position: { x: 0, y: 400 },
    connections: ["accounting", "law", "medical", "ecommerce"],
    category: "integration"
  },
  {
    id: "accounting",
    title: "Accounting & Bookkeeping",
    description: "Auto-create invoices when a deal is marked 'Closed Won,' email the PDF to your client, and file it to the right Drive folder.",
    tools: ["QuickBooks Online", "Gmail", "Google Drive"],
    icon: <DollarSign className="w-8 h-8" />,
    position: { x: -600, y: 800 },
    connections: ["integration"],
    category: "industry"
  },
  {
    id: "law",
    title: "Law Firm / Professional Services",
    description: "Generate engagement letters from a Doc template, send for e-signature via DocuSign's API, store the signed PDF in Drive, and notify your channel.",
    tools: ["Google Docs", "DocuSign", "Google Drive", "Slack"],
    icon: <FileText className="w-8 h-8" />,
    position: { x: -200, y: 800 },
    connections: ["integration"],
    category: "industry"
  },
  {
    id: "medical",
    title: "Medical or Dental Front Office",
    description: "Watch new bookings, create/adjust calendar events, and send SMS reminders with reschedule links.",
    tools: ["Calendly", "Google Calendar", "Twilio"],
    icon: <Calendar className="w-8 h-8" />,
    position: { x: 200, y: 800 },
    connections: ["integration"],
    category: "industry"
  },
  {
    id: "ecommerce",
    title: "E-commerce & Local Retail",
    description: "Sync new orders to accounting, flag failed or high-risk payments, and alert your team.",
    tools: ["Shopify", "Stripe", "Xero"],
    icon: <ShoppingCart className="w-8 h-8" />,
    position: { x: 600, y: 800 },
    connections: ["integration"],
    category: "industry"
  },
  {
    id: "operations",
    title: "Operate Your Automations",
    description: "We operate your automations: monitoring, alerts, tweaks, and change requests. You get fewer clicks, fewer errors, and clear ROI—without swapping your whole stack.",
    tools: ["Monitoring", "Alerts", "Analytics"],
    icon: <Users className="w-8 h-8" />,
    position: { x: 0, y: 1200 },
    connections: ["integration"],
    category: "operations"
  }
];

export default function WhatWeCanDo() {
  const [hoveredWidget, setHoveredWidget] = useState<string | null>(null);

  return (
    <section id="what-we-can-do" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Automation Solutions
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            What We Can Do For You
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Transform your busywork into intelligent, connected workflows that scale with your business
          </p>
        </div>

        {/* Floating Workflow Widgets */}
        <div className="relative min-h-[1400px]">
          {/* Animated Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Main vertical connection from overview to integration */}
            <line
              x1="400"
              y1="100"
              x2="400"
              y2="500"
              stroke="#3B82F6"
              strokeWidth="3"
              className="animate-pulse"
            />
            
            {/* Horizontal connections from integration to industry widgets */}
            <line
              x1="400"
              y1="500"
              x2="100"
              y2="900"
              stroke="#10B981"
              strokeWidth="2"
              className="animate-pulse"
            />
            <line
              x1="400"
              y1="500"
              x2="300"
              y2="900"
              stroke="#10B981"
              strokeWidth="2"
              className="animate-pulse"
            />
            <line
              x1="400"
              y1="500"
              x2="500"
              y2="900"
              stroke="#10B981"
              strokeWidth="2"
              className="animate-pulse"
            />
            <line
              x1="400"
              y1="500"
              x2="700"
              y2="900"
              stroke="#10B981"
              strokeWidth="2"
              className="animate-pulse"
            />
            
            {/* Vertical connection from integration to operations */}
            <line
              x1="400"
              y1="500"
              x2="400"
              y2="1300"
              stroke="#8B5CF6"
              strokeWidth="3"
              className="animate-pulse"
            />
          </svg>

          {/* Widgets */}
          {workflows.map((workflow) => (
            <div
              key={workflow.id}
              className={`absolute glass-card p-6 rounded-2xl border-2 transition-all duration-500 cursor-pointer group workflow-widget hover:scale-110 hover:z-50 ${
                hoveredWidget === workflow.id 
                  ? 'border-blue-500/50 bg-slate-700/60 shadow-2xl shadow-blue-500/25' 
                  : 'border-slate-600/50 hover:border-blue-400/50 hover:bg-slate-700/40'
              }`}
              style={{
                left: `${workflow.position.x + 400}px`,
                top: `${workflow.position.y}px`,
                width: '300px',
                zIndex: hoveredWidget === workflow.id ? 50 : 1
              }}
              onMouseEnter={() => setHoveredWidget(workflow.id)}
              onMouseLeave={() => setHoveredWidget(null)}
            >
              {/* Widget Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-xl transition-all duration-300 ${
                  hoveredWidget === workflow.id 
                    ? 'bg-gradient-to-br from-blue-600 to-emerald-600 text-white' 
                    : 'bg-slate-700/50 text-slate-300'
                }`}>
                  {workflow.icon}
                </div>
                <h3 className={`text-xl font-semibold transition-colors duration-300 ${
                  hoveredWidget === workflow.id ? 'text-blue-400' : 'text-white'
                }`}>
                  {workflow.title}
                </h3>
              </div>

              {/* Widget Description */}
              <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                {workflow.description}
              </p>

              {/* Connected Tools */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <ArrowRight className="w-3 h-3" />
                  <span>Connected Tools:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {workflow.tools.map((tool, index) => (
                    <span
                      key={index}
                      className={`px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                        hoveredWidget === workflow.id
                          ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                          : 'bg-slate-700/50 text-slate-400 border border-slate-600/50'
                      }`}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Floating Animation */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                hoveredWidget === workflow.id 
                  ? 'bg-gradient-to-r from-blue-600/5 to-emerald-600/5' 
                  : 'bg-transparent'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to transform your workflows? Let's map out your automation opportunities and build solutions that connect your tools seamlessly.
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
    </section>
  );
}
