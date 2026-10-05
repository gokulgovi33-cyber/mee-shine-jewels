import React from 'react';
import { content } from '../config/content';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="relative z-30 bg-[#FAF9F6] py-28 sm:py-36 px-6 sm:px-12 md:px-20 border-t border-[#E8E4DC] overflow-hidden">
      
      {/* Background Watermark Jewellery Motif */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.08] select-none">
        <svg className="w-[600px] h-[600px] text-[#9E7B34] animate-[spin_45s_linear_infinite]" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="0.8" strokeDasharray="3 4" />
          <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="0.5" />
          <polygon points="50,8 54,16 46,16" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center space-x-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B34]" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#8A6D3B] font-sans font-semibold">
            {content.brandStory.eyebrow}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#9E7B34]" />
        </div>

        {/* Brand Statement */}
        <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal leading-[1.08] tracking-tight mb-8">
          JEWELLERY FOR<br />
          <span className="italic gold-gradient-text font-normal">THE MOMENTS</span><br />
          THAT STAY.
        </h2>

        {/* Narrative Body */}
        <p className="max-w-2xl mx-auto text-[#3D3B38] text-base sm:text-lg leading-relaxed font-sans font-normal mb-16">
          {content.brandStory.body}
        </p>

        {/* Anti-Tarnish Feature Card in Story */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#B68D40]/30 shadow-[0_12px_40px_rgba(0,0,0,0.06)] text-left grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold block mb-3">
              ANTI-TARNISH PHILOSOPHY
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] leading-tight mb-4 font-normal">
              {content.brandStory.antiTarnishHeading[0]}<br />
              <span className="text-[#8A6D3B]">{content.brandStory.antiTarnishHeading[1]}</span>
            </h3>
            <p className="text-sm text-[#3D3B38] font-sans font-normal leading-relaxed">
              {content.brandStory.antiTarnishBody}
            </p>
          </div>

          <div className="md:col-span-5 grid grid-cols-2 gap-4 border-t md:border-t-0 md:border-l border-[#E8E4DC] pt-6 md:pt-0 md:pl-8 text-xs font-sans">
            <div>
              <span className="text-[#716D66] block text-[10px] uppercase tracking-wider mb-1">ORIGIN</span>
              <span className="text-[#111111] font-semibold">Chennai, Tamil Nadu</span>
            </div>
            <div>
              <span className="text-[#716D66] block text-[10px] uppercase tracking-wider mb-1">ALLOY</span>
              <span className="text-[#111111] font-semibold">Surgical 316L Core</span>
            </div>
            <div>
              <span className="text-[#716D66] block text-[10px] uppercase tracking-wider mb-1">FINISH</span>
              <span className="text-[#8A6D3B] font-semibold">Anti-Tarnish 18K</span>
            </div>
            <div>
              <span className="text-[#716D66] block text-[10px] uppercase tracking-wider mb-1">COMFORT</span>
              <span className="text-[#111111] font-semibold">Hypoallergenic</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
