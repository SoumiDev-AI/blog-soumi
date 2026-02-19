import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-soumi-border bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/circles.svg"
            alt="Soumi"
            width={36}
            height={36}
            className="h-8 w-8 object-contain sm:h-9 sm:w-9"
          />
        </Link>
        <nav className="flex items-center gap-2 sm:gap-5 text-sm">
          <Link
            href="/"
            className="hidden sm:inline-block rounded-full px-3 py-1.5 text-soumi-gray transition-all hover:bg-brand-light hover:text-soumi-charcoal"
          >
            Profesionales
          </Link>
          <a
            href="https://soumi.io"
            className="rounded-full bg-soumi-charcoal px-4 py-2 text-xs font-medium text-white transition-all hover:bg-[#1F2937] hover:shadow-lg sm:px-5 sm:text-sm"
          >
            Probar Soumi gratis
          </a>
        </nav>
      </div>
    </header>
  );
}
