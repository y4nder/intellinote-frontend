import { PropsWithChildren } from "react"


const AuthLayout = ({ children }: PropsWithChildren) => {

  return (
    <div className="bg-muted h-screen">
        {/* <header className="p-2 absolute right-1">
            <ModeToggle />
        </header> */}

        <main className="h-full">
            {children}
        </main>
    </div>
  )
}

export default AuthLayout
