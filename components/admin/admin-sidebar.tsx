"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  Package,
  Receipt,
  ShoppingCart,
  Users,
  BarChart3,
  Settings,
  LogOut,
  Store
} from "lucide-react"

const menuItems = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Stock Management",
    href: "/admin/stock",
    icon: Package,
  },
  {
    label: "Add Product",
    href: "/admin/stock/add",
    icon: Package,
  },
  {
    label: "Billing",
    href: "/admin/billing",
    icon: Receipt,
  },
  {
    label: "Orders",
    href: "/admin/orders",
    icon: ShoppingCart,
  },
  {
    label: "Customers",
    href: "/admin/customers",
    icon: Users,
  },
  {
    label: "Analytics",
    href: "/admin/analytics",
    icon: BarChart3,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: Settings,
  },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <motion.div
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      className="w-72 h-screen glass glass-lg backdrop-blur-xl border-r border-white/20 flex flex-col sticky top-0"
    >
      {/* Logo */}
      <div className="p-6 border-b border-white/10">
        <Link href="/admin" className="flex items-center gap-3 group">
          <motion.div
            className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl glow-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Store className="w-6 h-6 text-primary-foreground m-2" />
          </motion.div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Juzbuy Admin
            </span>
            <p className="text-xs text-foreground/60">Management Panel</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          
          return (
            <motion.div key={item.href} whileHover={{ x: 4 }} whileTap={{ scale: 0.98 }}>
              <Link
                href={item.href}
                className={`
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group relative overflow-hidden
                  ${isActive 
                    ? "glass glass-hover bg-gradient-to-r from-primary/20 to-accent/20 border-primary/30 text-primary" 
                    : "text-foreground/70 hover:text-foreground hover:bg-white/5"
                  }
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <Icon className={`w-5 h-5 relative z-10 ${isActive ? "text-primary" : ""}`} />
                <span className="font-medium relative z-10">{item.label}</span>
                {isActive && (
                  <motion.div
                    className="absolute right-0 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-l-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                  />
                )}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* User Section */}
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 glass glass-sm rounded-xl">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
            <span className="text-sm font-bold text-primary-foreground">A</span>
          </div>
          <div className="flex-1">
            <p className="font-medium text-sm">Admin User</p>
            <p className="text-xs text-foreground/60">admin@juzbuy.com</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4 text-foreground/60" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}