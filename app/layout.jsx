import { Quicksand } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/navbar";
import Footer from "@/components/sections/footer";
import SmoothScrollProvider from "@/components/shared/smoothScrollProvider";

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
      <body className={`${quicksand.variable} antialiased w-full overflow-x-hidden text-primary`}>
        <SmoothScrollProvider>
          <Navbar />

          <main className="mx-6 md:mx-20">
            {children}
          </main>

          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
