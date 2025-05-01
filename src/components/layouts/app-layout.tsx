import { PropsWithChildren } from "react"

const AppLayout = ({ children }: PropsWithChildren) => {

  return (

    <div className="">
        <main>
            {children}
        </main>
    </div>
  )
}

export default AppLayout
