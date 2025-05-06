import NoteCard from "@/components/notecard/NoteCard";
import { setSelectedNote, setIsQuerying, setNotes } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { useInfiniteGetUserNotes } from "@/service/notes/get-user-notes";
import { Note } from "@/types/note";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import NoteGridSkeleton from "./skeletons/note-grid-skeleton";


export default function AllNotes() {
    const {notes} = useSelector((state: RootState) => state.folderNotes);

    const dispatch = useDispatch();

    const {
        data,
        isFetching,
        fetchNextPage: fetchNextNotes,
        isLoading: isLoadingNotes,
      } = useInfiniteGetUserNotes({
          take: 10
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
        <h2 className="text-3xl font-bold mb-4 text-primary-hard">
            All Notes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
            {notes.map((note: Note) => (
                <NoteCard key={note.id} note={note} />
            ))}
        </div>
        {isFetching && (
            <NoteGridSkeleton/>
        )}
        <div ref={ref} />
    </div>
    )
}
