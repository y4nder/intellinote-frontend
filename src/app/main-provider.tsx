import { ThemeProvider } from "@/providers/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
import { SidebarProvider } from "@/providers/sidebar";
// import AuthProvider from "@/providers/auth";


const MainAppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SidebarProvider>
            <ThemeProvider>
              {/* <AuthProvider>{children}</AuthProvider> */}
              {children}
              <Toaster/>
            </ThemeProvider>
          </SidebarProvider>
        </Provider>
    </QueryClientProvider>
  )
}

export default MainAppProvider
