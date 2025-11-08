"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Search, Plus, Filter, Edit, Trash2, AlertTriangle } from "lucide-react"
import { ProductTable } from "@/components/admin/product-table"
import { StockFilters } from "@/components/admin/stock-filters"
import Link from "next/link"

const mockProducts = [
  {
    id: "1",
    name: "Fresh Basmati Rice",
    category: "Grains & Cereals",
    price: 24.99,
    stock: 150,
    lowStock: false,
    image: "/basmati-rice-bag.jpg",
    sku: "GRC001",
    supplier: "Farm Fresh Co.",
  },
  {
    id: "2",
    name: "Organic Tomatoes",
    category: "Vegetables",
    price: 3.99,
    stock: 5,
    lowStock: true,
    image: "/fresh-red-tomatoes.jpg",
    sku: "VEG002",
    supplier: "Green Fields",
  },
  {
    id: "3",
    name: "Fresh Dairy Milk",
    category: "Dairy",
    price: 4.50,
    stock: 80,
    lowStock: false,
    image: "/fresh-dairy-milk.jpg",
    sku: "DAI003",
    supplier: "Pure Dairy",
  },
  {
    id: "4",
    name: "Greek Yogurt",
    category: "Dairy",
    price: 6.99,
    stock: 12,
    lowStock: true,
    image: "/greek-yogurt-container.png",
    sku: "DAI004",
    supplier: "Pure Dairy",
  },
  {
    id: "5",
    name: "Organic Honey",
    category: "Pantry",
    price: 12.99,
    stock: 45,
    lowStock: false,
    image: "/organic-honey-bottle.jpg",
    sku: "PAN005",
    supplier: "Nature's Best",
  },
]

export default function StockManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterOpen, setFilterOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProducts = mockProducts.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.sku.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const lowStockCount = mockProducts.filter(product => product.lowStock).length

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6"
      >
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Stock Management
          </h1>
          <p className="text-foreground/60 mt-2">
            Manage your inventory and track stock levels
          </p>
        </div>

        <div className="flex items-center gap-4">
          {lowStockCount > 0 && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="glass glass-hover px-4 py-2 border-amber-500/30 bg-amber-500/10"
            >
              <div className="flex items-center gap-2 text-amber-400">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-medium">{lowStockCount} items low in stock</span>
              </div>
            </motion.div>
          )}

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/admin/stock/add"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white rounded-xl font-bold glow-warm relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer opacity-30" />
              <Plus className="w-5 h-5" />
              Add Product
            </Link>
          </motion.div>
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
            placeholder="Search products by name or SKU..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 glass glass-hover text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
          />
        </div>

        <motion.button
          onClick={() => setFilterOpen(!filterOpen)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-6 py-3 glass glass-hover font-medium"
        >
          <Filter className="w-5 h-5" />
          Filters
        </motion.button>
      </motion.div>

      {/* Filters Panel */}
      {filterOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <StockFilters 
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </motion.div>
      )}

      {/* Product Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <ProductTable products={filteredProducts} />
      </motion.div>
    </div>
  )
}