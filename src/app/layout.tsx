import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./home/components/header";
import { ToastContainer } from "react-toastify";
import Footer from "./home/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
