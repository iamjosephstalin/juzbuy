"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle, X, Phone, Clock } from "lucide-react"
import { useCart } from "@/context/cart-context"

interface FloatingWhatsAppProps {
  phoneNumber?: string
  businessName?: string
  welcomeMessage?: string
}

export function FloatingWhatsApp({ 
  phoneNumber = "+919876543210", // Replace with actual business number
  businessName = "Fresh Groceries Store",
  welcomeMessage = "Hi! I'm interested in your products. Can you help me with my order?"
}: FloatingWhatsAppProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { items, total } = useCart()

  const generateWhatsAppMessage = (includeCart: boolean = false) => {
    let message = welcomeMessage
    
    if (includeCart && items.length > 0) {
      message += "\n\n*My Cart:*\n"
      items.forEach((item, index) => {
        message += `${index + 1}. ${item.name} - Qty: ${item.quantity} - ₹${item.price * item.quantity}\n`
      })
      message += `\n*Total: ₹${total.toFixed(2)}*`
      message += "\n\nPlease help me place this order."
    }
    
    return encodeURIComponent(message)
  }

  const openWhatsApp = (includeCart: boolean = false) => {
    const message = generateWhatsAppMessage(includeCart)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9998 }}
          />
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.div
        className="z-50"
        style={{ 
          position: 'fixed', 
          bottom: '24px', 
          right: '24px',
          zIndex: 9999
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
      >
        <AnimatePresence>
          {!isOpen && (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              onClick={() => setIsOpen(true)}
              className="relative group"
            >
              {/* Pulse animation */}
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20" />
              <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse opacity-30" />
              
              {/* Main button */}
              <div className="relative w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110">
                <MessageCircle className="w-8 h-8 text-white" fill="white" />
              </div>

              {/* Cart badge */}
              {items.length > 0 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
                >
                  {items.length}
                </motion.div>
              )}

              {/* Tooltip */}
              <div className="absolute bottom-20 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap">
                  Order via WhatsApp
                  <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800" />
                </div>
              </div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Expanded Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              className="w-80 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden border border-border"
              style={{ 
                position: 'fixed', 
                bottom: '100px', 
                right: '24px', 
                zIndex: 10000,
                maxHeight: 'calc(100vh - 140px)',
                overflowY: 'auto'
              }}
            >
              {/* Header */}
              <div className="bg-green-500 text-white p-4 relative">
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-4 right-4 p-1 hover:bg-white/20 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6" fill="white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{businessName}</h3>
                    <div className="flex items-center gap-2 text-sm opacity-90">
                      <div className="w-2 h-2 bg-green-300 rounded-full" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 space-y-4">
                <div className="text-sm text-foreground/70">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4" />
                    <span>Available: 9 AM - 10 PM</span>
                  </div>
                  <p>Get instant help with your orders and product inquiries!</p>
                </div>

                {/* Cart Summary */}
                {items.length > 0 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg border border-orange-200 dark:border-orange-800">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">Your Cart</h4>
                    <div className="space-y-1 text-sm">
                      {items.slice(0, 3).map((item) => (
                        <div key={item.id} className="flex justify-between text-foreground/70">
                          <span>{item.name} x{item.quantity}</span>
                          <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                      {items.length > 3 && (
                        <div className="text-foreground/50 text-xs">
                          +{items.length - 3} more items...
                        </div>
                      )}
                      <div className="border-t border-orange-200 dark:border-orange-800 pt-1 mt-2 font-semibold text-orange-800 dark:text-orange-200">
                        Total: ₹{total.toFixed(2)}
                      </div>
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="space-y-3">
                  {items.length > 0 && (
                    <motion.button
                      onClick={() => openWhatsApp(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order My Cart via WhatsApp
                    </motion.button>
                  )}
                  
                  <motion.button
                    onClick={() => openWhatsApp(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-white dark:bg-gray-700 border-2 border-green-500 text-green-600 dark:text-green-400 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Chat with Us
                  </motion.button>
                </div>

                {/* Close option */}
                <button
                  onClick={() => setIsVisible(false)}
                  className="w-full text-center text-xs text-foreground/50 hover:text-foreground/70 py-2"
                >
                  Hide WhatsApp Widget
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}