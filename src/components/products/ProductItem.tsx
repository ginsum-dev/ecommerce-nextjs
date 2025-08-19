import Image from "next/image";
import Link from "next/link";
import { Product } from "@/queries/productQueries";
import { CartType, useCartStore } from "@/store/cartStore";

import cartIcon from "@/assets/icons/cart-icon.svg";
import QuantityButton from "../custom/QuantityButton";

export default function ProductItem({ product }: { product: Product }) {
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartOrder =
    cartItems.find((item: CartType) => item.id === product.id)?.order || 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <li className="flex flex-col w-full sm:w-[49%] border border-gray-300 rounded-md gap-3 hover:shadow-md transition-shadow">
      <Link href={`/products/${product.id}`} className="block">
        {/* 상품 이미지 */}
        <div className="relative w-full h-60 bg-gray-100 rounded-t-md overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
          <div className="absolute bottom-3 right-3 flex justify-between items-center">
            {cartOrder > 0 ? (
              <div onClick={(e) => e.preventDefault()}>
                <QuantityButton orderNumber={cartOrder} cartItem={product} />
              </div>
            ) : (
              <button
                className="flex items-center justify-center w-[82px] h-[30px] rounded-full border bg-white border-gray-200 cursor-pointer hover:bg-gray-50"
                onClick={handleAddToCart}
              >
                <Image src={cartIcon} alt="cart" width={18} height={18} />
              </button>
            )}
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="flex justify-between mt-3 px-4 pb-2">
          <h3 className="text-md font-bold text-zinc-800">{product.name}</h3>
          <div className="text-right">
            {product.discountPrice ? (
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 line-through">
                  {product.price.toLocaleString()}원
                </span>
                <div className="text-xl font-bold text-zinc-800">
                  {product.discountPrice.toLocaleString()}원
                </div>
              </div>
            ) : (
              <span className="text-xl font-bold">
                {product.price.toLocaleString()}원
              </span>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
}
