import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Manrope, Nunito_Sans } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-nunito-sans",
});

export const metadata = {
  title: "Circularity Centre Denmark",
  description: "Your gateway to circularity in Denmark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable} ${nunitoSans.variable}`}>
      <body className="font-manrope">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
