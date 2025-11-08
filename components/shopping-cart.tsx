"use client"

import { useCart } from "@/context/cart-context"
import { motion, AnimatePresence } from "framer-motion"
import { X, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"

interface ShoppingCartProps {
  isOpen: boolean
  onClose: () => void
}

export function ShoppingCart({ isOpen, onClose }: ShoppingCartProps) {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 h-screen w-screen"
            style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
          />

          {/* Cart Panel */}
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="fixed right-0 top-0 h-screen w-full max-w-md bg-background border-l border-border z-50 flex flex-col shadow-2xl overflow-hidden"
            style={{ position: 'fixed', top: 0, right: 0, height: '100vh', maxHeight: '100vh' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border bg-card/50">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Cart</h2>
                {items.length > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-2 px-2.5 py-0.5 bg-accent text-accent-foreground text-sm font-semibold rounded-full"
                  >
                    {items.length}
                  </motion.span>
                )}
              </div>
              <button onClick={onClose} className="p-2 hover:bg-primary/10 rounded-lg transition-colors duration-300">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto overscroll-contain p-6 space-y-4">
              {items.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center h-full text-center"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ShoppingBag className="w-20 h-20 text-foreground/20 mb-4 mx-auto" />
                  </motion.div>
                  <p className="text-foreground/60 text-lg font-medium">Your cart is empty</p>
                  <p className="text-foreground/40 text-sm mt-2">Add items to get started</p>
                </motion.div>
              ) : (
                <AnimatePresence>
                  {items.map((item, idx) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20, x: -20 }}
                      animate={{ opacity: 1, y: 0, x: 0 }}
                      exit={{ opacity: 0, y: -20, x: 20 }}
                      transition={{ delay: idx * 0.05 }}
                      className="glass glass-sm p-4 flex gap-4 hover:bg-white/40 transition-all duration-300"
                    >
                      {/* Product Image */}
                      <div className="relative flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg?height=80&width=80&query=grocery"}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-lg"
                        />
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-accent-foreground text-xs font-bold rounded-full flex items-center justify-center"
                        >
                          {item.quantity}
                        </motion.span>
                      </div>

                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold line-clamp-2 text-foreground">{item.name}</h3>
                        <p className="text-primary font-bold text-lg">₹{item.price}</p>
                        <p className="text-foreground/60 text-sm">
                          Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-3">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                          >
                            <Minus className="w-4 h-4 text-foreground/70" />
                          </motion.button>
                          <span className="w-8 text-center font-medium text-foreground">{item.quantity}</span>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-primary/20 rounded-lg transition-colors duration-200"
                          >
                            <Plus className="w-4 h-4 text-foreground/70" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => removeItem(item.id)}
                            className="ml-auto p-1.5 hover:bg-destructive/10 rounded-lg transition-colors duration-200"
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="border-t border-border p-6 space-y-4 bg-card/30"
              >
                {/* Price Breakdown */}
                <div className="space-y-2">
                  <div className="flex justify-between text-foreground/70">
                    <span>Subtotal:</span>
                    <span>₹{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-foreground/70 text-sm">
                    <span>Delivery:</span>
                    <span className="text-accent font-semibold">Free</span>
                  </div>
                  <div className="border-t border-border pt-2 flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      ₹{total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/checkout"
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-xl font-semibold hover:shadow-xl transition-all duration-300 glow-teal"
                  >
                    Proceed to Checkout
                  </Link>
                </motion.div>

                {/* Clear Cart Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={clearCart}
                  className="w-full px-6 py-3 glass glass-hover rounded-xl font-semibold transition-all duration-300"
                >
                  Clear Cart
                </motion.button>

                {/* Continue Shopping */}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/shop"
                    onClick={onClose}
                    className="w-full inline-flex items-center justify-center px-6 py-3 text-primary font-semibold hover:text-accent transition-colors duration-300"
                  >
                    Continue Shopping
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
