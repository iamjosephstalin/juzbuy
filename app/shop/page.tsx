"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, Star, ShoppingCart, X, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { products, categories, Product } from "@/data/products"
import { useCart } from "@/context/cart-context"

export default function ShopPage() {
  const { addToCart, isAddingToCart } = useCart()
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 700])
  const [sortBy, setSortBy] = useState<"name" | "price" | "rating">("name")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      
      return matchesSearch && matchesCategory && matchesPrice
    })

    // Sort products
    filtered.sort((a, b) => {
      let aValue: number | string
      let bValue: number | string

      switch (sortBy) {
        case "price":
          aValue = a.price
          bValue = b.price
          break
        case "rating":
          aValue = a.rating
          bValue = b.rating
          break
        default:
          aValue = a.name
          bValue = b.name
      }

      if (typeof aValue === "string" && typeof bValue === "string") {
        return sortOrder === "asc" 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue)
      } else {
        return sortOrder === "asc" 
          ? (aValue as number) - (bValue as number)
          : (bValue as number) - (aValue as number)
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, priceRange, sortBy, sortOrder])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating) 
            ? "text-yellow-500 fill-yellow-500" 
            : i < rating 
            ? "text-yellow-500 fill-yellow-500/50" 
            : "text-gray-300"
        }`}
      />
    ))
  }

  const handleAddToCart = async (product: Product) => {
    await addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Shop Fresh Groceries
          </h1>
          <p className="text-lg text-foreground/70 mb-2">
            Discover our wide selection of fresh, organic, and premium quality products
          </p>
          <p className="text-sm text-foreground/50">
            {filteredAndSortedProducts.length} products found
          </p>
        </motion.div>

        {/* Search Bar - Prominent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 text-orange-500" />
            <input
              type="text"
              placeholder="Search for fresh vegetables, fruits, dairy..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-4 text-lg font-medium glass glass-hover focus:outline-none focus:ring-2 focus:ring-orange-500/50 border-2 border-transparent focus:border-orange-500/30 rounded-2xl shadow-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-6 top-1/2 transform -translate-y-1/2 p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-5 h-5 text-foreground/50" />
              </button>
            )}
          </div>
        </motion.div>

        {/* Main Content Area with Sidebar */}
        <div className="flex gap-8">
          {/* Left Sidebar - Categories */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="w-80 flex-shrink-0"
          >
            <div className="glass glass-lg p-6 rounded-2xl sticky top-8">
              <h3 className="text-xl font-bold mb-6 text-orange-600">Categories</h3>
              <div className="space-y-2">
                {["all", ...categories].map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-4 rounded-xl font-medium transition-all duration-300 text-left group ${
                      selectedCategory === category
                        ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg"
                        : "glass glass-hover text-foreground/80 hover:text-foreground hover:bg-orange-50"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold">
                        {category === "all" ? "All Products" : category}
                      </span>
                      <span className={`text-sm px-2 py-1 rounded-full ${
                        selectedCategory === category
                          ? "bg-white/20 text-white"
                          : "bg-orange-100 text-orange-600 group-hover:bg-orange-200"
                      }`}>
                        {category === "all" 
                          ? products.length 
                          : products.filter(p => p.category === category).length
                        }
                      </span>
                    </div>
                    {category !== "all" && selectedCategory !== category && (
                      <p className="text-xs mt-2 opacity-60 group-hover:opacity-80">
                        Fresh {category.toLowerCase()} products
                      </p>
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Content Area */}
          <div className="flex-1">
            {/* Filters Section - Price and Sort Only */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8 glass glass-lg p-6 rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Filters & Sort</h3>
                <motion.button
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                    setPriceRange([0, 700])
                    setSortBy("name")
                    setSortOrder("asc")
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset All
                </motion.button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Price Range */}
                <div>
                  <label className="block text-sm font-bold mb-4 text-orange-600">
                    Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                  </label>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        type="range"
                        min={0}
                        max={700}
                        step={10}
                        value={priceRange[0]}
                        onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                        className="w-full h-3 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #fed7aa 0%, #fed7aa ${(priceRange[0] / 700) * 100}%, #fef3c7 ${(priceRange[0] / 700) * 100}%, #fef3c7 100%)`
                        }}
                      />
                      <div className="flex justify-between text-xs text-foreground/60 mt-1">
                        <span>₹0</span>
                        <span>₹350</span>
                        <span>₹700</span>
                      </div>
                    </div>
                    <div className="relative">
                      <input
                        type="range"
                        min={0}
                        max={700}
                        step={10}
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full h-3 bg-gradient-to-r from-orange-300 to-yellow-300 rounded-lg appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, #fdba74 0%, #fdba74 ${(priceRange[1] / 700) * 100}%, #fde68a ${(priceRange[1] / 700) * 100}%, #fde68a 100%)`
                        }}
                      />
                      <div className="text-xs text-foreground/60 mt-1">
                        <span>Max: ₹{priceRange[1]}</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { label: "Under ₹50", min: 0, max: 50 },
                        { label: "₹50 - ₹200", min: 50, max: 200 },
                        { label: "Above ₹200", min: 200, max: 700 }
                      ].map((preset) => (
                        <button
                          key={preset.label}
                          onClick={() => setPriceRange([preset.min, preset.max])}
                          className="px-2 py-1 text-xs glass glass-hover rounded-lg hover:bg-orange-100 transition-colors"
                        >
                          {preset.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-bold mb-4 text-orange-600">Sort By</label>
                  <div className="space-y-3">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value as "name" | "price" | "rating")}
                      className="w-full p-3 glass glass-hover rounded-xl font-medium focus:outline-none focus:ring-2 focus:ring-orange-500/50"
                    >
                      <option value="name">Name</option>
                      <option value="price">Price</option>
                      <option value="rating">Rating</option>
                    </select>
                    <div className="grid grid-cols-2 gap-2">
                      <motion.button
                        onClick={() => setSortOrder("asc")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-2 rounded-lg font-medium transition-all duration-300 ${
                          sortOrder === "asc"
                            ? "bg-orange-500 text-white"
                            : "glass glass-hover"
                        }`}
                      >
                        ↑ Low to High
                      </motion.button>
                      <motion.button
                        onClick={() => setSortOrder("desc")}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`p-2 rounded-lg font-medium transition-all duration-300 ${
                          sortOrder === "desc"
                            ? "bg-orange-500 text-white"
                            : "glass glass-hover"
                        }`}
                      >
                        ↓ High to Low
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Products Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
          {filteredAndSortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="glass glass-lg overflow-hidden group relative rounded-2xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="aspect-square overflow-hidden relative">
                <Link href={`/product/${product.id}`}>
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </Link>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.featured && (
                    <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  {product.discount && (
                    <div className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                      {product.discount}% OFF
                    </div>
                  )}
                  {product.tags.includes("organic") && (
                    <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      Organic
                    </div>
                  )}
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-3 right-3 p-2 bg-white/90 hover:bg-white rounded-full transition-all duration-300 shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                </button>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-full uppercase tracking-wide">
                      {product.category}
                    </span>
                  </div>

                  <Link href={`/product/${product.id}`}>
                    <h3 className="font-bold text-lg leading-tight group-hover:text-orange-600 transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                  </Link>

                  <div className="flex items-center gap-1">
                    {renderStars(product.rating)}
                    <span className="text-sm text-foreground/60 ml-1">
                      {product.rating} ({product.reviewCount})
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600">
                      ₹{product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-foreground/50 line-through">
                        ₹{product.originalPrice}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-1 text-sm">
                    <div className={`w-2 h-2 rounded-full ${
                      product.inStock ? "bg-green-500" : "bg-red-500"
                    }`} />
                    <span className={
                      product.inStock ? "text-green-600" : "text-red-600"
                    }>
                      {product.inStock ? `${product.stockQuantity} in stock` : "Out of Stock"}
                    </span>
                  </div>
                </div>

                <motion.button
                  onClick={() => handleAddToCart(product)}
                  disabled={!product.inStock || isAddingToCart}
                  whileHover={{ scale: product.inStock && !isAddingToCart ? 1.02 : 1 }}
                  whileTap={{ scale: product.inStock && !isAddingToCart ? 0.98 : 1 }}
                  className={`
                    w-full mt-6 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-bold transition-all duration-300 text-sm
                    ${product.inStock && !isAddingToCart
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg hover:shadow-xl transform"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  {isAddingToCart ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Adding...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-4 h-4" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

            {/* No Results */}
            {filteredAndSortedProducts.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="glass glass-lg p-12 max-w-md mx-auto rounded-2xl">
                  <h3 className="text-2xl font-bold mb-4">No products found</h3>
                  <p className="text-foreground/60 mb-6">
                    Try adjusting your search terms or filters to find what you're looking for.
                  </p>
                  <motion.button
                    onClick={() => {
                      setSearchTerm("")
                      setSelectedCategory("all")
                      setPriceRange([0, 700])
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold glow-warm"
                  >
                    Clear Filters
                  </motion.button>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}