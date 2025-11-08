import type React from "react"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { AdminHeader } from "@/components/admin/admin-header"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen relative">
      {/* Admin Background */}
      <div className="fixed inset-0 -z-50">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-orange-50/20 to-green-50/15 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        
        {/* Subtle mesh gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full"
               style={{
                 background: `radial-gradient(ellipse at top right, rgba(255, 140, 0, 0.08) 0%, transparent 50%),
                              radial-gradient(ellipse at bottom left, rgba(34, 139, 34, 0.06) 0%, transparent 50%)`
               }} />
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen bg-background/70 backdrop-blur-sm">
        <div className="flex">
          <AdminSidebar />
          <div className="flex-1 flex flex-col">
            <AdminHeader />
            <main className="flex-1 p-6">
              {children}
            </main>
          </div>
        </div>
      </div>
    </div>
  )
}