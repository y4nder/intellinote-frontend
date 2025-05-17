import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { CalendarDays, FileText, ChevronRight } from "lucide-react"
import NoteGridSkeleton from "../home/skeletons/note-grid-skeleton"
import NoteCard from "@/components/notecard/NoteCard"
import { extractIdFromSlug } from "@/lib/utils"
import { useGetUserFolder } from "@/service/folders/get-user-folder"
import { useParams } from "react-router-dom"
import { setSelectedFolder, setSelectedNote} from "@/redux/slice/folder-note"
import FolderPageHeader from "./folder-page-header"
import { useThreadManager } from "@/lib/chat-thread-manager"
import { setChatThreadId } from "@/redux/slice/chat-agent"
import NoteListSkeleton from "../home/skeletons/note-list-skeleton"
import NoteList from "@/components/notelist/NoteList"
import { folderContainerVariants, folderItemVariants } from "./folder-animation-utils"


export default function FolderPage() {
  const { selectedFolder, isQuerying } = useSelector((state: RootState) => state.folderNotes)
  const { isNoteGrid } = useSelector((state: RootState) => state.preference)
  const { folderId } = useParams();
  const id = extractIdFromSlug(folderId!);
  const dispatch = useDispatch();
  const { data: folder } = useGetUserFolder(id!);
  const {getThreadId} = useThreadManager();


  useEffect(() => {
    if(folder && (!selectedFolder || folder && folder?.id !== selectedFolder?.id)){
        dispatch(setSelectedFolder(folder));
    }
  }, [folder, selectedFolder, dispatch]);

  useEffect(() => {
    const threadId = getThreadId(id!);
    if(threadId){
      dispatch(setChatThreadId(threadId));
    }
    else {
      dispatch(setChatThreadId(undefined));
    }
    dispatch(setSelectedNote(null));
  },[id])

  

  const [activeTab, setActiveTab] = useState<"all" | "recent">("all")
    
  if (!selectedFolder) {
    return <div className="flex items-center justify-center h-[70vh] text-gray-500">No folder selected</div>
  }

  return (
    <div className="w-full py-8 mx-auto bg-background px-8 rounded-3xl shadow-2xs">
      <FolderPageHeader/>
      {/* interactive buttons */}
      {/* Tabs */}
      <div className="flex gap-4 border-b border-gray-200 mb-8 text-sm font-medium">
        <button
          className={`flex items-center gap-1 px-3 py-2 rounded-t-md ${
            activeTab === "all"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("all")}
        >
          <FileText className="w-4 h-4" /> All Notes
        </button>
        <button
          className={`flex items-center gap-1 px-3 py-2 rounded-t-md ${
            activeTab === "recent"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setActiveTab("recent")}
        >
          <CalendarDays className="w-4 h-4" /> Recently Updated
        </button>
      </div>

      {/* Notes Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-5 text-gray-900 dark:text-white flex items-center gap-2">
          {activeTab === "all" ? "All Notes" : "Recently Updated Notes"}
          <ChevronRight className="w-5 h-5 text-gray-400" />
          <span className="text-blue-600">{selectedFolder.notes.length}</span>
        </h2>

        {selectedFolder.notes.length === 0 && isQuerying ? (
          isNoteGrid ? <NoteGridSkeleton /> : <NoteListSkeleton />
        ) : isNoteGrid ? (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={folderContainerVariants}
            initial="hidden"
            animate="visible"
          >
            {selectedFolder.notes
              .filter((note) => {
                if (activeTab === "all") return true;
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                return new Date(note.updatedAt!) >= sevenDaysAgo;
              })
              .map((note) => (
                <motion.div key={note.id} variants={folderItemVariants}>
                  <NoteCard note={note} />
                </motion.div>
              ))}
          </motion.div>
        ) : (
          <NoteList notes={selectedFolder.notes} />
        )}


        {selectedFolder.notes.length > 0 &&
          !isQuerying &&
          activeTab === "recent" &&
          !selectedFolder.notes.some((note) => {
            const sevenDaysAgo = new Date()
            sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
            return new Date(note.updatedAt!) >= sevenDaysAgo
          }) && (
            <div className="text-center py-12 text-gray-500">No notes have been updated in the last 7 days.</div>
          )}
      </div>
    </div>
  )
}
