// "use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import Navbar from "@/components/ui/Navbar";
import ScrollTop from "@/components/ui/ScrollTop";

import "@mantine/core/styles.css";
const inter = Inter({ subsets: ["latin"] });
import Footer from "@/components/ui/Footer";
import { Suspense } from "react";
import Loading from "./loading";
import Provider from "@/components/Provider";
import { ColorSchemeScript } from "@mantine/core";

export const metadata = {
  title: "Мянганы баталгаа",
  description: "Мянганы баталгаа ХХК",
};

export default async function RootLayout({ children }) {
  const header = headers();
  const nextUrl = header.get("referer");
  const admin = nextUrl?.includes("/admin") ?? false;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Suspense fallback={<Loading />}>
            {/* <main className={!admin ? "app" : ""}>
              {!admin && <Navbar />}
              {children}

              {!admin && <ScrollTop />}
              {!admin && <Footer />}
            </main> */}
            <main className={"app"}>
              <Navbar />
              {children}
              <ScrollTop />
              <Footer />
            </main>
          </Suspense>
        </Provider>
      </body>
    </html>
  );
}
