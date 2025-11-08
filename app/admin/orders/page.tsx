"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Filter, Package, Clock, CheckCircle, Truck } from "lucide-react"

const mockOrders = [
  {
    id: "ORD-001",
    customerName: "Alice Johnson",
    customerEmail: "alice@email.com",
    items: [
      { name: "Fresh Basmati Rice", quantity: 2, price: 24.99 },
      { name: "Organic Tomatoes", quantity: 3, price: 3.99 },
      { name: "Greek Yogurt", quantity: 1, price: 6.99 }
    ],
    total: 89.50,
    status: "delivered",
    orderDate: "2024-01-15T14:30:00Z",
    deliveryAddress: "123 Main St, City, State 12345"
  },
  {
    id: "ORD-002",
    customerName: "Bob Wilson", 
    customerEmail: "bob@email.com",
    items: [
      { name: "Fresh Dairy Milk", quantity: 2, price: 4.50 },
      { name: "Organic Honey", quantity: 1, price: 12.99 }
    ],
    total: 21.99,
    status: "processing",
    orderDate: "2024-01-15T13:45:00Z",
    deliveryAddress: "456 Oak Ave, City, State 12346"
  },
  {
    id: "ORD-003",
    customerName: "Carol Davis",
    customerEmail: "carol@email.com", 
    items: [
      { name: "Fresh Spinach", quantity: 1, price: 4.99 },
      { name: "Red Apples", quantity: 2, price: 5.99 },
      { name: "Mushrooms", quantity: 1, price: 7.99 }
    ],
    total: 24.97,
    status: "pending",
    orderDate: "2024-01-15T12:15:00Z",
    deliveryAddress: "789 Pine Rd, City, State 12347"
  }
]

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedOrder, setSelectedOrder] = useState<string | null>(null)

  const filteredOrders = mockOrders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerEmail.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || order.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "delivered": return <CheckCircle className="w-4 h-4 text-green-400" />
      case "processing": return <Package className="w-4 h-4 text-blue-400" />
      case "shipping": return <Truck className="w-4 h-4 text-purple-400" />
      case "pending": return <Clock className="w-4 h-4 text-amber-400" />
      default: return <Clock className="w-4 h-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "delivered": return "bg-green-500/20 text-green-400 border-green-500/30"
      case "processing": return "bg-blue-500/20 text-blue-400 border-blue-500/30"
      case "shipping": return "bg-purple-500/20 text-purple-400 border-purple-500/30"
      case "pending": return "bg-amber-500/20 text-amber-400 border-amber-500/30"
      default: return "bg-white/20 border-white/20"
    }
  }

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
            Order Management
          </h1>
          <p className="text-foreground/60 mt-2">
            Track and manage customer orders
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="glass glass-sm px-4 py-2">
            <span className="text-sm font-medium text-foreground/70">Total Orders: </span>
            <span className="font-bold text-primary">{mockOrders.length}</span>
          </div>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-col lg:flex-row gap-4"
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
          <input
            type="text"
            placeholder="Search orders by customer name, email, or order ID..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
          />
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="shipping">Shipping</option>
          <option value="delivered">Delivered</option>
        </select>
      </motion.div>

      {/* Orders Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"
      >
        {filteredOrders.map((order, index) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -4 }}
            onClick={() => setSelectedOrder(selectedOrder === order.id ? null : order.id)}
            className="glass glass-lg glass-card-hover p-6 cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                {order.id}
              </span>
              <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)}`}>
                {getStatusIcon(order.status)}
                {order.status.toUpperCase()}
              </span>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="font-bold text-lg">{order.customerName}</h3>
                <p className="text-sm text-foreground/60">{order.customerEmail}</p>
              </div>

              <div className="space-y-1">
                <p className="text-sm font-medium text-foreground/80">
                  {order.items.length} items
                </p>
                {selectedOrder === order.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    className="space-y-1"
                  >
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-xs text-foreground/60">
                        <span>{item.quantity}x {item.name}</span>
                        <span>₹{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-white/10">
                <span className="text-sm text-foreground/60">
                  {new Date(order.orderDate).toLocaleDateString()}
                </span>
                <span className="font-bold text-lg text-primary">
                  ₹{order.total.toFixed(2)}
                </span>
              </div>

              {selectedOrder === order.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pt-3 border-t border-white/10"
                >
                  <p className="text-xs text-foreground/60">
                    <strong>Delivery:</strong> {order.deliveryAddress}
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {filteredOrders.length === 0 && (
        <div className="text-center py-12">
          <div className="text-foreground/40 mb-2">No orders found</div>
          <p className="text-sm text-foreground/60">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}