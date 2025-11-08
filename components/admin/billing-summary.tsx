"use client"

import { motion } from "framer-motion"
import { DollarSign, Receipt, TrendingUp } from "lucide-react"

export function BillingSummary() {
  const todayStats = {
    sales: 2450.75,
    bills: 18,
    avgBill: 136.15
  }

  return (
    <div className="flex items-center gap-4">
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="glass glass-sm px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-primary">
          <DollarSign className="w-4 h-4" />
          <span className="text-sm font-medium">Today's Sales</span>
        </div>
        <div className="text-xl font-bold">₹{todayStats.sales}</div>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="glass glass-sm px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-accent">
          <Receipt className="w-4 h-4" />
          <span className="text-sm font-medium">Bills Generated</span>
        </div>
        <div className="text-xl font-bold">{todayStats.bills}</div>
      </motion.div>
      
      <motion.div
        whileHover={{ scale: 1.05, y: -2 }}
        className="glass glass-sm px-4 py-3 cursor-pointer"
      >
        <div className="flex items-center gap-2 text-primary">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm font-medium">Avg Bill</span>
        </div>
        <div className="text-xl font-bold">₹{todayStats.avgBill}</div>
      </motion.div>
    </div>
  )
}