import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Speaky | Voice Agent Marketplace",
  description:
    "Discover, preview, and deploy intelligent voice agents for your business. Browse our marketplace of AI-powered voice agents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-bg-primary text-foreground">
        {children}
      </body>
    </html>
  );
}
