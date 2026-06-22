
import Script from "next/script";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import { SITE_URL } from "@/lib/site-config";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hibbert Advisory Group",
    template: "%s | Hibbert Advisory Group",
  },
  description:
    "Executive advisory for product-led growth, revenue diagnostics, AI opportunity assessment, and fractional product leadership.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      {children}
   
 <Script
  src="https://www.googletagmanager.com/gtag/js?id=G-Y9XXEWWY04"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'G-Y9XXEWWY04');
  `}
</Script>
      </body>
    </html>

  );
}
