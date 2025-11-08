"use client"

import { motion } from "framer-motion"

const items = [
  { emoji: "🍚", delay: 0, size: "text-5xl", product: { id: "grain-001", name: "Premium Basmati Rice", price: 24.99 } },
  { emoji: "🥕", delay: 0.2, size: "text-6xl", product: { id: "veg-003", name: "Organic Baby Carrots", price: 2.79 } },
  { emoji: "🌶️", delay: 0.4, size: "text-4xl", product: { id: "pantry-003", name: "Chili Peppers", price: 1.99 } },
  { emoji: "🍅", delay: 0.6, size: "text-5xl", product: { id: "veg-002", name: "Fresh Red Tomatoes", price: 3.99 } },
  { emoji: "🥦", delay: 0.8, size: "text-6xl", product: { id: "veg-004", name: "Fresh Broccoli Crowns", price: 4.29 } },
  { emoji: "🧅", delay: 1, size: "text-5xl", product: { id: "veg-005", name: "Yellow Onions", price: 2.49 } },
]

export function FloatingItems() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div className="relative w-full h-96">
        {items.map((item, idx) => (
          <motion.div
            key={idx}
            className={`absolute ${item.size} cursor-pointer group`}
            initial={{
              x: Math.random() * 200 - 100,
              y: -150,
              opacity: 0,
              scale: 0.3,
              rotate: 0,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 1, 0],
              scale: [0.3, 1, 0.9, 0.3],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              delay: item.delay,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              times: [0, 0.2, 0.8, 1],
            }}
            style={{
              left: `${idx * 15 + 10}%`,
              filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))",
            }}
            whileHover={{
              scale: 1.2,
              rotate: 15,
              filter: "drop-shadow(0 8px 20px rgba(255, 140, 0, 0.4))",
            }}
            onClick={() => window.location.href = `/product/${item.product.id}`}
          >
            <div className="relative">
              {item.emoji}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                  {item.product.name} - ${item.product.price}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
