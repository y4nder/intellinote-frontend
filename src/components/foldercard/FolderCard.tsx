import { cn, getGradientClassesFromString } from "@/lib/utils";
import { Folder } from "@/types/folder";

interface FolderCardProps {
  folder: Folder;
}

export default function FolderCard({ folder }: FolderCardProps) {
  const { name, noteCount } = folder;
  const gradientClass = getGradientClassesFromString(folder.name);

  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group active:scale-95">
      <div className="flex items-center mb-3">
        <div className="w-12 h-fit max-w-12 rounded-lg flex items-center justify-center">
          <div
            className={cn(
              "mask-[url('/folderIcon.png')] mask-no-repeat mask-center mask-contain",
              "w-full max-w-[103px] aspect-[103/75]",
              gradientClass.base, gradientClass.hover
            )}
          />
        </div>
        <div className="ml-3">
          <h3 className="font-medium text-gray-800 group-hover:text-primary transition-colors">
            {name}
          </h3>
          <p className="text-gray-500 text-xs">{noteCount} notes</p>
        </div>
      </div>
    </div>
  );
}
