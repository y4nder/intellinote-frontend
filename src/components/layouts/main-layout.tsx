import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar/Sidebar";
import ChatPanel from "@/components/chat/ChatPanel";
import { useSidebar } from "@/providers/sidebar";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Outlet } from "react-router-dom";

//done create sidebar context
//done create application reducer context
//done create chat agent context
//done modularize this page

export default function MainLayout() {
  const {isCollapsed} = useSidebar();
  const {isCollapsed: isChatCollapsed} = useSelector((state: RootState) => state.chatAgent);


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
        "md:relative z-10",
        isChatCollapsed ? 
          "translate-x-[100%] md:translate-x-[100%] md:w-0 w-0" : 
          "fixed translate-x-0 right-0 w-full md:w-[350px]",
          "transition-all duration-300 h-full"
      )}>
        <ChatPanel/>
      </div>
    </div>
  );
}
