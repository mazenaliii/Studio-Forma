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
      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden; /* Prevent horizontal overflow */
        }
        * {
          box-sizing: border-box; /* Ensure consistent box model */
        }
      `}</style>
      <body className="bg-[#1D1104]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
