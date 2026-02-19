export default function OrbIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        {/* Mystical orb gradient */}
        <radialGradient id="orbGradient" cx="30%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#E8B4FF">
            <animate attributeName="stop-color" values="#E8B4FF;#D4A5FF;#E8B4FF" dur="3s" repeatCount="indefinite" />
          </stop>
          <stop offset="40%" stopColor="#9B59B6" />
          <stop offset="100%" stopColor="#4A235A" />
        </radialGradient>
        
        {/* Inner glow */}
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9B59B6" stopOpacity="0" />
        </radialGradient>
        
        {/* Ethereal mist */}
        <radialGradient id="mistGradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.3">
            <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#9B59B6" stopOpacity="0" />
        </radialGradient>
        
        {/* Crystal glow filter */}
        <filter id="crystalGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Vision filter */}
        <filter id="visionGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer aura rings */}
      <circle cx="50" cy="50" r="45" fill="none" stroke="#9B59B6" strokeWidth="0.5" opacity="0.3">
        <animate attributeName="r" values="43;46;43" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="42" fill="none" stroke="#00D4FF" strokeWidth="0.5" opacity="0.2">
        <animate attributeName="r" values="40;44;40" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Base/stand */}
      <ellipse cx="50" cy="85" rx="20" ry="5" fill="#4A235A" />
      <path d="M35 85 Q35 75 40 72 L60 72 Q65 75 65 85 Z" fill="linear-gradient(#6B2D7B, #4A235A)" />
      
      {/* Main crystal orb */}
      <g filter="url(#crystalGlow)">
        <circle cx="50" cy="50" r="32" fill="url(#orbGradient)" />
        
        {/* Glass reflection */}
        <ellipse cx="40" cy="38" rx="12" ry="8" fill="white" opacity="0.2" />
        
        {/* Inner mystical glow */}
        <circle cx="50" cy="50" r="25" fill="url(#innerGlow)">
          <animate attributeName="r" values="23;27;23" dur="4s" repeatCount="indefinite" />
        </circle>
        
        {/* Swirling mist inside */}
        <circle cx="50" cy="50" r="20" fill="url(#mistGradient)">
          <animate attributeName="r" values="18;22;18" dur="3s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Vision eye in center */}
      <g filter="url(#visionGlow)">
        <ellipse cx="50" cy="50" rx="10" ry="6" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.8">
          <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="50" cy="50" r="3" fill="#00D4FF">
          <animate attributeName="r" values="2;4;2" dur="2s" repeatCount="indefinite" />
          <animate attributeName="fill" values="#00D4FF;#FFFFFF;#00D4FF" dur="2s" repeatCount="indefinite" />
        </circle>
      </g>
      
      {/* Floating wisdom particles */}
      <circle cx="35" cy="35" r="1.5" fill="#E8B4FF" opacity="0.7">
        <animate attributeName="cy" values="35;30;35" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="40" r="1" fill="#00D4FF" opacity="0.6">
        <animate attributeName="cy" values="40;35;40" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="45" cy="65" r="1" fill="#9B59B6" opacity="0.5">
        <animate attributeName="cx" values="45;50;45" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0.1;0.5" dur="4s" repeatCount="indefinite" />
      </circle>
      
      {/* Energy wisps around orb */}
      <path d="M20 50 Q25 45 22 40" fill="none" stroke="#9B59B6" strokeWidth="1" opacity="0.4">
        <animate attributeName="opacity" values="0.4;0.1;0.4" dur="3s" repeatCount="indefinite" />
      </path>
      <path d="M80 50 Q75 55 78 60" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.3">
        <animate attributeName="opacity" values="0.3;0.1;0.3" dur="2.5s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
