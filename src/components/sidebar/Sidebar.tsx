import React from "react";
import { cn } from "@/lib/utils";

import { 
  Home, 
  Folder, 
  Settings,
  SidebarCloseIcon,
  Triangle,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useSidebar } from "@/providers/sidebar";
import { NavLink } from "react-router-dom";


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
              : "text-gray-700 hover:bg-primary/10",
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
          "bg-gradient-to-b from-[#F8F5FF] to-[#F6F8F9] shadow-lg h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-gray-100",
          isCollapsed ? "w-16" : "w-64",
          isMobile && !isCollapsed && "w-full max-w-[250px] z-30"
        )}
      >
        <div className="flex items-center p-4 border-b border-gray-100 justify-between">
          <div className="flex gap-2 items-center">
            <div className="bg-primary rounded-full w-8 p-2 flex items-center justify-center text-white">
              <span className="text-sm font-semibold">JD</span>
            </div>
            {!isCollapsed && <span className="ml-3 font-medium">John Doe</span>}
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
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <a
            href="#"
            className={cn(
              "flex items-center text-sm font-semibold hover:text-primary",
              isCollapsed && "justify-center"
            )}
          >
            <Settings className="h-5 w-5" />
            {!isCollapsed && <span className="ml-3">Settings</span>}
          </a>
        </div>
      </div>
    </div>
  );
}
