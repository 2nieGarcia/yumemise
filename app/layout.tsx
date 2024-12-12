import type { Metadata } from "next";
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[url('/img/background.jpg')] bg-cover bg-no-repeat">
        {children}
      </body>
    </html>
  );
}
