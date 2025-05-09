import { setSelectedNote } from "@/redux/slice/folder-note"
import { Note } from "@/types/note"
import { ArrowRightIcon, File } from "lucide-react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { Button } from "../ui/button"


type SearchNoteItemProps = {
    note: Note,
    onSelect: () => void
}

export default function SearchNoteItem({note, onSelect} : SearchNoteItemProps) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const handleNavigate = () => {
        dispatch(setSelectedNote(null));
        const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
        const path = `/note/${noteId}`;
        navigate(path);
    };

    const handleNavigateToSnippet = () => {
        dispatch(setSelectedNote(null));
        const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
        const blockId = note.snippet?.id;
        const path = `/note/${noteId}/${blockId}`
        navigate(path);
    }
      

    return (
        <div
            className={`flex items-center gap-3 px-4 py-3 hover:bg-primary/20 cursor-pointer`}
            onClick={() => {
                console.log("Selected note:", note)
                handleNavigate();
                onSelect();
            }}
        >
            <File className="h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex-1 min-w-0">
                <div className="font-medium text-sm">{note.title}</div>
                <p className="text-gray-600 truncate text-xs max-w-dvw">
                    {note.snippet ? (
                        <>
                            {note.snippet.text}
                        </>
                    ): (
                        <>
                            {note.summary}
                        </>
                    )}
                </p>
            </div>
            <div className="flex items-center">
                { note.snippet && (
                    <Button 
                        className="text-[10px] pl-4 py-4 cursor-pointer bg-primary-fixed hover:bg-surface"
                        onClick={(e) => {
                            e.stopPropagation();
                            handleNavigateToSnippet();
                            onSelect();
                        }}
                    >
                        Snippet
                        <ArrowRightIcon width={4} className="hover:translate-x-2 transition-all duration-300"/>
                    </Button>
                ) }
                {/* <div className="text-xs text-muted-foreground">{getDisplayTime(note.updatedAt || note.createdAt)}</div> */}
            </div>
        </div>
    )
}
