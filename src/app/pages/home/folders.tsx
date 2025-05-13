import FolderCard from "@/components/foldercard/FolderCard";
import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { useSelector } from "react-redux";

export default function Folders() {
    const {folders} = useSelector((state: RootState) => state.folderNotes);
    return (
        <div className="px-6 pb-6">
            <div className=" pb-4">
                <BreadcrumbUi/>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-primary-hard dark:text-primary-fixed-dim">
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