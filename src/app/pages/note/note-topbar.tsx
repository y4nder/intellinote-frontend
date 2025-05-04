import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { useSidebar } from "@/providers/sidebar";
import { RootState } from "@/redux/store";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, Loader2, SidebarOpenIcon } from "lucide-react";
import { useSelector } from "react-redux";


export default function NoteTopBar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const { isSaving } = useSelector((state: RootState) => state.folderNotes);
  return (
    <div className="sticky top-0 z-10 backdrop-blur-md mb-4 flex items-center justify-between gap-4 px-3 pt-6">
        <div className="flex items-center gap-4">
          {isCollapsed ? (
            <div
              className="rounded-full p-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer"
              onClick={toggleSidebar}
            >
              <SidebarOpenIcon className="h-4 w-4 text-secondary" />
            </div>
          ) : (
            <div className="flex" />
          )}
          <BreadcrumbUi />
        </div>
        
        {/* Enhanced Saving Indicator */}
        <AnimatePresence mode="wait" initial={false}>
          {isSaving ? (
            <motion.div
              key="saving"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center gap-1 text-sm text-muted-foreground"
            >
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Saving...</span>
            </motion.div>
          ) : (
            <motion.div
              key="saved"
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="flex items-center gap-1 text-sm text-green-600"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Saved</span>
            </motion.div>
          )}
        </AnimatePresence>

    </div>
  )
}
