import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import SavingIndicator from "@/components/ui/saving-indicator";
import { useSidebar } from "@/providers/sidebar";
import { SidebarOpenIcon } from "lucide-react";



export default function NoteTopBar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
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
        <SavingIndicator/>
    </div>
  )
}
