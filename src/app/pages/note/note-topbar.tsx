import { SearchModal } from "@/components/search/search-modal";
import TopBarAddNew from "@/components/topbar/topbar-add-new";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import SavingIndicator from "@/components/ui/saving-indicator";
import { useSidebar } from "@/providers/sidebar";
import { Search, SidebarOpenIcon } from "lucide-react";
import { useState } from "react";



export default function NoteTopBar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [searchOpen, setSearchOpen] = useState(false)

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
        <div className="flex flex-row gap-4">
          <div className="flex items-center gap-1">
            <button onClick={() => setSearchOpen(true)}
              className="flex items-center w-fit gap-2 rounded-3xl bg-white px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-12 hover:shadow-md transition-all duration-300 shadow-sm"
            >
              <Search className="h-4 w-4 text-secondary" />
              <span className="text-secondary/50  sm:text-sm font-medium">
                Search <span className="hidden xl:inline-block">Notes</span>
              </span>
            </button>
            <TopBarAddNew/>                        
          </div>
          <SavingIndicator/>
        </div>
        <SearchModal open={searchOpen} onOpenChange={(open) => {
          console.log("changed: ", open)
          setSearchOpen(open)
        }} />
    </div>
  )
}
