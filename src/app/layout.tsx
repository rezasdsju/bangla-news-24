import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Footer from "@/components/Footer"
import { ToastContainer } from "react-toastify";
const notoSerifBengali = Noto_Serif_Bengali({

  subsets: ["latin", 'bengali'],
});



export const metadata: Metadata = {
  title: "Bangla News 24",
  description:"A demo online news portal for browsing categorized news and detailed news articles.",
  icons:{
    icon:'/logo.webp'
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      data-theme='light'
      lang="en"
      className={`${notoSerifBengali.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header></Header>
        <Marquee></Marquee>
        <main className="max-w-7xl mx-auto">
          {children}
        </main>
        <Footer></Footer>
        <ToastContainer />
      </body>
    </html>
  );
}
