import React, { useState } from 'react';
import { ShoppingBag, Eye, Check, Heart } from 'lucide-react';
import type { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  onView: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onView,
  onAddToCart,
  isWishlisted = false,
  onToggleWishlist
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isAdded) return;
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 900); // 900ms as specified in Section 79
  };

  return (
    <div
      onClick={() => onView(product)}
      className="group relative bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-luxury hover:-translate-y-1 flex flex-col justify-between border border-[#E8E4DC] hover:border-[#B68D40]/50 shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(182,141,64,0.12)]"
    >
      {/* Product Image Container */}
      <div className="relative aspect-square w-full bg-[#FAF9F6] overflow-hidden">
        {/* Placeholder / Shimmer while loading */}
        {!imgLoaded && (
          <div className="absolute inset-0 bg-[#FAF9F6] animate-pulse flex items-center justify-center">
            <span className="text-[10px] text-[#716D66] tracking-widest uppercase">Mee Shine</span>
          </div>
        )}

        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImgLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-500 ease-luxury group-hover:scale-[1.035] ${
            imgLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Discount Badge */}
        {product.discount && product.discount > 0 ? (
          <span className="absolute top-3 left-3 bg-white/95 border border-[#B68D40]/40 text-[#8A6D3B] text-[10px] font-sans font-bold px-2 py-0.5 rounded-full tracking-wider uppercase backdrop-blur-sm shadow-sm">
            {product.discount}% OFF
          </span>
        ) : null}

        {/* Wishlist Heart */}
        {onToggleWishlist && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist(product.id);
            }}
            className={`absolute top-3 right-3 p-2 rounded-full bg-white/90 backdrop-blur-md shadow-md transition-colors ${
              isWishlisted ? 'text-[#9E7B34]' : 'text-[#3D3B38] hover:text-[#9E7B34]'
            }`}
            aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
            aria-pressed={isWishlisted}
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>
        )}

        {/* Category Tag */}
        <span className="absolute bottom-3 left-3 bg-white/90 text-[#3D3B38] text-[9px] font-sans font-medium tracking-widest uppercase px-2 py-0.5 rounded backdrop-blur-sm shadow-sm border border-[#E8E4DC]">
          {product.category}
        </span>

        {/* Quick View Floating Action */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onView(product);
          }}
          className="absolute bottom-3 right-3 p-2 bg-white/90 hover:bg-[#9E7B34] text-[#111111] hover:text-white rounded-full backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 hidden sm:flex items-center justify-center shadow-md"
          aria-label={`Quick view ${product.name}`}
        >
          <Eye className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Product Card Details */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow">
        <div>
          <h4 className="font-serif text-base sm:text-lg text-[#111111] group-hover:text-[#8A6D3B] transition-colors leading-snug line-clamp-1 mb-2 font-normal">
            {product.name}
          </h4>

          {/* Pricing Row */}
          <div className="flex items-baseline space-x-2.5 mb-4">
            <span className="font-sans text-base sm:text-lg font-bold text-[#111111] tracking-tight">
              {formatPrice(product.price)}
            </span>
            {product.mrp && product.mrp > product.price && (
              <span className="font-sans text-xs text-[#716D66] line-through font-normal">
                {formatPrice(product.mrp)}
              </span>
            )}
          </div>
        </div>

        {/* Add to Bag Button with 900ms Feedback */}
        <button
          onClick={handleAdd}
          className={`w-full py-2.5 rounded-full text-xs font-sans uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center space-x-1.5 ${
            isAdded
              ? 'bg-[#9E7B34] text-white shadow-md shadow-[#9E7B34]/25'
              : 'border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white'
          }`}
        >
          {isAdded ? (
            <>
              <Check className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>ADDED</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-3 h-3 stroke-[1.5]" />
              <span>ADD TO BAG</span>
            </>
          )}
        </button>
      </div>

      {/* Gold line reveal on hover */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9E7B34] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};
