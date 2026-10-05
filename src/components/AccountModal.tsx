import React, { useEffect, useState } from 'react';
import { X, MapPin, Heart, User, LogOut, Plus, Trash2, Pencil, Check, Package } from 'lucide-react';
import type { Address, PublicUser } from '../lib/accountStore';
import type { Product } from '../data/products';

export type AccountTab = 'profile' | 'addresses' | 'wishlist' | 'orders';
type Tab = AccountTab;

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: PublicUser | null;
  initialTab?: Tab;
  onLogIn: (email: string, password: string) => Promise<void>;
  onSignUp: (name: string, email: string, password: string) => Promise<void>;
  onLogOut: () => void;
  onUpdateProfile: (name: string, phone: string) => void;
  onSaveAddress: (address: Address) => void;
  onDeleteAddress: (id: string) => void;
  onSetDefaultAddress: (id: string) => void;
  wishlistProducts: Product[];
  onToggleWishlist: (productId: string) => void;
  onViewProduct: (product: Product) => void;
}

// text-base on phones stops iOS Safari zooming in when a field is focused
const inputClass =
  'w-full h-11 px-4 rounded-lg border border-[#E8E4DC] bg-white text-base sm:text-sm text-[#111111] font-sans placeholder:text-[#A9A49B] focus:outline-none focus:border-[#9E7B34] focus:ring-2 focus:ring-[#9E7B34]/15 transition';
const labelClass = 'block text-[11px] uppercase tracking-[0.14em] text-[#716D66] font-semibold mb-1.5';

const emptyAddress = (): Address => ({
  id: '',
  label: 'Home',
  fullName: '',
  phone: '',
  line1: '',
  line2: '',
  city: '',
  state: 'Tamil Nadu',
  pincode: '',
  isDefault: false,
});

const formatPrice = (val: number) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(val);

