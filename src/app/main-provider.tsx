import { ThemeProvider } from "@/providers/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SidebarProvider } from "@/providers/sidebar";
import { WebSocketProvider } from "@/providers/socket/socketProvider";


const MainAppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <WebSocketProvider>
        <Provider store={store}>
            <SidebarProvider>
              <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                {children}
              </ThemeProvider>
            </SidebarProvider>
        </Provider>
      </WebSocketProvider>
    </QueryClientProvider>
  )
}

export default MainAppProvider
