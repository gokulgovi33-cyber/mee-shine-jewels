// DEMO account store — everything lives in this browser's localStorage.
// Not secure and not shared between devices; swap for a real backend (e.g. Supabase) before launch.
import type { CartItem } from '../components/CartDrawer';

export interface Address {
  id: string;
  label: string; // Home, Work…
  fullName: string;
  phone: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  pincode: string;
  isDefault: boolean;
}

export interface Order {
  id: string;
  placedAt: string;
  items: { productId: string; name: string; image: string; price: number; quantity: number }[];
  subtotal: number;
  shipping: number;
  total: number;
  address?: Address;
  status: string;
}

export interface UserAccount {
  name: string;
  email: string;
  phone?: string;
  passwordHash: string;
  addresses: Address[];
  wishlist: string[]; // product ids
  cart: CartItem[];
  orders: Order[];
  createdAt: string;
}

export type PublicUser = Omit<UserAccount, 'passwordHash'>;

const USERS_KEY = 'mee_shine_users';
const SESSION_KEY = 'mee_shine_session';

const readUsers = (): Record<string, UserAccount> => {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY) || '{}');
  } catch {
    return {};
  }
};

const writeUsers = (users: Record<string, UserAccount>) => {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch (e) {
    console.error('Failed to save accounts', e);
  }
};

const normaliseEmail = (email: string) => email.trim().toLowerCase();

// crypto.subtle only exists on secure origins (localhost/https); fall back for LAN previews
async function hashPassword(email: string, password: string): Promise<string> {
  const input = `mee-shine:${normaliseEmail(email)}:${password}`;
  if (globalThis.crypto?.subtle) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input));
    return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('');
  }
  let h = 5381;
  for (let i = 0; i < input.length; i++) h = ((h << 5) + h + input.charCodeAt(i)) | 0;
  return `djb2-${(h >>> 0).toString(16)}`;
}

// Older demo records may predate some fields
const toPublic = ({ passwordHash: _omit, ...rest }: UserAccount): PublicUser => ({
  ...rest,
  addresses: rest.addresses ?? [],
  wishlist: rest.wishlist ?? [],
  cart: rest.cart ?? [],
  orders: rest.orders ?? [],
});

export const accountStore = {
  getSessionUser(): PublicUser | null {
    try {
      const email = localStorage.getItem(SESSION_KEY);
      if (!email) return null;
      const user = readUsers()[email];
      return user ? toPublic(user) : null;
    } catch {
      return null;
    }
  },

  async signUp(name: string, email: string, password: string): Promise<PublicUser> {
    const key = normaliseEmail(email);
    const users = readUsers();
    if (users[key]) throw new Error('An account with this email already exists. Please log in.');
    const user: UserAccount = {
      name: name.trim(),
      email: key,
      passwordHash: await hashPassword(key, password),
      addresses: [],
      wishlist: [],
      cart: [],
      orders: [],
      createdAt: new Date().toISOString(),
    };
    users[key] = user;
    writeUsers(users);
    localStorage.setItem(SESSION_KEY, key);
    return toPublic(user);
  },

  async logIn(email: string, password: string): Promise<PublicUser> {
    const key = normaliseEmail(email);
    const user = readUsers()[key];
    if (!user || user.passwordHash !== (await hashPassword(key, password))) {
      throw new Error('Incorrect email or password.');
    }
    localStorage.setItem(SESSION_KEY, key);
    return toPublic(user);
  },

  logOut() {
    try {
      localStorage.removeItem(SESSION_KEY);
    } catch {
      /* ignore */
    }
  },

  // Apply a change to the logged-in user's record and return the updated public view
  update(email: string, change: (u: UserAccount) => void): PublicUser | null {
    const users = readUsers();
    const user = users[email];
    if (!user) return null;
    user.orders ??= [];
    change(user);
    writeUsers(users);
    return toPublic(user);
  },
};
