import { Montserrat } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';

// either Static metadata
export const metadata: Metadata = {
  title: 'Akashaf | Front End Developer',
  description: 'Akashaf Khomarudin | Front End Developer',
}
const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
