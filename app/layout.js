import React from "react";
import "./globals.css";
import Navbar from "./components/main/Navbar";

export const metadata = {
  title: "Studio Forma",
  description: "Were're the future of interior designs!"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#1D1104]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
