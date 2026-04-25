import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { AiFillTwitterSquare } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="relative bg-stone-100 pb-12 pt-20">
      <div className="px-6 md:px-32">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12 md:gap-0">
          <Image
            src="/logo-black.png"
            alt="Le Parfum"
            width={164}
            height={31}
            className="h-8 w-40 object-contain"
          />
          <div className="flex flex-col md:flex-row gap-12 md:gap-20">
            <nav className="flex flex-col gap-4" aria-label="Site">
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Home
              </Link>
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                leparfum.ai
              </Link>
            </nav>
            <nav className="flex flex-col gap-4" aria-label="Services">
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Weddings
              </Link>
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Corporate & Gifting
              </Link>
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Hospitality
              </Link>
            </nav>
            <div className="flex flex-col gap-2">
              <Link
                href="mailto:enquiries@leparfum.ai"
                className="flex items-center gap-2 py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  className="size-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.67"
                >
                  <rect x="2.5" y="4.17" width="15" height="11.67" rx="0" />
                  <polyline points="2.5,4.17 10,11 17.5,4.17" />
                </svg>
                enquiries@leparfum.ai
              </Link>
              <Link
                href="mailto:media@leparfum.ai"
                className="flex items-center gap-2 py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                <svg
                  className="size-5 shrink-0"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.67"
                >
                  <rect x="2.5" y="4.17" width="15" height="11.67" rx="0" />
                  <polyline points="2.5,4.17 10,11 17.5,4.17" />
                </svg>
                media@leparfum.ai
              </Link>
            </div>
            <nav className="flex flex-col gap-4" aria-label="Legal">
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="py-2 text-xs font-bold uppercase leading-3 text-black hover:opacity-70 transition-opacity"
              >
                Cookies Settings
              </Link>
            </nav>
          </div>
        </div>
        <div className="my-8 w-full">
          <Image 
            src="/footer.png" 
            alt="Footer Divider" 
            width={1200} 
            height={100} 
            className="w-full h-auto object-contain" 
          />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0">
          <p className="text-xs font-normal leading-4 text-black">
            © {new Date().getFullYear()} leparfum.ai. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="py-2 hover:opacity-70 transition-opacity" aria-label="Instagram">
              <AiFillInstagram className="size-6 block rounded-sm" />
            </Link>
            <Link href="#" className="py-2 hover:opacity-70 transition-opacity" aria-label="Facebook">
              <AiFillFacebook className="size-6 block rounded-sm" />
            </Link>
            <Link href="#" className="py-2 hover:opacity-70 transition-opacity" aria-label="TikTok">
              <AiFillTikTok className="size-6 block rounded-sm" />
            </Link>
            <Link href="#" className="py-2 hover:opacity-70 transition-opacity" aria-label="X / Twitter">
              <AiFillTwitterSquare className="size-6 block rounded-sm" />
            </Link>
            <Link href="#" className="py-2 hover:opacity-70 transition-opacity" aria-label="LinkedIn">
              <AiFillLinkedin className="size-6 block rounded-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
