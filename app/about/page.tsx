"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Users, Zap, Leaf, Heart, Globe } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: "Speed",
      description: "Lightning-fast delivery without compromising on freshness",
    },
    {
      icon: Leaf,
      title: "Freshness",
      description: "Handpicked produce delivered to your doorstep daily",
    },
    {
      icon: Heart,
      title: "Quality",
      description: "Premium selection of organic and trusted brands",
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Eco-friendly packaging and sustainable sourcing",
    },
  ]

  const team = [
    {
      name: "Priya Sharma",
      role: "Co-founder & CEO",
      bio: "Led the vision of modernizing grocery delivery with AI and technology",
    },
    {
      name: "Raj Patel",
      role: "Co-founder & CTO",
      bio: "Building the tech infrastructure that powers Juzbuy",
    },
    {
      name: "Anjali Verma",
      role: "Head of Operations",
      bio: "Ensuring timely and accurate delivery to every household",
    },
    {
      name: "Vikram Singh",
      role: "Head of Partnerships",
      bio: "Sourcing the freshest products from local and premium suppliers",
    },
  ]

  const milestones = [
    { year: "2022", event: "Juzbuy Founded - Started with 1 delivery zone" },
    { year: "2023", event: "Expanded to 5 cities with 50+ delivery partners" },
    { year: "2024", event: "Launched AI-powered recommendation engine" },
    { year: "2025", event: "Reached 100k+ active users across India" },
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
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">About Juzbuy</span>
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mt-4 mb-6">
              Reimagining Grocery
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Delivery</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We believe everyone deserves access to fresh, quality groceries delivered fast. Our mission is to make
              grocery shopping seamless, affordable, and delightful.
            </p>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-24 bg-card/30 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-4">
                Juzbuy was born from a simple observation: grocery shopping in India was broken. Long queues, limited
                selection, compromised freshness, and unpredictable delivery times frustrated millions.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Our founders came together with a vision to revolutionize this experience. Using cutting-edge
                technology, local partnerships, and a customer-first approach, we created a platform that brings
                farm-fresh groceries to your doorstep within hours—not days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              These principles guide every decision we make at Juzbuy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-card/60 transition-all duration-300 group"
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
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-foreground/60 text-sm">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">Major milestones in Juzbuy's growth</p>
          </motion.div>

          <div className="space-y-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 items-center"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {milestone.year}
                  </span>
                </div>
                <div className="flex-1 p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors duration-300">
                  <p className="text-foreground text-lg">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Meet Our
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Team</span>
            </h2>
            <p className="text-foreground/60 max-w-2xl mx-auto">
              Passionate individuals dedicated to revolutionizing grocery delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-card border border-border rounded-xl hover:border-primary hover:bg-card/60 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent p-1 mb-4">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                <p className="text-primary text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-foreground/60 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join Us?</h2>
            <p className="text-foreground/70 mb-8 text-lg max-w-2xl mx-auto">
              Be part of India's fastest-growing grocery delivery platform. Shop now or become a delivery partner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/shop"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Start Shopping
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:bg-primary/5 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
