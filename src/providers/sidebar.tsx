import { createContext, useState, ReactNode, useContext, useEffect } from "react";
import { useIsMobile} from '../hooks/use-is-mobile';

interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
    const isMobile = useIsMobile();
    const [isCollapsed, setIsCollapsed] = useState(true);
    const toggleSidebar = () => setIsCollapsed(prev => !prev);

    useEffect(() => {
      setIsCollapsed((prev) => {
        if(prev === true) {
          return prev;
        } else return !prev
      });
    }, [isMobile])

    return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
        {children}
    </SidebarContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) throw new Error("useSidebar must be used within SidebarProvider");
  return context;
};
