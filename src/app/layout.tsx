"use client";

import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { UserProvider } from "./contextProviders/UserProvider";


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
      <UserProvider initialUser={undefined} >
        <html lang="en">
          <body>{children}</body>
        </html>
      </UserProvider>
    </ClerkProvider>
  );
} 
