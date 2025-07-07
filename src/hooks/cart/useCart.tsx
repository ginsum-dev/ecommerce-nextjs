import { useEffect, useState } from "react";
import { CartType, useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";

export default function useCart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const orderItems = useOrderStore((state) => state.orderItems);
  const setOrderItems = useOrderStore((state) => state.setOrderItems);
  const [isAllChecked, setIsAllChecked] = useState(false);

  useEffect(() => {
    if (cartItems.length > 0 && orderItems.length === 0) {
      setOrderItems(cartItems);
      setIsAllChecked(true);
    } else if (cartItems.length === orderItems.length) {
      setIsAllChecked(true);
    }
  }, []);

  const onClickCheckAll = () => {
    if (isAllChecked) {
      setOrderItems([]);
    } else {
      setOrderItems(cartItems);
    }
    setIsAllChecked(!isAllChecked);
  };

  const handleCheckAll = (items: CartType[]) => {
    if (items.length === cartItems.length) {
      setIsAllChecked(true);
    } else {
      setIsAllChecked(false);
    }
  };

  const onClickCheckbox = (item: CartType) => {
    const isChecked = orderItems.find((orderItem) => orderItem.id === item.id);
    let newOrderItems: CartType[];
    if (isChecked) {
      newOrderItems = orderItems.filter(
        (orderItem) => orderItem.id !== item.id
      );
    } else {
      newOrderItems = [...orderItems, item];
    }
    setOrderItems(newOrderItems);
    handleCheckAll(newOrderItems);
  };

  return {
    cartItems,
    orderItems,
    isAllChecked,
    onClickCheckAll,
    onClickCheckbox,
  };
}
