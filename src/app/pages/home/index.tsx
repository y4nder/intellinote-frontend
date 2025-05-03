import TopBar from "@/components/topbar/topbar";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { Outlet } from "react-router-dom";


export default function HomeLayout() {
    return (
        <>
            <TopBar/>
            <div className="px-6 pb-4">
                <BreadcrumbUi/>
            </div>
            <div className="px-6 pb-6">
                <Outlet/>
            </div>
        </>
    )
}
