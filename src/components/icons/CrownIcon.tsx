export default function CrownIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        {/* Holographic gradient */}
        <linearGradient id="crownGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700">
            <animate attributeName="stop-color" values="#FFD700;#FFA500;#FFD700" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#FFA500">
            <animate attributeName="stop-color" values="#FFA500;#FFD700;#FFA500" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#FF8C00">
            <animate attributeName="stop-color" values="#FF8C00;#FFD700;#FF8C00" dur="3s" repeatCount="indefinite" />
          </stop>
        </linearGradient>
        {/* Glow filter */}
        <filter id="crownGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer glow ring */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="url(#crownGradient)" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="42;45;42" dur="2s" repeatCount="indefinite" />
      </circle>
      
      {/* Crown shape */}
      <g filter="url(#crownGlow)">
        <path 
          d="M20 70 L20 45 L35 55 L50 30 L65 55 L80 45 L80 70 Z" 
          fill="url(#crownGradient)"
          stroke="#FFD700"
          strokeWidth="1"
        >
          <animate attributeName="opacity" values="0.9;1;0.9" dur="2s" repeatCount="indefinite" />
        </path>
        
        {/* Crown jewels */}
        <circle cx="50" cy="38" r="4" fill="#00D4FF">
          <animate attributeName="r" values="3;4;3" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="35" cy="50" r="3" fill="#9B59B6" />
        <circle cx="65" cy="50" r="3" fill="#9B59B6" />
        
        {/* Crown base */}
        <rect x="20" y="70" width="60" height="8" rx="2" fill="url(#crownGradient)" />
      </g>
      
      {/* Particle effects */}
      <circle cx="30" cy="35" r="1" fill="#FFD700" opacity="0.6">
        <animate attributeName="cy" values="35;25;35" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="70" cy="35" r="1" fill="#FFD700" opacity="0.6">
        <animate attributeName="cy" values="35;25;35" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
