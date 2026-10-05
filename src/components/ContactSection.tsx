import React from 'react';
import { MessageCircle, Phone, Sparkles, MapPin } from 'lucide-react';
import { content } from '../config/content';

interface ContactSectionProps {
  onShopCollection: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onShopCollection }) => {
  return (
    <section id="contact" className="relative z-30 bg-white py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-[#E8E4DC]">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A6D3B] font-sans font-semibold block mb-4">
          BESPOKE ASSISTANCE
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#111111] font-normal tracking-tight mb-4">
          {content.contact.heading[0]}<br />
          <span className="gold-gradient-text italic font-normal">
            {content.contact.heading[1]}
          </span>
        </h2>

        <p className="max-w-lg mx-auto text-sm text-[#3D3B38] font-sans font-normal leading-relaxed mb-10">
          {content.contact.subtitle}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-12">
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${content.brand.phoneRaw}?text=Hello%20Mee%20Shine%20Jewels,%20I%20would%20like%20assistance%20choosing%20jewellery.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary h-12 px-8 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-bold flex items-center space-x-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>{content.contact.whatsappCta}</span>
          </a>

          {/* Phone Call */}
          <a
            href={`tel:${content.brand.phoneRaw}`}
            className="btn-secondary h-12 px-8 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-semibold flex items-center space-x-2"
          >
            <Phone className="w-4 h-4 text-[#9E7B34]" />
            <span>{content.contact.callCta}</span>
          </a>

          {/* Shop Collection */}
          <button
            onClick={onShopCollection}
            className="h-12 px-7 rounded-full border border-[#111111] text-[#111111] hover:bg-[#111111] hover:text-white transition-colors text-xs uppercase tracking-[0.16em] font-sans font-semibold flex items-center space-x-2 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#9E7B34]" />
            <span>{content.contact.shopCta}</span>
          </button>
        </div>

        {/* Verified Location Card */}
        <div className="inline-flex items-center space-x-3 py-3 px-6 rounded-full bg-[#FAF9F6] border border-[#B68D40]/30 text-xs text-[#3D3B38] font-sans shadow-sm font-medium">
          <MapPin className="w-4 h-4 text-[#9E7B34]" />
          <span>Atelier & Flagship Fulfilment: {content.brand.city}, PIN {content.brand.pincode}</span>
        </div>
      </div>
    </section>
  );
};
