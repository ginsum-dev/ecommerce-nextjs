import { CartType } from '@/store/cartStore';
import { useOrderStore } from '@/store/orderStore';

export default function CartPrice() {
  const orderItems = useOrderStore((state) => state.orderItems);

  const totalPrice = orderItems.reduce(
    (acc: number, item: CartType) => acc + item.price * item.order,
    0
  );
  const totalDeliveryFee = totalPrice > 20000 || totalPrice === 0 ? 0 : 3000;
  const totalPayment = totalPrice + totalDeliveryFee;

  return (
    <div className="flex flex-col gap-1 pb-20">
      <h3 className="text-lg font-bold py-2">결제 정보</h3>
      <div className="flex flex-col gap-1 border-b border-gray-300 pb-2">
        <div className="flex justify-between">
          <span>총 상품 금액</span>
          <span className="">{`${totalPrice.toLocaleString()}원`}</span>
        </div>
        <div className="flex justify-between">
          <span>총 배송비</span>
          <span className="">{`${totalDeliveryFee.toLocaleString()}원`}</span>
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <span className="font-semibold">총 결제 금액</span>
        <span className="text-xl font-bold">{`${totalPayment.toLocaleString()}원`}</span>
      </div>
    </div>
  );
}
