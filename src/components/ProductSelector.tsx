import React, { useState } from 'react';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import type { ModelKey } from '../config/jewelleryModels';
import { SELECTOR_PRODUCTS, type Product } from '../data/products';

interface ProductSelectorProps {
  activeModel: ModelKey;
  onSelectModel: (key: ModelKey) => void;
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

interface SelectorItem {
  id: ModelKey;
  num: string;
  label: string;
}

const SELECTOR_ITEMS: SelectorItem[] = [
  { id: 'ring01', num: '01', label: 'RING' },
  { id: 'bracelet01', num: '02', label: 'BRACELET' },
  { id: 'chain01', num: '03', label: 'CHAIN' },
  { id: 'earring01', num: '04', label: 'EARRING' },
];

export const ProductSelector: React.FC<ProductSelectorProps> = ({
  activeModel,
  onSelectModel,
  onViewProduct,
  onAddToCart
}) => {
  const [animating, setAnimating] = useState(false);
  const activeProduct = SELECTOR_PRODUCTS[activeModel] || SELECTOR_PRODUCTS.ring01;

  // Format currency in Indian Rupees (INR)
  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSelect = (key: ModelKey) => {
    if (key === activeModel || animating) return;
    setAnimating(true);
    setTimeout(() => {
      onSelectModel(key);
      setAnimating(false);
    }, 220);
  };

  return (
    <section
      id="product-selector"
      className="relative min-h-[90svh] md:min-h-[100svh] w-full flex items-center px-6 sm:px-12 md:px-20 pointer-events-none select-none"
    >
      <div className="max-w-[1440px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* LEFT: BrewDistrict-inspired Vertical Category Selector */}
        <div className="md:col-span-4 flex flex-col items-start z-30 pointer-events-auto">
          <div className="mb-6 flex items-center space-x-2">
            <span className="w-2 h-2 rounded-full bg-[#9E7B34]" />
            <span className="text-[10px] tracking-[0.25em] text-[#8A6D3B] uppercase font-sans font-semibold">
              INTERACTIVE SELECTOR
            </span>
          </div>

          <div className="flex md:flex-col flex-row flex-wrap gap-4 md:gap-6">
            {SELECTOR_ITEMS.map((item) => {
              const isSelected = item.id === activeModel;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelect(item.id)}
                  className={`group flex items-center space-x-4 text-left transition-all duration-300 py-1.5 focus:outline-none ${
                    isSelected ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-85'
                  }`}
                  aria-label={`Select ${item.label}`}
                >
                  <span
                    className={`font-sans text-xs tracking-widest tabular-nums transition-colors ${
                      isSelected ? 'text-[#8A6D3B] font-bold' : 'text-[#3D3B38]'
                    }`}
                  >
                    {item.num}
                  </span>
                  <span
                    className={`font-serif text-xl sm:text-2xl md:text-3xl tracking-[0.1em] transition-colors ${
                      isSelected ? 'text-[#111111] font-medium' : 'text-[#3D3B38]'
                    }`}
                  >
                    {item.label}
                  </span>
                  {isSelected && (
                    <span className="hidden md:inline-block w-6 h-[1.5px] bg-[#9E7B34]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER: Reserved for 3D Model Hero Presentation */}
        <div className="hidden md:block md:col-span-4" />

        {/* RIGHT: Product Information & Technical Attributes Panel */}
        <div className="md:col-span-4 flex flex-col items-start md:items-end text-left md:text-right z-30 pointer-events-auto">
          <div className="bg-white/95 backdrop-blur-xl border border-[#B68D40]/30 p-6 sm:p-8 rounded-2xl max-w-md w-full shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            {/* Animated Title & Category */}
            <div
              className={`transition-all duration-300 ${
                animating ? 'opacity-0 -translate-y-3' : 'opacity-100 translate-y-0'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] uppercase tracking-widest text-[#716D66] font-sans pb-2 border-b border-[#E8E4DC] mb-4">
                <span>{activeProduct.category}</span>
                <span className="text-[#8A6D3B] font-semibold">AUTHENTIC PIECE</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] font-normal leading-tight mb-3">
                {activeProduct.name}
              </h3>

              {/* Price & Discounts */}
              <div className="flex items-baseline space-x-3 mb-4">
                <span className="font-sans text-2xl sm:text-3xl text-[#111111] font-bold tracking-tight">
                  {formatPrice(activeProduct.price)}
                </span>
                {activeProduct.mrp && activeProduct.mrp > activeProduct.price && (
                  <span className="font-sans text-sm text-[#716D66] line-through">
                    {formatPrice(activeProduct.mrp)}
                  </span>
                )}
                {activeProduct.discount && activeProduct.discount > 0 && (
                  <span className="text-[11px] font-sans font-semibold px-2 py-0.5 rounded-full bg-[#9E7B34]/12 text-[#8A6D3B] border border-[#9E7B34]/30">
                    {activeProduct.discount}% OFF
                  </span>
                )}
              </div>

              {/* Verified Product Attributes */}
              <div className="grid grid-cols-2 gap-3 text-left py-4 my-4 border-y border-[#E8E4DC] text-xs font-sans">
                <div>
                  <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">FINISH</span>
                  <span className="text-[#111111] font-medium">Anti-Tarnish 18K</span>
                </div>
                <div>
                  <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">MATERIAL</span>
                  <span className="text-[#111111] font-medium">{activeProduct.material || 'Stainless Steel'}</span>
                </div>
                <div>
                  <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">COLOUR</span>
                  <span className="text-[#8A6D3B] font-medium">{activeProduct.colour || 'Gold'}</span>
                </div>
                <div>
                  <span className="text-[#716D66] block text-[10px] tracking-wider uppercase">DELIVERY</span>
                  <span className="text-[#111111] font-medium">{activeProduct.delivery || '3–5 Days'}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-[#3D3B38] font-sans font-normal leading-relaxed mb-6 line-clamp-3">
                {activeProduct.description}
              </p>

              {/* Actions: View Piece & Quick Add to Bag */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => onViewProduct(activeProduct)}
                  className="btn-secondary group flex-1 h-11 px-5 rounded-full text-xs uppercase tracking-[0.14em] flex items-center justify-center space-x-2"
                >
                  <span>VIEW PIECE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <button
                  onClick={() => onAddToCart(activeProduct)}
                  className="btn-primary h-11 px-5 rounded-full text-xs uppercase tracking-[0.14em] flex items-center justify-center space-x-1.5"
                  aria-label={`Add ${activeProduct.name} to bag`}
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
