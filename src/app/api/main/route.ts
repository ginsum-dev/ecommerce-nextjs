import { NextResponse } from "next/server";

const mainProducts = [
  {
    id: 1,
    title: "건강한 채소",
    description: "신선한 채소 세트를 만나보세요!",
    image:
      "https://images.unsplash.com/photo-1609842947419-ba4f04d5d60f?q=80&w=2070&auto=format&fit=crop",
  },
  // 패션/액세서리
  {
    id: 6,
    title: "아침 식사",
    description: "아침 식사엔 신선한 과일이 최고예요!",
    image:
      "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1744&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "오렌지",
    description: "신선한 오렌지 세트",
    image:
      "https://images.unsplash.com/photo-1613478223719-2ab802602423?q=80&w=1674&auto=format&fit=crop",
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
