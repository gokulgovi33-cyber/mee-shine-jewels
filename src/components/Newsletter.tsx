import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { content } from '../config/content';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) return;
    setIsSubmitted(true);
  };

  return (
    <section className="relative z-30 bg-[#FAF9F6] py-24 sm:py-32 px-6 sm:px-12 md:px-20 border-t border-[#E8E4DC]">
      <div className="max-w-2xl mx-auto text-center">
        <span className="text-xs uppercase tracking-[0.3em] text-[#8A6D3B] font-sans font-semibold block mb-4">
          EXCLUSIVE EDITIONS
        </span>

        <h2 className="font-serif text-3xl sm:text-5xl text-[#111111] font-normal tracking-tight mb-4">
          {content.newsletter.heading[0]}<br />
          <span className="gold-gradient-text italic font-normal">
            {content.newsletter.heading[1]}
          </span>
        </h2>

        <p className="text-sm text-[#3D3B38] font-sans font-normal mb-10">
          Be the first to explore limited drops, styling notes, and private promotional codes.
        </p>

        {isSubmitted ? (
          <div className="p-6 rounded-2xl bg-white border border-[#9E7B34] text-[#111111] flex items-center justify-center space-x-3 transition-all duration-500 shadow-md">
            <Check className="w-5 h-5 text-[#9E7B34]" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase font-bold text-[#8A6D3B]">
              {content.newsletter.success}
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative max-w-md mx-auto">
            <div className="relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={content.newsletter.placeholder}
                className="w-full bg-transparent py-4 text-sm font-sans text-[#111111] placeholder-[#716D66] border-b border-[#D5CFC5] focus:border-[#9E7B34] focus:outline-none transition-colors pr-24 font-normal"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-3 px-5 py-2 rounded-full bg-[#9E7B34] text-white hover:bg-[#8A6D3B] transition-colors text-xs font-sans font-semibold uppercase tracking-wider flex items-center space-x-1 shadow-sm"
              >
                <span>{content.newsletter.cta}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
            <p className="text-[11px] text-[#716D66] font-sans mt-3 text-left">
              By joining, you agree to receive Mee Shine Jewels newsletters. Unsubscribe anytime.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
