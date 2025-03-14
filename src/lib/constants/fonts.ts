import localFont from "next/font/local";

export const figtree = localFont({
  src: [
    {
      path: "../../../public/fonts/figtree/Figtree-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/figtree/Figtree-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../../public/fonts/figtree/Figtree-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../../public/fonts/figtree/Figtree-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/figtree/Figtree-Black.ttf",
      weight: "800",
    },
  ],
  variable: "--font-poppins",
});
