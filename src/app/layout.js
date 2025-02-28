import { Montserrat } from "next/font/google";
import "./globals.css";

const montserratSans = Montserrat({
  variable: "--font-montserrat-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "View Transitions Demo Next.js",
  description: "View Transitions Demo Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${montserratSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
