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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Overpass+Mono:wght@300..700&family=Overpass:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <script
          src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
        ></script>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-Q1LVZ1EBVW"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-Q1LVZ1EBVW');`,
          }}
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
