import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import MDXProvider from "../components/mdx-provider";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body className={`${inter.className} antialiased bg-gray-100 text-gray-900`}>
          <MDXProvider>
            <div className="max-w-screen-xl mx-auto flex flex-col p-4 sm:p-6 lg:p-8">
              <Header />
              <main className="flex-grow pt-6">{children}</main>
              <Footer />
              <Analytics />
            </div>
          </MDXProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
