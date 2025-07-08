import { useRef } from "react";
import Button from "@/components/custom/Button";

export default function ProductSearch({
  setSearch,
}: {
  setSearch: (search: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    setSearch(inputRef.current?.value || "");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearch("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex justify-between gap-1">
      <div className="flex gap-1 w-full border border-gray-300 rounded-md p-2">
        <input
          ref={inputRef}
          type="text"
          onKeyDown={handleKeyDown}
          className="w-full focus:outline-none rounded-lg"
        />
        <button
          onClick={handleReset}
          className="w-6 h-6 justify-end rounded-full bg-gray-200 text-xs text-gray-600"
        >
          X
        </button>
      </div>
      <Button onClick={handleSearch} className="w-16" variant="outline">
        검색
      </Button>
    </div>
  );
}
