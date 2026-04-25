import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-20 flex h-16 items-center justify-between px-5 md:h-20 md:px-32">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Le Parfum"
          width={164}
          height={31}
          className="h-6 w-32 object-contain md:h-8 md:w-40"
        />
      </Link>
      <div className="flex items-center gap-5 md:gap-12">
        <Link
          href="#"
          className="text-[10px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80 md:text-xs"
        >
          Curate My Scent
        </Link>
        <Link
          href="#"
          className="text-[10px] font-bold uppercase tracking-wide text-white transition-opacity hover:opacity-80 md:text-xs"
        >
          Let&apos;s Chat
        </Link>
      </div>
    </nav>
  );
}