import { Folder } from "@/types/folder"
import { ChevronRight, FolderIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

type SearchFolderItemProps = {
    folder: Folder,
    onSelect: () => void
}

export default function SearchFolderItem({folder, onSelect}: SearchFolderItemProps) {
    const navigate = useNavigate();

    const handleNavigation = () => {
        const folderId = `${folder.name.toLowerCase().replace(/\s+/g, "-")}-${folder.id}`;
        navigate(`/Folder/${folderId}`);
    }

    return (
        <div
            key={folder.id}
            className={`flex items-center gap-3 px-4 py-3 hover:bg-muted/50 cursor-pointer text-on-background hover:bg-primary/20`}
            onClick={() => {
                handleNavigation();
                onSelect();
            }}
        >
            <FolderIcon className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{folder.name}</div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
        </div>                            
    )
}
