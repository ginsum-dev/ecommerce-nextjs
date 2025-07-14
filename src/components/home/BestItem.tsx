"use client";

import { useGetProducts } from "@/queries/productQueries";
import ProductList from "../products/ProductList";

export default function BestItem() {
  const { data } = useGetProducts();
  const products = data?.slice(0, 6) || [];

  return (
    <div className="flex flex-col gap-3 py-10">
      <span className="text-2xl font-bold">Best Item</span>
      <ProductList products={products} />
    </div>
  );
}
