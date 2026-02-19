export default function TomeIcon({ className = "w-16 h-16" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <defs>
        {/* Knowledge gradient */}
        <linearGradient id="tomeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFD700">
            <animate attributeName="stop-color" values="#FFD700;#DAA520;#FFD700" dur="4s" repeatCount="indefinite" />
          </stop>
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        
        {/* Page gradient */}
        <linearGradient id="pageGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#E8E8E8" />
          <stop offset="100%" stopColor="#C0C0C0" />
        </linearGradient>
        
        {/* Mystical glow */}
        <filter id="tomeGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Rune glow */}
        <filter id="runeGlow" x="-100%" y="-100%" width="300%" height="300%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Book cover back */}
      <rect x="22" y="20" width="56" height="65" rx="3" fill="#1a1a2e" stroke="#FFD700" strokeWidth="1" />
      
      {/* Pages */}
      <g filter="url(#tomeGlow)">
        <rect x="25" y="23" width="50" height="59" fill="url(#pageGradient)" rx="1" />
        <line x1="30" y1="30" x2="70" y2="30" stroke="#999" strokeWidth="0.5" />
        <line x1="30" y1="37" x2="70" y2="37" stroke="#999" strokeWidth="0.5" />
        <line x1="30" y1="44" x2="70" y2="44" stroke="#999" strokeWidth="0.5" />
        <line x1="30" y1="51" x2="70" y2="51" stroke="#999" strokeWidth="0.5" />
      </g>
      
      {/* Book cover front */}
      <rect x="20" y="18" width="56" height="65" rx="3" fill="url(#tomeGradient)" stroke="#DAA520" strokeWidth="2" filter="url(#tomeGlow)">
        <animate attributeName="opacity" values="0.95;1;0.95" dur="3s" repeatCount="indefinite" />
      </rect>
      
      {/* Sacred geometry on cover */}
      <g filter="url(#runeGlow)">
        {/* Central eye */}
        <ellipse cx="48" cy="50" rx="12" ry="8" fill="none" stroke="#00D4FF" strokeWidth="1.5">
          <animate attributeName="stroke-opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
        </ellipse>
        <circle cx="48" cy="50" r="4" fill="#00D4FF">
          <animate attributeName="r" values="3;4;3" dur="2s" repeatCount="indefinite" />
        </circle>
        
        {/* Corner runes */}
        <path d="M28 28 L35 28 L28 35 Z" fill="none" stroke="#9B59B6" strokeWidth="1" />
        <path d="M68 28 L61 28 L68 35 Z" fill="none" stroke="#9B59B6" strokeWidth="1" />
        <path d="M28 73 L35 73 L28 66 Z" fill="none" stroke="#9B59B6" strokeWidth="1" />
        <path d="M68 73 L61 73 L68 66 Z" fill="none" stroke="#9B59B6" strokeWidth="1" />
      </g>
      
      {/* Spine detail */}
      <rect x="18" y="18" width="4" height="65" fill="#B8860B" rx="1" />
      
      {/* Floating knowledge particles */}
      <circle cx="60" cy="25" r="1.5" fill="#00D4FF" opacity="0.8">
        <animate attributeName="cy" values="25;15;25" dur="4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.8;0;0.8" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="75" cy="45" r="1" fill="#9B59B6" opacity="0.6">
        <animate attributeName="cx" values="75;85;75" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}
