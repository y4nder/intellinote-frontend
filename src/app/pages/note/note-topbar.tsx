import { SearchModal } from "@/components/search/search-modal";
import TopBarAddNew from "@/components/topbar/topbar-add-new";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SavingIndicator from "@/components/ui/saving-indicator";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";
import { useSidebar } from "@/providers/sidebar";
import { useWebSocket } from "@/providers/socket/socketContext";

import { Search, SidebarOpenIcon } from "lucide-react";
import { useState } from "react";



export default function NoteTopBar() {
  const { isCollapsed, toggleSidebar } = useSidebar();
  const [searchOpen, setSearchOpen] = useState(false)
  const isMobile = useIsMobile();
  const {isConnected} = useWebSocket();

  return (
    <div className="sticky top-0 z-10 backdrop-blur-md mb-4 flex items-center justify-between gap-4 px-3 pt-4">
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
        <div className={cn("flex flex-row gap-4", `${isMobile? "gap-2" : ""}`)}>
          <SavingIndicator/>
          <div className={cn("flex items-center gap-1", `${isMobile ? "gap-0" : ""}`)}>
            <button onClick={() => setSearchOpen(true)}
              className="flex items-center w-fit gap-2 rounded-3xl bg-background dark:bg-surface-container-low px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-12 hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer"
            >
              <Search className="h-4 w-4 text-secondary" />
              {!isMobile && (
                <span className="text-secondary/50 sm:text-sm font-medium">
                  Search <span className="hidden xl:inline-block">Notes</span>
                </span>
              )}
            </button>
            <TopBarAddNew/>
            {!isMobile && (
              <div className="ml-4 flex items-center gap-4">
                <ModeToggle/>     
                <div
                    className={cn("rounded-full p-1 max-h-[1px]",
                        `${isConnected ? "bg-green-500" : "bg-red-500"}`
                )}
                />                   
              </div>
            )}
          </div>
        </div>
        <SearchModal open={searchOpen} onOpenChange={(open) => {
          console.log("changed: ", open)
          setSearchOpen(open)
        }} />
    </div>
  )
}
