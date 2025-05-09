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
import { setIsQuerying, setNotes, setSelectedNote } from "@/redux/slice/folder-note";


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
    const {data, isLoading} =  useGetUserNotes();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelectedNote(null));
        dispatch(setIsQuerying(isLoading));
        if(data) {
            console.log("notes arrived");
            dispatch(setNotes(data.notes));
            dispatch(setIsQuerying(isLoading));
        }
    }, [data, dispatch, isLoading])

    
    return (
        <>
            {/* Recent Folders Section */}
            <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-primary-hard ">
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
                <h2 className="text-3xl font-bold mb-4 text-primary-hard">
                    Recent Notes
                </h2>
                
                {notes.length === 0 || isQuerying? (
                    <NoteGridSkeleton/>
                ): (
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4"
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


        </>
    )
}

