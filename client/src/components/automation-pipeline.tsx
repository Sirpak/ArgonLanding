import { useEffect, useRef } from 'react';
import { ArrowRight, Zap, Database, Cloud, Shield, BarChart3 } from "lucide-react";
import TextType from './TextType';

export default function AutomationPipeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logosWrap1Ref = useRef<HTMLDivElement>(null);
  const logosWrap2Ref = useRef<HTMLDivElement>(null);

  // Array of icon paths from assets/icons folder
  const iconPaths = [
    "/icons/docker.png",
    "/icons/aws.png",
    "/icons/stripe.jpeg",
    "/icons/openai.jpg",
    "/icons/Mailchimp-logo.png",
    "/icons/teams.jpeg",
    "/icons/asana.jpeg",
    "/icons/confluence.png",
    "/icons/code.jpeg",
    "/icons/Invoice-Ninja-v5.png",
    "/icons/qbintuit.png",
    "/icons/mso.jpeg",
    "/icons/bamboo.jpeg",
    "/icons/notion.png",
    "/icons/airtable.png",
    "/icons/mysql.png",
    "/icons/gdrive.png",
    "/icons/hubspot.jpg",
    "/icons/trello.png",
    "/icons/slack.png",
    "/icons/vero.jpg",
    "/icons/lemlist.png",
    "/icons/gmail.png",
    "/icons/pagerduty.png"
  ];

  // Function to get random icon
  const getRandomIcon = () => {
    return iconPaths[Math.floor(Math.random() * iconPaths.length)];
  };

  const pipelineQuotes = [
    "We help small businesses do more with less by automating the repetitive tasks that slow them down.",
    "Your team should focus on growth, not manual busywork.",
    "We connect your tools so your business runs seamlessly.",
    "Automating routine tasks to save your team time, allowing them to focus on what really matters.",
    "Turn time-consuming tasks into background processes.",
    "Work smarter, not harder — let automation handle the grind.",
    "Your resources are valuable — we'll help you use them more wisely.",
    "Automations pay for themselves by giving your team hours back every week.",
    "Save time, reduce errors, and scale faster.",
    "We transform your business through our proven process. We create tailor-made solutions that deliver more efficient ways to get work done by combining the tools you already use with automation and AI.",
    "Efficiency that compounds — every workflow saves time forever.",
    "Cut costs, boost productivity, and reclaim your team's focus.",
    "We make automation simple — no jargon, just results.",
    "Tell us your problem, we'll design the solution.",
    "Think of us as your automation partner, not just a service.",
    "Automation is difficult, so rely on experts to help you get it right from the start.",
    "Simple solutions to complex problems.",
    "Automation you'll actually understand and use.",
    "We don't just build workflows, we support them.",
    "Reliable automations, built for real-world businesses.",
    "Ongoing support, so your business never misses a beat.",
    "We're with you at every step — from idea to execution to ongoing care.",
    "Automation you can trust, built for people not just systems.",
    "Custom workflows tailored to your business, not cookie-cutter templates.",
    "Powered by tools you already use, enhanced by automation.",
    "Affordable automation for SMBs — no enterprise price tag.",
    "Automation designed for small businesses, not Fortune 500s.",
    "Tailored to your workflow, built to grow with you.",
    "Your competitive edge — faster, leaner, smarter operations."
  ];

  useEffect(() => {
    // Add CSS animations dynamically
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logosMoving {
        to {
          transform: translateX(105%);
        }
      }
      
      @keyframes line1 {
        to {
          stroke-dashoffset: -620;
        }
      }
      
      @keyframes line2 {
        to {
          stroke-dashoffset: -620;
        }
      }
      
      @keyframes line3 {
        to {
          stroke-dashoffset: -620;
        }
      }
      
      @keyframes ripple {
        0% {
          box-shadow: 0 0 0 0 rgba(134, 132, 255, 0),
            0 0 0 40px rgba(134, 132, 255, 0.18);
        }
        100% {
          box-shadow: 0 0 0 40px rgba(134, 132, 255, 0.18),
            0 0 0 60px rgba(134, 132, 255, 0);
        }
      }
      
      @keyframes scale {
        50% {
          transform: scale(1.15);
        }
        0%, 100% {
          transform: scale(1);
        }
      }
      
      @keyframes popShow {
        80% {
          opacity: 0;
          transform: scale(0);
        }
        91% {
          opacity: 0.5;
        }
        100% {
          opacity: 0;
          transform: scale(2);
        }
      }
      
      @keyframes popShow2 {
        80% {
          opacity: 0;
          transform: scale(0);
        }
        91% {
          opacity: 0.1;
        }
        100% {
          opacity: 0;
          transform: scale(2.4);
        }
      }
      
      @keyframes popShow3 {
        80% {
          opacity: 0;
          transform: scale(0);
        }
        91% {
          opacity: 0.3;
        }
        100% {
          opacity: 0;
          transform: scale(2.4);
        }
      }
      
      .logos-1 {
        animation: logosMoving 10s linear infinite both 1s;
      }
      
      .logos-2 {
        animation: logosMoving 10s linear infinite both 1s;
      }
      
      #line-1 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line1 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite;
      }
      
      #line-2 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line2 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite 0.6s;
      }
      
      #line-3 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line3 3s cubic-bezier(0.77, 0, 0.175, 1) forwards infinite 0.2s;
      }
      
      .shenzhi-logo {
        animation: ripple 0.8s linear infinite;
      }
      
      .shenzhi-logo::after {
        animation: scale 2.5s linear infinite;
      }
      
      .rule div:nth-of-type(1)::after {
        animation: popShow3 4s cubic-bezier(0.5, 1, 0.89, 1) infinite;
      }
      
      .rule div:nth-of-type(1)::before {
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.2s;
      }
      
      .rule div:nth-of-type(2)::after {
        animation: popShow2 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.35s;
      }
      
      .rule div:nth-of-type(2)::before {
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.6s;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="pipeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <Zap className="w-5 h-5" />
            Live Pipeline Demo
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
            See Your Data Flow
          </h2>
          <p className="text-2xl text-slate-300 max-w-3xl mx-auto">
            Watch real-time data flow through our automation pipeline. Every step is optimized for maximum efficiency and reliability.
          </p>
          
          {/* Inspirational Quote */}
          <div className="mt-12 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border-2 border-blue-500/30 bg-blue-600/10 hover:bg-blue-600/20 transition-all duration-300 group text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-blue-400">Pipeline Promise</h4>
              </div>
              <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
                <TextType 
                  text={pipelineQuotes}
                  typingSpeed={70}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="|"
                  className="text-blue-400"
                  variableSpeed={undefined}
                  onSentenceComplete={undefined}
                />
              </blockquote>
            </div>
          </div>
        </div>

        {/* Interactive Pipeline Container */}
        <div className="flex justify-center">
          <div 
            ref={containerRef}
            className="relative flex items-center w-full max-w-6xl h-96 overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-600/50"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(134, 132, 255, 0.1) 0%, transparent 50%), 
                               radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)`
            }}
          >
            {/* Moving Logos Section */}
            <div className="flex items-center w-96 h-80 overflow-hidden border-r border-slate-600/50">
              <div 
                ref={logosWrap1Ref}
                className="logos-1 flex items-center w-full h-full"
                style={{
                  background: 'radial-gradient(166.55% 283.86% at -39.88% 50%, rgba(255, 255, 255, 0) 65.64%, hsla(184, 100%, 50%, 0.48) 99%)'
                }}
              >
                <div className="box-1 box flex w-full justify-around mb-8">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
                <div className="box-2 box flex w-full justify-around mb-8">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
                <div className="box-3 box flex w-full justify-around">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
              </div>
              
              <div 
                ref={logosWrap2Ref}
                className="logos-2 flex items-center w-full h-full"
                style={{
                  background: 'radial-gradient(166.55% 283.86% at -39.88% 50%, rgba(255, 255, 255, 0) 65.64%, hsla(184, 100%, 50%, 0.48) 99%)'
                }}
              >
                <div className="box-1 box flex w-full justify-around mb-8">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
                <div className="box-2 box flex w-full justify-around mb-8">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
                <div className="box-3 box flex w-full justify-around">
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                  <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
                </div>
              </div>
            </div>

            {/* Central Processing Hub */}
            <div className="relative -left-16 flex justify-center items-center w-24 h-24 rounded-full bg-white shadow-2xl shadow-blue-500/30">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* Animated Connection Lines */}
            <div className="absolute w-full h-full left-0 top-0 pointer-events-none">
              {/* Line 1 - Main Flow */}
              <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  id="line-1"
                  d="M400 200 Q500 150 600 200 Q700 250 750 200" 
                  stroke="#8684FF" 
                  strokeWidth="8" 
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              
              {/* Line 2 - Secondary Flow */}
              <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  id="line-2"
                  d="M400 200 Q500 250 600 200 Q700 150 750 200" 
                  stroke="#484F65" 
                  strokeWidth="6" 
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              
              {/* Line 3 - Data Stream */}
              <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path 
                  id="line-3"
                  d="M400 200 Q500 180 600 200 Q700 220 750 200" 
                  stroke="#F88787" 
                  strokeWidth="4" 
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </div>

            {/* Results Section */}
            <div className="absolute right-20 top-1/2 transform -translate-y-1/2 space-y-8">
              <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
              <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
              <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
              <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain" />
            </div>

            {/* Animated Rule Indicators */}
            <div className="rule absolute right-32 top-1/2 transform -translate-y-1/2">
              <div className="relative -right-20 -top-10">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-red-500 rounded-full opacity-50"></div>
              </div>
              <div className="relative -right-28 -top-20">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-slate-600 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Pipeline Description */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl border border-slate-600/50">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Real-Time Data Processing
            </h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Watch as your data flows through our intelligent pipeline. Each icon represents a different stage of processing, 
              from data collection to final output. The animated lines show the real-time flow of information.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Data Input</h4>
                <p className="text-slate-300">Multiple data sources feeding into the pipeline</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-emerald-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Processing Hub</h4>
                <p className="text-slate-300">Central intelligence coordinating all operations</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Output & Analytics</h4>
                <p className="text-slate-300">Processed data ready for business insights</p>
              </div>
            </div>

            <button
              onClick={() => {
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="group bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-8 py-4 rounded-xl font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              Experience the Pipeline
              <ArrowRight className="inline w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}