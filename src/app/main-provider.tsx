import { ThemeProvider } from "@/providers/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { SidebarProvider } from "@/providers/sidebar";
import { SearchDialogProvider } from "@/providers/searchDialog";
// import AuthProvider from "@/providers/auth";


const MainAppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <SearchDialogProvider>
            <SidebarProvider>
              <ThemeProvider>
                {/* <AuthProvider>{children}</AuthProvider> */}
                {children}
              </ThemeProvider>
            </SidebarProvider>
          </SearchDialogProvider>
        </Provider>
    </QueryClientProvider>
  )
}

export default MainAppProvider
