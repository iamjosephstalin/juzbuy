"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const categories = [
  { name: "Vegetables", emoji: "🥬" },
  { name: "Fruits", emoji: "🍎" },
  { name: "Spices", emoji: "🌶️" },
  { name: "Grains", emoji: "🌾" },
  { name: "Dairy", emoji: "🥛" },
  { name: "Organic", emoji: "🍃" },
]

export function CategoryPills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-wrap gap-3 justify-center"
    >
      {categories.map((cat, idx) => (
        <motion.div
          key={cat.name}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.05 }}
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glass-hover border border-orange-200/30 hover:border-orange-400/50 transition-all duration-300 glow-warm"
            style={{
              boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)",
              transition: "box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(255, 140, 0, 0.6)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(255, 140, 0, 0.3)"
            }}
          >
            <span className="text-xl">{cat.emoji}</span>
            <span className="text-sm font-medium text-foreground/80">{cat.name}</span>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  )
}
