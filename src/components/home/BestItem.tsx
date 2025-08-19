"use client";

import { useGetBestProducts } from "@/queries/productQueries";
import Image from "next/image";

export default function BestItem() {
  const { data } = useGetBestProducts();
  const products = data?.slice(0, 6) || [];

  return (
    <div className="flex flex-col gap-2 py-8">
      <h2 className="text-2xl font-bold text-gray-900 px-5">Best Items</h2>
      <div className="w-full overflow-x-auto">
        <ul className="flex gap-2.5 pb-2 min-w-max">
          {products.map((product) => (
            <li
              key={product.id}
              className="flex flex-col w-40 h-[220px] bg-white border border-gray-200 rounded-sm hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* 상품 이미지 */}
              <div className="relative w-full h-[158px] bg-gray-100 rounded-t-sm overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="158px"
                />
              </div>

              {/* 상품 정보 */}
              <div className="flex flex-col justify-between p-2.5">
                <h3 className="text-sm font-bold text-zinc-600 line-clamp-2">
                  {product.name}
                </h3>
                <div className="flex justify-end items-center">
                  {product.discountPrice ? (
                    <div className="flex flex-col text-right">
                      <span className="text-xs text-gray-500 line-through">
                        {product.price.toLocaleString()}원
                      </span>
                      <span className="text-md font-bold text-zinc-800">
                        {product.discountPrice.toLocaleString()}원
                      </span>
                    </div>
                  ) : (
                    <span className="text-lg font-bold text-zinc-800">
                      {product.price.toLocaleString()}원
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
