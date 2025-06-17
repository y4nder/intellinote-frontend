import { ThemeProvider } from "@/providers/theme/theme-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SidebarProvider } from "@/providers/sidebar/sidebar-provider";

const MainAppProvider = ({ children }: PropsWithChildren) => {
	return (
		<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<SidebarProvider>
						<ThemeProvider
							defaultTheme="dark"
							storageKey="vite-ui-theme"
						>
							{children}
						</ThemeProvider>
					</SidebarProvider>
				</Provider>
		</QueryClientProvider>
	);
};

export default MainAppProvider;
