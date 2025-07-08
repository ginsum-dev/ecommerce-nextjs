import { create } from "zustand";
import { ProductType } from "@/types/productTypes";

export interface CartType extends ProductType {
  order: number;
}

interface CartStore {
  cartItems: CartType[];
  addToCart: (product: ProductType) => void;
  updateCartOrder: (id: number, order: number) => void;
  removeFromCart: (id: number) => void;
  resetCartItems: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  cartItems: [],
  addToCart: (product: ProductType) =>
    set((state) => ({
      cartItems: [...state.cartItems, { ...product, order: 1 }],
    })),
  updateCartOrder: (id: number, updateOrder: number) =>
    set((state) => ({
      cartItems: state.cartItems.map((item) =>
        item.id === id ? { ...item, order: item.order + updateOrder } : item
      ),
    })),
  removeFromCart: (id: number) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== id),
    })),
  resetCartItems: () => set({ cartItems: [] }),
}));
