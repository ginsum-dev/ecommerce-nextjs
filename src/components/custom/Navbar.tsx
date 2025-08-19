import Link from "next/link";
import Image from "next/image";
import cartIcon from "@/assets/icons/cart-icon.svg";

export default function Navbar() {
  return (
    <div className="flex gap-4 absolute top-4 right-4">
      <Link href="/cart">
        <Image src={cartIcon} alt="cart" width={24} height={24} />
      </Link>
    </div>
  );
}
