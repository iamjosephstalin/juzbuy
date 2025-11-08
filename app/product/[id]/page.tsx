"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import { ArrowLeft, Star, Heart, ShoppingCart, Plus, Minus, Share, Truck, Shield, Award, Leaf } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { getProductById, Product } from "@/data/products"
import { useCart } from "@/context/cart-context"

export default function ProductPage() {
  const params = useParams()
  const { addToCart, isAddingToCart } = useCart()
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [activeTab, setActiveTab] = useState<"description" | "nutrition" | "reviews">("description")

  useEffect(() => {
    if (params.id) {
      const foundProduct = getProductById(params.id as string)
      setProduct(foundProduct || null)
    }
  }, [params.id])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center glass glass-lg p-12"
        >
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-foreground/60 mb-6">The product you're looking for doesn't exist.</p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-xl font-bold glow-warm"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </Link>
        </motion.div>
      </div>
    )
  }

  const handleAddToCart = async () => {
    await addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    })
  }

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

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 px-4 py-2 glass glass-hover rounded-xl font-medium transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Shop
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Main Image */}
            <div className="aspect-square glass glass-lg p-4 overflow-hidden relative">
              <Image
                src={product.gallery[selectedImage]}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover rounded-xl"
              />
              {product.discount && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-8 left-8 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold"
                >
                  {product.discount}% OFF
                </motion.div>
              )}
            </div>

            {/* Image Gallery */}
            <div className="flex gap-3 overflow-x-auto">
              {product.gallery.map((image, index) => (
                <motion.button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    relative flex-shrink-0 w-20 h-20 glass rounded-lg overflow-hidden border-2 transition-all duration-300
                    ${selectedImage === index 
                      ? "border-orange-500 ring-2 ring-orange-500/30" 
                      : "border-transparent hover:border-orange-300"
                    }
                  `}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Product Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Product Header */}
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium border border-orange-500/30">
                      {product.category}
                    </span>
                    {product.tags.includes("organic") && (
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-600 dark:text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                        <Leaf className="w-3 h-3 inline mr-1" />
                        Organic
                      </span>
                    )}
                  </div>
                  <h1 className="text-4xl font-black text-slate-900 dark:text-white leading-tight">
                    {product.name}
                  </h1>
                  <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                    {product.description}
                  </p>
                </div>
                
                <motion.button
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 glass glass-hover rounded-xl"
                >
                  <Heart className={`w-6 h-6 ${isWishlisted ? "text-red-500 fill-red-500" : "text-foreground/60"}`} />
                </motion.button>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {renderStars(product.rating)}
                </div>
                <span className="text-lg font-semibold">{product.rating}</span>
                <span className="text-foreground/60">({product.reviewCount} reviews)</span>
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-4">
                <span className="text-4xl font-black text-orange-600 dark:text-orange-400">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-foreground/50 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
                <span className="text-foreground/60">/ {product.weight}</span>
              </div>

              {/* Stock Status */}
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${
                  product.inStock ? "bg-green-500 animate-pulse" : "bg-red-500"
                }`} />
                <span className={`font-medium ${
                  product.inStock ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
                }`}>
                  {product.inStock ? `${product.stockQuantity} in stock` : "Out of stock"}
                </span>
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-semibold">Quantity:</span>
                <div className="flex items-center glass glass-sm rounded-xl">
                  <motion.button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 hover:bg-white/10 rounded-l-xl transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </motion.button>
                  <span className="px-6 py-3 font-bold text-lg min-w-[4rem] text-center">
                    {quantity}
                  </span>
                  <motion.button
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 hover:bg-white/10 rounded-r-xl transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isAddingToCart}
                  whileHover={{ scale: product.inStock && !isAddingToCart ? 1.02 : 1 }}
                  whileTap={{ scale: product.inStock && !isAddingToCart ? 0.98 : 1 }}
                  className={`
                    flex-1 flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300
                    ${product.inStock && !isAddingToCart
                      ? "bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white glow-warm"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                    }
                  `}
                >
                  {isAddingToCart ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Adding to Cart...
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </>
                  )}
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-4 glass glass-hover rounded-2xl"
                >
                  <Share className="w-5 h-5" />
                </motion.button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass glass-sm p-4 text-center">
                <Truck className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Free Delivery</span>
              </div>
              <div className="glass glass-sm p-4 text-center">
                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <div className="glass glass-sm p-4 text-center">
                <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <span className="text-sm font-medium">Premium Grade</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16"
        >
          <div className="glass glass-lg p-8">
            {/* Tab Navigation */}
            <div className="flex gap-2 mb-8 glass glass-sm p-2 w-fit">
              {["description", "nutrition", "reviews"].map((tab) => (
                <motion.button
                  key={tab}
                  onClick={() => setActiveTab(tab as typeof activeTab)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`
                    relative px-6 py-3 rounded-lg font-semibold transition-all duration-300 capitalize
                    ${activeTab === tab
                      ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
                      : "text-foreground/70 hover:text-foreground hover:bg-white/10"
                    }
                  `}
                >
                  {activeTab === tab && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg"
                      initial={false}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </motion.button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {activeTab === "description" && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Product Details</h3>
                  <p className="text-lg leading-relaxed">{product.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Product Information</h4>
                      <ul className="space-y-2 text-foreground/70">
                        <li><span className="font-medium">Weight:</span> {product.weight}</li>
                        {product.origin && <li><span className="font-medium">Origin:</span> {product.origin}</li>}
                        {product.brand && <li><span className="font-medium">Brand:</span> {product.brand}</li>}
                        <li><span className="font-medium">Category:</span> {product.category}</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Tags</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 text-orange-600 dark:text-orange-400 rounded-full text-sm border border-orange-500/30"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "nutrition" && product.nutritionalInfo && (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">Nutritional Information</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="glass glass-sm p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600">{product.nutritionalInfo.calories}</div>
                      <div className="text-sm text-foreground/60">Calories</div>
                    </div>
                    <div className="glass glass-sm p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">{product.nutritionalInfo.protein}</div>
                      <div className="text-sm text-foreground/60">Protein</div>
                    </div>
                    <div className="glass glass-sm p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{product.nutritionalInfo.carbs}</div>
                      <div className="text-sm text-foreground/60">Carbs</div>
                    </div>
                    <div className="glass glass-sm p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600">{product.nutritionalInfo.fat}</div>
                      <div className="text-sm text-foreground/60">Fat</div>
                    </div>
                    <div className="glass glass-sm p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-600">{product.nutritionalInfo.fiber}</div>
                      <div className="text-sm text-foreground/60">Fiber</div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "reviews" && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold">Customer Reviews</h3>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {renderStars(product.rating)}
                      </div>
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-foreground/60">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <div className="glass glass-sm p-6 text-center">
                    <p className="text-foreground/60">Reviews feature coming soon!</p>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}