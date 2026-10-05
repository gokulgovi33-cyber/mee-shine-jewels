import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import type { Product } from '../data/products';

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchOverlay: React.FC<SearchOverlayProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      document.body.style.overflow = '';
      setQuery('');
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const results = query.trim()
    ? products
        .filter((p) => {
          const q = query.toLowerCase();
          return (
            p.name.toLowerCase().includes(q) ||
            p.category.toLowerCase().includes(q) ||
            (p.material && p.material.toLowerCase().includes(q))
          );
        })
        .slice(0, 16)
    : [];

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <div
      className="fixed inset-0 z-[300] bg-white/98 backdrop-blur-2xl flex flex-col p-6 sm:p-10 md:p-16 overflow-y-auto text-[#111111]"
      role="dialog"
      aria-modal="true"
      aria-label="Search Mee Shine Jewels"
    >
      {/* Top Bar */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between pb-6 border-b border-[#E8E4DC]">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A6D3B] font-sans font-semibold">
          SEARCH MEE SHINE
        </span>
        <button
          onClick={onClose}
          className="p-2 text-[#3D3B38] hover:text-[#9E7B34] transition-colors focus:outline-none"
          aria-label="Close search"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Large Search Input */}
      <div className="max-w-4xl w-full mx-auto my-8">
        <div className="relative flex items-center">
          <Search className="w-7 h-7 text-[#9E7B34] mr-4 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a piece name, ring, chain, bracelet..."
            className="w-full bg-transparent text-2xl sm:text-4xl font-serif text-[#111111] placeholder-[#716D66]/50 border-b border-[#D5CFC5] focus:border-[#9E7B34] pb-4 focus:outline-none transition-colors"
          />
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="flex flex-wrap gap-2 mt-6">
            <span className="text-xs text-[#716D66] font-sans mr-2 py-1 font-medium">Popular:</span>
            {['Kada B45', 'Rose Gold Chain', 'Butterfly Earring', 'Solitaire Ring', 'CZ Bracelet'].map((term) => (
              <button
                key={term}
                onClick={() => setQuery(term)}
                className="text-xs font-sans text-[#3D3B38] hover:text-[#9E7B34] px-3 py-1 rounded-full bg-[#FAF9F6] border border-[#E8E4DC] hover:border-[#9E7B34] transition-colors shadow-sm"
              >
                {term}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Results Grid */}
      <div className="max-w-4xl w-full mx-auto flex-1">
        {query.trim() && results.length === 0 ? (
          <div className="text-center py-16 text-[#716D66] font-sans text-sm">
            No jewellery pieces found matching "{query}". Try searching for "Ring", "Bracelet", or "Gold".
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {results.map((p) => (
              <div
                key={p.id}
                onClick={() => {
                  onSelectProduct(p);
                  onClose();
                }}
                className="group bg-[#FAF9F6] border border-[#E8E4DC] hover:border-[#B68D40]/50 rounded-xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1 p-3 shadow-sm hover:shadow-md"
              >
                <div className="aspect-square w-full rounded-lg overflow-hidden bg-[#F4F1EA] mb-3">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="text-[10px] uppercase tracking-wider text-[#716D66] font-sans mb-1 font-medium">
                  {p.category}
                </div>
                <h4 className="font-serif text-sm text-[#111111] group-hover:text-[#8A6D3B] transition-colors truncate mb-1 font-normal">
                  {p.name}
                </h4>
                <div className="font-sans text-xs text-[#111111] font-bold">
                  {formatPrice(p.price)}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
