"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingCart, Search, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import { useCart } from "@/context/cart-context"
import { ShoppingCart as ShoppingCartComponent } from "./shopping-cart"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { itemCount, isLoading, isAddingToCart } = useCart()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Shop", href: "/shop" },
    { name: "Offers", href: "/offers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Admin", href: "/admin" },
  ]

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 glass backdrop-blur-xl border-b border-white/20"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)"
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg transition-all glow-warm"
                style={{
                  boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255, 140, 0, 0.6)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255, 140, 0, 0.3)"
                }}
              />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
                Juzbuy
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-foreground/70 hover:text-orange-600 transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-card rounded-lg transition-colors duration-300 hidden sm:block">
                <Search className="w-5 h-5 text-foreground/70" />
              </button>
              <motion.button
                onClick={() => setIsCartOpen(true)}
                className="p-2 hover:bg-card rounded-lg transition-colors duration-300 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={isLoading}
              >
                <ShoppingCart className={`w-5 h-5 ${isAddingToCart ? 'animate-pulse text-orange-500' : 'text-foreground/70'}`} />
                {isLoading ? (
                  <div className="absolute top-1 right-1 w-3 h-3 border border-orange-500 border-t-transparent rounded-full animate-spin" />
                ) : itemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-1 right-1 w-5 h-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                  >
                    {itemCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-card rounded-lg transition-colors duration-300"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4 space-y-2"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 text-foreground/70 hover:text-primary hover:bg-card rounded-lg transition-colors duration-300 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Shopping Cart Sidebar */}
      <ShoppingCartComponent isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
