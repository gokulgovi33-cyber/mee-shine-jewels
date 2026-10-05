import React from 'react';
import { content } from '../config/content';

interface StoryChapterProps {
  chapterIndex: 1 | 2;
}

export const StoryChapter: React.FC<StoryChapterProps> = ({ chapterIndex }) => {
  if (chapterIndex === 1) {
    return (
      <section
        id="chapter-anti-tarnish"
        className="relative min-h-[90svh] md:min-h-[100svh] w-full flex items-center px-6 sm:px-12 md:px-20 pointer-events-none select-none"
      >
        <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* LEFT: Copy appears while 3D Model sits on Right */}
          <div className="md:col-span-6 flex flex-col items-start z-20 pointer-events-auto">
            {/* Vertical Gold Drawing Line + Label */}
            <div className="flex items-center space-x-3 mb-6">
              <span className="w-8 h-[1.5px] bg-[#9E7B34]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold">
                {content.storyChapter1.label}
              </span>
            </div>

            {/* Editorial Heading */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.08] tracking-tight mb-6">
              {content.storyChapter1.heading[0]}<br />
              <span className="gold-gradient-text italic font-normal">
                {content.storyChapter1.heading[1]}
              </span>
            </h2>

            {/* Body */}
            <p className="max-w-md text-[#3D3B38] text-base sm:text-lg leading-relaxed font-sans font-normal mb-8">
              {content.storyChapter1.body}
            </p>

            {/* Technical Attribute Badge */}
            <div className="flex items-center space-x-6 py-3 px-5 border border-[#B68D40]/30 rounded-full bg-white/90 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.04)]">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 rounded-full bg-[#9E7B34]" />
                <span className="text-xs text-[#111111] font-sans font-medium tracking-wider">
                  316L Stainless Steel Core
                </span>
              </div>
              <span className="text-[#9E7B34]">•</span>
              <span className="text-xs text-[#8A6D3B] font-sans font-medium tracking-wider">
                Hypoallergenic & Shower-Safe
              </span>
            </div>
          </div>

          <div className="hidden md:block md:col-span-6" />
        </div>
      </section>
    );
  }

  // Chapter 2: Craft & Macro Detail
  return (
    <section
      id="chapter-craft"
      className="relative min-h-[90svh] md:min-h-[100svh] w-full flex items-center px-6 sm:px-12 md:px-20 pointer-events-none select-none"
    >
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* On desktop, macro 3D model is on left/center, copy is on right */}
        <div className="hidden md:block md:col-span-6 relative">
          {/* Callout Line Pointing Toward Jewellery Surface */}
          <div className="absolute top-1/2 right-12 z-20 pointer-events-auto flex items-center space-x-3">
            <span className="w-16 h-[1.5px] bg-gradient-to-r from-transparent to-[#9E7B34]" />
            <div className="flex flex-col">
              <span className="text-[10px] tracking-[0.2em] text-[#8A6D3B] uppercase font-sans font-semibold">
                {content.storyChapter2.callout}
              </span>
              <span className="text-[10px] tracking-wider text-[#716D66] font-sans">
                Mirror-grade 18K luster
              </span>
            </div>
          </div>
        </div>

        <div className="md:col-span-6 flex flex-col items-start md:items-end text-left md:text-right z-20 pointer-events-auto">
          {/* Label */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold">
              {content.storyChapter2.label}
            </span>
            <span className="w-8 h-[1.5px] bg-[#9E7B34]" />
          </div>

          {/* Heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal leading-[1.08] tracking-tight mb-6">
            {content.storyChapter2.heading[0]}<br />
            <span className="gold-gradient-text italic font-normal">
              {content.storyChapter2.heading[1]}
            </span>
          </h2>

          {/* Body */}
          <p className="max-w-md text-[#3D3B38] text-base sm:text-lg leading-relaxed font-sans font-normal mb-8">
            {content.storyChapter2.body}
          </p>

          {/* Craft callouts */}
          <div className="flex flex-col space-y-2 border-l md:border-l-0 md:border-r border-[#B68D40]/30 pl-4 md:pl-0 md:pr-4">
            <span className="text-xs text-[#111111] font-sans font-semibold tracking-wide">
              Flawless micro-prong setting
            </span>
            <span className="text-xs text-[#716D66] font-sans font-normal">
              Faceted stones handset for maximum light refraction
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
