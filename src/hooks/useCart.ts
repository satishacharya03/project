import create from 'zustand';
import { Package } from '../types';
import toast from 'react-hot-toast';

interface CartItem extends Package {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (pkg: Package) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}

export const useCart = create<CartStore>((set, get) => ({
  items: [],
  addToCart: (pkg: Package) => {
    const items = get().items;
    const existingItem = items.find(item => item.id === pkg.id);

    if (existingItem) {
      set({
        items: items.map(item =>
          item.id === pkg.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      });
    } else {
      set({ items: [...items, { ...pkg, quantity: 1 }] });
    }
    toast.success('Added to cart');
  },
  removeFromCart: (id: string) => {
    set({ items: get().items.filter(item => item.id !== id) });
    toast.success('Removed from cart');
  },
  updateQuantity: (id: string, quantity: number) => {
    if (quantity < 1) return;
    set({
      items: get().items.map(item =>
        item.id === id ? { ...item, quantity } : item
      ),
    });
  },
  clearCart: () => set({ items: [] }),
  get total() {
    return get().items.reduce((total, item) => {
      const price = item.onSale ? (item.salePrice || item.price) : item.price;
      return total + (price * item.quantity);
    }, 0);
  },
}));