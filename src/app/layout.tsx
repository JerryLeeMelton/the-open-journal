import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/footer/Footer"
import ThemeContextProvider from "@/context/ThemeContext"
import ThemeProvider from "@/providers/ThemeProvider"

export const metadata: Metadata = {
  title: "The Open Journal",
  description: "The online journal of Jerry Lee Melton",
}

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
