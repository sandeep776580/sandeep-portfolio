import type { Metadata } from "next";
import "./globals.css";
import Script from 'next/script';
import { ThemeProvider } from "../src/providers/theme-provider";

export const metadata: Metadata = {
  title: "Sandeep | Software Engineer & AI Developer",
  description:
    "Software Engineer, AI Developer, Full Stack Developer and Data Analyst, Data Engineer Portfolio",
  openGraph: { title: "Sandeep | Software Engineer & AI Developer", description: "Building intelligent applications, scalable systems, and data-driven solutions.", type: "website" },
  twitter: { card: "summary", title: "Sandeep | Software Engineer", description: "AI, full-stack, and data-driven products." },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
