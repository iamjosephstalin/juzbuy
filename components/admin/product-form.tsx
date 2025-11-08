"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Upload, Save, X, Plus, Minus } from "lucide-react"
import Image from "next/image"

const categories = [
  "Vegetables",
  "Fruits", 
  "Dairy",
  "Grains & Cereals",
  "Meat & Fish",
  "Pantry",
  "Beverages",
  "Snacks",
  "Frozen",
  "Household"
]

const suppliers = [
  "Farm Fresh Co.",
  "Green Fields", 
  "Pure Dairy",
  "Nature's Best",
  "Ocean Fresh",
  "Local Harvest"
]

export function ProductForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    costPrice: "",
    stock: "",
    minStock: "",
    sku: "",
    supplier: "",
    description: "",
    images: [] as File[],
  })

  const [dragActive, setDragActive] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files = Array.from(e.dataTransfer.files)
      setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }))
    }
  }

  const removeImage = (index: number) => {
    setFormData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }))
  }

  const generateSKU = () => {
    const prefix = formData.category ? formData.category.substring(0, 3).toUpperCase() : "PRD"
    const suffix = Math.random().toString(36).substring(2, 8).toUpperCase()
    handleInputChange("sku", `${prefix}${suffix}`)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    // TODO: Implement actual product save/update to database
    // Example: await saveProduct(formData)
  }

  return (
    <motion.form 
      onSubmit={handleSubmit}
      className="glass glass-lg p-8 space-y-8"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Basic Info */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Basic Information</h3>
          
          {/* Product Name */}
          <div>
            <label className="block text-sm font-semibold mb-2">Product Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
              placeholder="Enter product name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-semibold mb-2">Category *</label>
            <select
              required
              value={formData.category}
              onChange={(e) => handleInputChange("category", e.target.value)}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            >
              <option value="">Select category</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* SKU */}
          <div>
            <label className="block text-sm font-semibold mb-2">SKU *</label>
            <div className="flex gap-2">
              <input
                type="text"
                required
                value={formData.sku}
                onChange={(e) => handleInputChange("sku", e.target.value)}
                className="flex-1 px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-mono"
                placeholder="Product SKU"
              />
              <motion.button
                type="button"
                onClick={generateSKU}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-3 glass glass-hover font-medium"
              >
                Generate
              </motion.button>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Cost Price *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50">₹</span>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.costPrice}
                  onChange={(e) => handleInputChange("costPrice", e.target.value)}
                  className="w-full pl-8 pr-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Selling Price *</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/50">₹</span>
                <input
                  type="number"
                  step="0.01"
                  required
                  value={formData.price}
                  onChange={(e) => handleInputChange("price", e.target.value)}
                  className="w-full pl-8 pr-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                  placeholder="0.00"
                />
              </div>
            </div>
          </div>

          {/* Stock */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Current Stock *</label>
              <input
                type="number"
                required
                min="0"
                value={formData.stock}
                onChange={(e) => handleInputChange("stock", e.target.value)}
                className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                placeholder="0"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Minimum Stock</label>
              <input
                type="number"
                min="0"
                value={formData.minStock}
                onChange={(e) => handleInputChange("minStock", e.target.value)}
                className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
                placeholder="10"
              />
            </div>
          </div>

          {/* Supplier */}
          <div>
            <label className="block text-sm font-semibold mb-2">Supplier</label>
            <select
              value={formData.supplier}
              onChange={(e) => handleInputChange("supplier", e.target.value)}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
            >
              <option value="">Select supplier</option>
              {suppliers.map(supplier => (
                <option key={supplier} value={supplier}>{supplier}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Right Column - Images & Description */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold mb-4">Images & Description</h3>
          
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-semibold mb-2">Product Images</label>
            <motion.div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              whileHover={{ scale: 1.02 }}
              className={`
                relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300
                ${dragActive 
                  ? "border-primary bg-primary/10" 
                  : "border-white/20 hover:border-primary/50"
                }
              `}
            >
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => {
                  if (e.target.files) {
                    const files = Array.from(e.target.files)
                    setFormData(prev => ({ ...prev, images: [...prev.images, ...files] }))
                  }
                }}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <Upload className="w-12 h-12 text-foreground/40 mx-auto mb-4" />
              <p className="text-foreground/60 mb-2">Drop images here or click to upload</p>
              <p className="text-sm text-foreground/40">Supports: JPG, PNG, WebP (Max 5MB each)</p>
            </motion.div>

            {/* Image Previews */}
            {formData.images.length > 0 && (
              <div className="grid grid-cols-3 gap-4 mt-4">
                {formData.images.map((file, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative aspect-square glass glass-sm rounded-lg overflow-hidden group"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                    <motion.button
                      type="button"
                      onClick={() => removeImage(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-3 h-3" />
                    </motion.button>
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2">Description</label>
            <textarea
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              rows={6}
              className="w-full px-4 py-3 glass glass-hover focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium resize-none"
              placeholder="Enter product description, features, specifications..."
            />
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-end gap-4 pt-6 border-t border-white/10">
        <motion.button
          type="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 glass glass-hover font-medium"
        >
          Save as Draft
        </motion.button>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white rounded-xl font-bold glow-nature relative overflow-hidden"
        >
          <div className="absolute inset-0 shimmer opacity-30" />
          <Save className="w-5 h-5" />
          Add Product
        </motion.button>
      </div>
    </motion.form>
  )
}