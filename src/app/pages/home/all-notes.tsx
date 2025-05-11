import NoteCard from "@/components/notecard/NoteCard";
import { setSelectedNote, setIsQuerying, setNotes } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { useInfiniteGetUserNotes } from "@/service/notes/get-user-notes";
import { Note } from "@/types/note";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import { NoteCardSkeleton } from "./skeletons/note-grid-skeleton";
import { cn } from "@/lib/utils";
import ViewToggle from "@/components/ui/view-toggle";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";


export default function AllNotes() {
    const {notes} = useSelector((state: RootState) => state.folderNotes);
    const {isCollapsed} = useSelector((state: RootState) => state.chatAgent);
    const {isNoteGrid} = useSelector((state: RootState) => state.preference);
    const dispatch = useDispatch();

    const {
        data,
        isFetching,
        fetchNextPage: fetchNextNotes,
        isLoading: isLoadingNotes,
      } = useInfiniteGetUserNotes({
          take: 20
    });

    useEffect(() => {
        if(isFetching){
            console.log("Fetching notes...");
        }

        dispatch(setSelectedNote(null));
        dispatch(setIsQuerying(isFetching || isLoadingNotes));
      
        if (data) {
          const allNotes = data.pages.flatMap(page => page.notes);
          dispatch(setNotes(allNotes));
        }
    }, [data, dispatch, isFetching, isLoadingNotes]);


    const { ref, inView } = useInView();
    
    useEffect(() => {
      if(inView){
        fetchNextNotes()
      }
    }, [inView, fetchNextNotes])
    

    return (
    <div className="mb-8">
        <div className=" pb-4">
            <BreadcrumbUi/>
        </div>
        <div className="flex gap-4 items-center-safe mb-4 justify-between">
            <h2 className="text-3xl font-bold text-primary-hard dark:text-primary-fixed-dim">
                All Notes
            </h2>
            <ViewToggle className="mr-2"/>
        </div>
        <div 
            className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5",
                `${!isCollapsed ? "xl:grid-cols-4 gap-4" : ""}`,
                `${!isNoteGrid ? "flex flex-col gap-0": ""}`
            )}
        >
            {notes.map((note: Note) => (
                <NoteCard key={note.id} note={note} />
            ))}
            {isFetching && (
                <>
                    {Array.from({ length: 10 }).map((_, index) => (
                        <NoteCardSkeleton key={index} />
                    ))}
                </>
            )}
            <div ref={ref} />
        </div>
    </div>
    )
}
