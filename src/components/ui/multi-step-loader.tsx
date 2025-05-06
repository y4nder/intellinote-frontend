"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export interface Step {
  id: number
  label: string
  status: "completed" | "active" | "pending"
}

interface MultiStepLoaderProps {
  steps: Step[]
  autoProgress?: boolean
  progressDelay?: number
  className?: string
}

export default function MultiStepLoader({
  steps: initialSteps,
  autoProgress = false,
  progressDelay = 2000,
  className,
}: MultiStepLoaderProps) {
  const [steps, setSteps] = useState<Step[]>(initialSteps)
  const [, setCurrentStepIndex] = useState(0)

  useEffect(() => {
    if (!autoProgress) return

    const interval = setInterval(() => {
      setCurrentStepIndex((prevIndex) => {
        const newIndex = prevIndex + 1
        if (newIndex >= steps.length) {
          clearInterval(interval)
          return prevIndex
        }

        // Update steps status
        setSteps((prevSteps) =>
          prevSteps.map((step, idx) => ({
            ...step,
            status: idx < newIndex ? "completed" : idx === newIndex ? "active" : "pending",
          })),
        )

        return newIndex
      })
    }, progressDelay)

    return () => clearInterval(interval)
  }, [steps.length, autoProgress, progressDelay])

  return (
    <div className={cn("w-full max-w-3xl", className)}>
      <div className="space-y-4">
        {steps.map((step) => (
          <div key={step.id} className="space-y-1">
            <div
                className={cn(
                    "h-2 w-full rounded-full relative overflow-hidden bg-gray-700",
                    step.status === "completed" && "bg-purple-600"
                )}
                >
                {step.status === "active" && (
                    <div className="absolute left-0 top-0 h-full w-full bg-purple-600 animate-pulse" />
                )}
            </div>
            {step.status !== "pending" && <p className="text-sm text-gray-400">{step.label}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}
