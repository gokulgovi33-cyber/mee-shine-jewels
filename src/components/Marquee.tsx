import React from 'react';
import { content } from '../config/content';

export const Marquee: React.FC = () => {
  return (
    <div className="relative z-30 w-full overflow-hidden bg-white py-8 sm:py-12 border-y border-[#E8E4DC] select-none pointer-events-none">
      <div className="flex whitespace-nowrap animate-[marquee_35s_linear_infinite]">
        {[0, 1, 2, 3].map((idx) => (
          <span
            key={idx}
            className="font-serif text-5xl sm:text-7xl md:text-8xl tracking-[0.15em] uppercase text-transparent mx-6"
            style={{
              WebkitTextStroke: '1.5px rgba(158, 123, 52, 0.4)',
              opacity: 0.95
            }}
          >
            {content.marquee} •&nbsp;
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
