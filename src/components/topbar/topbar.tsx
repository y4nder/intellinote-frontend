import { PlusCircle, Search, SidebarOpenIcon } from "lucide-react";
import { Button } from "../ui/button";
import { useSearchDialog } from "@/providers/searchDialog";
import { useSidebar } from "@/providers/sidebar";
import { useIsMobile } from "@/hooks/use-is-mobile";

export default function TopBar() {
    const { toggleSearchDialog } = useSearchDialog();
    const isMobile = useIsMobile();

    const handleCreateNote = () => {
        alert("Create new note functionality would go here");
    };

    const { isCollapsed,  toggleSidebar } = useSidebar();

    return (
        <>
            <div className="sticky top-0 z-0 bg-card flex items-center justify-between mb-8 px-4 py-2  backdrop-blur-md">
                {isCollapsed ?
                    <div className="rounded-full p-2 hover:bg-primary-container hover:text-on-primary-container" onClick={toggleSidebar}>
                        <SidebarOpenIcon className="h-4 w-4 text-secondary" />                
                    </div>
                    : <div className="flex"/>
                }
                {!isMobile ?  (
                    <>
                        <div className="flex justify-center">
                            <button onClick={toggleSearchDialog}
                                className="flex items-center min-w-[400px] gap-2 rounded-3xl bg-white px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-12 hover:shadow-md transition-all duration-300 shadow-sm"
                            >
                                <Search className="h-4 w-4 text-secondary" />
                                <span className="text-secondary/50  sm:text-sm font-medium">
                                    Search <span className="hidden xl:inline-block">Notes</span>
                                </span>
                            </button>
                            <Button
                                onClick={handleCreateNote}
                                className="rounded-3xl ml-4 bg-primary-container hover:bg-primary/90 hover:text-white text-on-surface-variant px-4 h-12"
                            >
                                <PlusCircle/>
                                <span className="">Create</span>
                            </Button>
                        </div>
                        <div className="flex"/>
                    </>
                ) : (
                    <div className="flex flex-row">
                        <button onClick={toggleSearchDialog}
                                className="flex items-center w-fit gap-2 rounded-3xl bg-white px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-12 hover:shadow-md transition-all duration-300 shadow-sm"
                            >
                                <Search className="h-4 w-4 text-secondary" />
                                <span className="text-secondary/50  sm:text-sm font-medium">
                                    Search <span className="hidden xl:inline-block">Notes</span>
                                </span>
                        </button>
                        <Button
                            onClick={handleCreateNote}
                            className="rounded-3xl ml-4 bg-primary-container hover:bg-primary/90 hover:text-white text-on-surface-variant px-4 h-12"
                        >   
                            <PlusCircle/>
                        </Button>
                    </div>
                )
            }
            </div>
        </>
    )
}


