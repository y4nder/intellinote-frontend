import TopBar from "@/components/topbar/topbar";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { PageLoadingProgress } from "@/components/ui/page-loading-progress";
import { setFolders, setIsQuerying, 
    // setNotes, 
    // setSelectedNote 
} from "@/redux/slice/folder-note";
import { useGetUserFolders } from "@/service/folders/get-user-folders";
// import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";


export default function HomeLayout() {
    const {data: folderData, isLoading: isFolderLoading} = useGetUserFolders();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(setIsQuerying(isFolderLoading));
        if(folderData){
            console.log("folders arrived");
            dispatch(setFolders(folderData.folders));
            dispatch(setIsQuerying(isFolderLoading));
        }
    }, [folderData, dispatch, isFolderLoading])

    return (
        <>
            <TopBar/>
            <PageLoadingProgress loading={isFolderLoading} />
            <div className="px-6 pb-4">
                <BreadcrumbUi/>
            </div>
            <div className="px-6 pb-6">
                <Outlet/>
            </div>
        </>
    )
}
