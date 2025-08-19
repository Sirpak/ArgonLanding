import React, { useRef, useEffect } from 'react';
import { Zap, ShoppingBag, Gift, MessageSquare, User } from 'lucide-react';

export default function AutomationPipeline() {
  const logosWrap1Ref = useRef<HTMLDivElement>(null);
  const logosWrap2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Inject CSS animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logosMoving {
        0% {
          transform: translateY(-100%);
        }
        100% {
          transform: translateY(100%);
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
          box-shadow: 0 0 0 0 rgba(120, 120, 238, 0),
            0 0 0 40px rgba(120, 120, 238, 0.18);
        }
        100% {
          box-shadow: 0 0 0 40px rgba(120, 120, 238, 0.18),
            0 0 0 60px rgba(120, 120, 238, 0);
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
        animation: logosMoving 15s linear infinite both 1s;
      }
      
      .logos-2 {
        animation: logosMoving 15s linear infinite both 7.5s;
      }
      
      #line-1 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line1 3s cubic-bezier(0.77, 0, 0, 0.175, 1) forwards infinite;
      }
      
      #line-2 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line2 3s cubic-bezier(0.77, 0, 0, 0.175, 1) forwards infinite 0.6s;
      }
      
      #line-3 {
        stroke-dasharray: 60, 600;
        stroke-dashoffset: 24;
        animation: line3 3s cubic-bezier(0.77, 0, 0, 0.175, 1) forwards infinite 0.2s;
      }
      
      .central-logo {
        animation: ripple 0.8s linear infinite;
      }
      
      .central-logo::after {
        animation: scale 2.5s linear infinite;
      }
      
      .rule-1::after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow3 4s cubic-bezier(0.5, 1, 0.89, 1) infinite;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
      
      .rule-1::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.2s;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
      
      .rule-2::after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #2e2e2e 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow2 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.35s;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
      
      .rule-2::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #2e2e2e 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.6s;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
      
      .rule-3::after {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow3 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 0.8s;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
      
      .rule-3::before {
        content: "";
        display: block;
        width: 40px;
        height: 40px;
        opacity: 0.5;
        border-radius: 100%;
        background: radial-gradient(50% 50% at 50% 50%, #ffffff 0%, #f88787 100%);
        position: absolute;
        transform: scale(0);
        animation: popShow 4s cubic-bezier(0.5, 1, 0.89, 1) infinite 1s;
        right: -20px;
        top: 50%;
        margin-top: -20px;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const getRandomIcon = () => {
    const iconPaths = [
      '/icons/docker.png',
      '/icons/aws.png',
      '/icons/stripe.jpeg',
      '/icons/slack.png',
      '/icons/trello.png',
      '/icons/notion.png',
      '/icons/figma.png',
      '/icons/github.png',
      '/icons/discord.png',
      '/icons/zoom.png',
      '/icons/dropbox.png',
      '/icons/airtable.png',
      '/icons/hubspot.png',
      '/icons/salesforce.png',
      '/icons/mailchimp.png',
      '/icons/canva.png',
      '/icons/calendly.png',
      '/icons/typeform.png',
      '/icons/intercom.png',
      '/icons/zendesk.png',
      '/icons/asana.png',
      '/icons/clickup.png',
      '/icons/monday.png',
      '/icons/jira.png'
    ];
    return iconPaths[Math.floor(Math.random() * iconPaths.length)];
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 text-blue-400 px-4 py-2 rounded-full text-base font-medium mb-6">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
            Pipeline Demo
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            See Your Data Flow
          </h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
            Watch as your data flows through our intelligent automation pipeline, connecting every tool and service seamlessly.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="relative flex items-center justify-center w-full h-96 overflow-hidden">
          {/* Moving Logos Section - Left Side */}
          <div className="flex items-center w-96 h-80 overflow-hidden border-r border-slate-600/50">
            <div 
              ref={logosWrap1Ref}
              className="logos-1 flex flex-col items-center w-full h-full"
              style={{
                background: 'radial-gradient(166.55% 283.86% at -39.88% 50%, rgba(255, 255, 255, 0) 65.64%, hsla(184, 100%, 50%, 0.48) 99%)'
              }}
            >
              <div className="box-1 box flex flex-col items-center w-full justify-between mb-8 space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="box-2 box flex flex-col items-center w-full justify-between mb-8 space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="box-3 box flex flex-col items-center w-full justify-between space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
            </div>
            
            <div 
              ref={logosWrap2Ref}
              className="logos-2 flex flex-col items-center w-full h-full"
              style={{
                background: 'radial-gradient(166.55% 283.86% at -39.88% 50%, rgba(255, 255, 255, 0) 65.64%, hsla(184, 100%, 50%, 0.48) 99%)'
              }}
            >
              <div className="box-1 box flex flex-col items-center w-full justify-between mb-8 space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="box-2 box flex flex-col items-center w-full justify-between mb-8 space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
              <div className="box-3 box flex flex-col items-center w-full justify-between space-y-8">
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
                <img src={getRandomIcon()} alt="Tool" className="w-16 h-16 object-contain rounded-lg" />
              </div>
            </div>
          </div>

          {/* Central Processing Hub */}
          <div className="relative -left-16 flex justify-center items-center w-24 h-24 rounded-full bg-white shadow-2xl shadow-blue-500/30 central-logo">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-emerald-600 rounded-full flex items-center justify-center">
              <Zap className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Animated Connection Lines */}
          <div className="absolute w-full h-full z-0 left-0 top-0">
            {/* Line from top icon to center */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute left-32 top-8">
              <path 
                id="line-1"
                d="M0 100 Q50 100 100 100" 
                stroke="#8684FF" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            
            {/* Line from middle icon to center */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute left-32 top-32">
              <path 
                id="line-2"
                d="M0 100 Q50 100 100 100" 
                stroke="#484F65" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
            
            {/* Line from bottom icon to center */}
            <svg width="200" height="200" viewBox="0 0 200 200" fill="none" className="absolute left-32 top-56">
              <path 
                id="line-3"
                d="M0 100 Q50 100 100 100" 
                stroke="#F88787" 
                strokeWidth="3" 
                fill="none"
              />
            </svg>
          </div>

          {/* Results Section - Right Side */}
          <div className="absolute right-32 top-0 h-full flex flex-col justify-center space-y-12">
            <div className="icon flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-blue-500/20 relative">
              <ShoppingBag className="w-8 h-8 text-blue-600" />
              <span className="absolute right-20 text-sm font-medium text-gray-700 whitespace-nowrap">Place Order</span>
            </div>
            <div className="icon flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-blue-500/20 relative">
              <Gift className="w-8 h-8 text-emerald-600" />
              <span className="absolute right-20 text-sm font-medium text-gray-700 whitespace-nowrap">Claim Coupon</span>
            </div>
            <div className="icon flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-blue-500/20 relative">
              <MessageSquare className="w-8 h-8 text-purple-600" />
              <span className="absolute right-20 text-sm font-medium text-gray-700 whitespace-nowrap">Post</span>
            </div>
            <div className="icon flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg shadow-blue-500/20 relative">
              <User className="w-8 h-8 text-indigo-600" />
              <span className="absolute right-20 text-sm font-medium text-gray-700 whitespace-nowrap">Personal Center</span>
            </div>
          </div>

          {/* Rule Indicators */}
          <div className="absolute z-10 right-48 top-0 h-full flex flex-col justify-center">
            <div className="rule-1 relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-semibold text-sm text-center">
                Normal User
              </div>
            </div>
            <div className="rule-2 relative mb-8">
              <div className="w-24 h-24 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center text-white font-semibold text-sm text-center">
                Black Industry Account
              </div>
            </div>
            <div className="rule-3 relative">
              <div className="w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-lg flex items-center justify-center text-white font-semibold text-sm text-center">
                Competitor Account
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Automation Journey
          </button>
        </div>
      </div>
    </section>
  );
}