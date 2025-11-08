"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FloatingItems } from "@/components/floating-items"
import { CategoryPills } from "@/components/category-pills"
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      desc: "Same-day delivery to your doorstep",
    },
    {
      icon: Leaf,
      title: "Fresh & Organic",
      desc: "Handpicked fresh produce daily",
    },
    {
      icon: TrendingUp,
      title: "Best Prices",
      desc: "Competitive rates with daily deals",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Navbar />

      {/* Compact Elegant Hero Section */}
<section className="relative overflow-hidden h-screen flex items-center">
        {/* Sophisticated Background */}
        <div className="absolute inset-0 -z-10">
          {/* Main gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/30 to-green-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          
          {/* Floating geometric shapes */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-20 right-20 w-32 h-32 rounded-3xl bg-gradient-to-br from-orange-200/40 to-orange-300/20 backdrop-blur-sm border border-orange-200/30"
            style={{ transform: "rotate(15deg)" }}
          />
          
          <motion.div
            animate={{
              y: [0, 40, 0],
              rotate: [0, -8, 0],
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-32 left-16 w-24 h-24 rounded-2xl bg-gradient-to-br from-green-200/40 to-green-300/20 backdrop-blur-sm border border-green-200/30"
            style={{ transform: "rotate(-20deg)" }}
          />
          
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-1/2 left-10 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-200/50 to-orange-200/30 backdrop-blur-sm border border-yellow-200/40"
          />
          
          {/* Elegant mesh gradient */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-orange-100/20 to-transparent" 
                 style={{
                   background: `radial-gradient(ellipse at top left, rgba(255, 140, 0, 0.1) 0%, transparent 50%),
                                radial-gradient(ellipse at bottom right, rgba(34, 139, 34, 0.08) 0%, transparent 50%),
                                radial-gradient(ellipse at center, rgba(255, 215, 0, 0.05) 0%, transparent 70%)`
                 }} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center h-full py-8">
            {/* Left Content - 7 columns */}
            <div className="lg:col-span-7 space-y-6">
              {/* Compact Premium Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-2 glass backdrop-blur-xl px-4 py-2 w-fit border border-orange-200/30"
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0px rgba(255, 140, 0, 0.5)", 
                      "0 0 15px rgba(255, 140, 0, 0.8)", 
                      "0 0 0px rgba(255, 140, 0, 0.5)"
                    ] 
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="w-3 h-3 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full"
                />
                <span className="text-orange-600 dark:text-orange-400 font-semibold text-sm tracking-wide">
                  Premium Grocery Experience
                </span>
              </motion.div>

              {/* Compact Hero Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="space-y-2"
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-tight">
                  <motion.span 
                    className="block text-slate-900 dark:text-white"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                  >
                    Fresh
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    Groceries
                  </motion.span>
                  <motion.span 
                    className="block text-slate-700 dark:text-slate-200"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    Delivered
                  </motion.span>
                </h1>
              </motion.div>

              {/* Compact Description */}
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl font-light"
              >
                Curated selection of premium groceries, delivered with care. 
                <span className="text-orange-600 dark:text-orange-400 font-medium">
                  Experience freshness like never before.
                </span>
              </motion.p>

              {/* Compact CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/shop"
                    className="group relative overflow-hidden px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-500 text-white rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 min-w-[180px]"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/30 to-yellow-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <span className="relative z-10">Start Shopping</span>
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -3 }} 
                  whileTap={{ scale: 0.98 }}
                >
                  <Link
                    href="/offers"
                    className="group px-8 py-4 glass backdrop-blur-xl border border-slate-200/30 dark:border-slate-700/30 rounded-2xl font-bold text-lg transition-all duration-500 flex items-center justify-center gap-3 min-w-[180px] text-slate-700 dark:text-slate-300"
                  >
                    <span>Browse Deals</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </motion.div>
              </motion.div>

              {/* Compact Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex items-center gap-8 pt-4"
              >
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-2xl font-black text-orange-600 dark:text-orange-400"
                  >
                    50K+
                  </motion.div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">Happy Customers</div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                    className="text-2xl font-black text-green-600 dark:text-green-400"
                  >
                    24/7
                  </motion.div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">Express Delivery</div>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="text-center group cursor-pointer"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 3 }}
                    className="text-2xl font-black text-yellow-600 dark:text-yellow-400"
                  >
                    100%
                  </motion.div>
                  <div className="text-slate-600 dark:text-slate-400 font-medium text-sm">Fresh Guarantee</div>
                </motion.div>
              </motion.div>
            </div>

            {/* Compact Right Content - 5 columns */}
            <div className="lg:col-span-5 relative">
              {/* Compact Hero Visual Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative h-full flex items-center"
              >
                {/* Compact Main Visual Card */}
                <div className="relative glass backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl p-8 overflow-hidden w-full max-h-96">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-transparent to-green-50/30 dark:from-orange-950/20 dark:to-green-950/10" />
                  
                  {/* Compact Floating product icons */}
                  <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 3, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-200 to-orange-300 rounded-xl flex items-center justify-center"
                  >
                    <span className="text-lg">🥕</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-4 left-4 w-10 h-10 bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center"
                  >
                    <span className="text-sm">🍎</span>
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, -8, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute top-1/2 left-3 w-8 h-8 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full flex items-center justify-center"
                  >
                    <span className="text-xs">🌽</span>
                  </motion.div>
                  
                  {/* Compact Central content */}
                  <div className="relative z-10 text-center space-y-4">
                    <motion.div
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="w-16 h-16 mx-auto bg-gradient-to-br from-orange-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-xl"
                    >
                      <span className="text-2xl">🛒</span>
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                      Premium Quality
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                      Handpicked fresh groceries from trusted suppliers
                    </p>
                    
                    <div className="flex items-center justify-center gap-3 pt-2">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">Fresh Daily</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                        <span className="text-xs text-slate-600 dark:text-slate-400">Fast Delivery</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-700" />
                </div>
                
                {/* Compact Decorative elements */}
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-2 -right-2 w-6 h-6 border-2 border-orange-300 rounded-full opacity-60"
                />
                
                <motion.div
                  animate={{ rotate: [0, -360] }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-1 -left-1 w-4 h-4 border-2 border-green-300 rounded-full opacity-40"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Section */}
      <section className="py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="inline-block glass glass-sm px-6 py-3 mb-6 relative overflow-hidden"
            >
              <div className="absolute inset-0 shimmer opacity-30" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider relative z-10">Our Categories</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Browse{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent relative"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Categories
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-foreground/70 max-w-2xl mx-auto text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Explore our wide range of fresh groceries, organic products, and household essentials
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <CategoryPills />
          </motion.div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="py-20 md:py-32 relative">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.h2
              className="text-5xl md:text-6xl font-black mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
            >
              Why Choose{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Juzbuy?
              </motion.span>
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 40, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15, duration: 0.6 }}
                  className="group relative"
                >
                  <motion.div
                    className="glass glass-lg glass-card-hover p-8 h-full relative overflow-hidden"
                    whileHover={{ 
                      y: -10,
                      rotateY: 5,
                      rotateX: 5,
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Background shimmer effect */}
                    <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Animated icon container */}
                    <motion.div 
                      className="relative mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent p-4 relative z-10 group-hover:glow-neon-teal transition-all duration-500">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-black mb-4 relative z-10">{feature.title}</h3>
                    <p className="text-foreground/70 text-lg leading-relaxed relative z-10">{feature.desc}</p>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-tr from-accent/10 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </motion.div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40, scale: 0.9 }} 
            whileInView={{ opacity: 1, y: 0, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block glass glass-sm px-6 py-3 mb-8 relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 shimmer opacity-40" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider relative z-10">Special Offer</span>
            </motion.div>
            
            <motion.h2 
              className="text-5xl md:text-6xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get{" "}
              <motion.span 
                className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0%", "100%", "0%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                10% Off
              </motion.span>
              {" "}Your First Order
            </motion.h2>
            
            <motion.p 
              className="text-foreground/80 mb-12 text-xl leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Subscribe to our newsletter for exclusive deals and fresh updates
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 glass glass-hover text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/50 text-lg font-medium"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button 
                className="px-8 py-4 bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white rounded-xl font-bold text-lg glow-nature relative overflow-hidden group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="absolute inset-0 shimmer opacity-40 group-hover:opacity-60 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-emerald-600/20 rounded-xl" />
                <span className="relative z-10">Subscribe</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
