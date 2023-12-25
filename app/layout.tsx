import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en text-[.8rem]">
      <body className={inter.className}>
        <div className="grid grid-cols-[20%_80%]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