export const AccountModal: React.FC<AccountModalProps> = ({
  isOpen,
  onClose,
  user,
  initialTab = 'profile',
  onLogIn,
  onSignUp,
  onLogOut,
  onUpdateProfile,
  onSaveAddress,
  onDeleteAddress,
  onSetDefaultAddress,
  wishlistProducts,
  onToggleWishlist,
  onViewProduct,
}) => {
  // Auth form state
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [busy, setBusy] = useState(false);

  // Account state
  const [tab, setTab] = useState<Tab>(initialTab);
  const [profileName, setProfileName] = useState('');
  const [profilePhone, setProfilePhone] = useState('');
  const [profileSaved, setProfileSaved] = useState(false);
  const [editing, setEditing] = useState<Address | null>(null);
  const [addrError, setAddrError] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTab(initialTab);
      setError('');
      setEditing(null);
    }
  }, [isOpen, initialTab]);

  useEffect(() => {
    setProfileName(user?.name ?? '');
    setProfilePhone(user?.phone ?? '');
  }, [user]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const submitAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (!/^\S+@\S+\.\S+$/.test(email)) return setError('Please enter a valid email address.');
    if (password.length < 6) return setError('Password must be at least 6 characters.');
    if (mode === 'signup' && name.trim().length < 2) return setError('Please enter your name.');
    setBusy(true);
    try {
      if (mode === 'signup') await onSignUp(name, email, password);
      else await onLogIn(email, password);
      setPassword('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setBusy(false);
    }
  };

  const saveAddress = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editing) return;
    const a = editing;
    if (!a.fullName.trim() || !a.line1.trim() || !a.city.trim() || !a.state.trim())
      return setAddrError('Please fill in name, address, city and state.');
    if (!/^\d{10}$/.test(a.phone.replace(/\D/g, '').slice(-10))) return setAddrError('Please enter a valid 10-digit phone number.');
    if (!/^\d{6}$/.test(a.pincode)) return setAddrError('Please enter a valid 6-digit pincode.');
    onSaveAddress(a);
    setEditing(null);
    setAddrError('');
  };

  const field = (key: keyof Address, label: string, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <div>
      <label className={labelClass}>{label}</label>
      <input
        className={inputClass}
        value={(editing?.[key] as string) ?? ''}
        onChange={(e) => editing && setEditing({ ...editing, [key]: e.target.value })}
        {...props}
      />
    </div>
  );

  return (
    <div className="fixed inset-0 z-[260] flex items-end sm:items-center justify-center sm:p-4" role="dialog" aria-modal="true" aria-label="Account">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      {/* Bottom sheet on phones, centred card on larger screens */}
      <div className="relative w-full sm:max-w-lg max-h-[92dvh] sm:max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl border border-[#B68D40]/30 flex flex-col overflow-hidden pb-[env(safe-area-inset-bottom)]">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#E8E4DC] flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl text-[#111111] tracking-wide font-normal">
              {user ? 'MY ACCOUNT' : mode === 'login' ? 'WELCOME BACK' : 'CREATE ACCOUNT'}
            </h3>
            {user && <p className="text-xs text-[#716D66] font-sans mt-0.5">Hello, {user.name.split(' ')[0]}</p>}
          </div>
          <button onClick={onClose} className="p-2 text-[#3D3B38] hover:text-[#9E7B34] transition-colors" aria-label="Close account">
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {!user ? (
          /* ---------------- LOGIN / SIGNUP ---------------- */
          <form onSubmit={submitAuth} className="p-6 space-y-4 overflow-y-auto">
            <div className="grid grid-cols-2 p-1 rounded-full bg-[#FAF9F6] border border-[#E8E4DC] mb-2">
              {(['login', 'signup'] as const).map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => {
                    setMode(m);
                    setError('');
                  }}
                  className={`h-9 rounded-full text-xs uppercase tracking-[0.14em] font-semibold transition ${
                    mode === m ? 'bg-[#111111] text-white shadow' : 'text-[#716D66] hover:text-[#111111]'
                  }`}
                >
                  {m === 'login' ? 'Log in' : 'Sign up'}
                </button>
              ))}
            </div>

            {mode === 'signup' && (
              <div>
                <label className={labelClass}>Full name</label>
                <input className={inputClass} value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" placeholder="Your name" />
              </div>
            )}
            <div>
              <label className={labelClass}>Email</label>
              <input className={inputClass} type="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" placeholder="you@example.com" />
            </div>
            <div>
              <label className={labelClass}>Password</label>
              <input
                className={inputClass}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete={mode === 'signup' ? 'new-password' : 'current-password'}
                placeholder="At least 6 characters"
              />
            </div>

            {error && <p className="text-xs text-red-600 font-sans" role="alert">{error}</p>}

            <button type="submit" disabled={busy} className="btn-primary w-full h-12 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-bold disabled:opacity-60">
              {busy ? 'Please wait…' : mode === 'login' ? 'Log in' : 'Create account'}
            </button>

            <p className="text-[11px] text-center text-[#716D66] font-sans">
              Save your addresses, wishlist and bag for faster checkout.
            </p>
            <p className="text-[10px] text-center text-[#A9A49B] font-sans">
              Demo accounts are stored only in this browser.
            </p>
          </form>
        ) : (
          /* ---------------- ACCOUNT ---------------- */
          <>
            <div className="px-4 sm:px-6 pt-4 flex space-x-1 border-b border-[#E8E4DC] overflow-x-auto">
              {([
                ['profile', 'Profile', User],
                ['addresses', 'Addresses', MapPin],
                ['wishlist', `Wishlist (${wishlistProducts.length})`, Heart],
                ['orders', `Orders (${user.orders.length})`, Package],
              ] as const).map(([id, label, Icon]) => (
                <button
                  key={id}
                  onClick={() => {
                    setTab(id);
                    setEditing(null);
                  }}
                  className={`flex items-center space-x-1.5 px-2.5 pb-3 whitespace-nowrap text-xs uppercase tracking-[0.12em] font-semibold border-b-2 -mb-px transition ${
                    tab === id ? 'border-[#9E7B34] text-[#111111]' : 'border-transparent text-[#716D66] hover:text-[#111111]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              {tab === 'profile' && (
                <form
                  className="space-y-4"
                  onSubmit={(e) => {
                    e.preventDefault();
                    onUpdateProfile(profileName, profilePhone);
                    setProfileSaved(true);
                    setTimeout(() => setProfileSaved(false), 1500);
                  }}
                >
                  <div>
                    <label className={labelClass}>Full name</label>
                    <input className={inputClass} value={profileName} onChange={(e) => setProfileName(e.target.value)} />
                  </div>
                  <div>
                    <label className={labelClass}>Email</label>
                    <input className={`${inputClass} bg-[#FAF9F6] text-[#716D66]`} value={user.email} readOnly />
                  </div>
                  <div>
                    <label className={labelClass}>Phone</label>
                    <input className={inputClass} value={profilePhone} onChange={(e) => setProfilePhone(e.target.value)} placeholder="10-digit mobile number" inputMode="tel" />
                  </div>
                  <button type="submit" className="btn-primary w-full h-11 rounded-full text-xs uppercase tracking-[0.16em] font-sans font-bold flex items-center justify-center space-x-2">
                    {profileSaved ? <><Check className="w-4 h-4" /><span>Saved</span></> : <span>Save profile</span>}
                  </button>
                  <button
                    type="button"
                    onClick={onLogOut}
                    className="w-full h-11 rounded-full border border-[#E8E4DC] text-xs uppercase tracking-[0.16em] font-semibold text-[#3D3B38] hover:border-[#111111] transition flex items-center justify-center space-x-2"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log out</span>
                  </button>
                </form>
              )}

              {tab === 'addresses' && !editing && (
                <div className="space-y-3">
                  {user.addresses.length === 0 && (
                    <p className="text-sm text-[#716D66] font-sans text-center py-6">No saved addresses yet.</p>
                  )}
                  {user.addresses.map((a) => (
                    <div key={a.id} className={`p-4 rounded-xl border ${a.isDefault ? 'border-[#9E7B34] bg-[#9E7B34]/5' : 'border-[#E8E4DC]'}`}>
                      <div className="flex items-start justify-between">
                        <div className="text-sm font-sans text-[#3D3B38] leading-relaxed">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="text-[10px] uppercase tracking-widest font-bold text-[#8A6D3B]">{a.label}</span>
                            {a.isDefault && <span className="text-[9px] uppercase tracking-widest font-bold bg-[#9E7B34] text-white px-2 py-0.5 rounded-full">Default</span>}
                          </div>
                          <div className="font-semibold text-[#111111]">{a.fullName} · {a.phone}</div>
                          <div>{a.line1}{a.line2 ? `, ${a.line2}` : ''}</div>
                          <div>{a.city}, {a.state} – {a.pincode}</div>
                        </div>
                        <div className="flex space-x-1">
                          <button onClick={() => setEditing({ ...a })} className="p-1.5 text-[#716D66] hover:text-[#9E7B34]" aria-label="Edit address">
                            <Pencil className="w-3.5 h-3.5" />
                          </button>
                          <button onClick={() => onDeleteAddress(a.id)} className="p-1.5 text-[#716D66] hover:text-red-500" aria-label="Delete address">
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      {!a.isDefault && (
                        <button onClick={() => onSetDefaultAddress(a.id)} className="mt-2 text-[11px] uppercase tracking-widest font-semibold text-[#8A6D3B] hover:underline">
                          Set as default
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={() => {
                      setEditing({ ...emptyAddress(), fullName: user.name, phone: user.phone ?? '' });
                      setAddrError('');
                    }}
                    className="w-full h-11 rounded-full border border-dashed border-[#9E7B34] text-[#8A6D3B] text-xs uppercase tracking-[0.16em] font-semibold hover:bg-[#9E7B34]/5 transition flex items-center justify-center space-x-2"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add new address</span>
                  </button>
                </div>
              )}

              {tab === 'addresses' && editing && (
                <form onSubmit={saveAddress} className="space-y-3">
                  <div>
                    <label className={labelClass}>Label</label>
                    <div className="flex space-x-2">
                      {['Home', 'Work', 'Other'].map((l) => (
                        <button
                          key={l}
                          type="button"
                          onClick={() => setEditing({ ...editing, label: l })}
                          className={`px-4 h-9 rounded-full text-xs font-semibold border transition ${
                            editing.label === l ? 'bg-[#111111] text-white border-[#111111]' : 'border-[#E8E4DC] text-[#3D3B38]'
                          }`}
                        >
                          {l}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {field('fullName', 'Full name', { autoComplete: 'name' })}
                    {field('phone', 'Phone', { inputMode: 'tel', autoComplete: 'tel' })}
                  </div>
                  {field('line1', 'House no., street', { autoComplete: 'address-line1' })}
                  {field('line2', 'Area / landmark (optional)', { autoComplete: 'address-line2' })}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {field('city', 'City', { autoComplete: 'address-level2' })}
                    {field('state', 'State', { autoComplete: 'address-level1' })}
                    {field('pincode', 'Pincode', { inputMode: 'numeric', maxLength: 6, autoComplete: 'postal-code' })}
                  </div>
                  <label className="flex items-center space-x-2 text-sm text-[#3D3B38] font-sans">
                    <input
                      type="checkbox"
                      checked={editing.isDefault}
                      onChange={(e) => setEditing({ ...editing, isDefault: e.target.checked })}
                      className="accent-[#9E7B34]"
                    />
                    <span>Make this my default address</span>
                  </label>
                  {addrError && <p className="text-xs text-red-600 font-sans" role="alert">{addrError}</p>}
                  <div className="flex space-x-3 pt-1">
                    <button type="button" onClick={() => setEditing(null)} className="flex-1 h-11 rounded-full border border-[#E8E4DC] text-xs uppercase tracking-[0.16em] font-semibold text-[#3D3B38]">
                      Cancel
                    </button>
                    <button type="submit" className="btn-primary flex-1 h-11 rounded-full text-xs uppercase tracking-[0.16em] font-bold">
                      Save address
                    </button>
                  </div>
                </form>
              )}

              {tab === 'wishlist' && (
                <div className="space-y-3">
                  {wishlistProducts.length === 0 && (
                    <p className="text-sm text-[#716D66] font-sans text-center py-6">
                      Tap the ♡ on any piece to save it here.
                    </p>
                  )}
                  {wishlistProducts.map((p) => (
                    <div key={p.id} className="flex items-center space-x-3 p-2 rounded-xl border border-[#E8E4DC]">
                      <button onClick={() => onViewProduct(p)} className="w-16 h-16 rounded-lg overflow-hidden bg-[#FAF9F6] flex-shrink-0">
                        <img src={p.images[0]} alt={p.name} className="w-full h-full object-cover" />
                      </button>
                      <button onClick={() => onViewProduct(p)} className="flex-1 min-w-0 text-left">
                        <div className="font-serif text-base text-[#111111] truncate">{p.name}</div>
                        <div className="text-xs font-sans font-bold text-[#8A6D3B]">{formatPrice(p.price)}</div>
                      </button>
                      <button onClick={() => onToggleWishlist(p.id)} className="p-2 text-[#9E7B34] hover:text-red-500" aria-label={`Remove ${p.name} from wishlist`}>
                        <Heart className="w-4 h-4 fill-current" />
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {tab === 'orders' && (
                <div className="space-y-3">
                  {user.orders.length === 0 && (
                    <p className="text-sm text-[#716D66] font-sans text-center py-6">
                      Orders you send from your bag will appear here.
                    </p>
                  )}
                  {[...user.orders].reverse().map((o) => (
                    <div key={o.id} className="p-4 rounded-xl border border-[#E8E4DC]">
                      <div className="flex items-center justify-between mb-2">
                        <div>
                          <div className="text-xs font-sans font-bold text-[#111111]">#{o.id}</div>
                          <div className="text-[11px] font-sans text-[#716D66]">
                            {new Date(o.placedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                          </div>
                        </div>
                        <span className="text-[9px] uppercase tracking-widest font-bold bg-[#9E7B34]/10 text-[#8A6D3B] px-2 py-1 rounded-full">
                          {o.status}
                        </span>
                      </div>
                      <div className="space-y-1.5 mb-2">
                        {o.items.map((it) => (
                          <div key={it.productId} className="flex items-center space-x-2 text-sm font-sans text-[#3D3B38]">
                            <img src={it.image} alt="" className="w-8 h-8 rounded object-cover bg-[#FAF9F6]" />
                            <span className="flex-1 truncate">{it.quantity} × {it.name}</span>
                            <span className="text-xs">{formatPrice(it.price * it.quantity)}</span>
                          </div>
                        ))}
                      </div>
                      {o.address && (
                        <p className="text-[11px] font-sans text-[#716D66] mb-1">
                          Deliver to: {o.address.fullName}, {o.address.city} – {o.address.pincode}
                        </p>
                      )}
                      <div className="flex justify-between pt-2 border-t border-[#E8E4DC] text-sm font-sans">
                        <span className="text-[#716D66]">Total</span>
                        <span className="font-bold text-[#111111]">{formatPrice(o.total)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
