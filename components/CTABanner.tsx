export default function CTABanner() {
  return (
    <div className="cta-banner">
      <div className="relative z-10">
        <p className="text-sm font-medium uppercase tracking-widest text-soumi-gray/80 mb-2">
          Terapia grupal accesible
        </p>
        <h3 className="text-2xl font-bold text-soumi-charcoal mb-3">
          Empieza tu proceso terapéutico hoy
        </h3>
        <p className="text-soumi-gray mb-6 max-w-md mx-auto">
          Seguro, flexible y guiado por profesionales certificados.
        </p>
        <a
          href="https://soumi.io"
          className="cta-button"
        >
          Conocer Soumi
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </div>
  );
}
