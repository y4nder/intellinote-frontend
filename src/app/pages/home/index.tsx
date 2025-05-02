import TopBar from "@/components/topbar/topbar";
import { Outlet } from "react-router-dom";


export default function HomeLayout() {
    return (
        <>
            <TopBar/>
            <div className="p-6">
                <Outlet/>
            </div>
        </>
    )
}
