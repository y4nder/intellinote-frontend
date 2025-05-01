import React from "react";
import { Tag as TagType } from "@/data/mockData";
import { cn } from "@/lib/utils";

import { 
  Home, 
  FileText, 
  Folder, 
  Tag, 
  Trash2, 
  Settings, 
  ChevronLeft, 
  ChevronRight 
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface SidebarProps {
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  tags?: TagType[];
}

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  isCollapsed: boolean;
}

function SidebarItem({ icon, label, isActive, isCollapsed }: SidebarItemProps) {
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

export default function Sidebar({ 
  isSidebarCollapsed, 
  toggleSidebar, 
  tags = [] 
}: SidebarProps) {
  const isMobile = useIsMobile();

  return (
    <div className="relative h-full">
      {/* Overlay for mobile when sidebar is open */}
      {isMobile && !isSidebarCollapsed && (
        <div 
          className="fixed inset-0 bg-opacity-50 z-20"
          // onClick={toggleSidebar}
        ></div>
      )}
      
      <div
        className={cn(
          "bg-white shadow-lg h-screen flex flex-col transition-all duration-300 ease-in-out border-r border-gray-100",
          isSidebarCollapsed ? "w-16" : "w-64",
          isMobile && !isSidebarCollapsed && "w-full max-w-[250px] z-30"
        )}
      >
        <div className="flex items-center p-4 border-b border-gray-100">
          <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-white">
            <span className="text-sm font-semibold">JD</span>
          </div>
          {!isSidebarCollapsed && <span className="ml-3 font-medium">John Doe</span>}
          <button
            onClick={toggleSidebar}
            className="ml-auto text-gray-400 hover:text-primary"
          >
            {isSidebarCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4">
          <ul>
            <SidebarItem
              icon={<Home className="h-5 w-5" />}
              label="Home"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarItem
              icon={<FileText className="h-5 w-5" />}
              label="All Notes"
              isActive
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarItem
              icon={<Folder className="h-5 w-5" />}
              label="Folders"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarItem
              icon={<Tag className="h-5 w-5" />}
              label="Tags"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarItem
              icon={<Trash2 className="h-5 w-5" />}
              label="Trash"
              isCollapsed={isSidebarCollapsed}
            />
          </ul>

          {!isSidebarCollapsed && (
            <div className="border-t border-gray-100 mt-4 pt-4">
              <h3 className="text-xs uppercase text-gray-500 font-semibold px-6 mb-2">
                Tags
              </h3>
              <ul>
                {tags.map((tag) => (
                  <li key={tag.id} className="px-4 py-1">
                    <a
                      href="#"
                      className="flex items-center text-gray-700 sidebar-hover rounded-lg p-2 transition-colors"
                    >
                      <span className={`w-3 h-3 rounded-full bg-${tag.color}-500 mr-3`}></span>
                      <span>{tag.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>

        <div className="p-4 border-t border-gray-100">
          <a
            href="#"
            className={cn(
              "flex items-center text-gray-700 hover:text-primary",
              isSidebarCollapsed && "justify-center"
            )}
          >
            <Settings className="h-5 w-5" />
            {!isSidebarCollapsed && <span className="ml-3">Settings</span>}
          </a>
        </div>
      </div>
    </div>
  );
}
