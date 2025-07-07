import OrderList from "@/components/order/OrderList";
import OrderPrice from "@/components/order/OrderPrice";

export default function OrderPage() {
  return (
    <div className="flex flex-col gap-4">
      <OrderList />
      <OrderPrice />
    </div>
  );
}
