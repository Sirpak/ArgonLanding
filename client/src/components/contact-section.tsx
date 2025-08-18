import { useState } from "react";
import { Calendar, ArrowRight, Search, Target, MapPin, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertConsultationRequestSchema } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import type { InsertConsultationRequest } from "@shared/schema";

const benefits = [
  {
    icon: Search,
    title: "Process Audit",
    description: "Complete analysis of your current workflows and automation opportunities.",
    gradient: "from-blue-500 to-blue-600"
  },
  {
    icon: Target,
    title: "ROI Estimate",
    description: "Detailed projection of time savings and productivity gains.",
    gradient: "from-emerald-500 to-emerald-600"
  },
  {
    icon: MapPin,
    title: "Implementation Roadmap",
    description: "Clear timeline and next steps to get your automation project started.",
    gradient: "from-purple-500 to-purple-600"
  }
];

export default function ContactSection() {
  const { toast } = useToast();
  
  const form = useForm<InsertConsultationRequest>({
    resolver: zodResolver(insertConsultationRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      processDescription: ""
    }
  });

  const createConsultationRequest = useMutation({
    mutationFn: async (data: InsertConsultationRequest) => {
      const response = await apiRequest("POST", "/api/consultation-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Consultation Requested!",
        description: "We'll be in touch within 24 hours to schedule your automation triage.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Something went wrong",
        description: "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertConsultationRequest) => {
    createConsultationRequest.mutate(data);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600/20 to-red-600/20 text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Calendar className="w-4 h-4" />
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            Ready to Overclock Your Business?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Book a 20-minute automation triage call and discover how we can transform your operations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contact Form */}
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Schedule Your Consultation</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">First Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="John"
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-300">Last Name</FormLabel>
                        <FormControl>
                          <Input 
                            {...field}
                            placeholder="Doe"
                            className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          placeholder="john@company.com"
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">Company</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          placeholder="Acme Corp"
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="processDescription"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-slate-300">What process would you like to automate?</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          placeholder="Tell us about your biggest operational challenge..."
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-blue-500"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={createConsultationRequest.isPending}
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  {createConsultationRequest.isPending ? "Submitting..." : "Book Free Consultation"}
                  <ArrowRight className="inline w-5 h-5 ml-2" />
                </Button>
              </form>
            </Form>
          </div>

          {/* Benefits List */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">What You'll Get:</h3>
              
              <div className="space-y-6">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{benefit.title}</h4>
                        <p className="text-slate-300">{benefit.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="glass-card p-6 rounded-xl">
              <h4 className="text-white font-semibold mb-4">Prefer to talk first?</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>hello@argon18.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="w-5 h-5 text-emerald-400" />
                  <span>(555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
