import { Product } from "@/queries/productQueries";
import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <ul className="flex flex-wrap gap-3">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
