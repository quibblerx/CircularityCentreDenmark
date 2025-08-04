import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
