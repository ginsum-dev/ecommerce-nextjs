"use client";

import { useOrderStore } from "@/store/orderStore";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const orderItems = useOrderStore((state) => state.orderItems);

  return (
    <div className="p-6 flex flex-col">
      <h3 className="text-lg font-bold pb-4">주문 상품</h3>
      <ul className="flex flex-col border border-gray-300 rounded-xl">
        {orderItems.map((cartItem) => (
          <OrderItem key={cartItem.id} orderItem={cartItem} />
        ))}
      </ul>
    </div>
  );
}
