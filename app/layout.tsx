import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yeico Zúñiga | Desarrollo Web y Landing Pages para Negocios",
  description:
    "Portfolio de Yeico Zúñiga, desarrollador web en formación. Diseño páginas web modernas, landing pages responsive y sitios para negocios con enfoque en claridad, contacto y presencia profesional.",
  keywords: [
    "Yeico Zúñiga",
    "desarrollador web",
    "desarrollo web",
    "landing pages",
    "páginas web para negocios",
    "diseño web responsive",
    "frontend trainee",
    "portfolio desarrollador web",
    "sitios web para empresas",
  ],
  openGraph: {
    title: "Yeico Zúñiga | Desarrollo Web y Landing Pages",
    description:
      "Diseño páginas web modernas y landing pages responsive para negocios que quieren verse profesionales y recibir más consultas.",
    type: "website",
    locale: "es_CL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}