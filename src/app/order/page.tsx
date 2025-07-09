import Header from "@/components/custom/Header";
import OrderList from "@/components/order/OrderList";
import OrderPrice from "@/components/order/OrderPrice";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-4">
      <Header>
        <h1 className="text-2xl font-bold">Order</h1>
      </Header>
      <OrderList />
      <OrderPrice />
    </div>
  );
}
