import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react"
import { type ReactNode } from "react"

interface NotificationComponentProps {
  children: ReactNode
  type?: "info" | "success" | "warning" | "error"
  onClose?: () => void
  className?: string
}

export const NotificationComponent = ({
  children,
  type = "info",
  onClose,
  className,
}: NotificationComponentProps) => {
  const iconMap = {
    info: <Info className="h-5 w-5 text-blue-500" />,
    success: <CheckCircle className="h-5 w-5 text-green-500" />,
    warning: <AlertCircle className="h-5 w-5 text-amber-500" />,
    error: <XCircle className="h-5 w-5 text-red-500" />,
  }

  return (
    <div
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white ",
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
        className 
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-2xl bg-muted">
          <span>{iconMap[type]}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <div className="text-sm text-foreground">{children}</div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="ml-auto shrink-0 rounded-full p-1 text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  )
}
