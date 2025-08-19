export default function Footer() {
  return (
    <footer className="w-full bg-zinc-50 text-zinc-700">
      <div className="flex flex-col w-[600px] mx-auto px-6 py-8">
        <div className="flex justify-between gap-4 pb-2">
          <h3 className="text-lg font-bold">Fresh Market</h3>
          <div className="flex flex-col gap-1 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-sm">고객센터</span>
              <span className="font-bold text-lg">02-1234-1234</span>
            </div>
          </div>
        </div>

        {/* 하단 정보 */}
        <div className="border-t border-gray-700 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div className="text-sm ">
              <p>© 2024 Fresh Market. All rights reserved.</p>
              <p className="mt-1">
                사업자등록번호: 123-45-67890 | 대표: 홍길동 | 주소: 서울특별시
                강남구 테헤란로 123
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
