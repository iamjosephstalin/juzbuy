"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { CountdownTimer } from "@/components/countdown-timer"
import { Zap, Gift, TrendingUp } from "lucide-react"

const flashSaleProducts = [
  {
    id: "1",
    name: "Basmati Rice 1kg",
    price: 179,
    image: "/basmati-rice-bag.jpg",
    rating: 4.8,
    category: "Grains",
    originalPrice: 249,
  },
  {
    id: "2",
    name: "Organic Spinach Bundle",
    price: 59,
    image: "/fresh-spinach.png",
    rating: 4.6,
    category: "Vegetables",
    originalPrice: 89,
  },
  {
    id: "3",
    name: "Red Tomatoes (500g)",
    price: 39,
    image: "/fresh-red-tomatoes.jpg",
    rating: 4.5,
    category: "Vegetables",
    originalPrice: 59,
  },
  {
    id: "4",
    name: "Premium Turmeric Powder",
    price: 99,
    image: "/turmeric-powder-spice.jpg",
    rating: 4.7,
    category: "Spices",
    originalPrice: 129,
  },
  {
    id: "5",
    name: "Fresh Apples (1kg)",
    price: 149,
    image: "/fresh-red-apples.png",
    rating: 4.9,
    category: "Fruits",
    originalPrice: 199,
  },
  {
    id: "6",
    name: "Organic Milk 1L",
    price: 59,
    image: "/fresh-dairy-milk.jpg",
    rating: 4.4,
    category: "Dairy",
    originalPrice: 79,
  },
  {
    id: "7",
    name: "Greek Yogurt 400g",
    price: 119,
    image: "/greek-yogurt-container.png",
    rating: 4.7,
    category: "Dairy",
    originalPrice: 149,
  },
  {
    id: "8",
    name: "Green Chillies Bundle",
    price: 35,
    image: "/fresh-green-chillies.jpg",
    rating: 4.6,
    category: "Vegetables",
    originalPrice: 49,
  },
]

const deals = [
  {
    title: "48-Hour Flash Sale",
    subtitle: "Limited Time Offer",
    description: "Get up to 40% off on selected grocery items",
    icon: Zap,
    color: "from-accent to-accent/50",
    endTime: new Date(Date.now() + 48 * 60 * 60 * 1000),
  },
  {
    title: "Weekend Special Bundle",
    subtitle: "Buy More, Save More",
    description: "Mix and match - Get 20% off on combo purchases",
    icon: Gift,
    color: "from-primary to-primary/50",
  },
  {
    title: "Trending This Week",
    subtitle: "Customer Favorites",
    description: "Premium organic products at incredible prices",
    icon: TrendingUp,
    color: "from-green-500 to-green-500/50",
  },
]

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-accent/10 to-transparent border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-accent" />
              <span className="text-accent font-bold text-lg">LIMITED TIME</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Amazing Deals &
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                {" "}
                Exclusive Offers
              </span>
            </h1>
            <p className="text-foreground/60 max-w-2xl">
              Shop smart with Juzbuy. Save big on your favorite groceries with our curated deals and limited-time
              offers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Deal Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {deals.map((deal, idx) => {
            const Icon = deal.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative overflow-hidden rounded-xl p-6 border border-border group cursor-pointer`}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-2.5">
                    <Icon className="w-full h-full text-primary-foreground" />
                  </div>

                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wider">{deal.subtitle}</p>
                    <h3 className="text-xl font-bold text-foreground mt-1">{deal.title}</h3>
                  </div>

                  <p className="text-foreground/60 text-sm">{deal.description}</p>

                  {deal.endTime && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <p className="text-xs text-foreground/60 mb-2">Ends in</p>
                      <CountdownTimer endTime={deal.endTime} />
                    </div>
                  )}
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/0 via-primary/0 to-accent/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Flash Sale Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-8 md:p-12 mb-16 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 border border-accent/30"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 border border-accent/30 rounded-full mb-4"
              >
                <motion.span
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-accent rounded-full"
                />
                <span className="text-sm font-semibold text-accent">Flash Sale Active</span>
              </motion.div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                Save Up to
                <span className="block text-4xl md:text-5xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                  40% Today
                </span>
              </h2>

              <p className="text-foreground/70 mb-6">Limited stocks available. Order now before offers end!</p>

              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-accent to-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Shop Now
              </Link>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
              className="text-6xl md:text-7xl text-center opacity-20"
            >
              🛒
            </motion.div>
          </div>
        </motion.div>

        {/* Flash Sale Products */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-8"
          >
            Flash Sale{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Products</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flashSaleProducts.map((product, idx) => {
              const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="relative"
                >
                  <div className="relative">
                    <ProductCard {...product} delay={0} />
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="absolute -top-3 -right-3 px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold glow-neon-orange"
                      style={{
                        boxShadow: "0 0 20px rgba(255, 138, 0, 0.3)",
                        transition: "box-shadow 0.3s ease",
                      }}
                    >
                      -{discount}%
                    </motion.div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't Miss Out on Deals</h2>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Subscribe to get notifications about upcoming flash sales and exclusive member-only offers
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              View All Offers
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
