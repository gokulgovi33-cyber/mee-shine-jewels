import React, { useEffect, useRef } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, MessageCircle, MapPin } from 'lucide-react';
import gsap from 'gsap';
import type { Product } from '../data/products';
import type { Address } from '../lib/accountStore';
import { content } from '../config/content';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onExplore: () => void;
  isLoggedIn?: boolean;
  deliveryAddress?: Address | null;
  onManageAddress?: () => void; // opens login or the address book
  onPlaceOrder?: (totals: { subtotal: number; shipping: number; total: number }) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onExplore,
  isLoggedIn = false,
  deliveryAddress = null,
  onManageAddress,
  onPlaceOrder
}) => {
  const backdropRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  // Keyboard navigation & body lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);

      // Animate open
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0.65,
          pointerEvents: 'auto',
          duration: 0.45,
          ease: 'power2.out'
        });
      }

      if (drawerRef.current) {
        gsap.fromTo(
          drawerRef.current,
          { x: '100%' },
          {
            x: '0%',
            duration: 0.65,
            ease: 'power3.out',
            onComplete: () => {
              if (itemsContainerRef.current) {
                const children = itemsContainerRef.current.querySelectorAll('.cart-item-row');
                if (children && children.length > 0) {
                  gsap.fromTo(
                    children,
                    { opacity: 0, y: 15 },
                    { opacity: 1, y: 0, stagger: 0.04, duration: 0.4, ease: 'power2.out' }
                  );
                }
              }
            }
          }
        );
      }
    } else {
      document.body.style.overflow = '';
      if (backdropRef.current) {
        gsap.to(backdropRef.current, {
          opacity: 0,
          pointerEvents: 'none',
          duration: 0.35,
          ease: 'power2.in'
        });
      }
      if (drawerRef.current) {
        gsap.to(drawerRef.current, {
          x: '100%',
          duration: 0.45,
          ease: 'power3.in'
        });
      }
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const formatPrice = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const qualifiesForFreeShipping = subtotal >= 999;
  const shippingCost = qualifiesForFreeShipping || items.length === 0 ? 0 : 50;
  const total = subtotal + shippingCost;

  // Build authentic WhatsApp Checkout message
  const generateWhatsAppMessage = () => {
    let msg = `Hello Mee Shine Jewels,\n\nI would like to place an order from your online store:\n\n`;
    items.forEach((item, index) => {
      msg += `${index + 1}. ${item.quantity} × ${item.product.name}\n   Price: ${formatPrice(item.product.price * item.quantity)}\n   Link: ${item.product.sourceUrl}\n\n`;
    });
    msg += `Subtotal: ${formatPrice(subtotal)}\n`;
    if (qualifiesForFreeShipping) {
      msg += `Shipping: FREE (Orders over ₹999 / FREESHIP999)\n`;
    } else {
      msg += `Shipping: ₹50\n`;
    }
    msg += `Estimated Total: ${formatPrice(total)}\n\n`;
    if (deliveryAddress) {
      const a = deliveryAddress;
      msg += `Deliver to:\n${a.fullName} (${a.phone})\n${a.line1}${a.line2 ? `, ${a.line2}` : ''}\n${a.city}, ${a.state} - ${a.pincode}\n\n`;
    }
    msg += `Please confirm availability and share payment / delivery instructions. Thank you!`;
    return encodeURIComponent(msg);
  };

  return (
    <div
      className={`fixed inset-0 z-[250] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      role="dialog"
      aria-modal="true"
      aria-label="Shopping Bag"
    >
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 transition-opacity"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute top-0 right-0 h-full w-full sm:w-[440px] bg-white border-l border-[#B68D40]/30 shadow-2xl flex flex-col justify-between transform translate-x-full will-change-transform"
      >
        {/* Header */}
        <div className="p-6 border-b border-[#E8E4DC] flex items-center justify-between sticky top-0 bg-white z-10">
          <div className="flex items-baseline space-x-2">
            <h3 className="font-serif text-2xl text-[#111111] font-normal tracking-wide">
              YOUR BAG
            </h3>
            <span className="text-xs text-[#8A6D3B] font-sans font-semibold">
              ({items.reduce((acc, i) => acc + i.quantity, 0)})
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#3D3B38] hover:text-[#9E7B34] transition-colors focus:outline-none"
            aria-label="Close cart"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Cart Items List or Empty State */}
        <div
          ref={itemsContainerRef}
          className="flex-1 overflow-y-auto p-6 space-y-5 divide-y divide-[#E8E4DC] scrollbar-thin"
        >
          {items.length === 0 ? (
            /* Centered Empty Cart (Section 34) */
            <div className="h-full flex flex-col items-center justify-center text-center py-16 px-4">
              <div className="w-16 h-16 rounded-full border border-[#B68D40]/40 flex items-center justify-center mb-6 bg-[#9E7B34]/5">
                <svg className="w-8 h-8 text-[#9E7B34]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="7" />
                  <path d="M12 5V3M12 21v-2M5 12H3M21 12h-2" />
                </svg>
              </div>
              <p className="font-serif text-2xl text-[#111111] mb-2 font-normal">
                {content.cart.emptyTitle}
              </p>
              <p className="text-xs text-[#716D66] font-sans mb-8 max-w-xs font-normal">
                Discover our anti-tarnish rings, chains, bracelets, and everyday luxury pieces.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="btn-primary h-12 px-8 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-semibold"
              >
                {content.cart.emptyCta}
              </button>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.product.id}
                className="cart-item-row pt-5 first:pt-0 flex items-start space-x-4 group"
              >
                {/* Thumbnail */}
                <div className="w-20 h-20 rounded-lg overflow-hidden bg-[#FAF9F6] flex-shrink-0 border border-[#E8E4DC]">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-serif text-base text-[#111111] font-normal leading-snug truncate mb-1">
                    {item.product.name}
                  </h4>
                  <div className="text-xs text-[#8A6D3B] font-sans font-bold mb-3">
                    {formatPrice(item.product.price)}
                  </div>

                  {/* Quantity & Remove Row */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center border border-[#E8E4DC] rounded-full px-2 py-0.5 bg-[#FAF9F6]">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                        className="p-1 text-[#716D66] hover:text-[#111111] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center text-xs font-sans text-[#111111] font-bold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                        className="p-1 text-[#716D66] hover:text-[#111111] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1 text-[#716D66] hover:text-red-500 transition-colors"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5 stroke-[1.5]" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer with Subtotal & WhatsApp Ordering CTA */}
        {items.length > 0 && (
          <div className="p-6 border-t border-[#E8E4DC] bg-[#FAF9F6] pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {/* Free Shipping Progress Alert */}
            <div className="mb-4 p-3 rounded-lg bg-white border border-[#E8E4DC] text-[11px] font-sans shadow-sm">
              {qualifiesForFreeShipping ? (
                <div className="text-[#8A6D3B] font-semibold flex items-center justify-between">
                  <span>✓ Qualified for FREE SHIPPING (FREESHIP999)</span>
                  <span>₹0</span>
                </div>
              ) : (
                <div className="text-[#3D3B38] flex items-center justify-between">
                  <span>Add {formatPrice(999 - subtotal)} more for free shipping</span>
                  <span className="text-[#716D66]">Standard: ₹50</span>
                </div>
              )}
            </div>

            {/* Subtotal */}
            <div className="flex items-center justify-between text-sm text-[#716D66] font-sans mb-1">
              <span>Subtotal</span>
              <span className="text-[#111111] font-semibold">{formatPrice(subtotal)}</span>
            </div>

            <div className="flex items-center justify-between text-sm text-[#716D66] font-sans mb-4">
              <span>Delivery</span>
              <span className="text-[#8A6D3B] font-semibold">
                {qualifiesForFreeShipping ? 'FREE' : formatPrice(shippingCost)}
              </span>
            </div>

            <div className="flex items-baseline justify-between text-base font-serif text-[#111111] mb-6 pt-3 border-t border-[#E8E4DC]">
              <span className="tracking-wide">TOTAL</span>
              <span className="font-sans text-xl text-[#111111] font-bold">
                {formatPrice(total)}
              </span>
            </div>

            {/* Delivery address (saved in the customer's account) */}
            <div className="mb-4 p-3 rounded-lg bg-white border border-[#E8E4DC] text-xs font-sans flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#9E7B34] flex-shrink-0 mt-0.5" />
              <div className="flex-1 min-w-0 text-[#3D3B38]">
                {deliveryAddress ? (
                  <>
                    <div className="font-semibold text-[#111111]">Deliver to {deliveryAddress.fullName}</div>
                    <div className="truncate">
                      {deliveryAddress.line1}, {deliveryAddress.city} – {deliveryAddress.pincode}
                    </div>
                  </>
                ) : (
                  <div>{isLoggedIn ? 'Add a delivery address for faster checkout' : 'Log in to save your address & orders'}</div>
                )}
              </div>
              {onManageAddress && (
                <button onClick={onManageAddress} className="text-[11px] uppercase tracking-widest font-bold text-[#8A6D3B] hover:underline flex-shrink-0">
                  {deliveryAddress ? 'Change' : isLoggedIn ? 'Add' : 'Log in'}
                </button>
              )}
            </div>

            {/* WhatsApp Checkout Action */}
            <a
              href={`https://wa.me/${content.brand.phoneRaw}?text=${generateWhatsAppMessage()}`}
              onClick={() => onPlaceOrder?.({ subtotal, shipping: shippingCost, total })}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full h-12 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-bold flex items-center justify-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>{content.cart.whatsappCheckoutCta}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <p className="text-[10px] text-center text-[#716D66] font-sans mt-3 font-normal">
              Direct checkout with Mee Shine Jewels team in Chennai, TN
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
