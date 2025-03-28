import { Metadata } from "next";
import { Figtree } from "next/font/google";

import { ThemeProvider } from "@/lib/providers/theme-provider";

import Navbar from "@/components/layout/navbar/navbar";
import { TooltipProvider } from "@/components/ui/tooltip";

import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alexandroslekkas.com"),
  title: {
    default: "Alexandros Lekkas",
    template: `%s | Alexandros Lekkas`,
  },
  description: "My personal website.",
  openGraph: {
    title: "Alexandros Lekkas",
    description: "My personal website.",
    url: "alexandroslekkas.com",
    siteName: "Alexandros Lekkas",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Alexandros Lekkas",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.className} suppressHydrationWarning>
      <body className="bg-background text-foreground max-w-3xl mx-auto py-12 px-5">
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
