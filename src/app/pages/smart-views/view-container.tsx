import { setNotes } from "@/redux/slice/folder-note";
import { FilteredView, setSelectedView } from "@/redux/slice/views"
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

type ViewPageProps = {
    view: FilteredView
}

export default function ViewContainer({ view } : ViewPageProps) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {data} =  useGetUserNotes({
            skip: 0,
            take: 100
    });

    useEffect(() => {
        if(data){
            dispatch(setNotes(data.notes));
        }
    }, [data])

    const handleSelectedView = () => {
        dispatch(setSelectedView(view));
        navigate(`/view/${view.id}`);
    }

    return (
        <div className="bg-surface-container-high w-fit py-2 px-4 rounded-2xl cursor-pointer hover:-translate-y-0.5 transition-transform hover:bg-surface-container-highest"
            onClick={handleSelectedView}
        >
            <div className="text-on-surface">
                {view.name}
            </div>
        </div>   
    )
}
