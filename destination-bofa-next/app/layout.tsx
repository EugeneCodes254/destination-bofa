import type { Metadata } from "next";
import "./globals.css";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BofaChatbot from "@/components/BofaChatbot";

export const metadata: Metadata = {
  title: "The Destination@Bofa | Luxury Beach Villas Kilifi",
  description:
    "The Destination@Bofa offers Kilifi luxury beachfront villas with private pools, chef service, daily housekeeping, Wi-Fi, security, fresh water supply, backup power, and accommodation rates.",
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