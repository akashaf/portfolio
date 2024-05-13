import { Analytics } from '@vercel/analytics/react';
import { Montserrat } from 'next/font/google';
import '@mantine/core/styles.css';
import './globals.css';
import { Metadata } from 'next';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { ReactNode } from 'react';

// either Static metadata
export const metadata: Metadata = {
  title: 'Akashaf | Front End Developer',
  description: 'Akashaf Khomarudin | Front End Developer',
};
const montserrat = Montserrat({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no" />
      </head>
      <body className={montserrat.className}>
        <MantineProvider>
          <main className="p-4">{children}</main>
          <Analytics />
        </MantineProvider>
      </body>
    </html>
  );
}
