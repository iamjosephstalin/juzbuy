"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface CountdownTimerProps {
  endTime: Date
}

export function CountdownTimer({ endTime }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const updateTimer = () => {
      const now = new Date()
      const difference = endTime.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    updateTimer()
    const interval = setInterval(updateTimer, 1000)
    return () => clearInterval(interval)
  }, [endTime])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="text-center"
      key={value}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
    >
      <div className="px-3 py-2 bg-accent/20 rounded-lg border border-accent/30">
        <p className="text-2xl font-bold text-accent">{String(value).padStart(2, "0")}</p>
      </div>
      <p className="text-xs text-foreground/60 mt-1 uppercase">{label}</p>
    </motion.div>
  )

  return (
    <div className="flex gap-2 items-end">
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl text-accent font-bold">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl text-accent font-bold">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
