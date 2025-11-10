import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { AudioProvider } from "@/components/AudioContext";
import MusicControl from "@/components/MusicControl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triển Lãm Tiền Tệ Việt Nam",
  description: "Khám phá hành trình phát triển của tiền tệ Việt Nam qua các thời kỳ lịch sử",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <AudioProvider>
          {children}
          <MusicControl />
        </AudioProvider>
        <Analytics />
      </body>
    </html>
  );
}
