"use client"

import { motion } from "framer-motion"

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg"
  color?: "primary" | "white" | "gray"
  className?: string
}

export function LoadingSpinner({ size = "md", color = "primary", className = "" }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: "w-4 h-4 border-2",
    md: "w-6 h-6 border-2",
    lg: "w-8 h-8 border-3"
  }

  const colorClasses = {
    primary: "border-primary border-t-transparent",
    white: "border-white border-t-transparent",
    gray: "border-gray-400 border-t-transparent"
  }

  return (
    <div className={`${sizeClasses[size]} ${colorClasses[color]} rounded-full animate-spin ${className}`} />
  )
}

interface LoadingOverlayProps {
  isLoading: boolean
  children: React.ReactNode
  message?: string
}

export function LoadingOverlay({ isLoading, children, message = "Loading..." }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 rounded-lg"
        >
          <div className="glass glass-lg p-6 flex flex-col items-center gap-3">
            <LoadingSpinner size="lg" color="primary" />
            <p className="text-sm font-medium text-foreground/80">{message}</p>
          </div>
        </motion.div>
      )}
    </div>
  )
}

interface PageLoadingProps {
  message?: string
}

export function PageLoading({ message = "Loading..." }: PageLoadingProps) {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="glass glass-lg p-12 flex flex-col items-center gap-4"
      >
        <LoadingSpinner size="lg" color="primary" />
        <h2 className="text-xl font-bold">{message}</h2>
      </motion.div>
    </div>
  )
}