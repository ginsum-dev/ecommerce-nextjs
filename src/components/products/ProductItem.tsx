import { ProductType } from "@/types/productTypes";
import { CartType, useCartStore } from "@/store/cartStore";

import Image from "next/image";
import cartIcon from "@/assets/icons/cart-icon.svg";
import QuantityButton from "../custom/QuantityButton";

export default function ProductItem({ product }: { product: ProductType }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartOrder =
    cartItems.find((item: CartType) => item.id === product.id)?.order || 0;

  return (
    <li className="flex flex-col w-full sm:w-[49%] p-4 border border-gray-300 rounded-md gap-2">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <span className="text-xl font-bold">{`${product.price.toLocaleString()}원`}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-600">
          {`재고: ${product.stock.toLocaleString()}`}
        </span>
        {cartOrder > 0 ? (
          <QuantityButton orderNumber={cartOrder} cartItem={product} />
        ) : (
          <button
            className="flex items-center justify-center w-[82px] h-[30px] rounded-full border border-gray-200 cursor-pointer hover:bg-gray-50"
            onClick={() => addToCart(product)}
          >
            <Image src={cartIcon} alt="cart" width={18} height={18} />
          </button>
        )}
      </div>
    </li>
  );
}
