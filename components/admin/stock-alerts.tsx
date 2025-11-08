"use client"

import { motion } from "framer-motion"
import { AlertTriangle, Package, TrendingDown } from "lucide-react"

const lowStockItems = [
  {
    id: "1",
    name: "Organic Tomatoes",
    currentStock: 5,
    minStock: 20,
    category: "Vegetables"
  },
  {
    id: "2", 
    name: "Greek Yogurt",
    currentStock: 12,
    minStock: 25,
    category: "Dairy"
  },
  {
    id: "3",
    name: "Fresh Spinach",
    currentStock: 8,
    minStock: 30,
    category: "Vegetables"
  }
]

export function StockAlerts() {
  return (
    <div className="glass glass-lg p-6">
      <div className="flex items-center gap-2 mb-6">
        <AlertTriangle className="w-5 h-5 text-amber-400" />
        <h3 className="text-xl font-bold">Stock Alerts</h3>
      </div>

      <div className="space-y-4">
        {lowStockItems.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="glass glass-hover p-4 border-l-4 border-amber-500/50"
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-amber-400">{item.name}</h4>
              <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded">
                {item.category}
              </span>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-foreground/70">
              <Package className="w-4 h-4" />
              <span>Current: {item.currentStock}</span>
              <span>•</span>
              <span>Min: {item.minStock}</span>
            </div>
            
            <div className="mt-2 w-full bg-white/10 rounded-full h-2">
              <div 
                className="h-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full"
                style={{ width: `${(item.currentStock / item.minStock) * 100}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full mt-4 px-4 py-3 glass glass-hover font-medium text-center"
      >
        Restock All Items
      </motion.button>
    </div>
  )
}