import { Suspense } from "react"
import MainAppProvider from "./providers"
import { AppRouter } from "./router"
import SplashScreen from "./common/splash-screen"

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

