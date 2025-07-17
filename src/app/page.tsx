import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import ProductSlider from "@/components/home/ProductSlider";
import BestItem from "@/components/home/BestItem";
import Footer from "@/components/custom/Footer";
import Products from "@/components/home/Products";

export default function Home() {
  return (
    <div className="relative flex flex-col gap-4">
      <Header>
        <h1 className="text-2xl font-bold">Shop</h1>
      </Header>
      <Navbar />
      <div className="w-[765px] mx-auto">
        <ProductSlider />
        <BestItem />
        <Products />
      </div>

      <Footer />
    </div>
  );
}
