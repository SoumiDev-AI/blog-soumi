import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-soumi-border bg-brand-light">
        <div className="mx-auto max-w-5xl px-6 py-5 flex flex-col items-center gap-3 border-t border-soumi-border pt-6 text-xs text-soumi-gray sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Soumi. Todos los derechos reservados.</span>
          <span>Charlas grupales online &middot; Seguras &middot; Accesibles &middot; Flexibles</span>
      </div>
    </footer>
  );
}
