"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ShoppingCart, Star } from "lucide-react"
import { useCart } from "@/context/cart-context"
import Link from "next/link"
import { useState } from "react"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  rating: number
  category: string
  delay?: number
}

export function ProductCard({ id, name, price, image, rating, category, delay = 0 }: ProductCardProps) {
  const { addToCart, isAddingToCart } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault()
    try {
      await addToCart({
        id,
        name,
        price,
        image,
        quantity: 1,
      })
      setIsAdded(true)
      setTimeout(() => setIsAdded(false), 2000)
    } catch (error) {
      console.error('Failed to add item to cart:', error)
    }
  }

  return (
    <Link href={`/product/${id}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        whileHover={{ y: -8 }}
        className="group relative bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-all duration-300 cursor-pointer h-full"
      >
        {/* Image Container */}
        <div className="relative h-48 bg-muted overflow-hidden">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex justify-between items-start gap-2">
            <div>
              <p className="text-xs text-primary font-semibold uppercase tracking-wide">{category}</p>
              <h3 className="text-sm font-semibold text-foreground line-clamp-2 mt-1">{name}</h3>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-3.5 h-3.5 ${i < Math.floor(rating) ? "fill-accent text-accent" : "text-border"}`}
                />
              ))}
            </div>
            <span className="text-xs text-foreground/60 ml-1">{rating.toFixed(1)}</span>
          </div>

          {/* Price and Button */}
          <div className="flex justify-between items-center pt-2 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">₹{price}</p>
            </div>
            <motion.button
              whileHover={{ scale: isAddingToCart ? 1 : 1.1 }}
              whileTap={{ scale: isAddingToCart ? 1 : 0.95 }}
              onClick={handleAddToCart}
              disabled={isAddingToCart}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isAdded ? "bg-accent text-accent-foreground" : 
                isAddingToCart ? "bg-gray-400 text-gray-600 cursor-not-allowed" :
                "bg-primary text-primary-foreground hover:shadow-lg"
              }`}
            >
              {isAddingToCart ? (
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <ShoppingCart className="w-4 h-4" />
              )}
            </motion.button>
          </div>

          {/* Added notification */}
          {isAdded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="text-xs text-accent font-semibold text-center"
            >
              Added to cart!
            </motion.div>
          )}
        </div>

        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
      </motion.div>
    </Link>
  )
}
