import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devenock.co.ke"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Enock Omondi",
    template: "%s | Enock Omondi",
  },
  description: "FullStack Developer",
  icons: {
    icon: [
      {
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" className="dark">
        <body
          className={`${inter.className} min-h-screen antialiased bg-background text-foreground`}
        >
            <Header />
          <div className="mx-auto flex w-full max-w-screen-xl flex-col px-4 py-4 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <Analytics />
        </body>
      </html>
    </ViewTransitions>
  );
}
