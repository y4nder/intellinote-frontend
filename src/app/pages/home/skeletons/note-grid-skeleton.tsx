import { Skeleton } from "@/components/ui/skeleton";

export default function NoteGridSkeleton() {
  return (
    <div className="flex flex-wrap gap-6">
        {Array.from({ length: 10 }).map((_, index) => (
            <NoteCardSkeleton key={index} />
        ))}
    </div>
  )
}

export const NoteCardSkeleton = () => {
    return (
      <div className="bg-surface-container rounded-3xl md:max-w-sm lg:max-w-sm shadow-sm animate-pulse">
        <div className="bg-muted h-[40px] rounded-t-3xl" />
        <div className="p-5 flex flex-col justify-between gap-4">
          <div className="flex justify-between items-start">
            <Skeleton className="bg-surface-container w-[60%] h-[20px] rounded-md" />
            <Skeleton className="w-[20px] h-[20px] rounded-full" />
          </div>
  
          <div className="space-y-2">
            <Skeleton className="w-full h-[10px] rounded" />
            <Skeleton className="w-[80%] h-[10px] rounded" />
            <Skeleton className="w-[60%] h-[10px] rounded" />
          </div>
  
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2 max-w-64">
              <Skeleton className="w-[60px] h-[20px] rounded-full" />
              <Skeleton className="w-[50px] h-[20px] rounded-full" />
              <Skeleton className="w-[40px] h-[20px] rounded-full" />
            </div>
            <Skeleton className="w-[40px] h-[10px] rounded" />
          </div>
        </div>
      </div>
    );
  };

