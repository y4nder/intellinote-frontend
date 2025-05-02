import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Sidebar from "@/components/sidebar/Sidebar";
import ChatPanel from "@/components/chat/ChatPanel";
import { useSidebar } from "@/providers/sidebar";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { toggleChat } from "@/redux/slice/chat-agent";
import { Outlet } from "react-router-dom";

//done create sidebar context
//done create application reducer context
//done create chat agent context
//done modularize this page

export default function MainLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useIsMobile();
  const {isCollapsed, toggleSidebar} = useSidebar();
  const {isCollapsed: isChatCollapsed} = useSelector((state: RootState) => state.chatAgent);

  const handleToggleChat = () => {
    dispatch(toggleChat());
  }

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      {/* Sidebar with mobile responsive behavior */}
      <div className={cn(
        "fixed md:relative z-20",
        isCollapsed && "translate-x-[-100%] md:translate-x-0 md:w-16",
        !isCollapsed && "translate-x-0 w-64",
        "transition-all duration-300"
      )}>
        <Sidebar/>
      </div>
      
      <main className={cn("flex-1 overflow-y-auto transition-all duration-300 relative")}>
        <Outlet/>
      </main>

      {/* Chat panel with mobile responsive behavior */}
      <div className={cn(
        "fixed md:relative z-10",
        isChatCollapsed ? 
          "translate-x-[100%] md:translate-x-[100%] md:w-0 w-0" : 
          "translate-x-0 right-0 w-full md:w-80",
          "transition-all duration-300 h-full"
      )}>
        <ChatPanel/>
      </div>
      
      {/* Mobile toggle buttons */}
      {isMobile && (
        <>
          <div className="fixed bottom-4 left-4 z-30">
            <button
              onClick={toggleSidebar}
              className="bg-primary text-white rounded-full p-3 shadow-lg"
            >
              {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="fixed bottom-4 right-4 z-30">
            <button
              onClick={handleToggleChat}
              className="bg-secondary text-white rounded-full p-3 shadow-lg"
            >
              {isChatCollapsed ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
