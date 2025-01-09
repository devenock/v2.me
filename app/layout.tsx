import type { Metadata } from "next";
import "../styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from "@vercel/analytics/react";
import MDXProvider from "../components/mdx-provider";

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
        <body className="antialiased bg-gray-100">
          <MDXProvider>
            <div className="max-w-screen-xl mx-auto flex flex-col p-4 sm:p-6 lg:p-8">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
              <Analytics />
            </div>
          </MDXProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
