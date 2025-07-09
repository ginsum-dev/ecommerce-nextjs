import Products from "@/components/products/Products";
import Header from "@/components/custom/Header";

export default function ProductPage() {
  return (
    <div className="flex flex-col gap-4">
      <Header>
        <h1 className="text-2xl font-bold">Products</h1>
      </Header>
      <Products />
    </div>
  );
}
