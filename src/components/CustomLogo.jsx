import React from 'react';

const CustomLogo = ({ className = "w-8 h-8" }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#667eea" />
          <stop offset="100%" stopColor="#764ba2" />
        </linearGradient>
        <linearGradient id="logoGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f093fb" />
          <stop offset="100%" stopColor="#f5576c" />
        </linearGradient>
      </defs>
      
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="45"
        fill="url(#logoGradient)"
        className="drop-shadow-lg"
      />
      
      {/* Inner geometric pattern */}
      <path
        d="M25 35 L50 20 L75 35 L75 65 L50 80 L25 65 Z"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.4)"
        strokeWidth="2"
      />
      
      {/* Central node */}
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="url(#logoGradient2)"
      />
      
      {/* Connection nodes */}
      <circle cx="35" cy="35" r="4" fill="rgba(255,255,255,0.9)" />
      <circle cx="65" cy="35" r="4" fill="rgba(255,255,255,0.9)" />
      <circle cx="35" cy="65" r="4" fill="rgba(255,255,255,0.9)" />
      <circle cx="65" cy="65" r="4" fill="rgba(255,255,255,0.9)" />
      
      {/* Connection lines */}
      <line x1="50" y1="50" x2="35" y2="35" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="50" y1="50" x2="65" y2="35" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="50" y1="50" x2="35" y2="65" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      <line x1="50" y1="50" x2="65" y2="65" stroke="rgba(255,255,255,0.6)" strokeWidth="2" />
      
      {/* DSA Text Effect */}
      <text
        x="50"
        y="50"
        textAnchor="middle"
        dominantBaseline="central"
        fill="white"
        fontSize="12"
        fontWeight="bold"
        fontFamily="Inter, sans-serif"
      >
        DSA
      </text>
    </svg>
  );
};

export default CustomLogo;