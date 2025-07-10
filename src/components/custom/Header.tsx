import Link from "next/link";
import Image from "next/image";
import ArrowLeftIcon from "@/assets/icons/arrow-left-icon.svg";

export default function Header({
  children,
  backPath,
}: {
  children: React.ReactNode;
  backPath?: string;
}) {
  return (
    <header className="relative flex justify-center items-center p-4">
      {backPath && (
        <div className="absolute left-5">
          <Link href={backPath}>
            <Image
              src={ArrowLeftIcon}
              alt="arrow-left"
              width={16}
              height={16}
            />
          </Link>
        </div>
      )}
      {children}
    </header>
  );
}
