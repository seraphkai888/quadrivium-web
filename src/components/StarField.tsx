import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  opacity: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize stars
    const numStars = 1500;
    starsRef.current = Array.from({ length: numStars }, () => ({
      x: (Math.random() - 0.5) * canvas.width * 3,
      y: (Math.random() - 0.5) * canvas.height * 3,
      z: Math.random() * 2000,
      size: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    }));

    // Animation
    const speed = 0.3;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const animate = () => {
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        // Move star closer
        star.z -= speed;

        // Reset star if too close
        if (star.z <= 0) {
          star.z = 2000;
          star.x = (Math.random() - 0.5) * canvas.width * 3;
          star.y = (Math.random() - 0.5) * canvas.height * 3;
        }

        // Project 3D to 2D
        const k = 500 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        // Check if on screen
        if (px < 0 || px > canvas.width || py < 0 || py > canvas.height) return;

        // Size based on depth
        const size = star.size * (1 - star.z / 2000) * 2;
        const opacity = star.opacity * (1 - star.z / 2000);

        // Draw star
        ctx.beginPath();
        ctx.arc(px, py, size, 0, Math.PI * 2);
        
        // Color variation
        const colorIndex = (star.x + star.y) % 3;
        if (colorIndex < 1) {
          ctx.fillStyle = `rgba(0, 212, 255, ${opacity})`; // Cyan
        } else if (colorIndex < 2) {
          ctx.fillStyle = `rgba(155, 89, 182, ${opacity * 0.8})`; // Purple
        } else {
          ctx.fillStyle = `rgba(232, 232, 232, ${opacity})`; // White
        }
        
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
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
