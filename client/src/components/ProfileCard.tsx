import React, { useState } from 'react';

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: string;
  contactText: string;
  avatarUrl: string;
  showUserInfo: boolean;
  enableTilt: boolean;
  enableMobileTilt: boolean;
  onContactClick: () => void;
}

export default function ProfileCard({
  name,
  title,
  handle,
  status,
  contactText,
  avatarUrl,
  showUserInfo,
  enableTilt,
  enableMobileTilt,
  onContactClick
}: ProfileCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || (window.innerWidth <= 768 && !enableMobileTilt)) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || (window.innerWidth <= 768 && !enableMobileTilt)) return;
    
    const card = e.currentTarget;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div
      className="glass-card p-6 rounded-2xl hover:bg-slate-700/40 transition-all duration-300 group text-center relative overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      style={{
        transformStyle: 'preserve-3d',
        transition: enableTilt ? 'transform 0.1s ease-out' : 'all 0.3s ease'
      }}
    >
      {/* Profile Image */}
      <div className="relative mb-6">
        <div className="w-60 h-60 mx-auto rounded-full overflow-hidden border-4 border-slate-600/50 group-hover:border-blue-500/50 transition-colors duration-300">
          <img
            src={avatarUrl}
            alt={`${name} - ${title}`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        
        {/* Status Indicator */}
        <div className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white ${
          status === 'Online' ? 'bg-green-500' : 'bg-gray-400'
        }`}></div>
        
        {/* Hover overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-white text-4xl font-bold opacity-80">
            {name.split(' ').map(n => n[0]).join('')}
          </div>
        </div>
      </div>

      {/* Member Info */}
      {showUserInfo && (
        <>
          <h3 className="text-2xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors duration-300">
            {name}
          </h3>
          <p className="text-slate-300 leading-relaxed text-lg mb-2">
            {title}
          </p>
          <p className="text-blue-400 text-sm mb-4">
            @{handle}
          </p>
        </>
      )}

      {/* Contact Button */}
      <button
        onClick={onContactClick}
        className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
      >
        {contactText}
      </button>

      {/* Hover effect line */}
      <div className="w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-emerald-500 transition-all duration-500 mt-6 mx-auto"></div>
    </div>
  );
}
