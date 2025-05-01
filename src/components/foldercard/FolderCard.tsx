import { Folder } from "@/data/mockData";
import { FolderIcon } from "lucide-react";

interface FolderCardProps {
  folder: Folder;
}

export default function FolderCard({ folder }: FolderCardProps) {
  const { name, noteCount, color } = folder;

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
      <div className="flex items-center mb-3">
        <div className={`w-10 h-10 rounded-lg bg-${color}-500/20 flex items-center justify-center text-${color}-500`}>
          <FolderIcon className="h-5 w-5" />
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
