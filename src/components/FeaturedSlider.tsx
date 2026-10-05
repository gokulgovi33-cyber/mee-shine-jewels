import React, { useRef } from 'react';
import type { Product } from '../data/products';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface FeaturedSliderProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
}

export const FeaturedSlider: React.FC<FeaturedSliderProps> = ({
  products,
  onViewProduct
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!sliderRef.current) return;
    const distance = direction === 'left' ? -360 : 360;
    sliderRef.current.scrollBy({ left: distance, behavior: 'smooth' });
  };

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="featured" className="relative z-30 bg-white py-24 sm:py-32 border-t border-[#E8E4DC] overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 mb-8 flex items-end justify-between">
        <div>
          <div className="flex items-center space-x-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#9E7B34]" />
            <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold">
              CURATED SELECTION
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal tracking-tight">
            SIGNATURE HIGHLIGHTS
          </h2>
        </div>

        {/* Desktop Slider Arrows */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={() => scroll('left')}
            className="p-3 rounded-full border border-[#E8E4DC] bg-white text-[#3D3B38] hover:border-[#9E7B34] hover:text-[#9E7B34] transition-colors shadow-sm"
            aria-label="Previous featured items"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-3 rounded-full border border-[#E8E4DC] bg-white text-[#3D3B38] hover:border-[#9E7B34] hover:text-[#9E7B34] transition-colors shadow-sm"
            aria-label="Next featured items"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Horizontal Editorial Track */}
      <div
        ref={sliderRef}
        className="flex items-stretch space-x-6 sm:space-x-8 overflow-x-auto px-6 sm:px-10 md:px-16 pb-8 scrollbar-none snap-x snap-mandatory cursor-grab active:cursor-grabbing"
        data-cursor="move"
      >
        {products.map((p) => (
          <div
            key={p.id}
            onClick={() => onViewProduct(p)}
            className="w-[280px] sm:w-[340px] flex-shrink-0 snap-start bg-[#FAF9F6] border border-[#E8E4DC] hover:border-[#B68D40]/50 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(182,141,64,0.12)]"
          >
            {/* Image */}
            <div className="relative aspect-[4/5] w-full bg-[#F4F1EA] overflow-hidden">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-luxury"
              />
              <span className="absolute top-4 left-4 bg-white/95 text-[#8A6D3B] text-[9px] font-sans font-bold tracking-widest uppercase px-2.5 py-1 rounded-full border border-[#B68D40]/30 backdrop-blur-md shadow-sm">
                FEATURED
              </span>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 flex flex-col justify-between flex-grow">
              <div>
                <span className="text-[10px] tracking-widest uppercase text-[#716D66] font-sans font-medium block mb-1">
                  {p.category}
                </span>
                <h3 className="font-serif text-lg sm:text-xl text-[#111111] group-hover:text-[#8A6D3B] transition-colors leading-snug line-clamp-1 mb-2 font-normal">
                  {p.name}
                </h3>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-[#E8E4DC] mt-3">
                <span className="font-sans text-base sm:text-lg font-bold text-[#111111]">
                  {formatPrice(p.price)}
                </span>
                <span className="text-xs uppercase tracking-wider text-[#8A6D3B] font-sans font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>DISCOVER</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
