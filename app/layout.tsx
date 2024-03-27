import type { Metadata } from "next";
import { NavBar } from "@/components";
import {Footer} from "@/components";
import "./globals.css";
import { relative } from "path";



export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}