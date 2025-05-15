import { Suspense } from "react"
import MainAppProvider from "./main-provider"
import { AppRouter } from "./router"
import SplashScreen from "./splash"

const App = () => {
  return (
    <MainAppProvider>
        <Suspense fallback={<SplashScreen />}>
          <AppRouter />
        </Suspense> 
    </MainAppProvider>
  )
}



export default App

