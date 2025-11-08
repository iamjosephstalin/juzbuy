"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Check, ChevronRight, Lock, Truck } from "lucide-react"

const paymentMethods = [
  { id: "upi", name: "UPI", icon: "📱" },
  { id: "gpay", name: "Google Pay", icon: "🔵" },
  { id: "paytm", name: "Paytm", icon: "💙" },
  { id: "card", name: "Credit/Debit Card", icon: "💳" },
  { id: "rupay", name: "RuPay", icon: "🏧" },
]

const cartItems = [
  {
    id: "1",
    name: "Basmati Rice 1kg",
    price: 249,
    quantity: 2,
    image: "/basmati-rice-bag.jpg",
  },
  {
    id: "2",
    name: "Organic Milk 1L",
    price: 79,
    quantity: 3,
    image: "/fresh-dairy-milk.jpg",
  },
  {
    id: "3",
    name: "Fresh Apples (1kg)",
    price: 199,
    quantity: 1,
    image: "/fresh-red-apples.png",
  },
]

export default function CheckoutPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedPayment, setSelectedPayment] = useState("upi")
  const [orderPlaced, setOrderPlaced] = useState(false)

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 500 ? 0 : 49
  const tax = Math.round(subtotal * 0.05)
  const total = subtotal + deliveryFee + tax

  const steps = [
    { number: 1, title: "Cart", subtitle: "Review Items" },
    { number: 2, title: "Delivery", subtitle: "Shipping Address" },
    { number: 3, title: "Payment", subtitle: "Choose Method" },
    { number: 4, title: "Confirmation", subtitle: "Order Placed" },
  ]

  const handlePlaceOrder = () => {
    setOrderPlaced(true)
    setCurrentStep(4)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Indicator */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-12">
          <div className="flex items-center justify-between md:justify-start md:gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex items-center">
                <motion.div
                  whileInView={{ scale: 1.1 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-all duration-300 ${
                    currentStep >= step.number
                      ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
                      : "bg-card border-2 border-border text-foreground/60"
                  }`}
                  style={
                    currentStep >= step.number
                      ? {
                          boxShadow: "0 0 20px rgba(0, 255, 198, 0.3)",
                          transition: "box-shadow 0.3s ease",
                        }
                      : {}
                  }
                >
                  {currentStep > step.number ? <Check className="w-5 h-5" /> : step.number}
                </motion.div>

                {idx < steps.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: currentStep > step.number ? 1 : 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className={`hidden md:block w-16 h-1 mx-2 rounded-full transition-colors duration-300 origin-left ${
                      currentStep > step.number ? "bg-gradient-to-r from-primary to-accent" : "bg-border"
                    }`}
                  />
                )}

                {/* Step Labels - Hidden on mobile */}
                <div className="hidden md:block ml-3">
                  <p className="text-xs font-semibold text-foreground/60 uppercase">{step.subtitle}</p>
                  <p className="text-sm font-bold text-foreground">{step.title}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {!orderPlaced ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Step 1: Cart Review */}
              {currentStep === 1 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Order Review</h2>
                    <div className="space-y-4">
                      {cartItems.map((item, idx) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-4 pb-4 border-b border-border last:border-0"
                        >
                          <img
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            className="w-20 h-20 rounded-lg object-cover bg-muted"
                          />
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground mb-2">{item.name}</h3>
                            <div className="flex justify-between items-center">
                              <span className="text-sm text-foreground/60">Qty: {item.quantity}</span>
                              <span className="font-bold text-primary">₹{item.price * item.quantity}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setCurrentStep(2)}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Continue to Delivery
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                </motion.div>
              )}

              {/* Step 2: Delivery Address */}
              {currentStep === 2 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Delivery Address</h2>
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                        />
                        <input
                          type="tel"
                          placeholder="Phone Number"
                          className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                        />
                      </div>
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                      />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <input
                          type="text"
                          placeholder="City"
                          className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                        />
                        <input
                          type="text"
                          placeholder="State"
                          className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                        />
                        <input
                          type="text"
                          placeholder="Postal Code"
                          className="px-4 py-2 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary"
                        />
                      </div>
                    </form>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(1)}
                      className="flex-1 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(3)}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Continue to Payment
                      <ChevronRight className="w-5 h-5" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Payment Method */}
              {currentStep === 3 && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
                  <div className="bg-card border border-border rounded-xl p-6">
                    <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {paymentMethods.map((method) => (
                        <motion.button
                          key={method.id}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedPayment(method.id)}
                          className={`p-4 rounded-lg border-2 transition-all duration-300 ${
                            selectedPayment === method.id
                              ? "border-primary bg-primary/10"
                              : "border-border hover:border-primary/50"
                          }`}
                          style={
                            selectedPayment === method.id
                              ? {
                                  boxShadow: "0 0 20px rgba(0, 255, 198, 0.3)",
                                  transition: "box-shadow 0.3s ease",
                                }
                              : {}
                          }
                        >
                          <div className="text-2xl mb-2">{method.icon}</div>
                          <p className="text-sm font-semibold text-foreground">{method.name}</p>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 flex items-center gap-4">
                    <Lock className="w-5 h-5 text-accent flex-shrink-0" />
                    <p className="text-sm text-foreground/70">
                      Your payment is secure and encrypted using industry-standard SSL protection.
                    </p>
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setCurrentStep(2)}
                      className="flex-1 px-6 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
                    >
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handlePlaceOrder}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Place Order
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-card border border-border rounded-xl p-6 h-fit sticky top-20"
            >
              <h3 className="text-lg font-bold mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6 pb-6 border-b border-border">
                <div className="flex justify-between text-foreground/70">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Delivery
                  </span>
                  <span className={deliveryFee === 0 ? "text-green-500" : ""}>
                    {deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}
                  </span>
                </div>
                <div className="flex justify-between text-foreground/70">
                  <span>Tax (5%)</span>
                  <span>₹{tax}</span>
                </div>
              </div>

              <div className="flex justify-between text-xl font-bold mb-6 text-primary">
                <span>Total</span>
                <span>₹{total}</span>
              </div>

              {deliveryFee === 0 && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-xs text-green-500 mb-4">
                  Free delivery on orders above ₹500!
                </div>
              )}

              <button className="w-full px-4 py-2 bg-primary/20 text-primary rounded-lg text-sm font-semibold hover:bg-primary/30 transition-colors">
                Apply Coupon
              </button>
            </motion.div>
          </div>
        ) : (
          /* Order Confirmation */
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-12">
              <motion.div
                animate={{ scale: [0, 1, 0.95, 1] }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
              >
                <Check className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              <h2 className="text-4xl font-bold text-foreground mb-2">Order Placed Successfully!</h2>
              <p className="text-foreground/60 mb-8">Your order has been confirmed and will be delivered soon.</p>

              <div className="bg-card border border-border rounded-xl p-8 space-y-4 mb-8">
                <div>
                  <p className="text-foreground/60 text-sm mb-1">Order ID</p>
                  <p className="text-2xl font-bold text-primary">#JZ2025001</p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-foreground/60 text-sm mb-1">Estimated Delivery</p>
                  <p className="text-lg font-semibold text-foreground">Today, 6:00 PM - 8:00 PM</p>
                </div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Continue Shopping
              </motion.a>
            </div>
          </motion.div>
        )}
      </div>

      <Footer />
    </div>
  )
}
