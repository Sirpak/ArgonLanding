import { Quote, Zap, Users, Clock, TrendingUp, Shield, Target, Lightbulb, Star } from "lucide-react";

interface QuoteBox {
  id: string;
  quote: string;
  icon: React.ReactNode;
  position: { x: number; y: number };
  size: "small" | "medium" | "large";
  color: "blue" | "emerald" | "purple" | "orange";
}

const quotes: QuoteBox[] = [
  {
    id: "simple",
    quote: "We make automation simple — no jargon, just results.",
    icon: <Zap className="w-5 h-5" />,
    position: { x: -600, y: -200 },
    size: "medium",
    color: "blue"
  },
  {
    id: "problem",
    quote: "Tell us your problem, we'll design the solution.",
    icon: <Target className="w-5 h-5" />,
    position: { x: 600, y: -150 },
    size: "medium",
    color: "emerald"
  },
  {
    id: "partner",
    quote: "Think of us as your automation partner, not just a service.",
    icon: <Users className="w-5 h-5" />,
    position: { x: -500, y: 100 },
    size: "large",
    color: "purple"
  },
  {
    id: "experts",
    quote: "Automation is difficult, so rely on experts to help you get it right from the start.",
    icon: <Star className="w-5 h-5" />,
    position: { x: 500, y: 150 },
    size: "large",
    color: "orange"
  },
  {
    id: "support",
    quote: "We don't just build workflows, we support them.",
    icon: <Shield className="w-5 h-5" />,
    position: { x: -400, y: 400 },
    size: "small",
    color: "blue"
  },
  {
    id: "reliable",
    quote: "Reliable automations, built for real-world businesses.",
    icon: <Shield className="w-5 h-5" />,
    position: { x: 400, y: 450 },
    size: "medium",
    color: "emerald"
  },
  {
    id: "ongoing",
    quote: "Ongoing support, so your business never misses a beat.",
    icon: <Clock className="w-5 h-5" />,
    position: { x: -300, y: 700 },
    size: "medium",
    color: "purple"
  },
  {
    id: "resources",
    quote: "Your resources are valuable — we'll help you use them more wisely.",
    icon: <Lightbulb className="w-5 h-5" />,
    position: { x: 300, y: 750 },
    size: "large",
    color: "orange"
  },
  {
    id: "payback",
    quote: "Automations pay for themselves by giving your team hours back every week.",
    icon: <TrendingUp className="w-5 h-5" />,
    position: { x: 0, y: 1000 },
    size: "large",
    color: "blue"
  },
  {
    id: "results",
    quote: "Save time, reduce errors, and scale faster.",
    icon: <Zap className="w-5 h-5" />,
    position: { x: -200, y: 1200 },
    size: "small",
    color: "emerald"
  }
];

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small":
      return "w-64 p-4 text-sm";
    case "medium":
      return "w-72 p-5 text-base";
    case "large":
      return "w-80 p-6 text-lg";
    default:
      return "w-72 p-5 text-base";
  }
};

const getColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20";
    case "emerald":
      return "border-emerald-500/30 bg-emerald-600/10 hover:bg-emerald-600/20";
    case "purple":
      return "border-purple-500/30 bg-purple-600/10 hover:bg-purple-600/20";
    case "orange":
      return "border-orange-500/30 bg-orange-600/10 hover:bg-orange-600/20";
    default:
      return "border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20";
  }
};

const getIconColorClasses = (color: string) => {
  switch (color) {
    case "blue":
      return "text-blue-400 bg-blue-600/20";
    case "emerald":
      return "text-emerald-400 bg-emerald-600/20";
    case "purple":
      return "text-purple-400 bg-purple-600/20";
    case "orange":
      return "text-orange-400 bg-orange-600/20";
    default:
      return "text-blue-400 bg-blue-600/20";
  }
};

export default function InspirationalQuotes() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Quote className="w-5 h-5" />
            Our Promise
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Why Choose Argon
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Discover what makes us different in the world of business automation
          </p>
        </div>

        {/* Scattered Quote Boxes */}
        <div className="relative min-h-[1400px]">
          {quotes.map((quoteBox) => (
            <div
              key={quoteBox.id}
              className={`absolute glass-card rounded-2xl border-2 transition-all duration-500 cursor-pointer group quote-box ${getSizeClasses(quoteBox.size)} ${getColorClasses(quoteBox.color)}`}
              style={{
                left: `${quoteBox.position.x + 400}px`,
                top: `${quoteBox.position.y}px`,
                zIndex: 1
              }}
            >
              {/* Quote Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-full mb-3 ${getIconColorClasses(quoteBox.color)}`}>
                {quoteBox.icon}
              </div>

              {/* Quote Text */}
              <blockquote className="text-slate-200 leading-relaxed font-medium italic">
                "{quoteBox.quote}"
              </blockquote>

              {/* Hover Glow Effect */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 ${
                quoteBox.color === "blue" ? "bg-blue-600/5" :
                quoteBox.color === "emerald" ? "bg-emerald-600/5" :
                quoteBox.color === "purple" ? "bg-purple-600/5" :
                "bg-orange-600/5"
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Ready to experience the difference? Let's build automations that work for your business.
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
            Start Your Journey
            <Zap className="inline w-6 h-6 ml-2 group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}
