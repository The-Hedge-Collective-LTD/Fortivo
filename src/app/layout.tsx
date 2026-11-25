import "@/styles/globals.css";

import { type Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Topbar from "./components/topbar";

export const metadata: Metadata = {
  title: "Fortivo VPN",
  description: "Fortivo VPN",
  icons: [
    { rel: "icon", url: "/favicon.ico", sizes: "32x32" },
    { rel: "icon", url: "/favicon.png", type: "image/png", sizes: "623x623" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
  ],
};

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${interTight.variable} bg-[#05070a]`}
    >
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=clash-display@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="Fortivo VPN" />
        <meta
          property="og:description"
          content="Advanced encryption, blazing-fast speeds, and privacy protection. Fortivo VPN secures your digital freedom."
        />
        <meta property="og:url" content="https://fortivo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.svg" />
        <meta property="og:site_name" content="Fortivo VPN" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body className={`${interTight.className} bg-[#05070a] font-sans antialiased`}>
        <div className="min-h-screen w-full bg-[#05070a]">
          <div className="sticky top-0 z-50">
            <Topbar />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
