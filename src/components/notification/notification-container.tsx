"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { createPortal } from "react-dom"
import { useEffect, useState, type ReactNode } from "react"
import { NotificationComponent } from "./notification-component"

export interface NotificationItem {
  id: string
  content: ReactNode
  type?: "info" | "success" | "warning" | "error"
  onClose?: () => void
  duration?: number
}

export interface NotificationContainerProps {
  notifications: NotificationItem[]
  className?: string
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center"
  maxNotifications?: number
}

export const NotificationContainer = ({
  notifications,
  className,
  position = "top-right",
  maxNotifications = 5,
}: NotificationContainerProps) => {
  const prefersReducedMotion = useReducedMotion()
  const [visibleNotifications, setVisibleNotifications] = useState<NotificationItem[]>([])

  useEffect(() => {
    const timers: NodeJS.Timeout[] = []

    notifications.forEach((notification) => {
      if (notification.duration) {
        const timer = setTimeout(() => {
          notification.onClose?.()
        }, notification.duration)
        timers.push(timer)
      }
    })

    return () => timers.forEach(clearTimeout)
  }, [notifications])

  useEffect(() => {
    setVisibleNotifications(notifications.slice(0, maxNotifications))
  }, [notifications, maxNotifications])

  const positionClasses = {
    "top-right": "top-6 right-6 items-end",
    "top-left": "top-6 left-6 items-start",
    "bottom-right": "bottom-6 right-6 items-end",
    "bottom-left": "bottom-6 left-6 items-start",
    "top-center": "top-6 left-1/2 -translate-x-1/2 items-center",
    "bottom-center": "bottom-6 left-1/2 -translate-x-1/2 items-center",
  }

  const getAnimationVariants = () => {
    if (prefersReducedMotion) {
      return {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
      }
    }

    const isTop = position.startsWith("top")
    const isRight = position.includes("right")
    const isCenter = position.includes("center")

    return {
      initial: {
        opacity: 0,
        scale: 0.95,
        y: isTop ? -16 : 16,
        x: isCenter ? 0 : isRight ? 16 : -16,
      },
      animate: {
        opacity: 1,
        scale: 1,
        y: 0,
        x: 0,
        transition: { type: "spring", stiffness: 400, damping: 28 },
      },
      exit: {
        opacity: 0,
        scale: 0.92,
        x: isCenter ? 0 : isRight ? 60 : -60,
        transition: { type: "spring", stiffness: 400, damping: 28 },
      },
    }
  }

  // Return null until mounted to avoid SSR/DOM mismatch
  
  return createPortal(
    <div
      className={cn(
        "pointer-events-none fixed z-50 flex max-h-screen flex-col gap-3 px-4 w-full",
        positionClasses[position],
        className,
      )}
    >
      <AnimatePresence mode="popLayout">
        {visibleNotifications.map((notification, index) => (
          <motion.div
            key={notification.id}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={getAnimationVariants()}
            transition={{
              layout: { type: "spring", stiffness: 300, damping: 30 },
              delay: prefersReducedMotion ? 0 : index * 0.05,
            }}
            className="pointer-events-auto w-full max-w-sm sm:max-w-md"
          >
            <NotificationComponent
              type={notification.type}
              onClose={notification.onClose}
            >
              {notification.content}
            </NotificationComponent>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>,
    document.body
  )
}
