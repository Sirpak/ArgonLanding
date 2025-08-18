import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import argonLogo from "@assets/Screenshot from 2025-08-17 20-21-35_1755478316071.png";

const pipelineSteps = [
  { id: 1, name: "Lead Capture", description: "Form submission triggers automation" },
  { id: 2, name: "Data Validation", description: "Clean and verify contact information" },
  { id: 3, name: "CRM Integration", description: "Auto-create lead in HubSpot/Salesforce" },
  { id: 4, name: "Team Notification", description: "Instant Slack alert to sales team" },
  { id: 5, name: "Follow-up Email", description: "Personalized welcome sequence starts" }
];

interface PipelineNodeProps {
  position: number;
  isActive: boolean;
  step: typeof pipelineSteps[0];
}

function PipelineNode({ position, isActive, step }: PipelineNodeProps) {
  return (
    <div
      className={`absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-slate-900 border-2 transition-all duration-300 ${
        isActive
          ? 'border-purple-400 shadow-lg shadow-purple-400/50 ring-2 ring-purple-400/30'
          : 'border-cyan-400/75 shadow-md shadow-cyan-400/30'
      }`}
      style={{ left: `${position}%` }}
      title={step.name}
    />
  );
}

interface PipelineTokenProps {
  isPlaying: boolean;
  speed: number;
  onPositionChange: (position: number) => void;
}

function PipelineToken({ isPlaying, speed, onPositionChange }: PipelineTokenProps) {
  const [position, setPosition] = useState(12);

  useEffect(() => {
    if (!isPlaying) return;

    const startTime = Date.now();
    const duration = speed * 1000; // Convert to milliseconds
    const startPosition = 12;
    const endPosition = 88;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = (elapsed % duration) / duration;
      const currentPosition = startPosition + (endPosition - startPosition) * progress;
      
      setPosition(currentPosition);
      onPositionChange(currentPosition);
      
      if (isPlaying) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, speed, onPositionChange]);

  return (
    <div
      className="absolute top-1/2 w-5 h-5 rounded-full bg-white transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      style={{
        left: `${position}%`,
        boxShadow: '0 0 0 2px #0f172a inset, 0 0 16px #22d3ee, 0 0 32px #a78bfa'
      }}
    />
  );
}

interface PipelineTrackProps {
  speed: number;
  isPlaying: boolean;
}

function PipelineTrack({ speed, isPlaying }: PipelineTrackProps) {
  return (
    <div className="relative h-36">
      {/* Background track */}
      <div className="absolute left-20 right-20 top-1/2 h-3 transform -translate-y-1/2 bg-slate-700 rounded-full shadow-inner" />
      
      {/* Animated progress bar */}
      <div 
        className="absolute left-20 right-20 top-1/2 h-2.5 transform -translate-y-1/2 rounded-full overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #22d3ee, #a78bfa)',
          filter: 'drop-shadow(0 0 6px rgba(34, 211, 238, 0.7))'
        }}
      >
        <div 
          className="absolute inset-0 opacity-65"
          style={{
            background: 'repeating-linear-gradient(90deg, #22d3ee 0 12px, transparent 12px 24px)',
            animation: `flow ${speed}s linear infinite`,
            animationPlayState: isPlaying ? 'running' : 'paused',
            filter: 'drop-shadow(0 0 8px rgba(167, 139, 250, 0.7))'
          }}
        />
      </div>
    </div>
  );
}

export default function AutomationPipeline() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(10);
  const [currentStep, setCurrentStep] = useState(0);

  const nodePositions = [12, 32, 52, 72, 88];

  const handleTokenPositionChange = (tokenPosition: number) => {
    // Determine which step the token is closest to
    let closestStepIndex = 0;
    let minDistance = Math.abs(tokenPosition - nodePositions[0]);
    
    for (let i = 1; i < nodePositions.length; i++) {
      const distance = Math.abs(tokenPosition - nodePositions[i]);
      if (distance < minDistance) {
        minDistance = distance;
        closestStepIndex = i;
      }
    }
    
    setCurrentStep(closestStepIndex);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetAnimation = () => {
    setCurrentStep(0);
    setIsPlaying(false);
    setTimeout(() => setIsPlaying(true), 100);
  };

  return (
    <section id="pipeline" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-800/50">
      <style>{`
        @keyframes flow {
          to { background-position-x: -400px }
        }
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #22d3ee;
          cursor: pointer;
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
        }
        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #22d3ee;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 8px rgba(34, 211, 238, 0.5);
        }
      `}</style>
      
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

        {/* Live Pipeline Demo */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Live Pipeline Demo
            </h3>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              See our automation pipeline in action with real-time data processing and workflow execution
            </p>
          </div>

          {/* Inspirational Quote near Live Pipeline Demo */}
          <div className="mb-12 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-2xl border-2 border-emerald-500/30 bg-emerald-600/10 hover:bg-emerald-600/20 transition-all duration-300 group text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600/20 rounded-full flex items-center justify-center">
                  <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-emerald-400">Real Results</h4>
              </div>
              <blockquote className="text-slate-200 leading-relaxed font-medium italic text-lg">
                "Reliable automations, built for real-world businesses."
              </blockquote>
            </div>
          </div>
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
        <div className="relative mb-8">
          <PipelineTrack speed={speed} isPlaying={isPlaying} />
          
          {/* Moving Token */}
          <PipelineToken 
            isPlaying={isPlaying} 
            speed={speed} 
            onPositionChange={handleTokenPositionChange}
          />
          
          {/* Pipeline Nodes */}
          {pipelineSteps.map((step, index) => (
            <PipelineNode
              key={step.id}
              position={nodePositions[index]}
              isActive={currentStep === index}
              step={step}
            />
          ))}
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
                className="w-32 h-2 bg-slate-600 rounded-lg appearance-none cursor-pointer slider"
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