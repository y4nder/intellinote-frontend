import { Skeleton } from "../ui/skeleton";


export default function SearchModalSkeleton() {
    return (
        <div className="p-4 space-y-4">
        {/* Notes skeleton */}
            <div className="space-y-2">
            <Skeleton className="w-24 h-4 rounded-md" /> {/* Section title */}
            {[...Array(3)].map((_, i) => (
                <div key={`note-skel-${i}`} className="flex justify-between items-start gap-3 px-1 py-2">
                <div className="flex items-center gap-3 flex-1">
                    <Skeleton className="w-5 h-5 rounded-sm shrink-0" />
                    <Skeleton className="w-[60%] h-[20px] rounded-md" />
                </div>
                <Skeleton className="w-[40px] h-[16px] rounded-md" />
                </div>
            ))}
            </div>
    
        {/* Folders skeleton */}
            <div className="space-y-2">
            <Skeleton className="w-24 h-4 rounded-md" /> {/* Section title */}
            {[...Array(2)].map((_, i) => (
                <div key={`folder-skel-${i}`} className="flex justify-between items-start gap-3 px-1 py-2">
                <div className="flex items-center gap-3 flex-1">
                    <Skeleton className="w-5 h-5 rounded-sm shrink-0" />
                    <Skeleton className="w-[60%] h-[20px] rounded-md" />
                </div>
                <Skeleton className="w-[20px] h-[20px] rounded-full" />
                </div>
            ))}
            </div>
        </div>
    )
}
