import { PropsWithChildren } from "react"
import { SearchDialog } from "../ui/search-dialog"

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="">
        <main>
            <SearchDialog/>
            {children}
        </main>
    </div>
  )
}

export default AppLayout
