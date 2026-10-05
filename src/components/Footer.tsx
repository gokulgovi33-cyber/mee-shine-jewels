import React from 'react';
import { MessageCircle, ArrowUp } from 'lucide-react';
import { content } from '../config/content';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-30 bg-[#FAF9F6] text-[#111111] pt-20 pb-12 px-6 sm:px-12 md:px-20 border-t border-[#E8E4DC] select-none">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-[#E8E4DC]">
          
          {/* Brand Info & Address */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3.5 mb-5">
                <img
                  src="./images/mee-shine-logo.png"
                  alt="Mee Shine Jewels Logo"
                  className="w-12 h-12 object-contain drop-shadow-[0_2px_8px_rgba(158,123,52,0.2)] flex-shrink-0"
                />
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] text-[#111111] uppercase font-normal leading-none">
                    {content.brand.wordmarkFirst}
                  </span>
                  <span className="font-serif text-xs sm:text-sm tracking-[0.4em] text-[#9E7B34] uppercase mt-1 leading-none font-medium">
                    {content.brand.wordmarkSecond}
                  </span>
                </div>
              </div>
              <p className="text-xs text-[#716D66] font-sans font-normal leading-relaxed max-w-sm mb-6">
                Bespoke anti-tarnish and stainless steel everyday jewellery designed for effortless styling and enduring glow.
              </p>
            </div>

            <div className="text-xs text-[#3D3B38] font-sans font-medium">
              <span className="text-[#716D66] block text-[10px] uppercase tracking-wider mb-1 font-normal">LOCATION</span>
              {content.brand.city}, {content.brand.pincode}, India
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 flex flex-col space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#8A6D3B] font-sans font-semibold mb-2">
              NAVIGATION
            </span>
            {[
              { label: 'Shop All', id: 'collection' },
              { label: 'Categories', id: 'categories' },
              { label: 'Featured Pieces', id: 'featured' },
              { label: 'Our Story', id: 'story' },
              { label: 'Customer Care', id: 'contact' }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className="text-left text-xs font-sans text-[#3D3B38] hover:text-[#9E7B34] tracking-wider transition-colors font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Policies & Socials */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#8A6D3B] font-sans font-semibold mb-4 block">
                POLICIES & ETHOS
              </span>
              <div className="flex flex-col space-y-2.5 text-xs font-sans text-[#716D66]">
                <a href="#story" onClick={() => onNavigate('story')} className="hover:text-[#111111] transition-colors">
                  Anti-Tarnish Care Guide
                </a>
                <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">
                  Return & Exchange Policy (3–5 Days)
                </a>
                <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">
                  Cancellation & Refund Guarantee
                </a>
                <a href="#contact" onClick={() => onNavigate('contact')} className="hover:text-[#111111] transition-colors">
                  Privacy Policy & Data Security
                </a>
              </div>
            </div>

            <div className="pt-6">
              <span className="text-[10px] uppercase tracking-wider text-[#716D66] font-sans block mb-3 font-medium">
                CONNECT WITH OUR ATELIER
              </span>
              <div className="flex items-center space-x-4">
                <a
                  href={content.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-[#E8E4DC] bg-white text-[#3D3B38] hover:text-[#9E7B34] hover:border-[#9E7B34] transition-colors shadow-sm"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${content.brand.phoneRaw}?text=Hello%20Mee%20Shine%20Jewels`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-[#E8E4DC] bg-white text-[#3D3B38] hover:text-[#9E7B34] hover:border-[#9E7B34] transition-colors shadow-sm"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Giant Editorial Wordmark Background */}
        <div className="py-12 sm:py-16 text-center overflow-hidden border-b border-[#E8E4DC]">
          <div className="font-serif text-[12vw] sm:text-[14vw] leading-none tracking-[0.08em] uppercase text-black/[0.04] select-none font-normal">
            MEE SHINE
          </div>
          <div className="font-serif text-[4vw] sm:text-[5vw] leading-none tracking-[0.25em] uppercase text-[#9E7B34]/[0.15] select-none font-light mt-1">
            JEWELS
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#716D66] font-sans">
          <div>
            © {new Date().getFullYear()} {content.brand.name}. All rights reserved. Chennai, India.
          </div>

          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 flex items-center space-x-2 text-[#3D3B38] hover:text-[#9E7B34] transition-colors tracking-widest uppercase text-[10px] font-semibold"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
