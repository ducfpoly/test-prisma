import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import Header from "@/app/ui/header";
import Footer from "@/app/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "suzu-blog",
  description: "blog is awesome",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <main className="min-h-screen p-24 w-full">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}