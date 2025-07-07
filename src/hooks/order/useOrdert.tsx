import { useState } from "react";
import { useRouter } from "next/navigation";
import { CartType, useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";

export default function useOrder() {
  const router = useRouter();
  const resetCartItems = useCartStore((state) => state.resetCartItems);
  const orderItems = useOrderStore((state) => state.orderItems);
  const setOrderItems = useOrderStore((state) => state.setOrderItems);
  const [point, setPoint] = useState(0);

  const totalPrice = orderItems.reduce(
    (acc: number, item: CartType) => acc + item.price * item.order,
    0
  );
  const totalDeliveryFee = totalPrice > 20000 || totalPrice === 0 ? 0 : 3000;
  const totalPayment = totalPrice + totalDeliveryFee - point;

  const handleClickPayment = () => {
    if (totalPayment > 0) {
      alert(`${totalPayment.toLocaleString()}원 결제가 완료되었습니다.`);
      setOrderItems([]);
      resetCartItems();
      router.push("/");
    }
  };

  return {
    point,
    setPoint,
    totalPrice,
    totalDeliveryFee,
    totalPayment,
    handleClickPayment,
  };
}
