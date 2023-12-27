import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const nuni = Nunito_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en text-[.8rem]">
      <body className={nuni.className}>
        <div className="lg:grid lg:grid-cols-[20%_80%]">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
