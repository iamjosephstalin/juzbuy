"use client"

import { motion } from "framer-motion"
import { 
  Package, 
  Receipt, 
  Users, 
  TrendingUp, 
  ShoppingCart,
  AlertTriangle,
  DollarSign,
  BarChart3
} from "lucide-react"
import { StatsCard } from "@/components/admin/stats-card"
import { RecentOrders } from "@/components/admin/recent-orders"
import { StockAlerts } from "@/components/admin/stock-alerts"
import { SalesChart } from "@/components/admin/sales-chart"

const stats = [
  {
    label: "Total Revenue",
    value: "₹24,567",
    change: "+12.5%",
    icon: DollarSign,
    color: "primary" as const,
  },
  {
    label: "Total Orders",
    value: "1,247",
    change: "+8.2%",
    icon: ShoppingCart,
    color: "accent" as const,
  },
  {
    label: "Products in Stock",
    value: "856",
    change: "-2.1%",
    icon: Package,
    color: "primary" as const,
  },
  {
    label: "Active Customers",
    value: "2,341",
    change: "+15.3%",
    icon: Users,
    color: "accent" as const,
  },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Dashboard
          </h1>
          <p className="text-foreground/60 mt-2">Welcome back, Admin. Here's what's happening today.</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="glass glass-sm px-6 py-3 text-sm font-medium"
        >
          {new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6"
      >
        {stats.map((stat, index) => (
          <StatsCard key={stat.label} {...stat} index={index} />
        ))}
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sales Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2"
        >
          <SalesChart />
        </motion.div>

        {/* Stock Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <StockAlerts />
        </motion.div>
      </div>

      {/* Recent Orders */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <RecentOrders />
      </motion.div>
    </div>
  )
}