import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState<'default' | 'pointer' | 'drag' | 'move'>('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable for desktop pointer devices with hover
    const hasPointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hasPointer || prefersReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      if (target.closest('[data-cursor="drag"]')) {
        setCursorType('drag');
      } else if (target.closest('[data-cursor="move"]')) {
        setCursorType('move');
      } else if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[role="button"]') ||
        target.closest('.clickable') ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'A'
      ) {
        setCursorType('pointer');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isExpanded = cursorType === 'pointer' || cursorType === 'drag' || cursorType === 'move';

  return (
    <div
      className="custom-cursor fixed pointer-events-none z-[99999] transition-transform duration-75 ease-out will-change-transform hidden md:block"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Outer Ring / Badge */}
      <div
        className={`flex items-center justify-center transition-all duration-300 ease-luxury rounded-full ${
          isExpanded
            ? 'w-11 h-11 border border-[#9E7B34] bg-white/80 backdrop-blur-sm shadow-sm'
            : 'w-2 h-2 bg-[#111111]'
        }`}
      >
        {cursorType === 'drag' && (
          <span className="text-[9px] uppercase tracking-widest text-[#8A6D3B] font-sans font-bold">
            DRAG
          </span>
        )}
        {cursorType === 'move' && (
          <span className="text-[9px] uppercase tracking-widest text-[#8A6D3B] font-sans font-bold">
            MOVE
          </span>
        )}
      </div>
    </div>
  );
};
