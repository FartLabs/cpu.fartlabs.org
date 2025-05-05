import type React from "react";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { recaptchaSiteKey } from "@/lib/recaptcha";
import "./globals.css";

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
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        ></script>
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
