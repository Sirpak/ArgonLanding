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
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=120&h=120"
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
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${metric.gradient} bg-clip-text text-transparent mb-2`}>
                {metric.value}
              </div>
              <div className="text-slate-300">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl">
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
