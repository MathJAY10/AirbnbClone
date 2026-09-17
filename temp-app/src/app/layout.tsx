import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10 - Serviced apartments for Rent in Candolim, Goa, India - Airbnb",
  description: "17 Sept 2026 · Entire serviced apartment · Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi for the perfect unwind.",
  openGraph: {
    title: "Serviced apartment in Candolim · ★4.95 · 1 bedroom · 1 bed · 1 bathroom",
    description: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
