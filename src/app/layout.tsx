import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Topbar from "./components/topbar";

export const metadata: Metadata = {
  title: "Fortivo VPN",
  description: "Fortivo VPN",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} bg-black`}> 
      <head>
        <meta property="og:title" content="Fortivo VPN" />
        <meta property="og:description" content="Advanced encryption, blazing-fast speeds, and privacy protection. Fortivo VPN secures your digital freedom." />
        <meta property="og:url" content="https://fortivo.com/" />
        <meta property="og:type" content="website" />
  <meta property="og:image" content="/logo.svg" />
        <meta property="og:site_name" content="Fortivo VPN" />
        <meta property="og:locale" content="en_US" />
      </head>
      <body className="bg-black">
        <div className="min-h-screen w-full bg-black">
          <div className="sticky top-0 z-50">
            <Topbar />
          </div>
          <div className="flex flex-col justify-center items-center">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
