import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ServicesOverview from "@/components/services-overview";
import ProcessVisualization from "@/components/process-visualization";
import AutomationToolkit from "@/components/automation-toolkit";
import TestimonialsResults from "@/components/testimonials-results";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-50 font-inter antialiased overflow-x-hidden">
      <Navigation />
      <main className="pt-16">
        <HeroSection />
        <ServicesOverview />
        <ProcessVisualization />
        <AutomationToolkit />
        <TestimonialsResults />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
