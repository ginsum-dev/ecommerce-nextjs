import { useCartStore } from "@/store/cartStore";
import { ProductType } from "@/features/product/productTypes";
import { useOrderStore } from "@/store/orderStore";

export default function QuantityButton({
  orderNumber,
  cartItem,
}: {
  orderNumber: number;
  cartItem: ProductType;
}) {
  const { addToCart, updateCartOrder, removeFromCart } = useCartStore();
  const { updateOrderItem, removeOrderItem } = useOrderStore();

  const handleClickMinus = () => {
    if (orderNumber === 0) {
      return;
    }
    if (orderNumber === 1) {
      removeFromCart(cartItem.id);
      removeOrderItem(cartItem.id);
      return;
    }
    updateCartOrder(cartItem.id, -1);
    updateOrderItem(cartItem.id, -1);
  };

  const handleClickPlus = () => {
    if (orderNumber === 0) {
      addToCart(cartItem);
    } else if (orderNumber < cartItem.stock) {
      updateCartOrder(cartItem.id, 1);
      updateOrderItem(cartItem.id, 1);
    } else {
      alert("재고 이상은 주문할 수 없습니다.");
    }
  };
  return (
    <div className="flex justify-center items-center bg-white p-1 rounded-full text-sm border border-gray-300">
      <button
        className="flex items-center justify-center w-4 h-4"
        onClick={handleClickMinus}
      >
        -
      </button>
      <span className="w-10 flex justify-center">{orderNumber}</span>
      <button
        className="flex items-center justify-center w-4 h-4"
        onClick={handleClickPlus}
      >
        +
      </button>
    </div>
  );
}
