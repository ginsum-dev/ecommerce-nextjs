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
  {
    id: 2,
    name: "스마트폰 케이스",
    price: 15000,
    stock: 120,
    image:
      "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    name: "블루투스 스피커",
    price: 45000,
    stock: 80,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    name: "노트북 스탠드",
    price: 25000,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=300&fit=crop",
  },

  // 패션/액세서리
  {
    id: 5,
    name: "가죽 지갑",
    price: 35000,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=300&fit=crop",
  },
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
  {
    id: 11,
    name: "식물 화분",
    price: 18000,
    stock: 90,
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop",
  },
  {
    id: 12,
    name: "쿠션",
    price: 22000,
    stock: 70,
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=400&h=300&fit=crop",
  },

  // 스포츠/아웃도어
  {
    id: 13,
    name: "요가 매트",
    price: 15000,
    stock: 100,
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop",
  },
  {
    id: 14,
    name: "등산 배낭",
    price: 75000,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop",
  },
  {
    id: 15,
    name: "자전거 헬멧",
    price: 45000,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
  },
  {
    id: 16,
    name: "텀블러",
    price: 28000,
    stock: 85,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
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
  {
    id: 19,
    name: "비타민",
    price: 35000,
    stock: 120,
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop",
  },
  {
    id: 20,
    name: "마사지볼",
    price: 12000,
    stock: 150,
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
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
