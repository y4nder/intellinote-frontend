import FolderCard from "@/components/foldercard/FolderCard";
import NoteCard from "@/components/notecard/NoteCard";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import {useDispatch, useSelector } from "react-redux";
import NoteGridSkeleton from "./skeletons/note-grid-skeleton";
import { motion } from "framer-motion";
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { useEffect } from "react";
import { setIsQuerying, setNotes, setSelectedFolder, setSelectedNote } from "@/redux/slice/folder-note";
import ViewToggle from "@/components/ui/view-toggle";
import { cn } from "@/lib/utils";
import Banner from "./banner";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { useThreadManager } from "@/service/nora/chat/chat-thread-manager";
import { setChatThreadId } from "@/redux/slice/chat-agent";


// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.02,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};


export default function Home() {
    const {folders, recentNotes: notes, isQuerying} = useSelector((state: RootState) => state.folderNotes);
    const {isCollapsed} = useSelector((state: RootState) => state.chatAgent);
    const {isNoteGrid} = useSelector((state: RootState) => state.preference);
    const {data, isLoading} =  useGetUserNotes({
        skip: 0,
        take: 100
    });
    const {getGlobalThread} = useThreadManager();

    const dispatch = useDispatch();

    useEffect(() => {
        console.log("using note grid:", isNoteGrid)
    },[isNoteGrid]);

    useEffect(() => {
        const globalThreadId = getGlobalThread();

        if(globalThreadId){
            dispatch(setChatThreadId(globalThreadId));
        } else {
            dispatch(setChatThreadId(undefined));
        }
    }, [])

    useEffect(() => {
        dispatch(setSelectedNote(null));
        dispatch(setSelectedFolder(null));
        dispatch(setIsQuerying(isLoading));
        if(data) {
            console.log("notes arrived");
            dispatch(setNotes(data.notes));
            dispatch(setIsQuerying(isLoading));
        }
    }, [data, dispatch, isLoading])

    
    return (
        <div className="top-0 px-6 pb-6">
            {/* Banner Section */}
            <Banner 
                imageUrl="https://w.wallhaven.cc/full/yq/wallhaven-yq761d.png" 
                // height={240} 
                title="Yander's workspace"
            />
            <div className=" pb-4">
                <BreadcrumbUi/>
            </div>
            {/* Recent Folders Section */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-primary-hard dark:text-primary-fixed-dim">
                    Recent Folders
                </h2>
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {folders.map((folder: Folder) => (
                        <motion.div key={folder.id} variants={itemVariants}>
                            <FolderCard folder={folder} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Recent Notes Section */}
            <div className="mb-8">
                <div className="flex gap-4 items-center-safe mb-4 justify-between">
                    <h2 className="text-3xl font-bold text-primary-hard dark:text-primary-fixed-dim">
                        Recent Notes
                    </h2>
                    <ViewToggle className="mr-2"/>
                </div>
                
                {notes.length === 0 || isQuerying? (
                    <NoteGridSkeleton/>
                ): (
                    <motion.div
                        className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5",
                            `${!isCollapsed ? "xl:grid-cols-4" : ""}`
                        )}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {notes.map((note: Note) => (
                            <motion.div key={note.id} variants={itemVariants}>
                                <NoteCard note={note} />
                            </motion.div>
                        ))}
                    </motion.div>
                )}
                
            </div>


        </div>
    )
}

