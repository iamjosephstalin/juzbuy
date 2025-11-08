"use client"

import { motion } from "framer-motion"
import { Edit, Trash2, AlertTriangle, Eye } from "lucide-react"
import Image from "next/image"

interface Product {
  id: string
  name: string
  category: string
  price: number
  stock: number
  lowStock: boolean
  image: string
  sku: string
  supplier: string
}

interface ProductTableProps {
  products: Product[]
}

export function ProductTable({ products }: ProductTableProps) {
  return (
    <div className="glass glass-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gradient-to-r from-primary/10 to-accent/10 border-b border-white/10">
            <tr>
              <th className="text-left px-6 py-4 font-bold text-foreground">Product</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">SKU</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">Category</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">Price</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">Stock</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">Supplier</th>
              <th className="text-left px-6 py-4 font-bold text-foreground">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {products.map((product, index) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.02)" }}
                className="group"
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden glass glass-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{product.name}</h4>
                      {product.lowStock && (
                        <div className="flex items-center gap-1 text-amber-400 text-xs mt-1">
                          <AlertTriangle className="w-3 h-3" />
                          <span>Low Stock</span>
                        </div>
                      )}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="font-mono text-sm bg-white/10 px-2 py-1 rounded">
                    {product.sku}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-foreground/70">{product.category}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="font-semibold text-primary">₹{product.price}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`font-semibold ${
                      product.lowStock ? "text-red-400" : "text-green-400"
                    }`}>
                      {product.stock}
                    </span>
                    {product.lowStock && (
                      <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse" />
                    )}
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-foreground/70">{product.supplier}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-primary/20 rounded-lg transition-colors text-primary"
                      title="View Details"
                    >
                      <Eye className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-accent/20 rounded-lg transition-colors text-accent"
                      title="Edit Product"
                    >
                      <Edit className="w-4 h-4" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-red-400"
                      title="Delete Product"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <div className="text-foreground/40 mb-2">No products found</div>
          <p className="text-sm text-foreground/60">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  )
}