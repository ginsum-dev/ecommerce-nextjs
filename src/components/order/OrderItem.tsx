import { CartType } from "@/types/cartTypes";

export default function OrderItem({ orderItem }: { orderItem: CartType }) {
  const { name, price, order } = orderItem;

  return (
    <li className="flex w-full justify-between items-center py-3 px-6 border-b border-gray-300 gap-2 last:border-b-0">
      <div className="flex flex-col">
        <span className="text-md font-semibold text-gray-900">{name}</span>
        <span className="text-sm text-gray-400 font-semibold">{`${price.toLocaleString()}원 X ${order}개`}</span>
      </div>
      <span className="text-lg font-bold">{`${(
        price * order
      ).toLocaleString()}원`}</span>
    </li>
  );
}
