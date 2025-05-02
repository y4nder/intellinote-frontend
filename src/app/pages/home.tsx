import FolderCard from "@/components/foldercard/FolderCard";
import NoteCard from "@/components/notecard/NoteCard";
import TopBar from "@/components/topbar/topbar";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { useSelector } from "react-redux";


export default function Home() {
    const {folders, notes} = useSelector((state: RootState) => state.folderNotes);
    return (
        <>
            <TopBar/>
            {/* Recent Notes Section */}
            <div className="p-6">
                <div className="mb-8">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Recent Notes
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {notes.map((note: Note) => (
                        <NoteCard key={note.id} note={note} />
                        ))}
                    </div>
                </div>

                {/* Recent Folders Section */}
                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Recent Folders
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {folders.map((folder: Folder) => (
                        <FolderCard key={folder.id} folder={folder} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
