import { NextResponse } from "next/server";

const mainProducts = [
  {
    id: 6,
    title: "복숭아",
    description: "신선한 제철 복숭아를 만나보세요!",
    image:
      "https://images.unsplash.com/photo-1532704868953-d85f24176d73?q=80&w=1744&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "오렌지",
    description: "오렌지 세트가 준비되어 있어요.",
    image:
      "https://images.unsplash.com/photo-1523971436722-f144a6a5dc60?q=80&w=2070&auto=format&fit=crop",
  },

  {
    id: 7,
    title: "배",
    description: "신선한 배가 준비되어 있어요.",
    image:
      "https://images.unsplash.com/photo-1667400104714-53da4894bf18?q=80&w=1674&auto=format&fit=crop",
  },
];

export async function GET() {
  try {
    // CORS 헤더 설정 (필요한 경우)
    const response = NextResponse.json(mainProducts);
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
      { error: "Failed to fetch main products" },
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
