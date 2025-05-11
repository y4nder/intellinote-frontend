import { ThemeProvider } from "@/providers/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SidebarProvider } from "@/providers/sidebar";
import { SearchDialogProvider } from "@/providers/searchDialog";
import { WebSocketProvider } from "@/providers/socketProvider";


const MainAppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WebSocketProvider>
        <Provider store={store}>
          <SearchDialogProvider>
            <SidebarProvider>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
              </ThemeProvider>
            </SidebarProvider>
          </SearchDialogProvider>
        </Provider>
      </WebSocketProvider>
    </QueryClientProvider>
  )
}

export default MainAppProvider
