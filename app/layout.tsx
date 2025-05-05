import type React from "react";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FartLabs Computer",
  description: "Claim your free FartLabs Computer today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="https://fartlabs.org/fl-logo.png" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
