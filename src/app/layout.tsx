import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";
import NavBar from "./template/NavBar";

const leagueSpartan = League_Spartan({
  variable: "--font-league-spartan",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web U",
  description: "Perusahaan Pembuat Website Untuk Usaha UMKM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${leagueSpartan.variable} antialiased`}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
