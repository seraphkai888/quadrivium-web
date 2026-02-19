import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  px: number;
  py: number;
}

export default function HyperspaceField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);
  const speedRef = useRef(2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize stars
    const numStars = 800;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    starsRef.current = Array.from({ length: numStars }, () => ({
      x: (Math.random() - 0.5) * canvas.width * 2,
      y: (Math.random() - 0.5) * canvas.height * 2,
      z: Math.random() * 1500 + 500,
      px: 0,
      py: 0,
    }));

    // Scroll listener for warp effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scrollY / maxScroll;
      speedRef.current = 2 + scrollPercent * 15; // Speed up as you scroll
    };
    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      // Create trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const speed = speedRef.current;

      starsRef.current.forEach((star) => {
        // Store previous position for trail
        const k = 128 / star.z;
        star.px = star.x * k + centerX;
        star.py = star.y * k + centerY;

        // Move star closer
        star.z -= speed;

        // Reset if too close
        if (star.z <= 0) {
          star.z = 1500;
          star.x = (Math.random() - 0.5) * canvas.width * 2;
          star.y = (Math.random() - 0.5) * canvas.height * 2;
          star.px = star.x * (128 / star.z) + centerX;
          star.py = star.y * (128 / star.z) + centerY;
        }

        // Project to 2D
        const newK = 128 / star.z;
        const sx = star.x * newK + centerX;
        const sy = star.y * newK + centerY;

        // Skip if off screen
        if (sx < 0 || sx > canvas.width || sy < 0 || sy > canvas.height) return;

        // Calculate streak length based on speed
        const streakLength = Math.min(speed * 3, 50);
        
        // Draw star streak
        const gradient = ctx.createLinearGradient(star.px, star.py, sx, sy);
        const depth = 1 - star.z / 1500;
        const alpha = depth * 0.8;
        
        // Color based on position
        const hue = ((star.x + star.y) % 60) + 180; // Cyan to purple range
        gradient.addColorStop(0, `hsla(${hue}, 100%, 70%, 0)`);
        gradient.addColorStop(1, `hsla(${hue}, 100%, 80%, ${alpha})`);

        ctx.beginPath();
        ctx.moveTo(star.px, star.py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = depth * 2 + 0.5;
        ctx.stroke();

        // Draw star point
        ctx.beginPath();
        ctx.arc(sx, sy, depth * 2, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${hue}, 100%, 90%, ${alpha})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
