import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/redux/store"
import { CalendarDays, FileText, Tag, User, ChevronRight } from "lucide-react"
import NoteGridSkeleton from "../home/skeletons/note-grid-skeleton"
import NoteCard from "@/components/notecard/NoteCard"
import { cn, extractIdFromSlug, getGradientClassesFromString } from "@/lib/utils"
import { useGetUserFolder } from "@/service/folders/get-user-folder"
import { useParams } from "react-router-dom"
import { setSelectedFolder} from "@/redux/slice/folder-note"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100 },
  },
}

export default function FolderPage() {
  const { selectedFolder, isQuerying } = useSelector((state: RootState) => state.folderNotes)
  const { folderId } = useParams();
  const id = extractIdFromSlug(folderId!);
  const dispatch = useDispatch();

  const { data: folder } = useGetUserFolder(id!);

  // debug parameter id
  useEffect(() => {
    console.log("id params: ", id);
  }, [id, selectedFolder])


  useEffect(() => {
    if(folder && (!selectedFolder || folder && folder?.id !== selectedFolder?.id)){
      dispatch(setSelectedFolder(folder));
    }
  }, [folder, selectedFolder, dispatch]);
  
  const [activeTab, setActiveTab] = useState<"all" | "recent">("all")
  
  if (!selectedFolder) {
    return <div className="flex items-center justify-center h-[70vh] text-gray-500">No folder selected</div>
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const displayedKeywords = selectedFolder.keywords.slice(0, 15)
  const extraKeywordCount = selectedFolder.keywords.length - displayedKeywords.length
  const gradientClass = getGradientClassesFromString(selectedFolder.name);

  return (
    <div className="w-full py-8 mx-auto bg-white px-8 rounded-3xl shadow-2xs">
      {/* Folder Header */}
      <div className="p-6 md:p-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            {/* Folder Title */}
            <div className="flex gap-6">
              <div className="w-12 h-fit max-w-12 rounded-lg flex items-center justify-center">
                  <div
                    className={cn(
                      "mask-[url('/folderIcon.png')] mask-no-repeat mask-center mask-contain",
                      "w-full max-w-[103px] aspect-[103/75]",
                      gradientClass.base, gradientClass.hover
                    )}
                  />
              </div>
              <h1 className="text-3xl mt-1 font-bold text-gray-900 dark:text-white mb-3">{selectedFolder.name}</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-5">{selectedFolder.description}</p>

            <div className="flex flex-wrap gap-2">
              {displayedKeywords.map((keyword, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {keyword}
                </span>
              ))}
              {extraKeywordCount > 0 && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300">
                  +{extraKeywordCount} more
                </span>
              )}
            </div>
            <div className="text-sm flex gap-4 mt-8 items-center text-gray-500 dark:text-gray-400 w-full md:w-auto">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Created by {selectedFolder.author.userName}</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarDays className="w-4 h-4" />
                <span>Created on {formatDate(selectedFolder.createdAt)}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span>{selectedFolder.notes.length} notes</span>
              </div>
            </div>
          </div>

        </div>
      </div>

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

        {selectedFolder.notes.length === 0 || isQuerying ? (
          <NoteGridSkeleton />
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {selectedFolder.notes
              .filter((note) => {
                if (activeTab === "all") return true
                const sevenDaysAgo = new Date()
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7)
                return new Date(note.updatedAt!) >= sevenDaysAgo
              })
              .map((note) => (
                <motion.div key={note.id} variants={itemVariants}>
                  <NoteCard note={note} />
                </motion.div>
              ))}
          </motion.div>
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
