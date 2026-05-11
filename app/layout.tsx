import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f0f9ff",
};

export const metadata: Metadata = {
  title: "Heston Automotive – Admin Portal",
  description: "Heston Automotive admin portal — quick links to dealer, garage, video, and appraisal apps.",
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
