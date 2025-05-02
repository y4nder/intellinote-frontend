import FolderCard from "@/components/foldercard/FolderCard";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { useSelector } from "react-redux";

export default function Folders() {
    const {folders} = useSelector((state: RootState) => state.folderNotes);
    return (
        <div>
            <h2 className="text-3xl font-bold mb-4 text-primary-hard">
                All Folders
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {folders.map((folder: Folder) => (
                    <FolderCard key={folder.id} folder={folder} />
                ))}
            </div>
        </div>
    )
}