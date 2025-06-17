import { useState, ReactNode, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { SidebarContext } from "./sidebar-context";

export const SidebarProvider = ({ children }: { children: ReactNode }) => {
	const isMobile = useIsMobile();
	const [isCollapsed, setIsCollapsed] = useState(true);
	const toggleSidebar = () => setIsCollapsed((prev) => !prev);

	useEffect(() => {
		setIsCollapsed((prev) => {
			if (prev === true) {
				return prev;
			} else return !prev;
		});
	}, [isMobile]);

	return <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>{children}</SidebarContext.Provider>;
};
