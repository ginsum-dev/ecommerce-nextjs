import Image from "next/image";
import QuantityButton from "@/components/custom/QuantityButton";
import { useCartStore } from "@/store/cartStore";
import { useOrderStore } from "@/store/orderStore";
import { CartType } from "@/types/cartTypes";
import deleteIcon from "@/assets/icons/delete-icon.svg";

export default function CartItem({
  cartItem,
  checkedItems,
  handleClickCheckbox,
}: {
  cartItem: CartType;
  checkedItems: CartType[];
  handleClickCheckbox: (item: CartType) => void;
}) {
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const removeOrderItem = useOrderStore((state) => state.removeOrderItem);
  const { id, name, price, order } = cartItem;

  const handleRemoveOrderItem = (id: number) => {
    removeOrderItem(id);
    removeFromCart(id);
  };

  return (
    <li className="flex flex-col w-full justify-between items-center py-3 px-2 border-b border-gray-300 gap-2">
      <div className="flex justify-between w-full gap-4 items-center">
        <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            className="w-4 h-4 accent-orange-300"
            checked={!!checkedItems.find((item) => item.id === id)}
            onChange={() => handleClickCheckbox(cartItem)}
          />
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
        </div>
        <p className="text-xl font-bold">{`${price.toLocaleString()}원`}</p>
      </div>
      <div className="w-full flex gap-2 items-center justify-end">
        <QuantityButton orderNumber={order} cartItem={cartItem} />
        <button onClick={() => handleRemoveOrderItem(id)}>
          <Image src={deleteIcon} alt="delete" width={18} height={18} />
        </button>
      </div>
    </li>
  );
}
