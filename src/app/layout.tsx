"use client";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UserProvider } from "./contextProviders/UserProvider";
import { Toaster } from "react-hot-toast";


export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
        },
      }}
    >
      <UserProvider >
        <html lang="en">
          <body>
            <Toaster position="top-center" reverseOrder={false} />
            {children}</body>
        </html>
      </UserProvider>
    </ClerkProvider>
  );
} 