import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://inside-muay-thai-piracicaba.coabruno0.chatgpt.site"),
  title: "Inside Muay Thai Piracicaba | Aula Experimental Grátis",
  description:
    "Muay Thai adulto, infantil e Personal Fight em Piracicaba. Conheça a Inside Bruno Marques e agende sua aula experimental grátis.",
  keywords: [
    "Muay Thai Piracicaba",
    "academia de Muay Thai",
    "Muay Thai infantil Piracicaba",
    "Personal Fight Piracicaba",
    "Inside Muay Thai",
  ],
  alternates: { canonical: "/" },
  icons: {
    icon: "/academia/5.jpg",
    shortcut: "/academia/5.jpg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
