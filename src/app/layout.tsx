import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
