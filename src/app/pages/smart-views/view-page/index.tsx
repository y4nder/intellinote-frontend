import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui"
import { RootState } from "@/redux/store"
import { Note } from "@/types/note"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { filterNotes } from "../filter-utils"
import NoteGridSkeleton from "../../home/skeletons/note-grid-skeleton"
import { motion } from "framer-motion"
import NoteCard from "@/components/notecard/NoteCard"
import CreateViewModal from "../create-view-modal"
import { setSelectedNote } from "@/redux/slice/folder-note"
import { LayoutDashboardIcon } from "lucide-react"


export default function ViewPage() {
    const { selectedView } = useSelector((state: RootState) => state.views)
    const { notes } = useSelector((state: RootState) => state.folderNotes)
    const dispatch = useDispatch();

    const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
    
    useEffect(() => {
        const filtered = filterNotes(notes, selectedView?.conditions!)
        setFilteredNotes(filtered);
    }, [notes, selectedView])

    useEffect(() => {
        dispatch(setSelectedNote(null));
    }, [])

    return (
        <div>
            {/* Header */}
            <div className=" pb-4">
                <BreadcrumbUi/>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
                <div className="flex items-center gap-4 mt-4 sm:mt-0">
                    <h1 className="text-xl text-on-primary-container font-semibold flex items-center gap-2">
                        <LayoutDashboardIcon className="w-6 h-6" />  
                        {selectedView?.name}
                    </h1>
                    <CreateViewModal isUpdating view={selectedView} />
                </div>
            </div>

            {filteredNotes.length === 0  ? (
                <NoteGridSkeleton />
            ) : (
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                    initial="hidden"
                    animate="visible"
                >
                    {filteredNotes.map((note) => (
                        <motion.div key={note.id}>
                        <NoteCard note={note} />
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </div>
    )
}
