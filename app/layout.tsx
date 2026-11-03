import './globals.css';
import type { Metadata } from 'next';
import { Fraunces, Inter, Manrope } from 'next/font/google';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
  axes: ['opsz', 'SOFT'],
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-nav',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oratorsclub.mjcet.ac.in'),
  title: "Orators' Club MJCET — Where Voices Rise. Leaders Are Born.",
  description:
    "The Orators' Club at MJCET, Department of English — empowering speakers with confidence, eloquence, and influence since 2003.",
  openGraph: {
    title: "Orators' Club MJCET",
    description: "Where Voices Rise. Leaders Are Born.",
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable} ${manrope.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
