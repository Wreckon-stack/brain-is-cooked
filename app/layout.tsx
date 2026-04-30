import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BRAIN IS COOKED",
  description: "erm. forgot what im meant to say..",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
