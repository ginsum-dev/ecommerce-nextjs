"use client";

import { useState, useEffect, useRef } from "react";
import { useGetProducts } from "@/queries/productQueries";
import Image from "next/image";
import { CartType, useCartStore } from "@/store/cartStore";
import cartIcon from "@/assets/icons/cart-icon.svg";
import QuantityButton from "../custom/QuantityButton";

export default function ProductSlider() {
  const { data, isLoading, isError } = useGetProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const cartItems = useCartStore((state) => state.cartItems);
  const addToCart = useCartStore((state) => state.addToCart);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const products = data?.slice(0, 6);

  // 자동 슬라이드 (5초마다)
  useEffect(() => {
    if (!products || products.length === 0 || !isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [products, isAutoPlaying]);

  const nextSlide = () => {
    if (!products) return;
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
    // 3초 후 자동 재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const prevSlide = () => {
    if (!products) return;
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
    // 3초 후 자동 재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    // 3초 후 자동 재생 재개
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // 터치 이벤트 처리
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  if (isLoading) {
    return (
      <div className="w-full h-80 sm:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">상품을 불러오는 중...</p>
      </div>
    );
  }

  if (isError || !products || products.length === 0) {
    return (
      <div className="w-full h-80 sm:h-96 bg-gray-100 rounded-lg flex items-center justify-center">
        <p className="text-gray-600">상품을 불러올 수 없습니다.</p>
      </div>
    );
  }

  const currentProduct = products[currentIndex];
  const cartOrder =
    cartItems.find((item: CartType) => item.id === currentProduct.id)?.order ||
    0;

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-80 sm:h-96 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src={currentProduct.image}
          alt={currentProduct.name}
          fill
          className="object-cover opacity-20"
          sizes="100vw"
        />
      </div>

      {/* 상품 정보 */}
      <div className="absolute inset-0 flex items-center justify-center p-8">
        <div className="text-center max-w-lg">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {currentProduct.name}
          </h2>
          <p className="text-4xl sm:text-5xl font-bold text-blue-600 mb-6">
            {currentProduct.price.toLocaleString()}원
          </p>
          <p className="text-base sm:text-lg text-gray-600 mb-6">
            재고: {currentProduct.stock.toLocaleString()}개
          </p>

          {/* 장바구니 버튼 */}
          <div className="flex justify-center">
            {cartOrder > 0 ? (
              <QuantityButton
                orderNumber={cartOrder}
                cartItem={currentProduct}
              />
            ) : (
              <button
                className="flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-lg font-semibold shadow-lg"
                onClick={() => addToCart(currentProduct)}
              >
                <Image src={cartIcon} alt="cart" width={24} height={24} />
                <span>장바구니에 추가</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          className="w-7 h-7 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          className="w-7 h-7 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 인디케이터 */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all ${
              index === currentIndex
                ? "bg-blue-600"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* 상품 번호 표시 */}
      <div className="absolute top-6 right-6 bg-black/20 text-white px-4 py-2 rounded-full text-base font-semibold">
        {currentIndex + 1} / {products.length}
      </div>

      {/* 자동 재생 상태 표시 */}
      <div className="absolute top-6 left-6">
        <div
          className={`w-4 h-4 rounded-full ${
            isAutoPlaying ? "bg-green-500" : "bg-yellow-500"
          }`}
        />
      </div>
    </div>
  );
}
