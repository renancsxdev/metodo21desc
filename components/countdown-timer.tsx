"use client"

import { useState, useEffect } from "react"

interface CountdownTimerProps {
  minutes: number
}

export default function CountdownTimer({ minutes }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    minutes: minutes,
    seconds: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.minutes === 0 && prev.seconds === 0) {
          clearInterval(interval)
          return prev
        }

        if (prev.seconds === 0) {
          return {
            minutes: prev.minutes - 1,
            seconds: 59,
          }
        }

        return {
          minutes: prev.minutes,
          seconds: prev.seconds - 1,
        }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white">{String(timeLeft.minutes).padStart(2, "0")}</div>
        <div className="text-xs text-gray-400">minutos</div>
      </div>
      <div className="text-2xl font-bold text-white">:</div>
      <div className="flex flex-col items-center">
        <div className="text-4xl font-bold text-white">{String(timeLeft.seconds).padStart(2, "0")}</div>
        <div className="text-xs text-gray-400">segundos</div>
      </div>
    </div>
  )
}
