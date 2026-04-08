import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Blog Soumi | CRM para Psicólogos — Recursos y Guías",
    template: "%s | Blog Soumi",
  },
  description:
    "Blog de Soumi, el CRM para psicólogos en España. Artículos sobre gestión de consulta, herramientas terapéuticas, marketing para psicólogos y tendencias en psicología digital.",
  keywords: [
    "CRM para psicólogos",
    "software para psicólogos",
    "gestión consulta psicología",
    "marketing para psicólogos",
    "herramientas terapéuticas digitales",
    "diario terapéutico",
    "psicología online España",
    "captar pacientes psicólogo",
    "facturación psicólogos",
    "tecnología salud mental",
  ],
  metadataBase: new URL("https://blog.soumi.io"),
  openGraph: {
    siteName: "Blog Soumi — CRM para Psicólogos",
    locale: "es_ES",
    type: "website",
  },
  alternates: {
    canonical: "https://blog.soumi.io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/circles.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/circles.svg" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K8PN132Y5B"></script>
        {/* GA4 config - static trusted content, no XSS risk */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K8PN132Y5B');
        `}} />
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
