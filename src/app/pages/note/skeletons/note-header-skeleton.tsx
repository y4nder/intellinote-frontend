import { Skeleton } from "@/components/ui/skeleton"
import NoteSummaryLoading from "../../home/skeletons/note-generating-loader"


function NoteHeaderSkeleton() {
  return (
    <>
      <Skeleton className="w-[60%] h-[40px] rounded-md mb-4" />
      <NoteSummaryLoading type="Loading"/>
    </>
  )
}

export default NoteHeaderSkeleton