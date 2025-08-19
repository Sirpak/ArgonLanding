import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { useLocation } from 'wouter';

export default function PricingCTA() {
  const [, setLocation] = useLocation();

  const navigateToPricing = () => {
    setLocation("/pricing");
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Ready to Get Started?
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            See Our Transparent Pricing
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            Every business is unique, and so is every automation solution. We offer flexible pricing options 
            that scale with your needs - from hourly consultations to ongoing retainer services.
          </p>
          <button
            onClick={navigateToPricing}
            className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
          >
            View Pricing Options
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
