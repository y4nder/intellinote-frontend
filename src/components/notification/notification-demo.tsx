import { Button } from "@/components/ui/button"
import { useState } from "react"
import { NotificationContainer, type NotificationItem } from "./notification-container"
import { v4 as uuidv4 } from "uuid"

export default function NotificationDemo() {
  const [notifications, setNotifications] = useState<NotificationItem[]>([])

  const addNotification = (type: "info" | "success" | "warning" | "error") => {
    const id = uuidv4()
    const newNotification: NotificationItem = {
      id,
      type,
      content: (
        <div>
          <h4 className="text-sm font-medium">
            {type === "info" && "Information"}
            {type === "success" && "Success"}
            {type === "warning" && "Warning"}
            {type === "error" && "Error"}
          </h4>
          <p className="text-sm text-muted-foreground mt-1">
            {type === "info" && "This is an informational notification."}
            {type === "success" && "Your action was completed successfully!"}
            {type === "warning" && "Please be careful with this action."}
            {type === "error" && "An error occurred. Please try again."}
          </p>
        </div>
      ),
      onClose: () => {
        setNotifications((prev) => prev.filter((n) => n.id !== id))
      },
      duration: 5000, // Auto dismiss after 5 seconds
    }

    setNotifications((prev) => [newNotification, ...prev])
  }

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => addNotification("info")} variant="outline">
          Add Info
        </Button>
        <Button onClick={() => addNotification("success")} variant="outline" className="text-green-500">
          Add Success
        </Button>
        <Button onClick={() => addNotification("warning")} variant="outline" className="text-amber-500">
          Add Warning
        </Button>
        <Button onClick={() => addNotification("error")} variant="outline" className="text-red-500">
          Add Error
        </Button>
      </div>

      <NotificationContainer notifications={notifications} position="top-right" maxNotifications={5} />
    </div>
  )
}
