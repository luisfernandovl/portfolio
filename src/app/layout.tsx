import type { Metadata } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Luis F Leal | Portfólio',
  description: 'Venha conhecer alguns dos meus projetos neste portfólio!',
  keywords: ['softwares', 'programas', 'programmer', 'programador', 'developer', 'desenvolvedor', 'portfolio', 'portfólio'],
  authors: [{ name: 'Luis Fernando Leal' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='pt-br' >
      {children}
    </html>
  );
}
