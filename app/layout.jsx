import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: '%s - iGreen',
    default: 'iGreen',
  },
  description:
    "The app provides the details about the trees in our college campus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Nav />
          <div>{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
