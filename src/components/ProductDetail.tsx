import React, { useState, useEffect } from 'react';
import { X, ShoppingBag, MessageCircle, ShieldCheck, Sparkles, Truck, RotateCcw, Heart } from 'lucide-react';
import type { Product } from '../data/products';
import { content } from '../config/content';

interface ProductDetailProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({
  product,
  onClose,
  onAddToCart,
  isWishlisted = false,
  onToggleWishlist
}) => {
  const [quantity, setQuantity] = useState(1);
  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    setQuantity(1);
    setActiveImageIdx(0);
    setIsAdded(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (product) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1200);
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Mee Shine Jewels,\n\nI would like to enquire about:\n${product.name}\nPrice: ${formatPrice(product.price)}\nSKU/Link: ${product.sourceUrl}\n\nPlease share availability and delivery timeline.`
  );

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label={product.name}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white border border-[#E8E4DC] text-[#3D3B38] hover:text-[#9E7B34] hover:border-[#9E7B34] transition-all focus:outline-none shadow-lg"
        aria-label="Close product view"
      >
        <X className="w-5 h-5 stroke-[1.5]" />
      </button>

      {/* Modal Content Container */}
      <div className="max-w-5xl w-full bg-white border border-[#B68D40]/30 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl my-auto grid grid-cols-1 md:grid-cols-12 gap-0 text-[#111111]">
        
        {/* LEFT COLUMN: Large Imagery & Gallery */}
        <div className="md:col-span-6 bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[#E8E4DC]">
          <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-[#F4F1EA] mb-4 shadow-sm">
            <img
              src={product.images[activeImageIdx] || product.images[0]}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.discount && product.discount > 0 && (
              <span className="absolute top-4 left-4 bg-white/95 border border-[#B68D40]/40 text-[#8A6D3B] text-xs font-sans font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md shadow-sm">
                {product.discount}% OFF
              </span>
            )}
          </div>

          {/* Thumbnails if multiple images exist */}
          {product.images.length > 1 && (
            <div className="flex items-center space-x-3 overflow-x-auto pb-2">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                    activeImageIdx === idx ? 'border-[#9E7B34] shadow-sm' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Guarantees Badges */}
          <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-[#E8E4DC] text-center text-[10px] text-[#716D66] uppercase tracking-wider font-sans font-medium">
            <div className="flex flex-col items-center">
              <ShieldCheck className="w-4 h-4 text-[#9E7B34] mb-1" />
              <span>Anti-Tarnish</span>
            </div>
            <div className="flex flex-col items-center">
              <Truck className="w-4 h-4 text-[#9E7B34] mb-1" />
              <span>3–5 Day Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <RotateCcw className="w-4 h-4 text-[#9E7B34] mb-1" />
              <span>Easy Support</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Details & Actions */}
        <div className="md:col-span-6 p-6 sm:p-10 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs tracking-widest uppercase text-[#716D66] font-sans mb-3 font-medium">
              <span>{product.category}</span>
              <span className="text-[#8A6D3B] flex items-center space-x-1 font-semibold">
                <Sparkles className="w-3 h-3" />
                <span>Verified Piece</span>
              </span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-tight mb-4">
              {product.name}
            </h3>

            {/* Pricing Section */}
            <div className="flex items-baseline space-x-3 mb-6">
              <span className="font-sans text-3xl font-bold text-[#111111] tracking-tight">
                {formatPrice(product.price)}
              </span>
              {product.mrp && product.mrp > product.price && (
                <span className="font-sans text-base text-[#716D66] line-through font-normal">
                  {formatPrice(product.mrp)}
                </span>
              )}
              {product.discount && product.discount > 0 && (
                <span className="text-xs font-sans font-semibold px-2.5 py-0.5 rounded-full bg-[#9E7B34]/12 text-[#8A6D3B] border border-[#9E7B34]/30">
                  Save {product.discount}%
                </span>
              )}
            </div>

            {/* Verified Specifications Matrix */}
            <div className="grid grid-cols-2 gap-4 p-4 rounded-xl bg-[#FAF9F6] border border-[#E8E4DC] mb-6 text-xs font-sans">
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase mb-0.5">FINISH</span>
                <span className="text-[#111111] font-medium">Anti-Tarnish 18K Polish</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase mb-0.5">CORE MATERIAL</span>
                <span className="text-[#111111] font-medium">{product.material || 'Stainless Steel'}</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase mb-0.5">COLOUR</span>
                <span className="text-[#8A6D3B] font-semibold">{product.colour || 'Gold'}</span>
              </div>
              <div>
                <span className="text-[#716D66] block text-[10px] tracking-wider uppercase mb-0.5">WATER RESISTANCE</span>
                <span className="text-[#111111] font-medium">Daily Wear Safe</span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-6">
              <h4 className="text-[11px] uppercase tracking-wider text-[#716D66] font-sans mb-2 font-semibold">
                DESCRIPTION
              </h4>
              <p className="text-sm text-[#3D3B38] font-sans font-normal leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Add to Bag and Quantity Controls */}
          <div className="pt-6 border-t border-[#E8E4DC] flex flex-col space-y-3">
            <div className="flex items-center space-x-4">
              {/* Quantity Picker */}
              <div className="flex items-center border border-[#E8E4DC] rounded-full px-3 py-1.5 bg-[#FAF9F6]">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 flex items-center justify-center text-[#3D3B38] hover:text-[#111111] transition-colors font-bold"
                  aria-label="Decrease quantity"
                >
                  -
                </button>
                <span className="w-8 text-center text-sm font-sans font-bold text-[#111111]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 flex items-center justify-center text-[#3D3B38] hover:text-[#111111] transition-colors font-bold"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAdd}
                className="btn-primary flex-1 h-12 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-bold flex items-center justify-center space-x-2 shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{isAdded ? 'ADDED TO BAG' : `ADD TO BAG • ${formatPrice(product.price * quantity)}`}</span>
              </button>

              {onToggleWishlist && (
                <button
                  onClick={() => onToggleWishlist(product.id)}
                  className={`w-12 h-12 flex-shrink-0 rounded-full border flex items-center justify-center transition-colors ${
                    isWishlisted ? 'border-[#9E7B34] text-[#9E7B34] bg-[#9E7B34]/10' : 'border-[#E8E4DC] text-[#3D3B38] hover:text-[#9E7B34] hover:border-[#9E7B34]'
                  }`}
                  aria-label={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
                  aria-pressed={isWishlisted}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              )}
            </div>

            {/* WhatsApp Enquiry Button */}
            <a
              href={`https://wa.me/${content.brand.phoneRaw}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 rounded-full border border-[#9E7B34] text-[#8A6D3B] hover:bg-[#9E7B34]/10 transition-colors flex items-center justify-center space-x-2 text-xs uppercase tracking-widest font-sans font-semibold"
            >
              <MessageCircle className="w-4 h-4" />
              <span>ENQUIRE ON WHATSAPP</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
