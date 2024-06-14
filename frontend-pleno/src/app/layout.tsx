import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Flow Lab Tech",
  description: "Teste Técnico - Desenvolvedor Frontend Pleno",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
