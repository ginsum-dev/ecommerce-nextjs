"use client";

import { useState } from "react";
// import { useGetProducts } from "../api/productQueries";
import ProductList from "./ProductList";
import ProductSearch from "./ProductSearch";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 10000,
    stock: 10,
  },
];

export default function Products() {
  const [search, setSearch] = useState("");
  //   const { data: products, isLoading, isError } = useGetProducts();

  //   const filteredProducts = products?.filter((product: ProductType) =>
  //     product.name.toLowerCase().includes(search.toLowerCase())
  //   );

  //   if (isLoading) return <Loading />;
  //   if (isError) return <Error />;

  return (
    <div className="px-6 flex flex-col gap-3 pt-3 pb-10">
      <ProductSearch setSearch={setSearch} />
      {products?.length > 0 ? (
        <ProductList products={products || []} />
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
