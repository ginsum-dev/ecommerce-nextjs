import { NextResponse } from "next/server";

const products = [
  {
    id: 1,
    name: "감자",
    price: 89000,
    discountPrice: 79000,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1590165482129-1b8b27698780?q=80&w=927&auto=format&fit=crop",
    description:
      "신선한 국내산 감자입니다. 다양한 요리에 활용할 수 있는 고품질 감자를 제공합니다.",
  },
  {
    id: 2,
    name: "사과",
    price: 89000,
    discountPrice: 79000,
    stock: 80,
    image:
      "https://images.unsplash.com/photo-1577028300036-aa112c18d109?q=80&w=1035&auto=format&fit=crop",
    description:
      "달콤하고 아삭한 국내산 사과입니다. 비타민이 풍부하여 건강에 좋습니다.",
  },

  {
    id: 3,
    name: "오이",
    price: 45000,
    discountPrice: 35000,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=1674&auto=format&fit=crop",
    description:
      "신선하고 아삭한 오이입니다. 샐러드나 반찬으로 활용하기 좋습니다.",
  },
  {
    id: 4,
    name: "블루베리",
    price: 45000,
    discountPrice: 35000,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1425934398893-310a009a77f9?q=80&w=2000&auto=format&fit=crop",
    description:
      "항산화 물질이 풍부한 블루베리입니다. 신선한 상태로 배송됩니다.",
  },

  {
    id: 5,
    name: "시금치",
    price: 35000,
    discountPrice: 25000,
    stock: 75,
    image:
      "https://images.unsplash.com/photo-1576045057995-568f588f82fb?q=80&w=1480&auto=format&fit=crop",
    description:
      "철분이 풍부한 시금치입니다. 영양가가 높아 건강식으로 인기가 많습니다.",
  },
  {
    id: 6,
    name: "딸기",
    price: 35000,
    discountPrice: 25000,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?q=80&w=2070&auto=format&fit=crop",
    description:
      "달콤하고 신선한 딸기입니다. 비타민C가 풍부하여 면역력 증진에 도움이 됩니다.",
  },
  {
    id: 7,
    name: "당근",
    price: 89000,
    discountPrice: 79000,
    stock: 70,
    image:
      "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=987&auto=format&fit=crop",
    description:
      "베타카로틴이 풍부한 당근입니다. 시력 개선과 피부 건강에 좋습니다.",
  },
  {
    id: 8,
    name: "레몬",
    price: 89000,
    discountPrice: 79000,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1624436518795-a2c1c77d6896?q=80&w=1035&auto=format&fit=crop",
    description:
      "신선한 레몬입니다. 비타민C가 풍부하여 차나 요리에 활용하기 좋습니다.",
  },
  {
    id: 9,
    name: "브로콜리",
    price: 32000,
    discountPrice: 22000,
    stock: 65,
    image:
      "https://images.unsplash.com/photo-1583663848850-46af132dc08e?q=80&w=1035&auto=format&fit=crop",
    description:
      "영양가가 높은 브로콜리입니다. 항암 효과가 있어 건강식으로 인기가 많습니다.",
  },
  {
    id: 10,
    name: "토마토",
    price: 120000,
    discountPrice: 110000,
    stock: 35,
    image:
      "https://images.unsplash.com/photo-1582284540020-8acbe03f4924?q=80&w=1035&auto=format&fit=crop",
    description:
      "신선한 토마토입니다. 리코펜이 풍부하여 항산화 효과가 뛰어납니다.",
  },
  {
    id: 11,
    name: "고추",
    price: 18000,
    discountPrice: 15000,
    stock: 90,
    image:
      "https://images.unsplash.com/photo-1526346698789-22fd84314424?q=80&w=2070&auto=format&fit=crop",
    description:
      "매운맛이 특징인 고추입니다. 요리의 맛을 한층 더해주는 필수 재료입니다.",
  },
  {
    id: 12,
    name: "바나나",
    price: 18000,
    discountPrice: 15000,
    stock: 100,
    image:
      "https://images.unsplash.com/photo-1543218024-57a70143c369?q=80&w=1035&auto=format&fit=crop",
    description:
      "포만감이 좋은 바나나입니다. 칼륨이 풍부하여 근육 회복에 도움이 됩니다.",
  },
  {
    id: 13,
    name: "배추",
    price: 15000,
    discountPrice: 12000,
    stock: 85,
    image:
      "https://images.unsplash.com/photo-1614540527480-1a0818eafcbb?q=80&w=1035&auto=format&fit=crop",
    description:
      "김치나 샐러드에 활용하기 좋은 배추입니다. 식이섬유가 풍부합니다.",
  },
  {
    id: 14,
    name: "피망",
    price: 75000,
    discountPrice: 65000,
    stock: 50,
    image:
      "https://images.unsplash.com/photo-1506365069540-904bcc762636?q=80&w=2070&auto=format&fit=crop",
    description: "색깔이 예쁜 피망입니다. 비타민C가 풍부하여 건강에 좋습니다.",
  },
  {
    id: 15,
    name: "살구",
    price: 45000,
    discountPrice: 35000,
    stock: 40,
    image:
      "https://images.unsplash.com/photo-1473674887131-e28696a84ed6?q=80&w=987&auto=format&fit=crop",
    description:
      "달콤한 살구입니다. 베타카로틴이 풍부하여 피부 건강에 좋습니다.",
  },
  {
    id: 16,
    name: "키위",
    price: 28000,
    discountPrice: 25000,
    stock: 60,
    image:
      "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?q=80&w=1064&auto=format&fit=crop",
    description: "비타민C가 풍부한 키위입니다. 면역력 증진에 도움이 됩니다.",
  },

  {
    id: 17,
    name: "멜론",
    price: 65000,
    discountPrice: 55000,
    stock: 30,
    image:
      "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?q=80&w=1036&auto=format&fit=crop",
    description:
      "달콤하고 신선한 멜론입니다. 수분이 풍부하여 여름철에 인기가 많습니다.",
  },
  {
    id: 18,
    name: "파인애플",
    price: 55000,
    discountPrice: 45000,
    stock: 45,
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?q=80&w=987&auto=format&fit=crop",
    description:
      "신선한 파인애플입니다. 브로멜라인이 풍부하여 소화에 도움이 됩니다.",
  },
  {
    id: 19,
    name: "아보카도",
    price: 35000,
    discountPrice: 25000,
    stock: 55,
    image:
      "https://images.unsplash.com/photo-1704960961383-67dd63756199?q=80&w=2070&auto=format&fit=crop",
    description:
      "건강한 지방이 풍부한 아보카도입니다. 샐러드나 토스트에 활용하기 좋습니다.",
  },
  {
    id: 20,
    name: "양파",
    price: 12000,
    discountPrice: 10000,
    stock: 120,
    image:
      "https://images.unsplash.com/photo-1587049633312-d628ae50a8ae?q=80&w=1480&auto=format&fit=crop",
    description:
      "기본적인 조미료로 활용되는 양파입니다. 다양한 요리에 필수적인 재료입니다.",
  },
];

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const product = products.find((p) => p.id === parseInt(params.id));

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const response = NextResponse.json(product);
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
      { error: "Failed to fetch product" },
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
