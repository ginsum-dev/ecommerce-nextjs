import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "감자",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=927&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "사과",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1577028300036-aa112c18d109?q=80&w=1035&auto=format&fit=crop",
  },

  {
    id: 3,
    name: "오이",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1674&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "블루베리",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1425934398893-310a009a77f9?q=80&w=2000&auto=format&fit=crop",
  },

  {
    id: 5,
    name: "시금치",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "딸기",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "당근",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "레몬",
    price: 89000,
    image:
      "https://images.unsplash.com/photo-1624436518795-a2c1c77d6896?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 9,
    name: "브로콜리",
    price: 32000,
    image:
      "https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 10,
    name: "토마토",
    price: 120000,
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 11,
    name: "고추",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 12,
    name: "바나나",
    price: 18000,
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 13,
    name: "배추",
    price: 15000,
    image:
      "https://images.unsplash.com/photo-1614540527480-1a0818eafcbb?q=80&w=1035&auto=format&fit=crop",
  },
  {
    id: 14,
    name: "피망",
    price: 75000,
    image:
      "https://images.unsplash.com/photo-1506365069540-904bcc762636?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 15,
    name: "살구",
    price: 45000,
    image:
      "https://images.unsplash.com/photo-1473674887131-e28696a84ed6?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 16,
    name: "키위",
    price: 28000,
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1064&auto=format&fit=crop",
  },

  {
    id: 17,
    name: "멜론",
    price: 65000,
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1036&auto=format&fit=crop",
  },
  {
    id: 18,
    name: "파인애플",
    price: 55000,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=987&auto=format&fit=crop",
  },
  {
    id: 19,
    name: "아보카도",
    price: 35000,
    image:
      "https://images.unsplash.com/photo-1704960961383-67dd63756199?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 20,
    name: "양파",
    price: 12000,
    image:
      "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=1480&auto=format&fit=crop",
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
