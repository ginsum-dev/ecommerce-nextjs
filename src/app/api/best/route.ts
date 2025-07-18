import { NextResponse } from "next/server";

const bestProducts = [
  // 전자제품
  {
    id: 2,
    name: "사과",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1577028300036-aa112c18d109?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "블루베리",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1425934398893-310a009a77f9?q=80&w=2000&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "딸기",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "레몬",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1624436518795-a2c1c77d6896?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "토마토",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "바나나",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1035&auto=format&fit=crop",
  },
];

export async function GET() {
  try {
    const response = NextResponse.json(bestProducts);
    response.headers.set("Access-Control-Allow-Origin", "*");
    response.headers.set(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    response.headers.set("Access-Control-Allow-Headers", "Content-Type");

    return response;
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch best products" },
      { status: 500 }
    );
  }
}

// OPTIONS 요청 처리 (CORS preflight)
export async function OPTIONS() {
  const response = new NextResponse(null, { status: 200 });
  response.headers.set("Access-Control-Allow-Origin", "*");
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  response.headers.set("Access-Control-Allow-Headers", "Content-Type");
  return response;
}
