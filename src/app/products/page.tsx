import Products from "@/components/products/Products";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";

export default function ProductPage() {
  return (
    <div className="relative flex flex-col gap-4">
      <Header>
        <h1 className="text-2xl font-bold">Products</h1>
      </Header>
      <Navbar />
      <Products />
    </div>
  );
}
