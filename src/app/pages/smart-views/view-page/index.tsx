import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui"
import { RootState } from "@/redux/store"
import { Note } from "@/types/note"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FilterCondition, filterNotes } from "../filter-utils"
import NoteGridSkeleton from "../../home/skeletons/note-grid-skeleton"
import { motion } from "framer-motion"
import NoteCard from "@/components/notecard/NoteCard"
import CreateViewModal from "../create-view-modal"
import { setNotes, setSelectedNote } from "@/redux/slice/folder-note"
import { BookText, LayoutDashboardIcon, Sparkles, Tag } from "lucide-react"
import { useGetUserNotes } from "@/service/notes/get-user-notes"
import { useParams } from "react-router"
import { useGetUserView } from "@/service/view/get-user-view"
import { setSelectedView } from "@/redux/slice/views"
import { cn } from "@/lib/utils"


const propertyStyles: Record<string, string> = {
    title:
      "bg-blue-100 text-blue-800 dark:bg-blue-800/20 dark:text-blue-200",
    keywords:
      "bg-green-100 text-green-800 dark:bg-green-800/20 dark:text-green-200",
    topics:
      "bg-purple-100 text-purple-800 dark:bg-purple-800/20 dark:text-purple-200",
}
  

function getPropertyIcon(property: string) {
  switch (property) {
    case "title":
      return <BookText size={14} />;
    case "keywords":
      return <Tag size={14} />;
    case "topics":
      return <Sparkles size={14} />;
    default:
      return null;
  }
}

function formatCondition(condition: FilterCondition) {
  const label = condition.property.charAt(0).toUpperCase() + condition.property.slice(1)
  const value = Array.isArray(condition.value)
    ? condition.value.join(", ")
    : condition.value ?? "(none)"
  return `${label} ${condition.operator} "${value}"`
}





export default function ViewPage() {
    const { selectedView } = useSelector((state: RootState) => state.views)
    const { notes } = useSelector((state: RootState) => state.folderNotes)
    const dispatch = useDispatch();
    const {viewId} = useParams();
    const {data: queriedNotes} =  useGetUserNotes({
            skip: 0,
            take: 100
    });
    const { data : view } =  useGetUserView(viewId!);

    useEffect(() => {
        if(queriedNotes){
            dispatch(setNotes(queriedNotes.notes));
        }
    }, [queriedNotes])

    useEffect(() => {
        if(view){
            dispatch(setSelectedView(view));
        }
    }, [view]);

    const [filteredNotes, setFilteredNotes] = useState<Note[]>([])
    
    useEffect(() => {
        if (!selectedView || !Array.isArray(selectedView.conditions)) {
          setFilteredNotes([]);
          return;
        }
      
        const filtered = filterNotes(notes, selectedView.conditions);
        setFilteredNotes(filtered);
    }, [notes, selectedView]);
      

    useEffect(() => {
        dispatch(setSelectedNote(null));
    }, [])

    if (!selectedView || notes.length === 0) {
        return <NoteGridSkeleton />;
    }
      

    return (
        <div className="px-6 pb-6">
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
            {/* Filter Conditions Display */}
            {(selectedView && selectedView.conditions?.length > 0) && (
                <div className="mb-12">
                    <div className="mt-4 flex flex-wrap gap-2">
                        {selectedView!.conditions.map((condition) => {
                        const colorStyle = propertyStyles[condition.property] || "bg-gray-100 text-gray-800"
                        return (
                            <div
                            key={condition.id}
                            className={cn(
                                "flex items-center gap-1 px-2 py-1 rounded-xl text-xs border border-outline/5",
                                colorStyle
                            )}
                            >
                            {getPropertyIcon(condition.property)}
                            <span>{formatCondition(condition)}</span>
                            </div>
                        )
                        })}
                    </div>
                </div>
            )}

            {filteredNotes.length === 0 ? (
            <p className="text-on-background text-sm">No notes matched this view.</p>
            ) : (
            <motion.div
                className={cn(
                "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:grid-cols-5"
                )}
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
