"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp } from "lucide-react"

const salesData = [
  { day: "Mon", sales: 1200 },
  { day: "Tue", sales: 1800 },
  { day: "Wed", sales: 1600 },
  { day: "Thu", sales: 2200 },
  { day: "Fri", sales: 2800 },
  { day: "Sat", sales: 3200 },
  { day: "Sun", sales: 2400 }
]

export function SalesChart() {
  const maxSales = Math.max(...salesData.map(d => d.sales))

  return (
    <div className="glass glass-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-5 h-5 text-primary" />
          <h3 className="text-xl font-bold">Weekly Sales</h3>
        </div>
        <div className="flex items-center gap-2 text-green-400">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">+12.5%</span>
        </div>
      </div>

      <div className="space-y-4">
        {salesData.map((data, index) => {
          const percentage = (data.sales / maxSales) * 100
          return (
            <motion.div
              key={data.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <span className="w-8 text-sm font-medium text-foreground/70">
                {data.day}
              </span>
              
              <div className="flex-1 relative">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.8, ease: "easeOut" }}
                  className="h-8 bg-gradient-to-r from-primary to-accent rounded-lg relative overflow-hidden"
                >
                  <div className="absolute inset-0 shimmer opacity-30" />
                </motion.div>
                
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 1 }}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-sm font-bold text-primary-foreground"
                >
                  ${data.sales}
                </motion.span>
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-sm">
        <span className="text-foreground/60">Total Weekly Sales:</span>
        <span className="font-bold text-primary">
          ${salesData.reduce((sum, d) => sum + d.sales, 0).toLocaleString()}
        </span>
      </div>
    </div>
  )
}