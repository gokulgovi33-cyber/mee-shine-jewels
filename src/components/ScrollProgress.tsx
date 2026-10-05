import React from 'react';

interface ScrollProgressProps {
  activeSection: number; // 1 to 5
  onNavigateSection: (secIndex: number) => void;
}

export const ScrollProgress: React.FC<ScrollProgressProps> = ({
  activeSection,
  onNavigateSection
}) => {
  const sections = [
    { num: '01', id: 'hero', label: 'HERO' },
    { num: '02', id: 'chapter-anti-tarnish', label: 'SHINE' },
    { num: '03', id: 'chapter-craft', label: 'CRAFT' },
    { num: '04', id: 'product-selector', label: 'PIECES' },
    { num: '05', id: 'collection', label: 'SHOP' },
  ];

  return (
    <div className="fixed right-6 sm:right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-5 select-none pointer-events-auto">
      {/* Top indicator track */}
      <div className="w-[1.5px] h-8 bg-gradient-to-b from-transparent to-[#9E7B34]/40" />

      {sections.map((sec, idx) => {
        const isActive = activeSection === idx + 1;
        return (
          <button
            key={sec.num}
            onClick={() => onNavigateSection(idx + 1)}
            className="group relative flex items-center justify-center p-1.5 focus:outline-none"
            aria-label={`Jump to section ${sec.label}`}
          >
            {/* Tooltip on hover */}
            <span className="absolute right-8 px-2 py-0.5 rounded bg-white border border-[#B68D40]/30 text-[9px] uppercase tracking-widest text-[#8A6D3B] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-md font-semibold">
              {sec.label}
            </span>

            {/* Numeric Section Display */}
            <span
              className={`font-sans text-[11px] tracking-widest tabular-nums transition-colors duration-300 ${
                isActive ? 'text-[#9E7B34] font-bold scale-110' : 'text-black/35 hover:text-black/80 font-medium'
              }`}
            >
              {sec.num}
            </span>
          </button>
        );
      })}

      {/* Bottom indicator track */}
      <div className="w-[1.5px] h-8 bg-gradient-to-t from-transparent to-[#9E7B34]/40" />
    </div>
  );
};
