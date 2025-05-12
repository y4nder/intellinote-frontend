// import { setSelectedNote } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { NoteCitation } from "@/types/chatMessage"
import { NotebookIcon } from "lucide-react";
import { 
    // useDispatch, 
    useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

type NoteCitationProps = {
    citation: NoteCitation
}

export default function NoteCitationContainer({citation} : NoteCitationProps) {
    const navigate = useNavigate();
    const { notes } = useSelector((state: RootState) => state.folderNotes);
    // const dispatch = useDispatch();


    const handleNavigateToSnippet = () => {
        const note = notes.find(n => n.id === citation.noteId);
        const noteId = `${note!.title.toLowerCase().replace(/\s+/g, "-")}-${note!.id}`;
        const blockId = citation.snippetId;
        const path = `/note/${noteId}/${blockId}`
        navigate(path);
    }

    return (
        <div
            onClick={handleNavigateToSnippet}
            className="cursor-pointer max-w-[200px] rounded-xl px-3 py-2 bg-secondary-container hover:bg-secondary-container/80 transition-colors text-on-secondary-container flex items-center gap-2 text-xs"
        >
            <NotebookIcon size={16} className="shrink-0 text-on-secondary-container self-start" />
            <p className="whitespace-normal line-clamp-4">{citation.text}</p>
        </div>
    )
}

