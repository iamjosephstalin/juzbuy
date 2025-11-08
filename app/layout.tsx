import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { CartProvider } from "@/context/cart-context"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Juzbuy - Futuristic Grocery Shopping",
  description: "Fresh, Fast, and Futuristic Grocery Delivery at Your Doorstep",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <CartProvider>
          <div className="min-h-screen relative">
            {/* Global Background */}
            <div className="fixed inset-0 -z-50">
              {/* Main gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
              
              {/* Elegant mesh gradient */}
              <div className="absolute inset-0 opacity-30">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-orange-100/20 to-transparent" 
                     style={{
                       background: `radial-gradient(ellipse at top left, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
                                    radial-gradient(ellipse at bottom right, rgba(34, 139, 34, 0.08) 0%, transparent 50%),
                                    radial-gradient(ellipse at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%)`
                     }} />
              </div>
              
              {/* Floating geometric shapes */}
              <div className="absolute top-20 right-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-200/40 to-orange-300/20 backdrop-blur-sm border border-orange-200/30 animate-pulse"
                   style={{ transform: "rotate(15deg)" }} />
              
              <div className="absolute bottom-32 left-16 w-24 h-24 rounded-2xl bg-gradient-to-br from-green-200/40 to-green-300/20 backdrop-blur-sm border border-green-200/30 animate-pulse"
                   style={{ transform: "rotate(-20deg)", animationDelay: "2s" }} />
              
              <div className="absolute top-1/2 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200/50 to-orange-200/30 backdrop-blur-sm border border-yellow-200/40 animate-pulse"
                   style={{ animationDelay: "4s" }} />
            </div>
            
            <div className="relative z-10 min-h-screen bg-background/80 backdrop-blur-sm text-foreground">
              {children}
            </div>
            
            {/* WhatsApp Widget - Outside main content for true viewport positioning */}
            <FloatingWhatsApp 
              phoneNumber="+919876543210"
              businessName="Fresh Groceries Store"
              welcomeMessage="Hello! I'm interested in ordering fresh groceries. Can you help me?"
            />
          </div>
        </CartProvider>
        {/* Analytics component removed due to build error */}
      </body>
    </html>
  )
}
