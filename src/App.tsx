import React, { useState, useEffect, useCallback, useMemo } from 'react';
import type { ModelKey } from './config/jewelleryModels';
import { PRODUCTS, FEATURED_PRODUCTS, type Product } from './data/products';
import { Loader } from './components/Loader';
import { CustomCursor } from './components/CustomCursor';
import { Navigation } from './components/Navigation';
import { MobileMenu } from './components/MobileMenu';
import { JewelleryCanvas } from './components/JewelleryCanvas';
import type { ChapterType } from './components/CameraRig';
import { Hero } from './components/Hero';
import { StoryChapter } from './components/StoryChapter';
import { ProductSelector } from './components/ProductSelector';
import { ProductGrid } from './components/ProductGrid';
import { ProductDetail } from './components/ProductDetail';
import { CartDrawer, type CartItem } from './components/CartDrawer';
import { SearchOverlay } from './components/SearchOverlay';
import { FeaturedSlider } from './components/FeaturedSlider';
import { BrandStory } from './components/BrandStory';
import { Marquee } from './components/Marquee';
import { Newsletter } from './components/Newsletter';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { DevModelSwitcher } from './components/DevModelSwitcher';
import { AccountModal, type AccountTab } from './components/AccountModal';
import { accountStore, type Address, type PublicUser } from './lib/accountStore';

const GUEST_CART_KEY = 'mee_shine_jewels_cart';

