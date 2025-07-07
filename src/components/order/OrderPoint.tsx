import { useRef } from "react";
import { useGetPoints } from "@/api/pointQueries";
import Button from "@/components/custom/Button";

export default function OrderPoint({
  setUsedPoints,
}: {
  setUsedPoints: (points: number) => void;
}) {
  const { data: availablePoints, isError } = useGetPoints();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickPoint = () => {
    if (inputRef.current) {
      if (Number(inputRef.current.value) > availablePoints?.points) {
        alert("보유 포인트를 초과할 수 없습니다.");
      } else {
        setUsedPoints(Number(inputRef.current.value));
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    // 음수 입력 방지
    if (value < 0) {
      e.target.value = "0";
    }
  };

  return (
    <div className="flex flex-col gap-2 border-b border-gray-300 pb-4">
      <span className="text-lg font-bold py-2">포인트 사용</span>
      {isError ? (
        <span>포인트 정보를 불러오는 중 오류가 발생했습니다.</span>
      ) : (
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
          <div className="flex gap-2 justify-between sm:justify-start">
            <span>보유 포인트</span>
            <span>{`${availablePoints?.points.toLocaleString()} 포인트`}</span>
          </div>
          <div className="flex gap-1 justify-end">
            <input
              type="number"
              ref={inputRef}
              min="0"
              max={availablePoints?.points}
              placeholder="0"
              onChange={handleInputChange}
              className="w-[100px] text-right border border-gray-300 rounded-lg p-2 focus:outline-none"
            />
            <Button
              variant="outline"
              onClick={handleClickPoint}
              className="w-[60px]"
            >
              사용
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
