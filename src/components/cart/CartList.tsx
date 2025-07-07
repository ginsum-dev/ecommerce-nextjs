"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import CartItem from "./CartItem";
import CartPrice from "./CartPrice";
import Button from "@/components/custom/Button";
import useCart from "@/hooks/useCart";

export default function CartList() {
  const router = useRouter();
  const {
    cartItems,
    orderItems,
    isAllChecked,
    onClickCheckAll,
    onClickCheckbox,
  } = useCart();

  return cartItems.length > 0 ? (
    <div className="relative pt-6 px-6 flex flex-col gap-4">
      <div className="flex flex-col">
        {cartItems.length > 0 && (
          <div className="pl-2 flex gap-3 items-center border-b border-gray-300 pb-3">
            <input
              type="checkbox"
              checked={isAllChecked}
              onChange={onClickCheckAll}
              className="w-4 h-4 accent-orange-300"
            />
            <span className="text-sm text-gray-800">전체 선택</span>
          </div>
        )}
        <ul className="flex flex-col">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              handleClickCheckbox={onClickCheckbox}
              checkedItems={orderItems}
            />
          ))}
        </ul>
      </div>
      <CartPrice />
      <div className="fixed bottom-0 left-0 right-0 max-w-[620px] mx-auto w-full flex justify-center bg-white py-2">
        <Button
          className="w-[300px]"
          disabled={orderItems.length === 0}
          onClick={() => router.push("/order")}
        >
          주문하기
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)] gap-6">
      <p className="text-gray-600 font-semibold">장바구니가 비었습니다.</p>
      <Link href="/">
        <Button className="w-[280px]">상품 보러가기</Button>
      </Link>
    </div>
  );
}
