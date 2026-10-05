import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface RevealTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  trigger?: boolean;
}

export const RevealText: React.FC<RevealTextProps> = ({
  lines,
  className = '',
  lineClassName = '',
  delay = 0,
  trigger = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trigger || !containerRef.current) return;

    const lineElements = containerRef.current.querySelectorAll('.reveal-line-inner');
    if (!lineElements || lineElements.length === 0) return;

    gsap.fromTo(
      lineElements,
      { y: '115%', opacity: 0 },
      {
        y: '0%',
        opacity: 1,
        duration: 0.9,
        stagger: 0.1,
        delay,
        ease: 'power3.out'
      }
    );
  }, [trigger, delay, lines]);

  return (
    <span ref={containerRef} className={`block overflow-hidden ${className}`}>
      {lines.map((line, idx) => (
        <span key={idx} className="block overflow-hidden leading-tight py-0.5">
          <span className={`reveal-line-inner inline-block transform will-change-transform ${lineClassName}`}>
            {line}
          </span>
        </span>
      ))}
    </span>
  );
};
