import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    title: "여름 과일",
    description: "신선한 여름 과일 세트",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?q=80&w=2070&auto=format&fit=crop",
  },
  // 패션/액세서리
  {
    id: 6,
    title: "아침 식사",
    description: "신선한 아침 식사엔 과일",
    image:
      "https://images.unsplash.com/photo-1467453678174-768ec283a940?q=80&w=1744&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "오렌지",
    description: "신선한 오렌지 세트",
    image:
      "https://images.unsplash.com/photo-1560607162-26b0344e6943?q=80&w=1065&auto=format&fit=crop",
  },
];

export async function GET() {
  try {
    // CORS 헤더 설정 (필요한 경우)
    const response = NextResponse.json(products);
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
      { error: "Failed to fetch products" },
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
