import React from 'react';

export default function GlowBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, #a855f7 1px, transparent 1px), linear-gradient(to bottom, #a855f7 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Primary Top Center Glowing Orb */}
      <div 
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-[140px] opacity-40 dark:opacity-50 animate-pulse-glow"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, rgba(124, 58, 237, 0.25) 45%, transparent 70%)'
        }}
      />

      {/* Floating Right Side Neon Violet Orb */}
      <div 
        className="absolute top-1/3 -right-48 w-[600px] h-[600px] rounded-full blur-[150px] opacity-30 dark:opacity-40 animate-float-slow"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, rgba(109, 40, 217, 0.2) 50%, transparent 70%)'
        }}
      />

      {/* Floating Left Side Deep Violet Orb */}
      <div 
        className="absolute bottom-1/4 -left-48 w-[650px] h-[650px] rounded-full blur-[160px] opacity-25 dark:opacity-35 animate-float"
        style={{
          background: 'radial-gradient(circle, rgba(126, 34, 206, 0.4) 0%, rgba(88, 28, 135, 0.2) 50%, transparent 70%)'
        }}
      />

      {/* Subtle Bottom Accent Glow */}
      <div 
        className="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 dark:opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(192, 132, 252, 0.3) 0%, transparent 70%)'
        }}
      />
    </div>
  );
}
