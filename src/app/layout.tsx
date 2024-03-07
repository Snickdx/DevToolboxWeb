import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev Toolbox",
  description: "Useful tools for developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'/>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#6366f1" />
          <link rel="manifest" href="/manifest.json" />
        </head>
        <body className={inter.className}>
          <div className={"w-full h-screen"}>{children}</div>
        </body>
      </html>
    </ClerkProvider>
  );
}
