import React from 'react';
import { Check, ArrowRight, Zap, Clock, Target, Shield } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
              <Zap className="w-5 h-5" />
              Pricing
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              How can we make your business more efficient?
            </h1>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Every business is unique, and so is every automation solution. We believe in{' '}
              <span className="bg-red-500 text-white px-3 py-1 rounded-lg font-semibold">tailored</span>{' '}
              pricing that fits your specific needs. You only pay for what you need, nothing more.
            </p>
            <p className="text-xl text-gray-500 mt-6 max-w-3xl mx-auto">
              Whether you need a quick fix, ongoing support, or a complete automation transformation, 
              we have flexible options designed to scale with your business.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailored Solutions</h3>
              <p className="text-gray-600">Every automation is custom-built for your specific workflow and business needs.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Pricing</h3>
              <p className="text-gray-600">Choose the option that works best for your budget and timeline.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ongoing Support</h3>
              <p className="text-gray-600">We're here to help long after the initial setup is complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Choose Your Path to Efficiency
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Start with what you need today, and scale up as you see the value automation brings to your business.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Option A - Hourly */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Hourly</h3>
                <p className="text-blue-100">Perfect for quick fixes and consultations</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $50–$150
                  </div>
                  <div className="text-gray-600">per hour</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Depending on your skill level + client size
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Quick consultations and troubleshooting</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">One-off automation fixes</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Strategy sessions and planning</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  Book a Consultation
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Option B - Per Project */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative">
              <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
              <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Per Project</h3>
                <p className="text-emerald-100">Tailored solutions for specific needs</p>
              </div>
              <div className="p-8">
                <div className="space-y-6 mb-8">
                  <div className="border-b border-gray-100 pb-4">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Simple Automation</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">$300–$750</div>
                    <div className="text-sm text-gray-600">1–2 steps (e.g., Google Sheets → Slack)</div>
                  </div>
                  
                  <div className="border-b border-gray-100 pb-4">
                    <div className="text-lg font-semibold text-gray-900 mb-2">Medium Workflow</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">$1,000–$3,500</div>
                    <div className="text-sm text-gray-600">Multi-step, multiple systems (CRM + email + reporting)</div>
                  </div>
                  
                  <div>
                    <div className="text-lg font-semibold text-gray-900 mb-2">Complex Solution</div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">$5,000+</div>
                    <div className="text-sm text-gray-600">Custom APIs, multiple apps, error handling, dashboards</div>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Option C - Retainer */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-2">Retainer</h3>
                <p className="text-purple-100">Ongoing support and maintenance</p>
              </div>
              <div className="p-8">
                <div className="text-center mb-8">
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    $250–$500
                  </div>
                  <div className="text-gray-600">per month</div>
                  <div className="text-sm text-gray-500 mt-2">
                    Monitoring & light tweaks
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Ongoing monitoring and maintenance</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Quick adjustments and updates</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Priority support and response</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Enterprise: $1k–$2k/month</span>
                  </div>
                </div>

                <button className="w-full bg-gray-900 text-white py-4 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-200 flex items-center justify-center gap-2">
                  Start Retainer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Pro Tip Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-yellow-800">Pro Tip</h3>
              </div>
              <p className="text-lg text-yellow-700 leading-relaxed">
                Start with <strong>project-based pricing</strong> to see the immediate value automation brings to your business. 
                Once you experience the efficiency gains, we can easily transition you into a monthly retainer for ongoing support and optimization.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <p className="text-xl text-gray-600 mb-8">
              Ready to transform your business with automation?
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Let's Talk About Your Needs
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
