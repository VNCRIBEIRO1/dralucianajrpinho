'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  opacityDir: number;
  hue: number;
}

interface GoldParticlesProps {
  className?: string;
  particleCount?: number;
  maxSize?: number;
  color?: 'gold' | 'warm' | 'mixed';
}

export default function GoldParticles({
  className = '',
  particleCount = 50,
  maxSize = 3,
  color = 'gold',
}: GoldParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };

    const initParticles = () => {
      const rect = canvas.getBoundingClientRect();
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * maxSize + 0.5,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: (Math.random() - 0.5) * 0.3 - 0.1,
        opacity: Math.random() * 0.6 + 0.1,
        opacityDir: (Math.random() - 0.5) * 0.008,
        hue: color === 'mixed' ? Math.random() * 30 + 35 : 43,
      }));
    };

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      for (const p of particlesRef.current) {
        p.x += p.speedX;
        p.y += p.speedY;
        p.opacity += p.opacityDir;

        if (p.opacity <= 0.05 || p.opacity >= 0.7) p.opacityDir *= -1;
        if (p.x < -10) p.x = rect.width + 10;
        if (p.x > rect.width + 10) p.x = -10;
        if (p.y < -10) p.y = rect.height + 10;
        if (p.y > rect.height + 10) p.y = -10;

        // Gold glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        const saturation = color === 'warm' ? '30%' : '76%';
        const lightness = color === 'warm' ? '80%' : '55%';
        gradient.addColorStop(0, `hsla(${p.hue}, ${saturation}, ${lightness}, ${p.opacity})`);
        gradient.addColorStop(0.5, `hsla(${p.hue}, ${saturation}, ${lightness}, ${p.opacity * 0.3})`);
        gradient.addColorStop(1, `hsla(${p.hue}, ${saturation}, ${lightness}, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Core bright dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 80%, 75%, ${p.opacity * 0.8})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    window.addEventListener('resize', () => {
      resize();
      initParticles();
    });

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [particleCount, maxSize, color]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ width: '100%', height: '100%' }}
    />
  );
}
