"use client";

import { useState, useEffect, useRef } from "react";
import { useGetMainProducts } from "@/queries/productQueries";
import Image from "next/image";

export default function ProductSlider() {
  const { data: products, isLoading, isError } = useGetMainProducts();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

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

  return (
    <div
      className="relative w-full max-w-6xl mx-auto h-80 sm:h-96 bg-gradient-to-r from-blue-50 to-indigo-50 overflow-hidden cursor-grab active:cursor-grabbing"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 배경 이미지 */}
      <div className="absolute inset-0">
        <Image
          src={currentProduct.image}
          alt={currentProduct.title}
          fill
          className="object-cover opacity-96"
          sizes="100vw"
          priority={true}
        />
      </div>

      {/* 상품 정보 */}
      <div className="absolute inset-0 flex py-10 px-8">
        <div className="max-w-lg">
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-900">
            {currentProduct.title}
          </h2>
          <p className="text-base sm:text-lg text-zinc-900">
            {currentProduct.description}
          </p>
        </div>
      </div>

      {/* 네비게이션 버튼 */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-7 h-7 bg-white/70 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all"
      >
        <svg
          className="w-5 h-5 text-gray-600"
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
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex
                ? "bg-orange-400"
                : "bg-white/60 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {/* 상품 번호 표시 */}
      <div className="absolute top-3 right-3 bg-black/20 text-white px-4 py-1 rounded-full text-xs font-medium">
        {currentIndex + 1} / {products.length}
      </div>
    </div>
  );
}
