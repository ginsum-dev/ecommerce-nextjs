import Image from "next/image";
import { Product } from "@/queries/productQueries";
import { CartType, useCartStore } from "@/store/cartStore";

import cartIcon from "@/assets/icons/cart-icon.svg";
import QuantityButton from "../custom/QuantityButton";

export default function ProductItem({ product }: { product: Product }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartOrder =
    cartItems.find((item: CartType) => item.id === product.id)?.order || 0;

  return (
    <li className="relative flex flex-col w-full sm:w-[49%] border border-gray-300 rounded-md gap-2">
      {/* 상품 이미지 */}
      <div className="relative w-full h-48 bg-gray-100 rounded-t-md overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
        />
        <div className="absolute bottom-2 right-2 flex justify-between items-center">
          {cartOrder > 0 ? (
            <QuantityButton orderNumber={cartOrder} cartItem={product} />
          ) : (
            <button
              className="flex items-center justify-center w-[82px] h-[30px] rounded-full border border-gray-200 cursor-pointer bg-white hover:bg-gray-50"
              onClick={() => addToCart(product)}
            >
              <Image src={cartIcon} alt="cart" width={18} height={18} />
            </button>
          )}
        </div>
      </div>

      {/* 상품 정보 */}
      <div className="flex justify-between items-center p-4">
        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
        <span className="text-xl font-bold">{`${product.price.toLocaleString()}원`}</span>
      </div>
    </li>
  );
}
