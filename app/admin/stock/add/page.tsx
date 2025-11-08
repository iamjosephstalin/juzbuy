"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ArrowLeft, Upload, Save, X } from "lucide-react"
import Link from "next/link"
import { ProductForm } from "@/components/admin/product-form"

export default function AddProduct() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-4"
      >
        <motion.div whileHover={{ x: -2 }} whileTap={{ scale: 0.95 }}>
          <Link
            href="/admin/stock"
            className="flex items-center justify-center w-10 h-10 glass glass-hover rounded-xl glow-warm"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </motion.div>
        
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Add New Product
          </h1>
          <p className="text-foreground/60 mt-2">
            Add a new product to your inventory
          </p>
        </div>
      </motion.div>

      {/* Product Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <ProductForm />
      </motion.div>
    </div>
  )
}