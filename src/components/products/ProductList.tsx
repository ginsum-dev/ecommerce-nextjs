import ProductItem from "./ProductItem";
import { ProductType } from "@/types/productTypes";

export default function ProductList({ products }: { products: ProductType[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
