import ProductDetail from "@/components/products/ProductDetail";
import Header from "@/components/custom/Header";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

interface ProductDetailPageProps {
  params: {
    id: string;
  };
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  return (
    <div className="relative flex flex-col min-h-screen">
      <Header backPath="/">
        <h1 className="text-2xl font-bold">상품 상세</h1>
      </Header>
      <Navbar />
      <main className="w-[600px] mx-auto pb-20">
        <ProductDetail productId={params.id} />
      </main>
      <Footer />
    </div>
  );
}
