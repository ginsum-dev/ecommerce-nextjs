import { NextResponse } from "next/server";

const products = [
  // 전자제품
  {
    id: 1,
    name: "무선 이어폰",
    price: 89000,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop",
  },
  // 패션/액세서리
  {
    id: 6,
    name: "선글라스",
    price: 28000,
    stock: 75,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop",
  },
  {
    id: 7,
    name: "스니커즈",
    price: 89000,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop",
  },
  {
    id: 8,
    name: "백팩",
    price: 55000,
    stock: 65,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
  },

  // 홈/리빙
  {
    id: 9,
    name: "테이블 램프",
    price: 32000,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=300&fit=crop",
  },
  {
    id: 10,
    name: "커피 머신",
    price: 120000,
    stock: 25,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
  },

  // 뷰티/헬스
  {
    id: 17,
    name: "화장품 세트",
    price: 65000,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=300&fit=crop",
  },
  {
    id: 18,
    name: "헤어드라이어",
    price: 55000,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1522338146-1115d3c6c97e?w=400&h=300&fit=crop",
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
