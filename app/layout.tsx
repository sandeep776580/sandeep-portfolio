import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { ThemeProvider } from "../src/providers/theme-provider";

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

export const metadata: Metadata = {
  title: "Sandeep | Software Engineer",
  description:
    "Software Engineer, AI Developer, Full Stack Developer and Data Analyst Portfolio",
};

export const openGraph = {
  title: "Sandeep | Software Engineer",
  description: "Building intelligent applications, scalable systems, data-driven solutions.",
  url: "https://example.com",
  siteName: "Sandeep Portfolio",
  images: [
    {
      url: "https://example.com/og-image.png",
      width: 1200,
      height: 630,
      alt: "Sandeep Portfolio",
    },
  ],
  locale: "en_US",
  type: "website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="google-site-verification" content="" />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script id="gtag-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });`}
            </Script>
          </>
        )}
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
        <div id="cursor-root" />
      </body>
    </html>
  );
}