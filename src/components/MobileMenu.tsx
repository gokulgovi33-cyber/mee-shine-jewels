import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, Phone } from 'lucide-react';
import gsap from 'gsap';
import { content } from '../config/content';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (sectionId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenAccount: () => void;
  isLoggedIn?: boolean;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenAccount,
  isLoggedIn = false
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const tl = gsap.timeline();
      if (overlayRef.current) {
        tl.to(overlayRef.current, {
          opacity: 1,
          pointerEvents: 'auto',
          duration: 0.4,
          ease: 'power3.out'
        });
      }
      if (linksRef.current) {
        const linkItems = linksRef.current.querySelectorAll('.mobile-menu-item');
        if (linkItems && linkItems.length > 0) {
          tl.fromTo(
            linkItems,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: 'power3.out' },
            '-=0.2'
          );
        }
      }
    } else {
      document.body.style.overflow = '';
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.35,
          ease: 'power3.in'
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { label: 'SHOP', id: 'collection' },
    { label: 'CATEGORIES', id: 'categories' },
    { label: 'FEATURED', id: 'featured' },
    { label: 'OUR STORY', id: 'story' },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[150] bg-white opacity-0 pointer-events-none flex flex-col justify-between p-6 sm:p-8 md:hidden transition-opacity text-[#111111]"
      aria-modal="true"
      role="dialog"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between border-b border-[#E8E4DC] pb-5">
        <div className="flex items-center space-x-3">
          <img
            src="./images/mee-shine-logo.png"
            alt="Mee Shine Jewels Logo"
            className="w-10 h-10 object-contain drop-shadow-[0_2px_6px_rgba(158,123,52,0.2)] flex-shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-[0.2em] text-[#111111] uppercase font-normal leading-none">
              {content.brand.wordmarkFirst}
            </span>
            <span className="font-serif text-[10px] tracking-[0.35em] text-[#9E7B34] uppercase mt-1 leading-none font-medium">
              {content.brand.wordmarkSecond}
            </span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="p-2 text-[#3D3B38] hover:text-[#9E7B34] transition-colors"
          aria-label="Close mobile menu"
        >
          <X className="w-6 h-6 stroke-[1.5]" />
        </button>
      </div>

      {/* Main Nav Links */}
      <ul ref={linksRef} className="flex flex-col space-y-7 my-auto">
        {navLinks.map((link) => (
          <li key={link.id} className="overflow-hidden">
            <button
              onClick={() => {
                onNavigate(link.id);
                onClose();
              }}
              className="mobile-menu-item block font-serif text-3xl sm:text-4xl text-[#111111] hover:text-[#9E7B34] tracking-[0.12em] transition-colors text-left font-normal"
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Footer Info & Cart Action */}
      <div className="border-t border-[#E8E4DC] pt-6 flex flex-col space-y-5">
        <button
          onClick={() => {
            onClose();
            onOpenAccount();
          }}
          className="w-full py-3.5 bg-[#111111] text-white hover:bg-[#9E7B34] transition-all rounded-full tracking-widest text-xs uppercase font-semibold"
        >
          {isLoggedIn ? 'MY ACCOUNT' : 'LOG IN / SIGN UP'}
        </button>

        <button
          onClick={() => {
            onClose();
            onOpenCart();
          }}
          className="w-full py-3.5 border border-[#9E7B34] text-[#8A6D3B] hover:bg-[#9E7B34] hover:text-white transition-all rounded-full tracking-widest text-xs uppercase font-semibold flex items-center justify-center space-x-2"
        >
          <span>VIEW YOUR BAG</span>
          <span className="bg-[#9E7B34] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {cartCount}
          </span>
        </button>

        <div className="flex items-center justify-between text-xs text-[#716D66] tracking-widest uppercase pt-2 font-medium">
          <a
            href={content.brand.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-[#9E7B34] transition-colors"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram</span>
          </a>
          <a
            href={`https://wa.me/${content.brand.phoneRaw}?text=Hello%20Mee%20Shine%20Jewels`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 hover:text-[#9E7B34] transition-colors"
          >
            <MessageCircle className="w-4 h-4 stroke-[1.5]" />
            <span>WhatsApp</span>
          </a>
          <a
            href={`tel:${content.brand.phoneRaw}`}
            className="flex items-center space-x-1.5 hover:text-[#9E7B34] transition-colors"
          >
            <Phone className="w-4 h-4 stroke-[1.5]" />
            <span>Call</span>
          </a>
        </div>
      </div>
    </div>
  );
};
