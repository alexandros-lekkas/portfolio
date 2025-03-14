import "./globals.css";

import { Metadata } from "next";
import { ThemeProvider } from "@/providers/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";

import { figtree } from "@/lib/constants/fonts";

import Navbar from "@/components/layout/navbar/navbar";

export const metadata: Metadata = {
  metadataBase: new URL("alexandroslekkas.com"),
  title: {
    default: "Alexandros Lekkas",
    template: `%s | Alexandros Lekkas`,
  },
  description: "My personal website.",
  openGraph: {
    title: "Alexandros Lekkas",
    description: "My personal website.",
    url: "https://alexandroslekkas.com",
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
      <body className="bg-background text-foreground max-w-2xl mx-auto py-12 px-5">
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
