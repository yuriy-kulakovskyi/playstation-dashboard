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
          <div dir="rtl">
            <div className="bg-gray-500 h-[56px] w-[2px] rounded-s-lg fixed top-[50%] left-[120px]"></div>
          </div>
          <div className="flex flex-col min-w-[90vw]">
            {children}
          </div>
        </Sidebar>
      </body>
    </html>
  );
}
