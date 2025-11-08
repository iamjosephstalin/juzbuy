"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      content: "support@juzbuy.com",
      description: "We typically respond within 2 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 (555) 123-4567",
      description: "Available Monday to Sunday, 9 AM - 11 PM",
    },
    {
      icon: MapPin,
      title: "Office",
      content: "Mumbai, India",
      description: "Headquarters and main support center",
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Available",
      description: "Round-the-clock customer support via chat",
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    // TODO: Implement actual form submission to backend API
    // Example: await submitContactForm(formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const faqs = [
    {
      question: "What are your delivery timings?",
      answer: "We offer deliveries between 6 AM - 11 PM, with most orders delivered within 30-60 minutes.",
    },
    {
      question: "Do you deliver to my area?",
      answer: "We're expanding rapidly across India. Check your pincode on our app to see if delivery is available.",
    },
    {
      question: "What's your return policy?",
      answer: "We offer 100% refund for damaged or unsatisfactory products. Simply report within 2 hours of delivery.",
    },
    {
      question: "How do I become a delivery partner?",
      answer: "Visit our partner portal or contact careers@juzbuy.com to learn about partnership opportunities.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mt-4 mb-6">
              We're Here to
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Help</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Have questions or need assistance? Our support team is ready to help you 24/7
            </p>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 md:py-24 bg-card/30 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-background border border-border rounded-xl hover:border-primary hover:bg-card/50 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 mb-4 transition-all"
                    style={{
                      boxShadow: "0 0 20px rgba(0, 255, 198, 0.3)",
                      transition: "box-shadow 0.3s ease",
                    }}
                  >
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                  <p className="text-primary font-semibold mb-2">{method.content}</p>
                  <p className="text-foreground/60 text-sm">{method.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="bg-card border border-border rounded-xl p-8">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell us more..."
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="w-full px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {submitted ? (
                      <>
                        <MessageSquare className="w-4 h-4" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>

                {faqs.map((faq, idx) => (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-card/60 transition-all duration-300"
                  >
                    <h3 className="font-semibold text-lg mb-3 text-foreground">{faq.question}</h3>
                    <p className="text-foreground/70">{faq.answer}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-16 md:py-24 bg-card/30 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-8 text-center">We're Growing Across India</h2>
            <div className="bg-background border border-border rounded-xl p-8 text-center h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 opacity-50" />
                <p className="text-foreground/60 text-lg">Currently operating in 15+ cities across India</p>
                <p className="text-foreground/50 mt-2">Expanding to your city soon!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
