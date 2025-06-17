import { Skeleton } from "@/components/ui/skeleton";

export default function NoteListSkeleton() {
  return (
    <div className="overflow-x-auto animate-pulse">
      <table className="w-full">
        <tbody>
          {Array.from({ length: 5 }).map((_, index) => (
            <tr
              key={index}
              className="border-b border-primary-container/20 hover:bg-surface-container/30 transition-colors"
            >
              {/* Title cell */}
              <td className="py-4 px-4 w-[220px]">
                <div className="flex items-center gap-2">
                  <Skeleton className="bg-on-surface/50 h-4 w-4 rounded" />
                  <Skeleton className="bg-on-surface/50 h-4 w-[220px]" />
                </div>
              </td>

              {/* Folder cell */}
              <td className="py-4 px-4">
                <div className="flex items-center gap-2">
                  <Skeleton className="bg-on-surface/50 h-4 w-5 rounded" />
                  <Skeleton className="bg-on-surface/50 h-4 w-[100px]" />
                </div>
              </td>

              {/* Keywords cell */}
              <td className="py-4 px-4">
                <div className="flex gap-2 flex-wrap">
                  <Skeleton className="bg-on-surface/50 h-5 w-[60px] rounded-full" />
                  <Skeleton className="bg-on-surface/50 h-5 w-[50px] rounded-full" />
                  <Skeleton className="bg-on-surface/50 h-5 w-[40px] rounded-full" />
                </div>
              </td>

              {/* Created cell */}
              <td className="py-4 px-4">
                <Skeleton className="bg-on-surface/50 h-4 w-[80px]" />
              </td>

              {/* Dropdown cell */}
              <td className="py-4 px-4 text-right">
                <Skeleton className="bg-on-surface/50 h-4 w-6 ml-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
