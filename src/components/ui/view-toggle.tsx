import { LayoutGrid, List } from "lucide-react"
import { cn } from "@/lib/utils"
import { RootState } from "@/redux/store"
import { useDispatch, useSelector } from 'react-redux';
import { toggleNoteGrid } from "@/redux/slice/preference";


interface ViewToggleProps {
  onViewChange?: (view: "grid" | "list") => void
  className?: string
}

export default function ViewToggle({ onViewChange, className }: ViewToggleProps) {
  const dispatch = useDispatch()
  const {isNoteGrid } = useSelector((state: RootState) => state.preference);

  const handleViewChange = (view: "grid" | "list") => {
    const isGrid = view === "grid"
    if (isNoteGrid !== isGrid) {
      dispatch(toggleNoteGrid())
      onViewChange?.(view)
    }
  }

  return (
    <div className={cn("flex rounded-3xl border border-outline-variant bg-background overflow-hidden w-fit h-[30px]", className)}>
      <button
        onClick={() => handleViewChange("list")}
        className={cn(
          "flex items-center justify-center px-2 transition-colors",
          !isNoteGrid ? "bg-primary text-on-primary" : "text-on-background hover:bg-secondary",
        )}
        aria-label="List view"
      >
        <List size={14} />
      </button>
      <button
        onClick={() => handleViewChange("grid")}
        className={cn(
          "flex items-center justify-center px-2 transition-colors",
          isNoteGrid ? "bg-primary text-on-primary" : "text-on-background hover:bg-secondary",
        )}
        aria-label="Grid view"
      >
        <LayoutGrid size={14} />
      </button>
    </div>
  )
}