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
    default: "Blog Soumi | Terapia Grupal Online Accesible y Segura",
    template: "%s | Blog Soumi",
  },
  description:
    "Terapia grupal online económica y segura. Artículos sobre salud mental accesible, terapia barata, bienestar emocional y grupos de apoyo online.",
  keywords: [
    "terapia barata",
    "terapia online económica",
    "terapia grupal online",
    "psicólogo online barato",
    "grupos de apoyo online",
    "salud mental accesible",
    "terapia de grupo",
    "chat terapéutico",
    "terapia accesible",
    "bienestar emocional",
  ],
  metadataBase: new URL("https://blog.soumi.io"),
  openGraph: {
    siteName: "Blog Soumi",
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
      </head>
      <body className={`${poppins.variable} font-poppins antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
