"use client"

import { motion } from "framer-motion"
import { Search, Eye, Download, Filter } from "lucide-react"
import { useState } from "react"

const mockBills = [
  {
    id: "BILL-001",
    customerName: "John Doe",
    customerPhone: "+1234567890",
    amount: 156.75,
    items: 8,
    timestamp: "2024-01-15T14:30:00Z",
    status: "paid"
  },
  {
    id: "BILL-002", 
    customerName: "Jane Smith",
    customerPhone: "+1234567891",
    amount: 89.50,
    items: 5,
    timestamp: "2024-01-15T13:45:00Z",
    status: "paid"
  },
  {
    id: "BILL-003",
    customerName: "Mike Johnson", 
    customerPhone: "+1234567892",
    amount: 234.25,
    items: 12,
    timestamp: "2024-01-15T12:15:00Z",
    status: "pending"
  },
  {
    id: "BILL-004",
    customerName: "Sarah Wilson",
    customerPhone: "+1234567893", 
    amount: 67.80,
    items: 3,
    timestamp: "2024-01-15T11:30:00Z",
    status: "paid"
  }
]

export function RecentBills() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredBills = mockBills.filter(bill => {
    const matchesSearch = bill.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bill.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         bill.customerPhone.includes(searchTerm)
    const matchesStatus = statusFilter === "all" || bill.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString()
  }

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
          <input
            type="text"
            placeholder="Search bills by customer name, phone, or bill ID..."
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
          <option value="paid">Paid</option>
          <option value="pending">Pending</option>
        </select>
      </div>

      {/* Bills Table */}
      <div className="glass glass-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-white/10">
              <tr>
                <th className="text-left px-6 py-4 font-bold">Bill ID</th>
                <th className="text-left px-6 py-4 font-bold">Customer</th>
                <th className="text-left px-6 py-4 font-bold">Phone</th>
                <th className="text-left px-6 py-4 font-bold">Items</th>
                <th className="text-left px-6 py-4 font-bold">Amount</th>
                <th className="text-left px-6 py-4 font-bold">Date & Time</th>
                <th className="text-left px-6 py-4 font-bold">Status</th>
                <th className="text-left px-6 py-4 font-bold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {filteredBills.map((bill, index) => (
                <motion.tr
                  key={bill.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                  className="group"
                >
                  <td className="px-6 py-4">
                    <span className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                      {bill.id}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-semibold">{bill.customerName}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-foreground/70">{bill.customerPhone}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-foreground/70">{bill.items} items</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="font-bold text-primary">₹{bill.amount.toFixed(2)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-foreground/70 text-sm">{formatDate(bill.timestamp)}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      bill.status === "paid" 
                        ? "bg-green-500/20 text-green-400"
                        : "bg-amber-500/20 text-amber-400"
                    }`}>
                      {bill.status.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                        title="View Bill"
                      >
                        <Eye className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent"
                        title="Download PDF"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredBills.length === 0 && (
          <div className="text-center py-12">
            <div className="text-foreground/40 mb-2">No bills found</div>
            <p className="text-sm text-foreground/60">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  )
}