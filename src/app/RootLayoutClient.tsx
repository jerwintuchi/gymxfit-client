import { Metadata } from "next";
import RootLayoutClient from "./RootLayoutClient";

export const metadata: Metadata = {
  title: "Gymxfit",
  description: "Built by pure Strength.",
  /*{icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },}*/
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <RootLayoutClient>
      {children}
    </RootLayoutClient>
  );
}
