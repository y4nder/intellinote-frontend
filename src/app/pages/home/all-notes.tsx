import NoteCard from "@/components/notecard/NoteCard";
import { RootState } from "@/redux/store";
import { Note } from "@/types/note";
import { useSelector } from "react-redux";


export default function AllNotes() {
    const {notes} = useSelector((state: RootState) => state.folderNotes);
    return (
        <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-hard">
                All Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                {notes.map((note: Note) => (
                    <NoteCard key={note.id} note={note} />
                ))}
            </div>
        </div>
    )
}
