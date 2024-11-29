import type { Metadata } from "next";
import Sidebar from "./ui/sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Playstation Dashboard",
  description: "A dashboard for PlayStation fans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Sidebar>
          {children}
        </Sidebar>
      </body>
    </html>
  );
}
