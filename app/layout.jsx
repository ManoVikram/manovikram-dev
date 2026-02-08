import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
})

export const metadata = {
  title: "Mano Vikram - Applied AI Engineer",
  description: "Applied AI engineer building scalable web and mobile products with Next.js, Flutter, Go, gRPC, Python AI microservices, and PostgreSQL.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${quicksand.variable} antialiased my-12 mx-6 md:my-9 md:mx-20`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
