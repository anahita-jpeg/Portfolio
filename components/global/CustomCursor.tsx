'use client';

import { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    setIsDesktop(hasHover && !isTouchDevice);

    if (!hasHover || isTouchDevice) return;

    let animationFrameId: number;

    const updateMousePosition = (e: MouseEvent) => {
      animationFrameId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed w-2 h-2 rounded-full pointer-events-none z-[9999] mix-blend-difference transition-colors duration-300"
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
          backgroundColor: 'var(--accent-primary)',
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-[9998] transition-colors duration-300 border-light-accent-primary/30 dark:border-dark-accent-primary/30"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
          transform: 'translate3d(0, 0, 0)',
          willChange: 'transform',
        }}
      />
    </>
  );
}