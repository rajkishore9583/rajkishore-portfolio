import React from 'react';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 cyber-grid-bg opacity-70" />

      {/* Top Left Cyan Glow Orb */}
      <div 
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
      />

      {/* Right Emerald Glow Orb */}
      <div 
        className="absolute top-1/3 -right-40 w-[550px] h-[550px] rounded-full blur-[150px] opacity-20 animate-pulse-slow"
        style={{ background: 'radial-gradient(circle, #10b981 0%, transparent 70%)', animationDelay: '2s' }}
      />

      {/* Bottom Center Indigo Glow Orb */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[650px] h-[650px] rounded-full blur-[160px] opacity-15"
        style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
      />

      {/* Subtle Noise / vignette overlay */}
      <div className="absolute inset-0 bg-radial-vignette opacity-40 pointer-events-none" />
    </div>
  );
}
