"use client";

import { useGetBestProducts } from "@/queries/productQueries";
import ProductItem from "../products/ProductItem";

export default function BestItem() {
  const { data } = useGetBestProducts();
  const products = data?.slice(0, 6) || [];

  return (
    <div className="flex flex-col gap-3 py-10 ">
      <span className="text-2xl font-bold">Best Item</span>
      <ul className="flex flex-nowrap gap-2 overflow-x-auto">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
}
