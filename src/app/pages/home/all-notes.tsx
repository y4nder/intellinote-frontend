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
import NoteList from "@/components/notelist/NoteList";
import NoteListSkeleton from "./skeletons/note-list-skeleton";
import { AnimatePresence, motion } from "framer-motion";


// Animation variants
const containerVariants = {
    hidden: {},
    visible: {
        transition: {
        staggerChildren: 0.02
        }
    }
};  
  
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

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
    <div className="mb-8 px-6 pb-6">
        <div className=" pb-4">
            <BreadcrumbUi/>
        </div>
        <div className="flex gap-4 items-center-safe mb-4 justify-between">
            <h2 className="text-3xl font-bold text-primary-hard dark:text-primary-fixed-dim">
                All Notes
            </h2>
            <ViewToggle className="mr-2"/>
        </div>

        {isNoteGrid ? 
            (
                <motion.div
                    className={cn(
                    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5",
                    `${!isCollapsed ? "xl:grid-cols-4 gap-4" : ""}`
                    )}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
              >
                <AnimatePresence>
                  {notes.map((note: Note) => (
                    <motion.div
                      key={note.id}
                      variants={cardVariants}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                    >
                      <NoteCard note={note} />
                    </motion.div>
                  ))}
                </AnimatePresence>
            
                {isFetching && (
                  <>
                    {Array.from({ length: 10 }).map((_, index) => (
                      <motion.div
                        key={`skeleton-${index}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.03 }}
                      >
                        <NoteCardSkeleton />
                      </motion.div>
                    ))}
                  </>
                )}
            
                <div ref={ref} />
              </motion.div>
            ):
            (
                <>
                    <NoteList notes={notes}/>   
                    {
                        isFetching && (
                            <NoteListSkeleton/>
                        )
                    }
                    <div ref={ref} />
                </>
            )
        }
    </div>
    )
}
