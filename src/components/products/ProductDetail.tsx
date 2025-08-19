"use client";

import Image from "next/image";
import { useGetProductById } from "@/queries/productQueries";
import { CartType, useCartStore } from "@/store/cartStore";
import QuantityButton from "../custom/QuantityButton";
import Link from "next/link";

interface ProductDetailProps {
  productId: string;
}

export default function ProductDetail({ productId }: ProductDetailProps) {
  const { data: product, isLoading, isError } = useGetProductById(productId);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartOrder =
    cartItems.find((item: CartType) => item.id === product?.id)?.order || 0;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">상품 정보를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isError || !product) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <p className="text-gray-600 mb-4">상품을 찾을 수 없습니다.</p>
          <Link
            href="/products"
            className="text-blue-600 hover:text-blue-800 underline"
          >
            상품 목록으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 상품 이미지 */}
        <div className="space-y-4">
          <div className="relative w-full h-60 bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* 추가 이미지들 (향후 확장용) */}
          <div className="flex space-x-2">
            <div className="relative w-20 h-16 bg-gray-100 rounded-md overflow-hidden border-2 border-blue-500">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
            {/* 추가 이미지 슬롯들 */}
            {[1, 2, 3].map((index) => (
              <div
                key={index}
                className="relative w-20 h-16 bg-gray-100 rounded-md overflow-hidden border-2 border-transparent"
              >
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                  이미지 {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {product.name}
            </h1>
            <div className="flex items-center text-right gap-3 mb-2">
              {product.discountPrice ? (
                <div className="w-full flex justify-end items-center gap-2">
                  <span className="text-sm text-gray-500 line-through">
                    {product.price.toLocaleString()}원
                  </span>
                  <span className="text-xl font-bold text-zinc-800">
                    {product.discountPrice.toLocaleString()}원
                  </span>
                </div>
              ) : (
                <span className="text-3xl font-bold text-blue-600">
                  {product.price.toLocaleString()}원
                </span>
              )}
            </div>
          </div>

          {/* 상품 설명 */}
          <div>
            <p className="text-gray-700 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* 구매 옵션 */}
          <div className="space-y-2">
            {/* 수량 선택 */}
            <div className="flex items-center space-x-4">
              {cartOrder > 0 ? (
                <div className="flex gap-2 items-center justify-end">
                  <span className="text-sm text-gray-500">수량:</span>
                  <QuantityButton orderNumber={cartOrder} cartItem={product} />
                </div>
              ) : (
                <button
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                  className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors font-semibold disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  장바구니에 추가
                </button>
              )}
            </div>

            {/* 장바구니 버튼 */}
            <div className="pt-4">
              {cartOrder > 0 && (
                <div className="flex space-x-3">
                  <Link
                    href="/cart"
                    className="flex-1 bg-gray-800 text-white py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors font-semibold text-center"
                  >
                    장바구니 보기
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* 배송 정보 */}
          <div className="border-t pt-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              배송 정보
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• 무료배송 (5만원 이상 구매 시)</p>
              <p>• 배송비: 3,000원 (5만원 미만 구매 시)</p>
              <p>• 배송 예정일: 주문 후 1-2일 내 출고</p>
              <p>• 도착 예정일: 출고 후 1-2일 내 도착</p>
            </div>
          </div>

          {/* 반품/교환 정보 */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              반품/교환 안내
            </h3>
            <div className="space-y-1 text-sm text-gray-600">
              <p>• 반품/교환 기간: 상품 수령 후 7일 이내</p>
              <p>• 반품/교환 조건: 상품 미사용, 원상태 유지</p>
              <p>• 반품 배송비: 고객 부담 (단순 변심의 경우)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
