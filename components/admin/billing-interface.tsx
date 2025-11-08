"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { Search, Plus, Minus, X, Calculator, Receipt, User } from "lucide-react"
import Image from "next/image"

interface BillItem {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  sku: string
  stock: number
}

const mockProducts = [
  {
    id: "1",
    name: "Fresh Basmati Rice",
    price: 24.99,
    image: "/basmati-rice-bag.jpg",
    sku: "GRC001",
    stock: 150,
  },
  {
    id: "2", 
    name: "Organic Tomatoes",
    price: 3.99,
    image: "/fresh-red-tomatoes.jpg",
    sku: "VEG002",
    stock: 45,
  },
  {
    id: "3",
    name: "Fresh Dairy Milk",
    price: 4.50,
    image: "/fresh-dairy-milk.jpg", 
    sku: "DAI003",
    stock: 80,
  },
  {
    id: "4",
    name: "Greek Yogurt",
    price: 6.99,
    image: "/greek-yogurt-container.png",
    sku: "DAI004", 
    stock: 25,
  },
]

export function BillingInterface() {
  const [searchTerm, setSearchTerm] = useState("")
  const [billItems, setBillItems] = useState<BillItem[]>([])
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    phone: "",
    email: "",
  })

  const filteredProducts = mockProducts.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.sku.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const addToBill = (product: any) => {
    const existingItem = billItems.find(item => item.id === product.id)
    
    if (existingItem) {
      setBillItems(items =>
        items.map(item =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + 1, product.stock) }
            : item
        )
      )
    } else {
      setBillItems(items => [...items, { ...product, quantity: 1 }])
    }
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      setBillItems(items => items.filter(item => item.id !== id))
    } else {
      setBillItems(items =>
        items.map(item =>
          item.id === id ? { ...item, quantity: Math.min(quantity, item.stock) } : item
        )
      )
    }
  }

  const removeFromBill = (id: string) => {
    setBillItems(items => items.filter(item => item.id !== id))
  }

  const subtotal = billItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + tax

  const generateBill = () => {
    const billData = {
      items: billItems,
      customer: customerInfo,
      subtotal,
      tax,
      total,
      timestamp: new Date().toISOString(),
    }
    // TODO: Implement actual bill generation and storage
    // Example: await saveBill(billData)
    // Reset form
    setBillItems([])
    setCustomerInfo({ name: "", phone: "", email: "" })
    alert("Bill generated successfully!")
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Product Search & Selection */}
      <div className="lg:col-span-2 space-y-6">
        <div className="glass glass-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Search className="w-5 h-5" />
            Product Selection
          </h3>

          {/* Search */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-foreground/50" />
            <input
              type="text"
              placeholder="Search products by name or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            />
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                onClick={() => addToBill(product)}
                className="glass glass-hover p-4 cursor-pointer group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg overflow-hidden glass glass-sm">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {product.name}
                    </h4>
                    <p className="text-xs text-foreground/60">{product.sku}</p>
                    <div className="flex items-center justify-between mt-1">
                      <span className="font-bold text-primary">₹{product.price}</span>
                      <span className="text-xs text-foreground/60">Stock: {product.stock}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-8 text-foreground/40">
              No products found matching your search
            </div>
          )}
        </div>
      </div>

      {/* Bill Summary */}
      <div className="space-y-6">
        {/* Customer Info */}
        <div className="glass glass-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <User className="w-5 h-5" />
            Customer Information
          </h3>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Customer Name"
              value={customerInfo.name}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={customerInfo.phone}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            />
            <input
              type="email"
              placeholder="Email (Optional)"
              value={customerInfo.email}
              onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            />
          </div>
        </div>

        {/* Bill Items */}
        <div className="glass glass-lg p-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Bill Summary
          </h3>

          <div className="space-y-3 max-h-64 overflow-y-auto">
            <AnimatePresence>
              {billItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="flex items-center gap-3 glass glass-sm p-3"
                >
                  <div className="w-8 h-8 rounded overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">{item.name}</h5>
                    <p className="text-xs text-foreground/60">₹{item.price} each</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <motion.button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center"
                    >
                      <Minus className="w-3 h-3" />
                    </motion.button>
                    <span className="w-8 text-center font-bold">{item.quantity}</span>
                    <motion.button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-6 h-6 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center"
                    >
                      <Plus className="w-3 h-3" />
                    </motion.button>
                  </div>
                  <motion.button
                    onClick={() => removeFromBill(item.id)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-6 h-6 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </motion.button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {billItems.length === 0 && (
            <div className="text-center py-8 text-foreground/40 text-sm">
              No items added to bill yet
            </div>
          )}

          {/* Bill Totals */}
          {billItems.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 pt-4 border-t border-white/10 space-y-2"
            >
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span>₹{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax (8%):</span>
                <span>₹{tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-white/10 pt-2">
                <span>Total:</span>
                <span className="text-primary">₹{total.toFixed(2)}</span>
              </div>
            </motion.div>
          )}

          {/* Generate Bill Button */}
          <motion.button
            onClick={generateBill}
            disabled={billItems.length === 0 || !customerInfo.name || !customerInfo.phone}
            whileHover={{ scale: billItems.length > 0 ? 1.05 : 1 }}
            whileTap={{ scale: billItems.length > 0 ? 0.95 : 1 }}
            className={`
              w-full mt-6 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden
              ${billItems.length > 0 && customerInfo.name && customerInfo.phone
                ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white glow-warm"
                : "bg-white/10 text-foreground/40 cursor-not-allowed"
              }
            `}
          >
            <Receipt className="w-5 h-5" />
            Generate Bill
          </motion.button>
        </div>
      </div>
    </div>
  )
}