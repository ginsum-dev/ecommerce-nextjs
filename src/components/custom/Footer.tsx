import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-blue-100 text-blue-950">
      <div className="w-[765px] mx-auto px-6 py-8">
        {/* 메인 푸터 섹션 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* 회사 정보 */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Fresh Market</h3>
            <p className=" text-sm leading-relaxed">
              신선한 농산물을 직접 배송해드리는 온라인 마켓입니다. 최고 품질의
              제품을 합리적인 가격으로 만나보세요.
            </p>
          </div>

          {/* 쇼핑 정보 */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold ">쇼핑</h4>
            <ul className="space-y-2 text-sm ">
              <li>
                <Link
                  href="/products"
                  className="hover:text-blue-800 transition-colors"
                >
                  전체 상품
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-blue-800 transition-colors"
                >
                  장바구니
                </Link>
              </li>
              <li>
                <Link
                  href="/order"
                  className="hover:text-blue-800 transition-colors"
                >
                  주문내역
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  베스트 상품
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  신상품
                </a>
              </li>
            </ul>
          </div>

          {/* 고객지원 */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold ">고객지원</h4>
            <ul className="space-y-2 text-sm ">
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  1:1 문의
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  배송 안내
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  반품/교환
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-800 transition-colors">
                  이용약관
                </a>
              </li>
            </ul>
          </div>

          {/* 연락처 */}
          <div className="space-y-4">
            <h4 className="text-md font-semibold ">연락처</h4>
            <div className="space-y-2 text-sm ">
              <p>고객센터: 1588-1234</p>
              <p>운영시간: 09:00 - 18:00</p>
              <p>주말 및 공휴일 휴무</p>
              <p className="pt-2">이메일: support@freshmarket.com</p>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm ">
              <p>© 2024 Fresh Market. All rights reserved.</p>
              <p className="mt-1">
                사업자등록번호: 123-45-67890 | 대표: 홍길동 | 주소: 서울특별시
                강남구 테헤란로 123
              </p>
            </div>
            <div className="flex space-x-4 text-sm">
              <a href="#" className=" hover:text-blue-800 transition-colors">
                개인정보처리방침
              </a>
              <a href="#" className=" hover:text-blue-800 transition-colors">
                이용약관
              </a>
              <a href="#" className=" hover:text-blue-800 transition-colors">
                사이트맵
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
