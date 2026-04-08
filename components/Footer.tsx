import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-soumi-border bg-brand-light">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div>
            <h4 className="mb-3 text-sm font-semibold text-soumi-charcoal">
              Producto
            </h4>
            <ul className="space-y-2 text-sm text-soumi-gray">
              <li>
                <a href="https://soumi.io/funcionalidades" className="hover:text-soumi-charcoal transition-colors">
                  Funcionalidades
                </a>
              </li>
              <li>
                <a href="https://soumi.io/experiencia-del-paciente" className="hover:text-soumi-charcoal transition-colors">
                  Experiencia del paciente
                </a>
              </li>
              <li>
                <a href="https://soumi.io/precios" className="hover:text-soumi-charcoal transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-soumi-charcoal">
              Recursos
            </h4>
            <ul className="space-y-2 text-sm text-soumi-gray">
              <li>
                <Link href="/" className="hover:text-soumi-charcoal transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="https://soumi.io/contacto" className="hover:text-soumi-charcoal transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-sm font-semibold text-soumi-charcoal">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-soumi-gray">
              <li>
                <a href="https://soumi.io/privacidad" className="hover:text-soumi-charcoal transition-colors">
                  Política de privacidad
                </a>
              </li>
              <li>
                <a href="https://soumi.io/terminos" className="hover:text-soumi-charcoal transition-colors">
                  Términos y condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 border-t border-soumi-border pt-6 text-xs text-soumi-gray sm:flex-row sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Soumi. Todos los derechos reservados.</span>
          <span>CRM para psicólogos &middot; Hecho en España</span>
        </div>
      </div>
    </footer>
  );
}
