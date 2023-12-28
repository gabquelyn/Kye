import { Nunito_Sans } from "next/font/google";
import "./globals.css";


const nuni = Nunito_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en text-[.8rem]">
      <body className={nuni.className}>
        {children}
      </body>
    </html>
  );
}
