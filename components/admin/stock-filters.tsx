"use client"

import { motion } from "framer-motion"

interface StockFiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

const categories = [
  "all",
  "Vegetables",
  "Fruits",
  "Dairy", 
  "Grains & Cereals",
  "Meat & Fish",
  "Pantry",
  "Beverages",
  "Snacks",
  "Frozen",
  "Household"
]

export function StockFilters({ selectedCategory, onCategoryChange }: StockFiltersProps) {
  return (
    <div className="glass glass-lg p-6">
      <h3 className="text-lg font-bold mb-4">Filters</h3>
      
      <div>
        <label className="block text-sm font-semibold mb-3">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => onCategoryChange(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`
                px-4 py-2 rounded-lg font-medium transition-all duration-300
                ${selectedCategory === category
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                  : "glass glass-hover text-foreground/70"
                }
              `}
            >
              {category === "all" ? "All Categories" : category}
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  )
}