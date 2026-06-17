import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wayanad Living - Hotels, Real Estate & Daily Updates",
  description: "Your complete guide to life in Wayanad - resorts, properties, news, events and more.",
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
