import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import ViewToggle from "@/components/ui/view-toggle";
import { cn } from "@/lib/utils";
import { RootState } from "@/redux/store";
import { useGetUserDeletedNotes } from "@/service/notes/get-user-deleted-note";
import { useSelector } from "react-redux";
import NoteGridSkeleton from "../index/(skeletons)/note-grid-skeleton";
import NoteListSkeleton from "../index/(skeletons)/note-list-skeleton";
import { Note } from "@/types/note";
import NoteCard from "@/components/notes/NoteCard";
import NoteList from "@/components/notelist/NoteList";
import { TrashIcon } from "lucide-react";


export default function RecycleBinPage() {
    const {isCollapsed} = useSelector((state: RootState) => state.chatAgent);
    const {isNoteGrid} = useSelector((state: RootState) => state.preference);
    const {data} = useGetUserDeletedNotes()
    


    if(!data) {
        if(isNoteGrid){
            return (
                <NoteGridSkeleton/>
            )
        } else {
            return (
                <NoteListSkeleton/>
            )
        }
    }
    

    return (
    <div className="mb-8 px-6 pb-6">
        <div className=" pb-4">
            <BreadcrumbUi/>
        </div>
        <div className="flex gap-4 items-center-safe mb-4 justify-between">
            <h2 className="text-3xl font-bold text-primary-hard dark:text-primary-fixed-dim flex items-center gap-2">
                Recycle bin
                <TrashIcon/>
            </h2>
            <ViewToggle className="mr-2"/>
        </div>

        {isNoteGrid ? 
            (
                <div 
                    className={cn(
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5",
                        `${!isCollapsed ? "xl:grid-cols-4 gap-4" : ""}`
                    )}
                >
                    {data.notes.map((note: Note) => (
                        <NoteCard key={note.id} note={note} />
                    ))}
                </div>
            ):
            (
                <>
                    <NoteList notes={data.notes}/>   
                </>
            )
        }
    </div>
    )
}
