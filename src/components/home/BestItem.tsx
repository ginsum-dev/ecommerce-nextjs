"use client";

import { useGetBestProducts } from "@/queries/productQueries";
import Image from "next/image";

export default function BestItem() {
  const { data } = useGetBestProducts();
  const products = data?.slice(0, 6) || [];

  return (
    <div className="flex flex-col gap-4 py-8">
      <h2 className="text-2xl font-bold text-gray-900">Best Items</h2>
      <div className="w-full overflow-x-auto">
        <ul className="flex gap-2 pb-4 min-w-max">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col w-36 h-48 bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow"
            >
              {/* 상품 이미지 */}
              <div className="relative w-full h-32 bg-gray-100 rounded-t-sm overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="192px"
                />
              </div>

              {/* 상품 정보 */}
              <div className="flex flex-col justify-between flex-1 p-3">
                <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price.toLocaleString()}원
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
