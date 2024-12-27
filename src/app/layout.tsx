import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "New Year 2025 Countdown",
  description: "Countdown to the New Year 2025! Find out how many days are left and set your resolutions for the new year.",
  keywords: "New Year 2025, countdown, new year resolution, new year celebration, how many days until 2025, new year's eve",
  robots: "index, follow",
  openGraph: {
    title: "New Year Countdown 2025",
    description: "Join the countdown to 2025! Stay up-to-date with how many days are left and set your New Year resolutions.",
  }  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
