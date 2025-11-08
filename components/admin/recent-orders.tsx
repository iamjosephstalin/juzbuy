"use client"

import { motion } from "framer-motion"
import { Eye, Package, Clock, CheckCircle } from "lucide-react"

const mockOrders = [
  {
    id: "ORD-001",
    customerName: "Alice Johnson",
    items: ["Fresh Basmati Rice", "Organic Tomatoes", "Greek Yogurt"],
    amount: 89.50,
    status: "delivered",
    timestamp: "2024-01-15T14:30:00Z"
  },
  {
    id: "ORD-002", 
    customerName: "Bob Wilson",
    items: ["Fresh Dairy Milk", "Organic Honey"],
    amount: 17.49,
    status: "processing",
    timestamp: "2024-01-15T13:45:00Z"
  },
  {
    id: "ORD-003",
    customerName: "Carol Davis",
    items: ["Fresh Spinach", "Red Apples", "Mushrooms"],
    amount: 24.75,
    status: "pending",
    timestamp: "2024-01-15T12:15:00Z"
  },
]

export function RecentOrders() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="w-4 h-4 text-green-400" />
      case "processing": return <Package className="w-4 h-4 text-blue-400" />
      case "pending": return <Clock className="w-4 h-4 text-amber-400" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500/20 text-green-400"
      case "processing": return "bg-blue-500/20 text-blue-400" 
      case "pending": return "bg-amber-500/20 text-amber-400"
      default: return "bg-white/20"
    }
  }

  return (
    <div className="glass glass-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold">Recent Orders</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="text-sm text-primary hover:underline font-medium"
        >
          View All Orders
        </motion.button>
      </div>

      <div className="space-y-4">
        {mockOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="glass glass-hover p-4 cursor-pointer group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                    {order.id}
                  </span>
                  <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusIcon(order.status)}
                    {order.status.toUpperCase()}
                  </span>
                </div>
                
                <h4 className="font-semibold mb-1">{order.customerName}</h4>
                <p className="text-sm text-foreground/60 mb-2">
                  {order.items.length} items: {order.items.slice(0, 2).join(", ")}
                  {order.items.length > 2 && ` +${order.items.length - 2} more`}
                </p>
                <p className="text-xs text-foreground/50">
                  {new Date(order.timestamp).toLocaleString()}
                </p>
              </div>
              
              <div className="text-right">
                <div className="font-bold text-lg text-primary mb-2">
                  ₹{order.amount.toFixed(2)}
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 hover:bg-primary/20 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                >
                  <Eye className="w-4 h-4 text-primary" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}