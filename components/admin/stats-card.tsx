"use client"

import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface StatsCardProps {
  label: string
  value: string
  change: string
  icon: LucideIcon
  color: "primary" | "accent"
  index: number
}

export function StatsCard({ label, value, change, icon: Icon, color, index }: StatsCardProps) {
  const isPositive = change.startsWith("+")

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        y: -5, 
        scale: 1.02,
        boxShadow: color === "primary" 
          ? "0 20px 60px rgba(var(--primary), 0.15)" 
          : "0 20px 60px rgba(var(--accent), 0.15)"
      }}
      className="glass glass-lg glass-card-hover p-6 relative overflow-hidden group"
    >
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-gradient-to-br ${
        color === "primary" 
          ? "from-primary/5 via-transparent to-primary/10" 
          : "from-accent/5 via-transparent to-accent/10"
      } opacity-50`} />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${
              color === "primary" 
                ? "from-primary to-primary/80" 
                : "from-accent to-accent/80"
            } p-3 glow-${color === "primary" ? "primary" : "orange"}`}
          >
            <Icon className="w-6 h-6 text-primary-foreground" />
          </motion.div>
          
          <motion.span
            className={`text-sm font-semibold px-2 py-1 rounded-full ${
              isPositive 
                ? "bg-green-500/20 text-green-400" 
                : "bg-red-500/20 text-red-400"
            }`}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            {change}
          </motion.span>
        </div>

        <div>
          <motion.h3 
            className="text-3xl font-black mb-1"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            {value}
          </motion.h3>
          <p className="text-foreground/60 font-medium">{label}</p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className={`absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br ${
        color === "primary" ? "from-primary/20" : "from-accent/20"
      } to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
    </motion.div>
  )
}