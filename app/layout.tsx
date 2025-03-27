import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { ourFileRouter } from "./api/uploadthing/core";
import { extractRouterConfig } from "uploadthing/server";

const outfit = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uscreen | Premium Digital Assets for Creators & Developers",
  description:
    "Discover, buy, and sell high-quality UI kits, templates, icons, and more. Uscreen is the go-to marketplace for digital creators, developers, and designers.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        {/* UploadThing SSR Plugin */}
        <NextSSRPlugin routerConfig={extractRouterConfig(ourFileRouter)} />

        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Notifications */}
        <Toaster richColors theme="light" closeButton />
      </body>
    </html>
  );
}
