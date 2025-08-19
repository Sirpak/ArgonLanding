import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import WhatWeCanDo from "@/components/what-we-can-do";
import ProcessVisualization from "@/components/process-visualization";
import AutomationPipeline from "@/components/automation-pipeline";
import AutomationToolkit from "@/components/automation-toolkit";
import TestimonialsResults from "@/components/testimonials-results";
import TeamSection from "@/components/team-section";
import PricingCTA from "@/components/pricing-cta";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50 font-inter antialiased overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <ServicesOverview />
        <WhatWeCanDo />
        <ProcessVisualization />
        <AutomationPipeline />
        <AutomationToolkit />
        <TestimonialsResults />
        <TeamSection />
        <PricingCTA />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
