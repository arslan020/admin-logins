import type { Metadata } from "next";
import "./globals.css";

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
