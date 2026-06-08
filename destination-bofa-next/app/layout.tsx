import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BofaChatbot from "@/components/BofaChatbot";

export const metadata: Metadata = {
  title: "The Destination at Bofa | Kilifi Luxury Beach Villas",
  description:
    "The Destination at Bofa offers Kilifi luxury beachfront villas with private pools, chef service, daily housekeeping, Wi-Fi, security, and accommodation rates.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <FloatingWhatsApp />
        <BofaChatbot />
      </body>
    </html>
  );
}