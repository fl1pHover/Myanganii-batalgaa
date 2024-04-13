import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Navbar from "@/components/ui/Navbar";
import ScrollTop from "@/components/ui/ScrollTop";

import "@mantine/core/styles.css";
const inter = Inter({ subsets: ["latin"] });
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const header = headers();
  const nextUrl = header.get("referer");

  const admin = nextUrl?.includes("/admin") ?? false;

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <MantineProvider>
          <Suspense fallback={<Loading />}>
            {!admin && <Navbar />}
            <div className="relative">{children}</div>
            {!admin && <ScrollTop />}
            {!admin && <Footer />}
          </Suspense>
        </MantineProvider>
      </body>
    </html>
  );
}
