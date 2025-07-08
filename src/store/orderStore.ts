import { create } from "zustand";
import { CartType } from "./cartStore";

interface OrderStore {
  orderItems: CartType[];
  setOrderItems: (items: CartType[]) => void;
  updateOrderItem: (id: number, updateOrder: number) => void;
  removeOrderItem: (id: number) => void;
}

export const useOrderStore = create<OrderStore>((set) => ({
  orderItems: [],
  setOrderItems: (items) => set({ orderItems: items }),
  updateOrderItem: (id, updateOrder) =>
    set((state) => ({
      orderItems: state.orderItems.map((item) =>
        item.id === id ? { ...item, order: item.order + updateOrder } : item
      ),
    })),
  removeOrderItem: (id) =>
    set((state) => ({
      orderItems: state.orderItems.filter((item) => item.id !== id),
    })),
}));
