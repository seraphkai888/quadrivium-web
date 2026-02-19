export default function LightningIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        {/* Electric gradient */}
        <linearGradient id="boltGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00D4FF">
            <animate attributeName="stop-color" values="#00D4FF;#00FFFF;#00D4FF" dur="0.5s" repeatCount="indefinite" />
          </stop>
          <stop offset="50%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#0099CC" />
        </linearGradient>
        
        {/* Core energy gradient */}
        <linearGradient id="coreGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#00D4FF" />
        </linearGradient>
        
        {/* Electric glow */}
        <filter id="electricGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Spark filter */}
        <filter id="sparkGlow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Outer energy ring */}
      <circle cx="50" cy="50" r="40" fill="none" stroke="#00D4FF" strokeWidth="1" opacity="0.3">
        <animate attributeName="r" values="38;42;38" dur="1s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.3;0.5;0.3" dur="1s" repeatCount="indefinite" />
      </circle>
      
      {/* Main lightning bolt */}
      <g filter="url(#electricGlow)">
        <path 
          d="M55 10 L40 45 L52 45 L38 90 L70 40 L55 40 L68 10 Z" 
          fill="url(#boltGradient)"
          stroke="#00FFFF"
          strokeWidth="1"
        >
          <animate attributeName="opacity" values="0.9;1;0.8;1;0.9" dur="0.3s" repeatCount="indefinite" />
        </path>
        
        {/* Inner core */}
        <path 
          d="M54 20 L45 45 L52 45 L44 75 L62 43 L54 43 L60 20 Z" 
          fill="url(#coreGradient)"
          opacity="0.8"
        />
      </g>
      
      {/* Electric arcs */}
      <g filter="url(#sparkGlow)">
        <path d="M30 35 Q35 40 30 45" fill="none" stroke="#00D4FF" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="opacity" values="0.6;0;0.6" dur="0.5s" repeatCount="indefinite" />
        </path>
        <path d="M70 55 Q75 60 70 65" fill="none" stroke="#00D4FF" strokeWidth="1.5" opacity="0.6">
          <animate attributeName="opacity" values="0;0.6;0" dur="0.4s" repeatCount="indefinite" />
        </path>
        <path d="M25 55 Q20 50 25 45" fill="none" stroke="#00FFFF" strokeWidth="1" opacity="0.5">
          <animate attributeName="opacity" values="0.5;0;0.5" dur="0.6s" repeatCount="indefinite" />
        </path>
      </g>
      
      {/* Spark particles */}
      <circle cx="35" cy="30" r="2" fill="#00FFFF" opacity="0.8">
        <animate attributeName="r" values="1;3;1" dur="0.3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="0.3s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="70" r="2" fill="#00D4FF" opacity="0.7">
        <animate attributeName="r" values="2;1;2" dur="0.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="0.4s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="35" r="1.5" fill="#FFFFFF" opacity="0.9">
        <animate attributeName="cx" values="75;78;75" dur="0.2s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.9;0;0.9" dur="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="28" cy="65" r="1" fill="#00FFFF" opacity="0.6">
        <animate attributeName="cy" values="65;62;65" dur="0.35s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="0.35s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
