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
    default: "Blog Soumi | Charlas Grupales Online para tu Bienestar",
    template: "%s | Blog Soumi",
  },
  description:
    "Charlas grupales online accesibles y seguras. Artículos sobre salud mental, bienestar emocional, grupos de apoyo y crecimiento personal. Cuidar tu mente no debería ser un lujo.",
  keywords: [
    "charlas grupales online",
    "grupos de apoyo emocional",
    "bienestar emocional",
    "salud mental accesible",
    "apoyo emocional online",
    "grupos de apoyo online",
    "salud mental jóvenes",
    "ansiedad y estrés",
    "crecimiento personal",
    "comunidad de apoyo",
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
