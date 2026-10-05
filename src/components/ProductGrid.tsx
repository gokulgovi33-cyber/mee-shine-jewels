import React, { useState, useMemo } from 'react';
import { CATEGORIES, type CategoryType, type Product } from '../data/products';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';

interface ProductGridProps {
  products: Product[];
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
  wishlist?: string[];
  onToggleWishlist?: (productId: string) => void;
}

type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'discount';

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onViewProduct,
  onAddToCart,
  wishlist = [],
  onToggleWishlist
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('ALL');
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [displayCount, setDisplayCount] = useState<number>(24);

  // Filter & Sort Logic
  const filteredAndSortedProducts = useMemo(() => {
    let result = products;

    // Filter by Category
    if (selectedCategory !== 'ALL') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'discount') return (b.discount || 0) - (a.discount || 0);
      // Default: featured first
      if (a.isFeatured && !b.isFeatured) return -1;
      if (!a.isFeatured && b.isFeatured) return 1;
      return 0;
    });

    return result;
  }, [products, selectedCategory, sortBy]);

  const visibleProducts = filteredAndSortedProducts.slice(0, displayCount);
  const hasMore = displayCount < filteredAndSortedProducts.length;

  return (
    <section id="collection" className="relative z-30 bg-[#FAF9F6] py-24 sm:py-32 px-6 sm:px-10 md:px-16 border-t border-[#E8E4DC]">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#9E7B34]" />
              <span className="text-xs uppercase tracking-[0.25em] text-[#8A6D3B] font-sans font-semibold">
                THE STOREFRONT
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#111111] font-normal tracking-tight">
              THE COLLECTION
            </h2>
            <p className="text-sm sm:text-base text-[#3D3B38] font-sans font-normal mt-2 max-w-lg">
              Made for everyday. Finished to stay luminous.
            </p>
          </div>

          {/* Sort Controls */}
          <div className="mt-6 md:mt-0 flex items-center space-x-3">
            <div className="relative inline-block text-left">
              <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#716D66] font-sans font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Sort by:</span>
              </div>
              <div className="relative mt-1">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-white border border-[#E8E4DC] text-[#111111] hover:border-[#9E7B34] text-xs font-sans rounded-full py-2.5 pl-4 pr-10 focus:outline-none focus:border-[#9E7B34] cursor-pointer transition-colors shadow-sm"
                >
                  <option value="featured">Featured First</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="discount">Highest Discount</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#716D66] pointer-events-none absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter Pills (Section 27) */}
        <div id="categories" className="flex items-center space-x-2 overflow-x-auto pb-6 mb-10 scrollbar-none">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setDisplayCount(24);
                }}
                className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#9E7B34] text-white font-semibold shadow-md shadow-[#9E7B34]/25'
                    : 'bg-white border border-[#E8E4DC] text-[#3D3B38] hover:border-[#9E7B34]/60 hover:text-[#111111] shadow-sm'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Product Count Indicator */}
        <div className="flex items-center justify-between text-xs text-[#716D66] font-sans tracking-wider uppercase mb-6 font-medium">
          <span>Showing {visibleProducts.length} of {filteredAndSortedProducts.length} pieces</span>
          <span className="text-[#8A6D3B]">Anti-Tarnish Stainless Steel</span>
        </div>

        {/* Product Grid (Section 28 & 53) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onView={onViewProduct}
              onAddToCart={onAddToCart}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
            />
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setDisplayCount((prev) => prev + 24)}
              className="btn-secondary h-12 px-10 rounded-full text-xs uppercase tracking-[0.18em] font-sans font-medium"
            >
              LOAD MORE PIECES ({filteredAndSortedProducts.length - visibleProducts.length} REMAINING)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
