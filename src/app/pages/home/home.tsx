import FolderCard from "@/components/foldercard/FolderCard";
import NoteCard from "@/components/notecard/NoteCard";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import {useSelector } from "react-redux";
import NoteGridSkeleton from "./skeletons/note-grid-skeleton";
import { motion } from "framer-motion";

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
    const {folders, notes, isQuerying} = useSelector((state: RootState) => state.folderNotes);

    return (
        <>
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

            {/* Recent Folders Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-primary-hard ">
                    Recent Folders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {folders.map((folder: Folder) => (
                        <FolderCard key={folder.id} folder={folder} />
                    ))}
                </div>
            </div>
        </>
    )
}
