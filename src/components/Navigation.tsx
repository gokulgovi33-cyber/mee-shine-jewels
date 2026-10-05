import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu, User } from 'lucide-react';
import { content } from '../config/content';

interface NavigationProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenSearch: () => void;
  onOpenMobileMenu: () => void;
  onNavigate: (sectionId: string) => void;
  cartAnimated?: boolean;
  onOpenAccount: () => void;
  userInitial?: string | null;
}

export const Navigation: React.FC<NavigationProps> = ({
  cartCount,
  onOpenCart,
  onOpenSearch,
  onOpenMobileMenu,
  onNavigate,
  cartAnimated = false,
  onOpenAccount,
  userInitial = null
}) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Shop', id: 'collection' },
    { label: 'Categories', id: 'categories' },
    { label: 'Featured', id: 'featured' },
    { label: 'Our Story', id: 'story' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-luxury ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl border-b border-[#B68D40]/20 shadow-[0_2px_12px_rgba(0,0,0,0.04)] py-4'
          : 'bg-transparent py-6 md:py-8'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
        {/* LEFT: Logo Emblem & Wordmark */}
        <button
          onClick={() => onNavigate('hero')}
          className="group flex items-center space-x-3 text-left focus:outline-none"
          aria-label="Mee Shine Jewels Home"
        >
          {/* Official Mee Shine Circular Emblem with Luxury Gold Ring */}
          <div className="relative w-11 h-11 sm:w-12 sm:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-105 drop-shadow-[0_2px_8px_rgba(158,123,52,0.25)] flex items-center justify-center">
            <img
              src="./images/mee-shine-logo.png"
              alt="Mee Shine Jewels Logo"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl tracking-[0.22em] text-[#111111] uppercase group-hover:text-[#9E7B34] transition-colors leading-none font-normal">
              {content.brand.wordmarkFirst}
            </span>
            <span className="font-serif text-[10px] sm:text-xs tracking-[0.38em] text-[#9E7B34] uppercase mt-1 leading-none font-medium">
              {content.brand.wordmarkSecond}
            </span>
          </div>
        </button>

        {/* CENTER: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative text-sm tracking-[0.14em] uppercase text-[#2D2D2D] hover:text-[#9E7B34] transition-colors font-sans font-medium py-1 group focus:outline-none"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#9E7B34] transition-all duration-300 ease-out group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* RIGHT: Line Icons (Search, Account, Bag) */}
        <div className="flex items-center space-x-0.5 sm:space-x-6">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-2 text-[#2D2D2D] hover:text-[#9E7B34] transition-colors focus:outline-none"
            aria-label="Search catalogue"
          >
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>

          {/* Account: login/signup, or the signed-in customer's initial */}
          <button
            onClick={onOpenAccount}
            className="p-2 text-[#2D2D2D] hover:text-[#9E7B34] transition-colors focus:outline-none"
            aria-label={userInitial ? 'My account' : 'Log in or sign up'}
          >
            {userInitial ? (
              <span className="w-6 h-6 rounded-full bg-[#9E7B34] text-white text-[11px] font-sans font-bold flex items-center justify-center uppercase">
                {userInitial}
              </span>
            ) : (
              <User className="w-5 h-5 stroke-[1.5]" />
            )}
          </button>

          {/* Bag Button with Numerical Badge */}
          <button
            onClick={onOpenCart}
            className={`relative p-2 text-[#2D2D2D] hover:text-[#9E7B34] transition-all focus:outline-none ${
              cartAnimated ? 'rotate-2 scale-105 text-[#9E7B34]' : ''
            }`}
            aria-label={`Shopping bag containing ${cartCount} items`}
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {cartCount > 0 && (
              <span
                className={`absolute top-0 right-0 w-4 h-4 bg-[#9E7B34] text-white text-[10px] font-sans font-bold rounded-full flex items-center justify-center transition-transform duration-300 ${
                  cartAnimated ? 'scale-125' : 'scale-100'
                }`}
              >
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={onOpenMobileMenu}
            className="md:hidden p-2 text-[#2D2D2D] hover:text-[#9E7B34] transition-colors focus:outline-none"
            aria-label="Open mobile navigation menu"
          >
            <Menu className="w-6 h-6 stroke-[1.5]" />
          </button>
        </div>
      </div>
    </header>
  );
};
