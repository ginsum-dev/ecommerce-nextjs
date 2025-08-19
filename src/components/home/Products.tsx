"use client";

import { useGetProducts } from "@/queries/productQueries";
import ProductList from "@/components/products/ProductList";

export default function Products() {
  const { data: products, isLoading, isError } = useGetProducts();

  if (isLoading) {
    return (
      <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <p className="text-gray-600 text-sm">상품을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <p className="text-gray-600 text-sm">
            상품을 불러오는데 실패했습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 pt-3 pb-10">
      <span className="text-2xl font-bold">All Items</span>
      {products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <p className="text-gray-600 text-sm">
            상품을 찾을 수 없습니다. 다시 검색해주세요.
          </p>
        </div>
      )}
    </div>
  );
}
