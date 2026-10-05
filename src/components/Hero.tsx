import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { content } from '../config/content';
import { RevealText } from './RevealText';

interface HeroProps {
  onDiscover: () => void;
  onExplore3D: () => void;
  hasInteracted: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  onDiscover,
  onExplore3D,
  hasInteracted
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const sideInfoRef = useRef<HTMLDivElement>(null);
  const dragHintRef = useRef<HTMLDivElement>(null);

  const [startReveal, setStartReveal] = useState(false);

  useEffect(() => {
    // Delay reveal to sync with 3D model entrance (~850ms)
    const timer = setTimeout(() => {
      setStartReveal(true);

      const tl = gsap.timeline();

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }
        );
      }

      if (bodyRef.current) {
        tl.fromTo(
          bodyRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.4'
        );
      }

      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          '-=0.5'
        );
      }

      if (sideInfoRef.current) {
        tl.fromTo(
          sideInfoRef.current,
          { opacity: 0, x: 25 },
          { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' },
          '-=0.5'
        );
      }

      if (dragHintRef.current) {
        tl.fromTo(
          dragHintRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
          '+=0.2'
        );
      }
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  // Fade out "DRAG TO EXPLORE" hint once user drags
  useEffect(() => {
    if (hasInteracted && dragHintRef.current) {
      gsap.to(dragHintRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.5,
        ease: 'power2.in'
      });
    }
  }, [hasInteracted]);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between pt-28 pb-12 px-6 sm:px-10 md:px-16 pointer-events-none select-none overflow-hidden"
    >
      {/* DESKTOP EDITORIAL COMPOSITION (Copy around central 3D model) */}
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 my-auto items-center">
        
        {/* UPPER LEFT / LOWER LEFT: Eyebrow + Headline + Body + CTAs */}
        <div className="md:col-span-7 flex flex-col items-start z-20 pointer-events-auto">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="opacity-0 mb-4 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#9E7B34]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold">
              {content.hero.eyebrow}
            </span>
          </div>

          {/* Editorial Display Headline */}
          <h1 className="font-serif text-[42px] sm:text-6xl lg:text-7xl xl:text-[84px] font-normal tracking-[0.02em] leading-[1.04] text-[#111111] uppercase mb-6">
            <RevealText
              lines={content.hero.title as unknown as string[]}
              trigger={startReveal}
              lineClassName="text-[#111111]"
            />
          </h1>

          {/* Supporting Copy */}
          <p
            ref={bodyRef}
            className="opacity-0 max-w-lg text-[#3D3B38] text-base sm:text-lg leading-relaxed font-sans font-normal mb-8"
          >
            {content.hero.body}
          </p>

          {/* CTA Buttons */}
          <div ref={ctaGroupRef} className="opacity-0 flex flex-wrap items-center gap-4 sm:gap-6">
            <button
              onClick={onDiscover}
              className="btn-primary group h-12 px-8 rounded-full text-xs uppercase tracking-[0.16em] flex items-center space-x-3"
            >
              <span>{content.hero.cta}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

            <button
              onClick={onExplore3D}
              className="btn-secondary h-12 px-7 rounded-full text-xs uppercase tracking-[0.16em] flex items-center space-x-2"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#9E7B34]" />
              <span>{content.hero.secondaryCta}</span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Verified Product Spec Badge & Info */}
        <div className="hidden md:flex md:col-span-5 flex-col items-end text-right z-20 pointer-events-auto">
          <div
            ref={sideInfoRef}
            className="opacity-0 bg-white/90 backdrop-blur-md border border-[#B68D40]/30 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 rounded-2xl max-w-xs text-left"
          >
            <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#716D66] border-b border-[#E8E4DC] pb-3 mb-3 font-sans">
              <span>MODEL IDENTIFIER</span>
              <span className="text-[#8A6D3B] font-semibold">MS-R01</span>
            </div>

            <p className="font-serif text-lg text-[#111111] leading-snug mb-3 font-medium">
              Anti-Tarnish Solitaire Gold Ring
            </p>

            <div className="grid grid-cols-2 gap-3 text-xs font-sans">
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">CORE</span>
                <span className="text-[#111111] font-medium">Stainless Steel</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">FINISH</span>
                <span className="text-[#8A6D3B] font-medium">Anti-Tarnish 18K</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">STONE</span>
                <span className="text-[#111111] font-medium">Solitaire CZ</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">WEAR</span>
                <span className="text-[#8A6D3B] font-medium">Water-Resistant</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM CENTER: "DRAG TO EXPLORE" INSTRUCTION */}
      <div
        ref={dragHintRef}
        className="opacity-0 mx-auto flex flex-col items-center justify-center text-center z-20 pointer-events-auto"
      >
        <div className="flex items-center space-x-2 text-[11px] tracking-[0.25em] text-[#8A6D3B] uppercase font-sans font-medium">
          <span className="w-4 h-[1px] bg-[#8A6D3B]/50" />
          <span>{content.hero.dragHint}</span>
          <span className="w-4 h-[1px] bg-[#8A6D3B]/50" />
        </div>
        <div className="w-4 h-7 border border-[#8A6D3B]/50 rounded-full mt-2.5 flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-[#8A6D3B] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
