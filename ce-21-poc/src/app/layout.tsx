import type { Metadata } from "next";
import "./globals.css";
import localFont from '@next/font/local'

export const metadata: Metadata = {
  title: "Creative Euphoria 21 Art Studio",
  description: "Creative Euphoria Art Studio",
};

const NotoSans = localFont({
  src: [
    {
      path: '../../public/fonts/NotoSans-Light.woff2',
      weight: '400'
    },
    {
      path: '../../public/fonts/NotoSans-Medium.woff2',
      weight: '700'
    }
  ],
  variable: '--font-NotoSans'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
