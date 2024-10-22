import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-montserrat',
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-open-sans',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${montserrat.variable} font-opensans`}>
        {children}
      </body>
    </html>
  );
}
