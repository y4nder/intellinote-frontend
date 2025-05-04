import TopBar from "@/components/topbar/topbar";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { PageLoadingProgress } from "@/components/ui/page-loading-progress";
import { setIsQuerying, setNotes } from "@/redux/slice/folder-note";
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";


export default function HomeLayout() {
    const {data, isLoading} =  useGetUserNotes();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsQuerying(isLoading));
        if(data) {
            console.log("data arrived");
            dispatch(setNotes(data.notes));
            dispatch(setIsQuerying(isLoading));
        }
    }, [data, dispatch, isLoading])
    return (
        <>
            <TopBar/>
            <PageLoadingProgress loading={isLoading} />
            <div className="px-6 pb-4">
                <BreadcrumbUi/>
                
            </div>
            <div className="px-6 pb-6">
                <Outlet/>
            </div>
        </>
    )
}
