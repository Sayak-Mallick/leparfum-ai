import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute inset-x-0 top-0 z-20 flex h-20 items-center justify-between px-6 md:px-32">
      <Link href="/">
        <Image
          src="/logo.png"
          alt="Le Parfum"
          width={164}
          height={31}
          className="h-8 w-40 object-contain"
        />
      </Link>
      <div className="flex items-center gap-6 md:gap-12">
        <Link
          href="#"
          className="text-xs font-bold uppercase leading-5 text-white tracking-wide hover:opacity-80 transition-opacity"
        >
          Curate My Scent
        </Link>
        <Link
          href="#"
          className="text-xs font-bold uppercase leading-5 text-white tracking-wide hover:opacity-80 transition-opacity"
        >
          Let&apos;s Chat
        </Link>
      </div>
    </nav>
  );
}