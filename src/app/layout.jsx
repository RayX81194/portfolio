import { Inter } from "next/font/google";
import "./globals.css";

<<<<<<< HEAD
import Menu from "../components/menu/Menu"
import Footer from "../components/footer/Footer"
=======
import Menu from "@/components/menu/Menu"
import Footer from "@/components/footer/Footer"
>>>>>>> 60434b7195dd73ee0c0908ee8b0a0f54a6b725f7
import SmoothScrolling from "@/components/SmoothScrolling";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Manish",
  description: "Manish Phartiyal - A Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SmoothScrolling>
        <div className="min-h-screen flex flex-col justify-between">  
        <div>
        <Menu />
        {children}
        </div>
        <Footer />
        </div>
        </SmoothScrolling>
        </body>
    </html>
  );
}
