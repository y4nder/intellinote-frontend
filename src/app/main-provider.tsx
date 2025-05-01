import { ThemeProvider } from "@/providers/theme"
import { QueryClientProvider } from "@tanstack/react-query"
import { queryClient } from "@/lib/react-query"
import { PropsWithChildren } from "react"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { Toaster } from "sonner";
// import AuthProvider from "@/providers/auth";


const MainAppProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <ThemeProvider>
              {/* <AuthProvider>{children}</AuthProvider> */}
              {children}
              <Toaster/>
            </ThemeProvider>
        </Provider>
    </QueryClientProvider>
  )
}

export default MainAppProvider
