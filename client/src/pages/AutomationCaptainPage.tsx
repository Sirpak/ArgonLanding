import React, { useState } from 'react';
import { 
  ArrowRight, 
  Zap, 
  Settings, 
  Code, 
  GitBranch, 
  CheckCircle, 
  Play, 
  Shield, 
  TrendingUp, 
  Wrench,
  MessageSquare,
  Calendar,
  Users,
  BarChart3,
  Database,
  Cloud,
  Globe,
  CreditCard,
  FileText,
  Server
} from 'lucide-react';
import Navigation from '@/components/navigation';

export default function AutomationCaptainPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // TODO: Implement actual form submission
    alert('Thank you! We\'ll be in touch soon.');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50 font-inter antialiased overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 text-indigo-400 px-4 py-2 rounded-full text-base font-medium mb-6">
              <Zap className="w-5 h-5" />
              Automation Captain
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Offload all automation and process headaches onto us.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Automation Captain takes complete, proactive ownership of all things automation—at a fraction of the cost of a full-time hire.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Book a Strategy Call
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button
                onClick={() => scrollToSection('how')}
                className="border-2 border-slate-400 text-slate-300 px-8 py-4 rounded-xl font-semibold text-lg hover:border-indigo-400 hover:text-indigo-400 transition-all duration-300"
              >
                See How It Works
              </button>
            </div>
            
            {/* Supporting Badges */}
            <div className="flex flex-wrap justify-center gap-4">
              {['Custom workflows', 'API integrations', 'No-code/low-code', 'Proactive monitoring'].map((badge) => (
                <div key={badge} className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-full text-sm font-medium border border-slate-600">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Your business is making headway. It's also giving you headaches.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {[
                "An avalanche of manual tasks is slowing down your momentum.",
                "Aligning workflow needs across teams is becoming an impossible challenge.",
                "Inconsistent processes are causing confusion and costly errors.",
                "You need a dedicated, available team to take complete ownership and help you scale, without draining your resources."
              ].map((problem, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700 font-medium">{problem}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fractional Chief Automation Service Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              With our Fractional Chief Automation service, you get:
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Custom-built automation solutions",
                description: "Tailored strategies, no-code/low-code development, API integration, and documentation.",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Settings className="w-8 h-8" />,
                title: "Ongoing support & optimization",
                description: "Dedicated project manager, proactive monitoring, unlimited maintenance, continuous improvements.",
                color: "from-indigo-500 to-indigo-600"
              },
              {
                icon: <Wrench className="w-8 h-8" />,
                title: "Hands-on execution & maintenance",
                description: "Unlimited support, real-time issue resolution, scheduled Zoom sessions, evolving with your business.",
                color: "from-purple-500 to-purple-600"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`bg-gradient-to-br ${feature.color} p-8 text-white text-center`}>
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>
                <div className="p-8">
                  <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We've Got You Covered Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              We've got you covered for anything that comes up:
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {[
              {
                title: "Evolving processes",
                description: "CRM needs updating as you grow? We automate it, so you can focus on sales."
              },
              {
                title: "Error fixing",
                description: "Zapier glitch causing data loss? We troubleshoot and fix it fast."
              },
              {
                title: "Constant updates",
                description: "Email marketing platform changed again? We keep your campaigns running smoothly."
              },
              {
                title: "Bug squashing",
                description: "Pesky bugs in your automations? We hunt them down and eliminate them."
              },
              {
                title: "Scaling up",
                description: "Customer support tickets doubling? We automate responses to save you time."
              },
              {
                title: "Optimization",
                description: "A/B testing revealing new insights? We fine-tune your workflows for maximum impact."
              },
              {
                title: "Multiple integrations",
                description: "Struggling to link your CRM, marketing, and support tools? We make them play nice."
              },
              {
                title: "Resource constraints",
                description: "Team drowning in manual data entry? We automate it, so they can tackle the big stuff."
              }
            ].map((scenario, index) => (
              <div key={index} className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:shadow-lg transition-all duration-300">
                <h3 className="font-semibold text-gray-900 mb-3">{scenario.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{scenario.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tools we work (and play) with:
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We also integrate niche or internal tools via API/HTTP.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              'n8n', 'Zapier', 'Make', 'Slack', 'Google Workspace',
              'Microsoft 365', 'HubSpot', 'Salesforce', 'Airtable', 'Notion',
              'Trello', 'Asana', 'Jira', 'Twilio', 'Stripe',
              'QuickBooks', 'Xero', 'Postgres', 'MySQL', 'AWS', 'GCP'
            ].map((tool, index) => (
              <div key={index} className="bg-white rounded-xl p-4 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <div className="w-6 h-6 bg-indigo-600 rounded"></div>
                </div>
                <span className="text-sm font-medium text-gray-700">{tool}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How It Works
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {[
              {
                step: "1",
                title: "Discovery & Mapping",
                description: "We map your processes and define success metrics.",
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                step: "2",
                title: "Build & Validate",
                description: "Sandbox first, then production with safeguards.",
                icon: <Code className="w-8 h-8" />
              },
              {
                step: "3",
                title: "Launch & Document",
                description: "Clear handover and playbooks.",
                icon: <FileText className="w-8 h-8" />
              },
              {
                step: "4",
                title: "Monitor & Improve",
                description: "Proactive care and continuous optimization.",
                icon: <TrendingUp className="w-8 h-8" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  {step.step}
                </div>
                <div className="w-16 h-16 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-indigo-600">{step.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Book a Strategy Call
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                  placeholder="Tell us about your automation needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-indigo-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
