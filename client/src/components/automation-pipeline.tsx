import { useState, useEffect, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import argonLogo from "@assets/Screenshot from 2025-08-17 20-21-35_1755478316071.png";
import argonLogoAlt from "@assets/argon_logo_1755478319830.png";

const pipelineSteps = [
  { id: 1, name: "Lead Capture", description: "Form submission triggers automation" },
  { id: 2, name: "Data Validation", description: "Clean and verify contact information" },
  { id: 3, name: "CRM Integration", description: "Auto-create lead in HubSpot/Salesforce" },
  { id: 4, name: "Team Notification", description: "Instant Slack alert to sales team" },
  { id: 5, name: "Follow-up Email", description: "Personalized welcome sequence starts" }
];

export default function AutomationPipeline() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(10);
  const [currentStep, setCurrentStep] = useState(0);
  const tokenRef = useRef<HTMLDivElement>(null);
  const pipelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      :root {
        --flow-duration: ${speed}s;
        --gutter: 80px;
        --pipe: #22d3ee;
        --accent: #a78bfa;
        --node: #0b1220;
      }

      .pipeline-track {
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        top: 50%;
        height: 12px;
        transform: translateY(-50%);
        background: #1e293b;
        border-radius: 999px;
        box-shadow: inset 0 0 0 1px #10263c;
      }

      .pipeline-progress {
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        top: 50%;
        height: 10px;
        transform: translateY(-50%);
        background: linear-gradient(90deg, var(--pipe), var(--accent));
        border-radius: 999px;
        mask: linear-gradient(90deg, black 0 50%, transparent 50% 100%);
        animation: sweep var(--flow-duration) linear infinite;
        filter: drop-shadow(0 0 6px color-mix(in srgb, var(--pipe) 70%, transparent));
      }

      @keyframes sweep {
        from { mask-position: 0 0 }
        to { mask-position: 100% 0 }
      }

      .pipeline-dashes {
        position: absolute;
        left: var(--gutter);
        right: var(--gutter);
        top: 50%;
        height: 6px;
        transform: translateY(-50%);
        background: repeating-linear-gradient(90deg, var(--pipe) 0 12px, transparent 12px 24px);
        border-radius: 999px;
        opacity: 0.65;
        animation: flow var(--flow-duration) linear infinite;
        filter: drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 70%, transparent));
      }

      @keyframes flow {
        to { background-position-x: -400px }
      }

      .pipeline-token {
        position: absolute;
        top: 50%;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: white;
        transform: translate(-50%, -50%);
        box-shadow: 0 0 0 2px #0f172a inset, 0 0 16px var(--pipe), 0 0 32px var(--accent);
        animation: travel var(--flow-duration) linear infinite;
      }

      @keyframes travel {
        from { left: calc(var(--gutter) + 0px) }
        to { left: calc(100% - var(--gutter) - 0px) }
      }

      .pipeline-node {
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 18px;
        height: 18px;
        border-radius: 999px;
        background: var(--node);
        border: 2px solid color-mix(in srgb, var(--pipe) 75%, white);
        box-shadow: 0 0 10px color-mix(in srgb, var(--pipe) 70%, transparent);
        transition: all 0.3s ease;
      }

      .pipeline-node.active {
        border-color: var(--accent);
        box-shadow: 0 0 12px var(--accent), 0 0 28px color-mix(in srgb, var(--accent) 70%, transparent);
        outline: 3px solid color-mix(in srgb, var(--accent) 30%, transparent);
        outline-offset: 2px;
      }

      .n1 { left: 12% }
      .n2 { left: 32% }
      .n3 { left: 52% }
      .n4 { left: 72% }
      .n5 { left: 88% }

      .pipeline-paused .pipeline-progress,
      .pipeline-paused .pipeline-dashes,
      .pipeline-paused .pipeline-token {
        animation-play-state: paused;
      }
    `;
    document.head.appendChild(styleElement);

    return () => {
      document.head.removeChild(styleElement);
    };
  }, [speed]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && tokenRef.current && pipelineRef.current) {
        const tokenRect = tokenRef.current.getBoundingClientRect();
        const pipelineRect = pipelineRef.current.getBoundingClientRect();
        const x = tokenRect.left - pipelineRect.left;
        const gutter = 80;
        const w = pipelineRect.width;
        const stepXs = [0.12, 0.32, 0.52, 0.72, 0.88].map(f => gutter + f * (w - gutter * 2));
        
        let idx = 0;
        while (idx < stepXs.length - 1 && x > stepXs[idx]) idx++;
        setCurrentStep(idx);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    // Force restart animation by briefly pausing and resuming
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 50);
  };

  return (
    <section id="pipeline" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img src={argonLogo} alt="Argon18 Logo" className="w-16 h-16" />
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Live Pipeline Demo
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Watch how our automation flows seamlessly connect your business processes in real-time.
          </p>
        </div>

        {/* Pipeline Steps Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
          {pipelineSteps.map((step, index) => (
            <div
              key={step.id}
              className={`glass-card p-4 rounded-xl text-center transition-all duration-300 ${
                currentStep === index ? 'ring-2 ring-cyan-400 bg-slate-700/60' : 'hover:bg-slate-700/40'
              }`}
            >
              <div className={`w-8 h-8 rounded-full mx-auto mb-3 flex items-center justify-center text-sm font-bold ${
                currentStep === index 
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-400 text-white' 
                  : 'bg-slate-600 text-slate-300'
              }`}>
                {step.id}
              </div>
              <h3 className="text-white font-semibold text-sm mb-1">{step.name}</h3>
              <p className="text-slate-400 text-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Pipeline Visualization */}
        <div className={`relative mb-8 ${!isPlaying ? 'pipeline-paused' : ''}`}>
          <div ref={pipelineRef} className="relative h-36">
            <div className="pipeline-track"></div>
            <div className="pipeline-progress"></div>
            <div className="pipeline-dashes"></div>
            
            {/* Moving Token */}
            <div ref={tokenRef} className="pipeline-token"></div>
            
            {/* Nodes */}
            {pipelineSteps.map((step, index) => (
              <div
                key={step.id}
                className={`pipeline-node n${step.id} ${currentStep === index ? 'active' : ''}`}
                title={step.name}
              ></div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 glass-card p-6 rounded-xl">
          <div className="flex items-center gap-4">
            <div className="text-sm text-slate-400">Status:</div>
            <div className="font-semibold text-white">
              {pipelineSteps[currentStep]?.name || 'Starting...'}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400">Speed:</span>
              <input
                type="range"
                min="6"
                max="18"
                value={speed}
                onChange={(e) => setSpeed(Number(e.target.value))}
                className="w-32 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer"
              />
              <span className="text-xs text-slate-400">{speed}s</span>
            </div>
            
            <button
              onClick={togglePlayPause}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={resetAnimation}
              className="flex items-center gap-2 bg-slate-600 hover:bg-slate-500 text-white px-4 py-2 rounded-lg font-medium transition-all duration-200"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </div>

        {/* Current Step Details */}
        <div className="mt-8 glass-card p-6 rounded-xl">
          <h4 className="text-white font-semibold mb-2">
            Step {currentStep + 1}: {pipelineSteps[currentStep]?.name}
          </h4>
          <p className="text-slate-300">
            {pipelineSteps[currentStep]?.description}
          </p>
        </div>
      </div>
    </section>
  );
}