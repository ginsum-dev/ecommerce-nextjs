"use client";

import useOrder from "@/hooks/order/useOrdert";
import Button from "@/components/custom/Button";
import OrderPoint from "./OrderPoint";

export default function OrderPrice() {
  const {
    point,
    setPoint,
    totalPrice,
    totalDeliveryFee,
    totalPayment,
    handleClickPayment,
  } = useOrder();

  return (
    <div className="px-8 pb-8 flex flex-col gap-4">
      <OrderPoint setUsedPoints={setPoint} />
      <h3 className="text-lg font-bold py-2">결제 정보</h3>
      <div className="flex flex-col gap-1 border-b border-gray-300 pb-4">
        <div className="flex justify-between">
          <span>총 상품 금액</span>
          <span>{`${totalPrice.toLocaleString()}원`}</span>
        </div>
        <div className="flex justify-between">
          <span>사용 포인트</span>
          <span>{`${point.toLocaleString()}원`}</span>
        </div>
        <div className="flex justify-between">
          <span>총 배송비</span>
          <span>{`${totalDeliveryFee.toLocaleString()}원`}</span>
        </div>
      </div>
      <div className="flex justify-between pb-20">
        <span className="font-semibold">총 결제 금액</span>
        <span className="text-xl font-bold">{`${totalPayment.toLocaleString()}원`}</span>
      </div>
      <div className="fixed bottom-0 left-0 right-0 max-w-[620px] mx-auto w-full flex justify-center bg-white py-2">
        <Button className="w-[300px]" onClick={handleClickPayment}>
          결제하기
        </Button>
      </div>
    </div>
  );
}
