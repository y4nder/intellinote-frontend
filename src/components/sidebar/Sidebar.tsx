import React from "react";
import { cn } from "@/lib/utils";

import { 
  Home, 
  FileText, 
  Folder, 
  Tag, 
  Trash2, 
  Settings,
  SidebarCloseIcon,
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { useSidebar } from "@/providers/sidebar";


interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

function SidebarItem({ icon, label, isActive }: SidebarItemProps) {

  const {isCollapsed} = useSidebar();

  return (
    <li className="px-4 py-2">
      <a
        href="#"
        className={cn(
          "flex items-center rounded-lg p-2 transition-colors",
          isActive
            ? "text-primary bg-primary/10"
            : "text-gray-700 sidebar-hover",
          isCollapsed && "justify-center"
        )}
      >
        {icon}
        {!isCollapsed && <span className="ml-3">{label}</span>}
      </a>
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
          className="fixed inset-0 bg-opacity-50 z-20"
        ></div>
      )}
      
      <div
        className={cn(
          "bg-white shadow-lg h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-gray-100",
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
              icon={<Home className="h-5 w-5" />}
              label="Home"
            />
            <SidebarItem
              icon={<FileText className="h-5 w-5" />}
              label="All Notes"
              isActive
            />
            <SidebarItem
              icon={<Folder className="h-5 w-5" />}
              label="Folders"
            />
            <SidebarItem
              icon={<Tag className="h-5 w-5" />}
              label="Tags"
            />
            <SidebarItem
              icon={<Trash2 className="h-5 w-5" />}
              label="Trash"
            />
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <a
            href="#"
            className={cn(
              "flex items-center text-gray-700 hover:text-primary",
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
