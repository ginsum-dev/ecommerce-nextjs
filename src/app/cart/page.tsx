import CartList from "@/components/cart/CartList";
import Header from "@/components/custom/Header";

export default function CartPage() {
  return (
    <div className="flex flex-col gap-4">
      <Header>
        <h1 className="text-2xl font-bold">Cart</h1>
      </Header>
      <CartList />
    </div>
  );
}
