"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Plus, Search, Receipt, Calculator } from "lucide-react"
import { BillingInterface } from "@/components/admin/billing-interface"
import { RecentBills } from "@/components/admin/recent-bills"
import { BillingSummary } from "@/components/admin/billing-summary"

export default function BillingPage() {
  const [activeTab, setActiveTab] = useState<"new" | "history">("new")

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center justify-between"
      >
        <div>
          <h1 className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Billing System
          </h1>
          <p className="text-foreground/60 mt-2">
            Create new bills and manage transactions
          </p>
        </div>

        <BillingSummary />
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-2 glass glass-sm p-2 w-fit"
      >
        <motion.button
          onClick={() => setActiveTab("new")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${activeTab === "new"
              ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
              : "text-foreground/70 hover:text-foreground hover:bg-white/10"
            }
          `}
        >
          {activeTab === "new" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <div className="relative z-10 flex items-center gap-2">
            <Plus className="w-4 h-4" />
            New Bill
          </div>
        </motion.button>

        <motion.button
          onClick={() => setActiveTab("history")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`
            relative px-6 py-3 rounded-lg font-semibold transition-all duration-300
            ${activeTab === "history"
              ? "bg-gradient-to-r from-primary to-accent text-primary-foreground"
              : "text-foreground/70 hover:text-foreground hover:bg-white/10"
            }
          `}
        >
          {activeTab === "history" && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-lg"
              initial={false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <div className="relative z-10 flex items-center gap-2">
            <Receipt className="w-4 h-4" />
            Bill History
          </div>
        </motion.button>
      </motion.div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {activeTab === "new" ? <BillingInterface /> : <RecentBills />}
      </motion.div>
    </div>
  )
}