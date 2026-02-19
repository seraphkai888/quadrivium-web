import { useEffect, useState } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export default function GlitchText({ text, className = '', delay = 0 }: GlitchTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isGlitching, setIsGlitching] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const glitchChars = '!<>-_\\/[]{}—=+*^?#________';

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (index < iteration) {
              return char;
            }
            if (char === ' ') return ' ';
            return glitchChars[Math.floor(Math.random() * glitchChars.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
        setIsGlitching(false);
      }

      iteration += 1 / 2;
    }, 30);

    setIsGlitching(true);

    return () => clearInterval(interval);
  }, [text, hasStarted]);

  return (
    <span className={`${className} ${isGlitching ? 'glitch-active' : ''}`}>
      {displayText || (hasStarted ? '' : '\u00A0'.repeat(text.length))}
    </span>
  );
}
