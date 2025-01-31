import "./globals.css"
import { Playfair_Display, Poppins } from "next/font/google"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ErrorBoundary from "./components/ErrorBoundary"
import { CartProvider } from "./contexts/CartContext"
import NewsletterPopup from "./components/NewsletterPopup"
import { Providers } from "./providers"
import type React from "react"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
})

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const metadata = {
  title: "LuxeBelle - Luxury Cosmetics",
  description: "Discover luxury cosmetics and beauty products at LuxeBelle.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${playfairDisplay.variable} ${poppins.variable} font-sans`}>
        <Providers>
          <CartProvider>
            <Header />
            <ErrorBoundary>{children}</ErrorBoundary>
            <Footer />
            <NewsletterPopup />
          </CartProvider>
        </Providers>
      </body>
    </html>
  )
}

