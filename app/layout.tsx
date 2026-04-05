import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ibmPlexSans, sourceSerif4 } from "./fonts";

export const metadata: Metadata = {
  title: "Julie | Portfolio",
  description: "Xiaojun (Julie) Huang - Backend · Systems · Practical AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${sourceSerif4.variable}`}
    >
      <body>
        <Navbar />
        <main className="site-main">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}