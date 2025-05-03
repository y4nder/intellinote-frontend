import { Skeleton } from "@/components/ui/skeleton"


function NoteHeaderSkeleton() {
  return (
    <>
    <Skeleton className="w-[60%] h-[40px] rounded-md mb-4" />
    <div className="h-[200px] bg-surface-dim/50 p-4 rounded-2xl flex flex-col">
        <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 max-">
            <Skeleton className="w-[60px] h-[20px] rounded-lg" />
            <Skeleton className="w-[50px] h-[20px] rounded-lg" />
            <Skeleton className="w-[40px] h-[20px] rounded-lg" />
            <Skeleton className="w-[70px] h-[20px] rounded-lg" />
            <Skeleton className="w-[40px] h-[20px] rounded-lg" />
            <Skeleton className="w-[60px] h-[20px] rounded-lg" />
            <Skeleton className="w-[50px] h-[20px] rounded-lg" />
            <Skeleton className="w-[70px] h-[20px] rounded-lg" />
            </div>
        </div>
        <div className="mt-4 space-y-2">
            <Skeleton className="w-[100%] h-[12px] rounded-lg" />
            <Skeleton className="w-[100%] h-[12px] rounded-lg" />
            <Skeleton className="w-[100%] h-[12px] rounded-lg" />
            <Skeleton className="w-[100%] h-[12px] rounded-lg" />
            <Skeleton className="w-[80%] h-[12px] rounded-lg" />
        </div>
    </div>
    </>
  )
}

export default NoteHeaderSkeleton