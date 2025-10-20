import localFont from "next/font/local";

export const ubuntu = localFont({
  src: [
    {
      path: "./Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Ubuntu-Medium.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-ubuntu",
});
