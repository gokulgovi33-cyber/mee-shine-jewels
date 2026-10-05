import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { content } from '../config/content';

interface LoaderProps {
  onComplete: () => void;
  progress: number;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete, progress }) => {
  const [displayProgress, setDisplayProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const hasFinishedRef = useRef(false);

  // Smoothly interpolate displayed progress toward target progress
  useEffect(() => {
    let animFrame: number;
    const updateProgress = () => {
      setDisplayProgress(prev => {
        if (prev < progress) {
          const next = Math.min(progress, prev + Math.max(1, Math.floor((progress - prev) * 0.15)));
          return next;
        }
        return prev;
      });
      animFrame = requestAnimationFrame(updateProgress);
    };
    animFrame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animFrame);
  }, [progress]);

  // Handle completion when displayProgress hits 100
  useEffect(() => {
    if (displayProgress >= 100 && !hasFinishedRef.current) {
      hasFinishedRef.current = true;

      if (!logoRef.current || !lineRef.current || !containerRef.current) {
        onComplete();
        return;
      }

      const tl = gsap.timeline({
        delay: 0.25, // pause 250ms as specified
        onComplete: () => {
          onComplete();
        }
      });

      tl.to(logoRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.45,
        ease: 'power3.in'
      })
      .to(lineRef.current, {
        scaleX: 1.8,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut'
      }, '-=0.2')
      .to(containerRef.current, {
        opacity: 0,
        scale: 1.04,
        duration: 0.5,
        ease: 'power3.inOut'
      }, '-=0.2');
    }
  }, [displayProgress, onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] bg-[#FAF9F6] text-[#111111] flex flex-col items-center justify-center select-none cursor-default"
      aria-label="Loading Mee Shine Jewels experience"
    >
      <div ref={logoRef} className="flex flex-col items-center text-center px-6">
        {/* Official Gold-Ringed Mee Shine Logo Emblem */}
        <div className="relative mb-6">
          <div className="absolute inset-0 rounded-full bg-[#E2C275]/30 blur-xl animate-pulse" />
          <img
            src="./images/mee-shine-logo.png"
            alt="Mee Shine Jewels Emblem"
            className="relative w-24 h-24 sm:w-28 sm:h-28 object-contain drop-shadow-[0_4px_16px_rgba(158,123,52,0.25)]"
          />
        </div>

        {/* Brand Wordmark */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl tracking-[0.25em] text-[#111111] font-normal uppercase leading-tight mb-2">
          {content.brand.wordmarkFirst}
          <span className="block text-xl sm:text-2xl tracking-[0.35em] text-[#9E7B34] font-medium mt-1">
            {content.brand.wordmarkSecond}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xs uppercase tracking-[0.3em] text-[#716D66] mt-3 font-sans font-medium">
          {content.loader.subtitle}
        </p>

        {/* Numeric Counter */}
        <div className="mt-8 font-sans text-sm tracking-[0.25em] text-[#8A6D3B] font-bold tabular-nums">
          {String(displayProgress).padStart(2, '0')} — 100
        </div>
      </div>

      {/* Thin Horizontal Champagne-Gold Progress Line */}
      <div className="w-56 max-w-[70vw] h-[2px] bg-[#E8E4DC] mt-6 relative overflow-hidden rounded-full">
        <div
          ref={lineRef}
          className="h-full bg-gradient-to-r from-[#9E7B34] via-[#C9A55C] to-[#8A6D3B] transition-all duration-150 ease-out origin-left rounded-full"
          style={{ width: `${displayProgress}%` }}
        />
      </div>
    </div>
  );
};
