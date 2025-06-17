import { RootState } from "@/redux/store";
import { FolderCitation } from "@/types/chatMessage"
import { FolderIcon } from "lucide-react"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

type FolderCitationContainerProps = {
    citation: FolderCitation
}

export default function FolderCitationContainer({ citation } : FolderCitationContainerProps) {
    const { folders } = useSelector((state: RootState) => state.folderNotes);
    const navigate = useNavigate();
    
    const handleNavigation = () => {
        const folder = folders.find(f => f.id === citation.folderId);
        const folderId = `${folder!.name.toLowerCase().replace(/\s+/g, "-")}-${folder!.id}`;
        navigate(`/Folder/${folderId}`);
    }
    
    return (
        <div
            onClick={handleNavigation}
            className="cursor-pointer max-w-[200px] rounded-xl px-3 py-2 bg-secondary-container hover:bg-secondary-container/80 transition-colors text-on-secondary-container flex items-center gap-2 text-xs"
        >
            <FolderIcon size={16} className="shrink-0 text-on-secondary-container" />
            <p className="whitespace-normal break-words">{citation.text}</p>
        </div>
    )
}
