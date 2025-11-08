"use client"

import { motion } from "framer-motion"
import { Search, Bell, User, Menu } from "lucide-react"
import { useState } from "react"

export function AdminHeader() {
  const [notifications] = useState(3)

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="h-16 glass backdrop-blur-xl border-b border-white/20 flex items-center justify-between px-6"
    >
      <div className="flex items-center gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Menu className="w-5 h-5" />
        </motion.button>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-foreground/50" />
          <input
            type="text"
            placeholder="Search products, orders, customers..."
            className="w-80 pl-10 pr-4 py-2 glass glass-hover border-white/20 text-sm font-medium placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {/* Notifications */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Bell className="w-5 h-5 text-foreground/70" />
          {notifications > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold rounded-full flex items-center justify-center"
            >
              {notifications}
            </motion.span>
          )}
        </motion.button>

        {/* Profile */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 glass glass-hover px-3 py-2 cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="text-sm font-medium hidden sm:block">Admin</span>
        </motion.div>
      </div>
    </motion.header>
  )
}