import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Portfólio | Luis F. Leal",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" >
      {children}
    </html>
  );
}
