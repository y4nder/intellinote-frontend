import FolderCard from "@/components/foldercard/FolderCard";
import NoteCard from "@/components/notecard/NoteCard";
import { RootState } from "@/redux/store";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { useDispatch, useSelector } from "react-redux";
import NoteGridSkeleton from "./skeletons/note-grid-skeleton";
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import { setNotes } from "@/redux/slice/folder-note";
import { useEffect } from "react";


export default function Home() {
    const {folders, notes} = useSelector((state: RootState) => state.folderNotes);
    const {data, isLoading} =  useGetUserNotes();
    const dispatch = useDispatch();

    useEffect(() => {
        if(data) {
            console.log("data arrived");
            dispatch(setNotes(data.notes));
        }
    }, [data, dispatch])

    return (
        <>
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4 text-primary-hard">
                    Recent Notes
                </h2>
                {notes.length === 0 || isLoading? (
                    <NoteGridSkeleton/>
                ): (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 xl:grid-cols-4">
                    {notes.map((note: Note) => (
                    <NoteCard key={note.id} note={note} />
                    ))}
                </div>
                )
                }
                
            </div>

            {/* Recent Folders Section */}
            <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4 text-primary-hard ">
                    Recent Folders
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {folders.map((folder: Folder) => (
                        <FolderCard key={folder.id} folder={folder} />
                    ))}
                </div>
            </div>
        </>
    )
}
