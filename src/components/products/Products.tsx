"use client";

import { useState } from "react";
import { useGetProducts, Product } from "@/queries/productQueries";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";

export default function Products() {
  const [search, setSearch] = useState("");
  const { data: products, isLoading, isError } = useGetProducts();

  const filteredProducts = products?.filter((product: Product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
        <ProductSearch setSearch={setSearch} />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <p className="text-gray-600 text-sm">상품을 불러오는 중...</p>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
        <ProductSearch setSearch={setSearch} />
        <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-2">
          <p className="text-gray-600 text-sm">
            상품을 불러오는데 실패했습니다.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
      <ProductSearch setSearch={setSearch} />
      {filteredProducts && filteredProducts.length > 0 ? (
        <ProductList products={filteredProducts} />
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
