import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import CreateViewModal from "./create-view-modal";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import ViewContainer from "./view-container";
import { useEffect } from "react";
import { setNotes, setSelectedNote } from "@/redux/slice/folder-note";
import { setSelectedView } from "@/redux/slice/views";
import { useGetUserNotes } from "@/service/notes/get-user-notes";



export default function SmartViewsPage() {
    const { views } = useSelector((state: RootState) => state.views);
    const {data} =  useGetUserNotes({
        skip: 0,
        take: 100
    });
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(setSelectedNote(null));
        dispatch(setSelectedView(null));
        if(data){
            dispatch(setNotes(data.notes));
        }
    }, [data])

    return (
        <div className="">
            <div className=" pb-4">
                <BreadcrumbUi/>
            </div>
            <h1 className="text-on-background text-2xl">Views Page</h1>            
            <CreateViewModal isUpdating={false}/>
            {/* views */}
            <div className="mt-18 flex gap-2">
                {views.length > 0 && (
                    views.map((view) => (
                        <ViewContainer key={view.id} view={view}/>
                    ))
                )}
            </div>
        </div>
    )
}
