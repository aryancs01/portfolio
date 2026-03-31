import Image from "next/image";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aryansaxena.vercel.app"),
  title: "Aryan Saxena",
  description: "Backend Developer",
  openGraph: {
    title: "Aryan Saxena",
    description: "Backend Developer",
    url: "https://aryansaxena.vercel.app",
    siteName: "Aryan Saxena Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Saxena",
    description: "Backend Developer",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-mono relative">
        {/* Saturn decoration - top left corner with 70% visibility */}
        <Image
          src="/saturn.webp"
          alt="Saturn decoration"
          width={400}
          height={400}
          className="absolute top-0 left-0 z-0 pointer-events-none opacity-80"
          style={{
            marginTop: "-20px",
            marginLeft: "-120px",
          }}
          priority
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