export const App: React.FC = () => {
  // Loading Sequence State
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(10);

  // Active 3D Model & Chapter State
  const [activeModel, setActiveModel] = useState<ModelKey>('ring01');
  const [currentChapter, setCurrentChapter] = useState<ChapterType>('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSectionNum, setActiveSectionNum] = useState(1);
  const [hasInteractedWithModel, setHasInteractedWithModel] = useState(false);

  // Modals & Overlays State
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartBadgeAnimated, setCartBadgeAnimated] = useState(false);

  // Customer account (demo: stored in this browser)
  const [user, setUser] = useState<PublicUser | null>(() => accountStore.getSessionUser());
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [accountTab, setAccountTab] = useState<AccountTab>('profile');

  const readGuestCart = (): CartItem[] => {
    try {
      const saved = localStorage.getItem(GUEST_CART_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  };

  // Cart State: kept with the account when logged in, otherwise in the guest cart
  const [cartItems, setCartItems] = useState<CartItem[]>(() => user?.cart ?? readGuestCart());

  useEffect(() => {
    if (user) {
      accountStore.update(user.email, (u) => {
        u.cart = cartItems;
      });
      return;
    }
    try {
      localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cartItems));
    } catch (e) {
      console.error('Failed to persist cart to localStorage', e);
    }
  }, [cartItems, user]);

  const openAccount = useCallback((tab: AccountTab = 'profile') => {
    setAccountTab(tab);
    setIsAccountOpen(true);
  }, []);

  // On login/signup, bring the guest bag into the account's bag
  const startSession = useCallback((u: PublicUser) => {
    const merged = [...u.cart];
    readGuestCart().forEach((g) => {
      const existing = merged.find((m) => m.product.id === g.product.id);
      if (existing) existing.quantity += g.quantity;
      else merged.push(g);
    });
    try {
      localStorage.removeItem(GUEST_CART_KEY);
    } catch {
      /* ignore */
    }
    setUser(u);
    setCartItems(merged);
  }, []);

  const handleLogIn = useCallback(async (email: string, password: string) => {
    startSession(await accountStore.logIn(email, password));
  }, [startSession]);

  const handleSignUp = useCallback(async (name: string, email: string, password: string) => {
    startSession(await accountStore.signUp(name, email, password));
  }, [startSession]);

  const handleLogOut = useCallback(() => {
    accountStore.logOut();
    setUser(null);
    setCartItems([]);
    setIsAccountOpen(false);
  }, []);

  const updateUser = useCallback((change: Parameters<typeof accountStore.update>[1]) => {
    if (!user) return;
    const updated = accountStore.update(user.email, change);
    if (updated) setUser(updated);
  }, [user]);

  const handleSaveAddress = useCallback((address: Address) => {
    updateUser((u) => {
      const saved = { ...address, id: address.id || `addr-${Date.now().toString(36)}` };
      const others = u.addresses.filter((a) => a.id !== saved.id);
      if (others.length === 0) saved.isDefault = true;
      u.addresses = [...others.map((a) => (saved.isDefault ? { ...a, isDefault: false } : a)), saved];
    });
  }, [updateUser]);

  const handleDeleteAddress = useCallback((id: string) => {
    updateUser((u) => {
      u.addresses = u.addresses.filter((a) => a.id !== id);
      if (u.addresses.length && !u.addresses.some((a) => a.isDefault)) u.addresses[0].isDefault = true;
    });
  }, [updateUser]);

  const handleSetDefaultAddress = useCallback((id: string) => {
    updateUser((u) => {
      u.addresses = u.addresses.map((a) => ({ ...a, isDefault: a.id === id }));
    });
  }, [updateUser]);

  const handleToggleWishlist = useCallback((productId: string) => {
    if (!user) {
      openAccount('wishlist');
      return;
    }
    updateUser((u) => {
      u.wishlist = u.wishlist.includes(productId)
        ? u.wishlist.filter((id) => id !== productId)
        : [...u.wishlist, productId];
    });
  }, [user, updateUser, openAccount]);

  const wishlistProducts = useMemo(
    () => (user?.wishlist ?? []).map((id) => PRODUCTS.find((p) => p.id === id)).filter((p): p is Product => !!p),
    [user]
  );

  const defaultAddress = user ? user.addresses.find((a) => a.isDefault) ?? user.addresses[0] ?? null : null;

  // Record the order in the customer's history when they send it on WhatsApp
  const handlePlaceOrder = useCallback((totals: { subtotal: number; shipping: number; total: number }) => {
    if (!user) return;
    const items = cartItems;
    updateUser((u) => {
      u.orders.push({
        id: `MS${Date.now().toString(36).toUpperCase().slice(-6)}`,
        placedAt: new Date().toISOString(),
        items: items.map((i) => ({
          productId: i.product.id,
          name: i.product.name,
          image: i.product.images[0],
          price: i.product.price,
          quantity: i.quantity,
        })),
        ...totals,
        address: defaultAddress ?? undefined,
        status: 'Sent on WhatsApp',
      });
    });
    // Let the WhatsApp link open before the bag empties
    setTimeout(() => setCartItems([]), 300);
  }, [user, cartItems, updateUser, defaultAddress]);

  // Loading Sequence Simulator
  useEffect(() => {
    const timer1 = setTimeout(() => setLoadProgress(45), 200);
    const timer2 = setTimeout(() => setLoadProgress(75), 450);
    const timer3 = setTimeout(() => setLoadProgress(100), 750);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  // Scroll Choreography Manager (Section 16, 48, 77)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;
      setScrollProgress(progress);

      // Section-based choreography calculation
      const ch1El = document.getElementById('chapter-anti-tarnish');
      const ch2El = document.getElementById('chapter-craft');
      const selectorEl = document.getElementById('product-selector');
      const collectionEl = document.getElementById('collection');

      const scrollMid = scrollY + window.innerHeight * 0.45;

      if (collectionEl && scrollMid >= collectionEl.offsetTop) {
        setCurrentChapter('collection');
        setActiveSectionNum(5);
      } else if (selectorEl && scrollMid >= selectorEl.offsetTop) {
        setCurrentChapter('selector');
        setActiveSectionNum(4);
      } else if (ch2El && scrollMid >= ch2El.offsetTop) {
        setCurrentChapter('detail');
        setActiveSectionNum(3);
      } else if (ch1El && scrollMid >= ch1El.offsetTop) {
        setCurrentChapter('antiTarnish');
        setActiveSectionNum(2);
      } else {
        setCurrentChapter('hero');
        setActiveSectionNum(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart Operations
  const handleAddToCart = useCallback((product: Product, quantity = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Trigger cart icon micro-animation (Section 78 & 79)
    setCartBadgeAnimated(true);
    setTimeout(() => setCartBadgeAnimated(false), 450);
  }, []);

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  }, []);

  const handleRemoveItem = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const totalCartCount = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  }, [cartItems]);

  // Smooth Navigation to Sections
  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToSectionNum = (num: number) => {
    const map = ['hero', 'chapter-anti-tarnish', 'chapter-craft', 'product-selector', 'collection'];
    const id = map[num - 1];
    if (id) navigateToSection(id);
  };

  // Model switching from interactive selector
  const handleSelectModel = useCallback((modelKey: ModelKey) => {
    setActiveModel(modelKey);
  }, []);

  return (
    <div className="relative min-h-screen bg-white text-[#111111] font-sans overflow-x-hidden">
      {/* 0. Custom Luxury Cursor (Desktop Only) */}
      <CustomCursor />

      {/* 1. Premium Loading Sequence (Section 06 & 76) */}
      {isLoading && (
        <Loader
          progress={loadProgress}
          onComplete={() => setIsLoading(false)}
        />
      )}

      {/* 2. Fixed 3D WebGL Canvas Layer (Hero through Chapters) */}
      <JewelleryCanvas
        activeModel={activeModel}
        chapter={currentChapter}
        scrollProgress={scrollProgress}
        onFirstInteract={() => setHasInteractedWithModel(true)}
      />

      {/* 3. Global Navigation System */}
      <Navigation
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onNavigate={navigateToSection}
        cartAnimated={cartBadgeAnimated}
        onOpenAccount={() => openAccount('profile')}
        userInitial={user ? user.name.charAt(0) : null}
      />

      {/* 4. Desktop Vertical Scroll Progress (Section 47) */}
      <ScrollProgress
        activeSection={activeSectionNum}
        onNavigateSection={navigateToSectionNum}
      />

      {/* 5. Mobile Navigation Fullscreen Overlay (Section 08) */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={navigateToSection}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAccount={() => openAccount('profile')}
        isLoggedIn={!!user}
      />

      {/* 6. Main Scroll Story Choreography */}
      <main className="relative z-20">
        {/* HERO SECTION */}
        <Hero
          onDiscover={() => navigateToSection('collection')}
          onExplore3D={() => navigateToSection('product-selector')}
          hasInteracted={hasInteractedWithModel}
        />

        {/* SCROLL CHAPTER 1: ANTI-TARNISH (Section 17 & 18) */}
        <StoryChapter chapterIndex={1} />

        {/* SCROLL CHAPTER 2: CRAFT & MACRO DETAIL (Section 19) */}
        <StoryChapter chapterIndex={2} />

        {/* SCROLL CHAPTER 3: PRODUCT SELECTOR (Section 20 & 22) */}
        <ProductSelector
          activeModel={activeModel}
          onSelectModel={handleSelectModel}
          onViewProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
        />

        {/* COMMERCE: THE FULL STOREFRONT COLLECTION (Section 27 & 28) */}
        <ProductGrid
          products={PRODUCTS}
          onViewProduct={(product) => setSelectedProduct(product)}
          onAddToCart={handleAddToCart}
          wishlist={user?.wishlist ?? []}
          onToggleWishlist={handleToggleWishlist}
        />

        {/* FEATURED EDITORIAL SLIDER (Section 37) */}
        <FeaturedSlider
          products={FEATURED_PRODUCTS}
          onViewProduct={(product) => setSelectedProduct(product)}
        />

        {/* BRAND & ANTI-TARNISH STORY (Section 38 & 39) */}
        <BrandStory />

        {/* RESTRAINED SUBTLE MARQUEE (Section 41) */}
        <Marquee />

        {/* NEWSLETTER (Section 42) */}
        <Newsletter />

        {/* BESPOKE CONTACT & ATELIER INFO (Section 43) */}
        <ContactSection
          onShopCollection={() => navigateToSection('collection')}
        />
      </main>

      {/* 7. FOOTER (Section 44) */}
      <Footer onNavigate={navigateToSection} />

      {/* 8. PRODUCT DETAIL MODAL (Section 31) */}
      <ProductDetail
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={(prod, qty) => {
          handleAddToCart(prod, qty);
          setSelectedProduct(null);
          setIsCartOpen(true);
        }}
        isWishlisted={!!selectedProduct && !!user?.wishlist.includes(selectedProduct.id)}
        onToggleWishlist={handleToggleWishlist}
      />

      {/* 9. CART DRAWER (Section 32, 33, 34, 54, 61) */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onExplore={() => navigateToSection('collection')}
        isLoggedIn={!!user}
        deliveryAddress={defaultAddress}
        onManageAddress={() => {
          setIsCartOpen(false);
          openAccount('addresses');
        }}
        onPlaceOrder={handlePlaceOrder}
      />

      {/* 9b. LOGIN / SIGNUP & MY ACCOUNT */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
        user={user}
        initialTab={accountTab}
        onLogIn={handleLogIn}
        onSignUp={handleSignUp}
        onLogOut={handleLogOut}
        onUpdateProfile={(name, phone) =>
          updateUser((u) => {
            u.name = name.trim() || u.name;
            u.phone = phone.trim();
          })
        }
        onSaveAddress={handleSaveAddress}
        onDeleteAddress={handleDeleteAddress}
        onSetDefaultAddress={handleSetDefaultAddress}
        wishlistProducts={wishlistProducts}
        onToggleWishlist={handleToggleWishlist}
        onViewProduct={(p) => {
          setIsAccountOpen(false);
          setSelectedProduct(p);
        }}
      />

      {/* 10. FULLSCREEN SEARCH (Section 35) */}
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(prod) => setSelectedProduct(prod)}
      />

      {/* 11. DEV MODEL SWITCHER (Section 82) */}
      {/* Only while developing locally; hidden on the published site */}
      {import.meta.env.DEV && (
        <DevModelSwitcher
          activeModel={activeModel}
          onSelectModel={handleSelectModel}
        />
      )}
    </div>
  );
};

export default App;
