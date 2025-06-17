import React, { useEffect } from "react";
import { cn, gradientsCombos } from "@/lib/utils";

import { 
  Home, 
  Folder, 
  SidebarCloseIcon,
  Triangle,
  View,
  Trash,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import SettingsPage from "@/app/pages/main/settings";
import { useSidebar } from "@/providers/sidebar/sidebar-context";

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to: string;
}

export function SidebarItem({ icon, label, to }: SidebarItemProps) {
  const { isCollapsed } = useSidebar();

  return (
    <li className="px-4 py-2">
      <NavLink
        to={to}
        className={({ isActive }) =>
          cn(
            "flex text-sm font-semibold items-center rounded-lg p-2 transition-colors",
            isActive
              ? "text-primary bg-primary/10"
              : "text-on-primary-container hover:bg-primary/10",
            isCollapsed && "justify-center"
          )
        }
      >
        {icon}
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </NavLink>
    </li>
  );
}

export default function Sidebar() {
  const {isCollapsed, toggleSidebar} = useSidebar();
  const {user} = useSelector((state: RootState) => state.auth);
  // const { getTheme } = useTheme();
  // const isDark = getTheme() === "dark";

  useEffect(() => {
    console.log("user: ", user);
  }, [user])
  
  
  const isMobile = useIsMobile();
  
  return (
    <div className="relative h-full">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && !isCollapsed && (
        <div 
          className=" inset-0 bg-opacity-50 z-99"
        ></div>
      )}
      
      <div
        className={cn(
          "h-screen flex flex-col transition-all duration-300 ease-in-out shadow-lg",
          isCollapsed ? "w-16" : "w-52",
          isMobile && !isCollapsed && "w-full max-w-[250px] z-30",
          // light mode gradient
          "bg-gradient-to-b from-[#F8F5FF] to-[#F6F8F9] dark:bg-surface dark:bg-none "
        )}
      >
        <div className="flex items-center p-4 justify-between">
          <div className="flex gap-2 items-center">
            <div className={cn("rounded-full w-8 h-8 p-2 flex items-center justify-center text-white", `bg-gradient-to-r ${gradientsCombos[2]}`)}>
              <span className="text-sm font-semibold">{user?.userName[0].toUpperCase() ?? "!!"}</span>
            </div>
            {!isCollapsed && <span className="text-xs ml-3 text-primary font-medium truncate w-20">{user?.email}</span>}
          </div>
          {!isCollapsed && (
            <div className="rounded-full p-2 hover:bg-primary-container hover:text-on-primary-container"  onClick={toggleSidebar}>
              <SidebarCloseIcon className="h-4 w-4 text-secondary"/>
            </div>
          )}
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul>
            <SidebarItem
              icon={<Home className="h-5 w-5"/>}
              label="Home" to={"/"}            
            />
            <SidebarItem
              icon={<Triangle className="h-5 w-5" />}
              label="All Notes"
              to={"/all-notes"}            
            />
            <SidebarItem
              icon={<Folder className="h-5 w-5" />}
              label="Folders" to={"/folders"}            
            />
            <SidebarItem
              icon={<View className="h-5 w-5" />}
              label="Perspectives" to={"/perspectives"}            
            />
            <SidebarItem
              icon={<Trash className="h-5 w-5" />}
              label="Recycle Bin" to={"/recycled"}            
            />
          </ul>
        </nav>

        <div className="p-4">
          <SettingsPage/>
        </div>
      </div>
    </div>
  );
}
