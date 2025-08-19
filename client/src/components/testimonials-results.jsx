import { Award, Star } from "lucide-react";

const metrics = [
  { value: "85%", label: "Time Savings", gradient: "from-emerald-400 to-blue-400" },
  { value: "72h", label: "Per Week Reclaimed", gradient: "from-blue-400 to-purple-400" },
  { value: "94%", label: "Error Reduction", gradient: "from-purple-400 to-orange-400" },
  { value: "3.2x", label: "ROI Improvement", gradient: "from-orange-400 to-emerald-400" }
];

const testimonials = [
  {
    quote: "Argon18 transformed our quote-to-cash process from days to hours. The automation they built saved us 40+ hours per week.",
    name: "Marcus Chen",
    title: "Operations Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
  },
  {
    quote: "Their strategic approach uncovered automation opportunities we never knew existed. ROI was evident within the first month.",
    name: "Sarah Johnson",
    title: "CEO, Growth Ventures",
    image: "data:image/jpeg;base64,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"
  },
  {
    quote: "No more manual invoicing or follow-ups. The team's expertise in both technology and business operations is unmatched.",
    name: "David Rodriguez",
    title: "Founder, BuildCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
  }
];

export default function TestimonialsResults() {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-slate-800/50 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600/20 to-purple-600/20 text-teal-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Transforming Businesses
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Real results from clients who trusted us to overhaul their operations.
          </p>
        </div>

        {/* Results Metrics */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {metrics.map((metric, idx) => (
            <div key={idx} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <blockquote className="text-slate-200 mb-6 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover" 
                />
                <div>
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-slate-400 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
